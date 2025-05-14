import Vue from 'vue'
import VueRouter from 'vue-router'
import {ROUTE_NAME} from '@/constants/route.constants'
import {accessRightHandler, sharedFunction} from '@/util'
import {SESSION, SHARED} from '@/constants/constants'
import { authService } from "@/services";

Vue.use(VueRouter)

const toUnauthorizedPage = {name: ROUTE_NAME.ERROR_UNAUTHORIZED}
let moduleIds = accessRightHandler.getAllModules()

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: ROUTE_NAME.HOME,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/profile',
            name: ROUTE_NAME.USER_PROFILE,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/User/UserProfile.vue')
        },
        {
            path: '/smsLogs',
            name: ROUTE_NAME.SMS_LOGS,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/Member/SmsLogs.vue')
        },
        {
            path: '/forgotPasswordSmsLogs',
            name: ROUTE_NAME.FORGOT_PASSWORD_SMS_LOG,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/Member/ForgotPasswordSmsLogs.vue')
        },
        {
            path: '/banner',
            component: () => import('@/views/Banner/Banner.vue'),
            children: [
                {
                    path: ':banner_category/:category_id',
                    name: ROUTE_NAME.BANNER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Banner/BannerListing.vue')
                },
                {
                    path: ':banner_category/:category_id/create',
                    name: ROUTE_NAME.BANNER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Banner/BannerCreate.vue')
                },
                {
                    path: ':banner_category/:category_id/detail/:banner_id',
                    name: ROUTE_NAME.BANNER_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Banner/BannerDetail.vue')
                }
            ]
        },
        {
            path: '/bonusbanner',
            component: () => import('@/views/Brand/Brand.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.BONUSBANNER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Brand/BrandListing.vue')
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.BONUSBANNER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Brand/BrandCreate.vue')
                }
            ]
        },
        {
            path: '/bonusContent',
            component: () => import('@/views/BonusContent/BonusContent.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.BONUS_CONTENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/BonusContent/BonusContentListing.vue')
                },
                {
                    path: 'edit',
                    name: ROUTE_NAME.BONUS_CONTENT_EDIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/BonusContent/BonusContentEdit.vue')
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.BONUS_CONTENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/BonusContent/BonusContentCreate.vue')
                },
                {
                    path: 'info',
                    name: ROUTE_NAME.BONUS_CONTENT_INFO,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/BonusContent/BonusContentInfo.vue')
                },
                {
                    path: 'manualBonusAppliedList',
                    name: ROUTE_NAME.BONUS_MANUAL_BONUS_APPLIED_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/BonusContent/BonusManualBonusAppliedListing.vue')
                }
            ]
        },
        {
            path: '/rebate',
            component: () => import('@/views/Rebate/RebateListing.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REBATE_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rebate/RebateListing.vue')
                }
            ]
        },
        {
            path: '/rebate',
            component: () => import('@/views/Rebate/RebateTransactions'),
            children: [
                {
                    path: 'transaction',
                    name: ROUTE_NAME.REBATE_TRANSACTION,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rebate/RebateTransactions.vue')
                }
            ]
        },
        {
            path: '/rebate-create',
            component: () => import('@/views/Rebate/RebateCreate.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REBATE_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rebate/RebateCreate')
                }
            ]
        },
        {
            path: '/rebate-edit',
            component: () => import('@/views/Rebate/RebateEdit.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REBATE_EDIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rebate/RebateEdit')
                }
            ]
        },
        {
            path: '/user',
            component: () => import('@/views/User/User.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.USER_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/User/UserOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.USER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/User/Management/UserListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.USER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/User/Management/UserCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.USER_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/User/Management/UserDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'csv/userExportList',
                    name: ROUTE_NAME.USER_EXPORT_CSV_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/User/UserCsvExportLogs.vue'),
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem(SESSION.ROLE_NAME).toLowerCase() != "sysadmin" && localStorage.getItem(SESSION.ROLE_NAME).toLowerCase() != "adminb") {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'role',
                    name: ROUTE_NAME.ROLE_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Role/RoleListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.role, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'role/create',
                    name: ROUTE_NAME.ROLE_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Role/RoleCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.role, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'role/details',
                    name: ROUTE_NAME.ROLE_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Role/RoleDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.role, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/member',
            component: () => import('@/views/Member/Member.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.MEMBER_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bet/log',
                    name: ROUTE_NAME.BET_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/BetLog.vue'),
                    /*beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }*/
                },
                {
                    path: 'role/listing',
                    name: ROUTE_NAME.MEMBER_ROLE_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberRoleListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'online/listing',
                    name: ROUTE_NAME.MEMBER_ONLINE_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberOnlineListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'fingeprint',
                    name: ROUTE_NAME.MEMBER_FINGERPRINT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberFingerprintListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'csv/exportListing',
                    name: ROUTE_NAME.EXPORT_CSV_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/CsvExportLogs.vue'),
                    // beforeEnter: (to, from, next) => {
                    //     if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                    //         return next(toUnauthorizedPage)
                    //     }
                    //     next()
                    // }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.MEMBER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'tagging',
                    name: ROUTE_NAME.TAGGING_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/Tagging.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.tagging, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'register-ip',
                    name: ROUTE_NAME.MEMBER_REGISTER_IP,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberRegisterIp.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'banned-ip',
                    name: ROUTE_NAME.MEMBER_BANNED_IP,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberBannedIp.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.cloudFlare, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details/:memberId/:memberCode',
                    name: ROUTE_NAME.MEMBER_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'contact',
                    name: ROUTE_NAME.MEMBER_CONTACT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberContact.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'login-log',
                    name: ROUTE_NAME.MEMBER_LOGIN_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberLoginLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'changed-log',
                    name: ROUTE_NAME.MEMBER_CHANGED_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberChangedLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transfer',
                    name: ROUTE_NAME.TRANSFER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Transfer/TransferListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.transfer, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'withdrawal-condition-list',
                    name: ROUTE_NAME.WITHDRAWAL_CHECKLIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Withdrawal/WithdrawalConditionList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'inbox',
                    name: ROUTE_NAME.INBOX_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Inbox/InboxListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'inbox/create',
                    name: ROUTE_NAME.INBOX_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Inbox/InboxCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.member, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'notification',
                    name: ROUTE_NAME.NOTIFICATION_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Notification/NotificationList.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'notification/create',
                    name: ROUTE_NAME.NOTIFICATION_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Notification/NotificationCreate.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'notification/detail',
                    name: ROUTE_NAME.NOTIFICATION_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Notification/NotificationDetail.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'adjustment',
                    name: ROUTE_NAME.ADJUSTMENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Adjustment/AdjustmentListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustment/create',
                    name: ROUTE_NAME.ADJUSTMENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Adjustment/AdjustmentCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustment/details',
                    name: ROUTE_NAME.ADJUSTMENT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Adjustment/AdjustmentDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.adjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bet-histories',
                    name: ROUTE_NAME.MEMBER_BET_HISTORY_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberBetHistoryListing.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-groups',
                    name: ROUTE_NAME.MEMBER_GROUP_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberLevelListing.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-ipl',
                    name: ROUTE_NAME.MEMBER_IPL_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MemberIPL/MemberIplListing.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-ipl-detail',
                    name: ROUTE_NAME.MEMBER_IPL_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MemberIPL/MemberIplDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-ipl-create',
                    name: ROUTE_NAME.MEMBER_IPL_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MemberIPL/MemberIplCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-dashboards',
                    name: ROUTE_NAME.MEMBER_DASHBOARD,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberDashboard'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'member-group-details/:memberLevelId',
                    name: ROUTE_NAME.MEMBER_GROUP_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Member/MemberLevelDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                }
            ]
        },
        {
            path:'/vipTier',
            component:() => import('@/views/VipTier/VipTier'),
            children: [
                {
                    path: 'vip-tier-list',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_GROUP_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierMemberGroupList'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-tier-create',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_GROUP_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierMemberGroupCreate'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-tier-update',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_GROUP_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierMemberGroupDetail'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-upgrade-list',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_UPGRADE_LEVEL_PROGRESS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierUpgradeLevelList'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-downgrade-list',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_DOWNGRADE_LEVEL_PROGRESS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierDowngradeLevelList'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-progress-log',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_LEVEL_PROGRESS_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierLevelProgressLog'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-upgrade-bonus-log',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_UPGRADE_BONUS_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierUpgradeBonusLog'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-adjustment-list',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_ADJUSTMENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierAdjustmentList'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'vip-adjustment-detail',
                    name: ROUTE_NAME.VIP_TIER_MEMBER_ADJUSTMENT_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/VipTier/VipTierAdjustmentDetail'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
            ]
        },
        {
            path:'/communication',
            component:() => import('@/views/Communication/Communication'),
            children: [
                {
                    path: 'list',
                    name: ROUTE_NAME.COMMUNICATION_CONFIG_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Communication/CommunicationConfigListing'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'detail',
                    name: ROUTE_NAME.COMMUNICATION_CONFIG_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Communication/CommunicationConfigDetail'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                }
            ]
        },
        {
            path: '/rewards',
            component: () => import('@/views/Rewards/Rewards'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REWARDS_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rewards/RewardsOverview'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.EVENT_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/EventListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.COIN_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/DailyCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.COIN_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/DailyDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'ninjaEvent',
                    name: ROUTE_NAME.KETUPAT_EVENT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/NinjaEventListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'ninjaEventDetails',
                    name: ROUTE_NAME.KETUPAT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/NinjaEventDetails'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'reward_log',
                    name: ROUTE_NAME.REWARD_WALLET_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rewards/RewardWalletLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'collections',
                    name: ROUTE_NAME.REWARD_WALLET_COLLECTIONS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rewards/RewardCollectionTransaction'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, ROUTE_NAME.REWARD_WALLET_LOG)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'reward_config',
                    name: ROUTE_NAME.REWARDS_CONFIG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rewards/RewardConfig.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustments',
                    name: ROUTE_NAME.REWARD_ADJUSTMENTS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Rewards/RewardAdjustments'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
                /*{
                                    path: 'daily_checkin',
                                    name: ROUTE_NAME.EVENT_LISTING,
                                    meta: {layout: 'layout-master'},
                                    component: () => import('@/views/Event/EventListing.vue'),
                                    beforeEnter: (to, from, next) => {
                                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                                            return next(toUnauthorizedPage)
                                        }
                                        next()
                                    }
                                },*/
                /*{
                                    path: 'daily_checkin/details',
                                    name: ROUTE_NAME.COIN_DETAILS,
                                    meta: {layout: 'layout-master'},
                                    component: () => import('@/views/Event/DailyDetails.vue'),
                                    beforeEnter: (to, from, next) => {
                                        next()
                                    }
                                }*/
            ]
        },
        {
            path: '/referral',
            component: () => import('@/views/Referral/Referral'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REFERRAL_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/ReferralOverview'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'commission_log',
                    name: ROUTE_NAME.COMMISSION_WALLET_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/CommissionWalletLog'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'commission_collection_log',
                    name: ROUTE_NAME.COMMISSION_WALLET_COLLECTION_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/CommissionWalletSummary'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'commission_transactions',
                    name: ROUTE_NAME.COMMISSION_TRANSACTIONS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/CommissionWalletTransaction'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'members',
                    name: ROUTE_NAME.COMMISSION_MEMBERS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/ReferralMembers'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'members-overview',
                    name: ROUTE_NAME.COMMISSION_MEMBERS_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/ReferralMemberOverview'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'configuration',
                    name: ROUTE_NAME.COMMISSION_CONFIGURATION,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/ReferralConfiguration'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'affiliate-bonus-log',
                    name: ROUTE_NAME.AFFILIATE_ONE_TIME_BONUS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Referral/AffiliateOneTimeBonusLog'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.referral, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                }
            ]
        },
        {
            path: '/appconfig',
            component: () => import('@/views/AppConfig/AppConfig'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.APP_CONFIG_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/AppConfig/AppConfigOverview'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONFIG_OVERVIEW)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'contact-management',
                    name: ROUTE_NAME.APP_CONTACT_MANAGEMENT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/AppConfig/AppContactManagement/AppContactManagementListing'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONTACT_MANAGEMENT)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'contact-create',
                    name: ROUTE_NAME.APP_CONTACT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/AppConfig/AppContactManagement/AppContactManagementCreate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONTACT_CREATE)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'contact-details',
                    name: ROUTE_NAME.APP_CONTACT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/AppConfig/AppContactManagement/AppContactManagementDetails'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONTACT_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path:'/GameMaintenancePretimer',
            component:() => import('@/views/MaintenancePretimer/Pretimer'),
            children: [
                {
                    path: 'pretimer-list',
                    name: ROUTE_NAME.PRETIMER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MaintenancePretimer/PretimerListing'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'pretimer-create',
                    name: ROUTE_NAME.PRETIMER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MaintenancePretimer/PretimerCreate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'pretimer-update',
                    name: ROUTE_NAME.PRETIMER_UPDATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/MaintenancePretimer/PretimerUpdate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/cricket',
            component: () => import('@/views/CricketCms/Cricket'),
            children: [
                {
                    path: 'cricket-list',
                    name: ROUTE_NAME.CRICKET_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/CricketCms/CricketListing'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONFIG_OVERVIEW)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'cricket-create',
                    name: ROUTE_NAME.CRICKET_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/CricketCms/CricketCreate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONTACT_CREATE)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'cricket-update',
                    name: ROUTE_NAME.CRICKET_UPDATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/CricketCms/CricketUpdate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.appConfig, ROUTE_NAME.APP_CONTACT_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/game',
            component: () => import('@/views/Game/Game.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.GAME_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/GameOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.GAME_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/GameListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'hotGames',
                    name: ROUTE_NAME.HOT_GAMES,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/HotGames.vue'),
                    // beforeEnter: (to, from, next) => {
                    //     if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                    //         return next(toUnauthorizedPage)
                    //     }
                    //     next()
                    // }
                },
                {
                    path: 'jiliGames',
                    name: ROUTE_NAME.JILI_GAMES,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/JiliGames.vue'),
                    // beforeEnter: (to, from, next) => {
                    //     if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                    //         return next(toUnauthorizedPage)
                    //     }
                    //     next()
                    // }
                },
                {
                    path: 'management',
                    name: ROUTE_NAME.GAME_MANAGEMENT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/GameManagement.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'bonus-management',
                    name: ROUTE_NAME.ST8_BONUS_MANAGEMENT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/St8GameBonusManagement.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'bonus-create',
                    name: ROUTE_NAME.ST8_CREATE_BONUS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/St8GameBonusCreate.vue'),
                    /*beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }*/
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.GAME_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/GameDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'sports-valid-bet',
                    name: ROUTE_NAME.SPORTS_VALID_BET,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/SportsValidBet.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'maintenance',
                    name: ROUTE_NAME.GAME_MAINTENANCE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Game/GameMaintenance.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.game, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/event',
            component: () => import('@/views/Event/Event.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.EVENT_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/EventOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'deposit-coin-list',
                    name: ROUTE_NAME.DEPOSIT_COIN_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/DepositCoinListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'coinlisting',
                    name: ROUTE_NAME.COIN_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CoinListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'luckySpinList',
                    name: ROUTE_NAME.LUCKY_SPIN_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/LuckySpinList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'cardManiaListing',
                    name: ROUTE_NAME.CARD_MANIA_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CardManiaListing.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'cardManiaLogs',
                    name: ROUTE_NAME.CARD_MANIA_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CardManiaLogs.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'luckySpinLogs',
                    name: ROUTE_NAME.LUCKY_SPIN_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/LuckySpinLogs.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'rewardBalanceLogs',
                    name: ROUTE_NAME.REWARD_BALANCE_LOGS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/RewardBalanceLogs.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'luckySpinEdit',
                    name: ROUTE_NAME.LUCKY_SPIN_EDIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/LuckySpinEdit.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'luckySpin',
                    name: ROUTE_NAME.LUCKY_SPIN,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/LuckySpin.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'coin/create',
                    name: ROUTE_NAME.GRAB_COIN_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CoinCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'coin/details',
                    name: ROUTE_NAME.GRAB_COIN_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CoinDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'cardMania/create',
                    name: ROUTE_NAME.CARD_MANIA_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CardManiaCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                },
                {
                    path: 'cardMania/details',
                    name: ROUTE_NAME.CARD_MANIA_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/CardManiaDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        next()
                    }
                }
            ]
        },
        {
            path: '/rewardStore',
            component: () => import('@/views/RewardStore/Rewardstore.vue'),
            children: [
                {
                    path: 'listing',
                    name: ROUTE_NAME.REWARD_STORE_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/rewardStoreListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing/details',
                    name: ROUTE_NAME.REWARD_STORE_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/rewardDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing/create',
                    name: ROUTE_NAME.REWARD_STORE_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/rewardCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing/create/credit',
                    name: ROUTE_NAME.REWARD_STORE_CREATE_CREDIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/rewardCreateCredit.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },                {
                    path: 'listing/create/jili',
                    name: ROUTE_NAME.REWARD_STORE_CREATE_JILI_FREESPIN,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/rewardCreateFreespin.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'redemption',
                    name: ROUTE_NAME.REWARD_STORE_REDEMPTION,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/redemptionListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'redemption-wallet',
                    name: ROUTE_NAME.REWARD_REDEMPTION_WALLET,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RewardStore/redemptionWalletLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.rewards, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
            ]
        },
        // {
        //     path: 'rewardStore/details',
        //     name: ROUTE_NAME.REWARD_STORE_DETAILS,
        //     meta: {layout: 'layout-master'},
        //     component: () => import('@/views/RewardStore/rewardDetails.vue'),
        //     beforeEnter: (to, from, next) => {
        //         if (!accessRightHandler.isAuthorizedPage(moduleIds.rewardStore, to.name)) {
        //             return next(toUnauthorizedPage)
        //         }
        //         next()
        //     }
        // },
        // {
        //     path: 'rewardStore/create',
        //     name: ROUTE_NAME.REWARD_STORE_CREATE,
        //     meta: {layout: 'layout-master'},
        //     component: () => import('@/views/RewardStore/rewardCreate.vue'),
        //     beforeEnter: (to, from, next) => {
        //         if (!accessRightHandler.isAuthorizedPage(moduleIds.rewardStore, to.name)) {
        //             return next(toUnauthorizedPage)
        //         }
        //         next()
        //     }
        // },
        // {
        //     path: 'rewardStore/redemption',
        //     name: ROUTE_NAME.REWARD_STORE_REDEMPTION,
        //     meta: {layout: 'layout-master'},
        //     component: () => import('@/views/RewardStore/redemptionListing.vue'),
        //     // beforeEnter: (to, from, next) => {
        //     //     if (!accessRightHandler.isAuthorizedPage(moduleIds.rewardStore, to.name)) {
        //     //         return next(toUnauthorizedPage)
        //     //     }
        //     //     next()
        //     // }
        // },
        // {
        //     path: 'rewardStore/redemption-wallet',
        //     name: ROUTE_NAME.REWARD_REDEMPTION_WALLET,
        //     meta: {layout: 'layout-master'},
        //     component: () => import('@/views/RewardStore/redemptionWalletLog.vue'),
        //     // beforeEnter: (to, from, next) => {
        //     //     if (!accessRightHandler.isAuthorizedPage(moduleIds.rewardStore, to.name)) {
        //     //         return next(toUnauthorizedPage)
        //     //     }
        //     //     next()
        //     // }
        // },
        {
            path: '/bonus',
            component: () => import('@/views/Bonus/Bonus.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.BONUS_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusOverview'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, ROUTE_NAME.BONUS_LIST)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.BONUS_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.BONUS_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create2-1',
                    name: ROUTE_NAME.BONUS_CREATE2_STEP1,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusCreate2Step1.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create2-2',
                    name: ROUTE_NAME.BONUS_CREATE2_STEP2,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusCreate2Step2.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create2-3',
                    name: ROUTE_NAME.BONUS_CREATE2_STEP3,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusCreate2Step3.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.BONUS_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details2/:bonusId',
                    name: ROUTE_NAME.BONUS_DETAILS2,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusDetails2.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'applicants',
                    name: ROUTE_NAME.BONUS_APPLICANTS_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusApplicantListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'applicant/details',
                    name: ROUTE_NAME.BONUS_APPLICANTS_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/BonusApplicantDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'event',
                    name: ROUTE_NAME.EVENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/EventListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'event/details',
                    name: ROUTE_NAME.EVENT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/EventDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'event/create',
                    name: ROUTE_NAME.EVENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Event/EventCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.event, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'voucher/list',
                    name: ROUTE_NAME.VOUCHER_LISTING,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/VoucherCodeListing'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, ROUTE_NAME.BONUS_LIST)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'voucher/create',
                    name: ROUTE_NAME.VOUCHER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/VoucherCodeCreate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, ROUTE_NAME.BONUS_CREATE)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'voucher/edit',
                    name: ROUTE_NAME.VOUCHER_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Bonus/VoucherCodeEdit'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.bonus, ROUTE_NAME.BONUS_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/affiliate',
            component: () => import('@/views/Affiliate/Affiliate.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.AFFILIATE_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/AffiliateOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'listing',
                    name: ROUTE_NAME.AFFILIATE_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Management/AffiliateListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.AFFILIATE_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Management/AffiliateDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.AFFILIATE_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Management/AffiliateCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'reports/agent',
                    name: ROUTE_NAME.AFFILIATE_REPORTS_AGENT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Reports/AffiliateReportsAgent.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateReports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'reports/product',
                    name: ROUTE_NAME.AFFILIATE_REPORTS_PRODUCT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Reports/AffiliateReportsProduct.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateReports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustment',
                    name: ROUTE_NAME.AFFILIATE_ADJUSTMENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Adjustment/AffiliateAdjustmentListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAdjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustment/details',
                    name: ROUTE_NAME.AFFILIATE_ADJUSTMENT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Adjustment/AffiliateAdjustmentDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAdjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'adjustment/create',
                    name: ROUTE_NAME.AFFILIATE_ADJUSTMENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Adjustment/AffiliateAdjustmentCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAdjustment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction',
                    name: ROUTE_NAME.AFFILIATE_TRANSACTION_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Transaction/AffiliateTransactionListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/details',
                    name: ROUTE_NAME.AFFILIATE_TRANSACTION_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Transaction/AffiliateTransactionDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/checklist',
                    name: ROUTE_NAME.AFFILIATE_TRANSACTION_CHECK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Transaction/AffiliateTransactionCheckList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account',
                    name: ROUTE_NAME.AFFILIATE_BANK_ACCOUNT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/BankAccount/AffiliateBankAccountListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/create',
                    name: ROUTE_NAME.AFFILIATE_BANK_ACCOUNT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/BankAccount/AffiliateBankAccountCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/details',
                    name: ROUTE_NAME.AFFILIATE_BANK_ACCOUNT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/BankAccount/AffiliateBankAccountDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-bank',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_BANK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberBank/AffiliateMemberBankListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-bank/details',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_BANK_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberBank/AffiliateMemberBankDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_GROUP_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberGroup/AffiliateMemberGroupListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/create',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_GROUP_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberGroup/AffiliateMemberGroupCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/details',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_GROUP_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberGroup/AffiliateMemberGroupDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/channel',
                    name: ROUTE_NAME.AFFILIATE_MEMBER_CHANNEL_GROUP,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MemberGroup/AffiliateMemberChannelGroup.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-method-limit',
                    name: ROUTE_NAME.AFFILIATE_METHOD_LIMIT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MethodLimit/AffiliateMethodLimitListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-method-limit/create',
                    name: ROUTE_NAME.AFFILIATE_METHOD_LIMIT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MethodLimit/AffiliateMethodLimitCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-method-limit/create/batch',
                    name: ROUTE_NAME.AFFILIATE_METHOD_LIMIT_BATCH_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MethodLimit/AffiliateMethodLimitBatchCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-method-limit/details',
                    name: ROUTE_NAME.AFFILIATE_METHOD_LIMIT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/MethodLimit/AffiliateMethodLimitDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'configurations',
                    name: ROUTE_NAME.AFFILIATE_CONFIG_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Configurations/AffiliateConfigurationsListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateConfiguration, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'type-approval',
                    name: ROUTE_NAME.AFFILIATE_TYPE_APPROVAL_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/TypeApproval/AffiliateTypeApprovalListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAgent, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'type-approval/details',
                    name: ROUTE_NAME.AFFILIATE_TYPE_APPROVAL_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/TypeApproval/AffiliateTypeApprovalDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAgent, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'type-approval/create',
                    name: ROUTE_NAME.AFFILIATE_TYPE_APPROVAL_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/TypeApproval/AffiliateTypeApprovalCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliateAgent, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'agent',
                    name: ROUTE_NAME.AGENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentListing.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-create',
                    name: ROUTE_NAME.AGENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCreate.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-downline',
                    name: ROUTE_NAME.AGENT_DOWNLINE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentDownlineListing.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-profile/:agentId',
                    name: ROUTE_NAME.AGENT_PROFILE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentProfile.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-player',
                    name: ROUTE_NAME.AGENT_PLAYER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentPlayerListing.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-player-detail',
                    name: ROUTE_NAME.AGENT_PLAYER_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentPlayerDetail.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-report',
                    name: ROUTE_NAME.AGENT_REPORT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentReport.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-summary-report',
                    name: ROUTE_NAME.AGENT_SUMMARY_REPORT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentSummaryReport.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-team-apply',
                    name: ROUTE_NAME.AGENT_TEAM_APPLY_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentTeamApplyList.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-commission-report',
                    name: ROUTE_NAME.AGENT_COMMISSION_REPORT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCommissionReport.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-commission-summary-report',
                    name: ROUTE_NAME.AGENT_COMMISSION_SUMMARY_REPORT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCommissionSummaryReport.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'agent-withdrawal',
                    name: ROUTE_NAME.AGENT_WITHDRAWAL_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentWithdrawalList.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-withdrawal-detail',
                    name: ROUTE_NAME.AGENT_WITHDRAWAL_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentWithdrawalDetail.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-wallet-log',
                    name: ROUTE_NAME.AGENT_WALLET_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentWalletLog.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-adjustment',
                    name: ROUTE_NAME.AGENT_ADJUSTMENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentAdjustmentList.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-adjustment-detail',
                    name: ROUTE_NAME.AGENT_ADJUSTMENT_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentAdjustmentDetail.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-forgot-password-log',
                    name: ROUTE_NAME.AGENT_FORGOT_PASSWORD_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentForgotPasswordLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'agent-otp-log',
                    name: ROUTE_NAME.AGENT_SMS_OTP_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentOtpLog.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'agent-audit-log',
                    name: ROUTE_NAME.AGENT_AUDIT_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentAuditLog.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'agent-tagging',
                    name: ROUTE_NAME.AGENT_TAGGING_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentTagging.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'agent-commission-plan',
                    name: ROUTE_NAME.AGENT_COMMISSION_PLAN,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCommissionPlanList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create-agent-commission-plan',
                    name: ROUTE_NAME.AGENT_CREATE_COMMISSION_PLAN,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCreateCommissionPlan.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'home-banner',
                    name: ROUTE_NAME.AGENT_BANNER,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentBanner.vue'),
                    beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }
                },
                {
                    path: 'banner-materials',
                    name: ROUTE_NAME.AGENT_BANNER_MATERIALS_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentBannerMaterialsList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'banner-management',
                    name: ROUTE_NAME.AGENT_BANNER_MATERIALS_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentBannerMaterialsManagement.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'banner-detail',
                    name: ROUTE_NAME.AGENT_BANNER_MATERIALS_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentBannerMaterialsDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'register-page-banner',
                    name: ROUTE_NAME.AGENT_REGISTER_PAGE_BANNER,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentRegisterPageBannerListing.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log('route', ROUTE_NAME.AGENT_REGISTER_PAGE_BANNER)
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: ROUTE_NAME.AGENT_FLAG_IP,
                    name: ROUTE_NAME.AGENT_FLAG_IP,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentFlaggedIp.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log('route', ROUTE_NAME.AGENT_FLAG_IP)
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'register-ip',
                    name: ROUTE_NAME.AGENT_REGISTER_IP,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentRegisterIp.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log('route', ROUTE_NAME.AGENT_REGISTER_IP)
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'commission-detail',
                    name: ROUTE_NAME.AGENT_COMMISSION_SUMMARY_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentCommissionSummaryDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'summary-stat',
                    name: ROUTE_NAME.AGENT_SUMMARY_STAT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Agent/AgentSummaryStat.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliate, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-method',
                    name: ROUTE_NAME.AFFILIATE_PAYMENT_METHOD_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Affiliate/Method/AffiliatePaymentMethodListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.affiliatePayment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/announcement',
            component: () => import('@/views/Announcement/Announcement.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.ANNOUNCEMENT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Announcement/AnnouncementListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.announcement, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.ANNOUNCEMENT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Announcement/AnnouncementCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.announcement, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'details',
                    name: ROUTE_NAME.ANNOUNCEMENT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Announcement/AnnouncementDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.announcement, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/payment2',
            component: () => import('@/views/Payment2/Payment2'),
            children: [
                {
                    path: 'bank-account',
                    name: ROUTE_NAME.PAYMENT2_BANK_ACCOUNT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/BankAccount/Payment2BankAccountListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/create',
                    name: ROUTE_NAME.PAYMENT2_BANK_ACCOUNT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/BankAccount/Payment2BankAccountCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/details',
                    name: ROUTE_NAME.PAYMENT2_BANK_ACCOUNT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/BankAccount/Payment2BankAccountDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_PROVIDER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayProvider/Payment2GatewayProviderListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider/create',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_PROVIDER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayProvider/Payment2GatewayProviderCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider/details',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_PROVIDER_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayProvider/Payment2GatewayProviderDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_ACCOUNT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayAccount/Payment2GatewayAccountListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'withdrawal-automation',
                    name: ROUTE_NAME.PAYMENT2_WITHDRAWAL_AUTOMATION,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/WithdrawalAutomation/WAutomationListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'withdrawal-automation/details',
                    name: ROUTE_NAME.PAYMENT2_WITHDRAWAL_AUTOMATION_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/WithdrawalAutomation/WAutomationDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account/create',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_ACCOUNT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayAccount/Payment2GatewayAccountCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account/details',
                    name: ROUTE_NAME.PAYMENT2_GATEWAY_ACCOUNT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/GatewayAccount/Payment2GatewayAccountDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency',
                    name: ROUTE_NAME.PAYMENT2_CURRENCY_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Currency/Payment2CurrencyListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency/create',
                    name: ROUTE_NAME.PAYMENT2_CURRENCY_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Currency/Payment2CurrencyCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency/details',
                    name: ROUTE_NAME.PAYMENT2_CURRENCY_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Currency/Payment2CurrencyDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group',
                    name: ROUTE_NAME.PAYMENT2_MEMBER_GROUP_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/MemberGroup/Payment2MemberGroupListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/create',
                    name: ROUTE_NAME.PAYMENT2_MEMBER_GROUP_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/MemberGroup/Payment2MemberGroupCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/details',
                    name: ROUTE_NAME.PAYMENT2_MEMBER_GROUP_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/MemberGroup/Payment2MemberGroupDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-bank',
                    name: ROUTE_NAME.PAYMENT2_MEMBER_BANK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/MemberBank/MemberBankListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'reject-remark',
                    name: ROUTE_NAME.PAYMENT2_REJECT_REMARK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Transaction/RejectRemarkList.vue'),
                    // beforeEnter: (to, from, next) => {
                    //     if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                    //         return next(toUnauthorizedPage)
                    //     }
                    //     next()
                    // }
                },
                {
                    path: 'member-bank/details',
                    name: ROUTE_NAME.PAYMENT2_MEMBER_BANK_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/MemberBank/MemberBankDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank',
                    name: ROUTE_NAME.PAYMENT2_BANK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Bank/Payment2BankListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank/create',
                    name: ROUTE_NAME.PAYMENT2_BANK_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Bank/Payment2BankCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank/details',
                    name: ROUTE_NAME.PAYMENT2_BANK_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Bank/Payment2BankDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-options',
                    name: ROUTE_NAME.PAYMENT2_OPTIONS_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/PaymentOptions/PaymentOptionsListing')
                },
                {
                    path: 'payment-options-create',
                    name: ROUTE_NAME.PAYMENT2_OPTIONS_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/PaymentOptions/PaymentOptionCreate')
                },
                {
                    path: 'payment-method/:methodId',
                    name: ROUTE_NAME.PAYMENT2_OPTIONS_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/PaymentOptions/PaymentOptionDetail')
                },
                {
                    path: 'payment-options-overview',
                    name: ROUTE_NAME.PAYMENT2_OPTIONS_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/PaymentOptions/PaymentOptionsOverview')
                },

                {
                    path: 'transaction/deposit',
                    name: ROUTE_NAME.PAYMENT2_TRANSACTION_DEPOSIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Transaction/PaymentTransactionListingDeposit.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/withdrawal',
                    name: ROUTE_NAME.PAYMENT2_TRANSACTION_WITHDRAWAL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Transaction/PaymentTransactionListingWithdrawal.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/processing-withdrawal',
                    name: ROUTE_NAME.PAYMENT2_PROCESSING_WITHDRAWAL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Transaction/PaymentProcessingWithdrawal.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/details/:transaction_id',
                    name: ROUTE_NAME.PAYMENT2_TRANSACTION_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment2/Transaction/PaymentTransactionDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment2, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/payment',
            component: () => import('@/views/Payment/Payment.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.PAYMENT_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/PaymentOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency',
                    name: ROUTE_NAME.PAYMENT_CURRENCY_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Currency/PaymentCurrencyListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency/create',
                    name: ROUTE_NAME.PAYMENT_CURRENCY_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Currency/PaymentCurrencyCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'currency/details',
                    name: ROUTE_NAME.PAYMENT_CURRENCY_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Currency/PaymentCurrencyDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group',
                    name: ROUTE_NAME.PAYMENT_MEMBER_GROUP_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberGroup/PaymentMemberGroupListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/create',
                    name: ROUTE_NAME.PAYMENT_MEMBER_GROUP_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberGroup/PaymentMemberGroupCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-group/details',
                    name: ROUTE_NAME.PAYMENT_MEMBER_GROUP_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberGroup/PaymentMemberGroupDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-options',
                    name: ROUTE_NAME.PAYMENT_OPTIONS_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/PaymentOption/PaymentOptionListing'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_MEMBER_GROUP_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-option-detail',
                    name: ROUTE_NAME.PAYMENT_OPTIONS_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/PaymentOption/PaymentOptionDetail'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_MEMBER_GROUP_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'payment-option-create',
                    name: ROUTE_NAME.PAYMENT_OPTIONS_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/PaymentOption/PaymentOptionCreate'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_MEMBER_GROUP_DETAILS)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank',
                    name: ROUTE_NAME.PAYMENT_BANK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Bank/PaymentBankListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank/create',
                    name: ROUTE_NAME.PAYMENT_BANK_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Bank/PaymentBankCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank/details',
                    name: ROUTE_NAME.PAYMENT_BANK_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Bank/PaymentBankDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_PROVIDER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayProvider/PaymentGatewayProviderListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider/create',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_PROVIDER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayProvider/PaymentGatewayProviderCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-provider/details',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_PROVIDER_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayProvider/PaymentGatewayProviderDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method',
                    name: ROUTE_NAME.PAYMENT_METHOD_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Method/PaymentMethodListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account',
                    name: ROUTE_NAME.PAYMENT_BANK_ACCOUNT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/BankAccount/PaymentBankAccountListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/create',
                    name: ROUTE_NAME.PAYMENT_BANK_ACCOUNT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/BankAccount/PaymentBankAccountCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'bank-account/details',
                    name: ROUTE_NAME.PAYMENT_BANK_ACCOUNT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/BankAccount/PaymentBankAccountDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-bank',
                    name: ROUTE_NAME.PAYMENT_MEMBER_BANK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberBank/MemberBankListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'member-bank/details',
                    name: ROUTE_NAME.PAYMENT_MEMBER_BANK_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberBank/MemberBankDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_ACCOUNT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayAccount/PaymentGatewayAccountListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account/create',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_ACCOUNT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayAccount/PaymentGatewayAccountCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'gateway-account/details',
                    name: ROUTE_NAME.PAYMENT_GATEWAY_ACCOUNT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/GatewayAccount/PaymentGatewayAccountDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method-limit',
                    name: ROUTE_NAME.PAYMENT_METHOD_LIMIT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MethodLimit/PaymentMethodLimitListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method-limit/create/batch',
                    name: ROUTE_NAME.PAYMENT_METHOD_LIMIT_BATCH_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MethodLimit/PaymentMethodLimitBatchCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method-limit/create',
                    name: ROUTE_NAME.PAYMENT_METHOD_LIMIT_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MethodLimit/PaymentMethodLimitCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method-limit/details',
                    name: ROUTE_NAME.PAYMENT_METHOD_LIMIT_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MethodLimit/PaymentMethodLimitDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction',
                    name: ROUTE_NAME.PAYMENT_TRANSACTION_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Transaction/PaymentTransactionListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/deposit',
                    name: ROUTE_NAME.PAYMENT_TRANSACTION_DEPOSIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Transaction/PaymentTransactionListingDeposit.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_TRANSACTION_LIST)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/withdrawal',
                    name: ROUTE_NAME.PAYMENT_TRANSACTION_WITHDRAWAL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Transaction/PaymentTransactionListingWithdrawal.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_TRANSACTION_LIST)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/processing-withdrawal',
                    name: ROUTE_NAME.PAYMENT_PROCESSING_WITHDRAWAL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Transaction/PaymentProcessingWithdrawal.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, ROUTE_NAME.PAYMENT_TRANSACTION_LIST)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction/details',
                    name: ROUTE_NAME.PAYMENT_TRANSACTION_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Transaction/PaymentTransactionDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction-checklist',
                    name: ROUTE_NAME.PAYMENT_TRANSACTION_CHECK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Merchant/PaymentMerchantTransactionCheckList.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'method-setting',
                    name: ROUTE_NAME.PAYMENT_MERCHANT_METHOD,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/Merchant/PaymentMerchantMethod.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'channel-group',
                    name: ROUTE_NAME.PAYMENT_CHANNEL_GROUP_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Payment/MemberGroup/PaymentChannelGroupDetail.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.payment, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/reports',
            component: () => import('@/views/Reports/Reports.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REPORTS_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/ReportsOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'winloss',
                    name: ROUTE_NAME.REPORTS_WIN_LOSS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/ReportsMemberWinLoss.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'summary-stat',
                    name: ROUTE_NAME.SUMMARY_STAT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/OverallSummary.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                // {
                //     path: 'total-wallet-balance',
                //     name: ROUTE_NAME.TOTAL_WALLET_BALANCE,
                //     meta: {layout: 'layout-master'},
                //     component: () => import('@/views/Reports/TotalWalletBalance.vue'),
                //     beforeEnter: (to, from, next) => {
                //         if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                //             return next(toUnauthorizedPage)
                //         }
                //         next()
                //     }
                // },
                {
                    path: 'bet-details',
                    name: ROUTE_NAME.REPORTS_BET_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/ReportsMemberBetDetails.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'free-spin-log',
                    name: ROUTE_NAME.FREE_SPIN_LOG,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/FreespinGameLog.vue'),
                    // beforeEnter: (to, from, next) => {
                    //     if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                    //         return next(toUnauthorizedPage)
                    //     }
                    //     next()
                    // }
                },
                {
                    path: 'bet-details/unsettled',
                    name: ROUTE_NAME.REPORTS_UNSETTLED_BET_DETAILS,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/ReportsMemberBetDetailsUnsettled.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.reports, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'transaction-summary',
                    name: ROUTE_NAME.AGENT_TRANSACTION_SUMMARY,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/TransactionSummary.vue')
                    /*beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }*/
                },
                {
                    path: 'first-deposit',
                    name: ROUTE_NAME.FIRST_DEPOSIT,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Reports/FirstDepositReport.vue')
                    /*beforeEnter: (to, from, next) => {
                      if (!accessRightHandler.isAuthorizedPage(moduleIds.user, to.name)) {
                        return next(toUnauthorizedPage)
                      }
                      next()
                    }*/
                },
            ]
        },
        {
            path: '/configurations',
            component: () => import('@/views/Configurations/Configurations.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.CONFIG_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Configurations/ConfigurationsListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.configurations, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/troubleshoot',
            component: () => import('@/views/Troubleshoot/TroubleshootListing.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.TROUBLESHOOT_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Troubleshoot/TroubleshootListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.troubleshoot, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/ipcheck',
            component: () => import('@/views/IpRestriction/IpCheckListing.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.IP_CHECK_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/IpRestriction/IpCheckListing.vue'),
                    beforeEnter: (to, from, next) => {

                        if (!accessRightHandler.isAuthorizedPage(moduleIds.ipcheck, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                }
            ]
        },
        {
            path: '/ipcheck/details',
            name: ROUTE_NAME.IP_CHECK_DETAILS,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/IpRestriction/IpCheckDetail.vue'),
            beforeEnter: (to, from, next) => {

                if (!accessRightHandler.isAuthorizedPage(moduleIds.ipcheck, to.name)) {
                    return next(toUnauthorizedPage)
                }
                next()
            }
        },
        {
            path: '/compliance',
            component: () => import('@/views/Compliance/Compliance.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.COMPLIANCE_OVERVIEW,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Compliance/ComplianceOverview.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.compliance, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'paymentBlacklist',
                    name: ROUTE_NAME.COMPLIANCE_PAYMENT_BLACKLIST_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Compliance/CompliancePaymentBlacklistListing.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.compliance, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'paymentBlacklist/create',
                    name: ROUTE_NAME.COMPLIANCE_PAYMENT_BLACKLIST_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Compliance/CompliancePaymentBlacklistCreate.vue'),
                    beforeEnter: (to, from, next) => {
                        if (!accessRightHandler.isAuthorizedPage(moduleIds.compliance, to.name)) {
                            return next(toUnauthorizedPage)
                        }
                        next()
                    }
                },
                {
                    path: 'fingerprintBlacklist',
                    name: ROUTE_NAME.COMPLIANCE_FINGERPRINT_BLACKLIST_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Compliance/FingerprintBlacklistListing.vue'),
                },
                {
                    path: 'MemberContactBlacklist',
                    name: ROUTE_NAME.COMPLIANCE_CONTACT_BLACKLIST_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/Compliance/MemberContactBlacklistListing.vue'),
                },
            ]
        },
        {
            path: '/registrationBanner',
            component: () => import('@/views/RegistrationBanner/RegistrationBanner.vue'),
            children: [
                {
                    path: '',
                    name: ROUTE_NAME.REGISTRATION_BANNER_LIST,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RegistrationBanner/RegistrationBannerListing.vue')
                },
                {
                    path: 'create',
                    name: ROUTE_NAME.REGISTRATION_BANNER_CREATE,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RegistrationBanner/RegistrationBannerCreate.vue')
                },
                {
                    path: 'detail/:registration_banner_id',
                    name: ROUTE_NAME.REGISTRATION_BANNER_DETAIL,
                    meta: {layout: 'layout-master'},
                    component: () => import('@/views/RegistrationBanner/RegistrationBannerDetail.vue')
                }
            ]
        },
        {
            path: '/error/unauthorized',
            name: ROUTE_NAME.ERROR_UNAUTHORIZED,
            meta: {layout: 'layout-master'},
            component: () => import('@/views/Error/ErrorUnauthorized.vue')
        },
        {
            path: '/login',
            name: ROUTE_NAME.LOGIN,
            component: () => import('@/views/Login.vue')
        },
        {
            path: '*',
            redirect: {name: ROUTE_NAME.HOME}
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.document.title = (sharedFunction.checkIsAgentBO() ? SHARED.MAIN_BRAND_NAME.toUpperCase() + ' AGENT PORTAL' : SHARED.BRAND_CODE.toUpperCase() + ' ADMIN PORTAL')

    var link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.getElementsByTagName('head')[0].appendChild(link)
    }
    link.href = '/' + SHARED.BRAND_CODE + '/favicon.ico'

    if (!accessRightHandler.isAuthenticated(to.name)) {
        authService.logout()
        return next({name: ROUTE_NAME.LOGIN})
    }
    next()
})

export default router
