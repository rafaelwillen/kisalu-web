import { PanelLeftOpenIcon } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function ShowSidebarMenu({ onClick }: Props) {
  return (
    <button
      className="fixed z-10 bg-white left-0 mt-10 p-3 rounded-r-2xl shadow-md lg:hidden"
      onClick={onClick}
    >
      <PanelLeftOpenIcon size={20} />
    </button>
  );
}
