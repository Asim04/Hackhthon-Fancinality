import Image from "next/image"
import img1 from "../../../../public/Silimar/Mask Group (7).png"
import img2 from "../../../../public/Silimar/Mask Group (8).png"
import img3 from "../../../../public/Silimar/Mask Group (9).png"
import img4 from "../../../../public/Silimar/Mask Group (10).png"

const Silimar = () => {
  return (

<div>

    <section className="py-16 bg-gray-50" id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold  mb-8 text-[#333333] font-H">
            <span className="text-primaryColor text-5xl font-bold "></span>Similar Products</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
                src={img1}
                width={312}
                height={287}
               alt="Cupcake"
               className=" rounded-md" />
              <h4 className="text-lg font-bold mt-4 text-black ">Fresh Lime</h4>
              <p className="text-lg font-normal text-primaryColor">$38.00 <span>$45.00</span></p>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img2} 
              height={306}
              width={329}
              alt="Salad" 
              className=" rounded-md" />
              <h4 className="text-lg font-bold mt-4  text-[#333333] ">Chocolate Muffin</h4>
              <p className="text-lg text-primaryColor font-normal">$28.00</p>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={img3}
              width={306}
              height={329}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4  text-[#333]">Burger</h4>
              <p className="text-lg text-primaryColor font-normal">$21.00</p>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img4} 
              alt="Juice"
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4 text-[#333333]">Fresh Lime</h4>
              <p className="text-lg text-primaryColor font-normal">$21.00</p>
            </div>
          </div>
        </div>
      </section>
      
</div>

  )
}

export default Silimar
