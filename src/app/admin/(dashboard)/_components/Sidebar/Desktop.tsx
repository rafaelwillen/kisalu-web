import LogoutButton from "@/components/buttons/LogoutButton";
import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import {
  BriefcaseIcon,
  HomeIcon,
  LibraryIcon,
  MegaphoneIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SidebarProps } from "./types";

export const sidebarIcons = [
  <HomeIcon />,
  <LibraryIcon />,
  <BriefcaseIcon />,
  <MegaphoneIcon />,
  <UsersIcon />,
];

export default function DesktopSidebar({ user }: SidebarProps) {
  const { name, email, avatarImageURL } = user;

  if (sidebarIcons.length !== sidebarLinks.length)
    throw new Error("Sidebar icons and links must be the same length");

  return (
    <aside className="hidden lg:flex flex-col bg-primary-200 overflow-hidden p-8 shadow-xl">
      <nav className="flex-1">
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
      <div className="flex items-center gap-4">
        <Image
          src={avatarImageURL}
          width={40}
          height={40}
          className="rounded-full bg-white"
          alt=""
        />
        <div className="text-sm">
          <p className="font-bold text-lg">{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <LogoutButton type="admin" />
      </div>
    </aside>
  );
}
