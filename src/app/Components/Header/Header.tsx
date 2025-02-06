"use client"

import Link from 'next/link'
import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { RiContactsLine } from "react-icons/ri";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false)


  return (
<div className='sticky top-0 z-10'>
      <div className='wraper w-[1320px h-[87px] mt-[45px] mx-auto'>
         <h1 className=" font-Helvetica text-2xl font-bold text-center ">
           <span className='font-Helvetica text-primaryColor text-2xl font-bold '>Food</span>
           tuck</h1>

        <nav className="bg-black text-white p-4 flex justify-evenly items-center">
           <ul className="hidden md:flex space-x-6 ml-4">
             <Link href='/'><li>Home</li></Link>
             <Link href='/menu'><li>Menu</li></Link>
             <Link href='/blog'><li>Blog</li></Link>

             {/* Pages Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 hover:text-primaryColor transition-colors duration-200"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>Pages</span>
                <FaAngleDown className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >


                
                <div className="py-1">

                  {/* Category Submenu */}
                  <div 
                    className="relative group/category"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <button className="w-full px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200 flex items-center justify-between">
                      Category
                      <FaAngleRight className={`transform transition-transform duration-200 ${isCategoryOpen ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {/* Category Submenu Items */}
                    <div 
                      className={`absolute left-full top-0 w-48 bg-black border border-gray-700 rounded-md shadow-lg transition-all duration-200 ${
                        isCategoryOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
                      }`}
                    >
                      <Link href="/shop">
                        <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                          Food
                        </div>
                      </Link>
                      <Link href="/our-cheef">
                        <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                          Chefs
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link href="/shop">
                    <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                      Shop
                    </div>
                  </Link>
                  <Link href="/shop-details">
                    <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                      Shop Detail
                    </div>
                  </Link>
                  <Link href="/shopping-cart">
                    <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                      Shopping Cart
                    </div>
                  </Link>
                  <Link href="/CheckOut">
                    <div className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-primaryColor transition-colors duration-200">
                      CheckOut-Page
                    </div>
                  </Link>
                </div>
              </div>
            </div>

             <Link href='/about'><li>About</li></Link>
             <Link href='/shop'><li>Shop</li></Link>
             <Link href='/contact'><li>Contact</li></Link>
           </ul>
           
           <div className="flex items-center space-x-4 ">
             <input 
               type="text"
               placeholder="Search..."
               className="p-2 rounded-[27px] mt-[33px] border-[1px] bg-gray-800 text-white "
             />
             <button className="bg-yellow-500 mt-[33px] px-4 py-2 rounded-[27px] text-white">
               Search
             </button>
             <CiShoppingBasket className='text-xl mt-9 hover:text-primaryColor'/>
             {/* <ShoppingCart className='hover:text-primaryColor' /> */}

             <Link href={'/Signup'}>           
            
              <RiContactsLine className='tex-xl mt-9 hover:text-primaryColor' />
            
            </Link>
            </div>

      </nav>
    </div>
      
</div>
  )
}

export default Header
