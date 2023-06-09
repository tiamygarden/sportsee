import api from "./api"

export async function getMainDataForUserId(id) {
    const { data } = await api(`user/${id}`)

    data.score = data.todayScore ? data.todayScore : data.score

    return data
}

export async function getActivitiesForUserId(id) {
    const { data } = await api(`user/${id}/activity`)

    return data.sessions
}

export async function getAverageSessionsForUserId(id) {
    const { data } = await api(`user/${id}/average-sessions`)

    return data.sessions
}

export async function getPerformanceForUserId(id) {
    const { data } = await api(`user/${id}/performance`)

    return data.data
}
