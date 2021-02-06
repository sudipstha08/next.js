/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from "axios";

// axios.defaults.headers.common["X-Auth-Token"] =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const API = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.5",
    "Access-Control-Allow-Origin": "*",
  },
});

export const SWAPI_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SWAPI_URL,
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(
      `${config?.method?.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`,
    );
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
