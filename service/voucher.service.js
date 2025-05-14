import {apiHelper} from '@/util'
import {SHARED} from "@/constants/constants";

export const voucherService = {
    getVouchersList,
    createVoucher,
    patchVoucher,
    getVoucher,
    updateVoucher,
    exportVoucher,
    getTurnoverFormula,
    getVoucherListDdl,
    deactivateVoucher,
    pullExclusiveVoucherLog,
    getVoucherTag,
    getVoucherTagOption,
    addVoucherTag,
    removeVoucherTag
}

const VOUCHERS = {
    LIST: '/vouchers',
    EXPORT: 'export/list',
    EXCLUSIVE: 'exclusive',
    TURNOVER_FORMULA: 'turnover/formula',
    VOUCHER_LIST: '/bulkname/list',
    DEACTIVATE: '/deactivate/bulk',
    TAG: '/tag',
    VOUCHER_TAG: '/voucher_tag',
    ADD_TAG: '/add/tag',
    REMOVE: '/remove'
}
function getVoucherTag(id) {
    return apiHelper().get(`${VOUCHERS.LIST}${VOUCHERS.TAG}/${id}`)
}
function addVoucherTag(filter) {
    const requestOptions = {
        id: filter.id,
        tag: filter.tag
    }
    return apiHelper().post(`${VOUCHERS.LIST}${VOUCHERS.ADD_TAG}`, requestOptions)
}
async function getVoucherTagOption(id) {
    return apiHelper().get(`${VOUCHERS.LIST}${VOUCHERS.VOUCHER_TAG}/${id}`)
}
function deactivateVoucher(filter) {
    const requestOptions = {
        name: filter.name
    }
    return apiHelper().patch(`${VOUCHERS.LIST}${VOUCHERS.DEACTIVATE}`, requestOptions)
}

function pullExclusiveVoucherLog(voucherID) {
    return apiHelper().get(`${VOUCHERS.LIST}/${VOUCHERS.EXCLUSIVE}/${voucherID}`)
}

function getVoucherListDdl(filter) {
    const params = {
        currency: filter.currency
    }
    return apiHelper().get(`${VOUCHERS.LIST}${VOUCHERS.VOUCHER_LIST}`, {params})
}

function getVouchersList(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            page: filter.pageNumber,
            size: filter.pageSize,
            code: filter.code,
            is_active: filter.isActive
        }
    }
    return apiHelper().get(`${VOUCHERS.LIST}`, requestOptions)
}

function createVoucher(data) {
    return apiHelper().post(`${VOUCHERS.LIST}`, data)
}

function patchVoucher(id, data) {
    return apiHelper().patch(`${VOUCHERS.LIST}/${id}`, data)
}

function getVoucher(id) {
    return apiHelper().get(`${VOUCHERS.LIST}/${id}`)
}

function updateVoucher(id, data) {
    return apiHelper().put(`${VOUCHERS.LIST}/${id}`, data)
}

function exportVoucher(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date == null || filter.start_date == "" ? '' : filter.start_date,
            end_date: filter.end_date == null || filter.end_date == "" ? '' : filter.end_date,
            code: filter.code,
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${VOUCHERS.LIST}/${VOUCHERS.EXPORT}`, requestOptions)
}

function getTurnoverFormula() {
    return apiHelper().get(`${VOUCHERS.LIST}/${VOUCHERS.TURNOVER_FORMULA}`)
}

function removeVoucherTag(tag_id, filter) {
    return apiHelper().delete(`${VOUCHERS.LIST}${VOUCHERS.REMOVE}/${tag_id}`, { params: filter })

}