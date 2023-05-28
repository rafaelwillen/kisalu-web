import { Analytics } from "@vercel/analytics/react";
import classnames from "classnames";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import "../styles/globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: {
    default: "Kisalu",
    template: "%s | Kisalu",
  },
  description:
    "Encontre os melhores prestadores de serviço em Angola na nossa plataforma de serviços online. Nossa plataforma é fácil de usar e permite que você encontre o prestador perfeito para o seu projeto em apenas alguns cliques. Com uma ampla seleção de freelancers talentosos e experientes, você pode ter a certeza de que seu projeto será entregue no prazo e dentro do orçamento. Registre-se hoje mesmo e comece a encontrar freelancers qualificados para seus projetos",
};

const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-AO">
      <body
        className={classnames("text-text-200 font-main", mainFont.variable)}
      >
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
