"use client";
import React, { useState } from 'react';
import Productcard from '../components/Productcard';

import Jewelerycoll from '../components/jewelerycoll';
import Footerforall from '../components/Footerforall';

const Jewelry = () => {
  const jewelryData = [
    { img: '/goldring.jpg', title: 'Gold Ring', desc: 'Elegant 18k Gold Ring', rating: 5, price: 249 },
    { img: '/necklace.jpg', title: 'Diamond Necklace', desc: 'Luxury Diamond Necklace', rating: 4, price: 599 },
    { img: '/silverbracelet.jpg', title: 'Silver Bracelet', desc: 'Sterling Silver Bracelet', rating: 4, price: 129 },
    { img: '/earring.jpg', title: 'Pearl Earrings', desc: 'Classic Pearl Earrings', rating: 5, price: 89 },
    { img: '/goldwatch.jpg', title: 'Gold Watch', desc: 'Premium Gold Watch', rating: 4, price: 349 },
    { img: '/charmnecklace.jpg', title: 'Charm Necklace', desc: 'Personalized Charm Necklace', rating: 5, price: 159 },
  ];

  const [filters, setFilters] = useState({
    rating: 0,
    minPrice: 0,
    maxPrice: 1000,
    name: '',
  });

  const filterProducts = () => {
    return jewelryData.filter(item =>
      item.rating >= filters.rating &&
      item.price >= filters.minPrice &&
      item.price <= filters.maxPrice &&
      item.title.toLowerCase().includes(filters.name.toLowerCase())
    );
  };

  return (
    <div>
        <Jewelerycoll/>
   
    <div className="container pt-8 flex flex-col lg:flex-row">
      {/* Hero Section */}
   


      {/* Sidebar Filters */}
      <div className="filters-sidebar bg-gray-50 p-6 w-full lg:w-1/4 space-y-6 mb-8 lg:mb-0">
        <h2 className="font-medium text-xl">Filters</h2>

        {/* Filter by Name */}
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Filter by Rating */}
        <div>
          <span className="font-medium">Rating:</span>
          <div className="flex space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map(rating => (
              <button
                key={rating}
                onClick={() => setFilters({ ...filters, rating })}
                className={`px-1 py-1 rounded-full ${filters.rating === rating ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {rating} Star
              </button>
            ))}
          </div>
        </div>

        {/* Filter by Price */}
        <div>
          <span className="font-medium">Price:</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value, 10) })}
            className="w-full mt-2"
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div id="products" className="products-grid w-full lg:w-3/4">
        <h2 className="font-medium text-2xl pb-4 text-center">Shop Our Jewelry Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10">
          {filterProducts().map((item, index) => (
            <Productcard
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
    </div>
    <Footerforall/>
    </div>
  );
};

export default Jewelry;
