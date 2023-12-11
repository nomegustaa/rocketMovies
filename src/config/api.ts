import axios from "axios";
import { API } from "./env";

export const api = axios.create({
  baseURL: API,
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("SESSION_ID");

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
