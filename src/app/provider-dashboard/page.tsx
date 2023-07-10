import { Suspense } from "react";
import DashboardTopAnalytics from "./_components/DashboardTopAnalytics";
import MostViewedServices from "./_components/MostViewedServices";
import PageHeader from "./_components/PageHeader";
import RecentServices from "./_components/RecentServices";

export default function ProviderDashboardPage() {
  return (
    <>
      <PageHeader
        pageTitle="Dashboard"
        pageDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      <Suspense fallback={<p>Loading...</p>}>
        <DashboardTopAnalytics />
      </Suspense>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <MostViewedServices />
        <RecentServices />
      </div>
    </>
  );
}
