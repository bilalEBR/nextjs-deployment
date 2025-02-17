"use client"; // Ensure the file is recognized as a client component

import { useState, useEffect } from 'react';

const PromotionBanner = () => {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours countdown
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-[#FF6347] to-[#FF4500] bg-cover h-[400px] rounded-2xl relative" style={{ backgroundImage: "url('/banner9.jpg')" }}>
      <div className="absolute inset-0 bg-neutral-400 rounded-2xl p-8 sm:p-12 flex flex-col justify-center items-center gap-6">
        {/* Discount Badge */}
        <div className="absolute top-6 left-6 bg-[#ffdf00] text-black px-6 py-2 rounded-lg text-md font-semibold shadow-lg">
          Limited Time Offer
        </div>

        {/* Call to Action */}
        <button className="bg-black text-white px-8 py-4 rounded-lg text-xl font-bold transform transition duration-300 hover:bg-[#ffdf00] hover:text-black">
          25% Discount
        </button>

        {/* Heading */}
        <h2 className="font-extrabold text-4xl sm:text-5xl text-white text-center shadow-lg leading-tight">
          Summer Collection
        </h2>

        {/* Countdown Timer */}
        <p className="text-white text-lg sm:text-xl text-center max-w-md mx-auto">
          Hurry! Offer ends in: <span className="font-bold">{formatTime(timeLeft)}</span>
        </p>

        {/* Subtext */}
        <p className="text-white text-lg sm:text-xl text-center max-w-md mx-auto">
          Starting @ $20 <b>Shop Now</b>
        </p>

        {/* Floating Icon - Optional (Example: Shopping Cart Icon) */}
        <div className="absolute bottom-10 right-10 animate-pulse text-5xl text-white">
          <i className="fas fa-shopping-cart"></i> {/* You can use any icon here */}
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
