import axios from "axios"
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "../data/dataMocked"

const isMocked = process.env.REACT_APP_MOCKED_DATA

//show if data mocked is true or false
console.log("Mocked =>", isMocked)

const api = axios.create({
    baseURL: "http://localhost:3000/user",
})

/**
 * @name getUserInfo
 *@description: This function is used to get the user details from the database. It makes request for a user with a given ID.
 * @param {number} id
 * @returns {Promise<Object>}
 */

export const getUserInfo = async (id) => {
    try {
        if (isMocked === "true") {
            const response = {
                data: USER_MAIN_DATA.filter((e) => e.id === +id)[0],
            }

            return response
        } else {
            const response = await api.get(`/${id}`)
            return response.data
        }
    } catch (error) {
        if (error.code === "ERR_NETWORK") {
            return null
        }
    }
}

/**
 *@description: This function is used to get the user activity from the database.It makes request for a user with a given ID.
 * @param {number} id
 * @returns {Promise<Object>}
 */
export const getActivities = async (id) => {
    try {
        if (isMocked === "true") {
            const response = {
                data: USER_ACTIVITY.filter((e) => e.userId === +id)[0],
            }

            return response
        } else {
            const response = await api.get(`/${id}/activity`)

            return response.data
        }
    } catch (error) {
        if (error.code === "ERR_NETWORK") {
            return null
        }
    }
}

/**
 *@description: This function is used to get the user session information from the database. It makes request for a user with a given ID.
 * @param {number} id
 * @returns {Promise<Object>}
 */
export const getAverageSessions = async (id) => {
    try {
        if (isMocked === "true") {
            const response = {
                data: USER_AVERAGE_SESSIONS.filter((e) => e.userId === +id)[0],
            }

            return response
        } else {
            const response = await api.get(`/${id}/average-sessions`)

            return response.data
        }
    } catch (error) {
        if (error.code === "ERR_NETWORK") {
            return null
        }
    }
}

/**
 *@description: This function is used to get the user performance information from the database.It makes request for a user with a given ID.
 * @param {number} id
 * @returns {Promise<Object>}
 *
 */
export const getPerformances = async (id) => {
    try {
        if (isMocked === "true") {
            const response = {
                data: USER_PERFORMANCE.filter((e) => e.userId === +id)[0],
            }

            return response
        } else {
            const response = await api.get(`/${id}/performance`)

            return response.data
        }
    } catch (error) {
        if (error.code === "ERR_NETWORK") {
            return null
        }
    }
}
