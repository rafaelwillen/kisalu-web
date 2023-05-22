import { AdminDashboardLayout } from "@/components/layouts";
import { NextPageWithLayout } from "../_app";

const AdminDashboardPage: NextPageWithLayout = () => {
  return <div className=" h-[3000px]">AdminDashboardPage</div>;
};

AdminDashboardPage.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default AdminDashboardPage;
