import {apiHelper} from '@/util'

export const luckySpinService = {
    addEvent,
    getEventListing,
    getEventById,
    updateEvent,
    addEventReward,
    UpdateEventReward,
    getEventReward,
    getEventRewardById,
    luckyHistory,
    rewardBalLogs
}

//API urls
const LUCKYSPIN = {
    EVENT: 'jevent',
    REWARD_SPOT: 'reward-spots',
    LOGS: 'logs',
    REWARDS: 'reward',
    BALANCE_LOGS: 'balance-logs'
}

function addEvent(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('type', filter.type);
    formData.append('start_date', filter.startDate);
    formData.append('end_date', filter.endDate);
    formData.append('status', 'ACTIVE');
    formData.append('currency', filter.currency);
    formData.append('html_text', JSON.stringify(filter.messages));
    formData.append('coin_required', filter.coin_required);
    formData.append('no_of_rewards', filter.no_of_rewards);
    if (typeof filter.main_image != "undefined" && filter.main_image != '') {
        formData.append('main_image', filter.main_image);
    }
    if (typeof filter.frame_image != "undefined" && filter.frame_image != '') {
        formData.append('frame_image', filter.frame_image);
    }
    if (typeof filter.start_button_image != "undefined" && filter.start_button_image != '') {
        formData.append('start_button_image', filter.start_button_image);
    }
    if (typeof filter.home_gif != "undefined" && filter.home_gif != '') {
        formData.append('home_gif', filter.home_gif);
    }

    for (let i = 0; i < 8; i++) {
        formData.append("rewardspots[" + i + "][reward_name]", filter.reward_details[i]['reward_name']);
        formData.append("rewardspots[" + i + "][is_fixed_amount]", filter.reward_details[i]['is_fixed_amount'] ? 1 : 0);
        formData.append("rewardspots[" + i + "][min_amount]", filter.reward_details[i]['min_amount']);
        formData.append("rewardspots[" + i + "][max_amount]", filter.reward_details[i]['max_amount']);
        formData.append("rewardspots[" + i + "][turnover_rate]", filter.reward_details[i]['turnover_rate']);
        formData.append("rewardspots[" + i + "][probability]", filter.reward_details[i]['probability']);
        formData.append("rewardspots[" + i + "][quantity]", filter.reward_details[i]['quantity']);
        formData.append("rewardspots[" + i + "][always_reset]", filter.reward_details[i]['always_reset'] ? 1 : 0);
        formData.append("rewardspots[" + i + "][default_quantity]", filter.reward_details[i]['default_quantity']);
        formData.append("rewardspots[" + i + "][is_default]", filter.reward_details[i]['is_default'] ? 1 : 0);
        formData.append("rewardspots[" + i + "][rewardspot_image]", filter.reward_details[i]['rewardspot_image']);
        formData.append("rewardspots[" + i + "][sort]", filter.reward_details[i]['sort']);
    }
    return apiHelper().post(`${LUCKYSPIN.EVENT}`, formData)
}

function luckyHistory(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date,
            end_date: filter.end_date,
            size: filter.pageSize,
            page: filter.pageNumber,
            event_name: filter.event_name,
            event_type: filter.event_type,
            tag_id: filter.tagGroup == -1 ? "" : filter.tagGroup,
            membercode: filter.memberCode,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${LUCKYSPIN.EVENT}/${LUCKYSPIN.LOGS}`, requestOptions)
}

function getEventListing(filter) {
    const requestOptions = {
        params: {
            name: filter.name,
            status: filter.status,
            size: filter.pageSize,
            page: filter.pageNumber,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${LUCKYSPIN.EVENT}`, requestOptions)
}

function getEventById(filter) {
    return apiHelper().get(`${LUCKYSPIN.EVENT}/${filter.id}`)
}

function updateEvent(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('name', filter.name);
    formData.append('type', filter.type);
    formData.append('start_date', filter.startDate);
    formData.append('end_date', filter.endDate);
    formData.append('status', filter.status);
    formData.append('html_text', filter.html_text);
    formData.append('coin_required', filter.coin_required);
    formData.append('no_of_rewards', filter.no_of_rewards);
    formData.append('currency', filter.currency);
    if (typeof filter.main_image != "undefined" && filter.main_image != '') {
        formData.append('main_image', filter.main_image);
    }
    if (typeof filter.frame_image != "undefined" && filter.frame_image != '') {
        formData.append('frame_image', filter.frame_image);
    }
    if (typeof filter.start_button_image != "undefined" && filter.start_button_image != '') {
        formData.append('start_button_image', filter.start_button_image);
    }
    if (typeof filter.home_gif != "undefined" && filter.home_gif != '') {
        formData.append('home_gif', filter.home_gif);
    }
    for (let i = 0; i < 8; i++) {
        formData.append("rewardspots[" + i + "][reward_name]", filter.reward_details[i]['event_name']);
        formData.append("rewardspots[" + i + "][is_fixed_amount]", filter.reward_details[i]['is_fixed_amount'] ? 1 : 0);
        formData.append("rewardspots[" + i + "][min_amount]", filter.reward_details[i]['min_amount']);
        formData.append("rewardspots[" + i + "][max_amount]", filter.reward_details[i]['max_amount']);
        formData.append("rewardspots[" + i + "][turnover_rate]", filter.reward_details[i]['turnover_rate']);
        formData.append("rewardspots[" + i + "][probability]", filter.reward_details[i]['probability']);
        formData.append("rewardspots[" + i + "][quantity]", filter.reward_details[i]['quantity']);
        formData.append("rewardspots[" + i + "][always_reset]", filter.reward_details[i]['always_reset'] ? 1 : 0);
        formData.append("rewardspots[" + i + "][default_quantity]", filter.reward_details[i]['default_quantity']);
        formData.append("rewardspots[" + i + "][is_default]", filter.reward_details[i]['is_default'] ? 1 : 0);
        if (typeof filter.reward_details[i]['rewardspot_image'] != "undefined" && filter.reward_details[i]['rewardspot_image'] != '') {
            formData.append("rewardspots[" + i + "][rewardspot_image]", filter.reward_details[i]['rewardspot_image']);
        }
        formData.append("rewardspots[" + i + "][sort]", filter.reward_details[i]['sort']);
    }
    return apiHelper().post(`${LUCKYSPIN.EVENT}/${filter.id}`, formData)
}

function addEventReward(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('reward_name', filter.reward_name);
    formData.append('is_fixed_amount', filter.is_fixed_amount);
    formData.append('min_amount', filter.min_amount);
    formData.append('max_amount', filter.max_amount);
    formData.append('turnover_rate', filter.turnover_rate);
    formData.append('probability', filter.probability);
    formData.append('quantity', filter.quantity);
    formData.append('always_reset', filter.always_reset);
    formData.append('default_quantity', filter.default_quantity);
    formData.append('is_default', filter.is_default);
    if (typeof filter.rewardspot_image != "undefined" && filter.rewardspot_image != '') {
        formData.append('rewardspot_image', filter.rewardspot_image);
    }
    return apiHelper().post(`${LUCKYSPIN.EVENT}/${filter.id}/${LUCKYSPIN.REWARD_SPOT}`, formData)
}

function UpdateEventReward(filter) {
    let formData = new FormData()
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    formData.append('reward_name', filter.reward_name);
    formData.append('is_fixed_amount', filter.is_fixed_amount);
    formData.append('min_amount', filter.min_amount);
    formData.append('max_amount', filter.max_amount);
    formData.append('turnover_rate', filter.turnover_rate);
    formData.append('probability', filter.probability);
    formData.append('quantity', filter.quantity);
    formData.append('always_reset', filter.always_reset);
    formData.append('default_quantity', filter.default_quantity);
    formData.append('is_default', filter.is_default);
    if (typeof filter.rewardspot_image != "undefined" && filter.rewardspot_image != '') {
        formData.append('rewardspot_image', filter.rewardspot_image);
    }
    return apiHelper().post(`${LUCKYSPIN.EVENT}/${filter.id}/${LUCKYSPIN.REWARD_SPOT}`, formData)
}

function rewardBalLogs(filter) {
    const requestOptions = {
        params: {
            start_date: filter.start_date,
            end_date: filter.end_date,
            size: filter.pageSize,
            page: filter.pageNumber,
            membercode: filter.memberCode,
            type: filter.type,
            currency: filter.currency
        }
    }
    return apiHelper().get(`${LUCKYSPIN.REWARDS}/${LUCKYSPIN.BALANCE_LOGS}`, requestOptions)
}

function getEventReward(filter) {
    const requestOptions = {
        params: {
            size: filter.size
        }
    }
    return apiHelper().get(`${LUCKYSPIN.EVENT}/${filter.id}/${LUCKYSPIN.REWARD_SPOT}`, requestOptions)
}

function getEventRewardById(filter) {
    return apiHelper().get(`${LUCKYSPIN.EVENT}/${filter.id}/${LUCKYSPIN.REWARD_SPOT}/${filter.spotId}`)
}




