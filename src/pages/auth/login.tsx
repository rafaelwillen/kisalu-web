import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const LoginPage: NextPageWithLayout = () => {
  return <div>LoginPage</div>;
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
