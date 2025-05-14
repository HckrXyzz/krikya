import { apiHelper } from '@/util'
import { SHARED } from '@/constants/constants'

export const VipTierService = {
  getVipMemberGroup,
  createVipMemberGroup,
  updateVipMemberGroup,
  vipMemberGroupDetail,
  getVipUpgradeProgressList,
  getVipDowngradeProgressList,
  updateVipLevel,
  getVipProgressLog,
  getAllVipMemberGroup,
  getVipUpgradeBonusLog,
  getVipAdjustmentList,
  getVipAdjustmentDetail,
  createVipAdjustment,
  updateAdjustmentStatus
}

const VIP_MEMBER_GROUP = {
  VIP_MEMBER_GROUP: 'vipMemberGroup',
  CREATE: 'create',
  UPDATE: 'update',
  LIST: 'list',
  DETAIL: 'detail',
  PROGRESS_UPGRADE: 'progress/upgrade/list',
  PROGRESS_DOWNGRADE: 'progress/downgrade/list',
  UPDATE_LEVEL: 'update/level',
  PROGRESS_LOG: 'progress/log/list',
  VIP_ALL_MEMBER_GROUP: 'list/all',
  UPGRADE_BONUS_LOG: 'upgrade/bonus/log',
  ADJUSTMENT_LIST: 'adjustment/list',
  ADJUSTMENT: 'adjustment',
  STATUS: 'status',
  ADJUSTMENT_UPGRADE_BONUS: 'adjustment/upgradeBonus/config',
  ADJUSTMENT_UPGRADE_BONUS_DETAIL: 'adjustment/upgradeBonus/config/detail'
}

function getVipMemberGroup(filter) {
  const requestOptions = {
    params: {
      level_sequence: filter.level_sequence,
      currency: SHARED.DEFAULT_CURRENCY,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.LIST}`, requestOptions)
}

function getAllVipMemberGroup() {
  const requestOptions = {
    params: {
      currency: SHARED.DEFAULT_CURRENCY
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.VIP_ALL_MEMBER_GROUP}`, requestOptions)
}

function createVipMemberGroup(vipObj) {
  const requestOptions = {
    is_downgrade_remain_reset: vipObj.is_downgrade_remain_reset,
    is_auto_upgrade: vipObj.is_auto_upgrade,
    vip_level: vipObj.vip_level,
    default_level: vipObj.default_level,
    image: vipObj.image,
    name: vipObj.name,
    level_status: vipObj.level_status,
    downgrade_required: vipObj.downgrade_required,
    downgrade_period: vipObj.downgrade_period,
    monthly_reset_required: vipObj.monthly_reset_required,
    upgrade_deposit: vipObj.upgrade_deposit,
    upgrade_turnover: vipObj.upgrade_turnover,
    downgrade_deposit: vipObj.downgrade_deposit,
    downgrade_turnover: vipObj.downgrade_turnover,
    upgrade_bonus: vipObj.upgrade_bonus,
    //monthly_bonus: vipObj.monthly_bonus,
    monthly_lose_rebate: vipObj.monthly_lose_rebate,
    currency: SHARED.DEFAULT_CURRENCY,
    is_upgrade_bonus_turnover: vipObj.is_upgrade_bonus_turnover,
    upgrade_bonus_turnover: vipObj.upgrade_bonus_turnover,
    fk_payment_member_group_id: vipObj.fk_payment_member_group_id,
    upgrade_level_condition: vipObj.upgrade_level_condition,
    downgrade_level_condition: vipObj.downgrade_level_condition
  }
  return apiHelper().post(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.CREATE}`, requestOptions)
}

function updateVipMemberGroup(vipObj) {
  const requestOptions = {
    is_downgrade_remain_reset: vipObj.is_downgrade_remain_reset,
    is_auto_upgrade: vipObj.is_auto_upgrade,
    vip_level: vipObj.vip_level,
    default_level: vipObj.default_level,
    image: vipObj.image,
    name: vipObj.name,
    level_status: vipObj.level_status,
    downgrade_required: vipObj.downgrade_required,
    downgrade_period: vipObj.downgrade_period,
    monthly_reset_required: vipObj.monthly_reset_required,
    upgrade_deposit: vipObj.upgrade_deposit,
    upgrade_turnover: vipObj.upgrade_turnover,
    downgrade_deposit: vipObj.downgrade_deposit,
    downgrade_turnover: vipObj.downgrade_turnover,
    upgrade_bonus: vipObj.upgrade_bonus,
    //monthly_bonus: vipObj.monthly_bonus,
    monthly_lose_rebate: vipObj.monthly_lose_rebate,
    currency: SHARED.DEFAULT_CURRENCY,
    is_upgrade_bonus_turnover: vipObj.is_upgrade_bonus_turnover,
    upgrade_bonus_turnover: vipObj.upgrade_bonus_turnover,
    fk_payment_member_group_id: vipObj.fk_payment_member_group_id,
    upgrade_level_condition: vipObj.upgrade_level_condition,
    downgrade_level_condition: vipObj.downgrade_level_condition,
    recurring_daily_bonus: vipObj.recurring_daily_bonus,
    recurring_weekly_bonus: vipObj.recurring_weekly_bonus,
    recurring_monthly_bonus: vipObj.recurring_monthly_bonus,
    recurring_daily_bonus_monthly_quota: vipObj.recurring_daily_bonus_monthly_quota,
  }
  return apiHelper().put(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${vipObj.level_sequence}/${VIP_MEMBER_GROUP.UPDATE}`, requestOptions)
}

function vipMemberGroupDetail(vipObj) {
  const requestOptions = {
    params: {
      level_sequence: vipObj,
      currency: SHARED.DEFAULT_CURRENCY
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.DETAIL}`, requestOptions)
}

function getVipUpgradeProgressList(filter) {
  const requestOptions = {
    params: {
      membercode: filter.membercode,
      level: filter.level,
      currency: SHARED.DEFAULT_CURRENCY,
      progress_status: filter.progress_status,
      start_time: filter.start_time,
      end_time: filter.end_time,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.PROGRESS_UPGRADE}`, requestOptions)
}

function getVipDowngradeProgressList(filter) {
  const requestOptions = {
    params: {
      membercode: filter.membercode,
      level: filter.level,
      served_status: filter.served_status,
      downgrade_status: filter.downgrade_status,
      currency: SHARED.DEFAULT_CURRENCY,
      served_start_time: filter.served_start_time,
      served_end_time: filter.served_end_time,
      downgrade_start_time: filter.downgrade_start_time,
      downgrade_end_time: filter.downgrade_end_time,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.PROGRESS_DOWNGRADE}`, requestOptions)
}

function getVipProgressLog(filter) {
  const requestOptions = {
    params: {
      membercode: filter.membercode,
      type: filter.type,
      currency: SHARED.DEFAULT_CURRENCY,
      start_time: filter.start_time,
      end_time: filter.end_time,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.PROGRESS_LOG}`, requestOptions)
}

function updateVipLevel(vipObj) {
  const requestOptions = {
    membercode: vipObj.membercode,
    currency: SHARED.DEFAULT_CURRENCY,
    progress_status: vipObj.progress_status
  }
  return apiHelper().post(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.UPDATE_LEVEL}`, requestOptions)
}

function getVipUpgradeBonusLog(filter) {
  const requestOptions = {
    params: {
      membercode: filter.membercode,
      currency: SHARED.DEFAULT_CURRENCY,
      start_time: filter.start_time,
      end_time: filter.end_time,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.UPGRADE_BONUS_LOG}`, requestOptions)
}

function getVipAdjustmentList(filter) {
  const requestOptions = {
    params: {
      membercode: filter.membercode,
      status: filter.status,
      currency: SHARED.DEFAULT_CURRENCY,
      start_time: filter.start_time,
      end_time: filter.end_time,
      size: filter.pageSize,
      page: filter.pageNumber
    }
  }
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.ADJUSTMENT_LIST}`, requestOptions)
}

function getVipAdjustmentDetail(id) {
  return apiHelper().get(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.ADJUSTMENT}/${id}/${VIP_MEMBER_GROUP.DETAIL}`)
}

function createVipAdjustment(vipObj) {
  const requestOptions = {
    membercode: vipObj.membercode,
    currency: SHARED.DEFAULT_CURRENCY,
    level: vipObj.level,
    apply_remark: vipObj.apply_remark,
    is_upgrade_bonus: vipObj.is_upgrade_bonus
  }
  return apiHelper().post(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.ADJUSTMENT}`, requestOptions)
}

function updateAdjustmentStatus(vipObj) {
  const requestOptions = {
    status: vipObj.status,
    remark: vipObj.remark
  }
  return apiHelper().patch(`${VIP_MEMBER_GROUP.VIP_MEMBER_GROUP}/${VIP_MEMBER_GROUP.ADJUSTMENT}/${vipObj.id}/${VIP_MEMBER_GROUP.STATUS}`, requestOptions)
}

