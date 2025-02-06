
import React from 'react'

import Practise from '../Components/practise/Practise'
import Silimar from '../Components/Silimar/Silimar'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Header/Navbar_singup'
import Common from '../Components/Hero/Common'
import ProductCard from '../Components/ProductCard/ProductCard'
import { productData } from '../../../typescript/productCard'

const page = () => {
  
  return (
    <div>

      <Navbar />

      <Common title={''} description={''} breadcrumbs={[]} />


      {/* <ShopDetails name={'Yummy Chicken Chup'} 
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'} 
        price={ '54.00$'  } rating={'5.0 Rating'} reviews={22} 
        images={['/Shop-Detail/Rectangle 8883.png',
                '/Shop-Detail/Rectangle 8883.png',
                '/Shop-Detail/Rectangle 8884.png',
                '/Shop-Detail/Rectangle 8885.png',
                '/Shop-Detail/Rectangle 8886.png',
                '/Shop-Detail/Rectangle 8887.png', ]} 

        category={'Pizza'} 
        tags={['Our Shop']} 
        
        socialMediaLinks={{
        facebook: '',
        twitter: '',
        instagram: ''
      }} />
       */}

        {/* <Shop_Details /> */}

        <Practise />

        <ProductCard  name={''} price={''} rating={0} images={[]} category={''} tags={[]} socialMediaLinks={{
        facebook: '',
        twitter: '',
        instagram: ''
      }} {...productData}/>

        {/* <ProductCard name={''} description={''} price={''} rating={''} reviews={0} images={[]} category={''} tags={[]} socialMediaLinks={{
        facebook: '',
        twitter: '',
        instagram: ''
      }} /> */}

        <Silimar />

        <Footer />

    </div>
  )
}

export default page
