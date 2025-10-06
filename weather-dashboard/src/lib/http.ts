import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 10000,
});

http.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);
