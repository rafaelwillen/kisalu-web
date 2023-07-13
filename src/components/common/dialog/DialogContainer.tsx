import { PropsWithChildren } from "react";

import { Content } from "@radix-ui/react-dialog";

export default function DialogContainer({ children }: PropsWithChildren) {
  return (
    <Content className="z-20 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-screen w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-10 shadow-xl focus:outline-none">
      {children}
    </Content>
  );
}
