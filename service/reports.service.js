import {apiHelper} from '@/util'
import {ReportType} from '@/constants/enums'
import {SHARED} from '@/constants/constants'
import {API} from '@/constants/constants';

export const reportsService = {
    getWinLoss,
    getWinLossMemberGroup,
    getWinLossDetails,
    getBetDetails,
    getBetDetailsV2Data,
    getBetDetailsV2Aggregate,
    getUnsettledBetDetails,
    getUnsettledBetStatus,
    getBetTransactionHistory,
    getMatchDetails,
    getRebateTransactionListing,
    getWlSummary,
    getBannedList,
    getFirstDeposit,
    patchBannedList,
    insertBannedList,
    overallSummary,
    overallSummaryExport,
    getRoundInfo,
    exportAllFirstDeposit,
    exportAllAgentReport,
    getFreespinReport,
    exportAllMemberWinLossOverview,
    getMemberBalance,
    getMemberBalanceSessionDdl,
    getSinglePlayerBetDetails
}

//API urls
const REPORTS = {
    URL: API.ROUND_URL,
    REPORT: '/report',
    REPORT_V2: '/report/v2',
    V2_DATA: 'data',
    V2_AGGREGATE: 'aggregate',
    BALANCE: 'memberBalance',
    AGENT: '/agent',
    OVERVIEW: 'overview',
    MEMBERS: 'members',
    UNSETTLED: 'unsettled',
    STATUS: 'status',
    SESSION: 'session',
    CHANGES: 'changes',
    BET_DETAILS: 'betdetails',
    REBATE_TRANSACTION: '/rebate/transactions',
    PROVIDER_PERFORMANCE: 'wlSummary',
    REBATE_BANNED_LIST: '/rebate/bannedList/all',
    FLAG_BANNED: '/rebate/updatedBan',
    INSERT_BANNED: '/rebate/insertBan',
    FIRST_DEPOSIT: 'firstDeposit',
    OVERALL_SUMMARY: '/overallSummary',
    EXPORT: '/export',
    GAME: 'game',
    ROUND: 'roundCheck',
    ST8: 'st8',
    AGENT_EXPORT: 'agentReport/export',
    FREESPIN: 'freeSpin',
    SINGLE_PLAYER: 'single/player'
}

function overallSummaryExport(filter) {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            start_date: filter.startDate == null ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null ? '' : filter.endDate + ' ' + '23:59:59',
            agent_team: filter.agentTeam
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}${REPORTS.OVERALL_SUMMARY}${REPORTS.EXPORT}`, requestBody)
}

function overallSummary(filter) {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            start_date: filter.startDate == null ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null ? '' : filter.endDate + ' ' + '23:59:59',
            page: filter.pageNumber,
            size: filter.pageSize,
            membercode: filter.memberCode,
            referred_by: filter.referredBy,
            sales_tagging: filter.salesTagging,
            agent_team: filter.agentTeam
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}${REPORTS.OVERALL_SUMMARY}`, requestBody)
}

function getWlSummary(filter) {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            dateFrom: filter.dateFrom == null ? '' : filter.dateFrom + ' ' + '00:00:00',
            dateTo: filter.dateTo == null ? '' : filter.dateTo + ' ' + '23:59:59',
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.PROVIDER_PERFORMANCE}`, requestBody)
}

function getBannedList() {
    return apiHelper().get(`${REPORTS.REBATE_BANNED_LIST}`)
}

function patchBannedList(filter) {
    const requestBody = {
        id: filter.id
    }
    return apiHelper().patch(`${REPORTS.FLAG_BANNED}`, requestBody)
}

function insertBannedList(filter) {
    const requestBody = {
        game_group: filter.game_group
    }
    return apiHelper().post(`${REPORTS.INSERT_BANNED}`, requestBody)
}

function getRebateTransactionListing(filter) {
    const requestOptions = {
        params: {
            transaction_id: filter.transaction_id,
            member_id: filter.memberId,
            provider: filter.gameProvider,
            page: filter.pageNumber,
            size: filter.pageSize,
            membercode: filter.membercode,
            game_type: filter.game_type,
            claim_status: filter.claim_status,
            start_time: filter.start_time == null ? '' : filter.start_time,
            end_time: filter.end_time == null ? '' : filter.end_time,
            bet_start_time: filter.bet_start_time == null ? '' : filter.bet_start_time,
            bet_end_time: filter.bet_end_time == null ? '' : filter.bet_end_time,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}${REPORTS.REBATE_TRANSACTION}`, requestOptions)
}

function getWinLoss(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            mode: filter.reportType,
            start_date: filter.startDate == null || filter.startDate == '' ? '' : filter.startDate + ' ' + '00:00:00',
            end_date: filter.endDate == null || filter.endDate == '' ? '' : filter.endDate + ' ' + '23:59:59',
            username: filter.memberCode,
            user_id: filter.memberId,
            currency: filter.currency,
            provider: filter.gameProvider,
            game_type: filter.gameType,
            game_name: filter.gameName,
            bet_result: filter.status.join(','),
            is_full_search: !filter.isPartialSearch ? 1 : 0,
            condition: filter.condition,
            total_stake: filter.totalStake
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.OVERVIEW}`, requestOptions)
}

function getWinLossMemberGroup(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        username: filter.memberCode
    }

    switch (filter.reportType) {
        case ReportType.CURRENCY:
            apiParams.currency = filter.selectedKey
            break
        case ReportType.GAME_PROVIDER:
            apiParams.provider = filter.selectedKey
            break
        case ReportType.GAME_TYPE:
            apiParams.game_type = filter.selectedKey
            break
        case ReportType.GAME_TYPE_PROVIDER:
            apiParams.game_type = filter.selectedKey
            apiParams.provider = filter.selectedSubKey == null ? '' : filter.selectedSubKey
            break
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.OVERVIEW}/${REPORTS.MEMBERS}`, requestOptions)
}

function getWinLossDetails(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        start_date: filter.startDate == null ? '' : filter.startDate + ' ' + '00:00:00',
        end_date: filter.endDate == null ? '' : filter.endDate + ' ' + '23:59:59',
        username: filter.memberCode,
        user_id: filter.memberId,
        currency: filter.currency,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        game_name: filter.gameName,
        bet_result: filter.status.join(','),
        is_full_search: !filter.isPartialSearch ? 1 : 0
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}`, requestOptions)
}

function getBetDetails(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        bet_result: filter.status.join(','),
        currency: filter.currency,
        username: filter.memberCode,
        user_id: filter.memberId,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        payout_start_date: filter.settlementStartDate == null ? '' : filter.settlementStartDate,
        payout_end_date: filter.settlementEndDate == null ? '' : filter.settlementEndDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0,
        from_bet_amount: filter.minBet,
        to_bet_amount: filter.maxBet,
        from_winloss: filter.minWinLoss,
        to_winloss: filter.maxWinLoss,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}`, requestOptions)
}

function getBetDetailsV2Data(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        bet_result: filter.status.join(','),
        currency: filter.currency,
        username: filter.memberCode,
        user_id: filter.memberId,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        payout_start_date: filter.settlementStartDate == null ? '' : filter.settlementStartDate,
        payout_end_date: filter.settlementEndDate == null ? '' : filter.settlementEndDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0,
        from_bet_amount: filter.minBet,
        to_bet_amount: filter.maxBet,
        from_winloss: filter.minWinLoss,
        to_winloss: filter.maxWinLoss,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT_V2}/${REPORTS.V2_DATA}`, requestOptions)
}

// This shall use the exact same parameters as getBetDetailsV2Data()
function getBetDetailsV2Aggregate(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        bet_result: filter.status.join(','),
        currency: filter.currency,
        username: filter.memberCode,
        user_id: filter.memberId,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        payout_start_date: filter.settlementStartDate == null ? '' : filter.settlementStartDate,
        payout_end_date: filter.settlementEndDate == null ? '' : filter.settlementEndDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0,
        from_bet_amount: filter.minBet,
        to_bet_amount: filter.maxBet,
        from_winloss: filter.minWinLoss,
        to_winloss: filter.maxWinLoss,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT_V2}/${REPORTS.V2_AGGREGATE}`, requestOptions)
}

function getSinglePlayerBetDetails(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        bet_result: filter.status.join(','),
        currency: filter.currency,
        username: filter.memberCode,
        user_id: filter.memberId,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        payout_start_date: filter.settlementStartDate == null ? '' : filter.settlementStartDate,
        payout_end_date: filter.settlementEndDate == null ? '' : filter.settlementEndDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0,
        from_bet_amount: filter.minBet,
        to_bet_amount: filter.maxBet,
        from_winloss: filter.minWinLoss,
        to_winloss: filter.maxWinLoss,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.SINGLE_PLAYER}`, requestOptions)
}

function getUnsettledBetDetails(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        order_column: filter.orderColumn,
        order_sequence: filter.orderType,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        currency: filter.currency,
        username: filter.memberCode,
        user_id: filter.memberId,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.UNSETTLED}`, requestOptions)
}

function getUnsettledBetStatus() {
    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.UNSETTLED}/${REPORTS.STATUS}`)
}

function getBetTransactionHistory(filter) {
    let apiParams = {
        provider: filter.gameProvider,
        member_code: filter.memberCode,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.CHANGES}`, requestOptions)
}

function getMatchDetails(filter) {
    let apiParams = {
        provider: filter.gameProvider,
        membercode: filter.memberCode,
        vendor_bet_id: filter.vendorBetId
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.BET_DETAILS}`, requestOptions)
}

function getFirstDeposit(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            firstDepositDateFrom: filter.firstDepositDateFrom,
            firstDepositDateTo: filter.firstDepositDateTo,
            registerFrom: filter.registerFrom,
            registerTo: filter.registerTo,
            currency: SHARED.DEFAULT_CURRENCY,
            agent_team: filter.agentTeam,
            membercode: filter.membercode
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.FIRST_DEPOSIT}`, requestOptions)
}

function getFreespinReport(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            memberId: filter.memberId,
            memberCode: filter.memberCode,
            provider: filter.provider,
            currency: filter.currency,
            payout_start_date: filter.payout_start_date,
            payout_end_date: filter.payout_end_date
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.FREESPIN}`, requestOptions)
}

function getRoundInfo(filter) {
    const requestOptions = {
        params: {
            round: filter.roundId,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${REPORTS.GAME}/${REPORTS.ST8}/${REPORTS.ROUND}`, requestOptions)
}

function exportAllFirstDeposit(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date,
            end_date: filter.end_date,
            register_date_from: filter.register_date_from,
            register_date_to: filter.register_date_to,
            currency: SHARED.DEFAULT_CURRENCY,
            agent_team: filter.agentTeam
        }
    }
    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.FIRST_DEPOSIT}${REPORTS.EXPORT}`, requestOptions)
}

function exportAllAgentReport(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date == null || filter.start_date == "" ? '' : filter.start_date + ' ' + '00:00:00',
            end_date: filter.end_date == null || filter.end_date == "" ? '' : filter.end_date + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY,
            // upline_id: filter.upline_id,
            agent_team: filter.agent_team
        }
    }
    return apiHelper().get(`${REPORTS.AGENT}/${REPORTS.AGENT_EXPORT}`, requestOptions)
}

function exportAllMemberWinLossOverview(filter) {
    const requestOptions = {
        params: {
            mode: filter.mode,
            provider: filter.provider,
            start_date: filter.start_date == null || filter.start_date == "" ? '' : filter.start_date + ' ' + '00:00:00',
            end_date: filter.end_date == null || filter.end_date == "" ? '' : filter.end_date + ' ' + '23:59:59',
            currency_id: filter.currency_id,
            game_type: filter.game_type,
            game_name: filter.game_name,
            bet_result: filter.bet_result.join(','),
        }
    }
    return apiHelper().get(`${REPORTS.REPORT}${REPORTS.EXPORT}/${REPORTS.OVERVIEW}`, requestOptions)
}

function getMemberBalance(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            startDate: filter.startDate,
            endDate: filter.endDate,
            session: filter.session,
            min_balance: filter.min_balance,
            max_balance: filter.max_balance,
            currency: SHARED.DEFAULT_CURRENCY,
            memberId: filter.memberId,
            membercode: filter.memberCode
        }
    }

    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.BALANCE}`, requestOptions)
}

function getMemberBalanceSessionDdl() {
    return apiHelper().get(`${REPORTS.REPORT}/${REPORTS.SESSION}`)
}
