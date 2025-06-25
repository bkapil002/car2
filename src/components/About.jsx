import React from 'react'
import { FaRoad, FaCar, FaGlobe } from "react-icons/fa";
import car1 from "../../image/drive (3).jpg"
const About = () => {
  return (
    <section className="bg-[#0a2b4a] text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold ml-3 mb-2">About Carpool</h2>
      <div className="border-b-4 ml-12 border-white rounded-2xl w-40 mb-10 relative">
      </div>

      <div className="grid md:grid-cols-2 gap-10 -mt-5 items-center">
        
        <div className="space-y-8">
        
          <div className="flex items-start space-x-4">
            <div className="bg-white text-red-600 rounded-full p-3">
              <FaRoad size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Millions Of Journeys</h3>
              <p className="text-sm text-gray-200">
                Connecting riders and drivers across cities—one shared journey at a time.
              </p>
            </div>
          </div>        
          <div className="flex items-start space-x-4">
            <div className="bg-white text-red-600 rounded-full p-3">
              <FaCar size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Largest Car Rider Service</h3>
              <p className="text-sm text-gray-200">
                Join thousands who ride smarter—shared rides, verified users, and seamless travel.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-red-600 rounded-full p-3">
              <FaGlobe size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Simple & Smart Riding</h3>
              <p className="text-sm text-gray-200">
                Book a ride in minutes, share the cost, and travel stress-free.
              </p>
            </div>
          </div>
        </div>

        
         <div className="hidden md:flex gap-4 justify-center w-full">
          <img   loading='lazy'
            src={car1} 
            alt="Car Front"
            className="w-1/3 h-80 object-cover object-left rounded-[20px]"
          />
          <img   loading='lazy'
            src={car1}
            alt="Car Back"
            className="w-2/3 h-80 object-cover object-right rounded-[20px]"
          />
        </div>
      </div>
      
    </section>
  )
}

export default About
