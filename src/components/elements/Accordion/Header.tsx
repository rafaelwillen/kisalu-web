import { CaretDown } from "@phosphor-icons/react";
import {
  AccordionTrigger,
  AccordionHeader as RAccordionHeader,
} from "@radix-ui/react-accordion";
import { PropsWithChildren } from "react";

export default function AccordionHeader({ children }: PropsWithChildren) {
  return (
    <RAccordionHeader>
      <AccordionTrigger className="w-full hover:bg-white/5 duration-300 group flex py-4 px-2 items-center rounded justify-between">
        <span className="font-medium">{children}</span>
        <CaretDown
          size={16}
          color="#ffffff"
          weight="fill"
          className="group-data-[state=open]:rotate-180 duration-300"
        />
      </AccordionTrigger>
    </RAccordionHeader>
  );
}
