import {apiHelper} from '@/util'

export const cardManiaService = {
    getEventList,
    getEventDetail,
    createCardManiaEvent,
    updateCardManiaEvent,
    cardManiaHistory,
}

const EVENT = {
    EVENT: '/cardManiaRewards',
    LOGS: 'logs',
}

function updateCardManiaEvent(filter){
    let formData = new FormData()
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('currency', filter.currency);
    formData.append('is_recurring_chance', filter.max_chances_per_day > 1 ? 1 : 0);
    formData.append('max_chances_per_day', filter.max_chances_per_day);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)
    formData.append('status', filter.status == true? 1 :0);

    for (let i = 0; i < 9; i++) {
        formData.append("prize_probability[" + i + "][display_name]", filter.prize_probability[i]['reward_name']);
        formData.append("prize_probability[" + i + "][probability]", filter.prize_probability[i]['probability']);
        formData.append("prize_probability[" + i + "][quantity]", filter.prize_probability[i]['quantity']);
        formData.append("prize_probability[" + i + "][number]", filter.prize_probability[i]['number']);
        if (typeof filter.prize_probability[i]['selected_image_url'] != "undefined" && filter.prize_probability[i]['selected_image_url'] != '') {
            formData.append("prize_probability[" + i + "][selected_img]", filter.prize_probability[i]['selected_image_url']);
        }
        if (typeof filter.prize_probability[i]['unselected_image_url'] != "undefined" && filter.prize_probability[i]['unselected_image_url'] != '') {
            formData.append("prize_probability[" + i + "][unselected_img]", filter.prize_probability[i]['unselected_image_url']);
        }
        if (typeof filter.prize_probability[i]['notice_image_url'] != "undefined" && filter.prize_probability[i]['notice_image_url'] != '') {
            formData.append("prize_probability[" + i + "][notice_img]", filter.prize_probability[i]['notice_image_url']);
        }
    }
    return apiHelper().post(`${EVENT.EVENT}/${filter.id}`, formData)
}

function createCardManiaEvent(filter) {
    let formData = new FormData()
    formData.append('name', filter.name);
    formData.append('description', filter.description);
    formData.append('start_date', filter.start_date);
    formData.append('end_date', filter.end_date);
    formData.append('currency', filter.currency);
    formData.append('is_recurring_chance', filter.max_chances_per_day > 1 ? 1 : 0);
    formData.append('max_chances_per_day', filter.max_chances_per_day);
    formData.append('is_accumulated_deposit', filter.is_accumulated_deposit);
    formData.append('min_deposit', filter.min_deposit)
    formData.append('status', filter.status == true? 1 :0);

    for (let i = 0; i < 9; i++) {
        formData.append("prize_probability[" + i + "][display_name]", filter.prize_probability[i]['reward_name']);
        formData.append("prize_probability[" + i + "][probability]", filter.prize_probability[i]['probability']);
        formData.append("prize_probability[" + i + "][quantity]", filter.prize_probability[i]['quantity']);
        formData.append("prize_probability[" + i + "][number]", filter.prize_probability[i]['number']);
        if (typeof filter.prize_probability[i]['selected_image_url'] != "undefined" && filter.prize_probability[i]['selected_image_url'] != '') {
            formData.append("prize_probability[" + i + "][selected_img]", filter.prize_probability[i]['selected_image_url']);
        }
        if (typeof filter.prize_probability[i]['unselected_image_url'] != "undefined" && filter.prize_probability[i]['unselected_image_url'] != '') {
            formData.append("prize_probability[" + i + "][unselected_img]", filter.prize_probability[i]['unselected_image_url']);
        }
        if (typeof filter.prize_probability[i]['notice_image_url'] != "undefined" && filter.prize_probability[i]['notice_image_url'] != '') {
            formData.append("prize_probability[" + i + "][notice_img]", filter.prize_probability[i]['notice_image_url']);
        }
    }

    return apiHelper().post(`${EVENT.EVENT}`, formData)
}

function getEventList(filter) {
    const requestOptions = {
        params: {
            id: filter.id,
            name: typeof filter.name == "undefined" && filter.name == null ? '' : filter.name,
            start_time: filter.startTime == null ? '' : filter.startTime,
            end_time: filter.endTime == null ? '' : filter.endTime,
            page: filter.pageNumber,
            size: filter.pageSize == null ? 10 : filter.pageSize,
            status: filter.isActive,
            currency:filter.currency
        }
    }
    return apiHelper().get(`${EVENT.EVENT}`, requestOptions)
}

function cardManiaHistory(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date,
            end_date: filter.end_date,
            size: filter.pageSize,
            page: filter.pageNumber,
            membercode: filter.memberCode,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${EVENT.EVENT}/${EVENT.LOGS}`, requestOptions)
}

function getEventDetail(id) {
    return apiHelper().get(`${EVENT.EVENT}/${id}`)
}
