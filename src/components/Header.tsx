'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
const Header = () => {
    const [isMenuopen, setisMenuopen] = useState(false);
    const toggleMenu = () => {
        setisMenuopen(!isMenuopen);

    }
    const closeMenu = () => {
        setisMenuopen(false);
    }



    return (
        <div className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
            <h1 className='text-2xl font-bold'>My_Shoe's </h1>
            <nav className='hidden md:flex gap-10 text-white font-bold'>
                <Link href='/' onClick={closeMenu}>Home</Link>
                <Link href='/about' onClick={closeMenu}>About</Link>
                <Link href='/shoes' onClick={closeMenu}>Shoes</Link>
                <Link href='/contact' onClick={closeMenu}>Contact</Link>
                <FaShoppingCart className='text-white text-xl' />
            </nav>
            <div className='md:hidden flex items-center'>
                <HiMenuAlt3
                    className=' text-white text-3xl  cursor-pointer'
                    onClick={toggleMenu}
                />

                <div className={`${isMenuopen ? 'block' : 'hidden'}absolute top-0 left-0 w-full bg-blue-500 md:hidden z-20 `}>
                    <div className='flex justify-end'>
                        <HiX className='text-white text-3xl cursor-pointer'
                            onClick={closeMenu} />
                    </div>
                    <nav className='flex flex-row items-centergap-3 text-white font-bold'>
                        <Link href='/' onClick={closeMenu} >Home</Link>
                        <Link href='/about' onClick={closeMenu} >About</Link>
                        <Link href='/shoes' onClick={closeMenu} >Shoes</Link>
                        <Link href='/contact' onClick={closeMenu} >Contact</Link>
                        <FaShoppingCart className='text-white text-xl' />
                    </nav>
                </div>
            </div>



        </div>
    )


}

export default Header