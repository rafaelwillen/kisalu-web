import { AccordionContent as RAccordionContent } from "@radix-ui/react-accordion";
import { PropsWithChildren } from "react";

export default function AccordionContent({ children }: PropsWithChildren) {
  return (
    <RAccordionContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
      {children}
    </RAccordionContent>
  );
}
