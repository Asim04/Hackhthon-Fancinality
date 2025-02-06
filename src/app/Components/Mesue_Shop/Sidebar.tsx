import React from 'react'
import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: number;
  onPriceRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Sidebar({ 
  isOpen, 
  onClose, 
  categories, 
  selectedCategories, 
  onCategoryToggle, 
  searchQuery, 
  onSearchChange, 
  priceRange, 
  onPriceRangeChange 
}: SidebarProps) {
  return (
    <div 
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:w-1/4 md:bg-gray-100
      `}
    >
      {/* Mobile Close Button */}
      <button 
        onClick={onClose} 
        className="md:hidden absolute top-4 right-4 z-60"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="p-4">
        {/* Filters Sidebar */}
        <h2 className="text-[16px] font-normal mb-4 text-[#828282]">Search Products</h2>
        <input 
          type="text" 
          placeholder="Search Products" 
          value={searchQuery}
          onChange={onSearchChange}
          className="p-2 mb-4 w-full border text-[#828282] border-gray-300 rounded-md"
        />

        <h2 className="text-xl font-bold mb-4 text-[#333333]">Category</h2>
        <ul className="text-lg font-normal text-[#333333] space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryToggle(category)}
              /> 
              {category}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4 text-[#333333]">Filter By Price</h2>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={priceRange}
          onChange={onPriceRangeChange}
          className="w-full" 
        />
        <p>Price Range: ${priceRange}</p>
        
        <h2 className="text-xl font-bold mt-4 mb-4 text-[#333333]">Product Tags</h2>
        <div className="space-y-2 flex flex-col">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Burger</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Pizza</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Drink</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
