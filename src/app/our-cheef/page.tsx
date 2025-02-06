import React, { Suspense } from 'react'
import Image from 'next/image'
import imgb from "../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"
import OurCheef from '../Components/MeetOurCheef/OurCheef'
import Mobilebar from '../Components/Mobilebar/Mobilebar'

const page = async () => {
  return (
    

<div className="relative">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-500">Food</span>tuck
        </h1>
        
        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-yellow-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="/menu" className="hover:text-yellow-500 transition duration-300">Menu</a>
          </li>
          <li>
            <a href="/blog" className="hover:text-yellow-500 transition duration-300">Blog</a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-500 transition duration-300">About</a>
          </li>
          <li>
            <a href="/shop" className="hover:text-yellow-500 transition duration-300">Shop</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-500 transition duration-300">Contact</a>
          </li>
        </ul>
        
        {/* Search Section */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-[27px] border-[1px] bg-gray-800 text-white"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-[27px] text-white">Search</button>
        </div>
      </nav>

      {/* Mobile Bar */}
      <div className='ml-3 lg:hidden'>

      <Mobilebar />

      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center"> 
      {/* style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}> */}

      <Image
          src={imgb}
          width={1920}
          height={410}
          alt="Hero Background"
          className="w-full h-full object-cover"  // **Ensures full coverage and proper scaling of image**
          />
      

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold">Our Cheef</h1>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <i className="fas fa-home text-yellow-500"></i>
            <a href="/" className="text-yellow-500 hover:underline">Home</a>
            <span className="text-gray-400"> &gt; </span> {/* **Breadcrumb separator** */}
            <span>Our cheef</span>
          </p>
        </div>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <OurCheef />
      </Suspense>
      
    </div>
  )
}

export default page
