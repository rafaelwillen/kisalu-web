export const Routes = {
  home: "/",
  login: "/login",
  categories: "/categories",
  register: "/register",
  projects: "/projects",
  clientRegister: "/register/client",
  providerRegister: "/register/provider",
  singleCategory: (slug: string) => `/categories/${slug}`,
  singleService: (id: string) => `/service/${id}`,
  providers: "/providers",
  singleProvider: (username: string) => `/providers/${username}`,
  adminLogin: "/admin/login",
  adminDashboard: "/admin",
  adminCategories: "/admin/category",
  adminSingleCategory: (id: string) => `/admin/category/${id}`,
  adminActivities: "/admin/activity",
  adminDisputes: "/admin/dispute",
  adminCreateCategory: "/admin/category/create",
  adminUsers: "/admin/user",
  adminSingleUser: (id: string) => `/admin/user/${id}`,
  createAdmin: "/admin/user/new",
  logout: "/logout",
  logoutAdmin: "/admin/logout",
  providerDashboard: "/provider-dashboard",
} as const;
