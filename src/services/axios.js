import axios from "axios";

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

axiosApi.interceptors.request.use(
    function (config) {
        const access = localStorage.getItem("access");
        if (access) {
            config.headers["Authorization"] = `Bearer ${access}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

export default axiosApi;