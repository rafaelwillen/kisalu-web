import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-AO">
      <body>{children}</body>
    </html>
  );
}
