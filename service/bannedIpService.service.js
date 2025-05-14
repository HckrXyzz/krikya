import { apiHelper } from '@/util'
import { BANNED_IP as constBANNED_IP } from "@/constants/constants";

export const bannedIpService = {
    getBannedRegisterIpList,
    addMultipleIpToBanList,
    removeRegisterIpFromBanList,
    removeMultipleRegisterIpFromBanList,
}

const BANNED_IP = {
    BANNED_IP: 'banned_ips',
    REMOVE_MULTIPLE: 'delete_multiple'
}

function getBannedRegisterIpList(filter) {
    filter = filter || {}
    const requestOptions = {
        params: {
            type: filter.type || constBANNED_IP.type.MEMBER_REGISTER
        }
    }
    return apiHelper().get(`${BANNED_IP.BANNED_IP}`, requestOptions)
}
function addMultipleIpToBanList(ipAddresses) {
    const requestBody = {
        ip_addresses: ipAddresses,
    }
    return apiHelper().post(`${BANNED_IP.BANNED_IP}`, requestBody)
}
function removeRegisterIpFromBanList(ipAddressId) {
    return apiHelper().delete(`${BANNED_IP.BANNED_IP}/${ipAddressId}`)
}
function removeMultipleRegisterIpFromBanList(ipAddressIds) {
    const requestBody = {
        data: {
            ip_address_ids: ipAddressIds,
        }
    }
    return apiHelper().delete(`${BANNED_IP.BANNED_IP}/${BANNED_IP.REMOVE_MULTIPLE}`, requestBody)
}