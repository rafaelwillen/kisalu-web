import { AndroidLogo, AppleLogo } from "@phosphor-icons/react";

export default function NewsletterSubscriptionAndMobileAppsSection() {
  return (
    <div>
      <form className="my-7 lg:mt-0">
        <label htmlFor="newsletter-subscribe" className="text-lg font-medium">
          Subscrever
        </label>
        <div className="rounded flex py-4 px-5 bg-white/5 mt-4 gap-2 justify-between flex-wrap">
          <input
            className="bg-white/0 outline-none flex-1"
            type="email"
            placeholder="O seu endereço de email"
            id="subscribe"
            name="newsletter-subscribe"
          />
          <button className="py-1 px-2 hover:bg-white/20 duration-300 rounded mx-auto">
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
  );
}
