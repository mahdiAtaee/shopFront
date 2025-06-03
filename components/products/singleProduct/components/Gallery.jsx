/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Navigation, Pagination, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";

const Gallery = ({ images }) => {
    // images = [...images, ...images, ...images]
    const [mainThumbs, setMainThumbs] = useState(null);
    const [fullscreenThumbs, setFullscreenThumbs] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const hasMainThumbs = mainThumbs && !mainThumbs.destroyed;
    const hasFullscreenThumbs = fullscreenThumbs && !fullscreenThumbs.destroyed;

    return (
        <>
            {/* Normal mode */}
            <div className="w-full">
                <Swiper
                    spaceBetween={10}
                    navigation
                    modules={[Navigation, Thumbs]}
                    thumbs={hasMainThumbs ? { swiper: mainThumbs } : undefined}
                    onClick={() => setIsFullscreen(true)}
                    className="cursor-pointer"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={img}
                                alt={`main-${index}`}
                                width={800}
                                height={600}
                                loading="lazy"
                                className="w-full h-[400px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                    onSwiper={setMainThumbs}
                    spaceBetween={10}
                    slidesPerView={5}
                    watchSlidesProgress
                    freeMode
                    modules={[Thumbs]}
                    className="mt-4"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                onClick={() => setIsFullscreen(true)}
                                src={img}
                                alt={`thumb-${index}`}
                                width={100}
                                height={100}
                                loading="lazy"
                                className="w-full h-[100px] object-cover border cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Fullscreen mode */}
            {isFullscreen && (
                <div
                    className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center"

                >
                    <IoMdClose className='absolute top-5 left-5 text-4xl text-red-600 cursor-pointer' onClick={() => setIsFullscreen(false)} />
                    <div className="w-full max-w-5xl px-2">
                        <Swiper
                            spaceBetween={10}
                            navigation
                            modules={[Navigation, Thumbs]}
                            thumbs={hasFullscreenThumbs ? { swiper: fullscreenThumbs } : undefined}
                            className="mb-4"
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={`fullscreen-${index}`}
                                        width={1600}
                                        height={1200}
                                        className="w-full max-h-[80vh] object-contain"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setFullscreenThumbs}
                            spaceBetween={10}
                            slidesPerView={6}
                            watchSlidesProgress
                            freeMode
                            modules={[Thumbs]}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={`thumb-full-${index}`}
                                        width={100}
                                        height={100}
                                        className="w-full h-[80px] object-cover border"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery