import {apiHelper} from '@/util'
import {API} from "@/constants/constants";

export const unsettledBetService = {
    resyncUnsettled
}

//API urls
const UNSETTLED = {
    bSwizRunningTicket: '/game/sync/betswiz'
}

function resyncUnsettled(data) {
    const requestBody = {
        consolidateId: data.consolidateId,
        currency: data.currency
    }

    return apiHelper().post(`${UNSETTLED.bSwizRunningTicket}`, requestBody)
}

