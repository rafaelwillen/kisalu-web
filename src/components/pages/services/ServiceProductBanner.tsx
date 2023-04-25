import { ReviewStarIcon } from "@/components/elements";
import { Eye, Files } from "@phosphor-icons/react";
import Image from "next/image";

// TODO: Add props: banner image, name, user (name and avatar), rating, orders, views

export default function ServiceProductBanner() {
  return (
    <section className="relative rounded-2xl py-12 px-8 mb-5 text-white">
      <Image
        src="https://placehold.co/1920x1280.png"
        alt="Category Banner"
        fill
        className="-z-10 rounded-2xl object-cover brightness-[0.4]"
      />
      <div className="space-y-5">
        <h1 className="font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta?
        </h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium">
          <div className="flex items-center gap-3">
            <Image
              src="https://randomuser.me/api/portraits/women/89.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p>Lorem, ipsum.</p>
          </div>
          <div className="flex items-center gap-1">
            <ReviewStarIcon />
            <p>4.82</p>
            <p className="font-regular text-neutral-300">
              {new Intl.NumberFormat("pt-AO", {
                compactDisplay: "short",
                notation: "compact",
              }).format(94)}{" "}
              notas
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Files size={30} />
            <p>3 pedidos na fila</p>
          </div>
          <div className="flex items-center gap-3">
            <Eye size={30} />
            <p>
              {new Intl.NumberFormat("pt-AO", {
                compactDisplay: "short",
                notation: "compact",
              }).format(902)}{" "}
              visualizações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
