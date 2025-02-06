"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import img1 from "../../../../public/MeetOurChheef/Chef card.png";
import img2 from "../../../../public/MeetOurChheef/Card 2.png";
import img3 from "../../../../public/MeetOurChheef/Card 3.png";
import img4 from "../../../../public/MeetOurChheef/Card 4.png";
import img5 from "../../../../public/MeetOurChheef/chef1.png";
import img6 from "../../../../public/MeetOurChheef/chef2.png";
import img7 from "../../../../public/MeetOurChheef/chef7.png";
import img8 from "../../../../public/MeetOurChheef/chef8.png";
import img9 from "../../../../public/MeetOurChheef/chef9.png";
import img10 from "../../../../public/MeetOurChheef/Chef Card 10.png";
import img11 from "../../../../public/MeetOurChheef/chef11.png";
import img12 from "../../../../public/MeetOurChheef/che12.png";
import { chefData, TChef } from "../../../sanity/lib/data";
import { urlFor } from '@/sanity/lib/client';

const OurCheef = () => {
  const [chef, setChef] = useState<TChef[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await chefData();
      setChef(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="py-16" id="menu">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-8 text-[#ffff]">
            <span className="text-primaryColor">Me</span>et Our Chef
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chef.map((chef, index) => (
              <div key={index} className="p-4 rounded shadow-md text-center">
                <Image
                  src={urlFor(chef.imageUrl)?.url() || "/placeholder-chef.jpg"}
                  width={312}
                  height={391}
                  alt={chef.name || "Chef"}
                  className="w-full h-50 object-cover rounded-md"
                />
                <h4 className="text-lg font-bold mt-4 text-white">{chef.name}</h4>
                <p>cheef</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="w-[190px] h-[60px] mt-8 border-2 hover:bg-primaryColor border-[#FF9F0D] text-white px-6 py-3 rounded-[30px] font-semibold">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCheef;