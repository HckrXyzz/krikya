import { apiHelper } from '@/util'

export const troubleshootService = {
  getTroubleshootLogs
}

//API urls
const TROUBLESHOOT = {
  TROUBLESHOOT: '/troubleshoot'
}

function getTroubleshootLogs(filter) {
  const requestOptions = {
    params: {
      page: filter.pageNumber,
      size: filter.pageSize,
      member_id: filter.memberId,
      member_code: filter.memberCode,
      wallet_code: filter.walletCode,
      action: filter.action,
      start_date: filter.startDate == null ? '' : filter.startDate,
      end_date: filter.endDate == null ? '' : filter.endDate
    }
  }

  return apiHelper().get(`${TROUBLESHOOT.TROUBLESHOOT}`, requestOptions)
}
