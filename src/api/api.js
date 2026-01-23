import axios from "axios";

const api = axios.create({
  baseURL: "https://rest.coincap.io/v3",
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    import.meta.env.VITE_COINCAP_API_KEY
  }`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default api;
