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
    getAll: "/provider",
    getSingle: (id: string) => `/provider/${id}`,
    services: {
      create: "/provider/services",
      getAllFromProvider: "/provider/services",
      getAllFromCategory: (categoryId: string) =>
        `/categories/${categoryId}/services`,
      deleteService: (id: string) => `/provider/services/${id}`,
      changeServiceState: (id: string) => `/provider/services/state/${id}`,
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
  service: {
    getServiceById: (id: string) => `/service/${id}`,
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
    getBySlug: (slug: string) => `/categories/${slug}`,
  },
  activity: {
    create: "/activity",
    getAll: "/activity",
    getAllFromUser: (userId: string) => `/activity/user/${userId}`,
    getById: (id: string) => `/activity/${id}`,
    changeState: (id: string) => `/activity/state/${id}`,
  },
} as const;
