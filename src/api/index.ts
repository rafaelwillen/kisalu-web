import axios from "axios";

const api = axios.create({
  baseURL:
    typeof document === "undefined"
      ? process.env.API_URL?.concat("/api")
      : process.env.NEXT_PUBLIC_API_URL?.concat("/api"),
});

export const nextServerAPI = axios.create({
  baseURL: "/api",
});

export default api;
