import { apiHelper } from '@/util'
import { API, SHARED } from '@/constants/constants'

export const registrationBannerService = {
  getRegistrationBannerList,
  createRegistrationBanner,
  getRegistrationBannerDetails,
  updateRegistrationBannerStatus,
  editRegistrationBanner,
  updateRegistrationBannerSequence
}

//API urls
const REGISTRATION_BANNER = {
  REGISTRATION_BANNER_CATEGORY: '/signUpBanner/category',
  REGISTRATION_BANNER: '/signUpBanner',
  REGISTRATION_BANNER_IMAGE_UPLOAD: '/image/upload',
  STATUS: 'status',
  SEQUENCE: 'sequence'
}

function getRegistrationBannerList(filter) {
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
  return apiHelper(API.CMS_URL).get(`${REGISTRATION_BANNER.REGISTRATION_BANNER}`, requestOptions)
}

function createRegistrationBanner(data) {
  const requestBody = {
    category: data.category,
    title: data.title,
    description: "Registration Banner Cms Creation",
    localization: data.localization,
    sequence: 1,
    start_time: data.startDate,
    end_time: data.endDate,
    res_image_source: data.res_image_source,
    currency: data.currency
  }
  return apiHelper(API.CMS_URL).post(`${REGISTRATION_BANNER.REGISTRATION_BANNER}`, requestBody)
}

function editRegistrationBanner(data) {
  let bannerId = data.registrationBannerId
  const requestBody = {
    category: data.category,
    title: data.title,
    description: data.description,
    localization: data.localization,
    sequence: data.sequence,
    start_time: data.startDate,
    end_time: data.endDate,
    res_image_source: data.res_image_source
  }

  return apiHelper(API.CMS_URL).post(`${REGISTRATION_BANNER.REGISTRATION_BANNER}/${bannerId}`, requestBody)
}

function getRegistrationBannerDetails(id) {
  const requestOptions = {}

  return apiHelper(API.CMS_URL).get(`${REGISTRATION_BANNER.REGISTRATION_BANNER + '/' + id}`, requestOptions)
}

function updateRegistrationBannerStatus(obj) {
  let bannerId = obj.id
  let requestBody = {
    is_active: obj.isActive
  }
  return apiHelper(API.CMS_URL).patch(`${REGISTRATION_BANNER.REGISTRATION_BANNER}/${bannerId}/${REGISTRATION_BANNER.STATUS}`, requestBody)
}

function updateRegistrationBannerSequence(obj) {
  let bannerId = obj.id
  let requestBody = {
    sequence: obj.sequence
  }
  return apiHelper(API.CMS_URL).patch(`${REGISTRATION_BANNER.REGISTRATION_BANNER}/${bannerId}/${REGISTRATION_BANNER.SEQUENCE}`, requestBody)
}
