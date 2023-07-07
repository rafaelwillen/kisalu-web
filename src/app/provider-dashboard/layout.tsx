import { PropsWithChildren } from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function ProviderDashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <div className="grid lg:grid-cols-provider-dashboard flex-1">
        <Sidebar />
        <main className="bg-accent-100 rounded-md p-14">{children}</main>
      </div>
      <footer></footer>
    </div>
  );
}
