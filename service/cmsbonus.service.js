import {apiHelper} from '@/util'
import {API, SHARED} from '@/constants/constants'

export const cmsbonusService = {
    createContent,
    publishBonus,
    publishAllContent,
    updateStatus,
    updateContent,
    updateSequence,
    getBonusContentJson,
    getBonusList,
    getBonusCategories,
    getBonusDetails,
    getContentList,
    getExclusiveList,
    getScheduledList,
    getBonusManualApplied,
    membersValidity
}

//API urls
const BONUS = {
    CMS: 'cms',
    BONUS: 'bonus',
    CMS_BONUS_CATEGORIES: 'cmsbonus_categories',
    CONTENT: 'content',
    CMS_BONUS: 'promoCmsBonus',
    BONUS_LIST: '/bonus',
    PUBLISH: 'publish',
    STATUS: 'status',
    ALL: 'all',
    SEQUENCE: 'sequence',
    EXCLUSIVE: 'exclusive',
    SCHEDULE: 'sched',
    MEMBER_VALIDITY: '/bonus/members/validity',
    BONUS_MANUAL_APPLIED: 'manualApply'
}

function createContent(obj) {
    let requestBody = {
        bonus_id: obj.bonusId,
        categories: obj.categories,
        name: obj.title,
        description: obj.localization[0].description,
        is_active: obj.isActive,
        is_live: obj.isLive,
        tnc: obj.tnc,
        manual_form: obj.manualForm,
        res_image_source: obj.resImageSource,
        localization: obj.localization,
        action: obj.action,
        audience: [obj.audience],
        start_time: obj.startDate,
        end_time: obj.endDate,
        is_exclusive: obj.isExclusive,
        exclusive_member: obj.isExclusive ? obj.exclusiveMember : [],
        is_scheduled: obj.isScheduled,
        scheduled_list: obj.isScheduled ? obj.scheduledList : [],
        sequence: obj.sequence,
        providers: ''
    }
    return apiHelper(API.CMS_URL).post(`${BONUS.CMS_BONUS}`, requestBody)
}

function publishBonus(data) {
    let bonusId = data.id
    let requestBody = {
        is_live: data.isLive
    }
    return apiHelper(API.CMS_URL).patch(`${BONUS.CMS_BONUS}/${bonusId}/${BONUS.PUBLISH}`, requestBody)
}

function publishAllContent() {
    return apiHelper(API.CMS_URL).post(`${BONUS.CMS_BONUS}/${BONUS.PUBLISH}/${BONUS.ALL}`)
}

function updateStatus(obj) {
    let bonusId = obj.id
    let requestBody = {
        is_active: obj.isActive
    }
    return apiHelper(API.CMS_URL).patch(`${BONUS.CMS_BONUS}/${bonusId}/${BONUS.STATUS}`, requestBody)
}

function updateContent(bonusContentId, obj) {
    let requestBody = {
        bonus_id: obj.bonusId,
        categories: obj.categories,
        name: obj.title,
        description: obj.description,
        is_active: obj.isActive,
        is_live: obj.isLive,
        tnc: obj.tnc,
        manual_form: obj.manualForm,
        res_image_source: obj.resImageSource,
        localization: obj.localization,
        action: obj.action,
        audience: [obj.audience],
        start_time: obj.startDate,
        end_time: obj.endDate,
        is_exclusive: obj.isExclusive,
        exclusive_member: obj.isExclusive ? obj.exclusiveMember : [],
        is_scheduled: obj.isScheduled,
        scheduled_list: obj.isScheduled ? obj.scheduledList : [],
        sequence: obj.sequence,
        providers: ''
    }
    return apiHelper(API.CMS_URL).post(`${BONUS.CMS_BONUS}/${bonusContentId}`, requestBody)
}

function updateSequence(data) {
    let bonusId = data.id
    let requestBody = {
        sequence: data.sequence
    }
    return apiHelper(API.CMS_URL).patch(`${BONUS.CMS_BONUS}/${bonusId}/${BONUS.SEQUENCE}`, requestBody)
}

function getFormattedDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
}

function getNextYearDate() {
    var today = new Date();
    var date = today.getFullYear() + 1 + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
}

function getBonusList(filter) {
    const requestOptions = {
        params: {
            name: filter.bonusName,
            bonus_code: filter.bonusCode,
            bonus_mode: filter.bonusMode,
            currency: filter.bonusCurrency,
            target_wallet: filter.bonusWallet,
            categoryId: filter.bonusCategory,
            start_time: filter.bonusStartDate == null ? getFormattedDate() : filter.bonusStartDate,
            end_time: filter.bonusEndDate == null ? getNextYearDate() : filter.bonusEndDate,
            is_active: filter.isActive,
            provider: filter.bonusProvider,
            is_pinable: filter.isRecommeded,
            page: filter.pageNumber,
            size: filter.pageSize
        }
    }
    return apiHelper(API.BO_URL).get(`${BONUS.BONUS_LIST}`, requestOptions)
}

async function getBonusCategories({currencyCode}) {
    return apiHelper(API.CMS_URL).get(`${BONUS.CMS_BONUS_CATEGORIES}`, {params: {currencyCode}})
}

async function getBonusDetails(id) {
    return apiHelper(API.BO_URL).get(`${BONUS.BONUS}/${id}`)
}

function getBonusContentJson(bonusContentId) {
    let appendAuthHeader = false
    let brandCode = SHARED.BRAND_ENV == 'staging' ? SHARED.BRAND_CODE + "_" + SHARED.BRAND_ENV : SHARED.BRAND_CODE;
    return apiHelper(API.MEDIA_DOMAIN, appendAuthHeader).get(`/${BONUS.CMS}/${BONUS.BONUS}/${BONUS.CONTENT}/${brandCode.toLowerCase()}/${bonusContentId}.json?v=${Date.now()}`)
}

function getContentList(filter) {
    const requestOptions = {
        params: {
            page: filter.pageNumber,
            size: filter.pageSize,
            start_time: filter.startDate,
            end_time: filter.endDate,
            is_active: filter.isActive,
            bonus_name: filter.bonusName,
            type: filter.type,
            timeline_status: filter.timelineStatus,
            is_preview: filter.isPreview,
            name: filter.name
        }
    }
    return apiHelper(API.CMS_URL).get(`${BONUS.CMS_BONUS}/${BONUS.ALL}`, requestOptions)
}

function getExclusiveList(bonusContentId) {
    return apiHelper(API.CMS_URL).get(`${BONUS.CMS_BONUS}/${bonusContentId}/${BONUS.EXCLUSIVE}`)
}

function getScheduledList(bonusContentId) {
    return apiHelper(API.CMS_URL).get(`${BONUS.CMS_BONUS}/${bonusContentId}/${BONUS.SCHEDULE}`)
}

function getBonusManualApplied(filter) {
    const requestOptions = {
        params: {
            size: filter.pageSize,
            page: filter.pageNumber,
            content_id: filter.contentId,
            membercode: filter.memberCode,
            start_time: filter.startDate,
            end_time: filter.endDate
        }
    }
    return apiHelper(API.CMS_URL).get(`${BONUS.CMS_BONUS}/${BONUS.BONUS_MANUAL_APPLIED}`, requestOptions)
}

async function membersValidity(predefined_member) {
    const requestBody = {
        members: predefined_member
    }
    return apiHelper(API.BO_URL).post(`${BONUS.MEMBER_VALIDITY}`, requestBody)
}
