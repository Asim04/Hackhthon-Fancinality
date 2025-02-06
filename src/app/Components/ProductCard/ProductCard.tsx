import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  tags: string[];
  socialMediaLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  rating,
  reviews,
  category,
  socialMediaLinks,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className='flex justify-between mb-4'>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <span className='text-gray-500 flex mb-4'>
        <button className='flex px-12 py-4 bg-yellow-400 rounded-md text-white mr-4'>Description</button>
        <div className='flex'>
          <span className="text-gray-900 flex items-center">Reviews ({reviews})</span>
        </div>
      </span>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-500">{description}</h2>
        <div className="text-lg font-semibold">{price}</div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{category}</span>
        <span className="text-gray-500">{rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;