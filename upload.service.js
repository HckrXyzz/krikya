import { apiHelper } from '@/util'
import { SHARED, API, SESSION } from '@/constants/constants'
import axios from 'axios'

export const uploadService = {
  uploadImage,
  uploadCMSImage,
  bannerImageUpload
}

//API urls
const UPLOAD = {
  DOMAIN: API.MEDIA_DOMAIN,
  URL: API.MEDIA_URL,
  CMS_URL: API.CMS_URL,
  UPLOADER: '/uploader',
  IMAGE: 'image',
  UPLOAD: 'upload',
  CMS: 'cms',
  UPLOAD_SERVICE : 'image/uploadService'
}

function bannerImageUpload(data) {
  const requestBody = data
  return apiHelper(API.CMS_URL).post(`${UPLOAD.IMAGE}/${UPLOAD.UPLOAD}`, requestBody)
}


async function uploadImage(file) {
  let imageUrl = ''
  let uploadHeader = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  let formData = new FormData()
  formData.append('brand_code', SHARED.BRAND_CODE)
  formData.append('image', file)

  let res = await axios.post(`${UPLOAD.URL}${UPLOAD.UPLOADER}/${UPLOAD.IMAGE}`, formData, uploadHeader)

  if (res.data.success) {
    imageUrl = res.data.data.replace('{0}', `${UPLOAD.DOMAIN}`)
  }

  localStorage.setItem(SESSION.LAST_ACTIVITY_TIME, JSON.stringify(new Date().getTime()))
  return imageUrl
}

async function uploadCMSImage(file) {
  let imageUrl = ''
  let uploadHeader = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  let formData = new FormData()
  formData.append('image', file)

  // let res = await axios.post(`${UPLOAD.CMS_URL}${UPLOAD.UPLOAD_SERVICE}`, formData, uploadHeader)
  //
  // if (res.data.success) {
  //   res.data.imageurl = res.data.imageurl
  // }
  let apiInstance = apiHelper(UPLOAD.CMS_URL)

  let res = await apiInstance.post(UPLOAD.UPLOAD_SERVICE, formData, uploadHeader)

  if (res.data.success) {
    let imageurl = res.data.imageurl
  }

  localStorage.setItem(SESSION.LAST_ACTIVITY_TIME, JSON.stringify(new Date().getTime()))
  return res
}
