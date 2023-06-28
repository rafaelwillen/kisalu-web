import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import { LibraryIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import Profile from "../Profile";
import { SidebarProps } from "./types";

export const sidebarIcons = [
  // <HomeIcon key="home-icon" />,
  <LibraryIcon key="library-icon" />,
  // <BriefcaseIcon key="briefcase-icon" />,
  // <MegaphoneIcon key="megaphone-icon" />,
  <UsersIcon key="users-icon" />,
];

export default function DesktopSidebar({ user }: SidebarProps) {
  if (sidebarIcons.length !== sidebarLinks.length)
    throw new Error("Sidebar icons and links must be the same length");

  return (
    <aside className="hidden lg:flex flex-col bg-primary-200 overflow-hidden p-8 shadow-xl">
       <Profile {...user} />
      <nav className="flex-1 mt-8">
        <ul className="flex flex-col text-sm">
          {sidebarLinks.map(({ href, title }, index) => (
            <li key={href}>
              <Link
                href={href}
                className="flex gap-4 items-center py-6 px-4 hover:bg-white hover:translate-x-4 duration-200 rounded-md"
              >
                {sidebarIcons[index]}
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
