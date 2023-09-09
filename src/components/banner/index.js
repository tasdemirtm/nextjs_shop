import Link from 'next/link'
import React from 'react'
import { AiOutlineSwapRight } from 'react-icons/ai'

function Banner({ patch }) {

    return (
        <div className='h-[50px] flex items-center justify-center gap-5 bg-[#343a40] my-5 text-white'>
            <span><Link href="/" className='text-gray-400 hover:text-white transition-all'>Home</Link></span>
            <AiOutlineSwapRight />
            <span><Link href={`/category/${patch}`} className='text-gray-400 hover:text-white transition-all'>Category</Link></span>
            <AiOutlineSwapRight />
            <span>{patch}</span>
        </div>
    )
}

export default Banner