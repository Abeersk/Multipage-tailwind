import Image from 'next/image';
import React from 'react';

const Shoes = () => {
  const ShoesData = [
    { id: 1, name: 'Casual Shoes', price: 7000, description: 'PVC Comfort Foam White Casual Shoes For Men Sneakers', image: '/shoes-1.webp' },
    { id: 2, name: 'Mens Casual Shoes', price: 5000, description: 'Casual Shoes Material: Outer Layer: Synthetic, Sole: Airmix', image: '/shoes-2.webp' },
    { id: 3, name: 'Nike Jordan', price: 6000, description: 'Nike Dunk High Retro', image: '/jordan.jpeg' },
    { id: 4, name: 'Sport Shoes', price: 7000, description: 'Sport Shoes for Men and Boys', image: '/Shoes-4.jpg' },
    { id: 5, name: 'Tennis Shoes', price: 7000, description: 'IELGY Men Sneakers Breathable Mesh Running Shoes', image: '/shoes-5.webp' },
    { id: 6, name: 'Black Synthetic', price: 7000, description: 'Synthetic material finished in attractive colors.', image: '/shoes-6.webp' },
  ];

  return (
    <div className='shoes grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {ShoesData.map(shoes => (
        <div key={shoes.id} className='shoes-card bg-white p-5 rounded-md shadow-md text-center hover:scale-105 transition-transform'>
          <Image src={shoes.image} alt={shoes.name} width={1000} height={1000} className='w-full rounded-md' />
          <h3 className='mt-4 text-2xl font-bold'>{shoes.name}</h3>
          <p className='text-gray-500'>{shoes.description}</p>
          <div className='font-semibold text-lg'>{shoes.price} PKR</div>
          <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
