import { Container } from "@/components/pages/common";
import { CommonCategoriesList, Header } from "@/components/pages/home";
import TrendingServiceList from "@/components/pages/home/TrendingServiceList";
import { Certificate } from "@phosphor-icons/react";
import { DM_Sans } from "next/font/google";

// TODO: Need to find a better place for this. Probably create a layout component
const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function Home() {
  return (
    <main className={`${mainFont.variable} font-main`}>
      <Header />
      <Container>
        <CommonCategoriesList />
      </Container>
      <div className="mt-20 bg-primary-50 py-10">
        <Container>
          <TrendingServiceList />
        </Container>
      </div>
      <Container>
        <section>
          <h2>Precisa de um serviço feito?</h2>
          <article>
            <Certificate size={40} color="#0087ff" />
            <h3>Publique um trabalho</h3>
            <p>
              É fácil publicar um trabalho. Basta submeter o título, localização
              e a descrição
            </p>
          </article>
          <article>
            <Certificate size={40} color="#0087ff" />
            <h3>Escolha os prestadores</h3>
            <p>
              Pode escolher um prestador que chamou a sua atenção sobre os seus
              serviços
            </p>
          </article>
          <article>
            <Certificate size={40} color="#0087ff" />
            <h3>Pagamento de forma segura</h3>
            <p>O pagamento pelo serviço é feito de forma segura e rápida</p>
          </article>
          <article>
            <Certificate size={40} color="#0087ff" />
            <h3>Estamos aqui para ajudar</h3>
            <p>Qualquer dúvida, não hesite em nos contactar</p>
          </article>
        </section>
      </Container>
    </main>
  );
}
