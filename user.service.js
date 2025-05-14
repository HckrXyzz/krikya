import { apiHelper } from '@/util'
import { SESSION, SHARED } from '@/constants/constants'

export const userService = {
  changePassword,
  getUserList,
  getUser,
  resetUserLoginAttempt,
  getCurrency,
  createUser,
  updateUserStatus,
  updateUserRole,
  updateUserPassword,
  getUserCurrency,
  updateUserCurrency,
  pullUserEditLog,
  pullUserFpLog,
  getUserLoginLog
}

//API urls
const USER = {
  USER: '/roku/admin/user',
  FAILED_LOGIN_ATTEMPTS: 'login_attempts',
  PASSWORD: 'password',
  STATUS: 'status',
  ROLES: 'roles',
  CURRENCY: 'currency',
  USER_CURRENCY: 'user_currency',
  USER_CHANGE_CURRENCY: 'user_currency_change',
  EDIT_LOG: 'edit/log',
  FP_LOG: 'fingerprint',
  LOGIN_LOG: 'login_log'
}

function updateUserCurrency(data){
  const requestBody = {
    currency: data.currency
  }

  return apiHelper().patch(`${USER.USER}/${data.id}/${USER.USER_CHANGE_CURRENCY}`, requestBody)
}


function changePassword(data) {
  const requestOptions = {
    password: data.newPassword,
    old_password: data.currentPassword,
    username: localStorage.getItem(SESSION.USERNAME)
  }

  return apiHelper().patch(`${USER.USER}/${USER.PASSWORD}`, requestOptions)
}

function getUserList(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      username: filter.username,
      is_active: filter.status,
      role_id: filter.role,
      currency: SHARED.DEFAULT_CURRENCY
    }
  }

  return apiHelper().get(`${USER.USER}`, requestOptions)
}

function getUser(id) {
  return apiHelper().get(`${USER.USER}/${id}`)
}
function resetUserLoginAttempt(id) {
  return apiHelper().patch(`${USER.USER}/${id}/${USER.FAILED_LOGIN_ATTEMPTS}`)
}
function createUser(data) {
  const requestBody = {
    username: data.username.toLowerCase(),
    password: data.password,
    role_id: data.role,
    currency: data.currency,
    email: data.email.toLowerCase()
  }

  return apiHelper().post(`${USER.USER}`, requestBody)
}

function updateUserStatus(data) {
  const requestBody = {
    status: data.status
  }

  return apiHelper().patch(`${USER.USER}/${data.id}/${USER.STATUS}`, requestBody)
}

function updateUserRole(data) {
  const requestBody = {
    role_id: data.role
  }

  return apiHelper().patch(`${USER.USER}/${data.id}/${USER.ROLES}`, requestBody)
}

function updateUserPassword(data) {
  const requestBody = {
    password: data.password
  }

  return apiHelper().patch(`${USER.USER}/${data.id}/${USER.PASSWORD}`, requestBody)
}

function getCurrency() {
  return apiHelper().get(`${USER.USER}/${USER.CURRENCY}`)
}

function getUserCurrency() {
  return apiHelper().get(`${USER.USER}/${USER.USER_CURRENCY}`)
}

function pullUserEditLog(userID) {
  return apiHelper().get(`${USER.USER}/${USER.EDIT_LOG}/${userID}`)
}

function pullUserFpLog(userID) {
  return apiHelper().get(`${USER.USER}/${USER.FP_LOG}/${userID}`)
}

function getUserLoginLog(userID) {
  return apiHelper().get(`${USER.USER}/${USER.LOGIN_LOG}/${userID}`)
}
