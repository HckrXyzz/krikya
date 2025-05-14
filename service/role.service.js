import { apiHelper } from '@/util'

export const roleService = {
  getRoleDdlList,
  getRoleList,
  getRole,
  createRole,
  updateRole,
  updateRoleStatus
}

//API urls
const ROLE = {
  ROLE: '/role',
  LOOKUP: 'lookup',
  STATUS: 'status'
}

function getRoleDdlList() {
  return apiHelper().get(`${ROLE.ROLE}/${ROLE.LOOKUP}`)
}

function getRoleList(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      name: filter.roleName,
      is_active: filter.status
    }
  }

  return apiHelper().get(`${ROLE.ROLE}`, requestOptions)
}

function getRole(id) {
  return apiHelper().get(`${ROLE.ROLE}/${id}`)
}

function createRole(data) {
  const requestBody = {
    name: data.name,
    permissions: data.permissions
  }

  return apiHelper().post(`${ROLE.ROLE}`, requestBody)
}

function updateRole(data) {
  const requestBody = {
    permissions: data.permissions
  }

  return apiHelper().post(`${ROLE.ROLE}/${data.id}`, requestBody)
}

function updateRoleStatus(data) {
  const requestBody = {
    status: data.status
  }

  return apiHelper().patch(`${ROLE.ROLE}/${data.id}/${ROLE.STATUS}`, requestBody)
}
