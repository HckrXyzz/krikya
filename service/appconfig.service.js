import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'

export const appconfigService = {
    getAllContacts,
    insertNewContact,
    uploadContactPhoto,
    updateContactDetails,
    getContactDetails,
    getContactMethods,
    deleteContactDetails,
    updateContactStatus
}

//API urls
const APPCONFIG = {
    APPCONFIG: '/appconfig',
    CONTACTS: 'contacts',
    CONTACT_PHOTO: 'contact_photo',
    CONTACT_METHODS: 'contact_methods',
    STATUS: 'status'
}

function getAllContacts() {
    const requestBody = {
        params: {
            currency: SHARED.DEFAULT_CURRENCY
        }
    }

    return apiHelper().get(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}`, requestBody)
}

function getContactMethods() {
    return apiHelper().get(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACT_METHODS}`)
}

function insertNewContact(contactObject) {
    return apiHelper().post(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}`, contactObject)
}

function uploadContactPhoto(filepayload) {
    let formData = new FormData();
    formData.append('file', filepayload);

    return apiHelper().post(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACT_PHOTO}`, formData)
}

function updateContactDetails(id, contactObject) {
    return apiHelper().put(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}/${id}`, contactObject)
}

function getContactDetails(id) {
    return apiHelper().get(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}/${id}`)
}

function deleteContactDetails(id) {
    return apiHelper().delete(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}/${id}`)
}

function updateContactStatus(id, isActive) {
    const requestBody = {
        is_active: isActive
    }

    return apiHelper().patch(`${APPCONFIG.APPCONFIG}/${APPCONFIG.CONTACTS}/${id}/${APPCONFIG.STATUS}`, requestBody)
}
