import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://shopmate-five.vercel.app/api/v1",
  withCredentials: true,
});
