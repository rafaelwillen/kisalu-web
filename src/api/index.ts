import axios from "axios";

export const api = axios.create({
  baseURL:
    typeof document === "undefined"
      ? process.env.API_URL?.concat("/api")
      : process.env.NEXT_PUBLIC_API_URL?.concat("/api"),
});

export const nextServerAPI = axios.create({
  baseURL: "/api",
});

export const endpoints = {
  admin: {
    category: {
      create: "/admin/category",
      getAll: "/admin/category",
      getSingle: (id: string) => `/admin/category/${id}`,
      getBySlug: (slug: string) => `/admin/category/slug/${slug}`,
    },
  },
  authentication: {
    loginAdmin__next: "/admin/login",
    loginAdmin: "/auth/login/admin",
    verifyToken: `${process.env.API_URL}/api/auth/login/admin/verify`,
  },
  nextAPI: {
    loginAdmin: "/auth/admin/login",
  },
  upload: {
    categoryImage: "/upload/category",
  },
};

