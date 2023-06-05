"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FooterAccordion() {
  return (
    <Accordion.Root collapsible type="single">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.AccordionTrigger className="w-full hover:bg-white/5 duration-300 group flex py-4 px-2 items-center rounded justify-between">
            <span className="font-medium">Sobre nós</span>
            <ChevronDown
              size={16}
              color="#ffffff"
              className="group-data-[state=open]:rotate-180 duration-300"
            />
          </Accordion.AccordionTrigger>
        </Accordion.Header>

        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <ul className="py-4 px-5 space-y-4 bg-white/5 text-neutral-200">
            <li>
              <Link href="#" className="hover:underline">
                Termos de Serviço
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.AccordionTrigger className="w-full hover:bg-white/5 duration-300 group flex py-4 px-2 items-center rounded justify-between">
            <span className="font-medium">Ajuda</span>
            <ChevronDown
              size={16}
              color="#ffffff"
              className="group-data-[state=open]:rotate-180 duration-300"
            />
          </Accordion.AccordionTrigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <ul className="py-4 px-5 space-y-4 bg-white/5 text-neutral-200">
            <li>
              <Link href="#" className="hover:underline">
                Ajuda e Suporte
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Segurança e Confiança
              </Link>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
