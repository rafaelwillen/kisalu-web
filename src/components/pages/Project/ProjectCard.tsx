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
    <article className="p-8 border border-neutral-200 rounded flex max-xl:flex-col gap-6 items-center shadow-lg">
      <Image
        className="self-start rounded-full max-md:self-center"
        src="https://placehold.co/120.png"
        alt=""
        width={60}
        height={60}
      />
      <div className="space-y-1 self-start">
        <h2 className="font-medium max-md:text-center">
          Food Delivery Mobile App
        </h2>
        <div className="flex max-md:grid grid-cols-2 gap-2 text-text-100 text-sm ">
          <p className="flex gap-2 items-center md:pr-4 justify-self-end">
            <MapPin size={18} className="text-accent-700" /> London, UK
          </p>
          <p className="flex gap-2 items-center md:border-l md:border-r border-neutral-200 md:px-4 ">
            <Calendar size={18} className="text-accent-700" /> 2 hours ago
          </p>
          <p className="flex gap-2 items-center md:pl-4 col-span-2 justify-self-center">
            <File size={18} className="text-accent-700" /> 1 received
          </p>
        </div>
        <p className="leading-loose">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text.
        </p>
      </div>
      <div className="md:w-px max-md:h-px  self-stretch bg-neutral-200" />
      <div className="flex flex-col w-full md:w-1/3">
        <p className="text-center font-medium text-lg">
          {formatToCurrency(100_000)} <br />{" "}
          <small className="text-base font-regular">a</small> <br />
          {formatToCurrency(150_000)}
          <br />
          <span className="text-sm font-regular">Hourly Rate</span>
        </p>
        <Link href="#" legacyBehavior className="debug">
          <PrimaryButton>
            Enviar Proposta
            {<ArrowUpRight size={16} />}
          </PrimaryButton>
        </Link>
      </div>
    </article>
  );
}
