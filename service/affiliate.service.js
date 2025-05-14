import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'
import { AffiliateReportMode } from '@/constants/enums'
import { AffiliateTypeApprovalStatus } from '@/constants/enums'

export const affiliateService = {
  getAffiliateList,
  getAffiliateTypeList,
  getAffiliateTierList,
  createAffiliate,
  updateAffiliateStatus,
  getAffiliate,
  getAffiliateDownline,

  getAffiliateMemberReport,
  getAffiliateGameReport,
  getAffiliateGameReportInDetails,
  getAffiliateAgentReport,

  getAffiliateAdjustmentList,
  getAffiliateAdjustment,
  getAffiliateAdjustmentStatusList,
  getAffiliateAdjustmentCategoryList,
  createAffiliateAdjustment,
  batchCreateAffiliateAdjustment,
  updateAffiliateAdjustment,

  getAffiliateConfigList,
  updateAffiliateConfig,

  getAffiliateTypeApprovalList,
  getAffiliateTypeApprovalLog,
  getAffiliateTypeApproval,
  getAffiliateTypeApprovalStatusList,
  createAffiliateTypeApproval,
  batchCreateAffiliateTypeApproval,
  updateAffiliateTypeApproval,

  updateAffiliateOneTimeBonus,
  getAffiliateBonusDetail,
  getAffiliateBonusList,
  getAffiliateReferral,
  serveAffiliateBonusTicket
}

//API urls
const AFFILIATE = {
  AFFILIATE: '/affiliate',
  MEMBER: 'member',
  LIST: 'list',
  TYPE: 'type',
  TIER: 'tier',
  REPORTS: 'reports',
  REPORT: 'report',
  DETAILS: 'details',
  PRODUCTS: 'products',
  AGENTS: 'agents',
  ADJUSTMENT: 'adjustment',
  BATCH: 'batch',
  STATUS: 'status',
  CATEGORY: 'category',
  CONFIG: 'configuration',
  AGENT: 'agent',
  APPROVAL: 'approval',
  LOG: 'log',
  BONUS: 'bonus',
  BONUS_DETAIL: 'bonus/detail',
  BONUS_LIST: 'bonus/list',
  REFERRAL: 'referral',
  SERVE_TICKET: 'serve/ticket'
}

/* Management */
function getAffiliateList(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      membercode: filter.memberCode,
      referral_code: filter.affiliateCode,
      referrer_membercode: filter.referrerMemberCode,
      referrer_affcode: filter.referrerAffCode,
      affiliate_type: filter.type,
      is_active: filter.status,
      currency: filter.currency,
      register_start_date: filter.registerStartDate == null ? '' : filter.registerStartDate,
      register_end_date: filter.registerEndDate == null ? '' : filter.registerEndDate
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}`, requestOptions)
}

function getAffiliateTypeList() {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${AFFILIATE.TYPE}`)
}

function getAffiliateTierList() {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${AFFILIATE.TIER}`)
}

function createAffiliate(data) {
  let provinceName = data.province.split(';')[1]
  let nationalityName = data.nationality.split(';')[1]
  let placeOfBirthName = data.placeOfBirth.split(';')[1]
  let countryCode = data.country.split(';')[0]

  const requestBody = {
    membercode: data.memberCode.toLowerCase(), //m
    password: data.password, //m
    //surname: data.surname,
    //name: data.name,
    gender: data.gender,
    mobile: data.mobile, //m
    email: data.email, //m
    line: data.line.toLowerCase(),
    date_of_birth: data.dateOfBirth,
    place_of_birth: placeOfBirthName,
    address: `${data.address1}, ${data.address2}`,
    postcode: data.postcode,
    province: provinceName,
    country: countryCode,
    nationality: nationalityName,
    type_id: data.type, //m
    tier_id: data.tier, //m
    currency: data.currency, //m
    referral_code: data.referrerAffCode.toLowerCase(),
    registration_site: data.registrationSite, //m, code
    language: data.language //m
    //domain: 'dummy.domain' //m
  }

  return apiHelper().post(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}`, requestBody)
}

function updateAffiliateStatus(data) {
  let member = data.memberCode ? data.memberCode : data.id

  const requestBody = {
    is_active: data.status,
    field_remark: data.remarks
  }

  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${member}/${AFFILIATE.STATUS}`, requestBody)
}

function getAffiliate(id) {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${id}`)
}

function getAffiliateDownline(filter) {
  let downlineStatus = filter.status.length == 1 ? filter.status[0] : SHARED.DEFAULT_ALL_VALUE

  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      is_member_active: downlineStatus
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${filter.affiliateId}/${AFFILIATE.LIST}`, requestOptions)
}

/* Report */
function getAffiliateMemberReport(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      mode: AffiliateReportMode.DATE,
      report_start_date: filter.startDate == null ? '' : filter.startDate,
      report_end_date: filter.endDate == null ? '' : filter.endDate
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.MEMBER}/${filter.affiliateId}/${AFFILIATE.REPORTS}`, requestOptions)
}

function getAffiliateGameReport(filter, isGameDetailsSum = false) {
  let apiParams = {
    page: filter.pageNumber,
    size: filter.pageSize,
    mode: AffiliateReportMode.DATE,
    membercode: filter.affiliateMemberCode,
    report_start_date: filter.startDate == null ? '' : filter.startDate,
    report_end_date: filter.endDate == null ? '' : filter.endDate
  }

  if (filter.gameType && !isGameDetailsSum) {
    //game details report
    apiParams.product_type = filter.gameType
  } else if (filter.affiliateDownlineMemberCode) {
    //agent details report
    apiParams.membercode = filter.affiliateDownlineMemberCode
  }

  const requestOptions = {
    params: apiParams
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.REPORT}/${AFFILIATE.PRODUCTS}`, requestOptions)
}

function getAffiliateGameReportInDetails(filter) {
  let apiParams = {
    mode: AffiliateReportMode.DATE,
    membercode: filter.affiliateMemberCode,
    report_start_date: filter.startDate == null ? '' : filter.startDate,
    report_end_date: filter.endDate == null ? '' : filter.endDate
  }

  if (filter.gameType.length > 0) {
    apiParams.product_type = filter.gameType.join(',')
  }

  const requestOptions = {
    params: apiParams
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.REPORT}/${AFFILIATE.PRODUCTS}/${AFFILIATE.DETAILS}`, requestOptions)
}

function getAffiliateAgentReport(filter) {
  let apiParams = {
    page: filter.pageNumber,
    size: filter.pageSize,
    mode: AffiliateReportMode.DATE,
    upline: filter.affiliateMemberCode,
    report_start_date: filter.startDate == null ? '' : filter.startDate,
    report_end_date: filter.endDate == null ? '' : filter.endDate
  }

  if (filter.type) {
    apiParams.affiliate_type = filter.type
  }

  if (filter.status >= 0) {
    apiParams.is_active = filter.status
  }

  const requestOptions = {
    params: apiParams
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.REPORT}/${AFFILIATE.AGENTS}`, requestOptions)
}

/* Adjustment */
function getAffiliateAdjustmentList(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      membercode: filter.memberCode,
      category: filter.category,
      start_date: filter.startDate,
      expired_date: filter.expiredDate,
      status: filter.status,
      is_full_search: !filter.isPartialSearch ? 1 : 0
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}`, requestOptions)
}

function getAffiliateAdjustment(id) {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}/${id}`)
}

function getAffiliateAdjustmentStatusList() {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}/${AFFILIATE.STATUS}`)
}

function getAffiliateAdjustmentCategoryList() {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}/${AFFILIATE.CATEGORY}`)
}

function createAffiliateAdjustment(data) {
  const requestBody = {
    membercode: data.memberCode.toLowerCase(),
    category_id: data.categoryId,
    amount: data.amount,
    remark: data.remarks
  }

  return apiHelper().post(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}`, requestBody)
}

function batchCreateAffiliateAdjustment(data) {
  return apiHelper().post(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}/${AFFILIATE.BATCH}`, data)
}

function updateAffiliateAdjustment(data) {
  const requestBody = {
    status: data.statusId,
    remark: data.statusRemarks
  }

  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.ADJUSTMENT}/${data.id}`, requestBody)
}

/* Configurations */
function getAffiliateConfigList() {
  const requestOptions = {
    params: {
      size: SHARED.MAX_PAGE_SIZE
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.CONFIG}`, requestOptions)
}

function updateAffiliateConfig(id, data) {
  const requestBody = {
    value: data
  }

  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.CONFIG}/${id}`, requestBody)
}

/* Type Approval */
function getAffiliateTypeApprovalList(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      membercode: filter.memberCode,
      effective_start_date: filter.startDate == null ? '' : filter.startDate,
      expired_date: filter.endDate == null ? '' : filter.endDate,
      status: filter.status == null ? SHARED.DEFAULT_ALL_VALUE : filter.status,
      from_aff_type_id: filter.currentTypeId == null ? SHARED.DEFAULT_ALL_VALUE : filter.currentTypeId
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}`, requestOptions)
}

function getAffiliateTypeApprovalLog(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      membercode: filter.memberCode
    }
  }

  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}/${AFFILIATE.LOG}`, requestOptions)
}

function getAffiliateTypeApproval(id) {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}/${id}`)
}

function getAffiliateTypeApprovalStatusList() {
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}/${AFFILIATE.STATUS}`)
}

function createAffiliateTypeApproval(data) {
  const requestBody = {
    membercode: data.memberCode.toLowerCase(),
    affiliate_type_id: data.affiliateTypeId
  }

  return apiHelper().post(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}`, requestBody)
}

function batchCreateAffiliateTypeApproval(data) {
  return apiHelper().post(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}/${AFFILIATE.BATCH}`, data)
}

function updateAffiliateTypeApproval(data) {
  const requestBody = {
    status_id: data.approvalStatus,
    remark: data.remarks
  }

  if (data.approvalStatus == AffiliateTypeApprovalStatus.APPROVED) {
    requestBody.cycle_id = data.effectiveCycle
  }

  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.AGENT}/${AFFILIATE.APPROVAL}/${data.id}/${AFFILIATE.STATUS}`, requestBody)
}

function updateAffiliateOneTimeBonus(data) {
  const requestBody = {
    min_deposit: data.min_deposit,
    min_valid_bet: data.min_valid_bet,
    upline_min_deposit: data.upline_min_deposit,
    upline_min_valid_bet: data.upline_min_valid_bet,
    min_successful_referral: data.min_successful_referral,
    affiliate_bonus_amount: data.affiliate_bonus_amount,
    downline_bonus_amount: data.downline_bonus_amount,
    turnover: data.turnover,
    admin_fee: data.admin_fee,
    unlock_bonus: data.unlock_bonus,
    currency: data.currency,
    status: data.status,
    credit_status: data.credit_status,
    expired_day: data.expired_day
  }
  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.BONUS}`, requestBody)
}

function getAffiliateBonusDetail() {
  const requestBody = {
    params: {
      currency: SHARED.DEFAULT_CURRENCY
    }
  }
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.BONUS_DETAIL}`, requestBody)
}

function getAffiliateBonusList(filter) {
  const requestBody = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      start_date: filter.start_date,
      end_date: filter.end_date,
      process_status: filter.process_status,
      membercode: filter.membercode,
      upline_membercode: filter.upline_membercode
    }
  }
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.BONUS_LIST}`, requestBody)
}

function getAffiliateReferral(filter) {
  const requestBody = {
    params: {
      membercode: filter.memberCode,
      downline: filter.memberId
    }
  }
  return apiHelper().get(`${AFFILIATE.AFFILIATE}/${AFFILIATE.REFERRAL}`, requestBody)
}

function serveAffiliateBonusTicket(data) {
  const requestBody = {
    membercode: data.memberCode
  }
  return apiHelper().patch(`${AFFILIATE.AFFILIATE}/${AFFILIATE.SERVE_TICKET}`, requestBody)
}
