import {
    activityConverter,
    avgSessionsConverter,
    mainDataConverter,
    performanceConverter,
} from "./UserMockDataConverter"

const API_BASE_URL = "http://localhost:4200"
const USE_MOCK = true

const mockResolver = new Map()
mockResolver.set("USER_MAIN_DATA", "user/([0-9]+)")
mockResolver.set("USER_ACTIVITY", "user/([0-9]+)/activity")
mockResolver.set("USER_AVERAGE_SESSIONS", "user/([0-9]+)/average-sessions")
mockResolver.set("USER_PERFORMANCE", "user/([0-9]+)/performance")

const api = async (url) => {
    if (USE_MOCK) {
        let res = false
        mockResolver.forEach((value, key) => {
            if (new RegExp(value).test(url)) {
                res = useMock(key, url.match(value)[1])
            }
        })
        if (res) return res

        console.error(`No mock for : ${url}`)
    }

    const response = await fetch(`${API_BASE_URL}/${url}`)
    return await response.json()
}

function useMock(name, userID) {
    switch (name) {
        case "USER_MAIN_DATA":
            return mainDataConverter(userID)
        case "USER_ACTIVITY":
            return activityConverter(userID)
        case "USER_PERFORMANCE":
            return performanceConverter(userID)
        case "USER_AVERAGE_SESSIONS":
            return avgSessionsConverter(userID)
        default:
            return null
    }
}

export default api
