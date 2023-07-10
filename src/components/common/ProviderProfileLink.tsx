import { Routes } from "@/utils/constants/routes";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

type Props = {
  whiteBackground?: boolean;
  name: string;
  avatarImageURL: string;
};

export default function ProviderProfileLink({
  whiteBackground,
  avatarImageURL,
  name,
}: Props) {
  return (
    <Link
      href={Routes.providerDashboard}
      className={classNames(
        "flex items-center gap-4  group px-2 py-2 rounded-md duration-200",
        whiteBackground ? "hover:bg-primary-100" : "hover:bg-white"
      )}
    >
      <p
        className={classNames(
          "duration-200",
          whiteBackground ? "text-text-200" : "group-hover:text-text-200"
        )}
      >
        {name}
      </p>
      <Image
        src={avatarImageURL}
        alt=""
        width={36}
        height={36}
        className="w-9 h-9 rounded-full bg-white border border-white group-hover:border-neutral-400 duration-200"
      />
    </Link>
  );
}
