import { BaseServiceType } from "@/api/types";
import { NoServiceBanner } from "@/assets/images";
import { truncateLongText } from "@/utils";
import { formatToCompactNumber, formatToCurrency } from "@/utils/intl";
import Image from "next/image";
import ActionPopover from "./ActionPopover";
type Props = {
  service: BaseServiceType;
};

export default function MobileServiceListItem({ service }: Props) {
  return (
    <li className="relative">
      <ActionPopover serviceId={service.id} state={service.state} />
      <Image
        src={service.bannerImageURL ?? NoServiceBanner}
        width={122}
        height={90}
        alt={service.title}
        className="w-full h-auto rounded-sm px-8 object-fill"
      />
      <div className="mt-1 text-center">
        <h3 className="font-bold leading-relaxed text-lg">{service.title}</h3>
        <p className="text-accent-600 mb-2">{service.category}</p>
        <p title="Preço mínimo/tempo de entrega">
          {formatToCurrency(service.minimumPrice)} em {service.deliveryTime}
        </p>
        <p>{formatToCompactNumber(service.viewsCount)} visualizações</p>
        <p className="text-left mt-2">
          {truncateLongText(service.description)}
        </p>
      </div>
    </li>
  );
}
