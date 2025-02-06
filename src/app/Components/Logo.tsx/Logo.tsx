

import Image from "next/image"
import img1 from "../../../../public/Logo/image1.png"
import img2 from "../../../../public/Logo/image2.png"
import img3 from "../../../../public/Logo/img3.png"
import img4 from "../../../../public/Logo/img4.png"
import img5 from "../../../../public/Logo/img5.png"
import img6 from "../../../../public/Logo/img6.png"


const Logo = () => {
  return (
    <div className="bg-white">
        <h1 className="text-[18px] text-center font-normal text-[#333333] mb-[53px]">Partners & Clients</h1>
        <h4 className="text-5xl text-center font-bold text-[#000000] mb-[53px]">We work with the best pepole</h4>
        {/* Top Section: Logos */}
        <div className="py-8 border-b border-gray-300 w-[1320] h-[299] mb-[54px]">
          <div className="container mx-auto flex justify-center gap-16 flex-wrap">
            <Image 
            src={img1}
            width={150}
            height={128}
            alt="Restaurant" 
            className="" />

            <Image 
            src={img2}
            width={100}
            height={128}
            alt="Bakery"
            className="" />

            <Image
            src={img3}
            width={70}
            height={100}
            alt="Fork & Spoon"
            className="" />

            <Image
            src={img4}
            width={100}
            height={128}
            alt="Wolf Coffee"
            className="" />

            <Image
            src={img5}
            width={120}
            height={128}
            alt="Bistro"
            className=""/>

            <Image 
            src={img6}
            width={80}
            height={100}
            alt="Bakery 2"
            className="" />

          </div>
        </div>
      
    </div>
  )
}

export default Logo
