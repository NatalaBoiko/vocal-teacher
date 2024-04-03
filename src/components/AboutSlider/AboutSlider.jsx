"use client";

import React from "react";
import Image from "next/image";
import { aboutImages } from "@/data/aboutImages";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  // Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "./AboutSlider.css";
import "swiper/css";
import "swiper/css/pagination";

const AboutSlider = () => {
  const slide = aboutImages.map((el, i) => {
    return (
      <SwiperSlide key={i}>
        <Image
          src={el.src}
          fill
          alt={el.title}
          sizes="(max-width: 768px) 100vw, 50vw"
          title={el.title}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      //   cssMode={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 5,
        slideShadows: true,
      }}
      spaceBetween={30}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[
        Navigation,
        Pagination,
        // Mousewheel,
        Keyboard,
        EffectCoverflow,
        Autoplay,
      ]}
      className="aboutSlider"
    >
      {aboutImages.map((el, i) => (
        <SwiperSlide key={i}>
          <Image
            src={el.src}
            fill
            alt={el.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            title={el.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutSlider;
