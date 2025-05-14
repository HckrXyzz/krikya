import { apiHelper } from '@/util'
import { API, SHARED } from '@/constants/constants'

export const bannerService = {
  getBannerConfig,
  getBannerCategory,
  getBannerList,
  createBanner,
  bannerImageUpload,
  membersValidity,
  getBannerDetails,
  updateBannerStatus,
  editBanner,
  updateBannerPublishStatus,
  publishAllBanner,
  updateBannerSequence
}

//API urls
const BANNER = {
  BANNER_CATEGORY: '/banner/category',
  BANNER: '/emblemBanner',
  MEMBER_VALIDITY: '/bonus/members/validity',
  BANNER_IMAGE_UPLOAD: '/image/upload',
  STATUS: 'status',
  PUBLISH: 'publish',
  ALL: 'all',
  SEQUENCE: 'sequence',
  CONFIG: '/bonus/config'
}

function getBannerConfig() {
  return apiHelper(API.BO_URL).get(`${BANNER.CONFIG}`)
}

function getBannerCategory() {
  return apiHelper(API.CMS_URL).get(`${BANNER.BANNER_CATEGORY}`)
}

function getBannerList(filter) {
  const requestOptions = {
    params: {
      categoryId: filter.categoryId,
      start_time: filter.startDate,
      end_time: filter.endDate,
      title: filter.title,
      is_active: filter.isActive,
      timeline_status: filter.timeline_status,
      currency: SHARED.DEFAULT_CURRENCY,
      page: filter.pageNumber,
      size: filter.pageSize
    }
  }
  return apiHelper(API.CMS_URL).get(`${BANNER.BANNER}`, requestOptions)
}

function createBanner(data) {
  const requestBody = {
    category: data.category,
    title: data.title,
    description: "Banner Cms Creation",
    localization: data.localization,
    sequence: 1,
    action: data.bannerAction,
    action_url: data.bannerActionUrl,
    start_time: data.startDate,
    end_time: data.endDate,
    is_predefined: data.is_predefined,
    predefined_member: data.is_predefined ? data.predefinedMember : [],
    is_scheduled: data.is_schedule,
    scheduled_list: data.is_schedule ? data.schedule_list : [],
    is_live: 0,
    res_image_source: data.res_image_source,
    currency: data.currency,
    audience: [data.audience]
  }
  return apiHelper(API.CMS_URL).post(`${BANNER.BANNER}`, requestBody)
}

function editBanner(data) {
  let bannerId = data.bannerId
  const requestBody = {
    category: data.category,
    title: data.title,
    description: data.description,
    localization: data.localization,
    sequence: data.sequence,
    action: data.bannerAction,
    action_url: data.bannerActionUrl,
    start_time: data.startDate,
    end_time: data.endDate,
    is_predefined: data.is_predefined,
    predefined_member: data.is_predefined ? data.predefinedMember : [],
    is_scheduled: data.is_schedule,
    scheduled_list: data.is_schedule ? data.schedule_list : [],
    res_image_source: data.res_image_source,
    audience: [data.audience]
  }

  return apiHelper(API.CMS_URL).post(`${BANNER.BANNER}/${bannerId}`, requestBody)
}

function bannerImageUpload(data) {
  const requestBody = data
  return apiHelper(API.CMS_URL).post(`${BANNER.BANNER_IMAGE_UPLOAD}`, requestBody)
}

async function membersValidity(predefined_member) {
  const requestBody = {
    members: predefined_member
  }

  return apiHelper(API.BO_URL).post(`${BANNER.MEMBER_VALIDITY}`, requestBody)
}

function getBannerDetails(id) {
  const requestOptions = {}

  return apiHelper(API.CMS_URL).get(`${BANNER.BANNER + '/' + id}`, requestOptions)
}

function updateBannerStatus(obj) {
  let bannerId = obj.id
  let requestBody = {
    is_active: obj.isActive
  }
  return apiHelper(API.CMS_URL).patch(`${BANNER.BANNER}/${bannerId}/${BANNER.STATUS}`, requestBody)
}

function updateBannerPublishStatus(obj) {
  let bannerId = obj.id
  let requestBody = {
    is_live: obj.isLive
  }
  return apiHelper(API.CMS_URL).patch(`${BANNER.BANNER}/${bannerId}/${BANNER.PUBLISH}`, requestBody)
}

function publishAllBanner() {
  return apiHelper(API.CMS_URL).post(`${BANNER.BANNER}/${BANNER.PUBLISH}/${BANNER.ALL}`)
}

function updateBannerSequence(obj) {
  let bonusId = obj.id
  let requestBody = {
    sequence: obj.sequence
  }
  return apiHelper(API.CMS_URL).patch(`${BANNER.BANNER}/${bonusId}/${BANNER.SEQUENCE}`, requestBody)
}
