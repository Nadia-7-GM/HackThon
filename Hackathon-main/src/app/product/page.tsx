"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

function Page() {
    const [email, setEmail] = useState(''); // Add the useState hook for email

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = `New subscription from: ${email}`;
        window.open(`https://wa.me/03060484798?text=${encodeURIComponent(message)}`, '_blank');
        setEmail(''); // Clear the email input after submission
    };

    const product = [
        { image: '/p1.png', name: 'Library Stool Chair', price: '$20', Link: '/product1' },
        { image: '/p2.png', name: 'Wooden Armchair', price: '$20', Link: '/product2' },
        { image: '/p3.png', name: 'Ergonomic Office Chair', price: '$20', Link: '/product3' },
        { image: '/p4.png', name: 'Modern Dining Chair', price: '$20', Link: '/product4' },
        { image: '/p8.png', name: 'Plush Lounge Chair', price: '$20', Link: '/product8' },
        { image: '/p5.png', name: 'Folding Camp Chair', price: '$20', Link: '/product5' },
        { image: '/p7.png', name: 'Recliner Sofa Chair', price: '$20', Link: '/product7' },
        { image: '/p1.png', name: 'Adjustable Bar Stool', price: '$20', Link: '/product1' },
        { image: '/p6.png', name: 'Swivel Chair', price: '$20', Link: '/product6' },
        { image: '/p2.png', name: 'Luxury Sofa Chair', price: '$20', Link: '/product2' },
        { image: '/p3.png', name: 'Bean Bag Chair', price: '$20', Link: '/product3' },
        { image: '/p9.png', name: 'Faux Leather Chair', price: '$20', Link: '/product9' },
    ];

    return (
        <section className="py-12 bg-white ">
            <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8 mb-60">
                <h2 className="text-3xl font-bold font-family-roboto mb-10 text-center text-black">
                    Our Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {product.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg mb-6 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
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

            <section className="py-20 bg-[#1E28320D]">
    <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
            <h2 className="text-4xl font-semibold mb-20 text-black font-family-roboto">Or Subscribe To The Newsletter</h2>
            <form onSubmit={handleSubmit} className="flex justify-center mb-8">
                            <input
                                type="email"
                                name="email" // Name attribute should be set here
                                className="w-[500px] px-5 text-left border-b-2 border-black mx-5 text-black bg-transparent outline-none"
                                placeholder="Email Address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Ensure the state is updated
                                required
                            />
                            <button
                                type="submit"
                                className="w-[70px]  text-center border-b-2 border-black  text-black bg-transparent outline-none"
                            >
                                Submit
                            </button>
                        </form>
            <p className="py-10 text-4xl font-semibold text-black font-family-roboto">Follow Products And Discounts On Instagram</p>
        </div>
        
        {/* Instagram Image Grid */}
        <div className="flex flex-wrap gap-4 mt-8 px-6">  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p1.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p2.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p3.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p4.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p5.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
  <div className="flex-1 min-w-[150px] rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">  
    <Image src="/p6.png" alt="Chair" width={150} height={150} className="object-cover w-full h-[150px]" />  
  </div>  
</div>


    </div>
</section>

        </section>
    );
}

export default Page;
