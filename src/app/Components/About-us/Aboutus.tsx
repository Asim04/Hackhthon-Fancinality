import Image from "next/image"
import  image2 from "../../../../public/image/image2.png"
import  img3 from "../../../../public/image/image3.png"
import  img4 from "../../../../public/image/image4.png"

const Aboutus = () => {
  return (
    <div>

<section className="bg-black text-white py-16 px-6 mt-[120px]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
            <div className="w-[91px] h-[40px]">
            <h1 className="italic text-primaryColor font-GreatVibes size-8 font-normal">
                Aboutus</h1>
            </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className='text-primaryColor leadin-[56] font-bold size-10'>We</span> Create the best foody product
          </h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla urna. 
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>✔️ Lorem nisi elit, et dapibus sit velit.</li>
            <li>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>✔️ Quisque diam pellentesque bibendum non dui.</li>
          </ul>
          <button className= "w-[190px] h-[60px] mt-8 bg-orange-500 text-black px-6 py-3 rounded-[30px] font-semibold">
            Read More
          </button>
        </div>


        {/* Right Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={image2}
            alt="Main Dish"
            width={660}
            height={330}
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="grid grid-rows-2 gap-4">
            <Image
              src={img3}
              width={322}
              height={193}
              alt="Dish 1"
              className="w-full h-full rounded-md object-cover"
            />
            <Image
              src={img4}
              width={322}
              height={104}
              alt="Dish 2"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Aboutus

