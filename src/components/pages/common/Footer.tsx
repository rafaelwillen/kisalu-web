import {
  Code,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import DesktopListFooter from "./DesktopListFooter";
import FooterAccordion from "./FooterAccordion";
import NewsletterSubscriptionAndMobileAppsSection from "./NewsletterSubscriptionAndMobileAppsSection";

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
      <DesktopListFooter />
      <div className="py-10 border-t border-b border-white/10 my-5 lg:hidden">
        <FooterAccordion />
        <NewsletterSubscriptionAndMobileAppsSection />
      </div>
      <div className="flex justify-between items-center text-white/70 text-sm">
        <p>
          © Kisalu. {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <div className="flex gap-2 items-center">
          <Code /> Feito por
          <a
            target="_blank"
            className="animated-underline"
            href="https://github.com/rafaelwillen"
          >
            Rafael Padre
          </a>
        </div>
      </div>
    </footer>
  );
}
