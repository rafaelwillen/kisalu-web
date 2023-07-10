import ReviewStarIcon from "@/components/common/ReviewStarIcon";
import Image from "next/image";
import Link from "next/link";

export default function MostViewedServices() {
  return (
    <div className="bg-white rounded px-7 py-5">
      <div className="flex flex-col sm:flex-row justify-between pb-4 border-b border-neutral-300 mb-8">
        <h2 className="font-medium text-lg">Serviços Mais Vistos</h2>
        <Link className="text-primary-500 underline max-sm:self-end" href="#">
          Ver todos
        </Link>
      </div>
      <ul className="space-y-5 contain">
        <li className="flex justify-between items-center gap-4 border-b pb-5 border-neutral-300">
          <Image
            src="https://placehold.co/244x182.png"
            className="rounded max-sm:hidden"
            alt=""
            width={122}
            height={90}
          />
          <div className="flex-1 space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              iure! Voluptatibus modi enim commodi.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <ReviewStarIcon />
                <span>4.5</span>
              </div>
              <p className="text-text-100 text-sm">
                Começando em{" "}
                <span className="text-text-200 font-bold">100.000kzs</span>
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between items-center gap-4 last:border-b-0">
          <Image
            src="https://placehold.co/244x182.png"
            className="rounded max-sm:hidden"
            alt=""
            width={122}
            height={90}
          />
          <div className="flex-1 space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              iure! Voluptatibus modi enim commodi.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <ReviewStarIcon />
                <span>4.5</span>
              </div>
              <p className="text-text-100 text-sm">
                Começando em{" "}
                <span className="text-text-200 font-bold">100.000kzs</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
