import api from "./api"

export async function getMainDataForUserId(id) {
    const { data } = await api(`user/${id}`)

    if (!data) {
        return null
    }

    data.score = data.todayScore ? data.todayScore : data.score

    return data
}

export async function getActivitiesForUserId(id) {
    const { data } = await api(`user/${id}/activity`)

    if (!data) {
        return null
    }

    return data.sessions
}

export async function getAverageSessionsForUserId(id) {
    const { data } = await api(`user/${id}/average-sessions`)

    if (!data) {
        return null
    }

    return data.sessions
}

export async function getPerformanceForUserId(id) {
    const { data } = await api(`user/${id}/performance`)

    if (!data) {
        return null
    }

    return data.data
}
