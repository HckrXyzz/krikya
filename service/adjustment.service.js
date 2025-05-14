import { apiHelper } from '@/util'
import {SHARED} from "@/constants/constants";

export const adjustmentService = {
  getList,
  getCategoryDdlList,
  getStatusDdlList,
  createSingleAdjustment,
  createBatchAdjustment,
  revokeBonus,
  update,
  getDetail
}

const ADJUSTMENT = {
  LIST: '/adjustment',
  CATEGORY_LIST: '/adjustment/category',
  STATUS: '/adjustment/status',
  ADJUSTMENT: '/adjustment',
  BATCH: '/adjustment/batch',
  REVOKE_BONUS: '/adjustment/bonus'
}

function getList(filter) {
  const requestOptions = {
    params: {
      membercode: filter.memberCode,
      member_id: filter.memberId,
      currency: SHARED.DEFAULT_CURRENCY,
      wallet_code: filter.walletCode,
      start_date: filter.startDate,
      expired_date: filter.expiredDate,
      category: filter.category,
      status: filter.status,
      size: filter.pageSize,
      page: filter.pageNumber,
      is_full_search: !filter.isPartialSearch ? 1 : 0
    }
  }
  return apiHelper().get(`${ADJUSTMENT.LIST}`, requestOptions)
}

function getDetail(id) {
  return apiHelper().get(`${ADJUSTMENT.LIST}/${id}`)
}

function getStatusDdlList() {
  return apiHelper().get(`${ADJUSTMENT.STATUS}`)
}

function getCategoryDdlList() {
  return apiHelper().get(`${ADJUSTMENT.CATEGORY_LIST}`)
}
function createSingleAdjustment(adjustmentObj) {
  const requestBody = {
    membercode: adjustmentObj.memberCode,
    amount: adjustmentObj.amount,
    wallet_code: adjustmentObj.wallet,
    category_id: adjustmentObj.category,
    remark: adjustmentObj.remark
  }

  return apiHelper().post(`${ADJUSTMENT.ADJUSTMENT}`, requestBody)
}

function createBatchAdjustment(adjustmentObj) {
  return apiHelper().post(`${ADJUSTMENT.BATCH}`, adjustmentObj.batchAdjustment)
}

function revokeBonus(id, amount, remark, suggestRevokeAmount) {
  const requestBody = {
    applicant_id: id,
    category_id: 22,
    amount: amount,
    remark: remark,
    suggest_revoke_amount: suggestRevokeAmount
  }
  return apiHelper().post(`${ADJUSTMENT.REVOKE_BONUS}`, requestBody)
}

function update(adjustmentObj) {
  const requestBody = {
    status: adjustmentObj.statusId,
    remark: adjustmentObj.statusRemark
  }

  return apiHelper().patch(`${ADJUSTMENT.LIST}/${adjustmentObj.id}`, requestBody)
}
