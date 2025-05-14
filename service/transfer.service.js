import {apiHelper} from '@/util'

export const transferService = {
    getPendingTransaction,
    getTransactionList,
    getTypeDdlList,
    getStatusDdlList,
    getWalletDdlList,
    getTransferSummary,
    makeTransfer,
    pendingRevert,
    pendingReject,
    requeryCheck
}

const TRANSFER = {
    PENDING_TRANSACTION: '/transfer/pending',
    TRANSACTION: '/transfer/histories',
    TYPE: '/transfer/type',
    STATUS: '/transfer/status',
    WALLET: '/transfer/wallets',
    SUMMARY: '/transfer/summary',
    TRANSFER: '/transfer',
    MAKE: '/make',
    PENDING_REVERT: '/pending/refund',
    PENDING_REJECT: '/pending/reject',
    CHECK_TRANSFER: '/transfer/manualQuery'
}

function requeryCheck(filter) {
    const requestOptions = {
        params: {
            provider: filter.provider,
            trx_code: filter.trx_code
        }
    }
    return apiHelper().get(`${TRANSFER.CHECK_TRANSFER}`, requestOptions)
}

function pendingReject(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        pending_transaction_id: filter.pending_transaction_id,

    }
    return apiHelper().post(`${TRANSFER.TRANSFER}${TRANSFER.PENDING_REJECT}`, requestOptions)
}

function pendingRevert(filter) {
    const requestOptions = {
        membercode: filter.membercode,
        pending_transaction_id: filter.pending_transaction_id,

    }
    return apiHelper().post(`${TRANSFER.TRANSFER}${TRANSFER.PENDING_REVERT}`, requestOptions)
}

function getWalletDdlList() {
    return apiHelper().get(`${TRANSFER.WALLET}`)
}

function getStatusDdlList() {
    return apiHelper().get(`${TRANSFER.STATUS}`)
}

function getTypeDdlList() {
    return apiHelper().get(`${TRANSFER.TYPE}`)
}

function makeTransfer(memberId, filter) {
    const requestOptions = {
        from_wallet: filter.from_wallet,
        to_wallet: filter.to_wallet,
        amount: filter.amount
    }
    return apiHelper().post(`${TRANSFER.TRANSFER}/${memberId}${TRANSFER.MAKE}`, requestOptions)
}

function getTransferSummary(filter) {
    const requestOptions = {
        params: {
            member_id: filter.member_id
        }
    }
    return apiHelper().get(`${TRANSFER.SUMMARY}`, requestOptions)
}

function getPendingTransaction(filter) {
    const requestOptions = {
        params: {
            membercode: filter.membercode
        }
    }
    return apiHelper().get(`${TRANSFER.PENDING_TRANSACTION}`, requestOptions)
}

function getTransactionList(filter) {
    const requestOptions = {
        params: {
            membercode: filter.memberCode,
            member_id: filter.memberId,
            status: filter.status,
            type: filter.type,
            types: Array.isArray(filter.types) ? filter.types.join(',') : null,
            from_wallet: filter.fromWallet,
            to_wallet: filter.toWallet,
            start_time: filter.startDate,
            end_time: filter.endDate,
            size: filter.pageSize,
            page: filter.pageNumber,
            is_full_search: !filter.isPartialSearch ? 1 : 0,
            currency: filter.currency,
            trx_code: filter.trxCode
        }
    }
    return apiHelper().get(`${TRANSFER.TRANSACTION}`, requestOptions)
}
