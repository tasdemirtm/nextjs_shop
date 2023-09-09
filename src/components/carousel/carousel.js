"use client"
import React from 'react'
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselItem from './carouselItem';
import "swiper/css/pagination";

function Carousel() {

    return (
        <Swiper
            modules={[
                Pagination,
            ]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            loop={true}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide ><CarouselItem /> </SwiperSlide>
            <SwiperSlide><CarouselItem /> </SwiperSlide>
        </Swiper>
    )
}

export default Carousel