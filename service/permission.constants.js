const pUSER = Object.freeze({
    LISTING: 'user.listing',
    EDIT: 'edit.user',
    EDIT_PASSWORD: 'edit.user.password',
    DEACTIVATE: 'deactivate.user',
    VIEW_LOG: 'view.user.log',
    CREATE: 'create.user',
    RESET_LOGIN : 'user.reset.login'
})

const pROLE = Object.freeze({
    LISTING: 'role.listing',
    DEACTIVATE: 'deactivate.role',
    CREATE: 'create.role',
    EDIT: 'edit.role'
})

const pTAGGING = Object.freeze({
    ADD_TAG: 'add.tag',
    EDIT_TAG: 'edit.tag',
    TAG_LISTING: 'view.tag',
    TAG_ASSIGN: 'add.tag.assign',
    DELETE_TAG: 'delete.tag',
    MENU_TAG: 'menu.tagging'
})

const pIpCheck = Object.freeze({
    VIEW_IP_CHECK: 'view.ipcheck',
    VIEW_IP_CHECK_LSIT: 'view.ipchecklist',
    EDIT_IP_CHECK: 'edit.ipcheck',
})

const pVipTier = Object.freeze({
    VIEW_VIP_TIER_LEVEL:'view.vip.tier.level'
})

const pCloudFlare = Object.freeze({
    VIEW_BAN_IP_LIST: 'cloudflare.ban_ip_list.view',
    EDIT_BAN_IP_LIST: 'cloudflare.ban_ip_list.edit',
    VIEW_BANNED_REGISTER_IP_LIST: 'banned_ip.register.view',
    EDIT_BANNED_REGISTER_IP_LIST: 'banned_ip.register.edit',
})

const pMEMBER = Object.freeze({
    LISTING: 'member.listing',
    CONTACT_STATUS_LISTING: 'member.contact.status',
    TRANSACTION_LISTING: 'member.transaction',
    REMARK_LISTING: 'remark.listing',
    DEACTIVATE: 'member.set.status',
    WALLET: 'member.wallet',
    RESET_PASSWORD: 'member.reset.password',
    VERIFY_CONTACT: 'member.verify.contact',
    SET_PRIMARY_CONTACT: 'member.set.primary.contact',
    CREATE_CONTACT: 'member.add.contacts',
    CREATE_REMARK: 'add.remark',
    EDIT_REMARK: 'edit.remark',
    EXPORT: 'member.export',
    CHANGED_LOG_LISTING: 'member.get.status.log',
    EDIT_INFO: 'member.set.one.time.info',
    REGISTER_IP: 'member.view.register_ip',
    BET_HISTORIES: 'member.bet.history.listing',
    VIEW_MEMBER_GROUP: 'member.view.membergroup',
    CREATE_MEMBER_GROUP: 'member.create.membergroup',
    EDIT_MEMBER_GROUP: 'member.edit.membergroup',
    ADD_AGENT_TEAM: 'add.member.agent',
    EDIT_AGENT_TEAM: 'edit.member.agent',
    EDIT_PRIMARY_SECONDARY_CONTACT: 'member.edit.contact',
    REMOVE_MEMBER_CONTACT: 'remove.member.contact',
    MENU_ONLINE_PLAYER_LIST: 'menu.online.player.list',
    MENU_FINGERPRINT_LIST: 'member.fingerprint.list',
    MENU_ROLE_MANAGEMENT: 'menu.role.management',
    MENU_SMS_LOG: 'menu.sms.log',
    VIEW_SMS_LOG: 'view.member.sms.log',
    EDIT_SMS_LOG: 'edit.member.sms.log',
    RESET_SMS_LOG: 'reset.member.sms.log',
    EDIT_FORGOT_PASSWORD: 'member.edit.forgot.password',
    EDIT_REAL_NAME: 'member.edit.real.name',
    EDIT_DOB: 'member.edit.dob',
    EDIT_ADDRESS_DETAILS: 'member.edit.address.details',
    MENU_FORGOT_SMS_LOG: 'menu.forgot.sms.log',
    EDIT_WITHDRAWAL_CHECKLIST_STATUS: 'member.edit.withdrawal.checklist.status',
    DISALLOW_DISABLED_PLAYER_WALLET:'disallow.deactivate.player.wallet',
    REQUIRED_MEMBERCODE_SEARCH: 'required.membercode.search',
    CREATE_INBOX: 'create.inbox',
    VIEW_INBOX_LIST: 'view.inbox.list',
    VIEW_TAG: 'view.member.tag',
    VIEW_PUSH: 'view.push',
    VIEW_BETTING_PASS: 'view.betting.pass',
    VIEW_VIP_LEVEL: 'view.vip.level',
    APPROVE_PHONE_NUMBER: 'member.approve.phone',
    DISABLE_TAGGING_GROUP: 'disable.tagging.group',
    BAN_UNBAN_REGISTER_IP: 'member.register_ip.allow_ban',
    ALLOW_INBOX_BONUS_TOGGLE: 'allow.inbox.bonus.toggle',
    BETSWIZ_BUTTON: 'member.betswiz.transfer',
    EXPORT_TOP_BALANCE: 'member.export.top.balance',
    INACTIVE_LOG: 'member.inactive.log',
    DISABLE_WALLET_ACTION: 'member.wallet.action.disabled',
    BAN_MEMBER_ALL: 'member.ban_all',
    DISABLE_MAIN_WALLET: 'disable.member.main.wallet.log',
    DISABLE_BET_BALANCE: 'disable.member.bet.balance.log',
    DISABLE_MEMBER_WCL: 'disable.member.wcl',
})

const pGAME = Object.freeze({
    BRAND_GAME_LISTING: 'game.brand.game.listing',
    BRAND_EDIT_GAME: 'game.brand.edit.game',
    BRAND_VENDOR_LISTING: 'game.brand.vendor.listing',
    BRAND_EDIT_VENDOR: 'game.brand.edit.vendor',
    JILI_FREE_SPIN_MENU: 'menu.jili.free.spin',
    ST8_FREE_SPIN_MENU: 'menu.st8.free.spin',
})

const pBONUS = Object.freeze({
    LISTING: 'bonus.listing',
    CREATE: 'create.bonus',
    EDIT: 'edit.bonus',
    DEACTIVATE: 'deactivate.bonus',
    REVOKE: 'revoke.bonus',
    APPLY: 'apply.bonus',
    APPLICANT_LISTING: 'bonus.applicant.listing',
    SET_APPLICANT_STATUS: 'set.bonus.applicant.status',
    EXPORT_APPLICANT: 'export.bonus.applicant',
    MENU_BONUS_TRANSACTIONS: 'menu.bonus.transactions',
    MENU_BONUS_MANAGEMENT: 'menu.bonus.management',
    MENU_VOUCHER_MANAGEMENT: 'menu.voucher.management',
    MENU_REBATE_SETTING: 'menu.rebate.setting',
    MENU_REBATE_TRANSACTIONS: 'menu.rebate.transactions'
})

const pAFFILIATE = Object.freeze({
    CREATE_AGENT: 'create.agent',
    TIER_LISTING: 'view.agent.tier.listing',
    CREATE_TIER: 'create.agent.tier',
    EDIT_TIER: 'edit.agent.tier',
    DOMAINS: 'get.affiliate.domains',
    CREATE_DOMAINS: 'add.affiliate.domains',
    EDIT_DOMAINS: 'edit.affiliate.domains',
    DEACTIVATE: 'set.agent.status',
    EDIT_MOBILE_NUMBER: 'edit.agent.mobile.number',
    EDIT_WALLET_NUMBER_PAYOUT: 'edit.agent.wallet.number.payout',
    EXPORT: 'export.agent.list',
    REQUIRED_AGENT_TEAM: 'agentFTD.require.agentTeam',
    AGENT_LISTING: 'view.agent.listing',
    AGENT_COMMISSION_REPORT: 'view.agent.commission.report',
    AGENT_COMMISSION_SUMMARY_REPORT: 'view.agent.commission.summary.report',
    AGENT_SUMMARY_REPORT: 'view.agent.summary.report',
    AGENT_WALLET_LOG: 'view.agent.wallet.log',
    AGENT_AGENT_TEAM_APPLY: 'view.agent.team.apply',
    AGENT_WITHDRAWAL_LIST: 'view.agent.withdrawal.list',
    AGENT_FORGOT_PASSWORD_OTP_LOG: 'view.agent.forgot.password',
    AGENT_SMS_LOG: 'view.agent.sms',
    AGENT_REGISTRATION: 'view.agent.registration',
    AGENT_AUDIT_LOG: 'view.agent.audit.log',
    AGENT_ADJUSTMENT_LIST: 'view.agent.adjustment.list',
    AGENT_DOWNLINE: 'view.agent.downline',
    AGENT_CREATE: 'view.create.agent',
    AGENT_PROFILE: 'view.agent.profile',
    APPROVE_AGENT_TEAM: 'approve.agent.team',
    EXPORT_FTD: 'export.agent.ftd.csv',
    EXPORT_OVERALL_AGENT: 'export.agent.overall.csv',
    EXPORT_DOWNLINE_AGENT: 'export.agent.downline.csv',
    EXPORT_WITHDRAWAL_AGENT: 'export.agent.withdrawal.csv',
    EXPORT_COMMISSION_SUMMARY_AGENT: 'export.agent.commission.summary.csv',
    EXPORT_REPORT_AGENT: 'export.agent.report.csv',
    AGENT_CHANGE_PASSWORD: 'edit.agent.password',
    AGENT_TAGGING: 'view.agent.tagging',
    DELETE_AGENT_TAGGING: 'allow.delete.agent.tagging',
    AGENT_BANNER_MATERIALS_MANAGEMENT: 'view.agent.banner.material.management',
    AGENT_BANNER_MATERIALS_DOWNLOAD: 'view.agent.banner.material.download',
    AGENT_REGISTER_PAGE_BANNER_VIEW: 'agent.register-page-banner.view',
    AGENT_REGISTER_PAGE_BANNER_EDIT: 'agent.register-page-banner.edit',
    AGENT_REGISTER_IP_VIEW: 'agent.register-ip.view',
    AGENT_REGISTER_IP_EDIT: 'agent.register-ip.edit',
    AGENT_FLAG_IP_VIEW: 'agent.flag-ip.view',
    AGENT_FLAG_IP_EDIT: 'agent.flag-ip.edit',
    AGENT_COMMISSION_SUMMARY_DETAIL: 'view.agent.commission.summary.detail',
    AGENT_COMMISSION_PLAN: 'view.agent.commission.plan',
    EDIT_AGENT_STATUS: 'edit.agent.status',
    ADD_AGENT_STATUS: 'edit.agent.nid',
    UPDATE_AGENT_WITHDRAWAL_STATUS: 'update.agent.withdrawal.status',
    ALLOW_AGENT_NEGATIVE_CARRY_FORWARD: 'allow.agent.negative.carry.forward',
    AGENT_MANAGEMENT: 'view.all.agent.module.agent.management',
    AGENT_SUMMARY_STAT: 'view.agent.summary.stat',
    AGENT_LIST_REQUIRED_AGENT_ID: 'view.agent.list.required.agent.id'
})

const pTRANSFER = Object.freeze({
    LISTING: 'transfer.listing'
})

const pADJUSTMENT = Object.freeze({
    CREATE: 'create.adjustment',
    LISTING: 'adjustment.listing',
    EDIT: 'approve.adjustment',
    EXPORT: 'export.adjustment'
})

const pANNOUNCEMENT = Object.freeze({
    LISTING: 'view.announcement.listing',
    DEACTIVATE: 'deactivate.announcement',
    CREATE: 'add.announcement',
    EDIT: 'edit.announcement'
})

const pPAYMENT = Object.freeze({
    TRANSACTION_LISTING: 'view.payment.transaction',
    EDIT_TRANSACTION: 'edit.payment.transaction',
    COMPANY_BANK_LISTING: 'view.payment.companybank',
    CREATE_COMPANY_BANK: 'create.payment.companybank',
    EDIT_COMPANY_BANK: 'edit.payment.companybank',
    MEMBER_BANK_LISTING: 'view.payment.memberbank',
    EDIT_MEMBER_BANK: 'edit.payment.memberbank',
    DELETE_MEMBER_BANK: 'delete.payment.memberbank',
    GATEWAY_ACCOUNT_LISTING: 'view.payment.gatewayaccount',
    CREATE_GATEWAY_ACCOUNT: 'create.payment.gatewayaccount',
    EDIT_GATEWAY_ACCOUNT: 'edit.payment.gatewayaccount',
    MEMBER_GROUP_LISTING: 'view.payment.membergroup',
    CREATE_MEMBER_GROUP: 'create.payment.membergroup',
    EDIT_MEMBER_GROUP: 'edit.payment.membergroup',
    CHANNEL_GROUP_LISTING: 'view.payment.channelgroup',
    EDIT_CHANNEL_GROUP: 'edit.payment.channelgroup',
    PAYMENT_METHOD_LIMIT_LISTING: 'view.payment.methodlimit',
    CREATE_PAYMENT_METHOD_LIMIT: 'create.payment.methodlimit',
    EDIT_PAYMENT_METHOD_LIMIT: 'edit.payment.methodlimit',
    MERCHANT_CHECKLIST_LISTING: 'view.payment.transchecklist',
    EDIT_MERCHANT_CHECKLIST: 'edit.payment.transchecklist',
    MASTER_SETTINGS: 'manage.payment.master',
    EXPORT_TRANSACTIONS: 'export.payment.transaction',
    PAYMENT_METHOD_LISTING: 'view.payment.paymentMethodSorting',
    EDIT_PAYMENT_METHOD: 'edit.payment.paymentMethodSorting',
    EDIT_PAYMENT_DEPOSIT: 'edit.payment.deposit',
    EDIT_PAYMENT_WITHDRAWAL: 'edit.payment.withdrawal',
    ALLOW_REJECT_PG_STATUS: 'allow.reject.pg.status',
    VIEW_GRAND_TOTAL: 'view.grand.total',
    ONLY_ALLOW_WITHDRAWAL_CHECKING: 'only.allow.pass.withdrawal.checking',
    VIEW_WITHDRAWAL_WALLET_NUMBER: 'view.withdrawal.wallet.number',
})

const pREPORTS = Object.freeze({
    WIN_LOSS: 'winloss.listing',
    UNSETTLED: 'unsettle.report.listing',
    EXPORT: 'export.winloss',
    TRANSACTION_SUMMARY: 'view.transaction.summary',
    SUMMARY_STAT: 'view.summary.stat',
    TOTAL_WALLET_BALANCE: 'view.total.wallet.balance',
    FIRST_DEPOSIT: 'view.first.deposit',
    AGENT_PERFORMANCE_REPORT: 'view.agent.performance.report',
    RUNNING_TICKET: 'view.running.ticket',
    FREESPIN: 'view.freespin',
    WINLOSS_SUMMARY: 'view.winloss.summary',
    FTD_EXPORT: 'view.ftd.export',
})

const pCONFIGURATIONS = Object.freeze({
    LISTING: 'configuration.listing',
    EDIT: 'edit.configuration',
    EDIT_PARTIAL: 'partial.edit.configuration'
})

const pAFFILIATE_ADJUSTMENT = Object.freeze({
    LISTING: 'get.affiliate.adjustment.listing',
    CREATE: 'create.affiliate.adjustment',
    EDIT: 'approve.affiliate.adjustment',
    EXPORT: 'export.affiliate.adjustment'
})

const pAFFILIATE_CONFIGURATIONS = Object.freeze({
    LISTING: 'get.affiliate.configuration.listing',
    EDIT: 'edit.affiliate.configuration',
    EDIT_PARTIAL: 'partial.edit.affiliate.configuration'
})

const pAFFILIATE_REPORTS = Object.freeze({
    PRODUCT_LISTING: 'affiliate.product.reports',
    AGENT_LISTING: 'affiliate.agent.reports'
})

const pEVENT = Object.freeze({
    LISTING: 'view.event.listing',
    CREATE: 'add.event',
    EDIT: 'edit.event',
    DEACTIVATE: 'deactivate.event'
})

const pAFFILIATE_AGENT = Object.freeze({
    LISTING: 'get.affiliate.agent.approval.listing',
    CREATE: 'update.affiliate.type',
    EDIT: 'update.affiliate.agent.approval.status'
})

const pTROUBLESHOOT = Object.freeze({
    LISTING: 'troubleshoot.listing'
})

const pAFFILIATE_PAYMENT = Object.freeze({
    TRANSACTIONS_LISTING: 'view.payment.affiliate.transaction',
    EDIT_TRANSACTIONS: 'edit.payment.affiliate.transaction',
    COMPANY_BANK_LISTING: 'view.payment.affiliate.companybank',
    CREATE_COMPANY_BANK: 'create.payment.affiliate.companybank',
    EDIT_COMPANY_BANK: 'edit.payment.affiliate.companybank',
    MEMBER_BANK_LISTING: 'view.payment.affiliate.affiliatebank',
    EDIT_MEMBER_BANK: 'edit.payment.affiliate.affiliatebank',
    DELETE_MEMBER_BANK: 'delete.payment.affiliate.affiliatebank',
    MEMBER_GROUP_LISTING: 'view.payment.affiliate.membergroup',
    CREATE_MEMBER_GROUP: 'create.payment.affiliate.membergroup',
    EDIT_MEMBER_GROUP: 'edit.payment.affiliate.membergroup',
    CHANNEL_GROUP_LISTING: 'view.payment.affiliate.channelgroup',
    EDIT_CHANNEL_GROUP: 'edit.payment.affiliate.channelgroup',
    PAYMENT_METHOD_LIMIT_LISTING: 'view.payment.affiliate.methodlimit',
    CREATE_PAYMENT_METHOD_LIMIT: 'create.payment.affiliate.methodlimit',
    EDIT_PAYMENT_METHOD_LIMIT: 'edit.payment.affiliate.methodlimit',
    MERCHANT_CHECKLIST_LISTING: 'view.payment.affiliate.transchecklist',
    EDIT_MERCHANT_CHECKLIST: 'edit.payment.affiliate.transchecklist',
    EXPORT_TRANSACTIONS: 'export.payment.affiliate.transaction',
    PAYMENT_METHOD_LISTING: 'view.payment.affiliate.paymentMethodSorting',
    EDIT_PAYMENT_METHOD: 'edit.payment.affiliate.paymentMethodSorting'
})

const pCOMPLIANCE = Object.freeze({
    PAYMENT_BLACKLIST_LISTING: 'view.compliance.payment.blacklist',
    CREATE_PAYMENT_BLACKLIST: 'create.compliance.payment.blacklist',
    EDIT_PAYMENT_BLACKLIST: 'edit.compliance.payment.blacklist'
})

const pAPPCONFIG = Object.freeze({
    APPCONFIG_VIEW_CONTACTS: 'appconfig.view.contacts',
    APPCONFIG_EDIT_CONTACTS: 'appconfig.edit.contacts'
})

// const pREWARD_STORE = Object.freeze({
//     VIEW_REWARD_STORE_LISTING: 'view.reward.store.listing',
//     VIEW_REWARD_STORE_DETAILS: 'view.reward.store.details',
//     EDIT_REWARD_STORE: 'edit.reward.store'
// })

const pREWARDS = Object.freeze({
    SHOW_CARDMANIA: 'view.card.mania',
    SHOW_CARDMANIA_LOG: 'view.card.mania.log',
    REWARDS_VIEW_CONFIG: 'rewards.view.config',
    REWARDS_EDIT_CONFIG: 'rewards.edit.config',
    REWARDS_VIEW_WALLET_LOG: 'rewards.view.log',
    REWARDS_CREATE_ADJUSTMENTS: 'rewards.create.adjustments',
    REWARDS_VIEW_ADJUSTMENTS: 'rewards.view.adjustments',
    VIEW_REWARD_STORE_LISTING: 'view.reward.store.listing',
    VIEW_REWARD_STORE_DETAILS: 'view.reward.store.details',
    EDIT_REWARD_STORE: 'edit.reward.store',
    EXPORT_REDEMPTIONS: 'export.redemptions'
})

const pREFERRAL = Object.freeze({
    REFERRAL_VIEW_COMMISSION_LOG: 'referral.view.commission.log',
    REFERRAL_VIEW_MEMBERS: 'referral.view.members',
    REFERRAL_UPDATE_MEMBERS: 'referral.update.members',
    REFERRAL_VIEW_CONFIG: 'referral.view.config',
    REFERRAL_UPDATE_CONFIG: 'referral.update.config',
    REFERRAL_VIEW_ONE_TIME_BONUS_LOG: 'referral.view.one.time.bonus.log',
    REFERRAL_VIEW_COMMISSION_SUMMARY_LOG: 'referral.view.commission.summary.log',
})

const pPAYMENT2 = Object.freeze({
    PAYMENT2_TRANSACTION_LIST: 'payment2.transactions.list',
    PAYMENT2_CONFIGURATIONS_LIST: 'payment2.configurations.list',
    PAYMENT2_MEMBER_BANK_LIST: 'payment2.member.bank.list',
    PAYMENT2_DEPOSIT: 'payment2.deposit',
    PAYMENT2_MASTER_BANK: 'payment2.menu.master.bank',
    PAYMENT2_GATEWAY_PROVIDER: 'payment2.menu.gateway.provider',
    PAYMENT2_PAYMENT_METHOD: 'payment2.menu.payment.method',
    PAYMENT2_COMPANY_BANK: 'payment2.menu.company.bank',
    PAYMENT2_REJECT_REMARK: 'payment2.reject.remark',
    PAYMENT2_EDIT_GATEWAY_PROVIDER: 'payment2.edit.gateway.provider',
    PAYMENT2_EDIT_PAYMENT_LIMIT: 'payment2.edit.payment.limit',
})

export {
    pUSER,
    pROLE,
    pMEMBER,
    pGAME,
    pBONUS,
    pREWARDS,
    pAFFILIATE,
    pTRANSFER,
    pADJUSTMENT,
    pANNOUNCEMENT,
    pPAYMENT,
    pREPORTS,
    pCONFIGURATIONS,
    pAFFILIATE_ADJUSTMENT,
    pAFFILIATE_CONFIGURATIONS,
    pAFFILIATE_REPORTS,
    pEVENT,
    pAFFILIATE_AGENT,
    pTROUBLESHOOT,
    pAFFILIATE_PAYMENT,
    pCOMPLIANCE,
    pAPPCONFIG,
    pREFERRAL,
    pPAYMENT2,
    pTAGGING,
    pIpCheck,
    pVipTier,
    pCloudFlare
}
