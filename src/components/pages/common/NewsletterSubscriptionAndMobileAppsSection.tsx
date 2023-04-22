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
