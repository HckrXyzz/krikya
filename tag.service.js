import {apiHelper} from '@/util'
import {SHARED} from '@/constants/constants'

export const tagService = {
    getPlayerTagging,
    getU1PlayerTagging,
    getAgentPlayerTagging,
    getWithdrawalTagging,
    pullTagColorDdl
}

//API urls
const TAG = {
    GET_WITHDRAWAL: '/getLog',
    GET_PLAYER_TAGGING: '/getPlayerTagging',
    GET_PLAYER_U1_TAGGING: '/getPlayerU1Tagging',
    GET_PLAYER_AGENT_TAGGING: '/getPlayerAgentTagging',
    TAG_COLOUR: 'get-tag-color',
    TAGGING: '/tag'
}

function getPlayerTagging(memberId) {
    return apiHelper().get(`${TAG.TAGGING}/${memberId}${TAG.GET_PLAYER_TAGGING}`)
}

function pullTagColorDdl() {
    return apiHelper().get(`${TAG.TAGGING}/${TAG.TAG_COLOUR}`)
}

function getU1PlayerTagging(u1MemberId) {
    return apiHelper().get(`${TAG.TAGGING}/${u1MemberId}${TAG.GET_PLAYER_U1_TAGGING}`)
}

function getAgentPlayerTagging(memberId) {
    return apiHelper().get(`${TAG.TAGGING}/${memberId}${TAG.GET_PLAYER_AGENT_TAGGING}`)
}

function getWithdrawalTagging(memberId, tagID) {
    const requestOptions = {
        params:{
            tag_id: tagID
        }
    }
    return apiHelper().get(`${TAG.TAGGING}/${memberId}${TAG.GET_WITHDRAWAL}`, requestOptions)
}
