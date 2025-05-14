import {apiHelper} from '@/util'
import {SHARED} from '@/constants/constants'

export const memberService = {
    getMemberOverview,
    getMemberGroupList,
    getMemberGroupEventList,
    getMemberListing,
    getMember,
    updateAccountStatus,
    updateGameStatus,
    updateAccessRestrictionStatus,
    resetFailedLoginAttempts,
    resetPassword,
    getMemberRoleList,
    getMemberPermissionList,
    addMemberPermissionList,
    registerLocalProvider,
    lockGameAccount,
    resetLocalProvider,
    updateMemberPermissionList,
    kickPlayer,
    adjustMemberVipTierLevel,
    sendMessage,
    sendReward,
    boResetPassword,
    crossLoginIp,
    addNewContact,
    updateContactStatus,
    updateContactVerificationStatus,
    updatePrimaryContact,
    getRemarkList,
    createRemark,
    getLoginLogList,
    getMemberWallet,
    getSummary,
    updateMemberInfo,
    getMemberInfoChangedLogType,
    getMemberInfoChangedLog,
    getBetHistoryStatus,
    getBetHistoryListing,
    getMemberGroupListForEdit,
    getMemberGroupItem,
    uploadContactAvatar,
    updateMemberGroup,
    createMemberGroup,
    deleteMemberGroup,
    getVipIcons,
    updateMemberRole,
    updateMemberVipLevel,
    getPassLoginIp,
    getOnlineMember,
    setSecondaryContact,
    updatePrimaryContactNo,
    getSmsLog,
    getForgotPasswordSmsLog,
    smsLogGenerateOtp,
    getTaggingListing,
    getTaggingById,
    updateTaggingListing,
    addTagging,
    assignTagging,
    massAssignTagging,
    removeTaggingFromMember,
    createBatchTagging,
    getBetLog,
    onlineCount,
    crossLoginFp,
    getPassLoginFp,
    getTotalPlayerBalance,
    exportAllCsv,
    exportTopBalance,
    editFullName,
    editDOB,
    editMemberDetail,
    getPlayerWalletBalance,
    deactivatePhoneNumber,
    exportTag,
    exportInactive,
    pullUserActiveLog,
    pullUserWalletLog,
    pullUserResetPasswordLog,
    pullUserContactLog,
    getBannedMemberContactList,
    updateBannedMemberContactStatus,
    createBannedMemberContact,
    getMemberTaggingLog,
    approvePhoneNumber,
    getFingerprintLog,
    getRegisterIpSummary,
    getRegisterIpMember,
    banMemberRegisterIp,
    unbanMemberRegisterIp,
    exportRegisterIpMembers,
    exportRegisterIpSummary,
    getSmsOtpStatus,
    resetSmsOtpStatusChecking,
    banMemberAll
}

//API urls
const MEMBER = {
    MEMBER_TAG: '/getMemberLog',
    DEACTIVATE_PHONE: '/deactivatePhone',
    GET_PLAYER_BALANCE: '/getPlayerBalance',
    TOTAL_PLAYER_BALANCE: '/dashboard/allPlayerBalance',
    ONLINE_COUNT: '/onlineMembers/stat',
    SECONDARY_CONTACT: '/secondaryContacts',
    UPDATE_PRIMARY_CONTACT: '/primaryContacts',
    OVERVIEW: '/member/overview',
    MEMBER: '/member',
    MEMBER_GROUP: 'memberBettingPassGroup',
    MEMBER_GROUP_EVENT: 'memberBettingPassEventGroup',
    MEMBER_GROUP_AVATAR: 'memberBettingPassGroupAvatar',
    VIP_ICONS: 'vipIcons',
    STATUS: 'status',
    ENABLE_NAME: 'enableName',
    EDIT_DOB: 'editDOB',
    EDIT_ADDRESS_DETAILS: 'editAddressDetails',
    FAILED_LOGIN_ATTEMPTS: 'login_attempts',
    RESET_PASSWORD: 'password',
    CONTACT: 'contacts',
    VERIFICATION: 'verification',
    PRIMARY: 'primary',
    REMARK: 'remark',
    LOGIN_LOG: 'loginlog',
    WALLET: 'wallet',
    SUMMARY: 'summary',
    ONE_TIME_INFO: 'onetimeinfo',
    LOG: 'log',
    TYPE: 'type',
    BET_HISTORY: 'bet-history',
    MEMBER_ROLE_LIST: 'memberRole/getAllRoleGroupList',
    MEMBER_ROLE_PERMISSION_LIST: 'memberRole/mainModule',
    ADD_MEMBER_ROLE_PERMISSION_LIST: 'memberRole/addMemberRoleGroup',
    UPDATE_MEMBER_ROLE_PERMISSION_LIST: 'memberRole/updateRoleGroup',
    KICK_PLAYER: 'kick',
    ADJUST_VIP_TIER_LEVEL: 'adjustVipGroupLevel',
    SEND_REWARD: 'sendReward',
    SEND_MESSAGE: 'sendMessage',
    CROSS_IP: 'crossLoginIp',
    PASS_LOGIN_IP: 'passLoginIp',
    CROSS_FP: 'crossLoginFp',
    PASS_LOGIN_FP: 'passFingerprint',
    RESET_TEMP_PASSWORD: 'resetTempPassword',
    REGISTER_LOCAL_PROVIDER: 'localPlayer',
    RESET_LOCAL_PROVIDER: 'resetLocalPlayer',
    LOCK_ACCOUNT: 'lockAccount',
    UPDATE_MEMBER_ROLE_PAIR: 'memberRole/updateMemberPairGroup',
    UPDATE_MEMBER_VIP_LEVEL: 'updateVip',
    GET_MEMBER_ONLINE_LIST: 'onlineMembers',
    SMS_LOGS: 'roku/sms/smsLog/search',
    FORGOT_PASSWORD_SMS_LOG: 'roku/sms/smsLogging/search_forgot',
    SMS_LOGS_GENERATE_OTP: 'roku/sms/smsLog',
    GET_TAGGING_LIST: 'tag',
    ASSIGN_TAGGING: 'tag/assign',
    MASS_ASSIGN_TAGGING: 'tag/mass-assign',
    REMOVE_TAGGING: 'tag/member',
    CREATE_BATCH_TAGGING: 'tag/batch',
    GET_BET_LOG: 'bet/bet_log',
    EXPORT_ALL_CSV: 'member/export-all',
    EXPORT_TOP_BALANCE: 'member/export-top-balance',
    FINGERPRINT: 'member/fingerprint-log',
    EXPORT_TAG: 'member/export-tag',
    EXPORT_INACTIVE: 'member/inactive-log',
    ACTIVE_LOG: 'active-log',
    RESET_PASSWORD_LOG: 'reset-pass-log',
    CONTACT_LOG: 'contact-log',
    WALLET_LOG: 'wallet-log',
    CREATE_BANNED_CONTACT: 'banned/member/contact/create',
    UPDATE_BANNED_CONTACT: 'banned/member/contact/status',
    GET_BANNED_CONTACT: 'banned/member/contact/list',
    APPROVE_PHONE: 'approvePhone',
    GET_REGISTER_IP_SUMMARY: 'registerIpSummary',
    GET_REGISTER_IP_MEMBERS: 'registerIpMembers',
    BAN_REGISTER_IP: 'register_ip/ban',
    EXPORT_REGISTER_IP_MEMBERS: 'exportRegisterIpMembers',
    EXPORT_REGISTER_IP_SUMMARY: 'exportRegisterIpSummary',
    SMS_OTP_STATUS: 'roku/sms/smsLog/status',
    RESET_SMS_OTP_STATUS_CHECKING: 'roku/sms/smsLog/reset_status',
    BAN_MEMBER_ALL: 'banMemberAll',
}

function approvePhoneNumber(filter) {
    const requestOptions = {
        member_id: filter.memberId,
        phone_number: filter.phone_number
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${MEMBER.APPROVE_PHONE}`, requestOptions)
}

function exportAllCsv(filter) {
    const requestOptions = {
        params: {
            last_deposit_start_date: filter.lastDepositStartDate == null || filter.lastDepositStartDate == '' ? '' : filter.lastDepositStartDate + ' ' + '00:00:00',
            last_deposit_end_date: filter.lastDepositEndDate == null || filter.lastDepositEndDate == '' ? '' : filter.lastDepositEndDate + ' ' + '23:59:59',
            login_start_date: filter.loginStartDate == null || filter.loginStartDate == '' ? '' : filter.loginStartDate + ' ' + '00:00:00',
            login_end_date: filter.loginEndDate == null || filter.loginEndDate == '' ? '' : filter.loginEndDate + ' ' + '23:59:59',
            register_start_date: filter.registerStartDate == null || filter.registerStartDate == '' ? '' : filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate == null || filter.registerEndDate == '' ? '' : filter.registerEndDate + ' ' + '23:59:59',
            agent_team: filter.agentTeam,
            currency: SHARED.DEFAULT_CURRENCY,
            status: filter.memberStatus
        }
    }
    return apiHelper().get(`${MEMBER.EXPORT_ALL_CSV}`, requestOptions)
}

function exportTopBalance() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY,
        }
    }
    return apiHelper().get(`${MEMBER.EXPORT_TOP_BALANCE}`, requestOptions)
}

function deactivatePhoneNumber(filter) {
    const requestOptions = {
        phone_number: filter.phone_number
    }
    return apiHelper().patch(`${MEMBER.MEMBER}${MEMBER.DEACTIVATE_PHONE}/${filter.memberId}`, requestOptions)
}

function getTotalPlayerBalance() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.TOTAL_PLAYER_BALANCE}`, requestOptions)
}

function onlineCount() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.ONLINE_COUNT}`, requestOptions)
}

function createBatchTagging(taggingObj) {
    return apiHelper().post(`${MEMBER.CREATE_BATCH_TAGGING}`, taggingObj.batchTagging)
}

function getTaggingListing(filter) {
    const requestOptions = {
        params: {
            size: filter.pageTagSize,
            page: filter.pageNumber,
            currency: SHARED.DEFAULT_CURRENCY,
            tag_type: filter.tag_type,
            order: filter.order || ''
        }
    }
    return apiHelper().get(`${MEMBER.GET_TAGGING_LIST}`, requestOptions)
}

function getTaggingById(tagId) {
    return apiHelper().get(`${MEMBER.GET_TAGGING_LIST}/${tagId}`)
}

function updateTaggingListing(filter, tagId) {
    const requestOptions = {
        name: filter.name,
        remark: filter.remark,
        status: filter.status == true ? 1 : 0,
        tag_color: filter.tag_color,
        tag_type: filter.tag_type,
        currency: filter.currency
    }
    return apiHelper().patch(`${MEMBER.GET_TAGGING_LIST}/${tagId}`, requestOptions)
}

function addTagging(filter) {
    const requestOptions = {
        name: filter.name,
        remark: filter.remark,
        tag_type: filter.tag_type,
        currency: filter.currency
    }
    return apiHelper().post(`${MEMBER.GET_TAGGING_LIST}`, requestOptions)
}

function assignTagging(filter) {
    const requestOptions = {
        // membercode: filter.membercode,
        member_id: filter.member_id,
        tag_id: filter.tag_id
    }
    return apiHelper().post(`${MEMBER.ASSIGN_TAGGING}`, requestOptions)
}

function massAssignTagging(filter) {
    const requestOptions = {
        members: filter.members,
        tag_id: filter.tag_id
    }
    return apiHelper().post(`${MEMBER.MASS_ASSIGN_TAGGING}`, requestOptions)
}

function removeTaggingFromMember(filter) {
    return apiHelper().delete(`${MEMBER.REMOVE_TAGGING}/${filter.tag_id}`)
}

function getSmsLog(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            phone_number: filter.mobile,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.SMS_LOGS}`, requestOptions)
}

function getForgotPasswordSmsLog(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            phone_number: filter.mobile,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.FORGOT_PASSWORD_SMS_LOG}`, requestOptions)
}

function smsLogGenerateOtp(data) {
    const requestData = {
        phone_number: data.phone_number,
        currency: data.currency,
        membercode: data.membercode,
    }
    return apiHelper().post(`${MEMBER.SMS_LOGS_GENERATE_OTP}`, requestData)
}

function getPlayerWalletBalance(memberId) {
    return apiHelper().get(`${MEMBER.MEMBER}/${memberId}${MEMBER.GET_PLAYER_BALANCE}`)
}

async function getMemberWallet(memberId, memberCode = '') {
    const requestOptions = {
        params: {
            membercode: memberCode
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${memberId}/${MEMBER.WALLET}`, requestOptions)
}

function getOnlineMember(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            member_id: filter.memberId,
            membercode: filter.memberCode,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${MEMBER.GET_MEMBER_ONLINE_LIST}`, requestOptions)
}

function setSecondaryContact(filter) {
    const requestOptions = {
        contact_type: 'Mobile',
        contact_value: filter.phoneNumber
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${filter.memberId}${MEMBER.SECONDARY_CONTACT}`, requestOptions)
}

function updatePrimaryContactNo(filter) {
    const requestOptions = {
        contact_type: 'Mobile',
        contact_value: filter.phoneNumber
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${filter.memberId}${MEMBER.UPDATE_PRIMARY_CONTACT}`, requestOptions)
}

function updateMemberVipLevel(filter) {
    const requestOptions = {
        vip_id: filter.vip_id
    }
    return apiHelper().patch(`${MEMBER.MEMBER_GROUP}/${filter.memberId}/${MEMBER.UPDATE_MEMBER_VIP_LEVEL}`, requestOptions)
}

function updateMemberRole(filter) {
    const requestOptions = {
        role_id: filter.role_id
    }
    return apiHelper().patch(`${MEMBER.UPDATE_MEMBER_ROLE_PAIR}/${filter.memberId}`, requestOptions)
}

function resetLocalProvider(memberId, filter) {
    const requestOptions = {
        provider: filter.providerCode
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${memberId}/${MEMBER.RESET_LOCAL_PROVIDER}`, requestOptions)
}

function lockGameAccount(memberId, filter) {
    const requestOptions = {
        provider: filter.providerCode,
        is_locked: filter.is_locked
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${memberId}/${MEMBER.LOCK_ACCOUNT}`, requestOptions)
}

function registerLocalProvider(memberId, filter) {
    const requestOptions = {
        provider: filter.providerCode
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${memberId}/${MEMBER.REGISTER_LOCAL_PROVIDER}`, requestOptions)
}

function boResetPassword(memberId) {
    return apiHelper().patch(`${MEMBER.MEMBER}/${memberId}/${MEMBER.RESET_TEMP_PASSWORD}`)
}

function sendReward(memberId, amount) {
    return apiHelper().post(`${MEMBER.MEMBER}/${memberId}/${MEMBER.SEND_REWARD}`, {amount})
}

function sendMessage(memberId, data) {
    const payload = {
        message: data.message.toString(),
        title: data.title.toString()
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${memberId}/${MEMBER.SEND_MESSAGE}`, payload)
}

function kickPlayer(memberId) {
    return apiHelper().patch(`${MEMBER.MEMBER}/${memberId}/${MEMBER.KICK_PLAYER}`)
}

function adjustMemberVipTierLevel(memberCode) {
    let formData = new FormData()
    formData.append('membercode', memberCode)
    return apiHelper().post(`${MEMBER.MEMBER}/${MEMBER.ADJUST_VIP_TIER_LEVEL}`, formData)
}

function getPassLoginIp(filter) {
    let memberId = filter.memberId
    const requestOptions = {
        params: {
            size: filter.size,
            page: filter.page
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${memberId}/${MEMBER.PASS_LOGIN_IP}`, requestOptions)
}

function getPassLoginFp(filter) {
    let memberId = filter.memberId
    const requestOptions = {
        params: {
            size: filter.size,
            page: filter.page
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${memberId}/${MEMBER.PASS_LOGIN_FP}`, requestOptions)
}

function crossLoginFp(filter) {
    const requestOptions = {
        params: {
            fp: filter.fp
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.CROSS_FP}`, requestOptions)
}

function crossLoginIp(filter) {
    const requestOptions = {
        params: {
            ip: filter.ip
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.CROSS_IP}`, requestOptions)
}

function updateMemberPermissionList(filter, role_id) {
    const requestOptions = {
        register_type: filter.register_type,
        allow_modules: filter.allow_modules,
        is_default: filter.is_default,
        role_remarks: filter.role_remarks
    }

    return apiHelper().patch(`${MEMBER.UPDATE_MEMBER_ROLE_PERMISSION_LIST}/${role_id}`, requestOptions)
}

function addMemberPermissionList(filter) {
    const requestOptions = {
        role_name: filter.role_name,
        register_type: filter.register_type,
        allow_modules: filter.allow_modules,
        is_default: filter.is_default,
        role_remarks: filter.role_remarks,
        currency: filter.currency
    }

    return apiHelper().post(`${MEMBER.ADD_MEMBER_ROLE_PERMISSION_LIST}`, requestOptions)
}

function getMemberPermissionList() {
    return apiHelper().get(`${MEMBER.MEMBER_ROLE_PERMISSION_LIST}`)
}

function getMemberRoleList(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            is_active: filter.roleStatus,
            role_name: filter.roleName,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${MEMBER.MEMBER_ROLE_LIST}`, requestOptions)
}

function getLoginLogList(filter) {
    const requestOptions = {
        params: {
            page: filter.loginLogPageNumber,
            size: filter.loginLogPageSize
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${filter.selectedMemberId}/${MEMBER.LOGIN_LOG}`, requestOptions)
}

function getMemberOverview() {
    const requestOptions = {
        params: {
            type: 'currency'
        }
    }
    return apiHelper().get(`${MEMBER.OVERVIEW}`, requestOptions)
}

function getMemberListing(filter) {
    const requestOptions = {
        params: {
            id: filter.id,
            surname: filter.surname,
            name: filter.name,
            currency: filter.currency,
            page: filter.pageNumber,
            size: filter.pageSize,
            membercode: filter.memberCode,
            tag_id: filter.tagGroup,
            finance_status: filter.finance_status,
            member_group_id: filter.memberGroup,
            member_group_event_id: filter.memberGroupEvent,
            vip_member_group_id: filter.vipTierMemberGroup,
            is_active: filter.memberStatus > 1 ? 1 : filter.memberStatus,
            login_status: filter.memberStatus > 1 ? 0 : 1,
            login_start_date: filter.loginStartDate == null || filter.loginStartDate == '' ? '' : filter.loginStartDate + ' ' + '00:00:00',
            login_end_date: filter.loginEndDate == null || filter.loginEndDate == '' ? '' : filter.loginEndDate + ' ' + '23:59:59',
            register_start_date: filter.registerStartDate == null || filter.registerStartDate == '' ? '' : filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate == null || filter.registerEndDate == '' ? '' : filter.registerEndDate + ' ' + '23:59:59',
            last_deposit_start_date: filter.lastDepositStartDate == null || filter.lastDepositStartDate == '' ? '' : filter.lastDepositStartDate + ' ' + '00:00:00',
            last_deposit_end_date: filter.lastDepositEndDate == null || filter.lastDepositEndDate == '' ? '' : filter.lastDepositEndDate + ' ' + '23:59:59',
            email: filter.email,
            mobile: filter.mobile,
            line: filter.line,
            role: filter.roleName,
            login_type: filter.loginType,
            referred_by: filter.referred_by,
            order_column: filter.orderColumn,
            order_sequence: filter.orderSequence,
            agent_team: filter.agentTeam,
            min_balance: filter.minBalance,
            max_balance: filter.maxBalance,
            fingerprint: filter.fingerprint,
            referral_code: filter.referralCode,
            register_ip: filter.registerIp
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}`, requestOptions)
}

function getMember(id) {
    return apiHelper().get(`${MEMBER.MEMBER}/${id}`)
}

function getRemarkList(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.REMARK}`, requestOptions)
}

function createRemark(memberRemarkObj) {
    const requestBody = {
        remark: memberRemarkObj.remark,
        remark_date: memberRemarkObj.remarkDate
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${memberRemarkObj.id}/${MEMBER.REMARK}`, requestBody)
}

function getMemberGroupEventList() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.MEMBER_GROUP_EVENT}`, requestOptions)
}

function getMemberGroupList() {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.MEMBER_GROUP}`, requestOptions)
}

function getMemberGroupListForEdit(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            sequences: filter.sequence,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${MEMBER.MEMBER_GROUP}`, requestOptions)
}

function getMemberGroupItem(id) {
    return apiHelper().get(`${MEMBER.MEMBER_GROUP}/${id}`)
}

function uploadContactAvatar(contactForm) {
    return apiHelper().post(`${MEMBER.MEMBER_GROUP_AVATAR}`, contactForm)
}

function updateMemberGroup(id, memberGroupObj) {
    return apiHelper().put(`${MEMBER.MEMBER_GROUP}/${id}`, memberGroupObj)
}

function createMemberGroup(id, memberGroupObj) {
    return apiHelper().post(`${MEMBER.MEMBER_GROUP}`, memberGroupObj)
}

function deleteMemberGroup(id) {
    return apiHelper().delete(`${MEMBER.MEMBER_GROUP}/${id}`)
}

function getVipIcons() {
    return apiHelper().get(`${MEMBER.VIP_ICONS}`)
}

function updateAccountStatus(id, accountStatusObj) {
    const requestBody = {
        field_key: accountStatusObj.key,
        field_value: accountStatusObj.value,
        field_remark: accountStatusObj.remark
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.STATUS}`, requestBody)
}

function updateGameStatus(id, gameStatusObj) {
    const requestBody = {
        field_key: gameStatusObj.key,
        field_value: gameStatusObj.value,
        field_remark: gameStatusObj.remark
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.STATUS}`, requestBody)
}

function updateAccessRestrictionStatus(id, accessRestrictionStatusObj) {
    const requestBody = {
        field_key: accessRestrictionStatusObj.key,
        field_value: accessRestrictionStatusObj.value,
        field_remark: accessRestrictionStatusObj.remark
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.STATUS}`, requestBody)
}

function resetFailedLoginAttempts(id) {
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.FAILED_LOGIN_ATTEMPTS}`)
}

function resetPassword(id, domain, language) {
    const requestBody = {
        contact_type: 'email',
        domain: domain,
        language: language
    }

    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.RESET_PASSWORD}`, requestBody)
}

function addNewContact(id, newContact) {
    const requestBody = {
        contact_value: newContact.contactValue,
        is_primary: newContact.isPrimary,
        is_verified: newContact.isVerified,
        contact_type: newContact.contactType
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${id}/${MEMBER.CONTACT}`, requestBody)
}

function updateContactStatus(id, contactId, isActive) {
    const requestBody = {
        is_active: isActive
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.CONTACT}/${contactId}/${MEMBER.STATUS}`, requestBody)
}

function updateContactVerificationStatus(id, contactId, contactType, isVerified) {
    const requestBody = {
        contact_type: contactType,
        is_verified: isVerified
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.CONTACT}/${contactId}/${MEMBER.VERIFICATION}`, requestBody)
}

function updatePrimaryContact(id, contactId, contactType) {
    const requestBody = {
        contact_type: contactType,
        is_primary: 1
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${id}/${MEMBER.CONTACT}/${contactId}/${MEMBER.PRIMARY}`, requestBody)
}

function getSummary(id, filter) {
    const requestOptions = {
        params: {
            start_time: filter.startDate,
            end_time: filter.endDate
        }
    }

    return apiHelper().get(`${MEMBER.MEMBER}/${id}/${MEMBER.SUMMARY}`, requestOptions)
}

function updateMemberInfo(data) {
    const requestBody = {
        field_key: data.key,
        field_value: data.value,
        field_remark: data.remark
    }
    return apiHelper().patch(`${MEMBER.MEMBER}/${data.id}/${MEMBER.ONE_TIME_INFO}`, requestBody)
}

function getMemberInfoChangedLogType() {
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.STATUS}/${MEMBER.LOG}/${MEMBER.TYPE}`)
}

function getMemberInfoChangedLog(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            status_field: filter.logType
        }
    }

    return apiHelper().get(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.STATUS}/${MEMBER.LOG}`, requestOptions)
}

function getBetHistoryStatus() {
    return apiHelper().get(`${MEMBER.BET_HISTORY}/${MEMBER.STATUS}`)
}

function getBetHistoryListing(filter) {
    let apiParams = {
        page: filter.pageNumber,
        size: filter.pageSize,
        order_column: filter.orderColumn,
        order_sequence: filter.orderType,
        provider: filter.gameProvider,
        game_type: filter.gameType,
        currency: filter.currency,
        membercode: filter.memberCode,
        status: filter.betStatus,
        start_date: filter.startDate == null ? '' : filter.startDate,
        end_date: filter.endDate == null ? '' : filter.endDate,
        is_full_search: !filter.isPartialSearch ? 1 : 0
    }

    const requestOptions = {
        params: apiParams
    }

    return apiHelper().get(`${MEMBER.BET_HISTORY}`, requestOptions)
}

function getBetLog(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            start_bet_time: filter.startBetTime,
            end_bet_time: filter.endBetTime,
            membercode: filter.memberCode,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${MEMBER.GET_BET_LOG}`, requestOptions)
}

function editFullName(filter) {
    const requestBody = {
        member_name: filter.memberName
    }

    return apiHelper().patch(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.ENABLE_NAME}`, requestBody)
}

function editDOB(filter) {
    const requestBody = {
        member_dob: filter.memberDOB
    }

    return apiHelper().patch(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.EDIT_DOB}`, requestBody)
}

function editMemberDetail(filter) {
    const requestBody = {
        address: filter.address,
        place_of_birth: filter.place_of_birth,
        province: filter.province,
        postcode: filter.postcode,
        country: filter.country
    }

    return apiHelper().patch(`${MEMBER.MEMBER}/${filter.memberId}/${MEMBER.EDIT_ADDRESS_DETAILS}`, requestBody)
}

function exportTag(filter) {
    const requestOptions = {
        params: {
            tagGroup: filter.tagGroup && filter.tagGroup.join(','),
            StartDate: filter.StartDate == null || filter.StartDate == '' ? '' : filter.StartDate + ' ' + '00:00:00',
            EndDate: filter.EndDate == null || filter.EndDate == '' ? '' : filter.EndDate + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.EXPORT_TAG}`, requestOptions)
}

function exportInactive(filter) {
    const requestOptions = {
        params: {
            StartDate: filter.StartDate == null || filter.StartDate == '' ? '' : filter.StartDate + ' ' + '00:00:00',
            EndDate: filter.EndDate == null || filter.EndDate == '' ? '' : filter.EndDate + ' ' + '23:59:59',
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.EXPORT_INACTIVE}`, requestOptions)
}

function pullUserActiveLog(memberID) {
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.ACTIVE_LOG}/${memberID}`)
}

function getMemberTaggingLog(memberId, tagID) {
    const requestOptions = {
        params: {
            tag_id: tagID
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${memberId}${MEMBER.MEMBER_TAG}`, requestOptions)
}

function pullUserWalletLog(memberID) {
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.WALLET_LOG}/${memberID}`)
}

function pullUserResetPasswordLog(memberID) {
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.RESET_PASSWORD_LOG}/${memberID}`)
}

function pullUserContactLog(contact) {
    const requestOptions = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.CONTACT_LOG}/${contact}`, requestOptions)
}

function getBannedMemberContactList(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            phone_number: filter.phone_number,
            currency: SHARED.DEFAULT_CURRENCY,
            is_banned: filter.is_banned
        }
    }
    return apiHelper().get(`${MEMBER.GET_BANNED_CONTACT}`, requestOptions)
}

function updateBannedMemberContactStatus(bannedObj) {
    const requestBody = {
        is_banned: bannedObj.is_banned
    }

    return apiHelper().patch(`${MEMBER.UPDATE_BANNED_CONTACT}/${bannedObj.id}`, requestBody)
}

function createBannedMemberContact(bannedObj) {
    const requestBody = {
        phone_number: bannedObj.phone_number,
        currency: SHARED.DEFAULT_CURRENCY
    }

    return apiHelper().post(`${MEMBER.CREATE_BANNED_CONTACT}`, requestBody)
}

function getFingerprintLog(filter) {
    const requestBody = {
        params: {
            member_id: filter.memberId,
            fingerprint: filter.fingerprint,
            start_date: filter.startDate,
            end_date: filter.endDate,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${MEMBER.FINGERPRINT}`, requestBody)
}

function getRegisterIpSummary(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            size: filter.pageSize,
            page: filter.pageNumber,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
            register_ip: filter.registerIp,
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.GET_REGISTER_IP_SUMMARY}`, requestOptions)
}

function getRegisterIpMember(filter) {
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
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.GET_REGISTER_IP_MEMBERS}`, requestOptions)
}

function banMemberRegisterIp(ipAddress) {
    const requestOptions = {
        action: 'ban',
        ip_address: ipAddress
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${MEMBER.BAN_REGISTER_IP}`, requestOptions)
}

function unbanMemberRegisterIp(ipAddressId, ipAddress) {
    const requestOptions = {
        action: 'unban',
        ip_address: ipAddress,
        ip_address_id: ipAddressId
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${MEMBER.BAN_REGISTER_IP}`, requestOptions)
}

function exportRegisterIpMembers(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
            register_ip: filter.registerIp
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.EXPORT_REGISTER_IP_MEMBERS}`, requestOptions)
}

function exportRegisterIpSummary(filter) {
    const requestOptions = {
        params: {
            currency: filter.currency,
            register_start_date: filter.registerStartDate + ' ' + '00:00:00',
            register_end_date: filter.registerEndDate + ' ' + '23:59:59',
            register_ip: filter.registerIp
        }
    }
    return apiHelper().get(`${MEMBER.MEMBER}/${MEMBER.EXPORT_REGISTER_IP_SUMMARY}`, requestOptions)
}

function getSmsOtpStatus({ currency, membercode }) {
    const requestOptions = {
        params: {
            currency: currency,
            membercode: membercode,
        }
    }
    return apiHelper().get(`${MEMBER.SMS_OTP_STATUS}`, requestOptions)
}
function resetSmsOtpStatusChecking({ currency, membercode }) {
    const requestOptions = {
        currency: currency,
        membercode: membercode,
    }
    return apiHelper().post(`${MEMBER.RESET_SMS_OTP_STATUS_CHECKING}`, requestOptions)
}

function banMemberAll(bannedObj) {
    const requestBody = {
        batch_banned: bannedObj.batchBanned,
        should_ban_fp: bannedObj.shouldBanFp
    }
    return apiHelper().post(`${MEMBER.MEMBER}/${MEMBER.BAN_MEMBER_ALL}`, requestBody)
}
