import {apiHelper} from '@/util'
import {API, SHARED} from '@/constants/constants'

export const paymentService = {
    getCurrencyList,
    getCurrency,
    createCurrency,
    updateCurrency,

    getGatewayAccount,
    getGatewayAccountList,
    updateGatewayAccountStatus,
    updateGatewayAccountMobileSupport,
    createGatewayAccount,
    updateGatewayAccount,
    getMemberGroupList,
    createMemberGroup,
    getMemberGroup,
    updateMemberGroup,
    getGatewayProviderList,
    getGatewayProvider,
    updateGatewayProvider,
    createGatewayProvider,
    createBank,
    getBankList,
    getBank,
    updateBank,

    getAllMethodList,
    getMethodList,
    createMethod,
    getMethod,
    updateMethod,
    updatePaymentMethodSorting,

    getBankAccountList,
    getBankAccountStatusList,
    createBankAccount,
    getBankAccount,
    updateBankAccount,
    updateBankAccountStatus,

    updateMemberBankAccountStatus,
    getTransactionList,
    getTransactionMethodList,
    getTransactionStatusList,
    getTransaction,
    getMethodLimitList,
    createMethodLimit,
    getMethodLimit,
    updateMethodLimit,
    updateMethodLimitStatus,
    paymentMethodLimitConfActivationByMethodID,
    getMerchant,
    updateMerchantMethod,
    updateMerchantCheckList,
    getTransactioCheckListList,
    getMerchantMemberDetail,
    updateMerchantMemberGroup,
    addMerchantMemberGroup,
    getChannelGroupDetail,
    getChannelGroupTypeList,
    updateChannelGroup,
    getMemberBankList,
    getMemberBank,
    updateMemberBank,
    deleteMemberBank,
    updateTransactionStatus,
    unlockProcessingTransaction,
    addMerchantCheckList,
    notifyMerchant,
    requeryTransaction,
    updateTransactionCheckListStatus,
    getTransactionListCount,
    retriggerVendor,

    getBlacklistItems,
    getBlacklistList,
    getBlacklist,
    updateBlacklist,
    createBlacklist,
    refreshTransactionCheckList
}

const PAYMENT = {
    URL: API.PAYMENT_URL,
    TRANSACTION: '/Transactions',
    FORCE_UPDATE: 'ForceUpdate',
    METHOD: '/Methods',
    GATEWAY_ACCOUNT: '/GatewayAccounts',
    CURRENCY: '/Currencies',
    MEMBER_GROUP: '/MemberGroup',
    BANK: '/banks',
    METHOD_LIMIT: '/MethodLimitConf',
    GATEWAY_PROVIDER: '/GatewayProvider',
    BANK_ACCOUNT: '/BackAccounts',
    BANK_ACCOUNT_STATUS: '/BankAccountStatus',
    TRANSACTION_STATUS: '/TransactionStatus',
    MERCHANT: '/Merchants',
    TRANSACTION_CHECKLIST_CONF: '/TransChecklistConf',
    TRANSACTION_CHECKLIST: '/TransChecklistType',
    MEMBER: '/Members',
    CHANNEL_GROUP: '/PaymentChannelGroup',
    CHANNEL_TYPE: '/PaymentChannelType',
    MEMBER_BANK: '/MemberBankAccounts',
    NOTIFY_MERCHANT: '/NotifyMerchant',
    REQUERY_TRANSACTION: '/Requery',
    TRANSACTION_OVERVIEW: '/Transactions/Overview',
    RETRIGGER_VENDOR: 'RetriggerVendor',
    BLACKLIST_ITEMS: '/BlacklistItem',
    BLACKLIST: '/Blacklist',
    TRANSACTION_CHECKLIST_REFRESH: '/TransChecklistType/Refresh',
    PAYMENT_METHOD_SORTING: '/Sorting',
    PAYMENT_MEMBER_BANK_ACCOUNT_STATUS: '/MemberBankAccounts'
}

function updateMemberBankAccountStatus(filter) {
    let id = filter.id
    const requestOptions = {
        accountName: filter.accountName,
        accountNumber: filter.accountNumber,
        province: filter.province,
        branch: filter.branch,
        city: filter.city,
        bankName: filter.bankName,
        remark: filter.remark,
        updatedBy: filter.updatedBy,
        isActive: filter.isActive
    }

    return apiHelper(PAYMENT.URL).put(`${PAYMENT.PAYMENT_MEMBER_BANK_ACCOUNT_STATUS}/${filter.id}`, requestOptions)
}

function getTransactionListCount(filter) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestOptions = {
        params: {
            TransStatusID: filter.status,
            MerchantCode: merchantCode
        }
    }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.TRANSACTION_OVERVIEW}`, requestOptions)
}

function updateTransactionCheckListStatus(verifyCheckListObj) {
    const requestBody = {
        isVerified: verifyCheckListObj.isVerified,
        remark: verifyCheckListObj.remark,
        updatedBy: verifyCheckListObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${verifyCheckListObj.transID}${PAYMENT.TRANSACTION_CHECKLIST}/${verifyCheckListObj.id}`, requestBody)
}

function notifyMerchant(transID, updatedBy) {
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${transID}${PAYMENT.NOTIFY_MERCHANT}?UpdatedBy=${updatedBy}`)
}

function requeryTransaction(transID) {
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${transID}${PAYMENT.REQUERY_TRANSACTION}`)
}

async function updateTransactionStatus(id, statusId, updatedBy, remark) {
    const requestBody = {
        transStatusID: statusId,
        updatedBy: updatedBy,
        remark: remark
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${id}`, requestBody)
}

function unlockProcessingTransaction(id, updatedBy) {
    const requestBody = {
        updatedBy: updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${id}/${PAYMENT.FORCE_UPDATE}`, requestBody)
}

function updateMemberBank(memberBankObj) {
    const requestBody = {
        accountName: memberBankObj.accountName,
        accountNumber: memberBankObj.accountNumber,
        province: memberBankObj.province,
        branch: memberBankObj.branch,
        city: memberBankObj.city,
        bankName: memberBankObj.bankName,
        remark: memberBankObj.remark,
        updatedBy: memberBankObj.updatedBy,
        isActive: memberBankObj.isActive
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.MEMBER_BANK}/${memberBankObj.id}`, requestBody)
}

function deleteMemberBank(id) {
    return apiHelper(PAYMENT.URL).delete(`${PAYMENT.MEMBER_BANK}/${id}`)
}

function getMemberBank(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MEMBER_BANK}/${id}`)
}

function getMemberBankList(filter = null) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE

    const requestOptions = {
        params: {
            MemberId: filter.memberId,
            MemberCode: filter.memberCode,
            MerchantCode: merchantCode,
            AccountName: filter.accountName,
            BankName: filter.bankName,
            AccountNumber: filter.accountNumber,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize,
            isFullSearch: !filter.isPartialSearch
        }
    }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MEMBER_BANK}`, requestOptions)
}

function updateChannelGroup(channelGroup) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestBody = {
        paymentChannelTypeID: channelGroup.paymentChannelType,
        accounts: channelGroup.account
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER_GROUP}/${channelGroup.memberGroupId}${PAYMENT.CHANNEL_GROUP}`, requestBody)
}

function getChannelGroupTypeList() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.CHANNEL_TYPE}`)
}

function getChannelGroupDetail(id) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER_GROUP}/${id}${PAYMENT.CHANNEL_GROUP}`)
}

function updateMerchantMemberGroup(merchantMemberObj) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestBody = {
        memberGroupID: merchantMemberObj.memberGroupId,
        UpdatedBy: merchantMemberObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER}/${merchantMemberObj.memberCode}`, requestBody)
}

function addMerchantMemberGroup(merchantMemberObj) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestBody = {
        realName: merchantMemberObj.realName,
        memberCode: merchantMemberObj.memberCode,
        memberGroupID: merchantMemberObj.memberGroupId
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER}`, requestBody)
}

function getMerchantMemberDetail(memberCode) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER}/${memberCode}`)
}

function getMerchant(merchantCode = '') {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MERCHANT}/${merchantCode}`)
}

function updateMerchantMethod(data) {
    const requestBody = {
        methods: data.allowedMethods,
        updatedBy: data.updatedBy
    }

    return apiHelper(PAYMENT.URL).put(`${PAYMENT.MERCHANT}/${data.merchantCode}`, requestBody)
}

function updateMerchantCheckList(checkListObj) {
    const requestBody = {
        verifyValue: checkListObj.verifyValue,
        isActive: checkListObj.isActive,
        remark: checkListObj.remark,
        updatedBy: checkListObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION_CHECKLIST_CONF}/${checkListObj.id}`, requestBody)
}

function addMerchantCheckList(checkListObj) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestBody = {
        merchantCode: merchantCode,
        transChecklistConf: [
            {
                transChecklistTypeID: checkListObj.transChecklistTypeID,
                transTypeName: checkListObj.transTypeName,
                isActive: checkListObj.isActive,
                remark: checkListObj.remark,
                verifyValue: checkListObj.verifyValue
            }
        ]
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.TRANSACTION_CHECKLIST_CONF}`, requestBody)
}

function getTransactioCheckListList() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.TRANSACTION_CHECKLIST}`)
}

function getGatewayAccountList(filter, isDdl = false) {
    let apiParams = {}

    if (isDdl) {
        apiParams = {
            Page: 0,
            IsActive: filter.gatewayAccountStatus == -1 ? '' : filter.gatewayAccountStatus != 0 ? true : false
        }
    } else {
        apiParams = {
            Code: filter.code,
            Name: filter.name,
            IsMobileSupported: filter.isMobileSupport == -1 ? '' : filter.isMobileSupport != 0 ? true : false,
            IsActive: filter.gatewayAccountStatus == -1 ? '' : filter.gatewayAccountStatus != 0 ? true : false,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize
        }
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.GATEWAY_ACCOUNT}`, requestOptions)
}

function updateGatewayAccountStatus(id, isActive) {
    const requestBody = {isActive: isActive}
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.GATEWAY_ACCOUNT}/${id}`, requestBody)
}

function updateGatewayAccountMobileSupport(id, isMobileSupport) {
    const requestBody = {isMobileSupported: isMobileSupport}
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.GATEWAY_ACCOUNT}/${id}`, requestBody)
}

function createGatewayAccount(gatewayAccountObj) {
    let gatewayLimitConfs = []

    gatewayAccountObj.gatewayLimitConf.forEach(limitConf => {
        let g = {
            methodID: limitConf.methodID,
            dailyTrans: limitConf.dailyTrans,
            minAmountPerTrx: limitConf.minAmountPerTrx,
            maxAmountPerTrx: limitConf.maxAmountPerTrx,
            dailyAmount: limitConf.dailyAmount,
            remark: limitConf.remark,
            updatedBy: gatewayAccountObj.updatedBy
        }
        gatewayLimitConfs.push(g)
    })

    const requestBody = {
        gatewayProviderID: gatewayAccountObj.gatewayProviderID,
        code: gatewayAccountObj.code,
        accountName: gatewayAccountObj.accountName,
        apiCode: gatewayAccountObj.apiCode,
        apiKey1: gatewayAccountObj.apiKey1,
        apiKey2: gatewayAccountObj.apiKey2,
        requestTransUrl: gatewayAccountObj.requestTransUrl,
        queryTransUrl: gatewayAccountObj.queryTransUrl,
        isMobileSupported: gatewayAccountObj.isMobileSupported,
        whitelistedIP: gatewayAccountObj.whitelistedIP,
        isActive: gatewayAccountObj.isActive,
        remark: gatewayAccountObj.remark,
        supportedBanks: gatewayAccountObj.supportedBanks,
        supportedCurrencies: gatewayAccountObj.supportedCurrencies,
        gatewayLimitConf: gatewayLimitConfs
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.GATEWAY_ACCOUNT}`, requestBody)
}

function getGatewayAccount(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.GATEWAY_ACCOUNT}/${id}`)
}

function updateGatewayAccount(gatewayAccountObj) {
    let gatewayLimitConfs = []

    gatewayAccountObj.gatewayLimitConf.forEach(limitConf => {
        let g = {
            methodID: limitConf.methodID,
            dailyTrans: limitConf.dailyTrans,
            minAmountPerTrx: limitConf.minAmountPerTrx,
            maxAmountPerTrx: limitConf.maxAmountPerTrx,
            dailyAmount: limitConf.dailyAmount,
            remark: limitConf.remark,
            updatedBy: gatewayAccountObj.updatedBy
        }
        gatewayLimitConfs.push(g)
    })

    const requestBody = {
        gatewayProviderID: gatewayAccountObj.gatewayProviderID,
        code: gatewayAccountObj.code,
        accountName: gatewayAccountObj.accountName,
        apiCode: gatewayAccountObj.apiCode,
        apiKey1: gatewayAccountObj.apiKey1,
        apiKey2: gatewayAccountObj.apiKey2,
        requestTransUrl: gatewayAccountObj.requestTransUrl,
        queryTransUrl: gatewayAccountObj.queryTransUrl,
        isMobileSupported: gatewayAccountObj.isMobileSupported,
        whitelistedIP: gatewayAccountObj.whitelistedIP,
        isActive: gatewayAccountObj.isActive,
        remark: gatewayAccountObj.remark,
        supportedBanks: gatewayAccountObj.supportedBanks,
        supportedCurrencies: gatewayAccountObj.supportedCurrencies,
        gatewayLimitConf: gatewayLimitConfs
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.GATEWAY_ACCOUNT}/${gatewayAccountObj.id}`, requestBody)
}

function getMemberGroupList(filter = null) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    let requestOptions = {
        params: {
            Page: 0
        }
    }

    if (filter != null)
        requestOptions = {
            params: {
                Page: filter.pageNumber,
                ItemsPerPage: filter.pageSize
            }
        }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER_GROUP}`, requestOptions)
}

function getMemberGroup(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MEMBER_GROUP}/${id}`)
}

function createMemberGroup(memberGroupObj) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestBody = {
        name: memberGroupObj.name,
        remark: memberGroupObj.remark,
        createdBy: memberGroupObj.createdBy
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.MERCHANT}/${merchantCode}${PAYMENT.MEMBER_GROUP}`, requestBody)
}

function updateMemberGroup(memberGroupObj) {
    const requestBody = {
        name: memberGroupObj.name,
        remark: memberGroupObj.remark,
        methods: memberGroupObj.methods,
        updatedBy: memberGroupObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.MEMBER_GROUP}/${memberGroupObj.id}`, requestBody)
}

function getGatewayProviderList(filter = null) {
    let requestOptions
    if (filter != null)
        requestOptions = {
            params: {
                Name: filter.name,
                ContactEmail: filter.email,
                ContactIdOrNumber: filter.contact,
                Page: filter.pageNumber,
                ItemsPerPage: filter.pageSize
            }
        }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.GATEWAY_PROVIDER}`, requestOptions)
}

function getGatewayProvider(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.GATEWAY_PROVIDER}/${id}`)
}

function updateGatewayProvider(gatewayProviderObj) {
    const requestBody = {
        name: gatewayProviderObj.name,
        contactEmail: gatewayProviderObj.contactEmail,
        contactIdOrNumber: gatewayProviderObj.contactIdOrNumber,
        remark: gatewayProviderObj.remark,
        updatedBy: gatewayProviderObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.GATEWAY_PROVIDER}/${gatewayProviderObj.id}`, requestBody)
}

function createGatewayProvider(gatewayProviderObj) {
    const requestBody = {
        name: gatewayProviderObj.name,
        contactEmail: gatewayProviderObj.email,
        contactIdOrNumber: gatewayProviderObj.contactNumber,
        remark: gatewayProviderObj.remark,
        createdBy: gatewayProviderObj.createdBy
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.GATEWAY_PROVIDER}`, requestBody)
}

function getBankList(filter = null) {
    let requestOptions = {
        params: {
            Page: 0
        }
    }

    if (filter != null)
        requestOptions = {
            params: {
                Name: filter.bankName,
                BankCode: filter.bankCode,
                CurrencyCode: filter.currencyCode,
                Page: filter.pageNumber,
                ItemsPerPage: filter.pageSize
            }
        }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BANK}`, requestOptions)
}

function createBank(bankObj) {
    const requestBody = {
        name: bankObj.name,
        bankCode: bankObj.bankCode.toUpperCase(),
        currencyCode: bankObj.currencyCode,
        remark: bankObj.remark
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.BANK}`, requestBody)
}

function getBank(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BANK}/${id}`)
}

function updateBank(bankObj) {
    const requestBody = {
        name: bankObj.name,
        currencyCode: bankObj.currencyCode,
        remark: bankObj.remark,
        updatedBy: bankObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.BANK}/${bankObj.id}`, requestBody)
}

function getCurrencyList(filter = null) {
    let requestOptions = {}
    if (filter != null)
        requestOptions = {
            params: {
                Code: filter.code
            }
        }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.CURRENCY}`, requestOptions)
}

function createCurrency(currencyObj) {
    const requestBody = {
        code: currencyObj.code.toUpperCase(),
        exchangeRate: currencyObj.exchangeRate,
        remark: currencyObj.remark
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.CURRENCY}`, requestBody)
}

function getCurrency(code) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.CURRENCY}/${code}`)
}

function updateCurrency(currencyObj) {
    const requestBody = {
        exchangeRate: currencyObj.exchangeRate,
        remark: currencyObj.remark,
        updatedBy: currencyObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.CURRENCY}/${currencyObj.code}`, requestBody)
}

function getMethodList(filter = null) {
    let MerchantCode = SHARED.PAYMENT_MERCHANT_CODE

    let requestOptions = {}
    if (filter != null)
        requestOptions = {
            params: {
                TransTypeName: filter.transactionType,
                IsActive: filter.isActive
            }
        }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.MERCHANT}/${MerchantCode}${PAYMENT.METHOD}`, requestOptions)
}

function getAllMethodList(filter = null) {
    let requestOptions = {}
    if (filter != null)
        requestOptions = {
            params: {
                TransTypeName: filter.transactionType,
                Page: filter.pageNumber,
                ItemsPerPage: filter.pageSize
            }
        }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.METHOD}`, requestOptions)
}

function createMethod(methodObj) {
    const requestBody = {
        code: methodObj.code.toUpperCase(),
        name: methodObj.name,
        transTypeName: methodObj.transactionType,
        supportedCurrencies: methodObj.supportedCurrencies,
        remark: methodObj.remark
    }
    let MerchantCode = SHARED.PAYMENT_MERCHANT_CODE
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.MERCHANT}/${MerchantCode}${PAYMENT.METHOD}`, requestBody)
}

function getMethod(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.METHOD}/${id}`)
}

function updateMethod(methodObj) {
    const requestBody = {
        name: methodObj.name,
        transTypeName: methodObj.transTypeName,
        supportedCurrencies: methodObj.supportedCurrencies,
        remark: methodObj.remark,
        localizations: methodObj.localizations,
        updatedBy: methodObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.METHOD}/${methodObj.id}`, requestBody)
}

function getBankAccountList(filter, isDdl = false) {
    let apiParams = {}

    if (isDdl) {
        apiParams = {
            Page: 0,
            BankAccountStatusID: filter.bankAccountStatus
        }
    } else {
        apiParams = {
            AccountName: filter.accountName,
            AccountShortCode: filter.accountShortCode,
            TransTypeName: filter.transTypeName,
            BankID: filter.bankId,
            BankAccountStatusID: filter.bankAccountStatus,
            currencyCode: filter.currencyCode,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize
        }
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BANK_ACCOUNT}`, requestOptions)
}

function getBankAccountStatusList() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BANK_ACCOUNT_STATUS}`)
}

function createBankAccount(bankAccountObj) {
    const requestBody = {
        accountName: bankAccountObj.accountName,
        accountNumber: bankAccountObj.accountNumber,
        bankID: bankAccountObj.bankID,
        shortCode: bankAccountObj.shortCode,
        transTypeName: bankAccountObj.transTypeName,
        bankAccountStatusID: bankAccountObj.bankAccountStatusID,
        branch: bankAccountObj.branch,
        province: bankAccountObj.province,
        city: bankAccountObj.city,
        remark: bankAccountObj.remark,
        createdBy: bankAccountObj.createdBy,
        bankAccountLimitConf: {
            minAmountPerTrx: bankAccountObj.minTransactionLimit,
            maxAmountPerTrx: bankAccountObj.maxTransactionLimit,
            dailyAmount: bankAccountObj.maxDailyAmount,
            dailyTrans: bankAccountObj.dailyLimitTransaction,
            remark: bankAccountObj.dailyLimitTransaction.remark
        }
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.BANK_ACCOUNT}`, requestBody)
}

function getBankAccount(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BANK_ACCOUNT}/${id}`)
}

function updateBankAccount(bankAccountObj) {
    const requestBody = {
        accountName: bankAccountObj.accountName,
        bankID: bankAccountObj.bankID,
        transTypeName: bankAccountObj.transTypeName,
        shortCode: bankAccountObj.shortCode,
        bankAccountStatusID: bankAccountObj.bankAccountStatusID,
        branch: bankAccountObj.branch,
        province: bankAccountObj.province,
        city: bankAccountObj.city,
        remark: bankAccountObj.remark,
        updatedBy: bankAccountObj.updatedBy,
        bankAccountLimitConf: {
            minAmountPerTrx: bankAccountObj.minTransactionLimit,
            maxAmountPerTrx: bankAccountObj.maxTransactionLimit,
            dailyAmount: bankAccountObj.maxDailyAmount,
            dailyTrans: bankAccountObj.dailyLimitTransaction,
            remark: bankAccountObj.remark,
            updatedBy: bankAccountObj.updatedBy
        }
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.BANK_ACCOUNT}/${bankAccountObj.id}`, requestBody)
}

function updateBankAccountStatus(id, status, updatedBy) {
    const requestBody = {
        bankAccountStatusID: status,
        updatedBy: updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.BANK_ACCOUNT}/${id}`, requestBody)
}

function getTransactionList(filter) {
    let merchantCode = SHARED.PAYMENT_MERCHANT_CODE
    const requestOptions = {
        params: {
            TransID: filter.transactionId,
            MemberCode: filter.memberCode,
            TransTypeName: filter.transactionType,
            MethodID: filter.transactionMethod == -1 ? '' : filter.transactionMethod,
            GatewayAccountID: filter.transactionGatewayAccount,
            BankAccountID: filter.bankAccountId,
            TransStatusID: filter.transactionStatus.join(),
            CurrencyCode: filter.currencyCode,
            FilterFrom: filter.transactionStartDate,
            FilterTo: filter.transactionEndDate,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize,
            MerchantCode: merchantCode,
            isFullSearch: !filter.isPartialSearch,
            SiteMemberId: filter.siteMemberId
        }
    }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.TRANSACTION}`, requestOptions)
}

function getTransactionMethodList() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.METHOD}`)
}

async function getTransactionStatusList() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.TRANSACTION_STATUS}`)
}

function getTransaction(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.TRANSACTION}/${id}`)
}

function getMethodLimitList(filter) {
    const requestOptions = {
        params: {
            MerchantCode: SHARED.PAYMENT_MERCHANT_CODE,
            MemberGroupID: filter.memberGroup,
            MethodID: filter.method == -1 ? '' : filter.method,
            CurrencyCode: filter.currencyCode,
            IsActive: filter.memberConfStatus == -1 ? '' : filter.memberConfStatus != 0 ? true : false,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize,
            TransTypeName: filter.transactionType
        }
    }
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.METHOD_LIMIT}`, requestOptions)
}

function createMethodLimit(methodLimitObj) {
    const requestBody = {
        MerchantCode: SHARED.PAYMENT_MERCHANT_CODE,
        methodID: methodLimitObj.methodId,
        currencyCode: methodLimitObj.currencyCode,
        limitConf: methodLimitObj.memberGroupLimit
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.METHOD_LIMIT}`, requestBody)
}

function getMethodLimit(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.METHOD_LIMIT}/${id}`)
}

function updateMethodLimit(methodLimitObj) {
    const requestBody = {
        minAmountPerTrx: methodLimitObj.minAmountPerTrx,
        maxAmountPerTrx: methodLimitObj.maxAmountPerTrx,
        dailyAmount: methodLimitObj.dailyAmount,
        dailyTrans: methodLimitObj.dailyTrans,
        remark: methodLimitObj.remark,
        isActive: methodLimitObj.isActive,
        updatedBy: methodLimitObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.METHOD_LIMIT}/${methodLimitObj.id}`, requestBody)
}

function updateMethodLimitStatus(id, status, updatedBy) {
    const requestBody = {
        isActive: status,
        updatedBy: updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.METHOD_LIMIT}/${id}`, requestBody)
}

function retriggerVendor(id, updatedBy) {
    const requestBody = {
        updatedBy: updatedBy
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.TRANSACTION}/${id}/${PAYMENT.RETRIGGER_VENDOR}`, requestBody)
}

function getBlacklistItems() {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BLACKLIST_ITEMS}`)
}

function getBlacklistList(filter) {
    const requestOptions = {
        params: {
            MerchantCode: filter.merchantCode,
            MemberCode: filter.memberCode,
            MemberId: filter.memberId,
            BlacklistedValue: filter.blacklistedValue,
            IsWhitelisted: filter.isWhitelisted == -1 ? '' : filter.isWhitelisted != 0 ? true : false,
            BlacklistItemID: filter.blacklistItemID == -1 ? '' : filter.blacklistItemID,
            Page: filter.pageNumber,
            ItemsPerPage: filter.pageSize,
            isFullSearch: !filter.isPartialSearch
        }
    }

    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BLACKLIST}`, requestOptions)
}

function getBlacklist(id) {
    return apiHelper(PAYMENT.URL).get(`${PAYMENT.BLACKLIST}/${id}`)
}

function createBlacklist(blacklistObj) {
    const requestBody = {
        merchantCode: blacklistObj.merchantCode,
        memberCode: blacklistObj.memberCode,
        blacklistItemID: blacklistObj.blacklistItemID,
        blacklistedValue: blacklistObj.blacklistedValue,
        isWhitelisted: blacklistObj.isWhitelisted === 1,
        remark: blacklistObj.remark
    }
    return apiHelper(PAYMENT.URL).post(`${PAYMENT.BLACKLIST}`, requestBody)
}

function updateBlacklist(id, blacklistObj) {
    const requestBody = {
        isWhitelisted: blacklistObj.isWhitelisted,
        remark: blacklistObj.remark,
        updatedBy: blacklistObj.updatedBy
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.BLACKLIST}/${id}`, requestBody)
}

function refreshTransactionCheckList(checkListObj) {
    const requestBody = {
        TransChecklistTypeID: checkListObj.TransChecklistTypeID.toString()
    }
    return apiHelper(PAYMENT.URL).put(`${PAYMENT.TRANSACTION}/${checkListObj.transID}${PAYMENT.TRANSACTION_CHECKLIST_REFRESH}`, requestBody)
}

function paymentMethodLimitConfActivationByMethodID(activationObj) {
    const requestBody = {
        methodID: activationObj.methodID,
        isActivate: activationObj.isActivate,
        remark: activationObj.remark,
        updatedBy: activationObj.updatedBy
    }

    return apiHelper(PAYMENT.URL).patch(`${PAYMENT.METHOD_LIMIT}`, requestBody)
}

function updatePaymentMethodSorting(methodId, NewSorting, updatedBy) {
    let MerchantCode = SHARED.PAYMENT_MERCHANT_CODE

    const requestBody = {
        newSortNum: NewSorting,
        updatedBy: updatedBy
    }

    return apiHelper(PAYMENT.URL).put(`${PAYMENT.MERCHANT}/${MerchantCode}${PAYMENT.METHOD}/${methodId}${PAYMENT.PAYMENT_METHOD_SORTING}`, requestBody)
}
