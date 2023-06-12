import axios from "axios"

export const login = (data) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_URL}login`, data)
}

export const register = (data) => {
    return axios.post(`${import.meta.env.VITE_BACKEND_URL}register`, data)
}