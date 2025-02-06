
import Image from 'next/image';
import img1 from "../../../../public/shopitem/Rectangle 8874.png"




const Menue_shop = () => {
  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto mb-32">
      
      <div >
        <Image
          src={img1}
          width={448}
          height={626}
          alt="Starter Dish"
          className="w-full h-auto rounded-lg object-cover ml-[3px]"
        />
      </div>
      <div>
        <h2 className="text-[48px] font-bold text-slate-300 mb-4 leadinf-[26px]">Starter Menu</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Alder Grilled Chinook Salmon',
              description: 'Toasted French bread topped with romano, cheddar',
              price: '32$',
              calories: '560 CAL',
            },
            {
              title: 'Berries and creme tart',
              description: 'Gorgonzola, ricotta, mozzarella, taleggio',
              price: '43$',
              calories: '700 CAL',
            },
            {
              title: 'Tormentoso Bush Pizza Pintoage',
              description: 'Ground cumin, avocados, peeled and cubed',
              price: '14$',
              calories: '1000 CAL',
            },
            {
              title: 'Spicy Vegan Potato Curry',
              description: 'Spreadable cream cheese, crumbled blue cheese',
              price: '35$',
              calories: '560 CAL',
            },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-start">

              <div>
                
                <div className="wid-[32px] h-[28px]">
                <h4 className="text-2xl font-bold text-white hover:text-primaryColor">{item.title}</h4>
                </div>

                <div className="w-[368px] h-[24px] mt-[7px]">
                <p className="text-[13px] font-normal text-white">{item.description}</p>
                </div>

                <div className="w[63px] h-[24px]">
                <p className="text-base textwhite font-normal mt-[8px]">{item.calories}</p>
                </div>

              </div>

              <span className="text-lg font-bold text-orange-500 mb-[40px]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};



export default Menue_shop
