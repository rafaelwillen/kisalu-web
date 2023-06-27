"use client";

import Image from "next/image";

import { Routes } from "@/utils/constants/routes";
import * as Popover from "@radix-ui/react-popover";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  avatarImageURL: string;
  name: string;
  email: string;
};

export default function Profile({ avatarImageURL, email, name }: Props) {
  const router = useRouter();
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="flex items-center gap-4 hover:bg-white/40 duration-300 p-3 rounded-md"
        >
          <Image
            src={avatarImageURL}
            width={40}
            height={40}
            className="rounded-full bg-white"
            alt=""
          />
          <div className="text-sm text-left">
            <p className="font-bold text-lg">{name}</p>
            <p>{email}</p>
          </div>
        </button>
      </Popover.Trigger>
      <Popover.Content
        side="right"
        className="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
      >
        <>
          <button
            type="button"
            onClick={() => router.replace(Routes.logoutAdmin)}
            className="bg-white p-4 rounded-md shadow-lg flex items-center gap-4 hover:text-danger duration-300"
          >
            <LogOutIcon /> Finalizar sessão
          </button>
          <Popover.Arrow fill="white" />
        </>
      </Popover.Content>
    </Popover.Root>
  );
}
