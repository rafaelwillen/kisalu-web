import PageHeader from "./_components/PageHeader";
import RecentServices from "./_components/RecentServices";

export default function ProviderDashboardPage() {
  return (
    <>
      <PageHeader
        pageTitle="Dashboard"
        pageDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
      {/* <Suspense fallback={<p>Loading...</p>}>
        <DashboardTopAnalytics />
      </Suspense> */}
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        {/* <MostViewedServices /> */}
        <RecentServices filter="OnHold" title="Proposta de Serviços" />
        <RecentServices filter="Active" title="Serviços em execução" />
      </div>
    </>
  );
}
