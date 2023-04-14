import { Header } from "@/components/pages/home";
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
      {/* TODO: Refactor this to a component */}
      <Header />
    </main>
  );
}
