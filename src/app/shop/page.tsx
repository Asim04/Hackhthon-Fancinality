// Server Component (Removes "use client")
import React from 'react';
import ProductListing from '../Components/Mesue_Shop/Products';
import Navbar from '../Components/Header/Navbar_singup';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Mesue_Shop/Sidebar';
import { getAllPost, TMenuItem } from '@/sanity/lib/data';
import ShopPageContent from '../Components/Mesue_Shop/Shoppingcontent';

// Server Component: Fetches data initially and passes it to the Client Component
const ShopPage = async () => {
  const response = await getAllPost(); // Fetch all products from Sanity
  const food: TMenuItem[] = Array.isArray(response) ? response : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Our Shop</h1>
        <ShopPageContent initialFood={food} />
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;