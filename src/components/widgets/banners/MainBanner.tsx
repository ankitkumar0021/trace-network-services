"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Link from "next/link";
import ImageComponent from "@/components/ui/ImageComponent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const banners = [
  { id: 2, image: "/images/common/banner6.png", link: "#", alt: "Banner 2" },
  { id: 1, image: "/images/banner/1.jpg", link: "#", alt: "Banner 1" },
  { id: 3, image: "/images/banner/2.jpg", link: "#", "alt": "Banner 3" },
];

export default function MainBanner() {
  return (
    <div className="relative main_banner bg_gradient">
      <div className="w-full">
        <button
          aria-label="Previous slide"
          className="custom-prev absolute top-1/2 left-3 z-30 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <IoIosArrowBack className="!text-white text-2xl" />
        </button>

        <button
          aria-label="Next slide"
          className="custom-next absolute top-1/2 right-3 z-30 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <IoIosArrowForward className="!text-white text-2xl" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[520px] lg:h-[72vh] overflow-hidden">
                <Link href={banner.link} className="relative block w-full h-full" aria-label={`Open ${banner.alt}`}>
                  <ImageComponent url={banner.image} img_title={banner.alt} object_cover={true} />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional pagination placement */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20" />
      </div>
    </div>
  );
}
