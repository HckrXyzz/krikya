import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'

export const notificationService = {
  createNotificationSingleMessage,
  createNotificationBatchMessage,
  createNotificationSegmentMessage,
  viewNotificationDetail,
  getNotificationMessage,
  getNotificationSubscribe
}

const NOTIFICATION = {
  CREATE_SPECIFIC: 'oneSignal/create/specific',
  CREATE_BATCH: 'oneSignal/create/csv',
  CREATE_SEGMENT: 'oneSignal/create/segment',
  NOTIFICATION_DETAIL: 'oneSignal/view/notification/detail',
  GET_NOTIFICATION: 'oneSignal/notification/message',
  GET_NOTIFICATION_SUBSCRIBE: 'oneSignal/notification/subscribe'
}

function createNotificationSingleMessage(notificationObj) {
  const requestBody = {
    membercode: notificationObj.membercode,
    contents: notificationObj.contents,
    headings: notificationObj.headings,
    language: notificationObj.languages_available,
    send_after: notificationObj.send_after,
    currency: SHARED.DEFAULT_CURRENCY,
    chrome_web_image: notificationObj.chrome_web_image,
    chrome_web_icon: notificationObj.chrome_web_icon,
    agent_masked: notificationObj.agent_masked,
    customize_url: notificationObj.customize_url
  }
  return apiHelper().post(`${NOTIFICATION.CREATE_SPECIFIC}`, requestBody)
}

function createNotificationBatchMessage(notificationObj) {
  const requestBody = {
    notification_membercode: notificationObj.notification_membercode,
    contents: notificationObj.contents,
    headings: notificationObj.headings,
    language: notificationObj.languages_available,
    send_after: notificationObj.send_after,
    chrome_web_image: notificationObj.chrome_web_image,
    chrome_web_icon: notificationObj.chrome_web_icon,
    currency: SHARED.DEFAULT_CURRENCY,
    agent_masked: notificationObj.agent_masked,
    customize_url: notificationObj.customize_url
  }
  return apiHelper().post(`${NOTIFICATION.CREATE_BATCH}`, requestBody)
}

function createNotificationSegmentMessage(notificationObj) {
  const requestBody = {
    included_segments: notificationObj.included_segments,
    contents: notificationObj.contents,
    headings: notificationObj.headings,
    language: notificationObj.languages_available,
    send_after: notificationObj.send_after,
    chrome_web_image: notificationObj.chrome_web_image,
    chrome_web_icon: notificationObj.chrome_web_icon,
    currency: SHARED.DEFAULT_CURRENCY,
    agent_masked: notificationObj.agent_masked,
    customize_url: notificationObj.customize_url
  }
  return apiHelper().post(`${NOTIFICATION.CREATE_SEGMENT}`, requestBody)
}

function getNotificationMessage(filter) {
  const requestOptions = {
    params: {
      size: filter.pageSize,
      page: filter.pageNumber,
      membercode: filter.membercode,
      start_time: filter.start_time,
      end_time: filter.end_time
    }
  }
  return apiHelper().get(`${NOTIFICATION.GET_NOTIFICATION}`, requestOptions)
}

function getNotificationSubscribe(filter) {
  const requestOptions = {
    params: {
      size: filter.pageSize,
      page: filter.pageNumber,
      membercode: filter.membercode
    }
  }
  return apiHelper().get(`${NOTIFICATION.GET_NOTIFICATION_SUBSCRIBE}`, requestOptions)
}

function viewNotificationDetail(notificationObj) {
  const requestOptions = {
    params: {
      notification_id: notificationObj
    }
  }
  return apiHelper().get(`${NOTIFICATION.NOTIFICATION_DETAIL}`, requestOptions)
}
