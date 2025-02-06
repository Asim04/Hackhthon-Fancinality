import Image from "next/image"
import img1 from "../../../../public/MeetOurChheef/Chef card.png"
import img2 from "../../../../public/MeetOurChheef/Card 2.png"
import img3 from "../../../../public/MeetOurChheef/Card 3.png"
import img4 from "../../../../public/MeetOurChheef/Card 4.png"

const MeetOurCheef = () => {
  return (
    <div>

<section className="py-16 " id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-8 text-[#ffff] ">
            <span className="text-primaryColor">Me</span>et Our Chef</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className=" p-4 rounded shadow-md text-center">
              <Image 
                src={img1}
                width={312}
                height={391}
               alt="Cupcake"
               className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4 text-black ">Cupcakes</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img2} 
              height={391}
              width={312}
              alt="Salad" 
              className=" rounded-md" />
              <h4 className="text-xl font-bold mt-4">Salads</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image 
              src={img3}
              width={312}
              height={391}
              alt="Pasta" 
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Pasta</h4>
            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">
              <Image
              src={img4} 
              width={312}
              height={391}
              alt="Juice"
              className="w-full h-50 object-cover rounded-md" />
              <h4 className="text-lg font-bold mt-4">Fresh Juices</h4>
            </div>


          </div>

            <div className="flex justify-center">
            <button className= "   w-[190px] h-[60px] mt-8 border-2 hover:bg-primaryColor border-[#FF9F0D] text-white px-6 py-3 rounded-[30px] font-semibold">
            Read More
            </button>
            </div>


        </div>
      </section>
      
    </div>
  )
}

export default MeetOurCheef
