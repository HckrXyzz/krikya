import {apiHelper} from '@/util'

export const withdrawalService = {
    getWithdrawalCheckList,
    serveWithdrawalCheckList,
    serveAllWithdrawalCheckList,
    getAllConditionList,
    updateWithdrawalCheckListStatus
}

const WITHDRAWAL = {
    CHECK_LIST: '/member/withdrawal'
}

function getAllConditionList(filter) {
    const requestOptions = {
        params: {
            membercode: filter.memberCode,
            member_id: filter.memberId,
            status: filter.status,
            types: filter.type,
            start_time: filter.startDate,
            end_time: filter.endDate,
            page: filter.pageNumber,
            size: filter.pageSize,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${WITHDRAWAL.CHECK_LIST}/all`, requestOptions)
}

function getWithdrawalCheckList(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        withdrawal_tix: filter.withdrawal_tix,
        trans_type: filter.trans_type
    }
    return apiHelper().post(`${WITHDRAWAL.CHECK_LIST}/check`, requestOptions)
}

function serveWithdrawalCheckList(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        trans_id: filter.trans_id,
        status: 2,
        withdrawal_tix: filter.withdrawal_tix
    }
    return apiHelper().patch(`${WITHDRAWAL.CHECK_LIST}/update`, requestOptions)
}

function serveAllWithdrawalCheckList(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        status: filter.status,
        trans_id: filter.trans_id,
        withdrawal_tix: filter.withdrawal_tix
    }
    return apiHelper().patch(`${WITHDRAWAL.CHECK_LIST}/all`, requestOptions)
}

function updateWithdrawalCheckListStatus(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        trans_id: filter.trans_id,
        status: 2,
    }
    return apiHelper().patch(`${WITHDRAWAL.CHECK_LIST}/update/status`, requestOptions)
}
