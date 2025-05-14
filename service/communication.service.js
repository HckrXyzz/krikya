import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'

export const CommunicationService = {
    getCommunicationConfigList,
    createCommunicationConfig,
    updateCommunicationConfig,
    communicationConfigDetail,
    getCommunicationTypeList
}

const COMMUNICATION_CONFIG = {
    COMMUNICATION : 'communication',
    CONFIG: 'config',
    UPDATE: 'update',
    COMMUNICATION_CONFIG_LIST: 'config/list',
    COMMUNICATION_CONFIG_CREATE: 'config/create',
    COMMUNICATION_CONFIG_DETAIL: 'config/detail',
    COMMUNICATION_CONFIG_TYPE: 'type/list'
}

function getCommunicationConfigList(filter) {
    const requestOptions = {
        params: {
            url_type_id: filter.url_type_id,
            member_group_id: filter.member_group_id,
            status: filter.status,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageSize,
            page: filter.pageNumber
        }
    }
    return apiHelper().get(`${COMMUNICATION_CONFIG.COMMUNICATION}/${COMMUNICATION_CONFIG.COMMUNICATION_CONFIG_LIST}`, requestOptions)
}

function createCommunicationConfig(communicationObj) {
    const requestOptions = {
        url_type_id: communicationObj.url_type_id,
        url: communicationObj.url,
        member_group_id: communicationObj.member_group_id == -1 ? null : communicationObj.member_group_id,
        apply_side: communicationObj.apply_side,
        status: communicationObj.status,
        currency: SHARED.DEFAULT_CURRENCY
    }
    return apiHelper().post(`${COMMUNICATION_CONFIG.COMMUNICATION}/${COMMUNICATION_CONFIG.COMMUNICATION_CONFIG_CREATE}`, requestOptions)
}

function updateCommunicationConfig(communicationObj) {
    const requestOptions = {
        url_type_id: communicationObj.url_type_id,
        url: communicationObj.url,
        member_group_id: communicationObj.member_group_id == -1 ? null : communicationObj.member_group_id,
        apply_side: communicationObj.apply_side,
        status: communicationObj.status
    }
    return apiHelper().patch(`${COMMUNICATION_CONFIG.COMMUNICATION}/${COMMUNICATION_CONFIG.CONFIG}/${communicationObj.id}/${COMMUNICATION_CONFIG.UPDATE}`, requestOptions)
}

function communicationConfigDetail(communicationObj) {
    const requestOptions = {
        params: {
            id: communicationObj,
            currency: SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${COMMUNICATION_CONFIG.COMMUNICATION}/${COMMUNICATION_CONFIG.COMMUNICATION_CONFIG_DETAIL}`, requestOptions)
}

function getCommunicationTypeList() {
    return apiHelper().get(`${COMMUNICATION_CONFIG.COMMUNICATION}/${COMMUNICATION_CONFIG.COMMUNICATION_CONFIG_TYPE}`)
}
