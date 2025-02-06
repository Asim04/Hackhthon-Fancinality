import React from "react"
import Image from "next/image"
import Link from "next/link"
import imgb from "../../../../public/shopitem/unsplash_-GFCYhoRe48 (1).png"

// Define the props type
interface Breadcrumb {
  name: string; 
  href: string; 
  onClick?: () => void;
  current?: boolean;
}

interface CommonProps {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  contact?: { phone: string; email: string; instagram: string };
}

const Common = ({ title, description, breadcrumbs, contact }: CommonProps) => {
  const handleBreadcrumbClick = (crumb: Breadcrumb) => {
    if (crumb.onClick) {
      crumb.onClick();
    }
  };

  return (
    <div>
      <div className="relative w-full h-[500px] bg-cover bg-center"> 
        <Image
          src={imgb}
          width={1920}
          height={410}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold text-[#ffff]">{title}</h1>
          <p className="mt-2 text-lg">{description}</p>
          <p className="mt-2 text-lg flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href || crumb.name}>
                {index > 0 && <span className="text-gray-400"> &gt; </span>}
                {crumb.current ? (
                  <span className="text-primaryColor">{crumb.name}</span>
                ) : (
                  <a 
                    href={crumb.href} 
                    onClick={() => handleBreadcrumbClick(crumb)}
                    className="text-[#fff] hover:underline hover:text-primaryColor"
                  >
                    {crumb.name}
                  </a>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Common
