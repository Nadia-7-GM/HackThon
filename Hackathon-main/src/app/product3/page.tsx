import Link from 'next/link';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
const featuredProducts = [  
    { id: 1, name: 'Library Stool Chair', price: 99, imageUrl: '/p3.png', Link:'/product3' },  
    { id: 2, name: 'Library Stool Chair', price: 99, imageUrl: '/p4.png', Link:'product4' },  
    { id: 3, name: 'Library Stool Chair', price: 99, imageUrl: '/p5.png', Link:'product5' },  
    { id: 4, name: 'Library Stool Chair', price: 99, imageUrl: '/p6.png', Link:'product6' },  
    { id: 5, name: 'Library Stool Chair', price: 99, imageUrl: '/p7.png' , Link:'product7'},  
  ];  

function page() {
  return (
    <div className='bg-white py-10'>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-white">  
    <div className="flex flex-col md:flex-row bg-white ">  
      {/* Product Image */}  
      <div className="md:w-1/2 p-10">  
        <img  
          src="/p3.png" // Replace with your image path  
          alt="Library Stool Chair"  
          className="w-full h-full object-cover"  
        />  
      </div>  
      {/* Product Details */}  
      <div className="md:w-1/2 p-10 flex flex-col gap-4">
  <h1 className="text-5xl font-bold text-black">Library Stool <br /> Chair</h1>
  <h1 className="bg-[#029FAE] text-sm text-white px-2 py-1 w-[100px] rounded-full mb-4">
    $20.00 USD
  </h1>
  <span className="border-gray-300 w-[300px] border-b-2 mb-4"></span>
  <p className="text-gray-600">
    Need Editable version Designing Custom <br /> content. Allow chat.
  </p>
  <Link href="#" passHref>
  <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md flex items-center">
    <FaShoppingCart className="mr-2" />
    Add To Cart
  </button>
</Link>
</div>

    </div>  

    {/* Featured Products */}  
    <h2 className="text-xl font-bold mt-20 mb-10 text-black tracking-widest">FEATURED PRODUCTS</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
  {featuredProducts.map((product) => (
    <div key={product.id} className="flex flex-col items-center">
      <a href={product.Link} className="relative block">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover mb-2"
        />
      </a>
      <div className="flex items-left justify-start gap-[50px] text-black text-sm font-light">
        <p>{product.name}</p>
        <span className="ml-2 text-black font-bold">${product.price}</span>
      </div>
    </div>
  ))}
</div>


  </div> 
  </div>
  )
}

export default page