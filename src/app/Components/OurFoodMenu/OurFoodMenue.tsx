"use client"
import React, { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: string;
}

const FoodMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');

  const tabs = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack'];

  const menuItems: MenuItem[] = [
    
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: 560,
      price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },

    {
        name: 'Alder Grilled Chinook Salmon',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: 560,
        price: '32$',
    },


    

    
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 pt-[120px] bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-[#333333]">Our Food Menu</h1>
        <div className='w-[418px] h-[48px] mx-auto '>
        <p className="text-[15px] font-normal leading-6 text-[#4F4F4F] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 border-b mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg px-4 py-2 font-medium ${
              activeTab === tab
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid md:grid-cols-2 gap-6 mt-[56px] ">
        {/* <div className='w-1320px'></div> */}
        {menuItems.map((item, index) => (
          <div key={index} className="flex justify-between items-start border-b pb-4">
            <div className=''>
              <h3 className="text-2xl font-bold text-[#333333]">{item.name}</h3>
              <p className="text-[16px] font-normal leading-[24px] text-[#4F4F4F]">{item.description}</p>
              <p className="text-[#828282] text-[16px] font-normal leading-[24px]">{item.calories} CAL</p>
            </div>
            <p className="text-primaryColor font-bold">{item.price}</p>
          </div>
        ))}
      </div>

      {/* View Menu Button */}
      <div className="text-center mt-6">
        <button className="px-6 py-2 border-2 border-primaryColor text-primaryColor rounded-md hover:bg-primaryColor">
          View menu
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;
