import Image from "next/image";
import bg1 from "../../../../public/item/Cheef.png";
import bg2 from "../../../../public/item/meemfood.png";
import bg3 from "../../../../public/item/Year of ex.png";
import bg4 from "../../../../public/item/piizaslice.png";

const Absoloute = () => {
  return (
    <div className="relative w-full h-[469px] bg-[url('/item/Group%201000002107.png')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 px-4 text-white">
          {/* Card 1 */}
          <div className="text-center flex flex-col items-center">
            <Image src={bg1} width={120} height={120} alt="Professional Chefs" />
            <h1 className="text-2xl font-bold mt-6 mb-[23px]">Professional Chefs</h1>
            <p className="text-[40px] leading-[48px] font-bold">420</p>
          </div>

          {/* Card 2 */}
          <div className="text-center flex flex-col items-center">
            <Image src={bg2} width={120} height={120} alt="Items Of Food" />
            <h1 className="text-2xl font-bold mt-6 mb-[23px]">Items Of Food</h1>
            <p className="text-[40px] leading-[48px] font-bold">320</p>
          </div>

          {/* Card 3 */}
          <div className="text-center flex flex-col items-center">
            <Image src={bg3} width={120} height={120} alt="Years Of Experienced" />
            <h1 className="text-2xl font-bold mt-6 mb-[23px]">Years Of Experienced</h1>
            <p className="text-[40px] leading-[48px] font-bold">30+</p>
          </div>

          {/* Card 4 */}
          <div className="text-center flex flex-col items-center">
            <Image src={bg4} width={120} height={120} alt="Happy Customers" />
            <h1 className="text-2xl font-bold mt-6 mb-[23px]">Happy Customers</h1>
            <p className="text-[40px] leading-[48px] font-bold">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absoloute;
