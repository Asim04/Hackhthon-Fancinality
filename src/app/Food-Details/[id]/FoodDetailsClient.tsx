"use client"

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Minus, Plus, Star, ShoppingCart, CheckCircle } from "lucide-react";
import Silimar from "@/app/Components/Silimar/Silimar";
import { useState } from "react";
import Footer from "@/app/Components/Footer/Footer";
import Navbar from "@/app/Components/Header/Navbar_singup";
import Common from "@/app/Components/Hero/Common";
import { useCart } from "@/context/CartContext";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';

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
  rating?: number;
}

interface FoodDetailsClientProps {
  food: Food;
}

const FoodDetailsClient: React.FC<FoodDetailsClientProps> = ({ food }) => {
  
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(food.price);
  const [isAdded, setIsAdded] = useState(false);
  
  // Validate food prop
  if (!food || !food.price || !food.image?.asset?._ref) {
    return <div>Invalid food data</div>;
  }
  
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
    const cartItem = {
      ...food,
      quantity,
      totalPrice: totalPrice
    };

    // Use local storage to persist cart between navigation
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = currentCart.findIndex((item: any) => item._id === cartItem._id);

    if (existingItemIndex > -1) {
      // Update existing item
      currentCart[existingItemIndex].quantity += quantity;
      currentCart[existingItemIndex].totalPrice = food.price * currentCart[existingItemIndex].quantity;
    } else {
      // Add new item
      currentCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    // Add to cart context
    addToCart(cartItem);

    // Add to cart pop up functionality
    setIsAdded(true);
    toast.success(`${food.name} added to cart!`, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });

    // Redirect to shopping cart
    router.push('/shopping-cart');

    // Reset added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleBackNavigation = (href: string) => {
    router.push(href);
  };

  const breadcrumbs = [
    { 
      name: 'Home', 
      href: '/',
      onClick: () => handleBackNavigation('/')
    },
    { 
      name: food.category, 
      href: `/category/${food.category}`,
      onClick: () => handleBackNavigation(`/category/${food.category}`)
    },
    { 
      name: food.name, 
      href: '', 
      current: true 
    }
  ];

  const imageUrl = food.image?.asset?._ref 
    ? urlFor(food.image.asset._ref)
    : '/placeholder.png';

  const thumbnailImages = [
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl
  ];

  return (
    <section className="bg-white text-gray-600 body-font overflow-hidden">
      <Toaster position="top-right" />
      <Navbar />
      <Common 
        title={food.name} 
        description={food.description} 
        breadcrumbs={breadcrumbs}
      />

      <div className="container px-5 py-12 sm:py-24 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap lg:w-4/5 mx-auto">
          {/* Thumbnail Images */}
          <div className="flex flex-row pb-4 lg:flex-col gap-4 pr-0 sm:pr-4">
            {thumbnailImages.map((thumbnail, index) => (
              <Image
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={150}
                className="rounded-md w-20 h-28 sm:w-24 sm:h-36 object-cover"
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              alt={food.name}
              src={imageUrl}
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
              ${food.price.toFixed(2)}
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm sm:text-base">
              <span className="flex items-center gap-2 text-primaryColor">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < (food.rating || 0) ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </span>
              <span>| {(food.rating || 0).toFixed(1)} Rating</span>
              <span>| {food.tags?.length || 0} Reviews</span>
            </div>
            <p className="mt-4 text-sm sm:text-base">
              {food.tags?.join(' / ') || 'No tags available'}
            </p>

            {/* Color Options */}
            <div className="flex flex-wrap gap-4 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center gap-2">
                <span>Category:</span>
                <span className="text-sm sm:text-base text-gray-700">
                  {food.category}
                </span>
              </div>

              {/* Size Dropdown */}
              <div className="flex items-center gap-2">
                <span>Availability:</span>
                <span className={`text-sm sm:text-base ${food.available ? 'text-green-600' : 'text-red-600'}`}>
                  {food.available ? 'Available' : 'Not Available'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center sm:justify-end">
              <button 
                onClick={handleAddToCart}
                className={`w-full sm:w-auto text-white bg-primaryColor border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded ${
                  food.available 
                    ? '' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!food.available}
              >
                {food.available ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Silimar />
      <Footer />
    </section>
  );
};

export default FoodDetailsClient;
