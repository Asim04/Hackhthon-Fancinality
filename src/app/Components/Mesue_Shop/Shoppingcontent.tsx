// components/Mesue_Shop/ShopPageContent.jsx
"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { getAllPost, TMenuItem } from '@/sanity/lib/data';
import ProductListing from './Products';
import Sidebar from './Sidebar';

const ShopPageContent = ({ initialFood }: { initialFood: TMenuItem[] }) => {
  const [food, setFood] = useState<TMenuItem[]>(initialFood);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = ['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza'];

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  // Filter ya category change hone par data fetch karo aur page reset karo
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = selectedCategories.length === 0 
          ? await getAllPost() 
          : await getAllPost(selectedCategories.join(','));
        setFood(Array.isArray(response) ? response : []);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error fetching filtered data:', error);
      }
    };

    fetchFilteredData();
  }, [selectedCategories]);

  // Filter products based on search aur price
  const filteredProducts = useMemo(() => {
    return food.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      return matchesSearch && matchesPrice;
    });
  }, [food, searchQuery, priceRange]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Dynamic pagination numbers (agar total pages 15 se zyada hain, toh maximum 15 buttons dikhayenge)
  const paginationNumbers = useMemo(() => {
    let startPage, endPage;
    if (totalPages <= 15) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // currentPage ke aas-paas 15 pages show karne ke liye (current ko center mein rakhne ki koshish)
      startPage = Math.max(1, currentPage - 7);
      endPage = startPage + 14;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - 14;
      }
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [totalPages, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="flex relative">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 right-4 z-40 bg-primaryColor text-white p-3 rounded-full shadow-lg"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Sidebar for filtering */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryToggle={(category) =>
          setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
          )
        }
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        priceRange={priceRange}
        onPriceRangeChange={(e) => setPriceRange(Number(e.target.value))}
      />

      {/* Products Container */}
      <div className="w-full md:w-3/4 p-4">
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <ProductListing key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No products found matching your search or filters.
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          >
            First
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          >
            Prev
          </button>

          {paginationNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNumber
                  ? 'bg-primaryColor text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          >
            Last
          </button>
        </div>
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
