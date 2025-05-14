import { apiHelper } from '@/util'

export const moduleService = {
  getModuleList
}

//API urls
const MODULE = {
  MODULE: '/module'
}

function getModuleList() {
  return apiHelper().get(`${MODULE.MODULE}`)
}
