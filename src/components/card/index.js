"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiShoppingBagFill } from 'react-icons/ri';
import "./styles.css";
import { addProduct } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';


function Card({ classStyle, data }) {

    const dispatch = useDispatch();

    function handleProdcut(product) {
        dispatch(addProduct({
            _id: product._id,
            productName: product.productName,
            img: product.img,
            price: product.price,
            quantity: 1
        }))
        toast.success(`${product.productName} Add Bag `)
    }


    return (
        <>
            {
                data !== undefined ?
                    <div className="card relative rounded-md overflow-hidden h-fit bg-primary">
                        <Link href={`${"/product/" + data._id}`} className='relative block p-3 bg-white'>
                            <span className='absolute top-2 left-2 z-10 bg-secondary px-2 py-1 rounded-sm text-xs text-white'>New</span>
                            <div className={`${classStyle} relative h-[266px] w-full`}>
                                <Image src={`${'/images/' + data.img}`} alt='' fill sizes='100%' />
                            </div>
                        </Link>
                        <div className='text-content relative z-10 bottom-0 w-full bg-secondary bg-opacity-80  flex flex-col px-3 py-2'>
                            <h4 className='h-[50px] overflow-hidden'><Link href={`${"/product/" + data._id}`} className='text-white'>{data.productName}</Link></h4>
                            <div className='flex justify-between items-center'>
                                <span className='font-bold text-white'>$ {data.price}</span>
                                <RiShoppingBagFill onClick={() => handleProdcut(data)} className=' hover:cursor-pointer text-white rounded-md w-7 h-7 p-[3px]' />
                            </div>
                        </div>
                    </div>

                    : <></>
            }
        </>
    )
}

export default Card