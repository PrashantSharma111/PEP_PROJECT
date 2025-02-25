import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
