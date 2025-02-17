import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className="bg-zinc-200 rounded-2xl mt-10 text-black text-center py-12">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-sm mb-4">Get the latest updates on new arrivals, offers, and more.</p>
          <div className="flex justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-2 text-black rounded-l-md"
              
            />
            <button className="bg-yellow-500 px-6 py-2 rounded-r-md text-black font-semibold hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="hover:text-yellow-500">Shop</a>
          <a href="#" className="hover:text-yellow-500">About Us</a>
          <a href="#" className="hover:text-yellow-500">Contact Us</a>
          <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-500">Terms of Service</a>
        </div>

        {/* Social Media Icons */}
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
          Copyright © <span className="font-semibold">LOgo</span> | All Rights Reserved 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
