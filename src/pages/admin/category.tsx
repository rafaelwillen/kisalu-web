import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "../_app";

const AdminCategoriesPage: NextPageWithLayout = () => {
  return <section>AdminCategoriesPage</section>;
};

AdminCategoriesPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminCategoriesPage;
