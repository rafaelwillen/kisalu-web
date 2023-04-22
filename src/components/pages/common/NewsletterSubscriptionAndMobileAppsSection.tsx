import { AndroidLogo, AppleLogo } from "@phosphor-icons/react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSubscriptionAndMobileAppsSection() {
  return (
    <div>
      <NewsletterForm />
      <div className="space-y-3">
        <h2 className="text-lg">Baixe o nosso aplicativo</h2>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="flex gap-3 items-center hover:underline w-fit"
        >
          <AppleLogo weight="fill" />
          <span className="text-white/70"> iOS App</span>
        </a>
        <a
          href="https://play.google.com/"
          target="_blank"
          className="flex gap-3 items-center hover:underline w-fit"
        >
          <AndroidLogo weight="fill" />
          <span className="text-white/70">Android App</span>
        </a>
      </div>
    </div>
  );
}
