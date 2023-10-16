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
  singleProject: (id: string) => `/project/${id}`,
  providers: "/providers",
  singleProvider: (username: string) => `/providers/${username}`,
  servicesFromProvider: (id: string) => `/providers/${id}/services`,
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
  providerProposals: "/provider-dashboard/proposals",
  providerProfile: "/provider-dashboard/profile",
  providerServiceCreation: "/provider-dashboard/services/create",
  providerServices: "/provider-dashboard/services",
  serviceHiring: (id: string) => `/service/${id}/hire`,
  serviceHiringConfirmation: (id: string) => `/service/${id}/hire/confirmation`,
  activityPayment: (id: string) => `/activity-payment/${id}`,
  singleActivity: (id: string) => `provider-dashboard/activities/${id}`,
} as const;
