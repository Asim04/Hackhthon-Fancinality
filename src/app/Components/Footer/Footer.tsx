import Image from "next/image";
import footer from "../../../../public/Footer_pic/Footer.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../../../../public/item/Group (2).png"
import img3 from "../../../../public/item/Group (3).png"
import img4 from "../../../../public/item/Group (1).png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-8">
        {" "}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {" "}
          <div>
            {" "}
            <h3 className="text-xl font-bold mb-4">About Us</h3>{" "}
            <p className="text-gray-400 mb-4">
              {" "}
              Corporate clients and leisure travelers rely on GroundLink for
              dependable, safe, and professional chauffeured car service in
              major cities across the world.{" "}
            </p>{" "}
            <p className="text-gray-400">
              Opening Hours: Mon-Sat: 8:00-6:00, Sun: Closed
            </p>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>{" "}
            <ul className="text-gray-400">
              {" "}
              <li className="mb-2">
                <a href="#">About</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">News</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Partners</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Team</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Menu</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Contacts</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-xl font-bold mb-4">Help?</h3>{" "}
            <ul className="text-gray-400">
              {" "}
              <li className="mb-2">
                <a href="#">FAQ</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Terms & Conditions</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Reporting</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Documentation</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Support Policy</a>
              </li>{" "}
              <li className="mb-2">
                <a href="#">Privacy</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-xl font-bold mb-4">Recent Post</h3>{" "}
            <ul className="text-gray-400">
              {" "}
              <li className="mb-2">
                {" "}
                <a href="#">
                  {" "}
                  <Image
                    className="inline-block w-12 h-12 mr-2"
                    src={img4}
                    alt="Post 1"
                  />{" "}
                  Keep Your Business - 20 Feb 2022{" "}
                </a>{" "}
              </li>{" "}
              <li className="mb-2">
                {" "}
                <a href="#">
                  {" "}
                  <Image


                    className="inline-block w-12 h-12 mr-2"
                    src={img3}
                    alt="Post 2"
                  />{" "}
                  Keep Your Business - 20 Feb 2022{" "}
                </a>{" "}
              </li>{" "}
              <li className="mb-2">
                {" "}
                <a href="#">
                  {" "}
                  <Image
                    className="inline-block w-12 h-12 mr-2"
                    src={img1}
                    alt="Post 3"
                  />{" "}
                  Keep Your Business - 20 Feb 2022{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container mx-auto px-4 mt-8 text-center bg-primaryColor">
          {" "}
          <p className="text-black mt-8 ">
            © 2022 by Muhammad Asim khan. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4"> 
            <a href="#" className="text-gray-400 bg-white rounded-[2px] hover:text-black p-2">
                <FaFacebookF /></a> 
                
                <a href="#" className="text-gray-400  bg-white rounded-[2px] p-2 hover:text-black">
                    <FaTwitter /></a> 
                    
                <a href="#" className="text-gray-400  bg-white rounded-[2px] p-2 hover:text-black">
                    
                    <FaInstagram /></a> <a href="#" className="text-gray-400  bg-white rounded-[2px] p-2 hover:text-black">
                        <FaLinkedinIn /></a> </div>

                        
        <Image
            src={footer}
            width={5}
            height={5}
            className="img-fluid absolute top- right-1  transform rotate-0 opacity-50 "
            alt=""
        />
        </div>{" "}

        


      </footer>
    </div>
  );
};

export default Footer;
