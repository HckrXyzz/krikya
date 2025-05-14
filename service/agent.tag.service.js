import {apiHelper} from '@/util'
import {SHARED} from '@/constants/constants'

export const AgentTagService = {
    getTaggingList,
    createTagging,
    getTaggingDetail,
    updateTaggingDetail,
    removeAgentTagging,
    assignAgentTag,
    createBatchAgentTag
}

//API urls
const TAG = {
    TAGGING_LIST: 'agent/tag/list',
    CREATE_TAGGING: 'agent/create/tag',
    TAGGING_DETAIL: 'agent/tag/detail',
    TAGGING: 'agent/tag',
    ASSIGN_TAGGING: 'agent/assign/tag',
    BATCH_AGENT_tAG: 'agent/create/batch/tag'
}

function getTaggingList(filter) {
    const requestOptions = {
        params: {
            tag_type: filter.tag_type,
            currency: SHARED.DEFAULT_CURRENCY,
            size: filter.pageTagSize,
        }
    }
    return apiHelper().get(`${TAG.TAGGING_LIST}`, requestOptions)
}

function createTagging(agentTagObj) {
    const requestBody = {
        name: agentTagObj.name,
        remark: agentTagObj.remark,
        currency: agentTagObj.currency,
        tag_type: agentTagObj.tag_type,
        tag_color: agentTagObj.tag_color,
    }
    return apiHelper().post(`${TAG.CREATE_TAGGING}`, requestBody)
}

function getTaggingDetail(tagId) {
    return apiHelper().get(`${TAG.TAGGING}/${tagId}`)
}

function updateTaggingDetail(agentTagObj) {
    const requestBody = {
        name: agentTagObj.name,
        remark: agentTagObj.remark,
        status: agentTagObj.status,
        currency: agentTagObj.currency,
        tag_type: agentTagObj.tag_type,
        tag_color: agentTagObj.tag_color,
    }
    return apiHelper().patch(`${TAG.TAGGING}/${agentTagObj.id}`, requestBody)
}

function removeAgentTagging(agentTagObj) {
    return apiHelper().delete(`${TAG.TAGGING}/${agentTagObj.id}`)
}

function assignAgentTag(agentTagObj) {
    const requestBody = {
        agent_id: agentTagObj.agent_id,
        tag_id: agentTagObj.tag_id,
    }
    return apiHelper().post(`${TAG.ASSIGN_TAGGING}`, requestBody)
}

function createBatchAgentTag(agentTagObj) {
    return apiHelper().post(`${TAG.BATCH_AGENT_tAG}`, agentTagObj.batchTagging)
}