
import Image from 'next/image';

import { getAllPost } from '../../../sanity/lib/data';
import { TMenuItem  } from '../../../sanity/lib/data';
import Link from 'next/link';
import Sidebar from './Sidebar';

// // Example products data
// const products = [
//   { id: 1, name: "Fresh Lime", category: "Drink", price: 5.00, image: "/shopitem/unsplash_-GFCYhoRe48 (1).png" },
//   { id: 2, name: "Chocolate Muffin", category: "Dessert", price: 4.50, image: "/image/imgitem3.png" },
//   { id: 3, name: "Burger", category: "Burger", price: 6.00, image: "/shopitem/Rectangle 8874.png" },
//   { id: 4, name: "Country Burger", category: "Burger", price: 5.50, image: "/image/imgitme4.png" },
//   { id: 5, name: "Country Burger", category: "Burger", price: 6.50, image: "/Shop/Mask%20Group%20(2).png" },
//   { id: 6, name: "Orange", category: "Drink", price: 6.50, image: "/Shop/Mask Group (3).png" },
//   // Add more products as needed
// ];

const ProductListing =  ({product}:{product:TMenuItem}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 6; // Number of products per page

  // const handleNextPage = () => setCurrentPage(currentPage + 1);
  // const handlePrevPage = () => setCurrentPage(currentPage - 1);

  // // Pagination logic
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);



  return (
    <div className="container mx-auto flex p-4">

      
     

      {/* Products Grid */}
      <div className="w-3/4 p-4">
        {/* <div className="grid grid-cols-3 gap-4"> */}
          
            <div  className="border w-[230px]  rounded-md ">
              <Link href={`/Food-Details/${product._id}`}>
              <Image
              width={100} 
              height={100}
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-md mb-4" />
              </Link>
              <h3 className="text-lg font-bold text-[#ffff] text-center">{product.name}</h3>
              <p className="text-gray-500 text-center">{product.category}</p>
              <p className="text-lg font-semibold text-primaryColor text-center">${product.price}</p>
              </div>
        
        {/* </div> */}

        {/* Pagination */}
        {/* <div className="flex justify-center mt-6">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1} 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md"
          >
            &lt;
          </button>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === Math.ceil(products.length / productsPerPage)} 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md"
          >
            &gt;
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductListing;
