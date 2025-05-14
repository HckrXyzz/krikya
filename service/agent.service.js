import { apiHelper, sharedFunction } from '@/util'
import { API, SHARED } from '@/constants/constants'
import { DevicePlatform } from '@/constants/enums'

export const AgentService = {
    getAgentList,
    createAgent,
    createAgentPlayer,
    getAgentLevel,
    getAgentPeriod,
    getAgentCurrency,
    getAgentDetail,
    getAgentDownline,
    getTransactionSummary,
    adjustAgentPlayer,
    getAgentReport,
    getAgentDownlineReport,
    getAgentSummaryReport,
    createAgentRemark,
    getAgentTeamApplyList,
    agentTeamApplyRejected,
    getCommissionDetail,
    changeAgentPassword,
    getAgentCommissionReport,
    submitWithdrawal,
    getWithdrawalList,
    updateWithdrawalStatus,
    getWithdrawalDetail,
    getAdjustmentDetail,
    getAgentWalletLog,
    getAdjustmentList,
    createAgentAdjustment,
    createBatchAgentAdjustment,
    updateAdjustmentStatus,
    bulkApproveAdjustment,
    getCommissionWallet,
    getAgentUpline,
    getPayoutWallet,
    updateWalletDetail,
    requestOTP,
    getSmsOtpLog,
    getAgentBanner,
    updateTierStatus,
    getTierList,
    updateTierList,
    createTierList,
    updateDefaultCommission,
    getAgentCommissionSummaryReport,
    exportAgentWithdrawal,
    exportSummaryCommission,
    exportAgentDownline,
    updateAgentDetail,
    updatePhoneNumber,
    getAgentAuditLog,
    exportAgentFtd,
    exportAgentBalance,
    createAgentBanner,
    updateAgentBanner,
    getAgentBannerManagement,
    getAgentBannerDetail,
    updateAgentBannerStatus,
    getAgentCommissionSummaryDetail,
    getAgentForgotPasswordLog,
    getAgentAction,
    getCommissionPlanList,
    updateCommissionPlanStatus,
    createAgentCommissionPlan,
    agentOverallSummary,
    getAgentRegistrationFtd,
    requestForgotPassword,
    verifyForgotPassword,
    updateForgotPassword,
    getAvailablePayoutGateway,
    getAgentPaymentGroup,
    getRegisterBannerPageList,
    createRegisterPageBanner,
    updateRegisterPageBanner,
    getWithdrawGatewayType,
    getRegisterIpSummary,
    getRegisterIpAgent,
    flagAgentRegisterIp,
    unflagAgentRegisterIp,
    unflagMultipleAgentRegisterIp,
    exportRegisterIpAgents,
    exportRegisterIpSummary,
    getFlagIpList,
    addFlagIps,
    getAgentFlagIpConfig,
}

const AGENT = {
    LEVEL: 'level',
    OVERALL: 'overall',
    PERIOD: 'period',
    CURRENCY: 'currency',
    AGENT: 'agent',
    AGENTS: 'agents',
    DOWNLINE: 'downline',
    PLAYER: 'player',
    TRANSACTION_SUMMARY: 'transSummary',
    ADJUST: 'adjust',
    REPORT: 'report',
    AGENT_TEAM_REPORT: 'agentTeamReport',
    REMARK: 'remark',
    APPLY: 'apply/list',
    REJECT: 'failed/status',
    COMMISSION_DETAIL: 'commission/detail',
    CHANGE_PASSWORD: 'change/password',
    COMMISSION_REPORT: 'commission/report',
    SUBMIT_WITHDRAWAL: 'withdrawal',
    WITHDRAWAL_LIST: 'withdrawal/list',
    WITHDRAWAL: 'withdrawal',
    STATUS: 'status',
    DETAIL: 'detail',
    ADJUSTMENT: 'adjustment',
    WALLET_LOG: 'wallet/log',
    ADJUSTMENT_LIST: 'adjustment/list',
    COMMISSION: 'commission',
    UPLINE: 'upline',
    PAYOUT: 'payout/method',
    WALLET_DETAIL: 'update/wallet/detail',
    REQUEST_OTP: 'mobile/request',
    SMS_OTP: 'sms/log',
    BANNER: 'banner',
    TIER_STATUS: 'update/tier/status',
    TIER_LIST: 'tier/list',
    TIER_LIST_DETAIL: 'update/tier/list',
    CREATE_TIER_LIST: 'create/tier/list',
    DEFAULT_COMMISSION: 'update/default/commission',
    COMMISSION_SUMMARY_REPORT: 'commission/summary/report',
    EXPORT_WITHDRAWAL: 'withdrawal/export',
    EXPORT_FTD: 'ftd/export',
    EXPORT_SUMMARY_COMMISSION: 'commission/summary/export',
    EXPORT_DOWNLINE: 'downline/export',
    UPDATE_DETAIL: 'update/agent/detail',
    UPDATE_PHONE_NUMBER: 'update/phone/number',
    AUDIT_LOG: 'audit/log',
    EXPORT_BALANCE: 'balance/export',
    BATCH_ADJUSTMENT: 'adjustment/batch',
    REQUEST_FORGOT_PASSWORD_OTP: 'requestOtp',
    VERIFY_FORGOT_PASSWORD_OTP: 'verifyFgtPsw',
    UPDATE_FORGOT_PASSWORD: 'updateFgtPsw',
    BULK_APPROVE_ADJUSTMENT: 'adjustment/bulk/approve',
    ALL_BANNER: 'banner/all',
    CREATE_BANNER: 'banner/create',
    COMMISSION_SUMMARY_DETAIL: 'commission/summary/detail',
    FORGOT_OTP: 'agent_forgot_sms/log',
    ACTION: 'action',
    COMMISSION_PLAN_LIST: 'commission/plan/list',
    COMMISSION_PLAN: 'commission/plan',
    SUMMARY_STAT: 'summaryStat',
    REGISTRATION_FTD: 'registration/ftd',
    PAYMENT_GATEWAY: 'withdrawal/payment/gateway',
    PAYMENT_GROUP: 'payment/group',
    REGISTER_PAGE_BANNER: 'register_page_banners',
    WITHDRAWAL_GATEWAY: 'withdrawal/gateway',
    GET_REGISTER_IP_SUMMARY: 'registerIpSummary',
    GET_REGISTER_IP_MEMBERS: 'registerIpMembers',
    FLAG_REGISTER_IP: 'register_ip/flag',
    EXPORT_REGISTER_IP_MEMBERS: 'exportRegisterIpMembers',
    EXPORT_REGISTER_IP_SUMMARY: 'exportRegisterIpSummary',
    GET_FLAG_IP_LIST: 'flag_ips',
    UNFLAG_MULTIPLE: 'flag_ips/delete_multiple',
    GET_CONFIG: 'flag_ips/config',
}

function adjustAgentPlayer(filter) {
    const requestBody = {
        member_id: filter.memberId,
        agent_team: filter.agent_team
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.ADJUST}`, requestBody)
}

function getAgentList(filter) {
    const requestOptions = {
        params: {
            agent_id: filter.agentId,
            agent_masked_id: filter.agentMaskedId,
            agent_level: filter.agentLevel,
            mobile_number: filter.mobileNumber,
            is_active: filter.status,
            settlement_period: filter.settlementPeriod,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber,
            agent_tagging: filter.agentTagging
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.OVERALL}`, requestOptions)
}

function createAgent(agentObj) {
    const requestBody = {
        agent_id: agentObj.agentId,
        password: agentObj.password,
        apply_password: agentObj.apply_password,
        email: agentObj.email,
        agent_level: agentObj.agentLevel,
        real_name: agentObj.realName,
        level_group: agentObj.levelGroup,
        mobile: agentObj.mobile,
        remark: agentObj.remark,
        settlement_period: agentObj.settlementPeriod,
        currency: agentObj.currency,
        upline_id: agentObj.upperAgentId,
        commission_rate: agentObj.commission_rate,
        royalty_rate: agentObj.royalty_rate,
        deposit_transaction_fee: agentObj.deposit_transaction_fee,
        withdrawal_transaction_fee: agentObj.withdrawal_transaction_fee,
        payout_wallet: agentObj.payout_wallet,
        wallet_number: agentObj.wallet_number,
        is_tier: agentObj.is_tier,
        tier_commission: agentObj.tier_commission,
        ifsc_code: agentObj.ifsc_code,
        bank_account: agentObj.bank_account,
        nid_number: agentObj.nid_number,
        date_of_birth: agentObj.date_of_birth,
        is_negative_reset: agentObj.is_negative_reset,
        register_ip: agentObj.register_ip,
        domain: agentObj.domain,
        region: agentObj.region,
    }
    return apiHelper().post(`${AGENT.AGENT}`, requestBody)
}

function getAgentLevel(filter) {
    const requestOptions = {
        params: {
            current_level: filter.levelId
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.LEVEL}`, requestOptions)
}

function getAgentPeriod() {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.PERIOD}`)
}

function getAgentCurrency() {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.CURRENCY}`)
}

function getAgentUpline() {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.UPLINE}`)
}

function getAgentDetail(filter) {
    const requestOptions = {
        params: {
            agent_id: filter.agentId,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${AGENT.AGENT}`, requestOptions)
}

function getAgentDownline(filter) {
    const requestOptions = {
        params: {
            size: filter.pageSize,
            page: filter.pageNumber,
            agent_id: filter.agentId,
            settlement_period: filter.settlementPeriod,
            is_active: filter.isActive,
            agent_level: filter.agentLevel,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.DOWNLINE}`, requestOptions)
}

function createAgentPlayer(registerPlayerObj) {
    const requestBody = {
        membercode: registerPlayerObj.memberCode,
        password: registerPlayerObj.password,
        currency: registerPlayerObj.currency,
        mobile: registerPlayerObj.mobile,
        agent_team: registerPlayerObj.agentTeam,
        domain: registerPlayerObj.domain
    }

    return apiHelper().post(`${AGENT.AGENT}/${AGENT.PLAYER}`, requestBody)
}

function getTransactionSummary(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agentTeam,
            start_date: filter.startDate,
            end_date: filter.endDate,
            currency: filter.currency
        }
    }

    return apiHelper().get(`${AGENT.AGENT}/${AGENT.TRANSACTION_SUMMARY}`, requestBody)
}

function getAgentReport(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agentTeam,
            start_date: filter.startDate == null || filter.startDate == '' ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null || filter.endDate == '' ? '' : filter.endDate + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.AGENT_TEAM_REPORT}`, requestBody)
}

function getAgentDownlineReport(filter) {
    const requestBody = {
        params: {
            upline_id: filter.uplineId,
            start_date: filter.startDate == null || filter.startDate == '' ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null || filter.endDate == '' ? '' : filter.endDate + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.AGENT_TEAM_REPORT}`, requestBody)
}

function getAgentSummaryReport(filter) {
    const requestBody = {
        params: {
            upline_level: filter.agentLevel,
            start_date: filter.startDate == null || filter.startDate == '' ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null || filter.endDate == '' ? '' : filter.endDate + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.AGENT_TEAM_REPORT}`, requestBody)
}

function createAgentRemark(Obj) {
    const requestBody = {
        agent_id: Obj.agent_id,
        remark: Obj.remark,
        phone_number: Obj.phone_number,
        real_name: Obj.real_name
    }

    return apiHelper().post(`${AGENT.AGENT}/${AGENT.REMARK}`, requestBody)
}

function getAgentTeamApplyList(filter) {
    const requestBody = {
        params: {
            agent_id: filter.agent_id,
            start_time: filter.start_time,
            end_time: filter.end_time,
            status: filter.status,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.APPLY}`, requestBody)
}

function agentTeamApplyRejected(agentApplyObj) {
    const requestBody = {
        agent_id: agentApplyObj.agent_id,
        remark: agentApplyObj.remark
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.REJECT}`, requestBody)
}

function getCommissionDetail(agentObj) {
    const requestBody = {
        params: {
            agent_id: agentObj
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION_DETAIL}`, requestBody)
}

function changeAgentPassword(agentObj) {
    const requestBody = {
        agent_id: agentObj.agent_id,
        password: agentObj.password
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.CHANGE_PASSWORD}`, requestBody)
}

function getAgentCommissionReport(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agent_team,
            agent_level: filter.agent_level,
            start_time: filter.start_time + ' ' + '00:00:00',
            end_time: filter.end_time + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION_REPORT}`, requestBody)
}

function getAgentCommissionSummaryReport(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agent_team,
            agent_level: filter.agent_level,
            start_date: filter.start_date + ' ' + '00:00:00',
            end_date: filter.end_date + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION_SUMMARY_REPORT}`, requestBody)
}

function submitWithdrawal(agentObj) {
    const requestBody = {
        amount: agentObj.amount,
        currency: SHARED.DEFAULT_CURRENCY
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.SUBMIT_WITHDRAWAL}`, requestBody)
}

function getWithdrawalList(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agent_team,
            start_time: filter.start_time,
            end_time: filter.end_time,
            payout_status: filter.payout_status,
            payout_method: filter.payout_method,
            gateway: filter.gateway,
            trans_id: filter.trans_id,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.WITHDRAWAL_LIST}`, requestBody)
}

function updateWithdrawalStatus(agentObj) {
    const requestBody = {
        status: agentObj.status,
        payout_method: agentObj.payout_method,
        remark: agentObj.remark,
        currency: SHARED.DEFAULT_CURRENCY,
        gateway_code: agentObj.gateway_code
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.WITHDRAWAL}/${agentObj.trans_id}/${AGENT.STATUS}`, requestBody)
}

function getWithdrawalDetail(withdrawalObj) {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.WITHDRAWAL}/${withdrawalObj}/${AGENT.DETAIL}`)
}

function getAdjustmentDetail(adjustmentObj) {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.ADJUSTMENT}/${adjustmentObj.trans_code}/${AGENT.DETAIL}`)
}

function getAgentWalletLog(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agent_team,
            start_time: filter.start_time,
            end_time: filter.end_time,
            status: filter.status,
            transaction_type: filter.transaction_type,
            trx_id: filter.trx_id,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.WALLET_LOG}`, requestBody)
}

function getAdjustmentList(filter) {
    const requestBody = {
        params: {
            agent_team: filter.agent_team,
            start_time: filter.start_time,
            end_time: filter.end_time,
            status: filter.status,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.ADJUSTMENT_LIST}`, requestBody)
}

function createAgentAdjustment(agentObj) {
    const requestBody = {
        agent_id: agentObj.agent_id,
        amount: agentObj.amount,
        apply_remark: agentObj.apply_remark,
        currency: SHARED.DEFAULT_CURRENCY
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.ADJUSTMENT}`, requestBody)
}

function updateAdjustmentStatus(agentObj) {
    const requestBody = {
        status: agentObj.status,
        remark: agentObj.remark
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.ADJUSTMENT}/${agentObj.trans_id}/${AGENT.STATUS}`, requestBody)
}

function getCommissionWallet() {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION}`, requestBody)
}

function getPayoutWallet() {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.PAYOUT}`, requestBody)
}

function updateWalletDetail(agentObj) {
    const requestBody = {
        type: agentObj.type,
        agent_id: agentObj.agent_id,
        verification_code: agentObj.verification_code,
        payout_wallet: agentObj.payout_wallet,
        wallet_number: agentObj.wallet_number,
        new_number: agentObj.new_number,
        bank_account: agentObj.bank_account,
        ifsc_code: agentObj.ifsc_code
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.WALLET_DETAIL}`, requestBody)
}

function requestOTP(agentObj) {
    const requestBody = {
        mobile: agentObj.mobile,
        currency: SHARED.DEFAULT_CURRENCY
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.REQUEST_OTP}`, requestBody)
}

function getSmsOtpLog(filter) {
    const requestBody = {
        params: {
            membercode: filter.membercode,
            phone_number: filter.phone_number,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.SMS_OTP}`, requestBody)
}

function getAgentBanner(filter) {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            banner_type: filter.bannerType,
            size: sharedFunction.getPlatform() === DevicePlatform.MOBILE ? 999 : filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.BANNER}`, requestOptions)
}

function updateTierStatus(tierObj) {
    const requestBody = {
        agent_id: tierObj.agent_id,
        is_tier: tierObj.is_tier,
        settlement_period: tierObj.settlement_period,
        type: tierObj.type
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.TIER_STATUS}`, requestBody)
}

function getTierList(filter) {
    const requestOptions = {
        params: {
            agent_id: filter
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.TIER_LIST}`, requestOptions)
}

function updateTierList(tierObj) {
    const requestBody = {
        agent_id: tierObj.agent_id,
        tier_id: tierObj.tier_id,
        active_player: tierObj.active_player,
        total_revenue: tierObj.total_revenue,
        commission_rate: tierObj.commission_rate
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.TIER_LIST_DETAIL}`, requestBody)
}

function createTierList(tierObj) {
    const requestBody = {
        agent_id: tierObj.agent_id,
        active_player: tierObj.active_player,
        total_revenue: tierObj.total_revenue,
        commission_rate: tierObj.commission_rate
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.CREATE_TIER_LIST}`, requestBody)
}

function updateDefaultCommission(commissionObj) {
    const requestBody = {
        agent_id: commissionObj.agent_id,
        default_commission_rate: commissionObj.default_commission_rate,
        royalty_rate: commissionObj.royalty_rate,
        deposit_fee: commissionObj.deposit_fee,
        withdrawal_fee: commissionObj.withdrawal_fee,
        is_negative_reset: commissionObj.is_negative_reset
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.DEFAULT_COMMISSION}`, requestBody)
}

function exportAgentWithdrawal(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date == null || filter.start_date == "" ? '' : filter.start_date + ' ' + '00:00:00',
            end_date: filter.end_date == null || filter.end_date == "" ? '' : filter.end_date + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_WITHDRAWAL}`, requestOptions)
}

function exportSummaryCommission(filter) {
    const requestOptions = {
        params: {
            agent_team: filter.agent_team,
            agent_level: filter.agent_level,
            start_date: filter.start_date == null || filter.start_date == "" ? '' : filter.start_date + ' ' + '00:00:00',
            end_date: filter.end_date == null || filter.end_date == "" ? '' : filter.end_date + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_SUMMARY_COMMISSION}`, requestOptions)
}

function exportAgentDownline(filter) {
    const requestOptions = {
        params: {
            agent_id: filter.agent_id,
            is_active: filter.is_active,
            settlement_period: filter.settlement_period,
            agent_level: filter.agent_level,
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_DOWNLINE}`, requestOptions)
}

function updateAgentDetail(agentObj) {
    const requestBody = {
        type: agentObj.type,
        agent_id: agentObj.agent_id,
        phone_number: agentObj.phone_number,
        is_active: agentObj.is_active,
        nid_number: agentObj.nid_number,
        date_of_birth: agentObj.date_of_birth,
        social_type: agentObj.social_type,
        social_value: agentObj.social_value
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.UPDATE_DETAIL}`, requestBody)
}

function updatePhoneNumber(agentObj) {
    const requestBody = {
        agent_id: agentObj.agent_id,
        phone_number: agentObj.phone_number,
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.UPDATE_PHONE_NUMBER}`, requestBody)
}

function getAgentAuditLog(filter) {
    const requestOptions = {
        params: {
            size: filter.pageSize,
            page: filter.pageNumber,
            agent_team: filter.agentTeam,
            StartDate: filter.StartDate,
            EndDate: filter.EndDate,
            agentAction: filter.agentAction && filter.agentAction.join(','),
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.AUDIT_LOG}`, requestOptions)
}

function exportAgentFtd(filter) {
    const requestOptions = {
        params: {
            agent_team: filter.agent_team,
            currency: SHARED.DEFAULT_CURRENCY,
            login_start_date: filter.login_start_date == null || filter.login_start_date == '' ? '' : filter.login_start_date + ' ' + '00:00:00',
            login_end_date: filter.login_end_date == null || filter.login_end_date == '' ? '' : filter.login_end_date + ' ' + '23:59:59',
            register_start_date: filter.register_start_date == null || filter.register_start_date == '' ? '' : filter.register_start_date + ' ' + '00:00:00',
            register_end_date: filter.register_end_date == null || filter.register_end_date == '' ? '' : filter.register_end_date + ' ' + '23:59:59',
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_FTD}`, requestOptions)
}

function exportAgentBalance(filter) {
    const requestOptions = {
        params: {
            agent_level: filter.agent_level,
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_BALANCE}`, requestOptions)
}

function createBatchAgentAdjustment(agentObj) {
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.BATCH_ADJUSTMENT}`, agentObj.batchAdjustment)
}

function bulkApproveAdjustment() {
    const requestBody = {
        currency: SHARED.DEFAULT_CURRENCY
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.BULK_APPROVE_ADJUSTMENT}`, requestBody)
}

function createAgentBanner(agentObj) {
    const requestBody = {
        title: agentObj.title,
        description: agentObj.description,
        localization: agentObj.localization,
        start_time: agentObj.startDate,
        end_time: agentObj.endDate,
        res_image_source: agentObj.res_image_source,
        currency: agentObj.currency,
    }
    return apiHelper(API.CMS_URL).post(`${AGENT.AGENT}/${AGENT.CREATE_BANNER}`, requestBody)
}

function updateAgentBanner(agentObj) {
    const requestBody = {
        title: agentObj.title,
        description: agentObj.description,
        localization: agentObj.localization,
        start_time: agentObj.startDate,
        end_time: agentObj.endDate,
        res_image_source: agentObj.res_image_source,
        currency: agentObj.currency,
    }
    return apiHelper(API.CMS_URL).patch(`${AGENT.AGENT}/${AGENT.BANNER}/${agentObj.bannerId}`, requestBody)
}

function getAgentBannerManagement(filter) {
    const requestOptions = {
        params: {
            title: filter.title,
            start_time: filter.start_time,
            end_time: filter.end_time,
            is_active: filter.is_active,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper(API.CMS_URL).get(`${AGENT.AGENT}/${AGENT.ALL_BANNER}`, requestOptions)
}

function getAgentBannerDetail(bannerId) {
    return apiHelper(API.CMS_URL).get(`${AGENT.AGENT}/${AGENT.BANNER}/${bannerId}`)
}

function updateAgentBannerStatus(agentObj) {
    const requestBody = {
        is_active: agentObj.isActive,
    }
    return apiHelper(API.CMS_URL).patch(`${AGENT.AGENT}/${AGENT.BANNER}/${AGENT.STATUS}/${agentObj.id}`, requestBody)
}

function getAgentCommissionSummaryDetail() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION_SUMMARY_DETAIL}`, requestOptions)
}

function getAgentForgotPasswordLog(filter) {
    const requestBody = {
        params: {
            mobile: filter.mobile,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.FORGOT_OTP}`, requestBody)
}

async function getAgentAction() {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.ACTION}`)
}

function getCommissionPlanList(filter) {
    const requestOptions = {
        params: {
            commission_plan_name: filter.commission_plan_name,
            // start_time: filter.start_time,
            // end_time: filter.end_time,
            is_default_use: filter.is_default_use,
            is_active: filter.is_active,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.COMMISSION_PLAN_LIST}`, requestOptions)
}

function updateCommissionPlanStatus(commissionPlanObj) {
    const requestBody = {
        is_active: commissionPlanObj.is_active,
        is_default_use: commissionPlanObj.is_default_use,
        type: commissionPlanObj.type,
        currency: SHARED.DEFAULT_CURRENCY,
    }
    return apiHelper().patch(`${AGENT.AGENT}/${AGENT.COMMISSION_PLAN}/${commissionPlanObj.id}`, requestBody)
}

function createAgentCommissionPlan(commissionPlanObj) {
    const requestBody = {
        commission_plan_name: commissionPlanObj.commission_plan_name,
        agent_level: commissionPlanObj.agent_level,
        level_group: commissionPlanObj.level_group,
        upper_agent_id: commissionPlanObj.upper_agent_id,
        settlement_period: commissionPlanObj.settlement_period,
        currency: commissionPlanObj.currency,
        commission_rate: commissionPlanObj.commission_rate,
        royalty_rate: commissionPlanObj.royalty_rate,
        deposit_transaction_fee: commissionPlanObj.deposit_transaction_fee,
        withdrawal_transaction_fee: commissionPlanObj.withdrawal_transaction_fee,
        tier_commission: commissionPlanObj.tier_commission,
        is_tier: commissionPlanObj.is_tier,
        is_default_use: commissionPlanObj.is_default_use,
        is_active: commissionPlanObj.is_active
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.COMMISSION_PLAN}`, requestBody)
}

function agentOverallSummary(filter) {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            start_date: filter.startDate == null ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null ? '' : filter.endDate + ' ' + '23:59:59',
            page: filter.pageNumber,
            size: filter.pageSize,
            membercode: filter.memberCode
        }
    }

    return apiHelper().get(`${AGENT.AGENT}/${AGENT.SUMMARY_STAT}`, requestBody)
}

function getAgentRegistrationFtd(filter) {
    const requestBody = {
        params: {
            id: filter.id,
            currency: filter.currency,
            page: filter.pageNumber,
            size: filter.pageSize,
            membercode: filter.memberCode,
            login_start_date: filter.loginStartDate == null || filter.loginStartDate === '' ? '' : filter.loginStartDate + ' ' + '00:00:00',
            login_end_date: filter.loginEndDate == null || filter.loginEndDate === '' ? '' : filter.loginEndDate + ' ' + '23:59:59',
            register_start_date: filter.registerStartDate == null ? '' : filter.registerStartDate,
            register_end_date: filter.registerEndDate == null ? '' : filter.registerEndDate,
            agent_team: filter.agentTeam,
            finance_status: filter.finance_status,
            mobile: filter.mobile,
            referral_code: filter.referralCode,
            member_group_id: filter.memberGroup,
            min_balance: filter.minBalance,
            max_balance: filter.maxBalance
        }
    }

    return apiHelper().get(`${AGENT.AGENT}/${AGENT.REGISTRATION_FTD}`, requestBody)
}

function requestForgotPassword(data) {
    const requestBody = {
        mobile: data.mobileNumber,
        prefix: data.prefix
    };
    return apiHelper().post(`/${AGENT.AGENTS}/${AGENT.REQUEST_FORGOT_PASSWORD_OTP}`, requestBody);
}

function verifyForgotPassword(data) {
    const requestBody = {
        mobile: data.mobileNumber,
        sms_token: data.smsToken
    };
    return apiHelper().post(`/${AGENT.AGENTS}/${AGENT.VERIFY_FORGOT_PASSWORD_OTP}`, requestBody);
}

function updateForgotPassword(data) {
    const requestBody = {
        membercode: data.memberCode,
        new_password: data.newPassword,
        contact: data.contact
    };
    return apiHelper().patch(`/${AGENT.AGENTS}/${AGENT.UPDATE_FORGOT_PASSWORD}`, requestBody);
}

function getAvailablePayoutGateway(filter) {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            method_id: filter.method_id
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.PAYMENT_GATEWAY}`, requestOptions)
}

function getAgentPaymentGroup(filter = {}) {
    let requestQuery = {
        params: {
            currency_code: SHARED.DEFAULT_CURRENCY,
            page: filter.page,
            size: filter.size
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.PAYMENT_GROUP}`, requestQuery)
}
function getRegisterBannerPageList(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            page: filter.pageNumber,
            size: filter.pageSize,
            is_active: filter.is_active === undefined ? 1 : filter.is_active,
        }
    }
    return apiHelper(API.CMS_URL).get(`${AGENT.AGENT}/${AGENT.REGISTER_PAGE_BANNER}`, requestOptions)
}
function createRegisterPageBanner(registerPageBanner) {
    let formData = new FormData();
    Object.keys(registerPageBanner).forEach(key => {
        if (Array.isArray(registerPageBanner[key])) {
            registerPageBanner[key].forEach(item => {
                formData.append(`${key}[]`, item)
            })
        } else {
            formData.append(key, registerPageBanner[key])
        }
    })
    return apiHelper(API.CMS_URL).post(`${AGENT.AGENT}/${AGENT.REGISTER_PAGE_BANNER}`, formData)
}
function updateRegisterPageBanner(registerPageBanner) {
    let formData = new FormData();
    Object.keys(registerPageBanner).forEach(key => {
        if (Array.isArray(registerPageBanner[key])) {
            registerPageBanner[key].forEach(item => {
                formData.append(`${key}[]`, item)
            })
        } else {
            formData.append(key, registerPageBanner[key])
        }
    })
    return apiHelper(API.CMS_URL).post(`${AGENT.AGENT}/${AGENT.REGISTER_PAGE_BANNER}/${registerPageBanner.id}`, formData)
}

function getWithdrawGatewayType() {
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.WITHDRAWAL_GATEWAY}`)
}
function getRegisterIpSummary(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            size: filter.pageSize,
            page: filter.pageNumber,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59'
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.GET_REGISTER_IP_SUMMARY}`, requestOptions)
}

function getRegisterIpAgent(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            size: filter.pageSize,
            page: filter.pageNumber,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
            register_ip: filter.registerIp,
            domain: filter.domain && filter.domain.length === 0 ? -1 : filter.domain
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.GET_REGISTER_IP_MEMBERS}`, requestOptions)
}

function flagAgentRegisterIp(ipAddress, remarks) {
    const requestOptions = {
        action: 'flag',
        ip: ipAddress,
        remarks: remarks,
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.FLAG_REGISTER_IP}`, requestOptions)
}

function unflagAgentRegisterIp(ipAddressId, ipAddress) {
    const requestOptions = {
        action: 'unflag',
        ip: ipAddress,
        flag_ip_id: ipAddressId
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.FLAG_REGISTER_IP}`, requestOptions)
}
function unflagMultipleAgentRegisterIp(ipAddressIds) {
    const requestBody = {
        data: {
            ip_address_ids: ipAddressIds,
        }
    }
    return apiHelper().delete(`${AGENT.AGENT}/${AGENT.UNFLAG_MULTIPLE}`, requestBody)
}

function exportRegisterIpAgents(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
            register_ip: filter.registerIp
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_REGISTER_IP_MEMBERS}`, requestOptions)
}

function exportRegisterIpSummary(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.EXPORT_REGISTER_IP_SUMMARY}`, requestOptions)
}

function getFlagIpList() {
    const requestOptions = {
        params: {}
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.GET_FLAG_IP_LIST}`, requestOptions)
}
function addFlagIps(ipAddresses) {
    const requestBody = {
        ip_addresses: ipAddresses,
    }
    return apiHelper().post(`${AGENT.AGENT}/${AGENT.GET_FLAG_IP_LIST}`, requestBody)
}
function getAgentFlagIpConfig(configName) {
    const requestOptions = {
        params: {
            config_name: configName
        }
    }
    return apiHelper().get(`${AGENT.AGENT}/${AGENT.GET_CONFIG}`, requestOptions)
}