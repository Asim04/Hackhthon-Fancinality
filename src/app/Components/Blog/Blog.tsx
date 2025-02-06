import Image from "next/image";
import img1 from "../../../../public/Blog/img1.png";
import img2 from "../../../../public/Blog/img2.png";
import img3 from "../../../../public/Blog/img3.png";
import { MessageSquareMore, Share2, ThumbsUp } from "lucide-react";

const Blog = () => {
  return (
    <section className="py-12 " id="menu">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
          <span className="text-primaryColor">La</span>test News & Blog
        </h3>

        {/* Blog Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Blog Card 1 */}
          <div className=" p-4 rounded-md shadow-md flex flex-col h-full">
            <Image
              src={img1}
              width={423}
              height={394}
              alt="Blog Image 1"
              className="rounded-md"
            />
            <p className="text-primaryColor text-[16px] mt-6 mb-4">
              10 February 2022
            </p>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h4>
            <div className="flex justify-between mt-auto">
              <p className="text-[16px] text-white cursor-pointer">Learn More</p>
              <div className="flex gap-2">
                <ThumbsUp className="text-white" />
                <MessageSquareMore className="text-primaryColor" />
                <Share2 className="text-white" />
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className=" p-4 rounded-md shadow-md flex flex-col h-full">
            <Image
              src={img2}
              width={423}
              height={394}
              alt="Blog Image 2"
              className="rounded-md"
            />
            <p className="text-primaryColor text-[16px] mt-6 mb-4">
              10 February 2022
            </p>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </h4>
            <div className="flex justify-between mt-auto">
              <p className="text-[16px] text-white cursor-pointer">Learn More</p>
              <div className="flex gap-2">
                <ThumbsUp className="text-white" />
                <MessageSquareMore className="text-primaryColor" />
                <Share2 className="text-white" />
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className=" p-4 rounded-md shadow-md flex flex-col h-full">
            <Image
              src={img3}
              width={423}
              height={394}
              alt="Blog Image 3"
              className="rounded-md"
            />
            <p className="text-primaryColor text-[16px] mt-6 mb-4">
              10 February 2022
            </p>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Curabitur Rutrum Velit Ac Congue Malesuada
            </h4>
            <div className="flex justify-between mt-auto">
              <p className="text-[16px] text-white cursor-pointer">Learn More</p>
              <div className="flex gap-2">
                <ThumbsUp className="text-white" />
                <MessageSquareMore className="text-primaryColor" />
                <Share2 className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
