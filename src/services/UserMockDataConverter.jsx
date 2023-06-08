import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_PERFORMANCE,
    USER_AVERAGE_SESSIONS,
} from "../data/dataMocked"

export function mainDataConverter(userID) {
    return {
        data: USER_MAIN_DATA.find((user) => user.id === parseInt(userID)),
    }
}

export function activityConverter(userID) {
    return {
        data: USER_ACTIVITY.find((user) => user.userId === parseInt(userID)),
    }
}

export function performanceConverter(userID) {
    return {
        data: USER_PERFORMANCE.find((user) => user.userId === parseInt(userID)),
    }
}

export function avgSessionsConverter(userID) {
    return {
        data: USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(userID)
        ),
    }
}
