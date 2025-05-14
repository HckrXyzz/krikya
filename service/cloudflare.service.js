import { apiHelper } from '@/util'

export const cloudFlareService = {
    getBannedIpList,
    addMultipleIpToBanList,
    removeIpFromBanList,
    removeMultipleIpFromBanList,
}

const CLOUDFLARE = {
    LIST: '/cloudflare/banned_ips',
    ADD_MULTIPLE: '/cloudflare/banned_ips/add_multiple',
    REMOVE_MULTIPLE: '/cloudflare/banned_ips/delete_multiple'
}

function getBannedIpList() {
    return apiHelper().get(`${CLOUDFLARE.LIST}`)
}
function addIpToBanList(ipAddress) {
    const requestBody = {
        ip_address: ipAddress,
    }
    return apiHelper().post(`${CLOUDFLARE.LIST}`, requestBody)
}
function addMultipleIpToBanList(ipAddresses) {
    const requestBody = {
        ip_addresses: ipAddresses,
    }
    return apiHelper().post(`${CLOUDFLARE.ADD_MULTIPLE}`, requestBody)
}
function removeIpFromBanList(ipAddressId) {
    return apiHelper().delete(`${CLOUDFLARE.LIST}/${ipAddressId}`)
}
function removeMultipleIpFromBanList(ipAddressIds) {
    const requestBody = {
        data: {
            ip_address_ids: ipAddressIds,
        }
    }
    return apiHelper().delete(`${CLOUDFLARE.REMOVE_MULTIPLE}`, requestBody)
}