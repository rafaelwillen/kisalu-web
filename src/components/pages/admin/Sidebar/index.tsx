import DesktopSidebar from "./Desktop";
import MobileSidebar from "./Mobile";

export default function Sidebar() {
  // TODO: Fetch user data from API
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
