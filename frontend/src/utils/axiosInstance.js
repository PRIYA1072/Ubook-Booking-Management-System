import axios from "axios";

export const baseURL = "https://ubook-backend.prathamdev.site/api/v1";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  let token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
