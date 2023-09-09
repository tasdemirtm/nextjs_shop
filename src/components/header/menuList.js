"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GoChevronDown } from 'react-icons/go';
import { toast } from 'react-toastify';

function MenuList() {

    const [drop, setdrop] = useState(false)
    const [categoryItem, setcategoryItem] = useState([])

    async function getCategories() {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/category`
            );
            if (res.status === 200) {
                setcategoryItem(res.data.categories);
            }
        } catch (error) {
            toast.success(error);
        }
    }

    useEffect(() => {
        getCategories()
    }, [])



    return (
        <>
            <ul className='flex gap-10 text-white items-center'>
                <li className='h-[60px] flex items-center'><Link href="/" className='text-lg'>Home</Link></li>
                <li className="relative h-[60px]">
                    <span className='h-[60px] flex items-center gap-2' onMouseOut={() => setdrop(false)} onMouseMove={() => setdrop(true)}>Category <GoChevronDown /> </span>
                    <div onMouseOut={() => setdrop(false)} onMouseMove={() => setdrop(true)} className={`${drop === true ? "flex" : "hidden"} overflow-hidden rounded-md absolute top-[100%] left-0 w-[140px] bg-primary text-black z-10`} >
                        <ul className='w-full'>
                            {
                                categoryItem.map(x => {
                                    return (
                                        <li key={x._id} className='py-1'><Link href={`/category/${x.categoryName}`} className='flex items-center px-4 py-1 text-sm hover:bg-secondary hover:text-white transition-all w-full'> <span>{x.categoryName}</span></Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>
                <li className='h-[60px] flex items-center'><Link href="/blog" className='text-lg'>Blog</Link></li>
                <li className='h-[60px] flex items-center'><Link href="/contact" className='text-lg'>Contact Us</Link></li>
            </ul>
        </>
    )
}

export default MenuList