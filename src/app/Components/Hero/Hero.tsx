import React from 'react'
import Image from 'next/image';
import Image1 from "../../../../public/image/Image1.png"

const Hero = () => {
  return (
    <div>

    <section className=" wrapper bg-black text-white py-20 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className=" wrapper text-center md:text-left md:w-1/2 lg:w-[472px] lg:ml-[150px] space-y-4">
          <p className="italic text-yellow-500 font-GreatVibes "
          >
            its Quick & Amazing!</p>

          <h1 className="text-[60px] font-bold leading-[60px]">
            <span className='text-primaryColor'>Th</span>e Art of Speed Food Quality
          </h1>

          <p className="text-gray-400">
            Learn from the best chefs and experience amazing flavors.
          </p>

          <button className="bg-yellow-500 text-black px-6 py-2 rounded-3xl mt-4">
            See Menu
          </button>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src={Image1} 
            width={624}
            height={133}
            alt="Food Dish"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>


      
    </div>
  )
}

export default Hero
