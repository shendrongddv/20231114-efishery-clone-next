"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { dataWhyUs } from "@/config/data";
import Image from "next/image";

const WhyUs = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1.4, spacing: 16 },
        },
        "(min-width: 640px)": {
          slides: { perView: 3, spacing: 24 },
        },
        "(min-width: 768px)": {
          slides: { perView: 4, spacing: 32 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 4, spacing: 32 },
        },
      },
      slides: { perView: 1 },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section className="bg-gradient-to-b from-transparent from-50% to-slate-100 to-50% md:px-4">
      <div className="container">
        <div ref={sliderRef} className="keen-slider">
          {dataWhyUs?.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <div className="group isolate flex h-full flex-col items-start max-md:pl-4">
                {/* # */}
                <div className="z-10 grid aspect-1 h-16 translate-x-4 place-content-center rounded-xl bg-slate-100 p-2 transition duration-500 group-hover:bg-background">
                  <Image
                    src={`/${item.icon}`}
                    alt={item.text}
                    width={56}
                    height={56}
                    className="h-full w-auto scale-100 transition duration-500 group-hover:scale-75"
                  />
                </div>

                {/* # */}
                <div className="z-0 -mt-10 h-full rounded-2xl bg-background p-4 pt-14 transition duration-500 group-hover:bg-primary">
                  <p className="font-medium text-foreground transition duration-500 group-hover:text-background">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
