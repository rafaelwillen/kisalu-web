import { PropsWithChildren } from "react";

export default function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <aside></aside>
      <div>{children}</div>
    </main>
  );
}
