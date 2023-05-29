import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  return { isOpen, toggle, close, open };
}
