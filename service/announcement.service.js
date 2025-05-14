import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'

export const announcementService = {
  getAnnouncementType,
  getAnnouncementSite,
  getAnnouncementListing,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  updateAnnouncementStatus,
  getMarqueeAnnouncement,
  getAnnouncementPopupListing
}

//API urls
const ANNOUNCEMENT = {
  AGENT: '/agent',
  ANNOUNCEMENT: '/announcement',
  SITE: 'site',
  TYPE: 'type',
  STATUS: 'status'
}

function getMarqueeAnnouncement(filter){
  const requestOptions = {
    params: {
      release_site: filter.site,
      announcement_type: filter.type,
      size: filter.itemsPerPage,
      page: filter.page,
      is_active:1,
      currency:SHARED.DEFAULT_CURRENCY
    }
  }
  return apiHelper().get(`${ANNOUNCEMENT.ANNOUNCEMENT}`, requestOptions)
}

function getAnnouncementType() {
  return apiHelper().get(`${ANNOUNCEMENT.ANNOUNCEMENT}/${ANNOUNCEMENT.TYPE}`)
}

function getAnnouncementSite() {
  return apiHelper().get(`${ANNOUNCEMENT.ANNOUNCEMENT}/${ANNOUNCEMENT.SITE}`)
}

function getAnnouncementListing(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      title: filter.title,
      announcement_type: filter.type,
      release_site: filter.site,
      start_date: filter.startDate == null ? '' : filter.startDate,
      expired_date: filter.endDate == null ? '' : filter.endDate,
      is_active: filter.status,
      currency: SHARED.DEFAULT_CURRENCY
    }
  }

  return apiHelper().get(`${ANNOUNCEMENT.ANNOUNCEMENT}`, requestOptions)
}

function getAnnouncement(id) {
  return apiHelper().get(`${ANNOUNCEMENT.ANNOUNCEMENT}/${id}`)
}

function createAnnouncement(data) {
  const requestBody = {
    announcement_type_id: data.type,
    title: [data.title],
    messages: [data.messages],
    display_time: data.displayDateTime,
    sub_announcement: data.subtype,
    start_date: data.startDate,
    expired_date: data.endDate,
    release_site: data.targetSites,
    currency: data.currency
  }

  return apiHelper().post(`${ANNOUNCEMENT.ANNOUNCEMENT}`, requestBody)
}

function updateAnnouncement(id, data) {
  const requestBody = {
    title: [data.title],
    messages: [data.messages],
    display_time: data.displayDateTime,
    start_date: data.startDate,
    expired_date: data.endDate,
    release_site: data.targetSites
  }

  return apiHelper().patch(`${ANNOUNCEMENT.ANNOUNCEMENT}/${id}`, requestBody)
}

function updateAnnouncementStatus(id, isActive) {
  const requestBody = {
    is_active: isActive
  }

  return apiHelper().patch(`${ANNOUNCEMENT.ANNOUNCEMENT}/${id}/${ANNOUNCEMENT.STATUS}`, requestBody)
}

function getAnnouncementPopupListing(filter) {
  const requestOptions = {
    params: {
      site: filter.site,
      type: filter.type,
      currency: SHARED.DEFAULT_CURRENCY,
      size: filter.itemsPerPage,
      page: filter.page
    }
  }
  return apiHelper().get(`${ANNOUNCEMENT.AGENT}${ANNOUNCEMENT.ANNOUNCEMENT}`, requestOptions)
}
