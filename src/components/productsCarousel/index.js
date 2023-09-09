"use client"
import React, { useEffect, useState } from 'react'
import MiddleTitle from '../title/middleTitle'
import LittleTitle from '../title/littleTitle'

import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from './carousel';
import axios from 'axios';
import { toast } from 'react-toastify';

function ProductsCarousel() {

    const [data, setdata] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
            if (res.status === 200) {

                setdata(res.data.products.filter(x => x.categories === "Multivitaminler"));
            }
        } catch (error) {
            toast.success(error);
        }
    }


    return (
        <div className='mt-14'>
            <MiddleTitle classStyle={"text-secondary text-center"}>Our Featured Products</MiddleTitle>
            <LittleTitle classStyle={"text-secondary text-center"}>Get the skin you want to feel</LittleTitle>
            <Carousel data={data} />
        </div>
    )
}

export default ProductsCarousel