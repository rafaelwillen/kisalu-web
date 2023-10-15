import { useAuth } from "@/context/AuthContext";
import classNames from "classnames";
import { useState } from "react";
import ClientActivitiesInfo from "./ClientActivitiesInfo";
import ClientProfileInfo from "./ClientProfileInfo";

const tabs = [
  {
    name: "profile",
    label: "Perfil",
  },
  {
    name: "activities",
    label: "Actividades",
  },
];

type Props = {
  onClose: () => void;
};

export default function ClientProfile({ onClose }: Props) {
  const auth = useAuth();
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const isSelected = (tabName: string) => tabName === selectedTab;

  function logout() {
    auth.logout("User");
    onClose();
  }

  return (
    <div className="grid grid-cols-profile-dialog gap-4">
      <aside className="px-2 py-4">
        <nav>
          <ul className="space-y-4">
            {tabs.map(({ label, name }) => (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => setSelectedTab(name)}
                  className={classNames(
                    "text-lg",
                    isSelected(name) ? "text-primary-700" : "text-text-100"
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {selectedTab === "profile" && <ClientProfileInfo onLogout={logout} />}
      {selectedTab === "activities" && <ClientActivitiesInfo />}
    </div>
  );
}
