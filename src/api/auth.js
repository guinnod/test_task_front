import axios from "@/services/axios";
export const login = (data) => {
    return axios.post('login', data)
}

export const register = (data) => {
    return axios.post('register', data)
}