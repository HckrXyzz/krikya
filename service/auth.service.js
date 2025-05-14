import { apiHelper, locale, sharedFunction } from "@/util";

import { SESSION, SHARED } from "@/constants/constants";
import router from "@/router";
import { ROUTE_URL } from "@/constants/route.constants";

export const authService = {
    login,
    logout,
    refresh,
    validateToken,
    getGoogleMfaQrCode,
    verifyMfaCode,
    skipRegisterMfa,
    clearAuthData
}

//API urls
const AUTH = {
    LOGIN: '/token',
    LOGOUT: '/logout',
    REFRESH: '/refresh',
    VALIDATE_TOKEN: '/validate-token',
    VALIDATE_MFA: '/mfa/validate',
    MFA_QR_CODE: '/mfa/qr-code',
    MFA_SKIP_REGISTER: '/mfa/skip-register',
}

function login(username, password, fp, turnstileResponse) {
    localStorage.clear()
    sessionStorage.clear()
    username = username.toLowerCase()

    const requestOptions = {
        username: username,
        password: password,
        fp: fp,
        domain: window.location.origin,
        tsResponse: turnstileResponse,
        platform_info: sharedFunction.getPlatformInfo()
    }

    return apiHelper()
        .post(`${AUTH.LOGIN}`, requestOptions)
        .then(data => {
            let d = data.data

            if (d.access_token) {
                localStorage.setItem(SESSION.ROLE_NAME, d.role)
                localStorage.setItem(SESSION.USERNAME, username)
                localStorage.setItem(SESSION.TOKEN, d.access_token)
                localStorage.setItem(SESSION.TOKEN_EXPIRY, getExpireTimeInMiliseconds(d.expires_in) + "")
                localStorage.setItem(SESSION.USER_MODULES, JSON.stringify(d.modules))
                if (d.currency_support != null && d.currency_support.length > 0) {
                    let defaultCurrency = d.currency_support[0]
                    locale.setUserCurrency(defaultCurrency)
                    locale.setUserCurrencyCode(defaultCurrency)
                } else {
                    locale.setUserCurrency(process.env.VUE_APP_DEFAULT_CURRENCY)
                    locale.setUserCurrencyCode(process.env.VUE_APP_DEFAULT_CURRENCY)
                }
            }
            return data
        })
}

/**
 * @param expiresIn - Expire time in minutes
 * @returns {number}
 */
function getExpireTimeInMiliseconds(expiresIn) {
    // All calculation in here are in miliseconds
    const now = new Date().getTime()

    // Allow some time before the actual expire time for API to fire and respond, and to retry if fail, 5 minutes will do?
    let bufferTimeToRefresh = 5 * 60 * 1000 // 5 minutes -> miliseconds
    const tokenExpireTime = new Date(now + parseInt(expiresIn) * 60 * 1000 - bufferTimeToRefresh).getTime()

    // System configure time interval to refresh token and invalidate old token, regardless whether token expired or not
    const refreshTokenTime = new Date(now + parseInt(SHARED.TOKEN_EXPIRY) * 1000).getTime()

    // Use the time that comes first
    return Math.min(tokenExpireTime, refreshTokenTime)
}

function validateToken(options = {}){
    return apiHelper(null, true, options)
        .get(`${AUTH.VALIDATE_TOKEN}`)
}

function getGoogleMfaQrCode() {
    return apiHelper()
        .get(`${AUTH.MFA_QR_CODE}`)
}

function verifyMfaCode(mfaCode, registerKey) {
    const requestOptions = {
        mfa_code: mfaCode,
        register_key: registerKey
    }
    return apiHelper()
        .post(`${AUTH.VALIDATE_MFA}`, requestOptions)
        .then(res => {
            handleMfaResponse(res)
            return res
        })
}
function skipRegisterMfa() {
    return apiHelper()
        .post(`${AUTH.MFA_SKIP_REGISTER}`)
        .then(res => {
            handleMfaResponse(res)
            return res
        })
}

function handleMfaResponse(res) {
    let data = res.data

    // Save the upgraded access_token
    if (res.success && data.access_token) {
        localStorage.setItem(SESSION.TOKEN, data.access_token)
        localStorage.setItem(SESSION.TOKEN_EXPIRY, getExpireTimeInMiliseconds(data.expires_in) + "")
    }
}

let isRefreshingToken = false
let refreshTokenPromise = null
let resetFlagTimer = null
function refresh(options) {

    // Keep spamming refresh will invalidate the new token as well, so don't spam.
    // Regardless of success, or fail, only allow retry after minimum 15 seconds from
    // server last respond, or if server no response, retry only after 30 seconds
    if (!isRefreshingToken) {
        isRefreshingToken = true

        // Reset flag if server fail to respond in 30 seconds
        resetFlagTimer = setTimeout(() => {
            isRefreshingToken = false
        }, 30 * 1000)

        refreshTokenPromise = apiHelper(null, true, options)
          .post(`${AUTH.LOGIN}${AUTH.REFRESH}`)
          .then(data => {
              let d = data.data
              if (d.access_token) {
                  localStorage.setItem(SESSION.TOKEN, d.access_token)
                  localStorage.setItem(SESSION.TOKEN_EXPIRY, getExpireTimeInMiliseconds(d.expires_in) + "")
                  localStorage.setItem(SESSION.USER_MODULES, JSON.stringify(d.modules))
              }
              return data
          })
          .finally(() => {
              if (resetFlagTimer) {
                  clearTimeout(resetFlagTimer)
              }

              // Release lock after 15 seconds
              setTimeout(() => {
                  isRefreshingToken = false
              }, 15 * 1000)
          })
        return refreshTokenPromise
    }
    return Promise.reject({})
}

let logoutTimer = null
function logout() {
    if (!logoutTimer) {
        // Simple timer to avoid spamming logout
        logoutTimer = setTimeout(() => {
            logoutTimer = null
        }, 5000)
        if (localStorage.getItem(SESSION.TOKEN)) {
            return apiHelper(null, true, { doNotRetryOn401: true }).post(`${AUTH.LOGOUT}`).then(() => {

            })
            .finally(() => {
                clearAuthData()
                router.push(`/${ROUTE_URL.LOGIN}`)
            })
        } else {
            clearAuthData()
            router.push(`/${ROUTE_URL.LOGIN}`)
        }
    }
}

function clearAuthData() {
    let lang = locale.getUserLang();
    localStorage.clear()
    sessionStorage.clear()
    locale.setUserLang(lang);
}