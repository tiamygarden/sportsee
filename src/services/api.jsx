// const USE_MOCK = false
const API_BASE_URL = "http://localhost:4200"

const api = async (url) => {
    const response = await fetch(`${API_BASE_URL}/${url}`)
    return await response.json()
}

export default api
