import {apiHelper, locale} from '@/util'

import {SHARED, SESSION} from '@/constants/constants'

export const smsService = {
    pullBalance
}

//API urls
const SMS = {
    PULLBALANCE: '/roku/sms/smsLog/provider/balance'
}

function pullBalance() {
    return apiHelper().get(`${SMS.PULLBALANCE}`)
}