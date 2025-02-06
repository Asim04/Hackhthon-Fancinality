import Image from 'next/image'
import imgb from "../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"

import About2 from '../Components/About-us/About2'
import Footer from '../Components/Footer/Footer'

import Navbar_singup from '../Components/Header/Navbar_singup'

import OurTeam from '../Components/TeamMember/TeamMember'
import OurFoodMenue from '../Components/OurFoodMenu/OurFoodMenue'
import WhyChoseUs from '../Components/WhyChoseUs/WhyChoseUs'


const page = () => {
  const features = [
    {
      title: 
      "Best Cheef",
      description: 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.",
      image: "/About/Student (1).png"
    },
    {
      title: 
      "120 Item food",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.",
      image: "/About/Coffee (3).png"
    },
    {
      title: 
      "Clean Environmen",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque.",
      image: "/About/Student (1).png"
    },
  ];

  const SectionImage = "/About/centerimage.png"

  return (
    <div className="min-w-full overflow-x-hidden">
        
        <Navbar_singup />

        {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-cover bg-center"> 
        <Image
          src={imgb}
          width={1920}
          height={410}
          alt="Hero Background"
          className="w-full h-full object-cover"  
          priority={true}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold text-[#ffff] text-center px-4">Obout Us</h1>
          <p className="mt-2 text-lg flex items-center space-x-2">
            <i className="fas fa-home text-yellow-500"></i>
            <a href="/" className="text-[#fff] hover:underline hover:text-primaryColor">Home</a>
            <span className="text-gray-400"> &gt; </span>
            <span className='text-primaryColor underline-offset-1'>about</span>
          </p>
        </div>
      </div>

      {/* Responsive Wrapper for Components */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <About2 />
        <WhyChoseUs features={features} SectionImage={SectionImage} />  
        <OurTeam />
        <OurFoodMenue />
      </div>

      <Footer />
    </div>
  )
}

export default page
