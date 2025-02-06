    "use client";

import Image from 'next/image';
import imgb from "../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"
import Menue_shop from '../Components/Mesue_Shop/Menue_shop'
import MainCourse from '../Components/Mesue_Shop/MainCouse'
import React, { useState } from 'react';
import Mobilebar from '../Components/Mobilebar/Mobilebar';
import Desert from '../Components/Mesue_Shop/Desert';
import Drink from '../Components/Mesue_Shop/Drink';
import Logo from '../Components/Logo.tsx/Logo';
import Footer from '../Components/Footer/Footer';
import { Menu, X, Search } from 'lucide-react';

const HeroComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-yellow-500">Food</span>tuck
        </h1>
        
        {/* Desktop Links */}
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
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-[27px] border-[1px] bg-gray-800 text-white"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-[27px] text-white">Search</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-yellow-500">Food</span>tuck
            </h1>
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col items-center space-y-6 mt-10 text-white">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/menu" className="hover:text-yellow-500">Menu</a></li>
            <li><a href="/blog" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/shop" className="hover:text-yellow-500">Shop</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>

          {/* Mobile Search */}
          <div className="flex flex-col items-center space-y-4 mt-10 px-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="p-3 w-full rounded-[27px] border-[1px] bg-gray-800 text-white pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-yellow-500 px-6 py-3 rounded-[27px] text-white w-full max-w-md">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center">
        <Image
          src={imgb}
          width={1920}
          height={410}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold">Our Menu</h1>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <a href="/" className="text-yellow-500 hover:underline">Home</a>
            <span className="text-gray-400"> &gt; </span>
            <span>Menu</span>
          </p>
        </div>
      </div>

      {/* Other Components */}
      <Menue_shop />
      <MainCourse />
      <Desert />
      <Drink />
      <Logo />
      <Footer />
    </div>
  );
};

export default HeroComponent;
