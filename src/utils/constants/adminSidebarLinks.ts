import { Routes } from "./routes";

type SidebarLink = {
  title: string;
  href: string;
};

const sidebarLinks: ReadonlyArray<SidebarLink> = [
  // {
  //   title: "Página Inicial",
  //   href: Routes.adminDashboard,
  // },
  {
    title: "Categorias",
    href: Routes.adminCategories,
  },
  // {
  //   title: "Atividades",
  //   href: Routes.adminActivities,
  // },
  // {
  //   title: "Disputas",
  //   href: Routes.adminDisputes,
  // },
  {
    title: "Administradores",
    href: Routes.adminUsers,
  },
];

export default sidebarLinks;
