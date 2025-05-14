import {apiHelper} from '@/util'
import {SHARED} from "@/constants/constants";

export const eventService = {
    getEventList,
    getEventModeList,
    patchEventStatus,
    getEventDetail,
    createEvent,
    updateEvent,
    createCoinEvent,
    updateCoinEvent,
    getKetupatEvent,
    updateKetupatEvent,
    createKetupatEvent
}

const EVENT = {
    EVENT: '/dailyreward',
    MODE: '/mode',
    STATUS: '/status',
    GRAB_EVENT: '/grabreward',
}

function updateKetupatEvent(filter) {
    let formData = new FormData()
    let arr = []
    filter.prize_pool.forEach(v => {
        arr.push(v);
    })

    let jsonParse = JSON.stringify(arr);
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('prize_pool', jsonParse)
    formData.append('timer', filter.timer)
    if (typeof filter.icon_one != "undefined" && filter.icon_one != '') {
        formData.append('icon_one', filter.icon_one);
    }
    if (typeof filter.icon_two != "undefined" && filter.icon_two != '') {
        formData.append('icon_two', filter.icon_two);
    }
    if (typeof filter.event_background != "undefined" && filter.event_background != '') {
        formData.append('event_background', filter.event_background);
    }
    if (typeof filter.event_title != "undefined" && filter.event_title != '') {
        formData.append('event_title', filter.event_title);
    }
    formData.append('status', filter.status == true ? 1 : 0);

    return apiHelper().post(`${EVENT.GRAB_EVENT}/${filter.id}`, formData)
}

function updateCoinEvent(filter) {
    let formData = new FormData()
    let arr = []
    let rewardArr = []
    filter.prize_probability.forEach(v => {
        arr.push(v);
    })

    filter.daily_coins_given.forEach(v => {
        rewardArr.push(v);
    })

    let jsonParse = JSON.stringify(arr);
    let json2Parse = JSON.stringify(rewardArr);
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('prize_probability', jsonParse)
    formData.append('daily_coins_given', json2Parse)
    formData.append('allow_recheck_in', filter.allow_recheck_in);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)
    formData.append('currency', filter.currency)

    formData.append('status', filter.status == true ? 1 : 0);

    return apiHelper().post(`${EVENT.EVENT}/${filter.id}`, formData)
}

function createCoinEvent(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('prize_probability', JSON.stringify(filter.prize_probability))
    formData.append('daily_coins_given', JSON.stringify(filter.coins_given))
    formData.append('allow_recheck_in', filter.allow_recheck_in);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)

    formData.append('status', filter.status == false ? 0 : 1);

    return apiHelper().post(`${EVENT.EVENT}`, formData)
}

function createKetupatEvent(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('prize_pool', JSON.stringify(filter.prize_pool))
    if (typeof filter.icon_one != "undefined" && filter.icon_one != '') {
        formData.append('icon_one', filter.icon_one);
    }
    if (typeof filter.icon_two != "undefined" && filter.icon_two != '') {
        formData.append('icon_two', filter.icon_two);
    }

    return apiHelper().post(`${EVENT.EVENT}`, formData)
}


function getKetupatEvent(filter) {
    const requestOptions = {
        params: {
            grab_name: typeof filter.name == "undefined" && filter.name == null ? '' : filter.name,
            start_date: filter.start_date == null ? '' : filter.start_date,
            end_date: filter.end_date == null ? '' : filter.end_date,
            page: filter.pageNumber,
            size: filter.pageSize == null ? 10 : filter.pageSize,
            status: filter.isActive,
            id: filter.id
        }
    }
    return apiHelper().get(`${EVENT.GRAB_EVENT}`, requestOptions)
}

function getEventList(filter) {
    const requestOptions = {
        params: {
            name: typeof filter.name == "undefined" && filter.name == null ? '' : filter.name,
            start_date: filter.startTime == null ? '' : filter.startTime,
            end_date: filter.endTime == null ? '' : filter.endTime,
            page: filter.pageNumber,
            size: filter.pageSize == null ? 10 : filter.pageSize,
            status: filter.isActive,
            id: filter.id,
            currency:SHARED.DEFAULT_CURRENCY
        }
    }
    return apiHelper().get(`${EVENT.EVENT}`, requestOptions)
}

function getEventModeList() {
    return apiHelper().get(`${EVENT.EVENT}${EVENT.MODE}`)
}

function patchEventStatus(id, status) {
    const requestOptions = {
        is_active: status
    }
    return apiHelper().patch(`${EVENT.EVENT}/${id}${EVENT.STATUS}`, requestOptions)
}

function getEventDetail(id) {
    return apiHelper().get(`${EVENT.EVENT}/${id}`)
}

function createEvent(eventObj) {
    const requestBody = {
        event_mode: eventObj.mode,
        bonus_id: eventObj.bonusId,
        event_name: eventObj.name,
        start_date: eventObj.startDate,
        end_date: eventObj.endDate,
        applicant_amount: eventObj.applicant_amount,
        localization: eventObj.formatLocalization,
        duration: eventObj.duration,
        is_auto_apply: eventObj.isAutoApply,
        month: eventObj.month,
        hour: eventObj.hour,
        date: eventObj.date,
        minute: eventObj.minute,
        interval_minute: eventObj.interval_minute,
        interval_hour: eventObj.interval_hour,
        interval_day: eventObj.interval_day,
        interval_month: eventObj.interval_month
    }

    return apiHelper().post(`${EVENT.EVENT}`, requestBody)
}

function updateEvent(eventObj) {
    let requestBody = {}
    if (eventObj.type == 1) {
        requestBody = {
            event_name: eventObj.name,
            event_mode: eventObj.mode,
            bonus_id: eventObj.bonusId,
            start_date: eventObj.startDate,
            end_date: eventObj.endDate,
            localization: eventObj.formatLocalization,
            duration: eventObj.duration,
            is_auto_apply: eventObj.isAutoApply,
            interval_minute: eventObj.interval_minute,
            interval_hour: eventObj.interval_hour,
            interval_day: eventObj.interval_day,
            interval_month: eventObj.interval_month,
            applicant_amount: eventObj.applicant_amount
        }
    } else {
        requestBody = {
            event_name: eventObj.name,
            event_mode: eventObj.mode,
            bonus_id: eventObj.bonusId,
            start_date: eventObj.startDate,
            end_date: eventObj.endDate,
            localization: eventObj.formatLocalization,
            duration: eventObj.duration,
            is_auto_apply: eventObj.isAutoApply,
            month: eventObj.month,
            hour: eventObj.hour,
            date: eventObj.date,
            minute: eventObj.minute,
            applicant_amount: eventObj.applicant_amount
        }
    }

    return apiHelper().patch(`${EVENT.EVENT}/${eventObj.id}`, requestBody)
}
