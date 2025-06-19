"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useRef, useState } from "react"
import { IPrdoctsResponse } from "@/utils/data"
import { EPageName } from "@/utils/enum"
import ProductCard from "../cards/ProductCard"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

interface CarouselProductCardProps {
    pageName: string;
    carousel_title: string;
    data?: IPrdoctsResponse[] | null | undefined;
}

export default function CarouselProductCard({ pageName, carousel_title, data }: CarouselProductCardProps) {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [hasEnoughContent, setHasEnoughContent] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null)

    // Function to calculate if navigation should be shown based on viewport and content
    const calculateHasEnoughContent = (swiper: SwiperType) => {
        const totalSlides = swiper.slides.length
        const slidesPerView = swiper.params.slidesPerView
        return totalSlides > (typeof slidesPerView === "number" ? slidesPerView : 1)
    }

    const handlePrev = () => {
        if (swiperRef.current && !isBeginning) {
            swiperRef.current.slidePrev()
        }
    }

    const handleNext = () => {
        if (swiperRef.current && !isEnd) {
            swiperRef.current.slideNext()
        }
    }

    return (
        <div className={`relative`}>
            <div className={`flex justify-between`}>
                <h3 className={`medium_text font-michroma text-4xl font-normal text-primary mb-8`}>{carousel_title}</h3>
                {/* Only render navigation buttons if there's enough content to scroll */}
                {hasEnoughContent && (
                    <>
                        <button
                            onClick={handlePrev}
                            disabled={isBeginning}
                            aria-label="Previous"
                            className={`btn_global btn_carousel absolute top-1/2 left-[-40px] z-20 -translate-y-1/2`}
                        ><MdKeyboardArrowLeft /></button>

                        <button
                            onClick={handleNext}
                            disabled={isEnd}
                            aria-label="Next"
                            className={`btn_global btn_carousel absolute top-1/2 right-[-40px] z-20 -translate-y-1/2`}
                        >
                            <MdKeyboardArrowRight />
                        </button>
                    </>
                )}
            </div>

            <div className={`swiper_slider_container`}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    grabCursor
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                        setIsBeginning(swiper.isBeginning)
                        setIsEnd(swiper.isEnd)
                        setHasEnoughContent(calculateHasEnoughContent(swiper))
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning)
                        setIsEnd(swiper.isEnd)
                    }}
                    onBreakpoint={(swiper) => {
                        setHasEnoughContent(calculateHasEnoughContent(swiper))
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        991: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: pageName === EPageName.LANDING ? 4 : 4, spaceBetween: 10 },
                        1280: { slidesPerView: pageName === EPageName.LANDING ? 5 : 3, spaceBetween: 10 },
                        1360: { slidesPerView: pageName === EPageName.LANDING ? 5 : 4, spaceBetween: 10 },
                        1440: { slidesPerView: pageName === EPageName.LANDING ? 5 : 4, spaceBetween: 10 },
                        1680: { slidesPerView: pageName === EPageName.LANDING ? 6 : 4, spaceBetween: 10 },
                    }}
                    className="my-swiper"
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

