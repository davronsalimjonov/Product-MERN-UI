import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `${token}`;
        }

        config.headers = {
            ...config.headers,
            Authorization: token ? `${token.replace(/"/g, '')}` : undefined,
            "Content-Type": config.headers["Content-Type"] || "application/json",
        };

        return config;
    },
    (error) => {
        console.error("Error in interceptor:", error);
        return Promise.reject(error);
    }
);


export default api;