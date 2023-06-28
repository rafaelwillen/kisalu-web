import axios from "axios";

export const API_URL =
  typeof document === "undefined"
    ? process.env.API_URL?.concat("/api")
    : process.env.NEXT_PUBLIC_API_URL?.concat("/api");

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const nextServerAPI = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export const endpoints = {
  address: {
    allProvinces: "/address/provinces",
    allCounties: (province: string) => `/address/county/${province}`,
  },
  admin: {
    create: "/admin",
    getAll: "/admin",
    getSingle: (id: string) => `/admin/${id}`,
    category: {
      create: "/admin/category",
      getAll: "/admin/category",
      getSingle: (id: string) => `/admin/category/${id}`,
      delete: (id: string) => `/admin/category/${id}`,
    },
  },
  authentication: {
    currentUser: "/auth/me",
    loginAdmin: "/auth/login/admin",
    loginAdminNext: "/auth/admin",
  },
  upload: {
    categoryImage: "/upload/category",
  },
};
