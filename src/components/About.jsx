import React from 'react'
import { FaRoad, FaCar, FaGlobe } from "react-icons/fa";
import car1 from "../../image/frontend.jpg"
import car2 from "../../image/bak.jpg"
const About = () => {
  return (
    <section className="bg-[#0a2b4a] text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold ml-3 mb-2">About Carpool</h2>
      <div className="border-b-4 ml-12 border-white rounded-2xl w-40 mb-10 relative">
      </div>

      <div className="grid md:grid-cols-2 gap-30 -mt-8 items-center">
        
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

        
         <div className="hidden md:flex gap-2 justify-center w-full">
          <img   loading='lazy'
            src={car2} 
            alt="Car Front"
            className="w-50 h-90 object-cover shadow-xl/30 rounded-[20px]"
          />
          <img   loading='lazy'
            src={car1}
            alt="Car Back"
            className="w-50 h-90 object-cover shadow-xl/30 rounded-[20px]"
          />
        </div>
      </div>
      
    </section>
  )
}

export default About
