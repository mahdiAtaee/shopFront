/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import ImageGallery from "react-image-gallery";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import "react-image-gallery/styles/css/image-gallery.css";

const handleFullscreen = (url) => {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.background = '#000';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = 0;
    wrapper.style.left = 0;
    wrapper.style.width = '100vw';
    wrapper.style.height = '100vh';
    wrapper.style.zIndex = 9999;
    wrapper.style.backgroundColor = 'black';
    wrapper.appendChild(img);

    wrapper.onclick = () => document.body.removeChild(wrapper);
    document.body.appendChild(wrapper);
};


const renderCustomImage = (item) => {
    return (
        <div onClick={() => handleFullscreen(item.original)}>
            <Image
                src={item.original}
                alt={item.originalAlt}
                width={500}
                height={400}
                loading='lazy'
                style={{
                    width: '100%',    // یا '100%'، یا هر عدد دلخواه
                    height: '400px',   // یا 'auto'
                    objectFit: 'cover', // یا contain بسته به نیاز
                    cursor: 'pointer',
                }}
            />
        </div>
    );
};

const Gallery = ({ images }) => {
    // images = [...images, ...images, ...images]
    const formattedImages = images.map((image) => ({
        original: image,
        thumbnail: image,
        originalClass: "gallery-image h-[400px]",
        originalStyle: { height: "400px" },
        thumbnailClass: "gallery-thumbnail",
        thumbnailStyle: { height: "100px" },
        originalWidth: '100%',
        originalHeight: '100%',
    }));



    return (
        <ImageGallery
            showNav={false} // حذف navigation arrows
            showPlayButton={false} // حذف دکمه play
            showFullscreenButton={false} // حذف دکمه fullscreen
            lazyLoad
            isRTL
            items={formattedImages}
            renderItem={renderCustomImage}

        />
    )
}

export default Gallery