import DesktopSidebar from "./Desktop";
import MobileSidebar from "./Mobile";

export default async function Sidebar() {
  return (
    <>
      <div className="lg:hidden py-4">
        <MobileSidebar />
      </div>
      <DesktopSidebar />
    </>
  );
}
