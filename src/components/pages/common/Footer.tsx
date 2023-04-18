import {
  AndroidLogo,
  AppleLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import FooterAccordion from "./FooterAccordion";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="flex items-center justify-center gap-5">
        <p className="font-medium">Siga-nos</p>
        <a
          className="hover:bg-white/5 duration-300 p-2 rounded-full"
          href="https://www.facebook.com/"
        >
          <FacebookLogo weight="fill" size={24} />
        </a>
        <a
          href="https://www.instagram.com/"
          className="hover:bg-white/5 duration-300 p-2 rounded-full"
        >
          <InstagramLogo weight="fill" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="hover:bg-white/5 duration-300 p-2 rounded-full"
        >
          <LinkedinLogo weight="fill" size={24} />
        </a>
      </div>
      <div className="py-10 border-t border-b border-white border-opacity-10 my-5">
        <FooterAccordion />
        <div>
          <form className="my-7">
            <label
              htmlFor="newsletter-subscribe"
              className="text-lg font-medium"
            >
              Subscrever
            </label>
            <div className="rounded flex py-4 px-5 bg-white/5 mt-4 gap-2 justify-between">
              <input
                className="bg-white/0 outline-none flex-1"
                type="email"
                placeholder="O seu endereço de email"
                id="subscribe"
                name="newsletter-subscribe"
              />
              <button className="py-1 px-2 hover:bg-white/20 duration-300 rounded">
                Enviar
              </button>
            </div>
          </form>
          <div className="space-y-3">
            <h2 className="text-lg">Baixe o nosso aplicativo</h2>
            <a
              href="https://www.apple.com/app-store/"
              className="flex gap-3 items-center hover:underline"
            >
              <AppleLogo weight="fill" />
              <span className="text-white/70"> iOS App</span>
            </a>
            <a
              href="https://play.google.com/"
              className="flex gap-3 items-center hover:underline"
            >
              <AndroidLogo weight="fill" />
              <span className="text-white/70">Android App</span>
            </a>
          </div>
        </div>
      </div>
      <p className="text-white/70 text-sm">
        © Kisalu. {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}
