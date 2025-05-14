import {parseEnv} from '@/util/config'
/* e.g. import { SHARED, SESSION } from '@/constants/constants' */
const SHARED = Object.freeze({
    SUPPORTED_BONUS_PLATFORM: ['mobile'],
    SUPPORTED_PLATFORMS: ['desktop', 'mobile'],
    THEME_COLOUR_PRIMARY: process.env.VUE_APP_THEME_COLOUR_PRIMARY,
    THEME_COLOUR_PRIMARY_SUB: process.env.VUE_APP_THEME_COLOUR_PRIMARY_SUB,
    DOMAIN_LIST: process.env.VUE_APP_DOMAIN_LIST,
    THEME_COLOUR_SECONDARY: process.env.VUE_APP_THEME_COLOUR_SECONDARY,
    THEME_COLOUR_INFO: process.env.VUE_APP_THEME_COLOUR_INFO,
    THEME_COLOUR_ALT_BACKGROUND: process.env.VUE_APP_THEME_COLOUR_ALT_BACKGROUND,
    BRAND_ENV: process.env.VUE_APP_BRAND_ENV,
    BRAND_CODE: process.env.VUE_APP_BRAND_CODE,
    MAIN_BRAND_NAME: process.env.VUE_APP_MAIN_BRAND_NAME,
    BRAND_IDENTITY: process.env.VUE_APP_DEFAULT_BRAND_IDENTITY_KEY,
    // PREFIX_NUMBER: (sessionStorage.getItem("setCurrency") == null ? process.env.VUE_APP_DEFAULT_CURRENCY : sessionStorage.getItem("setCurrency")) == 'BDT' ? process.env.VUE_APP_DEFAULT_PREFIX_NUMBER_BDT : process.env.VUE_APP_DEFAULT_PREFIX_NUMBER_INR,
    PREFIX_NUMBER: (sessionStorage.getItem("setCurrency") == null ? process.env.VUE_APP_DEFAULT_CURRENCY : sessionStorage.getItem("setCurrency")) == 'BDT'
        ? process.env.VUE_APP_DEFAULT_PREFIX_NUMBER_BDT
        : ((sessionStorage.getItem("setCurrency") == 'INR') ? process.env.VUE_APP_DEFAULT_PREFIX_NUMBER_INR
            : ((sessionStorage.getItem("setCurrency") == 'NPR') ? process.env.VUE_APP_DEFAULT_PREFIX_NUMBER_NPR : '')),
    IS_MULTI_CURRENCY: parseEnv(process.env.VUE_APP_IS_MULTI_CURRENCY, false),
    DEFAULT_LAYOUT: 'layout-without-menu',
    DEFAULT_CURRENCY: sessionStorage.getItem("setCurrency") == null ? process.env.VUE_APP_DEFAULT_CURRENCY : sessionStorage.getItem("setCurrency"),
    CURRENCY_CODE: sessionStorage.getItem("setCurrencyCode") == null ? process.env.VUE_APP_DEFAULT_CURRENCY_LOGO : sessionStorage.getItem("setCurrencyCode"),
    BRACKET_CURRENCY_CODE: sessionStorage.getItem("setCurrencyCode") == null ? process.env.VUE_APP_DEFAULT_CURRENCY_LOGO : sessionStorage.getItem("setCurrencyCode"),
    DEFAULT_LANGUAGE: process.env.VUE_APP_DEFAULT_LANGUAGE,
    TURNSTILE_KEY:process.env.VUE_APP_TURNSTILE_KEY,
    FALLBACK_CURRENCY: 'BDT',
    FALLBACK_CURRENCY_CODE: '৳',
    FALLBACK_LANGUAGE: 'en',
    SORT_ASC: 'asc',
    SORT_DESC: 'desc',
    SUM_WALLET: 'sum_wallets',
    AMOUNT: 'amount',
    MEMBER_ID: 'id',
    SUPPORTED_LANGUAGES: process.env.VUE_APP_AVAILABLE_LANGUAGE.split(','),
    SUPPORTED_GAME_LANGUAGES: process.env.VUE_APP_AVAILABLE_LANGUAGE.split(','),
    SUPPORTED_NAME_TYPE: process.env.VUE_APP_SUPPORTED_NAME_TYPE.split(','),
    SAVE_USER_SETTING: parseEnv(process.env.VUE_APP_SAVE_USER_SETTING, true),
    DEFAULT_ALL_VALUE: -1,
    DEFAULT_ALL_VALUE_STR: '',
    DEFAULT_EMPTY_VALUE_STR: '',
    DEFAULT_PAGE_NUMBER: 1,
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 9999,
    NOTIFY_DEPOSIT: process.env.VUE_APP_NOTIFY_DEPOSIT,
    DEFAULT_BANNER_IMAGE_TYPE: process.env.VUE_APP_DEFAULT_IMAGE_BANNER_TYPE,
    NOTIFY_WITHDRAWAL: process.env.VUE_APP_NOTIFY_WITHDRAWAL,
    NOTIFY_BONUS: process.env.VUE_APP_NOTIFY_BONUS,
    NOTIFY_REDEMPTION: process.env.VUE_APP_NOTIFY_REDEMPTION,
    NOTIFY_AGENT_WITHDRAWAL: process.env.VUE_APP_NOTIFY_AGENT_WITHDRAWAL,
    DEFAULT_ALL_BONUS_ID: 'all',
    DEFAULT_APPLY_PROMO_DEPOSIT_PAGE: '/deposit/?bonusid=123',
    DEFAULT_MANUAL_TNC_PAGE: `window.open("www.google.com")`,
    DEFAULT_UPLOAD_IMAGE_TYPE: 'image/png',
    DEFAULT_MAXIMUM_UPLOAD_IMAGE_SIZE: process.env.VUE_APP_DEFAULT_MAXIMUM_UPLOAD_IMAGE_SIZE,
    DEFAULT_BONUS_BANNER_DIMENSION: process.env.VUE_APP_BONUS_BANNER_DIMENSION,
    PAGE_SIZE_LIST: [5, 10, 50, 100, 500, 1000],
    DIVIDER_CLOSE: 'close',
    DIVIDER_NEXT: 'arrow_forward_ios',
    TOKEN_EXPIRY: 1800, // 30 min in seconds
    USER_IDLE_TIME: 3600000, // 60 min in miliseconds
    PAYMENT_MERCHANT_CODE: process.env.VUE_APP_PAYMENT_MERCHANT_CODE,
    AFFILIATE_PAYMENT_MERCHANT_CODE: process.env.VUE_APP_AFF_PAYMENT_MERCHANT_CODE,
    PAYMENT_COMPLIANCE_CHECK: parseEnv(process.env.VUE_APP_PAYMENT_COMPLIANCE_CHECK, false),
    AFF_PAYMENT_COMPLIANCE_CHECK: parseEnv(process.env.VUE_APP_AFF_PAYMENT_COMPLIANCE_CHECK, false),
    DEFAULT_DATE: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    DEFAULT_PRIOR_CURRENT_MONTH_START_TIME: new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getFullYear(), new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getMonth(), 1).toISOString().substr(0, 10) +
        ' 00:00:00',
    DEFAULT_PRIOR_ONE_MONTH_START_TIME:
        new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getFullYear(), new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getMonth() - 1, 2).toISOString().substr(0, 10) +
        ' 00:00:00',
    DEFAULT_PRIOR_THREE_MONTH_START_TIME:
        new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).setMonth(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getMonth() - 3)).toISOString().substr(0, 10) +
        ' 00:00:00',
    DEFAULT_PRIOR_ONE_WEEK_START_TIME:
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10) + ' 00:00:00',
    DEFAULT_START_TIME: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10) + ' 00:00:00',
    DEFAULT_END_TIME: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10) + ' 23:59:59',
    DEFAULT_END_DATE: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    DEFAULT_ONE_HOUR_START_TIME: new Date(Date.now() - 60 * 60 * 1000 - (new Date().getTimezoneOffset()  * 60000)).toISOString().substr(0, 10) + ' ' + new Date(Date.now() - 60 * 60 * 1000 - (new Date().getTimezoneOffset())).toTimeString().substr(0, 5) + ':00',
    DEFAULT_30_DAYS_BEFORE: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10) + ' 00:00:00',
    FIRST_DATE_TIME_OF_MONTH: new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getFullYear(), new Date(Date.now()).getMonth(), 2)
        .toISOString()
        .substr(0, 10) + ' 00:00:00',
    SEVEN_DATE_BEFORE:
        new Date(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
            .toISOString()
            .substr(0, 10) + ' 00:00:00',
    DEFAULT_YESTERDAY_END_TIME:
        new Date(new Date().setDate(new Date().getDate() - 1))
            .toISOString()
            .substr(0, 10),
    DEFAULT_YESTERDAY_START_TIME:
        new Date(new Date().setDate(new Date().getDate() - 1))
            .toISOString()
            .substr(0, 10),
    FIRST_DATE_OF_MONTH: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1))
        .toISOString()
        .split('T')[0],
    LAST_DATE_OF_MONTH: new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth() + 1, 0))
        .toISOString()
        .split('T')[0],
    FIRST_DATE_OF_WEEK: new Date(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000).setDate(
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getDate() - new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getDay()
        )
    )
        .toISOString()
        .substr(0, 10),
    LAST_DATE_OF_WEEK: new Date(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000).setDate(
            new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getDate() - new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getDay() + 6
        )
    )
        .toISOString()
        .substr(0, 10),
    FIRST_DATETIME_OF_MONTH:
        new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getFullYear(), new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getMonth(), 2).toISOString().substr(0, 10) +
        ' 00:00:00',
    LAST_DATETIME_OF_MONTH:
        new Date(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getFullYear(), new Date(Date.now() - new Date().getTimezoneOffset() * 60000).getMonth() + 1, 1).toISOString().substr(0, 10) +
        ' 23:59:59',
    USER_ACCESSIBLE_CONFIGS: process.env.VUE_APP_USER_ACCESSIBLE_CONFIGS,
    USER_ACCESSIBLE_AFF_CONFIGS: process.env.VUE_APP_USER_ACCESSIBLE_AFF_CONFIGS,
    FILE_UPLOAD_TYPE: process.env.VUE_APP_FILE_UPLOAD_TYPE,
    NOTIFY_SOUND: process.env.VUE_APP_NOTIFY_SOUND,
    DEPOSIT_SOUND: process.env.VUE_APP_DEPOSIT_SOUND,
    WITHDRAWAL_SOUND: process.env.VUE_APP_WITHDRAWAL_SOUND,
    PROMOTION_SOUND: process.env.VUE_APP_PROMOTION_SOUND,
    AFF_ADJUSTMENT_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_AFF_ADJUSTMENT_BATCH_CREATE_TEMPLATE,
    AFF_ADJUSTMENT_BATCH_CREATE_HEADER: process.env.VUE_APP_AFF_ADJUSTMENT_BATCH_CREATE_HEADER,
    AFF_TYPE_APPROVAL_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_AFF_TYPE_APPROVAL_BATCH_CREATE_TEMPLATE,
    AFF_TYPE_APPROVAL_BATCH_CREATE_HEADER: process.env.VUE_APP_AFF_TYPE_APPROVAL_BATCH_CREATE_HEADER,
    BONUS_PREDEFINED_MEMBER_TEMPLATE: process.env.VUE_APP_BONUS_PREDEFINED_MEMBER_TEMPLATE,
    BONUS_PREDEFINED_MEMBER_HEADER: process.env.VUE_APP_BONUS_PREDEFINED_MEMBER_HEADER,
    ADJUSTMENT_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_ADJUSTMENT_BATCH_CREATE_TEMPLATE,
    ADJUSTMENT_BATCH_CREATE_HEADER: process.env.VUE_APP_ADJUSTMENT_BATCH_CREATE_HEADER,
    AGENT_ADJUSTMENT_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_AGENT_ADJUSTMENT_BATCH_CREATE_TEMPLATE,
    AGENT_ADJUSTMENT_BATCH_CREATE_HEADER: process.env.VUE_APP_AGENT_ADJUSTMENT_BATCH_CREATE_HEADER,
    INBOX_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_INBOX_BATCH_CREATE_TEMPLATE,
    INBOX_BATCH_CREATE_HEADER: process.env.VUE_APP_INBOX_BATCH_CREATE_HEADER,
    NOTIFICATION_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_NOTIFICATION_BATCH_CREATE_TEMPLATE,
    NOTIFICATION_CREATE_HEADER: process.env.VUE_APP_NOTIFICATION_BATCH_CREATE_HEADER,
    BONUS_BATCH_CREATE_HEADER: process.env.VUE_APP_BONUS_BATCH_CREATE_HEADER,
    BONUS_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_BONUS_BATCH_CREATE_TEMPLATE,
    EXCLUSIVE_BONUS_CREATE_HEADER: process.env.VUE_APP_EXCLUSIVE_BONUS_CREATE_HEADER,
    EXCLUSIVE_CREATE_TEMPLATE: process.env.VUE_APP_EXCLUSIVE_BONUS_CREATE_TEMPLATE,
    EXCLUDE_PROVIDER_CREATE_HEADER: process.env.VUE_APP_EXCLUDE_PROVIDER_BONUS_CREATE_HEADER,
    EXCLUDE_PROVIDER_CREATE_TEMPLATE: process.env.VUE_APP_EXCLUDE_PROVIDER_BONUS_CREATE_TEMPLATE,
    REWARD_ADJUSTMENT_BATCH_CREATE_HEADER: process.env.VUE_APP_REWARD_ADJUSTMENT_BATCH_CREATE_HEADER,
    REWARD_ADJUSTMENT_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_REWARD_ADJUSTMENT_BATCH_CREATE_TEMPLATE,
    TAG_GROUP_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_TAG_GROUP_BATCH_CREATE_TEMPLATE,
    JILI_FREESPIN_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_JILI_FREESPIN_BATCH_CREATE_TEMPLATE,
    JILI_FREESPIN_BATCH_CREATE_HEADER: process.env.VUE_APP_JILI_FREESPIN_BATCH_CREATE_HEADER,
    TAG_GROUP_BATCH_CREATE_HEADER: process.env.VUE_APP_TAG_GROUP_BATCH_CREATE_HEADER,
    AGENT_TAG_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_AGENT_TAG_BATCH_CREATE_TEMPLATE,
    AGENT_TAG_BATCH_CREATE_HEADER: process.env.VUE_APP_AGENT_TAG_BATCH_CREATE_HEADER,
    BONUS_CODE_CREATE_TEMPLATE: process.env.VUE_APP_BONUS_CODE_CREATE_TEMPLATE,
    BONUS_CODE_CREATE_HEADER: process.env.VUE_APP_BONUS_CODE_CREATE_HEADER,
    FINGERPRINT_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_FINGERPRINT_BATCH_CREATE_TEMPLATE,
    FINGERPRINT_BATCH_CREATE_HEADER: process.env.VUE_APP_FINGERPRINT_BATCH_CREATE_HEADER,
    ST8_FREESPIN_BONUS_CREATE_TEMPLATE: process.env.VUE_APP_ST8_FREESPIN_BONUS_CREATE_TEMPLATE,
    ST8_FREESPIN_BONUS_CREATE_HEADER: process.env.VUE_APP_ST8_FREESPIN_BONUS_CREATE_HEADER,
    PAYMENT_GROUP_BATCH_UPDATE_TEMPLATE: process.env.VUE_APP_PAYMENT_GROUP_BATCH_UPDATE_TEMPLATE,
    PAYMENT_GROUP_BATCH_UPDATE_HEADER: process.env.VUE_APP_PAYMENT_GROUP_BATCH_UPDATE_HEADER,
    CONFIGURATION_TOTAL_CONCURRENT_BONUS_KEY: 'Total_Concurrent_Bonus',
    CONFIGURATION_BONUS_PROGRESS_METHOD: 'Bonus_Progress_Method',
    PREDEFINED_MEMBER_TEMPLATE: process.env.VUE_APP_PREDEFINED_MEMBER_TEMPLATE,
    PREDEFINED_MEMBER_HEADER: process.env.VUE_APP_PREDEFINED_MEMBER_HEADER,
    HOME_BANNER_DIMENSION: process.env.VUE_APP_HOME_BANNER_DIMENSION,
    SLOT_BANNER_DIMENSION: process.env.VUE_APP_SLOT_BANNER_DIMENSION,
    BANNER_SIZE: process.env.VUE_APP_BANNER_SIZE,
    BANNER_IMAGE_TYPE: process.env.VUE_APP_BANNER_IMAGE_TYPE,
    DEFAULT_TIME_START_TIME: '00:00:00',
    DEFAULT_TIME_END_TIME: '23:59:59',
    BANNER_ACTION_LIST: process.env.VUE_APP_BANNER_ACTION_LIST,
    REGISTRATION_BANNER_DIMENSION: process.env.VUE_APP_REGISTRATION_BANNER_DIMENSION,
    BAN_USER_ALL_BATCH_CREATE_HEADER: process.env.VUE_APP_BAN_USER_ALL_BATCH_CREATE_HEADER,
    BAN_USER_ALL_BATCH_CREATE_TEMPLATE: process.env.VUE_APP_BAN_USER_ALL_BATCH_CREATE_TEMPLATE,
})

const SESSION = Object.freeze({
    AGENT_BANNER_FILTER: 'agentBannerFilter',
    AGENT_REGISTER_PAGE_BANNER_FILTER: 'agentRegisterPageBannerFilter',
    AFFILIATE_UPLINE_FILTER: 'affiliateUplineFilter',
    ROUND_INFO_FILTER: 'roundInfoFilter',
    ROLE_NAME: 'r_name',
    TAGGING_FILTER: 'tagging-filter',
    AGENT_TAGGING_FILTER: 'agent-tagging-filter',
    REPORT_STAT_FILTER: 'reportStatFilter',
    USERNAME: 'username',
    TOKEN: 'authToken',
    TOKEN_EXPIRY: 'tokenExpiry',
    LAST_ACTIVITY_TIME: 'lastActivityTime',
    SELECTED_LANG: 'lang',
    SELECTED_PAGE_SIZE: 'userPageSize',
    USER_MODULES: 'userModules',
    MEMBER_FILTER: 'memberFilter',
    MEMBER_INACTIVE_FILTER: 'memberInactiveFilter',
    MEMBER_TAG_FILTER: 'memberTagFilter',
    MEMBER_REGISTER_IP_FILTER: 'memberRegisterIpFilter',
    MEMBER_BANNED_IP_FILTER: 'memberBannedIpFilter',
    FINGERPRINT_FILTER: 'fingerprintLogFilter',
    SORT_MEMBER_FILTER: 'sortMemberFilter',
    SORT_PG_PROCESSING_FILTER: 'sortPgProcessingFilter',
    BET_LOG_FILTER: 'memberBetLogFilter',
    SET_CURRENCY: 'setCurrency',
    SET_CURRENCY_CODE: "setCurrencyCode",
    SMS_FILTER: 'smsFilter',
    ONLINE_FILTER: 'onlineFilter',
    MEMBER_ROLE_FILTER: 'memberRoleFilter',
    JILI_GAME_FILTER: 'jiliGameFilter',
    MEMBER_GROUP_FILTER: 'memberGroupFilter',
    MEMBER_IPL_FILTER: 'memberIplFilter',
    MEMBER_CHANGED_LOG_FILTER: 'memberChangedLogFilter',
    REBATE_FILTER: 'rebateFilter',
    REBATE_TRANSACTION_FILTER: 'rebateTransactionFilter',
    TRANSFER_FILTER: 'transferFilter',
    WITHDRAWAL_CONDITION_FILTER: 'withdrawalConditionFilter',
    REWARD_WALLET_LOG_FILTER: 'rewardWalletLogFilter',
    REDEMPTION_WALLET_LOG_FILTER: 'redemptionWalletLogFilter',
    REWARD_WALLET_COLLECTIONS_FILTER: 'rewardWalletCollectionsFilter',
    REWARD_WALLET_ADJUSTMENT_FILTER: 'rewardWalletAdjustmentFilter',
    REFERRAL_COMMISSION_LOG_FILTER: 'referralCommissionWalletLogFilter',
    REFERRAL_COMMISSION_TRANSACTIONS_FILTER: 'referralCommissionTransactionFilter',
    REFERRAL_MEMBER_FILTER: 'referralMemberFilter',
    REFERRAL_MEMBER_OVERVIEW: 'referralMemberOverview',
    ADJUSTMENT_FILTER: 'adjustmentFilter',
    AGENT_FILTER: 'agentFilter',
    AGENT_COMMISSION_REPORT_FILTER: 'agentCommissionReportFilter',
    AGENT_COMMISSION_SUMMARY_REPORT_FILTER: 'agentCommissionSummaryReportFilter',
    AGENT_APPLY_FILTER: 'agentApplyFilter',
    AGENT_REPORT_FILTER: 'agentReportFilter',
    AGENT_SUMMARY_REPORT_FILTER: 'agentSummaryAgentReport',
    AGENT_TRANSACTION_SUMMARY_FILTER: 'agentTransactionSummaryFilter',
    AGENT_PROFILE: 'agentProfile',
    AGENT_DOWNLINE_FILTER: 'agentDownlineFilter',
    AGENT_PLAYER_FILTER: 'agentPlayerFilter',
    AGENT_PLAYER_SORT_FILTER: 'agentPlayerSortFilter',
    AGENT_WITHDRAWAL_FILTER: 'agentWithdrawalFilter',
    AGENT_WALLET_LOG_FILTER: 'agentWalletLogFilter',
    AGENT_FORGOT_OTP_LOG_FILTER: 'agentForgotOtpLogFilter',
    AGENT_SMS_OTP_LOG_FILTER: 'agentSmsOtpLogFilter',
    AGENT_AUDIT_LOG_FILTER: 'agentAuditOtpLogFilter',
    AGENT_COMMISSION_PLAN_FILTER: 'agentCommissionPlanFilter',
    AGENT_ADJUSTMENT_FILTER: 'agentAdjustmentFilter',
    AGENT_BANNER_MATERIALS_FILTER: 'agentBannerMaterialsFilter',
    AGENT_SUMMARY_STAT_FILTER: 'agentSummaryStatFilter',
    AGENT_FLAGGED_IP_FILTER: 'agentFlaggedIpFilter',
    AGENT_REGISTER_IP_FILTER: 'agentRegisterIpFilter',
    DASHBOARD_FILTER: 'dashboardFilter',
    TRANSACTION_SUMMARY_FILTER: 'transactionSummaryFilter',
    INBOX_FILTER: 'inboxFilter',
    NOTIFICATION_FILTER: 'notificationFilter',
    NOTIFICATION_SUBSCRIBE_FILTER: 'notificationSubscribeFilter',
    BET_HISTORY_FILTER: 'betHistoryFilter',
    GAME_FILTER: 'gameFilter',
    GAME_BONUS_FILTER: 'gameBonusFilter',
    ANNOUNCEMENT_FILTER: 'announcementFilter',
    REWARD_LOG_FILTER: 'rewardLogFilter',
    BONUS_FILTER: 'bonusFilter',
    BONUS_EXCLUSIVE: 'bonusExclusiveFilter',
    BONUS_APPLICANT_FILTER: 'bonusApplicantFilter',
    EVENT_FILTER: 'eventFilter',
    COIN_FILTER: 'coinFilter',
    NINJA_EVENT_FILTER: 'ninjaEventFilter',
    VOUCHER_FILTER: 'voucherFilter',
    PAYMENT2_METHOD_FILTER: 'payment2MethodFilter',
    PAYMENT2_METHOD_LIMIT_FILTER: 'payment2LimitFilter',
    PAYMENT_NOTIFICATION_CONFIG: 'paymentNotificationConfig',
    PAYMENT_TRANSACTION_FILTER: 'paymentTransactionFilter',
    PAYMENT2_TRANSACTION_FILTER: 'payment2TransactionFilter',
    PAYMENT_TRANSACTION_PROCESS_WITHDRAWAL_FILTER: 'paymentTransactionProcessWithdrawalFilter',
    PAYMENT_TRANSACTION_WITHDRAWAL_FILTER: 'paymentTransactionWithdrawalFilter',
    PAYMENT2_BANK_FILTER: 'payment2BankFilter',
    PAYMENT_BANK_FILTER: 'paymentBankFilter',
    PAYMENT_BANK_ACCOUNT_FILTER: 'paymentBankAccountFilter',
    PAYMENT2_BANK_ACCOUNT_FILTER: 'payment2BankAccountFilter',
    PAYMENT_CURRENCY_FILTER: 'paymentCurrencyFilter',
    PAYMENT2_CURRENCY_FILTER: 'payment2CurrencyFilter',
    PAYMENT_MEMBER_BANK_FILTER: 'paymentMemberBankFilter',
    PAYMENT2_MEMBER_BANK_FILTER: 'payment2MemberBankFilter',
    REJECT_REMARK_FILTER: 'rejectRemarkFilter',
    PAYMENT_METHOD_FILTER: 'paymentMethodFilter',
    PAYMENT_METHOD_LIMIT_FILTER: 'paymentMethodLimitFilter',
    PAYMENT_MEMBER_GROUP_FILTER: 'paymentMemberGroupFilter',
    PAYMENT2_MEMBER_GROUP_FILTER: 'payment2MemberGroupFilter',
    PAYMENT2_MEMBER_GROUP_PAIRING_FILTER: 'payment2MemberGroupPairingFilter',
    PAYMENT_CHANNEL_GROUP_FILTER: 'paymentMemberGroupFilter',
    PAYMENT2_CHANNEL_GROUP_FILTER: 'payment2MemberGroupFilter',
    PAYMENT_GATEWAY_ACCOUNT_FILTER: 'paymentGatewayAccountFilter',
    PAYMENT2_GATEWAY_ACCOUNT_FILTER: 'payment2GatewayAccountFilter',
    PAYMENT_GATEWAY_PROVIDER_FILTER: 'paymentGatewayProviderFilter',
    PAYMENT2_GATEWAY_PROVIDER_FILTER: 'payment2GatewayProviderFilter',
    REPORTS_WIN_LOSS_FILTER: 'reportsWinLossFilter',
    REPORTS_WIN_LOSS_BREADCRUMBS: 'reportsWinLossBreadcrumbs',
    REPORTS_BET_DETAILS_FILTER: 'reportsBetDetailsFilter',
    REPORTS_PLAYER_LOG_FILTER: 'reportPlayerLogFilter',
    REPORT_FIRST_DEPOSIT_FILTER: 'reportFirstDepositFilter',
    REPORT_MEMBER_BALANCE_FILTER: 'reportFirstDepositFilter',
    REPORT_FREESPIN_FILTER: 'reportFreespinFilter',
    REPORT_OVERALL_SUMMARY: 'reportOverallSummary',
    MEMBER_DETAILS_DATE_SESSION: 'reportMemberDetailsDateFilter',
    TRANSFER_FILTER_LOG: 'transferFilterLog',
    TRANSACTION_LOG: 'transactionLog',
    REPORTS_UNSETTLED_BET_DETAILS_FILTER: 'reportsUnsettledBetDetailsFilter',
    AFFILIATE_FILTER: 'affiliateFilter',
    AFFILIATE_ADJUSTMENT_FILTER: 'affiliateAdjustmentFilter',
    AFFILIATE_REPORT_PRODUCT_FILTER: 'affiliateReportProductFilter',
    AFFILIATE_REPORT_AGENT_FILTER: 'affiliateReportAgentFilter',
    AFFILIATE_MEMBER_BANK_FILTER: 'affiliateMemberBankFilter',
    AFFILIATE_BANK_ACCOUNT_FILTER: 'affiliateBankAccountFilter',
    AFFILIATE_TRANSACTION_FILTER: 'affiliateBankAccountFilter',
    AFFILIATE_MEMBER_GROUP_FILTER: 'affiliateMemberGroupFilter',
    AFFILIATE_METHOD_LIMIT_FILTER: 'affiliateMethodLimitFilter',
    AFFILIATE_TYPE_APPROVAL_FILTER: 'affiliateTypeApprovalFilter',
    AFFILIATE_PAYMENT_METHOD_FILTER: 'affiliatePaymentMethodFilter',
    AFFILIATE_ONE_TIME_BONUS_FILTER: 'affiliateOneTimeBonusFilter',
    USER_FILTER: 'userFilter',
    ROLE_FILTER: 'roleFilter',
    TROUBLESHOOT_FILTER: 'troubleshootFilter',
    COMPLIANCE_PAYMENT_BLACKLIST_FILTER: 'complianceBlacklistFilter',
    COMPLIANCE_FINGERPRINT_BLACKLIST_FILTER: 'complianceFingerprintBlacklistFilter',
    COMPLIANCE_CONTACT_BLACKLIST_FILTER: 'complianceContactBlacklistFilter',
    BONUS_CONTENT_FILTER: 'bonusContentFilter',
    BONUS_APPLIED_MANUAL_BONUS_FILTER: 'bonusAppliedManualBonusFilter',
    CRICKET_MANAGEMENT_FILTER: 'cricketManagementFilter',
    PRETIMER_MANAGEMENT_FILTER: 'pretimerManagementFilter',
    VIP_TIER_MEMBER_GROUP_FILTER: 'vipTierMemberGroupFilter',
    VIP_UPGRADE_FILTER: 'vipUpgradeProgressFilter',
    VIP_DOWNGRADE_FILTER: 'vipDowngradeProgressFilter',
    VIP_PROGRESS_LOG_FILTER: 'vipProgressLogFilter',
    VIP_UPGRADE_BONUS_LOG_FILTER: 'vipUpgradeBonusLogFilter',
    VIP_ADJUSTMENT_FILTER: 'vipAdjustmentFilter',
    COMMUNICATION_CONFIG_FILTER: 'communicationConfigFilter',
    REGISTRATION_BANNER_FILTER: 'registrationBannerFilter',
    IPCHECK_FILTER: 'ipCheckFilter',
    CSV_EXPORT_FILTER: 'csvExportFilter',
    CARD_MANIA_FILTER: 'cardManiaFilter',
    CARD_MANIA_LOGS_FILTER: 'cardManiaLogsFilter',
    PAYMENT2_GATEWAY_ACCOUNT_LOG_FILTER: 'payment2GatewayAccountLogFilter',
    BONUS_APPLICANT_SORT:'bonusApplicantSort'
})

const API = Object.freeze({
    BASE_URL: process.env.VUE_APP_API_BASE_URL,
    PAYMENT_URL: process.env.VUE_APP_API_PAYMENT_URL,
    MEDIA_DOMAIN: process.env.VUE_APP_API_MEDIA_DOMAIN,
    MEDIA_URL: process.env.VUE_APP_API_MEDIA_URL,
    BETSWIZ_RUNNING_SYNC_API_URL: process.env.VUE_APP_BETSWIZ_RUNNING_SYNC,
    VIP_ICON: process.env.VUE_APP_API_VIP_ICON,
    CONTACT_ICON: process.env.VUE_APP_API_CONTACT_ICON,
    CMS_URL: process.env.VUE_APP_API_CMS_URL
})

const DATE = Object.freeze({
    SHORT: 'YYYY-MM-DD',
    LONG: 'YYYY-MM-DD HH:mm:ss',
    TIME: 'HH:mm:ss'
})

const REGEX = Object.freeze({
    number: /^[\d]+$/,
    address: /^[a-zA-Z0-9\u4e00-\u9eff-\u0E00-\u0E7F\s,.\-/_]+( [a-zA-Z0-9\u4e00-\u9eff-\u0E00-\u0E7F\s,.\-/_]+)*$/,
    region: /^[a-zA-Z\u4e00-\u9eff\u0E00-\u0E7F\s\-\.]+( [a-zA-Z\u4e00-\u9eff\u0E00-\u0E7F\s\-\.]+)*$/,
    city: /^[a-zA-Z0-9\u4e00-\u9eff-\u0E00-\u0E7F\s./_]+$/,
    memberCode: /^[a-zA-Z0-9]+$/,
    realName: /^[a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F-\u1780-\u17FF./_]+( [a-zA-Z\u4e00-\u9eff-\u0E00-\u0E7F-\u1780-\u17FF./_]+)*$/, //unicode for CN,TH,KH
    username: /^[a-zA-Z0-9]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    passwordFEUI: /^[a-zA-Z0-9]+$/,
    password_Deprecated: /^[a-zA-Z0-9._^%$#!~@,-]+$/,
    email: /^[A-Za-z0-9_]([.-]?[A-Za-z0-9_])*@[A-Za-z0-9_]([.-]?[A-Za-z0-9_])*(\.\w{2,3})+$/,
    phone: /^[0-9]+$/,
    lineId: /^[a-zA-Z0-9._-]+$/,
    referralCode: /^[a-zA-Z0-9]+$/,
    invalidCharacters: /^[^;:：；<>《》=*]+$/,
    invalidCharactersWithoutSpace: /^[^;:：；<>《》=* ]+$/,
    paymentInvalidCharacters: /^[^<>《》*]+$/,
    alphaCharacters: /^[a-zA-Z]+$/,
    alphaNumericCharacters: /^[a-zA-Z0-9]+$/,
    mustHttpUrlFormat: /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    urlFormat: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,
    integer: /^[0-9]+(\.[0-9]{0,0})?$/,
    negativeInteger: /^-?[0-9]+(\.[0-9]{0,0})?$/,
    decimalTwo: /^-?[0-9]+(\.[0-9]{0,2})?$/,
    decimalFour: /^-?[0-9]+(\.[0-9]{0,4})?$/,
    decimalThree: /^-?[0-9]+(\.[0-9]{0,3})?$/,
    exchangeRate: /^[0-9]+(\.[0-9]{1,2})?$/,
    agentPhoneNumber: /^[1-9][0-9]*$/,
    mobileNumberChina: /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/,
    mobileNumberBDT: /^\d{10}$/,
    mobileNumber: /^\d{10,11}$/,
    notAllowMultipleSpace: /^\S+(?: \S+)*$/,
    notAllowStartWithZero: /^[1-9][0-9]*$/,
    ipV6part: /^[0-9a-f]{1,4}$/i
})

const BONUS = Object.freeze({
    bonusApplyAmount: process.env.VUE_APP_BONUS_APPLY_AMOUNT ? JSON.parse(process.env.VUE_APP_BONUS_APPLY_AMOUNT) : []
})

const DASHBOARD = Object.freeze({
    topRegisterIpChartType: process.env.VUE_APP_DASHBOARD_TOP_REGISTER_IP_CHART_TYPE || 'bar'
})

const BANNED_IP = Object.freeze({
    type: {
        MEMBER_REGISTER: 1,
    },
})

const VIP_TIER = Object.freeze({
    RECURRING_BONUS_ENABLED: process.env.VUE_APP_RECURRING_BONUS_ENABLED || false,
})

const LANGUAGE = Object.freeze({
    english: 'en',
    bengali: 'bd',
    chineseSimplified: 'zh'
})

export { SHARED, SESSION, API, DATE, REGEX, LANGUAGE, BONUS, DASHBOARD, BANNED_IP, VIP_TIER }
