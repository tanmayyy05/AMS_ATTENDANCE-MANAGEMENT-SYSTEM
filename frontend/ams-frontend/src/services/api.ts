import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // backend later
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (token later)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
