import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css";
import { AiOutlineUser } from 'react-icons/ai';
import Cart from './cartComponent';
import Search from '../search';
import { useSelector } from "react-redux";
import MenuList from './menuList';



function Header() {


    const cart = useSelector((state) => state.cart.products)



    return (
        <header className={styles.header}>
            <div className='container flex items-center justify-between'>
                <Link href="/" className='text-3xl text-white font-bold'>
                    EnerjiVit
                </Link>
                <MenuList />
                <div>
                    <ul className={styles.iconsActions}>
                        <li><Search /></li>
                        <li><Link href="/auth/login"><AiOutlineUser size={25} /> </Link></li>
                        <li className='relative'><Cart /> {cart.length > 0 ? <span className='absolute top-[-10px] right-[-10px] z-10 bg-black text-[12px] rounded-full w-[20px] h-[20px] text-white flex items-center justify-center'>{cart.length}</span> : <></>} </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header