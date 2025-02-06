import React from 'react'
import Image from 'next/image'
import img2 from "../../../../public/image/img2.2.png"
import imge3 from "../../../../public/image/imga32.3.png"
import img4 from "../../../../public/image/img3.3.png"
import img5 from "../../../../public/image/img5.png"

const Menu_section = () => {
  return (
    <div>

         
    <section className="bg-black text-white py-16 px-6">
      <main className="container mx-auto text-center">
       <h2 className="text-4xl font-bold mb-8">
         Choose & Pick <span className="text-orange-500">From Our Menu</span>
       </h2>
   
       {/* Menu Categories */}
       <div className="mb-12">
         <div className="flex justify-center space-x-12 text-lg font-semibold">
           <div className="text-orange-500">Breakfast</div>
           <div className="text-white">Lunch</div>
           <div className="text-white">Dinner</div>
           <div className="text-white">Dessert</div>
           <div className="text-white">Drink</div>
           <div className="text-white">Snack</div>
           <div className="text-white">Soups</div>
         </div>
       </div>
   
       {/* Menu Items */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* Left Side - One large image */}
         <div className="flex flex-col justify-center items-center">
           <div className="w-full h-auto bg-gray-800 p-4 rounded-lg text-center mb-6">
             <Image
               src={img2}
               alt="Lettuce Leaf"
               width={500}
               height={350}
               className="w-[366px] h-[362px] rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Lettuce Leaf</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
         </div>
   
         {/* Right Side - Grid */}
         <div className="grid grid-cols-2 gap-6">
           {/* Menu Item 1 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={imge3}  
               alt="Glow Cheese"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Glow Cheese</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$14.5</p>
           </div>
   
           {/* Menu Item 2 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={img2}
               alt="Fresh Breakfast"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Fresh Breakfast</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$14.5</p>
           </div>
   
           {/* Menu Item 3 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={img4}
               alt="Mild Butter"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Mild Butter</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
   
           {/* Menu Item 4 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={img5}
               alt="Slice Beef"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Slice Beef</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
   
           {/* Menu Item 5 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={img2}
               alt="Mushroom Pizza"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Mushroom Pizza</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
   
           {/* Menu Item 6 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={imge3}
               alt="Fresh Bread"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Fresh Bread</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
   
           {/* Menu Item 7 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={img4}
               alt="Italian Pizza"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Italian Pizza</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$14.5</p>
           </div>
   
           {/* Menu Item 8 */}
           <div className="bg-gray-800 p-4 rounded-lg text-center">
             <Image
               src={imge3}
               alt="Lettuce Leaf"
               width={300}
               height={200}
               className="w-full h-auto rounded-lg object-cover mb-4"
             />
             <h3 className="text-xl font-bold text-white mb-2">Lettuce Leaf</h3>
             <p className="text-gray-400 mb-4">Lacus nisi, et ac dapibus velit in consequat.</p>
             <p className="text-orange-500 text-xl">$12.5</p>
           </div>
         </div>
       </div>
  </main>
</section>


    </div>
  )
}

export default Menu_section
