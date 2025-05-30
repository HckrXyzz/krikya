/* e.g. import { ROUTE_NAME } from '@/constants/route.constants' */
const ROUTE_NAME = Object.freeze({
    SPORTS_VALID_BET: 'sports-valid-bet',
    HOME: 'home',
    LOGIN: 'login',
    BRAND_LIST: 'brand-list',
    BRAND_CREATE: 'brand-create',
    APP_CONTACT_MANAGEMENT: 'app-contact-management',
    APP_CONTACT_CREATE: 'app-contact-create',
    APP_CONTACT_DETAILS: 'app-contact-details',
    APP_CONFIG_OVERVIEW: 'app-config-overview',
    CRICKET_LIST: 'cricket-list',
    CRICKET_CREATE: 'cricket-create',
    CRICKET_UPDATE: 'cricket-update',
    //Communication Config
    COMMUNICATION_CONFIG_LISTING: 'communication-list',
    COMMUNICATION_CONFIG_CREATE: 'communication-create',
    COMMUNICATION_CONFIG_DETAIL: 'communication-detail',
    //Banner
    BANNER_LIST: 'banner-list',
    BANNER_CREATE: 'banner-create',
    BANNER_DETAIL: 'banner-detail',
    //BonusBanner
    BONUSBANNER_LIST: 'bonusbanner-list',
    BONUSBANNER_CREATE: 'bonusbanner-create',
    //Bonus
    COIN_CREATE: 'coin-create',
    EVENT_OVERVIEW: 'event-overview',
    COIN_LISTING: 'coin-listing',
    REWARDS_OVERVIEW: 'rewards-overview',
    REWARDS_CONFIG: 'rewards-config',
    REWARD_ADJUSTMENTS: 'rewards-adjustments',
    COIN_DETAILS: 'coin-details',
    BONUS_OVERVIEW: 'bonus-overview',
    BONUS_CONTENT_LIST: 'bonus-content-list',
    BONUS_CONTENT_CREATE: 'bonus-content-create',
    BONUS_CONTENT_EDIT: 'bonus-content-edit',
    BONUS_CONTENT_INFO: 'bonus-content-info',
    BONUS_MANUAL_BONUS_APPLIED_LIST: 'bonus-manual-bonus-applied-list',
    VOUCHER_LISTING: 'voucher-listing',
    VOUCHER_DETAILS: 'voucher-details',
    VOUCHER_CREATE: 'voucher-create',
    // Agent
    AGENT_CREATE: 'agent-create',
    AGENT_CREATE_PLAYER: 'agent-create-player',
    AGENT_LIST: 'agent-list',
    AGENT_TRANSACTION_SUMMARY: 'transaction-summary',
    AGENT_DOWNLINE: 'agent-downline',
    AGENT_PROFILE: 'agent-profile',
    AGENT_PLAYER_LIST: 'agent-player-list',
    AGENT_TEAM_APPLY_LIST: 'agent-team-apply-list',
    AGENT_REPORT: 'agent-report',
    NEW_AGENT_REPORT_UI: 'new_agent-report_ui',
    AGENT_COMMISSION_REPORT: 'agent-commission-report',
    AGENT_COMMISSION_SUMMARY_REPORT: 'agent-commission-summary-report',
    AGENT_WITHDRAWAL_LIST: 'agent-withdrawal-list',
    AGENT_SUMMARY_REPORT: 'agent-summary-report',
    AGENT_PLAYER_DETAIL: 'agent-player-detail',
    AGENT_WITHDRAWAL_DETAIL: 'agent-withdrawal-detail',
    AGENT_WALLET_LOG: 'agent-wallet-log',
    AGENT_FORGOT_PASSWORD_LOG: 'agent-forgot-password-log',
    AGENT_SMS_OTP_LOG: 'agent-sms-otp-log',
    AGENT_ADJUSTMENT_LIST: 'agent-adjustment-list',
    AGENT_ADJUSTMENT_DETAIL: 'agent-adjustment-Detail',
    AGENT_BANNER: 'agent-banner',
    AGENT_REGISTER_PAGE_BANNER: 'agent-register-page-banner',
    AGENT_REGISTER_IP: 'agent-register-ip',
    AGENT_FLAG_IP: 'agent-flag-ip',
    AGENT_AUDIT_LOG: 'agent-audit-log',
    AGENT_COMMISSION_PLAN: 'agent-commission-plan',
    AGENT_CREATE_COMMISSION_PLAN: 'agent-create-commission-plan',
    AGENT_TAGGING_LIST: 'agent-tagging-list',
    AGENT_BANNER_MATERIALS_LIST: 'agent-banner-materials-list',
    AGENT_BANNER_MATERIALS_DETAIL: 'agent-banner-materials-detail',
    AGENT_BANNER_MATERIALS_CREATE: 'agent-banner-materials-create',
    AGENT_COMMISSION_SUMMARY_DETAIL: 'agent-commission-summary-detail',
    AGENT_SUMMARY_STAT: 'agent-summary-stat',
    // Referral
    REFERRAL_OVERVIEW: 'referral-overview',
    COMMISSION_WALLET_LOG: 'commission-wallet-log',
    COMMISSION_WALLET_COLLECTION_LOG: 'commission-wallet-collection-log',
    COMMISSION_CONFIGURATION: 'commission-configuration',
    COMMISSION_MEMBERS: 'commission-members',
    COMMISSION_MEMBERS_OVERVIEW: 'commission-members-overview',
    COMMISSION_TRANSACTIONS: 'commission-transactions',
    //User, Role
    USER_PROFILE: 'user-profile',
    USER_OVERVIEW: 'user-overview',
    USER_LIST: 'user-list',
    USER_CREATE: 'user-create',
    USER_DETAILS: 'user-details',
    ROLE_LIST: 'role-list',
    ROLE_CREATE: 'role-create',
    ROLE_DETAILS: 'role-details',
    REBATE_LISTING: 'rebate-listing',
    REBATE_TRANSACTION_LISTING: 'transaction-listing',
    REBATE_TRANSACTION: 'rebate-transaction',
    REBATE_CREATE: 'rebate-create',
    REBATE_EDIT: 'rebate-edit',
    REBATE_NEW_EDIT: 'rebate-edit-data',
    //Member
    MEMBER_OVERVIEW: 'member-overview',
    MEMBER_LIST: 'member-list',
    MEMBER_DETAILS: 'member-details',
    MEMBER_CONTACT: 'member-contact',
    MEMBER_LOGIN_LOG: 'member-login-log',
    MEMBER_CHANGED_LOG: 'member-changed-log',
    MEMBER_BET_HISTORY_LIST: 'member-bet-history-list',
    TRANSFER_LIST: 'transfer-list',
    REWARD_WALLET_LOG: 'reward-wallet-log',
    REWARD_WALLET_COLLECTIONS: 'reward-wallet-collections',
    MAIN_WALLET_LOG: 'main-wallet-log',
    ADJUSTMENT_LIST: 'adjustment-list',
    WITHDRAWAL_CHECKLIST: 'withdrawal-condition-list',
    ADJUSTMENT_CREATE: 'adjustment-create',
    ADJUSTMENT_DETAILS: 'adjustment-details',
    INBOX_LIST: 'inbox-list',
    INBOX_CREATE: 'inbox-create',
    NOTIFICATION_LIST: 'notification-list',
    NOTIFICATION_CREATE: 'notification-create',
    NOTIFICATION_DETAIL: 'notification-detail',
    MEMBER_ROLE_LIST: 'member-role-list',
    MEMBER_GROUP_LIST: 'member-group-list',
    MEMBER_DASHBOARD: 'member-dashboard',
    MEMBER_ONLINE_LIST: 'member-online-list',
    MEMBER_FINGERPRINT_LIST: 'member-fingerprint-list',
    EXPORT_CSV_LOGS: 'csv-export-list',
    USER_EXPORT_CSV_LOGS: 'user-csv-export-list',
    MEMBER_GROUP_CREATE: 'member-group-create',
    MEMBER_GROUP_DETAILS: 'member-group-details',
    MEMBER_CHANNEL_GROUP: 'member-channel-group',
    MEMBER_IPL_LIST: 'member-ipl-event',
    MEMBER_IPL_DETAIL: 'member-ipl-detail',
    MEMBER_IPL_CREATE: 'member-ipl-create',
    SMS_LOGS: 'member-sms-logs',
    FORGOT_PASSWORD_SMS_LOG: 'forgot-password-sms-logs',
    BET_LOGS: 'member-bet-logs',
    MEMBER_REGISTER_IP: 'member-register-ip',
    MEMBER_BANNED_IP: 'member-banned-ip',
    //Game
    GAME_OVERVIEW: 'game-overview',
    GAME_LIST: 'game-list',
    HOT_GAMES: 'hot-games',
    JILI_GAMES: 'jili-games',
    GAME_MANAGEMENT: 'game-management',
    ST8_BONUS_MANAGEMENT: 'st8-bonus-management',
    ST8_CREATE_BONUS: 'st8-create-bonus',
    GAME_DETAILS: 'game-details',
    GAME_MAINTENANCE: 'game-maintenance',
    //Bonus
    BONUS_LIST: 'bonus-list',
    BONUS_CREATE: 'bonus-create',
    BONUS_CREATE2_STEP1: 'bonus-create2-step1',
    BONUS_CREATE2_STEP2: 'bonus-create2-step2',
    BONUS_CREATE2_STEP3: 'bonus-create2-step3',
    BONUS_DETAILS: 'bonus-details',
    BONUS_DETAILS2: 'bonus-details2',
    BONUS_APPLICANTS_LIST: 'bonus-applicants-list',
    BONUS_APPLICANTS_DETAILS: 'bonus-applicants-details',
    //Event
    KETUPAT_DETAILS: 'ketupat_details',
    KETUPAT_EVENT: 'ketupat-event',
    EVENT_LISTING: 'event-listing',
    DEPOSIT_COIN_LISTING: 'deposit-coin-listing',
    EVENT_LIST: 'event-list',
    EVENT_DETAILS: 'event-details',
    EVENT_CREATE: 'event-create',
    LUCKY_SPIN: 'lucky-spin',
    GRAB_COIN_CREATE: 'grab-coin-create',
    GRAB_COIN_DETAILS: 'grab-coin-details',
    LUCKY_SPIN_LOGS: 'lucky-spin-logs',
    REWARD_BALANCE_LOGS: 'reward-balance-logs',
    LUCKY_SPIN_LIST: 'lucky-spin-list',
    LUCKY_SPIN_EDIT: 'lucky-spin-edit',
    CARD_MANIA_LISTING: 'card-mania-listing',
    CARD_MANIA_CREATE: 'card-mania-create',
    CARD_MANIA_DETAILS: 'card-mania-details',
    CARD_MANIA_LOGS: 'card-mania-logs',
    //Reward Store
    REWARD_STORE_LIST: 'reward-store-listing',
    REWARD_STORE_DETAILS: 'reward-details',
    REWARD_STORE_CREATE: 'reward-create',
    REWARD_STORE_CREATE_CREDIT: 'reward-create-credit',
    REWARD_STORE_CREATE_JILI_FREESPIN: 'reward-create-jili-freespin',
    REWARD_STORE_REDEMPTION: 'reward-redemption',
    REWARD_REDEMPTION_WALLET: 'reward-redemption-wallet',

    //Affiliate
    AFFILIATE_OVERVIEW: 'affiliate-overview',
    AFFILIATE_LIST: 'affiliate-list',
    AFFILIATE_CREATE: 'affiliate-create',
    AFFILIATE_DETAILS: 'affiliate-details',
    AFFILIATE_REPORTS_AGENT: 'affiliate-reports-agent',
    AFFILIATE_REPORTS_PRODUCT: 'affiliate-reports-product',
    AFFILIATE_ADJUSTMENT_LIST: 'affiliate-adjustment-list',
    AFFILIATE_ADJUSTMENT_CREATE: 'affiliate-adjustment-create',
    AFFILIATE_ADJUSTMENT_DETAILS: 'affiliate-adjustment-details',
    AFFILIATE_TRANSACTION_LIST: 'affiliate-transaction-list',
    AFFILIATE_TRANSACTION_DETAILS: 'affiliate-transaction-details',
    AFFILIATE_TRANSACTION_CHECK_LIST: 'affiliate-transaction-checklist',
    AFFILIATE_BANK_ACCOUNT_LIST: 'affiliate-bank-account-list',
    AFFILIATE_BANK_ACCOUNT_CREATE: 'affiliate-bank-account-create',
    AFFILIATE_BANK_ACCOUNT_DETAILS: 'affiliate-bank-account-details',
    AFFILIATE_MEMBER_BANK_LIST: 'affiliate-memberbank-list',
    AFFILIATE_MEMBER_BANK_DETAILS: 'affiliate-memberbank-details',
    AFFILIATE_MEMBER_GROUP_LIST: 'affiliate-member-group-list',
    AFFILIATE_MEMBER_GROUP_CREATE: 'affiliate-member-group-create',
    AFFILIATE_MEMBER_GROUP_DETAILS: 'affiliate-member-group-details',
    AFFILIATE_MEMBER_CHANNEL_GROUP: 'affiliate-member-channel-group',
    AFFILIATE_METHOD_LIMIT_LIST: 'affiliate-method-limit',
    AFFILIATE_METHOD_LIMIT_CREATE: 'affiliate-method-limit-create',
    AFFILIATE_METHOD_LIMIT_BATCH_CREATE: 'affiliate-method-limit-batch-create',
    AFFILIATE_METHOD_LIMIT_DETAILS: 'affiliate-method-limit-details',
    AFFILIATE_CONFIG_LIST: 'affiliate-config-list',
    AFFILIATE_TYPE_APPROVAL_LIST: 'affiliate-type-approval-list',
    AFFILIATE_TYPE_APPROVAL_CREATE: 'affiliate-type-approval-create',
    AFFILIATE_TYPE_APPROVAL_DETAILS: 'affiliate-type-approval-details',
    AFFILIATE_PAYMENT_METHOD_LIST: 'affiliate-payment-method',
    AFFILIATE_ONE_TIME_BONUS: 'affiliate-one-time-bonus',
    //Announcement
    ANNOUNCEMENT_LIST: 'announcement-list',
    ANNOUNCEMENT_CREATE: 'announcement-create',
    ANNOUNCEMENT_DETAILS: 'announcement-details',
    //Payment
    PAYMENT2_OVERVIEW: 'payment2-overview',
    PAYMENT2_TRANSACTION_LIST: 'payment2-transaction',
    PAYMENT2_TRANSACTION_DEPOSIT: 'payment2-transaction-deposit',
    PAYMENT2_TRANSACTION_WITHDRAWAL: 'payment2-transaction-withdrawal',
    PAYMENT2_PROCESSING_WITHDRAWAL: 'payment2-processing-withdrawal',
    PAYMENT2_BANK_ACCOUNT_LIST: 'payment2-bank-account',
    PAYMENT2_MEMBER_BANK_LIST: 'payment2-memberbank',
    PAYMENT2_REJECT_REMARK_LIST: 'payment2-rejectremark',
    PAYMENT2_MEMBER_BANK_DETAILS: 'payment2-memberbank-details',
    PAYMENT2_GATEWAY_ACCOUNT_LIST: 'payment2-gateway-account',
    PAYMENT2_WITHDRAWAL_AUTOMATION: 'payment2-withdrawal-automation',
    PAYMENT2_MEMBER_GROUP_LIST: 'payment2-member-group',
    PAYMENT2_OPTIONS_LIST: 'payment2-options',
    PAYMENT2_OPTIONS_DETAIL: 'payment2-detail',
    PAYMENT2_OPTIONS_OVERVIEW: 'payment2-methods-overview',
    PAYMENT2_BANK_LIST: 'payment2-bank',
    PAYMENT2_GATEWAY_PROVIDER_LIST: 'payment2-gateway-provider',
    PAYMENT2_CURRENCY_LIST: 'payment2-currency',
    PAYMENT2_CURRENCY_CREATE: 'payment2-currency-create',
    PAYMENT2_CURRENCY_DETAILS: 'payment2-currency-details',
    PAYMENT2_OPTIONS_DETAILS: 'payment2-options-details',
    PAYMENT2_OPTIONS_CREATE: 'payment2-options-create',
    PAYMENT2_BANK_CREATE: 'payment2-bank-create',
    PAYMENT2_BANK_DETAILS: 'payment2-bank-details',
    PAYMENT2_GATEWAY_ACCOUNT_CREATE: 'payment2-gateway-account-create',
    PAYMENT2_GATEWAY_ACCOUNT_DETAILS: 'payment2-gateway-account-details',
    PAYMENT2_WITHDRAWAL_AUTOMATION_DETAILS: 'payment2-withdrawal-automation-details',
    PAYMENT2_GATEWAY_PROVIDER_DETAILS: 'payment2-gateway-provider-details',
    PAYMENT2_GATEWAY_PROVIDER_CREATE: 'payment2-gateway-provider-create',
    PAYMENT2_MEMBER_GROUP_CREATE: 'payment2-member-group-create',
    PAYMENT2_MEMBER_GROUP_DETAILS: 'payment2-member-group-details',
    PAYMENT2_CHANNEL_GROUP_DETAILS: 'payment2-channel-group-details',
    PAYMENT2_BANK_ACCOUNT_CREATE: 'payment2-bank-account-create',
    PAYMENT2_BANK_ACCOUNT_DETAILS: 'payment2-bank-account-details',
    PAYMENT2_TRANSACTION_DETAILS: 'payment2-transaction-details',
    PAYMENT_OVERVIEW: 'payment-overview',
    PAYMENT_TRANSACTION_LIST: 'payment-transaction',
    PAYMENT_TRANSACTION_DEPOSIT: 'payment-transaction-deposit',
    PAYMENT_TRANSACTION_WITHDRAWAL: 'payment-transaction-withdrawal',
    PAYMENT_PROCESSING_WITHDRAWAL: 'payment-processing-withdrawal',
    PAYMENT_TRANSACTION_DETAILS: 'payment-transaction-details',
    PAYMENT_MEMBER_BANK_LIST: 'payment-memberbank',
    PAYMENT_MEMBER_BANK_DETAILS: 'payment-memberbank-details',
    PAYMENT_GATEWAY_ACCOUNT_LIST: 'payment-gateway-account',
    PAYMENT_GATEWAY_ACCOUNT_CREATE: 'payment-gateway-account-create',
    PAYMENT_GATEWAY_ACCOUNT_DETAILS: 'payment-gateway-account-details',
    PAYMENT_GATEWAY_PROVIDER_LIST: 'payment-gateway-provider',
    PAYMENT_GATEWAY_PROVIDER_DETAILS: 'payment-gateway-provider-details',
    PAYMENT_GATEWAY_PROVIDER_CREATE: 'payment-gateway-provider-create',
    PAYMENT_OPTIONS_LIST: 'payment-options',
    PAYMENT_OPTIONS_DETAILS: 'payment-options-details',
    PAYMENT_OPTIONS_CREATE: 'payment-options-create',
    PAYMENT_MEMBER_GROUP_LIST: 'payment-member-group',
    PAYMENT_MEMBER_GROUP_CREATE: 'payment-member-group-create',
    PAYMENT_MEMBER_GROUP_DETAILS: 'payment-member-group-details',
    PAYMENT_BANK_ACCOUNT_LIST: 'payment-bank-account',
    PAYMENT_BANK_ACCOUNT_CREATE: 'payment-bank-account-create',
    PAYMENT_BANK_ACCOUNT_DETAILS: 'payment-bank-account-details',
    PAYMENT_BANK_LIST: 'payment-bank',
    PAYMENT_BANK_CREATE: 'payment-bank-create',
    PAYMENT_BANK_DETAILS: 'payment-bank-details',
    PAYMENT_METHOD_LIST: 'payment-method',
    PAYMENT_METHOD_DETAILS: 'payment-method-details',
    PAYMENT_METHOD_LIMIT_LIST: 'method-limit',
    PAYMENT_METHOD_LIMIT_DETAILS: 'method-limit-details',
    PAYMENT_METHOD_LIMIT_CREATE: 'method-limit-create',
    PAYMENT_METHOD_LIMIT_BATCH_CREATE: 'method-limit-batch-create',
    PAYMENT_CURRENCY_LIST: 'payment-currency',
    PAYMENT_CURRENCY_CREATE: 'payment-currency-create',
    PAYMENT_CURRENCY_DETAILS: 'payment-currency-details',
    PAYMENT_TRANSACTION_CHECK_LIST: 'payment-transaction-checklist',
    PAYMENT_MERCHANT_METHOD: 'payment-merchant-method',
    PAYMENT_CHANNEL_GROUP_DETAILS: 'payment-channel-group-details',
    //Reports
    REPORTS_OVERVIEW: 'reports-overview',
    REPORTS_WIN_LOSS: 'reports-winloss',
    SUMMARY_STAT: 'summary-stats',
    TOTAL_WALLET_BALANCE: 'total-wallet-balance',
    REPORTS_BET_DETAILS: 'reports-bet-details',
    FREE_SPIN_LOG: 'free-spin-log',
    REPORTS_UNSETTLED_BET_DETAILS: 'reports-unsettled-bet-details',
    TAGGING_LISTING: 'tag-list',
    TRANSACTION_SUMMARY: 'transaction-summary',
    FIRST_DEPOSIT: 'first-deposit',
    //Configurations
    CONFIG_LIST: 'config-list',
    //Troubleshoot
    TROUBLESHOOT_LIST: 'troubleshoot-list',
    //Compliance
    COMPLIANCE_OVERVIEW: 'compliance-overview',
    COMPLIANCE_PAYMENT_BLACKLIST_LIST: 'compliance-payment-blacklist',
    COMPLIANCE_PAYMENT_BLACKLIST_CREATE: 'compliance-payment-blacklist-create',
    COMPLIANCE_FINGERPRINT_BLACKLIST_LIST: 'fingerprint-list',
    COMPLIANCE_CONTACT_BLACKLIST_LIST: 'contact-blacklist',
    //Error
    ERROR_UNAUTHORIZED: 'error-unauthorized',
    PRETIMER_LIST: 'pretimer-list',
    PRETIMER_CREATE: 'pretimer-create',
    PRETIMER_UPDATE: 'pretimer-update',
    //Vip Tier
    VIP_TIER_MEMBER_GROUP_CREATE: 'vip-tier-member-group-create',
    VIP_TIER_MEMBER_GROUP_LIST: 'vip-tier-member-group-list',
    VIP_TIER_MEMBER_GROUP_DETAIL: 'vip-tier-member-group-detail',
    VIP_TIER_MEMBER_UPGRADE_LEVEL_PROGRESS: 'vip-tier-member-upgrade-level-progress',
    VIP_TIER_MEMBER_DOWNGRADE_LEVEL_PROGRESS: 'vip-tier-member-downgrade-level-progress',
    VIP_TIER_MEMBER_LEVEL_PROGRESS_LOG: 'vip-tier-member-level-progress-log',
    VIP_TIER_MEMBER_UPGRADE_BONUS_LOG: 'vip-tier-member-upgrade-bonus-log',
    VIP_TIER_MEMBER_ADJUSTMENT_LIST: 'vip-tier-member-adjustment-list',
    VIP_TIER_MEMBER_ADJUSTMENT_DETAIL: 'vip-tier-member-adjustment-detail',
    //Registration Banner
    REGISTRATION_BANNER_LIST: 'registration-banner-list',
    REGISTRATION_BANNER_CREATE: 'registration-banner-create',
    REGISTRATION_BANNER_DETAIL: 'registration-banner-detail',
    IP_CHECK_LIST: 'ip-check-list',
    IP_CHECK_DETAILS: 'ip-check-details',
    IP_CHECK_BOX: 'ip-check-box',
})

const ROUTE_URL = Object.freeze({
    HOME: 'home',
    LOGIN: 'login'
})

export { ROUTE_NAME, ROUTE_URL }
