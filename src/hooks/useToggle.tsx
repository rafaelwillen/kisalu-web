import { useState } from "react";

export default function useToggle(open = false) {
  const [isOpen, setIsOpen] = useState(open);
  const toggle = () => setIsOpen(!isOpen);
  return { isOpen, toggle };
}
