import Container from "@/components/common/Container";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <Container small>
      <div className="lg:pt-52 lg:pb-64 lg:max-w-3xl">
        <h1 className="mt-24 lg:mb-16 mb-10 text-3xl lg:text-4xl font-bold ">
          Contrate os melhores prestadores para qualquer trabalho, online
        </h1>
        <SearchForm />
      </div>
    </Container>
  );
}
