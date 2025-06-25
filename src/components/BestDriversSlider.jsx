import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from '../../image/drive (1).jpg'
import car2 from '../../image/drive (2).jpg'
import car3 from '../../image/drive (3).jpg'
import person1 from '../../image/customer (1).jpg'
import person2 from '../../image/customer (2).jpg'
import person3 from '../../image/customer (3).jpg'

// Driver Data
const drivers = [
  {
    name: "Mason Brooks",
    image: person1,
    car: car1,
    time: "Wed, 8 January at 2:00 PM",
    passengers: 1,
    price: "$19.50",
    features: [
      "Max 2 passengers in back seats",
      "Pets are not allowed in the Car",
      "Smoking is not allowed",
    ],
  },
  {
    name: "Jackson Hayes",
    image: person2,
    car: car2,
    time: "Wed, 8 January at 2:00 PM",
    passengers: 1,
    price: "$19.50",
    features: [
      "Max 2 passengers in back seats",
      "Pets are not allowed in the Car",
      "Smoking is not allowed",
    ],
  },
  {
    name: "Wyatt Morgan",
    image: person3,
    car: car3,
    time: "Wed, 8 January at 2:00 PM",
    passengers: 1,
    price: "$19.50",
    features: [
      "Max 2 passengers in back seats",
      "Pets are not allowed in the Car",
      "Smoking is not allowed",
    ],
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 cursor-pointer rounded-r-full"
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-3 cursor-pointer rounded-l-full"
  >
    <FaArrowRight />
  </div>
);

// Component
const BestDriversSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-white relative">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-[#062851]">Our Best Drivers</h2>
        <p className="text-[#062851]  text-1xl font-medium mt-2">
          Trusted, verified, and top-rated—meet the drivers who make your ride safe and smooth.
        </p>
        <div className="w-60 h-1 bg-[#062851] rounded-sm mx-auto mt-4 relative">
          
        
          <div className="w-50 h-1  rounded-sm bg-red-500  absolute top-0 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      

      <Slider {...settings}>
        {drivers.map((driver, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-md overflow-hidden shadow-lg border">
              <img   loading='lazy' src={driver.car} alt="Car" className="w-full h-48 object-cover" />
              <div className="bg-[#062851] text-white p-4">
                <div className="flex pl-20 items-center mb-2">
                  <img   loading='lazy'
                    src={driver.image}
                    alt={driver.name}
                    className="w-12 h-12 bg-cover bg-center rounded-full border-2 border-red-500 mr-3"
                  />
                  <h3 className="text-lg font-normal">{driver.name}</h3>
                </div>
                 <div className="w-70 h-0.5  bg-red-500 rounded-xl  mx-auto mb-1"></div>
                <div className="flex justify-between text-sm text-gray-200 mb-1">
                  <span>{driver.time}</span>
                  <span>For {driver.passengers} Passenger</span>
                </div>
                <div className="text-right text-base font-bold mb-3">{driver.price}</div>
                <ul className="text-sm font-normal  text-gray-200 space-y-2">
                  {driver.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="bg-red-500 text-lg rounded-sm mr-2 h-4 w-4"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestDriversSlider;
