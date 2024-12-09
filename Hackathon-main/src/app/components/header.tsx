// components/Header.js  
"use client"
import Image from 'next/image';  
import Link from 'next/link';  
import { useState } from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';  

const Header = () => { 
    const [menuOpen, setMenuOpen] = useState(false);  
  return (  
    <header className="bg-white">  
      {/* Top Banner */}  
      <div className="w-full bg-[#272343] text-sm text-[#F0F2F3] py-2">  
        <div className="flex justify-between items-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">  
          <p>✓ Free Shipping On All Orders Over $50</p>  
          <div className="flex space-x-4 text-sm">  
            <span>Eng</span>  
            <span>FAQs</span>  
            <span>Need Help</span>  
          </div>  
        </div>  
      </div>  

      {/* Main Header */}  
      <div className="bg-[#F0F2F3]">  
        <div className="flex justify-between items-center py-4 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">  
          {/* Logo */}  
          <div className="flex items-center">  
            <Image src="/logo.png" alt="Logo" width={40} height={40} />  
            <span className="text-2xl font-bold ml-2 text-gray-800">Comforty</span>  
          </div>  

          {/* Contact and Cart Button */}  
          <div className="flex items-center space-x-4">  
            <Link href="/product">  
              <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg">  
                {/* Cart Icon */}  
                <FaShoppingCart className="h-5 w-5 text-black mr-2" />  
                <span>Cart</span>  
                {/* Item Count */}  
                <span className="ml-2 bg-[#007580] text-white rounded-full px-1 text-xs">2</span>  
              </button>  
            </Link>  
          </div>  
        </div>  
      </div>  

      {/* Navigation Links */}  
      <div className="flex flex-col mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">  
        <div className="flex justify-between items-center py-5">  
        <nav className="relative">  
      {/* Hamburger Icon */}  
      <button  
        className="md:hidden text-gray-800 focus:outline-none"  
        onClick={() => setMenuOpen(!menuOpen)}  
      >  
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}  
      </button>  

      {/* Navigation Links */}  
      <ul  
        className={`absolute md:static bg-white md:bg-transparent md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 transition-all duration-300 ${
          menuOpen ? "top-12 left-0 w-full  z-10" : "hidden md:flex"
        }`}  
      >  
        <li>  
          <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/">  
            Home  
          </Link>  
        </li>  
        <li>  
          <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/product">  
            Shop  
          </Link>  
        </li>  
        <li>  
          <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/product">  
            Product  
          </Link>  
        </li>  
        <li>  
          <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/product">  
            Pages  
          </Link>  
        </li>  
        <li>  
          <Link className="text-gray-500 hover:text-[#007580] font-semibold" href="/">  
            About  
          </Link>  
        </li>  
      </ul>  
    </nav>  
          {/* Contact Information */}  
          <div className="text-gray-400 hover:text-[#007580]">  
            Contact: (808) 555-0111  
          </div>  
        </div>  
      </div>  
    </header>  
  );  
};  

export default Header;