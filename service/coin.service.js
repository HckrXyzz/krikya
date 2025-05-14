import {apiHelper} from '@/util'

export const coinService = {
    getEventList,
    getEventModeList,
    patchEventStatus,
    getEventDetail,
    createEvent,
    updateEvent,
    createCoinEvent,
    updateCoinEvent
}

const EVENT = {
    EVENT: '/grabRewards',
    MODE: '/mode',
    STATUS: '/status'
}

function updateCoinEvent(filter){
    let formData = new FormData()
    let arr = []
    filter.prize_probability.forEach(v=>{
        arr.push(v);
    })

    let jsonParse = JSON.stringify(arr);
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('currency', filter.currency);
    formData.append('prize_probability', jsonParse)
    if (typeof filter.icon_one != "undefined" && filter.icon_one != '') {
        formData.append('icon_one', filter.icon_one);
    }
    if (typeof filter.icon_two != "undefined" && filter.icon_two != '') {
        formData.append('icon_two', filter.icon_two);
    }
    if (typeof filter.title_img != "undefined" && filter.title_img != '') {
        formData.append('title_img', filter.title_img);
    }
    if (typeof filter.home_page_gif != "undefined" && filter.home_page_gif != '') {
        formData.append('home_page_gif', filter.home_page_gif);
    }
    formData.append('is_recurring_chance', filter.max_chances_per_day_per_member > 1 ? 1 : 0);
    formData.append('max_chances_per_day_per_member', filter.max_chances_per_day_per_member);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)

    formData.append('status', filter.status == true? 1 :0);

    return apiHelper().post(`${EVENT.EVENT}/${filter.id}`, formData)
}

function createCoinEvent(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('currency', filter.currency);
    formData.append('end_date', filter.end_date);
    formData.append('prize_probability', JSON.stringify(filter.prize_probability))
    if (typeof filter.icon_one != "undefined" && filter.icon_one != '') {
        formData.append('icon_one', filter.icon_one);
    }
    if (typeof filter.icon_two != "undefined" && filter.icon_two != '') {
        formData.append('icon_two', filter.icon_two);
    }
    if (typeof filter.title_img != "undefined" && filter.title_img != '') {
        formData.append('title_img', filter.title_img);
    }
    if (typeof filter.home_page_gif != "undefined" && filter.home_page_gif != '') {
        formData.append('home_page_gif', filter.home_page_gif);
    }
    formData.append('is_recurring_chance', filter.max_chances_per_day_per_member > 1 ? 1 : 0);
    formData.append('max_chances_per_day_per_member', filter.max_chances_per_day_per_member);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)

    formData.append('status', filter.status == false ? 0 : 1);

    return apiHelper().post(`${EVENT.EVENT}`, formData)
}

function getEventList(filter) {
    const requestOptions = {
        params: {
            grab_name: typeof filter.name == "undefined" && filter.name == null ? '' : filter.name,
            start_time: filter.startTime == null ? '' : filter.startTime,
            end_time: filter.endTime == null ? '' : filter.endTime,
            page: filter.pageNumber,
            size: filter.pageSize == null ? 10 : filter.pageSize,
            status: filter.isActive,
            id: filter.id,
            currency:filter.currency
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
