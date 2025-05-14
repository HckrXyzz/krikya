import { apiHelper } from '@/util'
import { API, SHARED } from '@/constants/constants'

export const affiliatePaymentService = {
  getBankAccountList,
  getBankAccountStatusList,
  createBankAccount,
  getBankAccount,
  updateBankAccount,
  updateBankAccountStatus,

  getMemberBankList,
  getMemberBank,
  updateMemberBank,
  deleteMemberBank,

  getPaymentBankList,
  getPaymentCurrencyList,
  getPaymentMethodList,
  getPaymentGatewayAccountList,
  getPaymentTransactionStatusList,
  getPaymentChannelGroupTypeList,

  getTransactionList,
  getTransaction,
  notifyMerchant,
  requeryTransaction,
  unlockProcessingTransaction,
  retriggerVendor,

  updateTransactionStatus,
  updateTransactionCheckListStatus,

  getTransactionCheckList,
  getMerchant,
  updateTransactionCheckList,
  addTransactionCheckList,

  getMemberGroupList,
  getMemberGroup,
  updateMemberGroup,
  createMemberGroup,
  getMemberChannelGroup,
  updateMemberChannelGroup,

  getMethodLimitList,
  updateMethodLimitStatus,
  getMethodLimit,
  updateMethodLimit,
  getMethod,
  getMethodList,
  createMethodLimit,
  updatePaymentMethodSorting,

  getMerchantMemberDetails,
  addMerchantMemberGroup,
  updateMerchantMemberGroup
}

const AFF_PAYMENT = {
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
  PAYMENT_METHOD_SORTING: '/Sorting'
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
    updatedBy: memberBankObj.updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.MEMBER_BANK}/${memberBankObj.id}`, requestBody)
}

function deleteMemberBank(id) {
  return apiHelper(AFF_PAYMENT.URL).delete(`${AFF_PAYMENT.MEMBER_BANK}/${id}`)
}

function getMemberBank(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MEMBER_BANK}/${id}`)
}

function getMemberBankList(filter = null) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestOptions = {
    params: {
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

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MEMBER_BANK}`, requestOptions)
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

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.BANK_ACCOUNT}`, requestOptions)
}

function getBankAccountStatusList() {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.BANK_ACCOUNT_STATUS}`)
}

function createBankAccount(bankAccountObj) {
  const requestBody = {
    accountName: bankAccountObj.accountName,
    accountNumber: bankAccountObj.accountNumber,
    bankID: bankAccountObj.bankID,
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
  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.BANK_ACCOUNT}`, requestBody)
}

function getBankAccount(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.BANK_ACCOUNT}/${id}`)
}

function updateBankAccount(bankAccountObj) {
  const requestBody = {
    accountName: bankAccountObj.accountName,
    bankID: bankAccountObj.bankID,
    transTypeName: bankAccountObj.transTypeName,
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
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.BANK_ACCOUNT}/${bankAccountObj.id}`, requestBody)
}

function updateBankAccountStatus(id, status, updatedBy) {
  const requestBody = {
    bankAccountStatusID: status,
    updatedBy: updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.BANK_ACCOUNT}/${id}`, requestBody)
}

function getPaymentBankList(filter = null) {
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
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.BANK}`, requestOptions)
}

function getPaymentCurrencyList(filter = null) {
  let requestOptions = {}

  if (filter != null)
    requestOptions = {
      params: {
        Code: filter.code
      }
    }

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.CURRENCY}`, requestOptions)
}

function getPaymentMethodList(filter, isDdl = false) {
  let apiParams = {}

  if (isDdl) {
    apiParams = {}
  } else {
    apiParams = {
      TransTypeName: filter.transactionType,
      Page: filter.pageNumber,
      ItemsPerPage: filter.pageSize
    }
  }

  const requestOptions = {
    params: apiParams
  }

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.METHOD}`, requestOptions)
}

function getPaymentGatewayAccountList(filter = null) {
  let requestOptions = {
    params: {
      Page: 0
    }
  }

  if (filter != null)
    requestOptions = {
      params: {
        Code: filter.code,
        Name: filter.name,
        IsMobileSupported: filter.isMobileSupport == -1 ? '' : filter.isMobileSupport != 0 ? true : false,
        IsActive: filter.gatewayAccountStatus == -1 ? '' : filter.gatewayAccountStatus != 0 ? true : false,
        Page: filter.pageNumber,
        ItemsPerPage: filter.pageSize
      }
    }
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.GATEWAY_ACCOUNT}`, requestOptions)
}

async function getPaymentTransactionStatusList() {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.TRANSACTION_STATUS}`)
}

function getPaymentChannelGroupTypeList() {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.CHANNEL_TYPE}`)
}

function getTransactionList(filter) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestOptions = {
    params: {
      TransID: filter.transactionId,
      MemberCode: filter.memberCode,
      TransTypeName: filter.transactionType,
      MethodID: filter.transactionMethod,
      GatewayAccountID: filter.transactionGatewayAccount,
      BankAccountID: filter.bankAccountId,
      TransStatusID: filter.transactionStatus.join(),
      CurrencyCode: filter.currencyCode,
      FilterFrom: filter.transactionStartDate,
      FilterTo: filter.transactionEndDate,
      Page: filter.pageNumber,
      ItemsPerPage: filter.pageSize,
      MerchantCode: merchantCode,
      isFullSearch: !filter.isPartialSearch
    }
  }
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.TRANSACTION}`, requestOptions)
}

function getTransaction(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.TRANSACTION}/${id}`)
}

function notifyMerchant(transID, updatedBy) {
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION}/${transID}${AFF_PAYMENT.NOTIFY_MERCHANT}?UpdatedBy=${updatedBy}`)
}

function requeryTransaction(transID) {
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION}/${transID}${AFF_PAYMENT.REQUERY_TRANSACTION}`)
}

function unlockProcessingTransaction(id, updatedBy) {
  const requestBody = {
    updatedBy: updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION}/${id}/${AFF_PAYMENT.FORCE_UPDATE}`, requestBody)
}

async function updateTransactionStatus(id, statusId, updatedBy, remark) {
  const requestBody = {
    transStatusID: statusId,
    updatedBy: updatedBy,
    remark: remark
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION}/${id}`, requestBody)
}

function updateTransactionCheckListStatus(verifyCheckListObj) {
  const requestBody = {
    isVerified: verifyCheckListObj.isVerified,
    remark: verifyCheckListObj.remark,
    updatedBy: verifyCheckListObj.updatedBy
  }

  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION}/${verifyCheckListObj.transID}${AFF_PAYMENT.TRANSACTION_CHECKLIST}/${verifyCheckListObj.id}`, requestBody)
}

function getTransactionCheckList() {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.TRANSACTION_CHECKLIST}`)
}

function getMerchant() {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MERCHANT}/${merchantCode}`)
}

function updateTransactionCheckList(checkListObj) {
  const requestBody = {
    verifyValue: checkListObj.verifyValue,
    isActive: checkListObj.isActive,
    remark: checkListObj.remark,
    updatedBy: checkListObj.updatedBy
  }

  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.TRANSACTION_CHECKLIST_CONF}/${checkListObj.id}`, requestBody)
}

function addTransactionCheckList(checkListObj) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

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
  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.TRANSACTION_CHECKLIST_CONF}`, requestBody)
}

function getMemberGroupList(filter, isDdl = false) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE
  let apiParams = {}

  if (isDdl) {
    apiParams = {
      Page: 0
    }
  } else {
    apiParams = {
      Page: filter.pageNumber,
      ItemsPerPage: filter.pageSize
    }
  }

  const requestOptions = {
    params: apiParams
  }

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER_GROUP}`, requestOptions)
}

function getMemberGroup(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MEMBER_GROUP}/${id}`)
}

function updateMemberGroup(memberGroupObj) {
  const requestBody = {
    name: memberGroupObj.name,
    remark: memberGroupObj.remark,
    updatedBy: memberGroupObj.updatedBy
  }

  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.MEMBER_GROUP}/${memberGroupObj.id}`, requestBody)
}

function createMemberGroup(memberGroupObj) {
  const requestBody = {
    name: memberGroupObj.name,
    remark: memberGroupObj.remark,
    createdBy: memberGroupObj.createdBy
  }

  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.MEMBER_GROUP}`, requestBody)
}

function getMemberChannelGroup(id) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER_GROUP}/${id}${AFF_PAYMENT.CHANNEL_GROUP}`)
}

function updateMemberChannelGroup(channelGroup) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestBody = {
    paymentChannelTypeID: channelGroup.paymentChannelType,
    accounts: channelGroup.account
  }

  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER_GROUP}/${channelGroup.memberGroupId}${AFF_PAYMENT.CHANNEL_GROUP}`, requestBody)
}

function getMethodLimitList(filter) {
  const requestOptions = {
    params: {
      MerchantCode: SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE,
      MemberGroupID: filter.memberGroup,
      MethodID: filter.method,
      CurrencyCode: filter.currencyCode,
      IsActive: filter.methodLimitStatus == -1 ? '' : filter.methodLimitStatus != 0 ? true : false,
      Page: filter.pageNumber,
      ItemsPerPage: filter.pageSize,
      TransTypeName: filter.transactionType
    }
  }
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.METHOD_LIMIT}`, requestOptions)
}

function updateMethodLimitStatus(id, status, updatedBy) {
  const requestBody = {
    isActive: status,
    updatedBy: updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.METHOD_LIMIT}/${id}`, requestBody)
}

function getMethodLimit(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.METHOD_LIMIT}/${id}`)
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
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.METHOD_LIMIT}/${methodLimitObj.id}`, requestBody)
}

function getMethod(id) {
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.METHOD}/${id}`)
}

function createMethodLimit(methodLimitObj) {
  const requestBody = {
    MerchantCode: SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE,
    methodID: methodLimitObj.methodId,
    currencyCode: methodLimitObj.currencyCode,
    limitConf: methodLimitObj.memberGroupLimit
  }

  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.METHOD_LIMIT}`, requestBody)
}

function getMerchantMemberDetails(memberCode) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER}/${memberCode}`)
}

function addMerchantMemberGroup(merchantMemberObj) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestBody = {
    realName: merchantMemberObj.realName,
    memberCode: merchantMemberObj.memberCode,
    memberGroupID: merchantMemberObj.memberGroupId
  }
  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER}`, requestBody)
}

function updateMerchantMemberGroup(merchantMemberObj) {
  let merchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestBody = {
    memberGroupID: merchantMemberObj.memberGroupId,
    UpdatedBy: merchantMemberObj.updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.MERCHANT}/${merchantCode}${AFF_PAYMENT.MEMBER}/${merchantMemberObj.memberCode}`, requestBody)
}

function retriggerVendor(id, updatedBy) {
  const requestBody = {
    updatedBy: updatedBy
  }
  return apiHelper(AFF_PAYMENT.URL).post(`${AFF_PAYMENT.TRANSACTION}/${id}/${AFF_PAYMENT.RETRIGGER_VENDOR}`, requestBody)
}

function updatePaymentMethodSorting(methodId, NewSorting, updatedBy) {
  let MerchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  const requestBody = {
    newSortNum: NewSorting,
    updatedBy: updatedBy
  }

  return apiHelper(AFF_PAYMENT.URL).put(`${AFF_PAYMENT.MERCHANT}/${MerchantCode}${AFF_PAYMENT.METHOD}/${methodId}${AFF_PAYMENT.PAYMENT_METHOD_SORTING}`, requestBody)
}

function getMethodList(filter = null) {
  let MerchantCode = SHARED.AFFILIATE_PAYMENT_MERCHANT_CODE

  let requestOptions = {}
  if (filter != null)
    requestOptions = {
      params: {
        TransTypeName: filter.transactionType
      }
    }
  return apiHelper(AFF_PAYMENT.URL).get(`${AFF_PAYMENT.MERCHANT}/${MerchantCode}${AFF_PAYMENT.METHOD}`, requestOptions)
}
