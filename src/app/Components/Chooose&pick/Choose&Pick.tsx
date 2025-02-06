"use client";
import React, { useState } from 'react';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin']
});

const ChoosePick = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { id: 1, label: 'Breakfast' },
    { id: 2, label: 'Lunch' },
    { id: 3, label: 'Dinner' },
    { id: 4, label: "Dessert", content: "Dessert" },
    { id: 5, label: "Drink", content: "Drink" },
    { id: 5, label: "Snack", content: "Snack" },
    { id: 7, label: "Soups", content: "Soups" },
  ];

  return (
    <div className="w-full">
      <div className="px-[20px] sm:px-[60px] py-[60px] max-w-[1320px] lg:h-[800px] mx-auto">
        <div className="mt-0">
          <div className="flex flex-col items-center">
            <h5
              className={`${greatVibes.className} text-[32px] text-[#FF9F0D] font-normal `}
            >
              Choose & pick
            </h5>
            <h2
              className="text-white text-[48px] font-bold text-center"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <span className="text-[#FF9F0D]">Fr</span>om Our Menu
            </h2>
          </div>

          <div className="flex md:flex-row flex-col gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-2 text-center font-medium text-lg ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-4 text-gray-700 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              <div className="col-span-full md:col-span-1 w-[100%] lg:max-w-[300px] h-[330px] relative group cursor-pointer">
                <Image
                  src="/sec6dish.png"
                  layout="fill"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center flex flex-col gap-[5px]">
                    <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                      Save 30%
                    </div>
                    <div className="rounded-[6px] bg-[#FF9F0D] text-white px-4 py-3 w-[250px] text-[20px] font-bold">
                      Fast Food Dish
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="flex gap-[20px] cursor-pointer">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/meatballs.png"
                      width={80}
                      height={80}
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h5 className="font-bold text-[20px]">Lettuce Leaf</h5>
                    <p className="m-0 text-[14px] font-normal">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                      12.5$
                    </p>
                  </div>
                </div>
                <div className="flex gap-[20px] cursor-pointer">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/meatballs.png"
                      width={80}
                      height={80}
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h5 className="font-bold text-[20px]">Lettuce Leaf</h5>
                    <p className="m-0 text-[14px] font-normal">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                      12.5$
                    </p>
                  </div>
                </div>
                <div className="flex gap-[20px] cursor-pointer">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/meatballs.png"
                      width={80}
                      height={80}
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h5 className="font-bold text-[20px]">Lettuce Leaf</h5>
                    <p className="m-0 text-[14px] font-normal">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                      12.5$
                    </p>
                  </div>
                </div>
                <div className="flex gap-[20px] cursor-pointer">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/meatballs.png"
                      width={80}
                      height={80}
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h5 className="font-bold text-[20px]">Lettuce Leaf</h5>
                    <p className="m-0 text-[14px] font-normal">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                      12.5$
                    </p>
                  </div>
                </div>
                <div className="flex gap-[20px] cursor-pointer">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src="/meatballs.png"
                      width={80}
                      height={80}
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h5 className="font-bold text-[20px]">Lettuce Leaf</h5>
                    <p className="m-0 text-[14px] font-normal">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p className="m-0 font-bold text-[18px] text-[#FF9F0D]">
                      12.5$
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0 text-white">{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePick;