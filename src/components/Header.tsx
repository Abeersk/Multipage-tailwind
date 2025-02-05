'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
      <h1 className='text-2xl font-bold'>My_Shoe's</h1>

      <nav className='hidden md:flex gap-10 font-bold'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/shoes'>Shoes</Link>
        <Link href='/contact'>Contact</Link>
        <FaShoppingCart className='text-xl' />
      </nav>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <HiMenuAlt3 className='text-white text-3xl cursor-pointer' onClick={() => setIsMenuOpen(true)} />

        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full h-screen bg-blue-500 flex flex-col items-center justify-center z-20'>
            <HiX className='text-white text-3xl cursor-pointer absolute top-5 right-5' onClick={() => setIsMenuOpen(false)} />
            <nav className='flex flex-col gap-5 text-xl font-bold'>
              <Link href='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href='/about' onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href='/shoes' onClick={() => setIsMenuOpen(false)}>Shoes</Link>
              <Link href='/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <FaShoppingCart className='text-2xl' />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
