import PrimaryButton from "@/components/buttons/PrimaryButton";
import { formatToCurrency } from "@/utils/intl";
import { ArrowUpRight, Calendar, File, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  ownerProfilePicture: string;
  title: string;
  description: string;
  location: string;
  budget: number;
  proposals: number;
  createdAt: string;
  link: string;
  paymentType: string;
};

export default function ProjectCard({}: Partial<Props>) {
  return (
    <article className="p-8 border border-neutral-200 rounded flex gap-6 items-center shadow-lg">
      <Image
        className="self-start rounded-full"
        src="https://placehold.co/120.png"
        alt=""
        width={60}
        height={60}
      />
      <div className="space-y-1 self-start">
        <h2 className="font-medium">Food Delivery Mobile App</h2>
        <div className="flex text-text-100 text-sm">
          <p className="flex gap-2 items-center pr-4">
            <MapPin size={18} className="text-accent-700" /> London, UK
          </p>
          <p className="flex gap-2 items-center border-l border-r border-neutral-200 px-4">
            <Calendar size={18} className="text-accent-700" /> 2 hours ago
          </p>
          <p className="flex gap-2 items-center pl-4">
            <File size={18} className="text-accent-700" /> 1 received
          </p>
        </div>
        <p className="leading-loose">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text.
        </p>
      </div>
      <div className="w-px self-stretch bg-neutral-200" />
      <div className="flex flex-col w-1/3">
        <p className="text-center font-medium text-lg">
          {formatToCurrency(100_000)} <br />{" "}
          <small className="text-base font-regular">a</small> <br />
          {formatToCurrency(150_000)}
          <br />
          <span className="text-sm font-regular">Hourly Rate</span>
        </p>
        <Link href="#" legacyBehavior>
          <PrimaryButton>
            Enviar Proposta
            {<ArrowUpRight size={16} />}
          </PrimaryButton>
        </Link>
      </div>
    </article>
  );
}
