"use client";

import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const images = [
  "/wedding1.jpg",
  "/wedding2.jpg",
  "/wedding3.jpg",
  "/wedding4.jpg",
  "/business1.jpg",
  "/weddingshoot1.jpg",
  "/weddingshoot2.jpg",
];



const SwiperComponent = () => {
  return (
    <div className="w-2/3 mx-auto"> {/* Set width to 2/3 of the screen width and center */}
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="responsive" // Make the image responsive
            width={600}
            height={300}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default SwiperComponent;
