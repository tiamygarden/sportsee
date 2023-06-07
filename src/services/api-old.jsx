import axios from "axios"

const API_BASE_URL = "http://localhost:4200"

export const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/${userId}`)
        return response.data
    } catch (error) {
        // Gérer les erreurs
        console.error(
            "Erreur lors de la récupération des données utilisateur",
            error
        )
        throw error
    }
}

export const getNutritionData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/${userId}`)
        return response.data.data.keyData
    } catch (error) {
        throw new Error(
            `Erreur lors de la récupération des données nutricards utilisateur : ${error.message}`
        )
    }
}

export const getUserActivity = (userId) => {
    return axios.get(`${API_BASE_URL}/user/${userId}/activity`)
}

export const getUserAverageSessions = (userId) => {
    return axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`)
}

export const getUserPerformance = (userId) => {
    return axios.get(`${API_BASE_URL}/user/${userId}/performance`)
}

const apiOld = {
    getUser,
    getNutritionData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
}

export default apiOld
