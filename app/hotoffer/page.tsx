"use client";
import Link from 'next/link';
import ProductCard from '../components/Productcard';  // Ensure ProductCard is created
import Footerforall from '../components/Footerforall';

// Sample data for hot offers (just like perfume data)
const hotOfferData = [
  { id: 1, img: '/phone.jpg', title: 'Smartphone X', desc: 'Latest Model with 5G', rating: 5, price: 999 },
  { id: 2, img: '/laptop.jpg', title: 'Laptop Pro 15', desc: 'High Performance Laptop', rating: 4, price: 1200 },
  { id: 3, img: '/headphone.jpg', title: 'Wireless Headphones', desc: 'Noise Cancelling Technology', rating: 4, price: 150 },
  { id: 4, img: '/smartwatch.jpg', title: 'Smartwatch Z', desc: 'Track Your Fitness', rating: 5, price: 199 },
];

const HotOffersPage = () => {
  return (
    <div>
      {/* Product Categories Section */}
      <div className="categories grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold">Electronics</h3>
          <p className="mt-2 text-gray-700">Latest gadgets and high-tech devices.</p>
          <Link href="#electronics">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold">Fashion</h3>
          <p className="mt-2 text-gray-700">Trendy outfits for every occasion.</p>
          <Link href="#fashion">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold">Home Appliances</h3>
          <p className="mt-2 text-gray-700">Quality appliances to upgrade your home.</p>
          <Link href="#home-appliances">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold">Sports Gear</h3>
          <p className="mt-2 text-gray-700">Get ready for your next adventure!</p>
          <Link href="#sports-gear">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 text-center">Hot Offers on Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-x-20 xl:gap-y-10">
          {hotOfferData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* Product Information Section (Profiles) */}
      <div className="product-profile p-8 bg-gray-50">
        <h2 className="text-3xl text-center">Hot Offer Product Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Electronics</h3>
            <p className="mt-4 text-gray-700">
              Explore the latest electronics like smartphones, laptops, and gadgets, all with amazing deals.
            </p>
          </div>
          <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Fashion</h3>
            <p className="mt-4 text-gray-700">
              Find the trendiest clothes and accessories with exclusive discounts.
            </p>
          </div>
          <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Home Appliances</h3>
            <p className="mt-4 text-gray-700">
              Upgrade your home with high-quality appliances at the best prices.
            </p>
          </div>
          <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold">Sports Gear</h3>
            <p className="mt-4 text-gray-700">
              Shop for top-notch sports gear and get ready for your next adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footerforall />
    </div>
  );
};

export default HotOffersPage;
