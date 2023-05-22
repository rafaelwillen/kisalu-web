import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

export default function Sidebar() {
  return (
    <>
      <div className="lg:hidden py-4">
        <MobileSidebar />
      </div>
      <DesktopSidebar />
    </>
  );
}
