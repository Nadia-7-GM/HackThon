import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong, FaReact } from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa';
function Page() {
    const products = [
        {
          name: "Library Stool Chair",
          price: "$20",
          image: "/p1.png",
          Link:"/product1"
        },
        {
          name: "Library Stool Chair",
          price: "$20",
          image: "/p2.png",
          Link:"/product2"
        },
        {
          name: "Library Stool Chair",
          price: "$20",
          image: "/p3.png",
          Link:"/product3"
        },
        {
          name: "Library Stool Chair",
          price: "$20",
          image: "/p4.png",
          Link:"/product4"
        },
      ];
      const product = [
        { image: '/p1.png', name: 'Library Stool Chair', price: '$20', Link: '/product1' },
        { image: '/p2.png', name: 'Wooden Armchair', price: '$20',Link: '/product2'  },
        { image: '/p3.png', name: 'Ergonomic Office Chair', price: '$20' ,Link: '/product3' },
        { image: '/p4.png', name: 'Modern Dining Chair', price: '$20' ,Link: '/product4' },
        { image: '/p6.png', name: 'Plush Lounge Chair', price: '$20',Link: '/product6'  },
        { image: '/p5.png', name: 'Folding Camp Chair', price: '$20',Link: '/product5'  },
        { image: '/p7.png', name: 'Recliner Sofa Chair', price: '$20',Link: '/product'  },
        { image: '/p1.png', name: 'Adjustable Bar Stool', price: '$20',Link: '/product1' },
      ];
  return (
    <main className="bg-white">
    {/* Hero Section */}
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-bl-3xl   bg-[#F0F2F3] px-20 py-20 md:py-16 lg:py-40 mb-2">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            <div className="space-y-8 text-center lg:text-left lg:w-1/2">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                WELCOME TO CHAIRY
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-[#272343] sm:text-4xl md:text-5xl lg:text-6xl">
                Best Furniture Collection For Your Interior.
              </h1>
              <Link 
                href="/product" 
                className="inline-flex items-center px-[24px] py-[14px] text-sm font-medium text-white bg-[#00B4B4] rounded hover:bg-[#009999] transition-all duration-300 ease-in-out group w-fit"
              >
                Shop Now
                <FaArrowRightLong className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 lg:w-1/2">
              <Image
                src="/chair.png"
                alt="Modern grey upholstered chair with black metal legs"
                fill
                className="w-[434px] h-[584px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-20">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className="relative w-[85px] h-[87px]">
                <Image
                  src={`/home${index}.png`}
                  alt={`Featured brand ${index}`}
                  width={85}
                  height={87}
                  className=" object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


    {/* Featured Products */}
    <section className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black text-center sm:text-left">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-lg relative group transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative aspect-[262/312] w-full overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-2 sm:p-3">
                {/* Product Name */}
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:text-[#009999] transition-colors duration-300 truncate">
                  {product.name}
                </h3>

                {/* Price and Cart Icon */}
                <div className="flex justify-between items-center mt-1 sm:mt-2">
                  <p className="text-xs sm:text-sm text-[#00B4B4] font-bold">
                    {product.price}
                  </p>
                  <a
                    href={product.Link}
                    className="bg-white text-gray-500 px-2 py-1 rounded text-xs sm:text-sm flex items-center hover:bg-[#009999] hover:text-white transition-all duration-300"
                    >
                      <FaShoppingCart className="mr-1 h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
 {/* Top Categories */}
 <section className="py-12 bg-white">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold mb-6 text-black">Top Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { name: 'Wing Chair', image: '/p6.png', description: '3584 Products', link: '/product6' },
        { name: 'Wooden Chair', image: '/p8.png', description: '157 Products', link: '/product8' },
        { name: 'Desk Chair', image: '/p9.png', description: '154 Products', link: '/product9' },
      ].map((category) => (
        <div key={category.name} className="relative rounded-lg overflow-hidden">
          {category.link ? (
            <Link href={category.link} passHref>
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="responsive"
                  width={500} // Set your desired width (for example, 500px)
                  height={500} // Set your desired height (for example, 500px)
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <h3 className="text-lg font-medium">{category.name}</h3>
                  <p className="text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={category.image}
                alt={category.name}
                layout="responsive"
                width={500} // Set your desired width (for example, 500px)
                height={500} // Set your desired height (for example, 500px)
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90  text-white p-2">
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

    {/* Explore Section */}
    <section className="py-12 bg-white relative">
  <div className="mx-auto max-w-[69rem] px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative">
      {/* Vertical Text */}
      <div className="absolute top-0 -left-[230px] flex items-center h-full">
        <div className="text-gray-800 font-semibold text-2xl sm:text:2xl transform -rotate-90 origin-left sm:origin-center whitespace-nowrap">
          EXPLORE NEW POPULAR STYLES
        </div>
      </div>

      {/* Main Featured Image */}
      <div className="row-span-2 col-span-2 md:col-span-1 relative">
        <div className="relative h-48 sm:h-72 md:h-[450px]">
          <Image
            src="/p3.png"
            alt="Featured chair"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Additional Images */}
      {["/p4.png", "/p5.png", "/p1.png", "/p2.png"].map((src, index) => (
        <div
          key={index}
          className="relative h-48 sm:h-56 md:h-64 lg:h-[212px]"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            className="object-cover rounded-lg transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>



    {/* Our Products */}
    <section className="py-12 bg-white">
  <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold mb-10 text-center text-black">
      Our Products
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {product.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg mb-6 flex flex-col  transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="relative aspect-[262/312] w-full overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={`Product ${index + 1}`}
              fill
              className="object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <h3 className="text-sm sm:text-base font-medium transition-colors duration-300 text-black hover:text-[#00B4B4]">
            {item.name}
          </h3>
          <div className="flex items-center justify-between mt-auto px-2">
            <p className="text-[#00B4B4] font-bold text-sm sm:text-base">
              {item.price}
            </p>

            {/* Link for Cart Button with unique link */}
            <Link
              href={item.Link} // Dynamic link for each card (unique)
              passHref
              className="bg-white text-gray-500 px-2 py-1 rounded text-xs sm:text-sm flex items-center hover:bg-[#009999] hover:text-white transition-all duration-300"
            >
              <FaShoppingCart className="mr-1 h-6 w-6" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  </main>
  )
}

export default Page