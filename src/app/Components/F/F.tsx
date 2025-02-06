import { Facebook, FacebookIcon, PrinterIcon, TwitterIcon } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaPinterest, FaPinterestP, FaSquarePinterest, FaTwitter } from 'react-icons/fa6'

const F = () => {
  return (
    <div className='bg-black'>
        <div className='w-[25px] h-[490px] '>
      <div className=' ml-10 mt-5 w-0 h-40 bg-black  border-l-2 border-gray-400'></div>
      <a href="http://facebook.com">< FaFacebookF size={24} className=' text-white  border-white ml-7 mt-7' /></a>
      <a href="http://twitter.com"><FaTwitter size={24}  className='text-yellow-500 ml-7 mt-7'/></a>
      <a href="http//pinterest.com"><FaPinterestP size={24}  className='text-white ml-7 mt-7' /></a>
      <div className=' ml-10 mt-5 w-0 h-40 bg-black  border-l-2 border-gray-400'></div>
      </div>
    </div>
  )
}

export default F
