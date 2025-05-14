import {apiHelper} from '@/util'
import {SHARED} from "@/constants/constants";

export const bonusService = {
    getRedirectionCategory,
    getCategoryList,
    getCategoryById,
    getBonusConfig,
    getBonusReleaseCriteriaList,
    getBonusApplyCriteriaList,
    getBonusMemberGroupList,
    addNewBonus,
    getBonusList,
    updateBonusStatus,
    updateBonusRecommendStatus,
    getBonusDetails,
    getBonusApplicantStatus,
    getBonusApplicantList,
    getBonusApplicantDetails,
    updateBonus,
    patchBonus,
    updateApplicantStatus,
    applyBonus,
    applyBatchBonus,
    getBonusListDdl,
    membersValidity,
    generateBonusCode,
    getBonusRevokeCalculation,
    getRebateList,
    createRebate,
    updateRebate,
    getRebate,
    getRebateTotalClaimed,
    getVipBonusAvailability,
    updateBonusSequence,
    getDepositTransaction,
    getOfflineBonusList,
    offlineApplyBonus,
    exportBonusApplicantList,
    createBonusExclusiveMember,
    getExclusiveMemberList,
    exportRebateTransaction,
    getSimpleBonuslist,
    updateApplicantBulkStatus
}

const BONUS = {
    REBATE_TOTAL_CLAIMED: '/claimed/all',
    REBATE_LIST: '/rebate',
    CREATE_REBATE: '/rebate/create',
    UPDATE_REBATE: '/rebate/update',
    BONUS_LIST_DDL: '/bonus/list/event',
    VIP_AVAILABILITY: 'vip_bonus_availability',
    BONUS: '/bonus',
    NEW_BONUS: '/bonus',
    BONUS_LIST: '/bonus',
    SIMPLE_BONUS_LIST: '/bonus/simple',
    CATEGORY_LIST: '/bonus/category',
    REDIRECTION_CATEGORY_LIST: '/bonus/redirectionCategory',
    CONFIG: '/bonus/config',
    RELEASE_CRITERIA_LIST: '/bonus/releasetype',
    APPLY_CRITERIA_LIST: '/bonus/membercriteria',
    MEMBER_GROUP_LIST: '/bonus/membergroup',
    STATUS: 'status',
    RECOMMEND_STATUS: 'pin',
    APPLICANT_STATUS_LIST: '/bonus/applicants/status',
    APPLICANT: '/bonus/applicants',
    APPLICANT_LIST: '/bonus/applicants',
    APPLICANT_STATUS: '/bonus/applicants',
    APPLICANT_BULK_STATUS: '/bonus/bulk/applicants',
    APPLY_BONUS: '/bonus/applicants',
    APPLY_BATCH_BONUS: '/bonus/applicants/batch',
    MEMBER_VALIDITY: '/bonus/members/validity',
    GENERATE_CODE: '/bonus/randomcode',
    REVOKE_CALCULATION: '/bonus/revokecalculation',
    SEQUENCE: 'sequence',
    TRANSACTION: 'transaction',
    EXPORT_ALL: '/export-all',
    OFFLINE: 'offline',
    OFFLINE_APPLY: 'offline/apply',
    BONUS_EXCLUSIVE: '/bonus/exclusive',
    EXCLUSIVE_MEMBER_LIST: 'exclusive/member/list',
    EXPORT_REBATE_TRANSACTION: 'bonus/rebate/export'
}

function getRebateTotalClaimed(filter) {
    const requestOptions = {
        params: {
            member_id: filter.member_id
        }
    }
    return apiHelper().get(`${BONUS.REBATE_LIST}${BONUS.REBATE_TOTAL_CLAIMED}`, requestOptions)
}

function getRebate(filter) {
    return apiHelper().get(`${BONUS.REBATE_LIST}/${filter.id}`)
}

function getRebateList(filter) {
    const requestOptions = {
        params: {
            is_active: filter.isActive,
            page: filter.pageNumber,
            size: filter.pageSize,
            vip_level: filter.vip_level_id,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${BONUS.REBATE_LIST}`, requestOptions)
}

function createRebate(filter) {
    const requestOptions = {
        max_cap_amount: filter.max_cap_amount,
        rebate_provider: filter.rebate_provider,
        rebate_vip_percentage: filter.rebate_vip_percentage,
        rebate_vip_level: filter.rebate_vip_level,
        filtered_tag: filter.filtered_tag,
        frequency_tag: filter.frequency_tag,
        currency: filter.currency
    }
    return apiHelper().post(`${BONUS.CREATE_REBATE}`, requestOptions)
}

function updateRebate(filter) {
    const requestOptions = {
        max_cap_amount: filter.max_cap_amount,
        rebate_provider: filter.rebate_provider,
        rebate_vip_percentage: filter.rebate_vip_percentage,
        is_active: filter.is_active,
        rebate_vip_level: filter.rebate_vip_level,
        filtered_tag: filter.filtered_tag,
        frequency_tag: filter.frequency_tag,
        currency: filter.currency
    }
    return apiHelper().patch(`${BONUS.UPDATE_REBATE}/${filter.id}`, requestOptions)
}

function getBonusListDdl(filter) {
    const requestOptions = {
        params: {
            name: filter.bonusName,
            bonus_code: filter.bonusCode,
            bonus_mode: filter.bonusMode,
            currency: filter.bonusCurrency,
            target_wallet: filter.bonusWallet,
            categoryId: filter.bonusCategory,
            start_time: filter.bonusStartDate == null ? '' : filter.bonusStartDate,
            end_time: filter.bonusEndDate == null ? '' : filter.bonusEndDate,
            is_active: filter.isActive,
            provider: filter.bonusProvider
        }
    }
    return apiHelper().get(`${BONUS.BONUS_LIST_DDL}`, requestOptions)
}

async function getCategoryList() {
    return apiHelper().get(`${BONUS.CATEGORY_LIST}`)
}

function getRedirectionCategory() {
    return apiHelper().get(`${BONUS.REDIRECTION_CATEGORY_LIST}`)
}
function getCategoryById(categoryId) {
    return apiHelper().get(`${BONUS.CATEGORY_LIST}`, {params: {id: categoryId}})
}

function getBonusConfig() {
    return apiHelper().get(`${BONUS.CONFIG}`)
}

function getBonusReleaseCriteriaList() {
    return apiHelper().get(`${BONUS.RELEASE_CRITERIA_LIST}`)
}

function getBonusApplyCriteriaList() {
    return apiHelper().get(`${BONUS.APPLY_CRITERIA_LIST}`)
}

function getBonusMemberGroupList() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${BONUS.MEMBER_GROUP_LIST}`, requestOptions)
}

function getBonusList(filter) {
    const requestOptions = {
        params: {
            name: filter.bonusName,
            bonus_code: filter.bonusCode,
            bonus_mode: filter.bonusMode,
            currency: filter.bonusCurrency,
            target_wallet: filter.bonusWallet,
            categoryId: filter.bonusCategory && filter.bonusCategory.join(','),
            start_time: filter.bonusStartDate == null ? '' : filter.bonusStartDate,
            end_time: filter.bonusEndDate == null ? '' : filter.bonusEndDate,
            is_active: filter.isActive,
            provider: filter.bonusProvider,
            is_pinable: filter.isRecommeded,
            page: filter.pageNumber,
            size: filter.pageSize
        }
    }
    return apiHelper().get(`${BONUS.BONUS_LIST}`, requestOptions)
}

function getSimpleBonuslist(filter){
    const requestOptions = {
        params: {
            currency: filter.currency
        }
    }

    return apiHelper().get(`${BONUS.SIMPLE_BONUS_LIST}`, requestOptions)
}

function getBonusApplicantList(filter) {
    const requestOptions = {
        params: {
            ref_id: filter.bonusApplicantId,
            bonus_id: filter.bonusId,
            bonus_name: filter.bonusName,
            bonus_mode: filter.bonusMode,
            bonus_code: filter.bonusCode,
            currency: filter.bonusCurrency,
            target_wallet: filter.bonusWallet,
            apply_start_time: filter.bonusApplyStartDate == null ? '' : filter.bonusApplyStartDate,
            apply_end_time: filter.bonusApplyEndDate == null ? '' : filter.bonusApplyEndDate,
            membercode: filter.memberCode,
            memberId: filter.memberId,
            page: filter.pageNumber,
            size: filter.pageSize,
            category_ids: filter.bonusCategory && filter.bonusCategory.join(','),
            status_list: '[' + filter.bonusApplicantStatus + ']',
            is_full_search: !filter.isPartialSearch ? 1 : 0
        }
    }
    return apiHelper().get(`${BONUS.APPLICANT_LIST}`, requestOptions)
}

function exportBonusApplicantList(filter) {
    const requestOptions = {
        params: {
            ref_id: filter.bonusApplicantId,
            bonus_id: filter.bonusId,
            bonus_name: filter.bonusName,
            bonus_mode: filter.bonusMode,
            bonus_code: filter.bonusCode,
            currency: filter.bonusCurrency,
            target_wallet: filter.bonusWallet,
            apply_start_time: filter.bonusApplyStartDate == null ? '' : filter.bonusApplyStartDate,
            apply_end_time: filter.bonusApplyEndDate == null ? '' : filter.bonusApplyEndDate,
            membercode: filter.memberCode,
            memberId: filter.memberId,
            page: filter.pageNumber,
            size: filter.pageSize,
            category_ids: filter.bonusCategory && filter.bonusCategory.join(','),
            status_list: '[' + filter.bonusApplicantStatus + ']',
            is_full_search: !filter.isPartialSearch ? 1 : 0
        }
    }
    return apiHelper().get(`${BONUS.APPLICANT_LIST}${BONUS.EXPORT_ALL}`, requestOptions)
}

function getBonusApplicantDetails(id) {
    return apiHelper().get(`${BONUS.APPLICANT}/${id}`)
}

function getVipBonusAvailability(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency
        }
    }
    return apiHelper().get(`${BONUS.BONUS}/${BONUS.VIP_AVAILABILITY}`, requestOptions)
}

function addNewBonus(bonusObj) {
    const requestBody = {
        category: bonusObj.category_id,
        member_group: bonusObj.memberGroup,
        member_group_event: bonusObj.memberGroupEvent,
        vip_tier_member_group: bonusObj.vipTierMemberGroup,
        localization: bonusObj.formatLocalization,
        desc_localization: bonusObj.formatDescLocalization,
        depositLocalization: bonusObj.depositLocalization,
        name: bonusObj.name,
        description: bonusObj.description,
        bonus_code: bonusObj.code,
        start_time: bonusObj.startDate,
        end_time: bonusObj.endDate,
        apply_method: bonusObj.applyMethod,
        approval_method: bonusObj.approveMethod,
        currency: bonusObj.currency,
        limit_max_applicant: bonusObj.limit_max_applicant,
        limit_single_applicant: bonusObj.limit_single_applicant,
        use_release_tiers: bonusObj.use_release_tiers,
        use_release_event_tiers: bonusObj.use_release_event_tiers,
        use_vip_release_tiers: bonusObj.use_vip_release_tiers,
        max_applicant: bonusObj.applicantLimit || null,
        max_apply_per_applicant: bonusObj.singleApplicantLimit || null,
        turnover_multiplier: bonusObj.turnover_multiplier,
        turnover_formula: bonusObj.turnover_formula,
        frequency: bonusObj.frequency,
        frequency_options: bonusObj.frequencyOptions,
        deposit_amount: bonusObj.deposit_amount || 0,
        release_type: bonusObj.release_type || 0,
        redirection :bonusObj.redirection || 0,
        amount_give: bonusObj.amount_give || 0,
        percent_give: bonusObj.percent_give || 0,
        maximum_amount: bonusObj.maximum_amount || 0,
        sorting: bonusObj.sorting,
        deposit_required: bonusObj.deposit_required || false,
        sequence: 1,
        is_scheduled: bonusObj.isScheduled || false,
        scheduled_list: bonusObj.scheduledList || [],
        scheduled_start_time: bonusObj.scheduled_start_time || null,
        scheduled_end_time: bonusObj.scheduled_end_time || null,
        is_exclusive: bonusObj.is_exclusive || false,
        exclusive_member: bonusObj.exclusive_member || [],
        is_block_provider: bonusObj.is_block_provider || false,
        block_provider: bonusObj.block_provider || [],
        use_as_inbox_bonus: bonusObj.use_as_inbox_bonus || false,
        is_lose_rebate_level: bonusObj.is_lose_rebate_level || false,
        lose_rebate_level: bonusObj.lose_rebate_level || [],
        lose_rebate_provider: bonusObj.lose_rebate_provider || null,
        lose_rebate_game_type: bonusObj.lose_rebate_game_type || null,
        lose_rebate_apply_frequency: bonusObj.frequency,
        lose_rebate_apply_weekly_time: bonusObj.lose_rebate_apply_weekly_time || null,
        lose_rebate_exclude_tag: bonusObj.lose_rebate_exclude_tag || null
    }
    return apiHelper().post(`${BONUS.NEW_BONUS}`, requestBody)
}

async function membersValidity(predefined_member) {
    const requestBody = {
        members: predefined_member
    }

    return apiHelper().post(`${BONUS.MEMBER_VALIDITY}`, requestBody)
}

function updateBonus(bonusObj) {
    const requestBody = {
        category_id: bonusObj.category_id,
        member_group: bonusObj.memberGroup,
        member_group_event: bonusObj.memberGroupEvent,
        vip_tier_member_group: bonusObj.vipTierMemberGroup,
        localization: bonusObj.formatLocalization,
        desc_localization: bonusObj.formatDescLocalization,
        depositLocalization: bonusObj.depositLocalization,
        name: bonusObj.name,
        description: bonusObj.description,
        bonus_code: bonusObj.code,
        start_time: bonusObj.startDate,
        end_time: bonusObj.endDate,
        apply_method: bonusObj.applyMethod,
        approval_method: bonusObj.approveMethod,
        currency: bonusObj.currency,
        limit_max_applicant: bonusObj.limit_max_applicant,
        limit_single_applicant: bonusObj.limit_single_applicant,
        use_release_tiers: bonusObj.use_release_tiers,
        use_release_event_tiers: bonusObj.use_release_event_tiers,
        use_vip_release_tiers: bonusObj.use_vip_release_tiers,
        max_applicant: bonusObj.applicantLimit,
        max_apply_per_applicant: bonusObj.singleApplicantLimit,
        turnover_multiplier: bonusObj.turnover_multiplier,
        turnover_formula: bonusObj.turnover_formula,
        frequency: bonusObj.frequency,
        frequency_options: bonusObj.frequencyOptions,
        deposit_amount: bonusObj.deposit_amount,
        release_type: bonusObj.release_type,
        redirection :bonusObj.redirection || 0,
        amount_give: bonusObj.amount_give,
        percent_give: bonusObj.percent_give,
        maximum_amount: bonusObj.maximum_amount,
        sorting: bonusObj.sorting,
        is_scheduled: bonusObj.isScheduled,
        scheduled_list: bonusObj.scheduledList,
        scheduled_start_time: bonusObj.scheduled_start_time,
        scheduled_end_time: bonusObj.scheduled_end_time,
        is_exclusive: bonusObj.is_exclusive,
        exclusive_member: bonusObj.exclusive_member,
        is_block_provider: bonusObj.is_block_provider,
        block_provider: bonusObj.block_provider,
        use_as_inbox_bonus: bonusObj.use_as_inbox_bonus || false,
        is_lose_rebate_level: bonusObj.is_lose_rebate_level || false,
        lose_rebate_level: bonusObj.lose_rebate_level || null,
        lose_rebate_provider: bonusObj.lose_rebate_provider || null,
        lose_rebate_game_type: bonusObj.lose_rebate_game_type || null,
        lose_rebate_apply_frequency: bonusObj.frequency,
        lose_rebate_apply_weekly_time: bonusObj.lose_rebate_apply_weekly_time || null,
        lose_rebate_exclude_tag: bonusObj.lose_rebate_exclude_tag || null
    }
    console.log(requestBody)
    return apiHelper().put(`${BONUS.BONUS}/${bonusObj.id}`, requestBody)
}

function patchBonus(bonusObj) {
    const requestBody = {
        category_id: bonusObj.category_id,
        localization: bonusObj.formatLocalization,
        desc_localization: bonusObj.formatDescLocalization,
        name: bonusObj.name,
        description: bonusObj.description,
    }
    console.log(requestBody)
    return apiHelper().put(`${BONUS.BONUS}/${bonusObj.id}`, requestBody)
}

function updateBonusStatus(id, status) {
    const requestBody = {
        is_active: status
    }
    return apiHelper().patch(`${BONUS.BONUS}/${id}/${BONUS.STATUS}`, requestBody)
}

function updateBonusRecommendStatus(id, status) {
    const requestBody = {
        is_pinable: status
    }
    return apiHelper().patch(`${BONUS.BONUS}/${id}/${BONUS.RECOMMEND_STATUS}`, requestBody)
}

async function getBonusDetails(id) {
    return apiHelper().get(`${BONUS.BONUS}/${id}`)
}

function getBonusApplicantStatus() {
    return apiHelper().get(`${BONUS.APPLICANT_STATUS_LIST}`)
}

function updateApplicantStatus(id, status, givenAmount, remark) {
    const requestBody = {
        status_id: status,
        bonus_given_amount: givenAmount,
        remark: remark
    }
    return apiHelper().patch(`${BONUS.APPLICANT_STATUS}/${id}`, requestBody)
}

function updateApplicantBulkStatus(decideObj) {
    return apiHelper().patch(`${BONUS.APPLICANT_BULK_STATUS}`, decideObj)
}

function applyBonus(applyBonus) {
    const requestBody = {
        bonus_id: applyBonus.bonusId,
        membercode: applyBonus.memberCode,
        member_id: applyBonus.memberId,
        bonus_code: applyBonus.bonusCode,
        fund_in_amount: applyBonus.transactionAmount,
        fund_in_trx_id: applyBonus.transactionId,
        deposit_amount: applyBonus.depositAmount
    }
    return apiHelper().post(`${BONUS.APPLY_BONUS}`, requestBody)
}

function applyBatchBonus(bonusBatchObj) {
    return apiHelper().post(`${BONUS.APPLY_BATCH_BONUS}`, bonusBatchObj)
}

function generateBonusCode(bonusCodeObj) {
    const requestOptions = {
        params: {
            prefix: bonusCodeObj.prefix,
            amount: bonusCodeObj.totalCodeRequired,
            total_length: bonusCodeObj.totalLength
        }
    }
    return apiHelper().get(`${BONUS.GENERATE_CODE}`, requestOptions)
}

function updateBonusSequence(obj) {
    let bonusId = obj.id
    let requestBody = {
        sequence: obj.sequence
    }
    return apiHelper().patch(`${BONUS.BONUS}/${bonusId}/${BONUS.SEQUENCE}`, requestBody)
}

function getDepositTransaction(filter) {
    const requestBody = {
        params: {
            membercode: filter.memberCode
        }
    }
    return apiHelper().get(`${BONUS.BONUS}/${BONUS.TRANSACTION}`, requestBody)
}

async function getBonusRevokeCalculation(applicant) {
    return apiHelper().get(`${BONUS.REVOKE_CALCULATION}/${applicant.id}`)
}

function getOfflineBonusList(filter) {
    const requestBody = {
        params: {
            membercode: filter.memberCode
        }
    }
    return apiHelper().get(`${BONUS.BONUS}/${BONUS.OFFLINE}`, requestBody)
}

function offlineApplyBonus(bonusObj) {
    const requestBody = {
        bonus_id: bonusObj.bonus_id,
        membercode: bonusObj.membercode,
        bonus_code: bonusObj.bonus_code,
        fund_in_trx_id: bonusObj.fund_in_trx_id,
    }
    return apiHelper().post(`${BONUS.BONUS}/${BONUS.OFFLINE_APPLY}`, requestBody)
}

function createBonusExclusiveMember(exclusiveObj) {
    const requestBody = {
        bonus_id: exclusiveObj.bonus_id,
        exclusive_member: exclusiveObj.exclusive_member,
    }
    return apiHelper().post(`${BONUS.BONUS_EXCLUSIVE}`, requestBody)
}

function getExclusiveMemberList(filter) {
    const requestBody = {
        params: {
            bonus_id: filter.bonus_id,
            membercode: filter.membercode,
            page: filter.pageNumber,
            size: filter.pageSize
        }
    }
    return apiHelper().get(`${BONUS.BONUS}/${BONUS.EXCLUSIVE_MEMBER_LIST}`, requestBody)
}

function exportRebateTransaction(filter) {
    const requestOptions = {
        params: {
            bet_time_start: filter.bet_time_start == null || filter.bet_time_start == '' ? '' : filter.bet_time_start,
            bet_time_end: filter.bet_time_end == null || filter.bet_time_end == '' ? '' : filter.bet_time_end,
            claim_start_date: filter.claim_start_date == null || filter.claim_start_date == '' ? '' : filter.claim_start_date,
            claim_end_date: filter.claim_end_date == null || filter.claim_end_date == '' ? '' : filter.claim_end_date,
            claim_status: filter.claim_status,
            gameProvider: filter.gameProvider,
            game_type: filter.game_type,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${BONUS.EXPORT_REBATE_TRANSACTION}`, requestOptions)
}