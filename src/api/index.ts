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
  provider: {
    create: "/provider",
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
  category: {
    queryByName: "/categories/query",
    getAll: "/categories",
    getMostPopular: "/categories/popular-categories",
  },
};
