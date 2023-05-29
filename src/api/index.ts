export const API_URL =
  typeof document === "undefined"
    ? process.env.API_URL?.concat("/api")
    : process.env.NEXT_PUBLIC_API_URL?.concat("/api");

export const endpoints = {
  admin: {
    create: "/admin",
    category: {
      create: "/admin/category",
      getAll: "/admin/category",
      getSingle: (id: string) => `/admin/category/${id}`,
      getBySlug: (slug: string) => `/admin/category/slug/${slug}`,
      delete: (id: string) => `/admin/category/${id}`,
    },
  },
  authentication: {
    currentUser: "/auth/me",
    loginAdmin: "/auth/login/admin",
    verifyToken: `/auth/login/admin/verify`,
  },
  upload: {
    categoryImage: "/upload/category",
  },
};
