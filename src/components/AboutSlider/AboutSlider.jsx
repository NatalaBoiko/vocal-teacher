"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AboutSlider.css";

import "swiper/css";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  // Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const AboutSlider = () => {
  return (
    <Swiper
      // cssMode={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // mousewheel={true}
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
      //   autoplay={{
      //     delay: 2000,
      //     disableOnInteraction: false,
      //     pauseOnMouseEnter: true,
      //   }}
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
      <SwiperSlide>
        <Image src="/images/Yana_1.jpeg" fill />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
