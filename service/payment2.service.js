import {apiHelper} from '@/util'
import {API, SHARED} from '@/constants/constants'
import {Payment2GatewayProviderCodes, TransactionType} from "@/constants/enums";

export const payment2Service = {
    getWALimitCount,
    getMethodList,
    getMethod,
    updateMethod,
    getMethodOverview,
    updateMethodBulk,
    getPaymentMemberGroups,
    getCurrencyList,
    getCurrency,
    createCurrency,
    getBankList,
    createBank,
    getBank,
    updateBank,

    getLimitConfigOptions,

    createPaymentMethod,
    getGatewayProviderList,
    getGatewayProvider,
    updateGatewayProvider,
    createGatewayProvider,

    getMemberGroupList,
    getMemberGroup,
    createMemberGroup,
    updateMemberGroup,

    getPairingMemberGroup,
    updatePairingMemberGroup,
    updatePairingMemberGroupBatch,

    getBankAccountList,
    getBankAccountStatusList,
    createBankAccount,
    getBankAccount,
    updateBankAccount,
    updateBankAccountStatus,

    getGatewayAccountList,
    updateGatewayAccountStatus,
    updateGatewayAccountMobileSupport,
    createGatewayAccount,
    getGatewayAccount,
    updateGatewayAccount,
    getGatewayAccountHistoryLog,

    updateMemberBank,
    deleteMemberBank,
    getMemberBank,
    getMemberBankList,

    getTransactionList,
    getTransactionMethodList,
    getTransactionStatusList,
    getTransactionListCount,
    getTransaction,
    requeryTransaction,
    updateTransactionStatus,
    getTransSummary,
    autoPayOut,
    pullPgHistoryLog,

    getTaggingListing,
    assignTagging,
    removeTaggingFromMember,

    getNewLimitConfig,
    updateNewLimitConfig,
    exportAllTransaction,

    getAvailablePayoutGateway,
    getManualDepositGatewayAccount,
    getManualDepositBankAccount,
    manualDepositPlayer,

    getTransactionRemark,
    editRejectRemarks,
    getRejectRemarksList,
    getWithdrawalAutomation,
    updateWithdrawalAutomationStatus,
    getWADetails,
    updateWADetails,
    addRejectRemarks,
    updateTransactionRemark,
    changeReject
}

const PAYMENT = {
    AVAILABLE_PAYOUT_GATEWAY: '/payout_gateway_channels',
    EXPORT_ALL_TRANSACTION: '/transactions/export-csv',
    GATEWAY_LIMIT_CONFIG: '/limit_config_options',
    AUTO_PAYOUT: '/payout',
    METHOD: '/methods',
    BULK_LIMIT_CONF: '/bulk_gateway_lim_conf',
    METHOD_OVERVIEW: '/method_overview',
    GATEWAY_ACCOUNT: '/gateway_account',
    PAYMENT: '/speed/roku/payment2',
    TRANSACTION: '/transaction',
    TRANSACTION_COUNT: '/transaction_count',
    WORKFLOW: '/workflow',
    TRANSACTION_STATUS: '/transaction_statuses',
    BANK: '/bank',
    CURRENCY: '/currency',
    GATEWAY_PROVIDER: '/gateway_provider',
    PAYMENT_MEMBER_GROUP: '/payment_member_group',
    BANK_ACCOUNT: '/bank_account',
    BANK_ACCOUNT_STATUS: '/bank_account_status',
    MEMBER_BANK_ACCOUNT: '/member_bank_account',
    EDIT_REJECT_REMARK: '/edit/remark',
    COMMAND: '/command',
    PG_LOG: '/pg_log',
    CHANGE: '/change',
    REQUERY: '/requery',
    TRANSACTION_SUMMARY: '/transaction_summary',
    GET_TAGGING_LIST: 'tag',
    ASSIGN_TAGGING: 'tag/assign',
    REMOVE_TAGGING: 'tag/member',
    MEMBER_GROUP_PAIRING: '/payment-member-group-pairings',
    LIMIT_NEW_CONFIG: '/payment_limit_config',
    MANUAL_DEPOSIT: '/deposit',
    TRANSACTION_REMARK: '/transaction/remark',
    WITHDRAWAL_AUTOMATION: '/withdrawal_automation',
    TRANSACTION_UPDATE_REMARK: '/transaction/update/remark',
    GET_WA_LIMITCOUNT: '/getWALimitCount',
    GATEWAY_ACCOUNT_HISTORY_LOG: '/gateway_account_history_log',
}

function getWALimitCount(filter, options){
    const requestOptions = {
        params: {
            currency: filter.currency
        }
    }
    return apiHelper(null, true, options).get(`${PAYMENT.PAYMENT}${PAYMENT.GET_WA_LIMITCOUNT}`,requestOptions);
}
function updateWADetails(waDetailsObj) {

    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.WITHDRAWAL_AUTOMATION}/${waDetailsObj.id}`, waDetailsObj)
}

function getWADetails(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.WITHDRAWAL_AUTOMATION}/${id}`)
}

function updateWithdrawalAutomationStatus(id, isActive) {
    const requestBody = {is_active: isActive}
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.WITHDRAWAL_AUTOMATION}/${id}`, requestBody)
}

function getWithdrawalAutomation(filter) {
    const requestOptions = {
        params: {
            is_active: filter.is_active,
            page: filter.page,
            size: filter.size,
            currency_code: SHARED.DEFAULT_CURRENCY,
            is_exclude_f_withdrawal: filter.is_exclude_f_withdrawal
        }
    }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.WITHDRAWAL_AUTOMATION}`, requestOptions)
}

function getAvailablePayoutGateway(filter) {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
            method_id: filter.method_id,
            trx_id: filter.trx_id
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.AVAILABLE_PAYOUT_GATEWAY}`, requestOptions)
}

function exportAllTransaction(filter) {
    const dateRegex =  /^\d{4}-\d{2}-\d{2}$/;
    const requestOptions = {
        params: {
            start_date: (filter.start_date == null || filter.start_date == "") ? "" :
              dateRegex.test(filter.start_date) ?  filter.start_date + ' ' + '00:00:00' : filter.start_date,
            end_date: (filter.end_date == null || filter.end_date == "") ? "" :
              dateRegex.test(filter.end_date) ?  filter.end_date + ' ' + '23:59:59' : filter.end_date,
            created_at_start_date: !filter.created_at_start_date ? "" : filter.created_at_start_date + ' ' + '00:00:00',
            created_at_end_date: !filter.created_at_end_date ? "" : filter.created_at_end_date + ' ' + '23:59:59',
            transaction_status: filter.transaction_status ? filter.transaction_status.join() : null,
            transaction_type: filter.transaction_type,
            gateway_id: filter.gateway_id,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.EXPORT_ALL_TRANSACTION}`, requestOptions)
}

function getNewLimitConfig(filter) {
    const requestOptions = {
        params: {
            method_id: filter.method_id,
            gateway_account_id: filter.gateway_account_id,
            currency_code: SHARED.DEFAULT_CURRENCY,
            bank_account_id: filter.bank_account_id
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.LIMIT_NEW_CONFIG}`, requestOptions)
}

function updateNewLimitConfig(limitObj) {
    return apiHelper().patch(`${PAYMENT.PAYMENT}${PAYMENT.LIMIT_NEW_CONFIG}`, limitObj)
}

function getLimitConfigOptions(filter) {
    const requestOptions = {
        params: {
            currency_code: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_LIMIT_CONFIG}`, requestOptions)
}

function createPaymentMethod(filter) {
    const requestBody = {
        code: filter.code,
        name: filter.name,
        transaction_type: filter.transaction_type,
        sorting: filter.sorting,
        remarks: filter.remarks,
        localization: filter.localization,
        uses_company_bank: filter.uses_company_bank,
        currency_code: SHARED.DEFAULT_CURRENCY,
        gateway_accounts: filter.transactionGatewayAccount
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.METHOD}`, requestBody)
}

function updatePairingMemberGroup(filter) {
    const requestBody = {
        member_ids: filter.member_ids,
        payment_member_group_id: filter.payment_member_group_id
    }
    return apiHelper().post(`${PAYMENT.MEMBER_GROUP_PAIRING}/update`, requestBody)
}

function updatePairingMemberGroupBatch(filter) {
    const requestBody = {
        paymentMemberGroup: filter.paymentMemberGroup,
        payment_member_group_id: filter.payment_member_group_id
    }
    return apiHelper().post(`${PAYMENT.MEMBER_GROUP_PAIRING}/batch`, requestBody)
}

function getPairingMemberGroup(filter) {
    let requestOptions = {
        params: {
            currency_code: filter.currency_code,
            page: filter.page,
            size: filter.size,
            membercode: filter.membercode
        }
    }
    return apiHelper().get(`${PAYMENT.MEMBER_GROUP_PAIRING}/${filter.id}`, requestOptions)
}

function getTransSummary(filter) {
    let requestOptions = {
        params: {
            member_id: filter.member_id
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION_SUMMARY}`, requestOptions)
}

function autoPayOut(filter) {
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION}/${filter.trans_id}${PAYMENT.AUTO_PAYOUT}`, {gateway_account_id: filter.gateway_account_id})
}

function changeReject(trans_id) {
    return apiHelper().patch(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION}/${trans_id}${PAYMENT.CHANGE}`)
}

function getMethodList(filter = null) {
    let transactionType = TransactionType.DEPOSIT
    if (filter && filter.hasOwnProperty('transactionType')) {
        transactionType = filter.transactionType
    }
    if (filter instanceof String) {
        transactionType = filter
    }
    let requestOptions = {
        params: {
            transaction_type: transactionType,
            currency_code: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.METHOD}`, requestOptions)
}

function getMethod(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.METHOD}/${id}`)
}

function updateMethod(methodObj) {
    let id = methodObj.id
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.METHOD}/${id}`, methodObj)
}

function getMethodOverview(filter = {}) {
    let requestOptions = {
        params: {
            currency_code: filter.currency_code
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.METHOD_OVERVIEW}`, requestOptions)
}

function getPaymentMemberGroups(filter = {}) {
    let requestQuery = {
        params: {
            currency_code: SHARED.DEFAULT_CURRENCY,
            page: filter.page,
            size: filter.size
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.PAYMENT_MEMBER_GROUP}`, requestQuery)
}

function updateMethodBulk(bulkMethods) {
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.BULK_LIMIT_CONF}`, {gateway_limit_confs: bulkMethods})
}

function getCurrencyList(filter = null) {
    let requestOptions = {}
    if (filter != null)
        requestOptions = {
            params: {
                Code: filter.code
            }
        }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.CURRENCY}`, requestOptions)
}

function getCurrency(id) {
    let requestOptions = {}
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.CURRENCY}/${id}`, requestOptions)
}

function createCurrency(currencyObj) {
    const requestBody = {
        code: currencyObj.code.toUpperCase(),
        exchangeRate: currencyObj.exchangeRate,
        remark: currencyObj.remark
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.CURRENCY}`, requestBody)
}

function getBankList(filter = null) {
    let requestOptions = {
        params: {
            page: 0,
            currency_code: filter.currency_code
        }
    }

    if (filter != null)
        requestOptions = {
            params: {
                name: filter.bank_name,
                code: filter.bank_code,
                currency_code: filter.currency_code,
                page: filter.isDdl ? 0 : filter.page_number,
                size: filter.isDdl ? 1500 : filter.page_size
            }
        }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK}`, requestOptions)
}

function createBank(bankObj) {
    const requestBody = {
        name: bankObj.name,
        code: bankObj.code.toUpperCase(),
        currency_code: SHARED.DEFAULT_CURRENCY,
        remarks: bankObj.remark
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.BANK}`, requestBody)
}

function getBank(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK}/${id}`)
}

function updateBank(bankObj) {
    const requestBody = {
        name: bankObj.name,
        currencyCode: bankObj.currencyCode,
        remarks: bankObj.remarks,
        updatedBy: bankObj.updatedBy
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.BANK}/${bankObj.id}`, requestBody)
}


function getGatewayProviderList(filter = null) {
    let requestOptions
    if (filter != null) {
        requestOptions = {
            params: {
                name: filter.name,
                currency_code: filter.currency_code,
                page: filter.pageNumber,
                size: filter.pageSize
            }
        }
    } else {
        requestOptions = {
            params: {
                currency_code: SHARED.DEFAULT_CURRENCY
            }
        }
    }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_PROVIDER}`, requestOptions)
}

function getGatewayProvider(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_PROVIDER}/${id}`)
}

function updateGatewayProvider(gatewayProviderObj) {
    const requestBody = {
        name: gatewayProviderObj.name,
        code: gatewayProviderObj.code,
        currency_code: SHARED.DEFAULT_CURRENCY,
        provider_backoffice_url: gatewayProviderObj.provider_backoffice_url,
        remarks: gatewayProviderObj.remarks
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_PROVIDER}/${gatewayProviderObj.id}`, requestBody)
}

function createGatewayProvider(gatewayProviderObj) {
    const requestBody = {
        name: gatewayProviderObj.name,
        code: gatewayProviderObj.code,
        currency_code: SHARED.DEFAULT_CURRENCY,
        provider_backoffice_url: gatewayProviderObj.provider_backoffice_url,
        remarks: gatewayProviderObj.remarks
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_PROVIDER}`, requestBody)
}


function getMemberGroupList(filter = null) {
    const requestOptions = {
        params: {
            currency_code: filter.currency_code,
            page: filter.page,
            size: filter.size,
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.PAYMENT_MEMBER_GROUP}`, requestOptions)
}

function getMemberGroup(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.PAYMENT_MEMBER_GROUP}/${id}`)
}

function createMemberGroup(memberGroupObj) {
    const requestBody = {
        name: memberGroupObj.name,
        remarks: memberGroupObj.remarks,
        currency_code: memberGroupObj.currency_code,
        createdBy: memberGroupObj.createdBy
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.PAYMENT_MEMBER_GROUP}`, requestBody)
}

function updateMemberGroup(memberGroupObj) {
    const requestBody = {
        name: memberGroupObj.name,
        remarks: memberGroupObj.remarks,
        methods: memberGroupObj.methods,
        updatedBy: memberGroupObj.updatedBy
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.PAYMENT_MEMBER_GROUP}/${memberGroupObj.id}`, requestBody)
}

function getBankAccountList(filter, isDdl = false) {
    let apiParams = {}
    if (isDdl) {
        apiParams = {
            page: 1,
            size: 9999,
            currency_code: filter.currency_code,
            BankAccountStatusID: filter.bankAccountStatus
        }
    } else {
        apiParams = {
            account_name: filter.account_name,
            short_code: filter.short_code,
            bank_id: filter.bank_id,
            is_active: filter.is_active,
            currency_code: filter.currency_code,
            page: filter.page,
            size: filter.pageSize
        }
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}`, requestOptions)
}

function getBankAccountStatusList() {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT_STATUS}`)
}

function createBankAccount(bankAccountObj) {
    const requestBody = {
        account_name: bankAccountObj.account_name,
        account_number: bankAccountObj.account_number,
        bank_id: bankAccountObj.bank_id,
        short_code: bankAccountObj.short_code,
        is_active: bankAccountObj.is_active,
        remark: bankAccountObj.remark,
        upi_address: bankAccountObj.upi_address,
        qr_image: bankAccountObj.qr_image
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}`, requestBody)
}

function getBankAccount(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}/${id}`)
}

function updateBankAccount(bankAccountObj) {
    const requestBody = {
        account_name: bankAccountObj.account_name,
        account_number: bankAccountObj.account_number,
        bank_id: bankAccountObj.bank_id,
        short_code: bankAccountObj.short_code,
        is_active: bankAccountObj.is_active,
        remark: bankAccountObj.remark,
        ifsc_code: bankAccountObj.ifsc_code,
        upi_address: bankAccountObj.upi_address,
        qr_image: bankAccountObj.qr_image
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}/${bankAccountObj.id}`, requestBody)
}

function updateBankAccountStatus(id, status, updatedBy, short_code) {
    const requestBody = {
        is_active: status,
        updatedBy: updatedBy,
        short_code: short_code
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}/${id}`, requestBody)
}

function pullPgHistoryLog(gatewayID) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.PG_LOG}/${gatewayID}`)
}

function getGatewayAccountList(filter, isDdl = false) {
    let apiParams = {}

    if (isDdl) {
        apiParams = {
            page: 0,
            size: 1000,
            is_active: filter.is_active === -1 ? '' : filter.is_active,
            currency_code: SHARED.DEFAULT_CURRENCY,
            transaction_type: filter.transaction_type
        }
    } else {
        apiParams = {
            code: filter.code,
            name: filter.name,
            is_active: filter.is_active == -1 ? '' : filter.is_active,
            page: filter.pageNumber,
            size: filter.pageSize,
            currency_code: SHARED.DEFAULT_CURRENCY,
            gateway_provider_id: filter.gateway_provider_id,
            transaction_type: filter.selectedTransactionType
        }
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}`, requestOptions)
}

function updateGatewayAccountStatus(id, isActive, code) {
    const requestBody = {is_active: isActive, code: code}
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}/${id}`, requestBody)
}

function updateGatewayAccountMobileSupport(id, isMobileSupport) {
    const requestBody = {isMobileSupported: isMobileSupport}
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}/${id}`, requestBody)
}

function createGatewayAccount(gatewayAccountObj) {
    const requestBody = {
        gateway_provider_id: gatewayAccountObj.gateway_provider_id,
        code: gatewayAccountObj.code,
        min_amount: gatewayAccountObj.min_amount,
        max_amount: gatewayAccountObj.max_amount,
        account_name: gatewayAccountObj.account_name,
        api_code: gatewayAccountObj.api_code,
        api_key1: gatewayAccountObj.api_key1,
        api_key2: gatewayAccountObj.api_key2,
        request_trans_url: gatewayAccountObj.request_trans_url,
        query_url: gatewayAccountObj.query_url,
        is_active: gatewayAccountObj.is_active,
        remarks: gatewayAccountObj.remarks,
        supported_bank_ids: gatewayAccountObj.supported_bank_ids,
        currency_code: gatewayAccountObj.currency_code,
        allow_deposit: gatewayAccountObj.allow_deposit,
        allow_withdrawal: gatewayAccountObj.allow_withdrawal,
        uses_company_bank: gatewayAccountObj.uses_company_bank,
        bank_account_ids: gatewayAccountObj.bank_account_ids,
        sorting: gatewayAccountObj.sorting
    }
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}`, requestBody)
}

function getGatewayAccount(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}/${id}`)
}

function updateGatewayAccount(gatewayAccountObj) {
    const requestBody = {
        gateway_provider_id: gatewayAccountObj.gateway_provider_id,
        code: gatewayAccountObj.code,
        min_amount: gatewayAccountObj.min_amount,
        max_amount: gatewayAccountObj.max_amount,
        account_name: gatewayAccountObj.account_name,
        api_code: gatewayAccountObj.api_code,
        api_key1: gatewayAccountObj.api_key1,
        api_key2: gatewayAccountObj.api_key2,
        request_trans_url: gatewayAccountObj.request_trans_url,
        query_url: gatewayAccountObj.query_url,
        is_active: gatewayAccountObj.is_active,
        remarks: gatewayAccountObj.remarks,
        selected_bank_ids: gatewayAccountObj.selected_bank_ids,
        currency_code: gatewayAccountObj.currency_code,
        allow_deposit: gatewayAccountObj.allow_deposit,
        allow_withdrawal: gatewayAccountObj.allow_withdrawal,
        uses_company_bank: gatewayAccountObj.uses_company_bank,
        bank_account_ids: gatewayAccountObj.bank_account_ids,
        sorting: gatewayAccountObj.sorting
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}/${gatewayAccountObj.id}`, requestBody)
}

function updateMemberBank(memberBankObj) {
    const requestBody = {
        account_name: memberBankObj.account_name,
        account_number: memberBankObj.account_number,
        bank_code: memberBankObj.bank_code,
        bank_name: memberBankObj.bank_name,
        member_id: memberBankObj.member_id,
        remark: memberBankObj.remark,
        is_active: memberBankObj.is_active,
        ifsc_code: memberBankObj.ifsc_code
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.MEMBER_BANK_ACCOUNT}/${memberBankObj.id}`, requestBody)
}

function deleteMemberBank(id) {
    return apiHelper().delete(`${PAYMENT.PAYMENT}${PAYMENT.MEMBER_BANK_ACCOUNT}/${id}`)
}

function getMemberBank(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.MEMBER_BANK_ACCOUNT}/${id}`)
}

function getRejectRemarksList(filter = null) {
    const requestOptions = {
        params: {
            page: filter.page,
            size: filter.pageSize,
            currency: filter.currency
        }
    }

    return apiHelper().get(`/transaction/reject_remarks`, requestOptions)
}

function editRejectRemarks(id, en, bd) {
    const requestBody = {
        english: en,
        bengali: bd
    }
    return apiHelper().patch(`${PAYMENT.PAYMENT}${PAYMENT.EDIT_REJECT_REMARK}/${id}`, requestBody)
}

function addRejectRemarks(filter) {
    const updateBody = {
        en_description: filter.en_description,
        bd_description: filter.bd_description,
        currency: filter.currency
    }
    return apiHelper().post(`/transaction/add_reject_remarks`, updateBody)
}

function getMemberBankList(filter = null) {
    const requestOptions = {
        params: {
            member_id: filter.member_id,
            membercode: filter.membercode,
            account_name: filter.account_name,
            bank_name: filter.bank_name,
            account_number: filter.account_number,
            page: filter.page,
            size: filter.pageSize,
            is_full_search: !filter.is_partial_search,
            currency_code: filter.currency_code
        }
    }

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.MEMBER_BANK_ACCOUNT}`, requestOptions)
}

function getTransactionList(filter) {
    const dateRegex =  /^\d{4}-\d{2}-\d{2}$/;
    const requestOptions = {
        params: {
            trans_id: filter.trans_id,
            member_id: filter.member_id,
            membercode: filter.membercode,
            transaction_type: filter.transaction_type,
            method_id: filter.method_id == -1 ? '' : filter.method_id,
            gateway_account_id: filter.gateway_account_id,
            company_bank_account_id: filter.company_bank_account_id,
            transaction_status_id: filter.transaction_status_ids ? filter.transaction_status_ids.join() : null,
            currency_code: SHARED.DEFAULT_CURRENCY,
            start_date: (filter.start_date == null || filter.start_date == "") ? "" :
               dateRegex.test(filter.start_date) ?  filter.start_date + ' ' + '00:00:00' : filter.start_date,
            end_date: (filter.end_date == null || filter.end_date == "") ? "" :
                dateRegex.test(filter.end_date) ?  filter.end_date + ' ' + '23:59:59' : filter.end_date,
            created_at_start_date: (filter.created_at_start_date == null || filter.created_at_start_date === "") ? "" : filter.created_at_start_date + ' ' + '00:00:00',
            created_at_end_date: (filter.created_at_end_date == null || filter.created_at_end_date === "") ? "" : filter.created_at_end_date + ' ' + '23:59:59',
            page: filter.page,
            size: filter.size,
            order_column: filter.orderColumn,
            order_sequence: filter.orderSequence,
            is_full_search: !filter.is_partial_search,
            is_first_withdrawal: filter.is_first_withdrawal,
            exceed_forty_level: filter.exceed_forty_level,
            vip_member_group_id: filter.vipTierMemberGroup ? filter.vipTierMemberGroup.join() : null,
            withdrawal_below_2000: filter.withdrawal_below_2000,
            is_submitted_automation: filter.is_submitted_automation
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION}`, requestOptions)
}

function getTransactionMethodList() {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.METHOD}`)
}

async function getTransactionStatusList() {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION_STATUS}`)
}

async function getTransaction(id) {
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION}/${id}`)
}

function updateTransactionStatus(id, statusCode, remarks = null) {
    const updateBody = {
        status_code: statusCode,
        remarks: remarks
    }
    return apiHelper().put(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION}/${id}${PAYMENT.WORKFLOW}`, updateBody)
}

function requeryTransaction(trans_id) {
    const postBody = {
        trans_id
    };
    return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.COMMAND}${PAYMENT.REQUERY}`, postBody)
}

function getTransactionListCount(filters, options) {
    let _statuses = '';
    if (Array.isArray(filters.statuses)) {
        _statuses = filters.statuses.join(',');
    }
    const statusQuery = {
        params: {
            statuses: _statuses,
            currency_code: filters.currency_code
        }
    }
    return apiHelper(null, true, options).get(`${PAYMENT.PAYMENT}${PAYMENT.TRANSACTION_COUNT}`, statusQuery)
}

function getTaggingListing(filter) {
    const requestOptions = {
        params: {
            size: filter.pageTagSize,
            page: filter.pageNumber,
            currency: SHARED.DEFAULT_CURRENCY,
            tag_type: filter.tag_type
        }
    }
    return apiHelper().get(`${PAYMENT.GET_TAGGING_LIST}`, requestOptions)
}

function assignTagging(filter) {
    const requestOptions = {
        // membercode: filter.membercode,
        member_id: filter.member_id,
        tag_id: filter.tag_id
    }
    return apiHelper().post(`${PAYMENT.ASSIGN_TAGGING}`, requestOptions)
}

function removeTaggingFromMember(filter) {
    return apiHelper().delete(`${PAYMENT.REMOVE_TAGGING}/${filter.tag_id}`)
}

function getManualDepositGatewayAccount() {
    const requestBody = {
        params: {
            is_active: 1,
            currency_code: SHARED.DEFAULT_CURRENCY,
            code: Payment2GatewayProviderCodes.LOCAL_BANK,
            transaction_type: 'Deposit'
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT}`, requestBody)
}

function getManualDepositBankAccount() {
    const requestBody = {
        params: {
            account_name: '',
            short_code: '',
            bank_id: '',
            is_active: 1,
            currency_code: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.BANK_ACCOUNT}`, requestBody)
}

function manualDepositPlayer(depositObj) {
    if (depositObj.attachment == null) {
        const requestBody = {
            membercode: depositObj.membercode,
            currency: SHARED.DEFAULT_CURRENCY,
            attachment: depositObj.attachment,
            amount: depositObj.amount,
            gateway_account_id: depositObj.gateway_account_id,
            company_bank_id: depositObj.company_bank_id
        }
        return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.MANUAL_DEPOSIT}`, requestBody)
    } else {
        let formData = new FormData()
        if (typeof depositObj.attachment != 'undefined' && depositObj.attachment != "") {
            formData.append('attachment', depositObj.attachment)
        }
        formData.append('membercode', depositObj.membercode)
        formData.append('amount', depositObj.amount)
        formData.append('currency', SHARED.DEFAULT_CURRENCY)
        formData.append('gateway_account_id', depositObj.gateway_account_id)
        formData.append('company_bank_id', depositObj.company_bank_id)
        return apiHelper().post(`${PAYMENT.PAYMENT}${PAYMENT.MANUAL_DEPOSIT}`, formData)
    }
}

function getTransactionRemark() {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${PAYMENT.TRANSACTION_REMARK}`, requestBody)
}

function updateTransactionRemark(remarkObj) {
    const updateBody = {
        trans_id: remarkObj.trans_id,
        remark: remarkObj.remark
    }
    return apiHelper().patch(`${PAYMENT.TRANSACTION_UPDATE_REMARK}`, updateBody)
}

function getGatewayAccountHistoryLog(filter) {
    const requestOptions = new URLSearchParams({
        page: filter.pageNumber || 1,
        size: filter.size || 10,
    }).toString();

    return apiHelper().get(`${PAYMENT.PAYMENT}${PAYMENT.GATEWAY_ACCOUNT_HISTORY_LOG}/${filter.gatewayAccountID}?${requestOptions}`)
}