import Image from "next/image"

interface Feature {
    title: string,
    description: string,
    image: string

}

interface WhyChoseUsProps {
    features: Feature[],
    SectionImage: string
}

const WhyChoseUs: React.FC<WhyChoseUsProps> = ({ features, SectionImage }) => {
  return (
    
      <section className='max-w-7xl mx-auto px-8 py-4 pb-[122px] bg-white'>
        {/* Heading */}
        <div className='text-center mb-8'>
            <h2 className='text-5xl font-bold text-[#3333]'>Why Choose Us</h2>
            <p className='text-base font-normal text-[#4F4F4F]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        <div className="mb-8 flex justify-center">
            <Image
             src={SectionImage}
             width={500}
             height={500}
             layout="resposive"
             alt=""
             className="w-full mx-auto" />
             
        </div>

        {/* Feature */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, index)=>(
                <div key={index} className='text-center'>
                    <div className='mb-4'>
                        {/* Dynamic Imge */}
                        <Image 
                            src={feature.image}
                            alt=""
                            width={80}
                            height={80} 
                            className="mx-auto rounded-full"
                        />

                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#333333]">
                        {feature.title}

                    </h3>

                    <p className="text-[16px] leading-6 text-[#4F4F4F] ">
                        {feature.description}
                    </p>
                </div>
            ))

            }

        </div>


      </section>
    
  )
}

export default WhyChoseUs
