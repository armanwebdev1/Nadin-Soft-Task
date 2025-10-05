import axios from "axios";
import { OPEN_WEATHER_BASE_URL } from "../utils/constants";

export const http = axios.create({
  baseURL: OPEN_WEATHER_BASE_URL,
  timeout: 10000,
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);
