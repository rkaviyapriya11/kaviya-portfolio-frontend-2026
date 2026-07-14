import axios from "axios";

export const BASE_URL = "https://kaviya-portfolio-backend-2026-production.up.railway.app";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});