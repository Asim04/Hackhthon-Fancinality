"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  weight: string;
  price: number;
  image: string;
}

const Checkout: React.FC = () => {
  // Sample cart data
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Chicken Tikka Kabab",
      weight: "150 gm net",
      price: 50,
      image:"/Shop/Mask-Group-(2).png",
    },
    {
      id: 2,
      name: "Chicken Tikka Kabab",
      weight: "150 gm net",
      price: 50,
      image: "/Shop/Mask-Group-(3).png",
    },
    {
      id: 3,
      name: "Chicken Tikka Kabab",
      weight: "150 gm net",
      price: 50,
      image: "/Shop/Mask-Group-(4).png",
    },
  ];

  // Shipping state
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
    isBillingSame: false,
  });

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setShippingAddress((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Calculate totals dynamically
  const subTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shipping = 0; // Free shipping
  const discount = 0.25 * subTotal; // 25% discount
  const tax = 0.05 * subTotal; // 5% tax
  const total = subTotal - discount + tax;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shipping Form */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Shipping Address</h2>
          <form className="grid grid-cols-2 gap-4">
          <div className="col-sapn-1">
          {/* <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label> */}
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              value={shippingAddress.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
            />
          </div>

          <div className="col-span-1">
          {/* <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">LastName</label> */}
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              value={shippingAddress.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            </div>


            <input
              id="email"
              type="email"
              placeholder="Email address"
              value={shippingAddress.email}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <input
              id="phone"
              type="text"
              placeholder="Phone number"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <input
              id="company"
              type="text"
              placeholder="Company"
              value={shippingAddress.company}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <select
              id="country"
              value={shippingAddress.country}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            >
              <option value="">Choose country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="UAE">UAE</option>
            </select>
            <select
              id="city"
              value={shippingAddress.city}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            >
              <option value="">Choose city</option>
              <option value="New York">karachi</option>
              <option value="Los Angeles">islamabad</option>
            </select>
            <input
              id="zipCode"
              type="text"
              placeholder="Zip code"
              value={shippingAddress.zipCode}
              onChange={handleInputChange}
              className="col-span-1 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <input
              id="address1"
              type="text"
              placeholder="Address 1"
              value={shippingAddress.address1}
              onChange={handleInputChange}
              className="col-span-2 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <input
              id="address2"
              type="text"
              placeholder="Address 2"
              value={shippingAddress.address2}
              onChange={handleInputChange}
              className="col-span-2 border border-gray-300 rounded-lg p-2 text-gray-700"
            />
            <div className="col-span-2 flex items-center">
              <input
                id="isBillingSame"
                type="checkbox"
                checked={shippingAddress.isBillingSame}
                onChange={handleInputChange}
                className="w-4 h-4 border-gray-300 rounded text-gray-700"
              />
              <label htmlFor="isBillingSame" className="ml-2 text-gray-600">
                Same as shipping address
              </label>
            </div>
          </form>
          <div className="flex justify-between mt-6">
            <Link href={"/shopping-cart"}>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Back to cart
            </button>
            </Link>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <Image src={item.image} alt={item.name} width={48} height={48}
                 className="w-12 h-12" />
                 
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.weight}</p>
                </div>
                <p className="font-bold">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-gray-300 pt-4">
            <div className="flex justify-between text-gray-600">
              <span>Sub-total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : shipping ? `$${(shipping as number).toFixed(2)}`:"0.00"}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600">
            Place an order →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
