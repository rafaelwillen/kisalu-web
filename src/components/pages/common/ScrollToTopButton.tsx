import { CaretUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScrollToTopVisibility = () =>
      setShowButton(window.scrollY > 2000);
    window.addEventListener("scroll", handleScrollToTopVisibility);
    return () =>
      window.removeEventListener("scroll", handleScrollToTopVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      {showButton && (
        <button
          onClick={scrollToTop}
          type="button"
          className="p-4 bg-secondary-900 rounded-full text-white duration-300 hover:bg-secondary-700"
        >
          <CaretUp />
        </button>
      )}
    </div>
  );
}
