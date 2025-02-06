"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { getAllPost, TMenuItem } from '@/sanity/lib/data';
import ProductListing from '../Mesue_Shop/Products';
import Sidebar from '../Mesue_Shop/Sidebar';

const ShopPageContent = ({ initialFood }: { initialFood: TMenuItem[] }) => {
  const [food, setFood] = useState<TMenuItem[]>(initialFood);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(100);

  const categories = ['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza'];

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  // Fetch filtered data when category changes
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = selectedCategories.length === 0 
          ? await getAllPost() 
          : await getAllPost(selectedCategories.join(',')); 
        
        setFood(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };

    fetchFilteredData();
  }, [selectedCategories]);

  const filteredProducts = useMemo(() => {
    return food.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      return matchesSearch && matchesPrice;
    });
  }, [food, searchQuery, priceRange]);

  return (
    <div className="flex relative">
      {/* Mobile Filter Button */}
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed bottom-4 right-4 z-40 bg-primaryColor text-white p-3 rounded-full shadow-lg"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={toggleSidebar} 
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryToggle={(category) => setSelectedCategories(prev => 
          prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        )}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        priceRange={priceRange}
        onPriceRangeChange={(e) => setPriceRange(Number(e.target.value))}
      />

      {/* Products Container */}
      <div className="w-full md:w-3/4 p-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductListing key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No products found matching your search or filters.
          </div>
        )}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" 
        />
      )}
    </div>
  );
};

export default ShopPageContent;