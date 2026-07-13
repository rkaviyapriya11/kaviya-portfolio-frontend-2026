import axios from "axios";

export const BASE_URL = "kaviya-portfolio-backend-2026.railway.internal";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});