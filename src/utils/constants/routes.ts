export const Routes = {
  home: "/",
  login: "/auth/login",
  categories: "/categories",
  register: "/auth/register",
  clientRegister: "/auth/register/client",
  providerRegister: "/auth/register/provider",
  /** Params: :categorySlug */
  singleCategory: "/categories/:categorySlug",
  /** Params: :id - service id */
  singleService: "/service/product/:id",
  providers: "/providers",
  /** Params: :id - provider id */
  singleProvider: "/providers/:username",
  adminLogin: "/admin/login",
  adminDashboard: "/admin/dashboard",
  adminCategories: "/admin/category",
  adminActivities: "/admin/activity",
  adminDisputes: "/admin/dispute",
  adminCreateCategory: "/admin/category/create",
};
