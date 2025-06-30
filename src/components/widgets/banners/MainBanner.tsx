"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/ui/ImageComponent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const banners = [
    {
        id: 1,
        image: "/images/common/banner1.png",
        link: "#",
        alt: "Banner 1",
    },
    {
        id: 2,
        image: "/images/common/banner6.png",
        link: "#",
        alt: "Banner 2",
    },
    {
        id: 3,
        image: "/images/common/banner5.png",
        link: "#",
        alt: "Banner 3",
    },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export default function MainBanner() {
    const slides = chunkArray(banners, 1);

    return (
        <>
            <div className="relative main_banner bg_gradient">
                <div className="w-full pb-2">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        className="w-full"
                    >
                        {slides.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 w-full h-[500px]">
                                    {group.map((banner) => (
                                        <Link href={banner.link} key={banner.id} className="relative w-full">
                                            <ImageComponent url={banner.image} img_title={banner.alt} object_cover={true} />
                                        </Link>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="custom-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 text-white text-3xl">
                        <IoIosArrowBack className="!text-3xl" />
                    </button>
                    <button className="custom-next absolute top-1/2 right-2 z-10 -translate-y-1/2 text-white text-3xl">
                        <IoIosArrowForward className="!text-3xl" />
                    </button>
                </div>
            </div>
        </>
    );
}
