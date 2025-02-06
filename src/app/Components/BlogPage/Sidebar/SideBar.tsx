import Image from "next/image";
import img from "../../../../../public/About/About2.png"
import img2 from "../../../../../public/About/About3.png"

const Sidebar = () => {
    return (
      <div className="w-full md:w-1/4 bg-white p-4 border-r border-gray-200">
        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={img}
            alt="Profile"
            className="rounded-full w-20 h-20 mb-4"
          />
          <h2 className="font-bold text-lg">Prince Miyako</h2>
          <p className="text-sm text-gray-500">Blogger/Photographer</p>
        </div>
  
        {/* Recent Posts */}
        <div className="mt-6">
          <h3 className="font-bold text-xl mb-4">Recent Post</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Image src={img2} alt="Post" className="w-16 h-16 mr-4" />
              <div>
                <p className="font-semibold text-gray-800">Lorem Ipsum</p>
                <span className="text-sm text-gray-500">June 22, 2020</span>
              </div>
            </li>
            {/* Add more posts here */}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  