"use client"
import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../card';

function Carousel({ data }) {

    return (
        <div className='container my-8 max-sm:my-5'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    639: {
                        slidesPerView: 2,
                    },
                    865: {
                        slidesPerView: 3
                    },
                    1000: {
                        slidesPerView: 4
                    },
                    1500: {
                        slidesPerView: 4
                    },
                    1700: {
                        slidesPerView: 5
                    }
                }}
                navigation={true}
                pagination={{ clickable: true }}

            >
                {
                    data.map(x => {
                        return (
                            <SwiperSlide key={x._id} className='py-5 max-sm:px-12'><Card data={x} /></SwiperSlide>

                        )


                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel