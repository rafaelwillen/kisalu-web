import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "../_app";

const AdminDashboardPage: NextPageWithLayout = () => {
  return <div>AdminDashboardPage</div>;
};

AdminDashboardPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminDashboardPage;
