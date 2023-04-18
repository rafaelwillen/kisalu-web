import { AccordionContent, AccordionHeader } from "@/components/elements";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";

export default function FooterAccordion() {
  return (
    <Accordion.Root collapsible type="single">
      <Accordion.Item value="item-1">
        <AccordionHeader>
          <span className="font-medium">Sobre nós</span>
        </AccordionHeader>
        <AccordionContent>
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
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <AccordionHeader>
          <span className="font-medium">Categorias</span>
        </AccordionHeader>
        <AccordionContent>
          <ul className="py-4 px-5 space-y-4 bg-white/5 text-neutral-200">
            <li>
              <Link href="#" className="hover:underline">
                Gráficos e Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Marketing Digital
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Limpeza e Trabalho Domésticos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Estilo de Vida
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <AccordionHeader>
          <span className="font-medium">Sobre nós</span>
        </AccordionHeader>
        <AccordionContent>
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
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
