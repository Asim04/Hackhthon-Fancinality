"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar({ totalItems = 0 }: { totalItems?: number }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-black text-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <div className="font-bold text-lg">
                    <span className="text-primaryColor">Food</span>truck
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4">
                    {navLinks.map((link, index) => (
                        link.name && (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="hover:text-orange-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <div className="flex items-center space-x-4">
                        <input 
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-[27px] mt-[33px] border-[1px] bg-gray-800 text-white"
                        />
                        <button className="bg-yellow-500 mt-[33px] px-4 py-2 rounded-[27px] text-white">
                            Search
                        </button>
                        <div className="mt-9 flex gap-3">
                          <Link href={"/Signup"}>  <FaUser /> </Link>
                            <Link href="/shopping-cart" className="relative">
                                <FaBagShopping className="text-2xl hover:text-primaryColor" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-primaryColor text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMobileMenu} 
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col">
                    <div className="flex justify-between p-4">
                        <div className="font-bold text-lg">
                            <span className="text-primaryColor">Food</span>truck
                        </div>
                        <button 
                            onClick={toggleMobileMenu} 
                            className="text-white focus:outline-none"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <nav className="flex flex-col items-center space-y-6 mt-10">
                        {navLinks.map((link, index) => (
                            link.name && (
                                <Link 
                                    key={index} 
                                    href={link.href} 
                                    className="text-white hover:text-orange-500 transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}

                        {/* Mobile Search and Icons */}
                        <div className="flex flex-col items-center space-y-4 mt-6">
                            <div className="relative w-full max-w-md">
                                <input 
                                    type="text"
                                    placeholder="Search..."
                                    className="p-3 w-full rounded-[27px] border-[1px] bg-gray-800 text-white"
                                />
                            </div>
                            <button className="bg-yellow-500 px-6 py-3 rounded-[27px] text-white w-full max-w-md">
                                Search
                            </button>

                            <div className="flex items-center space-x-6 mt-4">
                                <FaUser className="text-white text-2xl" />
                                <Link href="/shopping-cart" className="relative">
                                    <FaBagShopping className="text-white text-2xl hover:text-primaryColor" />
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-primaryColor text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
