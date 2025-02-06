import Image from "next/image";
import img from "../../../../public/Shop-Detail/Rectangle 8883.png";
import img1 from "../../../../public/Shop-Detail/Rectangle 8884.png";
import img2 from "../../../../public/Shop-Detail/Rectangle 8885.png";
import img3 from "../../../../public/Shop-Detail/Rectangle 8886.png";
import img4 from "../../../../public/Shop-Detail/Rectangle 8887.png";
import { Star } from "lucide-react";

const Practise = () => {
  const thumbnailImages = [img1, img2, img3, img4];

  return (
    <section className="bg-white text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 sm:py-24 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap lg:w-4/5 mx-auto">
          {/* Thumbnail Images */}
          <div className="flex flex-row pb-4 lg:flex-col gap-4 pr-0 sm:pr-4">
            {thumbnailImages.map((thumbnail, index) => (
              <Image
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                layout="intrinsic"
                width={100}
                height={150}
                className="rounded-md w-20 h-28 sm:w-24 sm:h-36 object-cover"
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              alt="Product Image"
              src={img}
              layout="intrinsic"
              width={500}
              height={500}
              className="w-full h-64 sm:h-80 lg:h-auto object-cover object-center rounded"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
            <h2 className="rounded-lg py-1 px-4 inline bg-primaryColor text-sm title-font text-gray-500 tracking-widest">
              In Stock
            </h2>
            <h1 className="text-[#333333] text-2xl sm:text-4xl title-font font-bold mb-2">
              Yummy Chicken Chup
            </h1>
            <p className="leading-relaxed text-sm sm:text-base border-b pb-2">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric.
            </p>
            <span className="mt-4 font-bold text-2xl sm:text-3xl text-gray-900 block">
              $58.00
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-4 text-sm sm:text-base">
              <span className="flex items-center gap-2 text-primaryColor">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span>| 5.0 Rating</span>
              <span>| 22 Reviews</span>
            </div>
            <p className="mt-4 text-sm sm:text-base">Dictum / Cursus / Risus</p>

            {/* Color Options */}
            <div className="flex flex-wrap gap-4 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center gap-2">
                <span>Color:</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>

              {/* Size Dropdown */}
              <div className="flex items-center gap-2">
                <span>Size:</span>
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm sm:text-base pl-3 pr-8">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center sm:justify-end">
              <button className="w-full sm:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practise;
