import { DM_Sans } from "next/font/google";
import { PropsWithChildren } from "react";

const mainFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-main",
});

export default function FontLayout({ children }: PropsWithChildren) {
  return <div className={`${mainFont.variable} font-main`}>{children}</div>;
}
