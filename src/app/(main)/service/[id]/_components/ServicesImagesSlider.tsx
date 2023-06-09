"use client";

import "keen-slider/keen-slider.min.css";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { MutableRefObject, useState } from "react";

type Props = {
  imagesUrl: string[];
};

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    const removeActive = () =>
      slider.slides.forEach((slide) => slide.classList.remove("active"));
    const addActive = (index: number) =>
      slider.slides[index].classList.add("active");
    function addClickEvents() {
      slider.slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(index);
        });
      });
    }
    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ServiceImagesSlider({ imagesUrl }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <section className="mt-5 space-y-2 md:w-1/2 md:mt-0 xl:mt-8 xl:w-full">
      <div ref={sliderRef} className="keen-slider relative ">
        {instanceRef.current && (
          <button
            type="button"
            className="absolute bg-white left-0 top-1/2 -translate-y-1/2 z-10 p-3 shadow-md rounded-full disabled:opacity-20 duration-200"
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {imagesUrl.map((url, index) => (
          <div key={index} className={`keen-slider__slide`}>
            <Image
              src={url}
              className="rounded w-full h-auto max-w-4xl"
              alt=""
              width={896}
              height={665}
            />
          </div>
        ))}
        {instanceRef.current && (
          <button
            type="button"
            className="absolute bg-white right-0 top-1/2 -translate-y-1/2 z-10 p-3 shadow-md rounded-full disabled:opacity-20 duration-200"
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide === imagesUrl.length - 1}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail flex">
        {imagesUrl.map((url, index) => (
          <div key={index} className={`keen-slider__slide`}>
            <Image
              src={url}
              className="rounded w-full h-auto max-w-[150px]"
              alt=""
              width={150}
              height={111}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
