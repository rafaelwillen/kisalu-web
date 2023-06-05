import Link from "next/link";
import Newsletter from "./Newsletter";

export default function DesktopListFooter() {
  return (
    <div className="hidden lg:grid grid-cols-4 border-t border-b border-white/10 my-5 py-14">
      <ul className="space-y-4 text-white/70">
        <li className="font-medium text-white">Sobre Nós</li>
        <li>
          <Link href="#" className="animated-underline">
            Termos de Serviço
          </Link>
        </li>
        <li>
          <Link href="#" className="animated-underline">
            Política de Privacidade
          </Link>
        </li>
      </ul>
      <ul className="space-y-4 text-white/70">
        <li className="font-medium text-white">Ajuda</li>
        <li>
          <Link href="#" className="animated-underline">
            Ajuda e Suporte
          </Link>
        </li>
        <li>
          <Link href="#" className="animated-underline">
            Segurança e Confiança
          </Link>
        </li>
      </ul>
      <Newsletter />
    </div>
  );
}
