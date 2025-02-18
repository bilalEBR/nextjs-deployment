import React from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaGlobe } from "react-icons/fa"; // Add required icons

const Headertop = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container py-4">
        <div className="place-items-center sm:flex lg:flex justify-between">
          
          {/* Icons Section */}
          <div className="flex gap-6 items-center">
            {/* Search Icon */}
            <div className="header_top_icon_wrapper cursor-pointer">
              <FaSearch className="text-gray-600 text-xl" />
            </div>

            {/* Cart Icon */}
            <div className="header_top_icon_wrapper cursor-pointer relative">
              <FaShoppingCart className="text-gray-600 text-xl" />
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">3</span> {/* Cart count */}
            </div>

            {/* Notification Icon */}
            <div className="header_top_icon_wrapper cursor-pointer">
              <FaBell className="text-gray-600 text-xl" />
            </div>

            {/* Language and Currency Selectors with Icons */}
            <div className="flex items-center gap-4">
              {/* Language Selector with Flag Icon */}
              <div className="flex items-center gap-1">
                <FaGlobe className="text-gray-600 text-xl" />
                <select className="text-gray-500 text-[12px] w-[70px] border-none bg-transparent focus:outline-none">
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1">
                <select className="text-gray-500 text-[12px] w-[70px] border-none bg-transparent focus:outline-none">
                  <option value="USD $">USD $</option>
                  <option value="EUR">EUR</option>
                  <option value="BIRR">BIRR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Offer Section */}
          <div className='text-gray-500 text-[12px] px-4 py-2 rounded-md bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 hover:text-yellow-700 transition-all'>
            <b className='text-yellow-600'>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>

        </div>
      </div>
    </div>
  );
}

export default Headertop;
