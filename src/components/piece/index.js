import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function Piece() {
    return (
        <form className="flex items-center bg-white px-2 py-1 rounded-sm w-fit">
            <AiOutlineMinus className='hover:text-red-600' />
            <input type="number" className='w-[40px] text-center' defaultValue={1} disabled />
            <AiOutlinePlus className='hover:text-red-600' />
        </form>
    )
}

export default Piece