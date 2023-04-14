import { DM_Sans } from "next/font/google";

const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function Home() {
  return (
    <main className={`${mainFont.variable} font-main`}>
      <h1>Hello World</h1>
    </main>
  );
}
