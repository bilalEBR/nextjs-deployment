import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footerforall = () => {
  return (
    <div className="bg-zinc-200 rounded-2xl mt-10 text-black text-center py-12">
      <div className="container mx-auto px-6">
        {/* Footer Links (Adjust based on page type) */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="/shop" className="hover:text-yellow-500">Shop</a>
          <a href="/contact" className="hover:text-yellow-500">Contact Us</a>
          <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-yellow-500">Terms of Service</a>
        </div>

        {/* Social Media Icons (Could stay the same) */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-2xl hover:text-yellow-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-yellow-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-yellow-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-yellow-500">
            <FaPinterest />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm">
          Copyright © <span className="font-semibold">Logo</span> | All Rights Reserved 2025 Developed by: Bilal
        </p>
      </div>
    </div>
  );
};

export default Footerforall;
