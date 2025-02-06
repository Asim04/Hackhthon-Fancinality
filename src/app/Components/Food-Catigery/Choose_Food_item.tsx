import Image from "next/image"
import img1 from "../../../../public/ChooseFoodItem/unsplash_-lHZUkiWM74 (1).png"
import img2 from "../../../../public/ChooseFoodItem/unsplash_dphM2U1xq0U (2).png"
import img3 from "../../../../public/ChooseFoodItem/unsplash_MRHyv-hHxgk (3).png"
import img4 from "../../../../public/ChooseFoodItem/unsplash_q54Oxq44MZs (4).png"

const Choose_Food_item = () => {
  return (

<div>

    <section className="py-16 bg-gray-50" id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-8 text-[#333333] font-H">
            <span className="text-primaryColor text-5xl font-bold ">Ch</span>Choose Food Iteam</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
                src={img1}
                width={302}
                height={328}
               alt="Cupcake"
               className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4 text-black ">Cupcakes</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img2} 
              height={306}
              width={329}
              alt="Salad" 
              className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4">Salads</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={img3}
              width={306}
              height={329}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Pasta</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img4} 
              alt="Juice"
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Fresh Juices</h4>
            </div>
          </div>
        </div>
      </section>
      
</div>

  )
}

export default Choose_Food_item
