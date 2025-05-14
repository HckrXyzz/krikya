import { apiHelper } from '@/util'
import {SHARED} from "@/constants/constants";

export const inboxService = {
  createInboxMessage,
  createBatchInbox,
  getInboxMessage,
  getVipDdlList,
  createAllInbox,
  getInboxMsgBonusDdlList,
}

const INBOX = {
  MESSAGE: '/inbox/inboxMessage',
  BATCH: '/inbox/inboxMessage/batch',
  MESSAGE_LIST: '/inbox/inboxList',
  VIP_LIST: '/inbox/inboxVip',
  ALL: '/inbox/inboxMessage/all',
  INBOX_MSG_BONUS_LIST: '/inbox/inboxMsgBonus',
}

function createInboxMessage(inboxObj) {
  const requestBody = {
    membercode: inboxObj.memberCode,
    to_vip: inboxObj.toVip,
    subject: inboxObj.subject,
    message: inboxObj.message,
    content: inboxObj.content,
    currency: SHARED.DEFAULT_CURRENCY,
    localization: inboxObj.localization,
    bonus_id: inboxObj.bonusId,
    bonus_type: inboxObj.bonusType
  }
  return apiHelper().post(`${INBOX.MESSAGE}`, requestBody)
}

function createBatchInbox(inboxObj) {
  const requestBody = {
    subject: inboxObj.subject,
    message: inboxObj.message,
    memberid: inboxObj.batchInbox,
    content: inboxObj.content,
    type: inboxObj.type,
    currency: SHARED.DEFAULT_CURRENCY,
    localization: inboxObj.localization,
    bonus_id: inboxObj.bonusId,
    bonus_type: inboxObj.bonusType
  }
  return apiHelper().post(`${INBOX.BATCH}`, requestBody)
}

function createAllInbox(inboxObj) {
  const requestBody = {
    subject: inboxObj.subject,
    message: inboxObj.message,
    membercode: null,
    content: inboxObj.content,
    type: inboxObj.type,
    currency: SHARED.DEFAULT_CURRENCY,
    localization: inboxObj.localization,
    bonus_id: inboxObj.bonusId,
    bonus_type: inboxObj.bonusType
  }
  return apiHelper().post(`${INBOX.ALL}`, requestBody)
}

function getInboxMessage(filter) {
  const requestOptions = {
    params: {
      sender: filter.sender,
      start_date: filter.startDate == null ? '' : filter.startDate + ' ' + '00:00:00',
      end_date: filter.endDate == null ? '' : filter.endDate + ' ' + '23:59:59',
      size: filter.pageSize,
      page: filter.pageNumber,
      membercode: filter.membercode,
      category: filter.category,
      currency: SHARED.DEFAULT_CURRENCY
    }
  }
  return apiHelper().get(`${INBOX.MESSAGE_LIST}`, requestOptions)
}

function getVipDdlList() {
  return apiHelper().get(`${INBOX.VIP_LIST}`)
}

function getInboxMsgBonusDdlList() {
  return apiHelper().get(`${INBOX.INBOX_MSG_BONUS_LIST}`)
}