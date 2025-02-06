"use client"

import React from 'react';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from '@/context/CartContext';

interface Food {
  _id: string;
  originalPrice: number;
  available: boolean;
  _type: string;
  description: string;
  tags: string[];
  price: number;
  name: string;
  image: {
    asset: {
      _ref: string
    }
  };
  category: string;
}

interface FoodDetailsContentProps {
  food: Food;
}

const FoodDetailsContent: React.FC<FoodDetailsContentProps> = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(food.price);
  const { addToCart } = useCart();

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(food.price * newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(food.price * newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      _id: food._id,
      name: food.name,
      price: food.price,
      image: food.image?.asset?._ref 
        ? { asset: { _ref: urlFor(food.image) } }
        : { asset: { _ref: '/placeholder.png' } },
      quantity: 1,
      totalPrice: food.price,
      category: food.category
    });
  }

  return (
    <div key={food._id} className="container px-5 py-12 sm:py-24 mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap lg:w-4/5 mx-auto">
        {/* Main Product Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <Image
            alt="Product Image"
            src={food.image?.asset?._ref ? urlFor(food.image.asset) : '/placeholder.png'}
            layout="intrinsic"
            width={500}
            height={500}
            className="w-full h-64 sm:h-80 lg:h-auto object-cover object-center rounded"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
          <h2 className="rounded-lg py-1 px-4 inline bg-primaryColor text-sm title-font text-gray-500 tracking-widest">
            {food.available ? 'In Stock' : 'Out of Stock'}
          </h2>
          <h1 className="text-[#333333] text-2xl sm:text-4xl title-font font-bold mb-2">
            {food.name}
          </h1>
          <p className="leading-relaxed text-sm sm:text-base border-b pb-2">
            {food.description}
          </p>
          <span className="mt-4 font-bold text-2xl sm:text-3xl text-gray-900 block">
            {totalPrice}.00$
          </span>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm sm:text-base">
            <span className="flex items-center gap-2 text-primaryColor">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span>| 5.0 Rating </span>
            <span>| 22 Reviews</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            {/* Quantity Control */}
            <div className="flex items-center gap-4">
              <button 
                onClick={decrementQuantity} 
                className="bg-gray-200 p-2 rounded-full"
              >
                <Minus />
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button 
                onClick={incrementQuantity} 
                className="bg-gray-200 p-2 rounded-full"
              >
                <Plus />
              </button>
            </div>

            {/* Action Button */}
            <div className="flex justify-center sm:justify-end">
              <button 
                onClick={handleAddToCart}
                className="w-full sm:w-auto text-white bg-primaryColor border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsContent;
