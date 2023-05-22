import { KisaluLogo } from "@/assets/images";
import sidebarLinks from "@/utils/constants/adminSidebarLinks";
import Image from "next/image";
import Link from "next/link";

export default function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex flex-col bg-primary-100 overflow-hidden p-8">
      <div className="flex items-center gap-4">
        <Image src={KisaluLogo} className="rounded-full" alt="" />
        <div className="text-sm">
          <p className="font-bold text-lg">Rafael Padre</p>
          <p>rafaelpadre20@gmail.com</p>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col mt-12 gap-8 text-sm">
          {sidebarLinks.map(({ href, title }) => (
            <li key={href}>
              <Link
                className="bg-white shadow-sm rounded-md p-3 block hover:bg-white/70"
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link href="#" className="text-danger hover:underline">
          Finalizar sessão
        </Link>
      </div>
    </aside>
  );
}
