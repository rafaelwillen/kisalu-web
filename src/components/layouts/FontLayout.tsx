import { DM_Sans } from "next/font/google";
import Head from "next/head";
import { PropsWithChildren } from "react";

const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function FontLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Encontre os melhores prestadores de serviço em Angola na nossa plataforma de serviços online. Nossa plataforma é fácil de usar e permite que você encontre o prestador perfeito para o seu projeto em apenas alguns cliques. Com uma ampla seleção de freelancers talentosos e experientes, você pode ter a certeza de que seu projeto será entregue no prazo e dentro do orçamento. Registre-se hoje mesmo e comece a encontrar freelancers qualificados para seus projetos"
        />
      </Head>
      <div className={`${mainFont.variable} font-main`}>{children}</div>
    </>
  );
}
