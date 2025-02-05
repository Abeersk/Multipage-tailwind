'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Content = () => {


useEffect(()=>{
    AOS.init ({
        duration:1000,
        once:true
    });
},[]);




  return (
    <div className='hero h-screen flex items-center bg-cover bg-center bg-[url(/hero.jpg)] '>


<div className='pl-o md:pl-16 text-white text-center'>
<h1 className='text-6xl font-bold drop-shadow-md'>Welcome To My_Shoes</h1>
<p className='text-2xl mt-4'>Your One-Stop Shop For The Shoes</p>

<button className='mt-6 px-6 py-3 bg-blue-700 rounded-md font-bold'>Shop Now</button>

</div>



    </div>
  )
}

export default Content