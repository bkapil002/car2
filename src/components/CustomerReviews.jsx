import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import  customer from "../../image/customer (1).jpg"
import  customer1 from "../../image/customer (2).jpg"
import  customer2 from "../../image/customer (3).jpg"

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Easton James",
      image: customer,
      text: `I’ve been using this app for the past few weeks and it’s been a game-changer. Booking a ride is super easy, and I’ve met some really nice co-riders. The drivers are punctual and the app makes cost-sharing simple. It’s safe, affordable, and perfect for daily office commutes. Highly recommend!`,
    },
    {
      name: "Lily Carter",
      image: customer1,
      text: `This service has made my daily commutes more efficient and cost-effective. The app is user-friendly, and I’ve always had great ride experiences.`,
    },
    {
      name: "Ryan Patel",
      image: customer2,
      text: `I was skeptical at first, but now I use it every week. It’s convenient, safe, and you meet great people. 5 stars from me!`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-[#0a2b4a] py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Customer Reviews
      </h2>
      <div className="border-b-4 border-[#0a2b4a] rounded-4xl w-32 mx-auto mb-10 relative">
      </div>
      <div className="mx-auto w-full max-w-5xl h-80">
        <div className="bg-white shadow-lg rounded-lg flex overflow-hidden h-full">
          <div className="w-1/3 h-full">
            <img   loading='lazy'
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].name}
              className="h-full w-full object-cover rounded-tr-[90px]"
            />
          </div>

          <div className="w-2/3 p-6 overflow-auto">
            <FaQuoteLeft className="text-red-500 text-2xl mb-4" />
            <p className="text-gray-700 mb-4 text-[16px] leading-relaxed">
              {reviews[currentIndex].text}
            </p>
            <p className="font-bold text-[#0a2b4a]"><spm className='text-red-500 '>-- </spm>{reviews[currentIndex].name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
