"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { dataArticles } from "@/config/data";
import { ArticleCard } from "./article-card";

const BlogSlides = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2.4 },
          loop: true,
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 24 },
          loop: false,
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 32 },
          loop: false,
        },
      },
      slides: { perView: 1.4 },
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
          }, 4000);
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
    <section className="py-24 md:px-4">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="w-full text-center text-2xl font-semibold text-foreground max-md:px-4 md:w-4/5 md:text-5xl">
          Jelajahi Berita Terbaru di Dunia Akuakultur
        </h2>

        {/* Row */}
        <div ref={sliderRef} className="keen-slider">
          {dataArticles?.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <div className="max-md:pl-4">
                <ArticleCard />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSlides;
