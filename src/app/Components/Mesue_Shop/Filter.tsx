import React from 'react'

const Filter = () => {
  return (
    <div className='container mx-auto flex p-4'>
         {/* Filters Sidebar */}
              <div className="w-1/4 p-4 bg-gray-100">
                <h2 className="text-[16px] font-normal mb-4 text-[#828282]">Search Products</h2>
                <input 
                  type="text" 
                  placeholder="Search Products" 
                  className="p-2 mb-4 w-full border border-gray-300 rounded-md"
                />
        
                <h2 className="text-xl font-bold mb-4 text-[#333333]">Category</h2>
                <ul className="text-lg font-normal text-[#333333] space-y-2">
                  <li><input type="checkbox" /> Sandwiches</li>
                  <li><input type="checkbox" /> Burger</li>
                  <li><input type="checkbox" /> Chicken Chup</li>
                  <li><input type="checkbox" /> Drink</li>
                  <li><input type="checkbox" /> Pizza</li>
                </ul>
        
                <h2 className="text-xl font-bold mt-4 mb-4 text-[#333333]">Filter By Price</h2>
                <input type="range" min="0" max="100" className="w-full" />
                
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

export default Filter