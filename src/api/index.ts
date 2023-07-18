import axios from "axios";
import { StorageAcceptableParamsType } from "./types";

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
  provider: {
    create: "/provider",
    updateAvatarImage: "/provider/avatar",
    updateAddress: "/provider/address",
    services: {
      create: "/provider/services",
      getAllFromProvider: "/provider/services",
      getAllFromCategory: (categoryId: string) =>
        `/categories/${categoryId}/services`,
    },
  },
  client: {
    create: "/client",
    projects: {
      getAllFromClient: "/client/projects",
      toggleToAvailable: (projectId: string) =>
        `/client/projects/${projectId}/available`,
      create: "/client/projects",
      getAllFromCategory: (categoryId: string) =>
        `/categories/${categoryId}/projects`,
    },
  },
  address: {
    allProvinces: "/address/province",
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
    loginUser: "/auth/login",
    loginUserNext: "/auth/user",
    changeUserPassword: "/auth/password-reset/user",
  },
  upload: {
    uploadImage: (storageParams: StorageAcceptableParamsType) =>
      `/upload/image/${storageParams}`,
    deleteImage: (url: string) => `/upload/image/${url}`,
  },
  category: {
    queryByName: "/categories/query",
    getAll: "/categories",
    getMostPopular: "/categories/popular-categories",
  },
} as const;
