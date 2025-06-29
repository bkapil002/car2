import NaveBar from './components/NaveBar';

import hearder from '../image/header.jpg'
import qr from '../image/qr.png'
import play from '../image/play-removebg-preview.png'
import appstore from '../image/apple-removebg-preview.png'
import loction from '../image/app-location.jpg'
import logo from '../image/logo.png'

import About from './components/About';
import CustomerReviews from './components/CustomerReviews';
import BestDriversSlider from './components/BestDriversSlider';

import { ImLocation } from "react-icons/im";
import { GiTakeMyMoney,GiSteeringWheel } from "react-icons/gi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";





function App() {


   
  return (
    <div className="  min-h-screen bg-white">


     <NaveBar/>

      <section
        className="text-center relative py-30"
        style={{
          backgroundImage: `url(${hearder})`,
          backgroundSize: "cover",
       backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#0a2b4a]/70 z-0" />
        <div className="relative z-10 py-10 px-4 text-white">
          <h1 className="text-4xl md:text-6xl italic font-bold uppercase tracking-wide">
            SEAMLESS RIDES, SHARED DREAMS
          </h1>
          <p className="mt-4 text-lg italic md:text-xl">
          Download Carpool App Today!
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="ml-4">
         <img loading='lazy' src={qr} alt="QR Code" className="h-20 rounded-sm" />
            </div>
            <div className="space-y-2">
            <img loading='lazy' src={appstore} alt="App Store" className="h-10 cursor-pointer rounded-lg" />
             <img loading='lazy' src={play} alt="Google Play" className="h-10 cursor-pointer rounded-lg" />
            </div>
          </div>
        </div>
      </section>







      <section className="text-center mt-10 text-blue-950 p-4 mb-24">
        <h1 className="text-4xl font-bold mb-10">Where do you want a ride today?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
         <div className="flex justify-between items-center bg-red-600 rounded-lg p-3 w-full md:w-64 max-w-sm">
            <p className="text-white">Belarus to Russia</p>
            <div className="bg-white text-red-600 px-3 py-1 rounded">$10</div>
          </div>
          <div className="flex justify-between items-center bg-red-600 rounded-lg p-3 w-full md:w-64 max-w-sm">
          <p className="text-white">Poland to Germany</p>
            <div className="bg-white text-red-600 px-3 py-1 rounded">$20</div>
          </div>
          <div className="flex justify-between items-center bg-red-600 rounded-lg p-3 w-full md:w-64 max-w-sm">
            <p className="text-white">France to Spain</p>
            <div className="bg-white text-red-600 px-3 py-1 rounded">$30</div>
          </div>
        </div>
      </section>
      <div className="bg-[#062851] text-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">How It Works</h2>
        <div className="w-24 h-1 bg-white rounded-xl mt-2 mx-auto mb-10"></div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="flex flex-col items-center text-center">
            <GiTakeMyMoney className="text-red-500 text-5xl mb-4"/>
            <h3 className="text-3xl font-semibold italic mb-2">Find Your Ride</h3>
            <p className="text-1xl text-gray-300 text-left pl-20 medium self-start max-w-[300px]">
              Whether it's work or weekend, discover rides that match your schedule.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <ImLocation className="text-red-500 text-5xl mb-4"/>
           <h3 className="text-3xl font-semibold italic mb-2">Select &amp; Book</h3>
            <p className="text-1xl text-gray-300 text-left pl-20 medium self-start max-w-[300px]">
              Select a ride. Book your seat. You're good to go.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
          <GiSteeringWheel className="text-red-500 text-5xl mb-4"/>
          <h3 className="text-3xl font-semibold italic  mb-2">Travel Together</h3>
            <p className="text-1xl text-gray-300 text-left pl-20 medium self-start max-w-[300px]">
              Share your journey, save more, and make every ride more meaningful.
            </p>
          </div>

        </div>
      </div>



      <BestDriversSlider/>
      <About/>
      <CustomerReviews/>





      <section className="text-white font-sans">
        <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${loction})` }}>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2b4a]/100 to-transparent z-0" />
          <div className="relative z-10 w-full h-full px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-10 md:space-y-0">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Download Our App</h2>
              <div className="w-20 md:w-28 h-0.5 rounded-3xl bg-white mx-auto md:mx-0 mb-2" />

              <p className="text-lg leading-relaxed mt-5">
                Are you driving today and have a free seat to offer in your car or you’re traveling
                and need a lift to your destination? Let’s GetRider.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                <img loading="lazy" src={play} alt="Google Play" className="h-10  cursor-pointer rounded-lg" />
                <img loading="lazy" src={appstore} alt="App Store" className="h-10 cursor-pointer rounded-lg" />
              <img loading="lazy" src={qr} alt="QR Code" className="w-20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>




        <footer className="bg-white text-center text-[#0a2b4a] py-10 px-6">
      <div className="text-2xl relative  font-bold"><img loading='lazy' src={logo} className='w-35 -mb-11 text-center absolute top-0 left-1/2 -translate-x-1/2'/><p className=' pt-5 text-blue-950'>CARPOOL</p></div>
          <p className=" text-2xl max-w-2xl mx-auto mt-5">
            Redefining the way we travel—connect with trusted riders, save money, and reduce your carbon footprint.
          </p>
          <div className="flex justify-center gap-5 mt-4 cursor-pointer text-red-600 text-3xl">
            <AiFillFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </footer>




        <footer className='  flex justify-center  w-full  bg-red-600 p-2 '>
          <p className="text-sm  text-white font-normal">
            © 2025 CARPOOL. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;
