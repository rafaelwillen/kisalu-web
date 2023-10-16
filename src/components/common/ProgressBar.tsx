"use client";
import * as Progress from "@radix-ui/react-progress";

type Props = {
  progress?: number;
  max?: number;
};

// TODO: In the future, add animation on view

export default function ProgressBar({ progress = 0, max = 100 }: Props) {
  return (
    <Progress.Root
      value={progress}
      max={max}
      className="relative overflow-hidden bg-primary-100 rounded-full h-[4px] w-full"
      style={{
        transform: "translateY(0)",
      }}
    >
      <Progress.Indicator
        className="bg-primary-400 rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress / max}%)` }}
      />
    </Progress.Root>
  );
}
