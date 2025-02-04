import React from 'react';

function Page() {
  return (
    <div className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-18 bg-[url('/hero.jpg')]">
    
    <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg '>

      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p>
        Welcome to <span className="font-semibold">My_Shoe's </span>, your one-stop destination for premium footwear. 
        We bring you the latest trends, top brands, and unbeatable comfort—all in one place. 
        Whether you're looking for casual sneakers, formal shoes, or sportswear, we have something for everyone.
      </p>
    </div>
    </div>
  );
}

export default Page;
