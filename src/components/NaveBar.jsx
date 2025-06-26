import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi';
import { Phone } from 'lucide-react';
import car from '../../image/electric-car.png'
import search from '../../image/loupe.png'
import blog from '../../image/blog.png'
import logo1 from '../../image/logo1.png'

const NaveBar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
       <header className="bg-white p-4 text-black">
      <div className="flex justify-between items-center">
        <img loading="lazy" src={logo1} className="w-32 md:w-36" />

        <div className="md:hidden">
         <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <HiMenu className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-1">
            <img loading="lazy" className="w-6" src={search} />
            <span>Find a Ride</span>
          </a>
          <a href="#" className="text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-1">
            <img loading="lazy" className="w-6" src={car} />
            <span>Offer a Ride</span>
          </a>
          <a href="#" className="text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-1">
            <img loading="lazy" className="w-6" src={blog} />
            <span>Blogs</span>
          </a>
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition duration-200">
           <Phone className="w-4 h-4" />
            <span className="font-semibold">+916258893548</span>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className=" text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-2">
          <img loading="lazy" className="w-6" src={search} />
           <span>Find a Ride</span>
          </a>
          <a href="#" className=" text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-2">
            <img loading="lazy" className="w-6" src={car} />
            <span>Offer a Ride</span>
          </a>
          <a href="#" className=" text-blue-950 hover:text-gray-900 font-medium flex items-center space-x-2">
            <img loading="lazy" className="w-6" src={blog} />
            <span>Blogs</span>
          </a>
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition duration-200">
          <Phone className="w-4 h-4" />
            <span className="font-semibold">+916258893548</span>
          </div>
        </div>
      )}
    </header>
    </div>
  )
}

export default NaveBar
