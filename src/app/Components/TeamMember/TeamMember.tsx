import Image from "next/image"
import img1 from "../../../../public/Team/Mark Henry (1).png"
import img2 from "../../../../public/Team/Mark Henry (2).png"
import img3 from "../../../../public/Team/Mark Henry (3).png"
import img4 from "../../../../public/Team//Mark Henry (4).png"
import bg from "../../../../public/image/Bg (3).png"

const OurTeam = () => {
  return (
    
    <div className="container mx-auto" >

        <div className= " container mx-auto w-full relative ">
            <Image 

            src={bg}
            alt=""
            className="w-full h-ful object-cover" />

            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h4 className="text-5xl text-center font-bold text-[#ffff]">Team Member</h4>
            <p className="text-[16px] font-normal fon text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-[16px] font-normal fon text-center"> Varius sed pharetra dictum neque massa congue</p>
            </div>
            
        </div>

        


        {/* Top Section: Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white   rounded shadow-md text-center">
                <Image 
                src={img1}
                width={310}
                height={398}
                alt="Restaurant" 
                className="" />
            </div>
            

            <div className="bg-white p-4 rounded shadow-md text-center">

                <Image 
                src={img2}
                width={310}
                height={398}
                alt="Bakery"
                className="" />

            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">

                <Image
                src={img3}
                width={310}
                height={398}
                alt="Fork & Spoon"
                className="" />

            </div>

            <div className="bg-white p-4 rounded shadow-md text-center">

                <Image
                src={img4}
                width={312}
                height={398}
                alt="Wolf Coffee"
                className="" />
            </div>
        
      
        </div>

    </div>
    
  )
}

export default OurTeam
