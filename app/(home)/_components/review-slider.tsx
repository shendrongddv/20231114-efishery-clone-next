"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { dataTestimonials } from "@/config/data";
import Image from "next/image";

export const ReviewSliders = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
      }}
      slidesPerView="auto"
      className="AAA mx-auto mt-4 w-full"
    >
      {dataTestimonials?.map((item) => (
        <SwiperSlide key={item.id} className="BBB max-md:px-4">
          <div className="CCC isolate mx-auto flex h-full flex-col items-center md:w-4/5">
            {/* # */}
            <figure className="z-10 aspect-1 h-24 overflow-hidden rounded-full border-2 border-background bg-slate-100 shadow-lg">
              <Image
                // src={`/${item.user.avatar}`}
                src={`https://randomuser.me/api/portraits/${
                  item.user.isMale ? "men" : "women"
                }/${item.id}.jpg`}
                alt={item.user.name}
                width={200}
                height={200}
                className="h-full w-auto object-cover"
              />
            </figure>

            {/* # */}
            <div className="-mt-10 flex h-full flex-col items-center rounded-2xl bg-background px-4 pb-8 pt-16 text-center">
              {/* ## */}
              <p className="mb-2 text-lg text-foreground md:w-4/5 md:text-xl">
                &quot;{item.text}&quot;
              </p>

              {/* ## */}
              <h4 className="mt-auto font-medium text-foreground">
                {item.user.name}
              </h4>
              <span className="text-sm text-muted-foreground">
                {item.job} dari {item.user.city}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
