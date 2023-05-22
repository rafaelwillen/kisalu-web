import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "../_app";

const AdminDashboardPage: NextPageWithLayout = () => {
  return <section>AdminDashboardPage</section>;
};

AdminDashboardPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminDashboardPage;
