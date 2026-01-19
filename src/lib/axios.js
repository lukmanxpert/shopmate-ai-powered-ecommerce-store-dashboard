import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://shopmate-five.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://shopmate-ai-powered-ecommerce-store.vercel.app/api/v1",
  withCredentials: true,
});
