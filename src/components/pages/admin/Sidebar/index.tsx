import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

export default function Sidebar() {

  const user = {
    email: "rafael@gmail.com",
    name: "Rafael Padre",
  };

  return (
    <>
      <div className="lg:hidden py-4">
        <MobileSidebar user={user} />
      </div>
      <DesktopSidebar user={user} />
    </>
  );
}
