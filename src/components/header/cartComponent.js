"use client"
import { useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import Offcanvas from '../offcanvas'

function Cart() {
    const [offcanvasStatus, setoffcanvasStatus] = useState(false)
    return (
        <>
            <FiShoppingBag size={25} onClick={()=>setoffcanvasStatus(true)} />
            <Offcanvas data={{offcanvasStatus, setoffcanvasStatus}} />
        </>
    )
}

export default Cart