import React from 'react'
import Image from 'next/image';
import img3 from "../../../../public/Footer_pic/unsplash.png"
import img4 from "../../../../public/Footer_pic/unsplash (1).png"
import img5 from "../../../../public/Footer_pic/unsplash_m.png"
import img6 from "../../../../public/item/Group (3).png"
import img7 from "../../../../public/item/Group (2).png"
import img9 from "../../../../public/image/image4.png"
import imge10 from "../../../../public/item/Hamburger.png"
import imge11 from "../../../../public/item/Vector.png"


const Our = () => {
  
  
   
  return (

    
    
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Images (6 images in total) */}
        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <Image
              src={img3}
              alt="Food 1"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={img4}
              alt="Food 2"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={img5}
              alt="Food 3"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={img6}
              alt="Food 4"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={img7}
              alt="Food 5"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={img9}
              alt="Food 6"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Extraordinary Taste <span className="text-orange-500">And Experience</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla.
          </p>

          {/* 30+ Years of Experience */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl font-bold text-orange-500">30+</div>
            <div className="text-4xl font-bold text-gray-300">Years of Experience</div>
            <div className="relative">
              <div className="absolute top-1 left-0 w-full h-1 bg-yellow-500"></div>
            </div>
          </div>

          {/* Fast Food, Lunch, Dinner Sections */}
          <div className="flex space-x-8 mt-6">
            {/* Fast Food */}
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src={imge10}
                  alt="Fast Food"
                  width={55}
                  height={54}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-orange-500">Fast Food</span>
            </div>

            {/* Lunch */}
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src={img7}
                  alt="Lunch"
                  width={56}
                  height={54}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-orange-500">Lunch</span>
            </div>

            {/* Dinner */}
            <div className="text-center">
              <div className="relative mb-4">
                <Image
                  src={imge11}
                  alt="Dinner"
                  width={56}
                  height={54}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-orange-500">Dinner</span>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  


    

  )
};



export default Our
