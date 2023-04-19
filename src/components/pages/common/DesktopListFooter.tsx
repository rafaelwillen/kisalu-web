import Link from "next/link";
import NewsletterSubscriptionAndMobileAppsSection from "./NewsletterSubscriptionAndMobileAppsSection";

export default function DesktopListFooter() {
  return (
    <div className="hidden lg:grid grid-cols-4 border-t border-b border-white/10 my-5 py-14">
      <ul className="space-y-4 text-white/70">
        <li className="font-medium text-white">Sobre Nós</li>
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
      <ul className="space-y-4 text-white/70">
        <li className="font-medium text-white">Categorias</li>
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
      <ul className="space-y-4 text-white/70">
        <li className="font-medium text-white">Ajuda</li>
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
      <NewsletterSubscriptionAndMobileAppsSection />
    </div>
  );
}
