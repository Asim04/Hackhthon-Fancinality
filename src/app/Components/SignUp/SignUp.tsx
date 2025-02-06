"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import apple from "../../../../public/Apple.png"
import { User, Mail, Lock } from "lucide-react";


interface InputField {
  id: string;
  type: string;
  placeholder: string;
  icon?: JSX.Element;
}

const SignUpForm: React.FC = () => {
  // Define fields dynamically
  const inputFields: InputField[] = [
    { id: 'name', type: 'text', placeholder: 'Name', icon: <User size={20} /> },
    { id: 'email', type: 'email', placeholder: 'Email', icon: <Mail size={20} /> },
    { id: 'password', type: 'password', placeholder: 'Password',icon: <Lock size={20} /> },
  ];

  // State to handle form values
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 my-10 ">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputFields.map((field) => (
            <div key={field.id} className="relative">
                <div className='flex items-center border border-gray-300 rounded-md bg-white'>
                <span className='px-2 text-gray-500'> {field.icon}</span>
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none rounded-md"
                value={formValues[field.id] || ''}
                onChange={handleChange}
              />
              </div>
            </div>
          ))}
          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              className="w-4 h-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700">
              Remember me?
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF9F0D] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-orange-500 hover:underline">
            Forget password?
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-sm text-gray-500 mx-4">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <div className="mt-4 space-y-2">
          <button
            type="button"
            className="relative w-full flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-2 rounded hover:bg-gray-100"
          >
            <Image
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              width={100}
              height={100}
              className="w-5 h-5 absolute left-4"
            />
            Sign up with Google
          </button>
          <button
            type="button"
            className="relative w-full flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-2 rounded hover:bg-gray-100"
          >
            <Image
              src={apple}
              alt="Apple"
              className="w-5 h-5 absolute left-4"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
