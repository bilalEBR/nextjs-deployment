"use client";
import React, { useState } from 'react';
import Productcard from '../components/Productcard';
import Menscoll from '../components/menscoll';
import Footerforall from '../components/Footerforall';

const Men = () => {
  const menProductData = [
    { img: '/jacket5.jpg', title: 'Men Jacket', desc: 'Winter Jacket for Men', rating: 4, price: 49 },
    { img: '/mencoat.jpg', title: 'Men Coat', desc: 'Warm Wool Coat', rating: 5, price: 79 },
    { img: '/mentshirt.jpg', title: 'Men T-Shirt', desc: 'Cotton T-Shirt', rating: 3, price: 19 },
    { img: '/mensjeans.jpg', title: 'Men Jeans', desc: 'Denim Blue Jeans', rating: 4, price: 39 },
    { img: '/menshoes.jpg', title: 'Men Shoes', desc: 'Running Shoes', rating: 5, price: 59 },
    { img: '/menwatch.jpg', title: 'Men Watch', desc: 'Luxury Wrist Watch', rating: 4, price: 199 },
  ];

  const [filters, setFilters] = useState({
    rating: 0,
    minPrice: 0,
    maxPrice: 200,
    name: '',
  });

  const filterProducts = () => {
    return menProductData.filter(item =>
      item.rating >= filters.rating &&
      item.price >= filters.minPrice &&
      item.price <= filters.maxPrice &&
      item.title.toLowerCase().includes(filters.name.toLowerCase())  // Filter by name
    );
  };

  return (
    <div>

  <Menscoll/>

    <div className="container pt-4 flex flex-col lg:flex-row">
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
                className={`px-1 py-1 rounded-full ${
                  filters.rating === rating ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
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
            max="200"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value, 10) })} // Parse as an integer
            className="w-full mt-2"
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container pt-16">
  <h2 className="font-medium text-2xl pb-4 text-center">Mens Fashion</h2>
  <div className="grid grid-cols-1 place-items-center sm:pace-item-start sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-10 xl:gap-x-20 xl:gap-y-10">
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

export default Men;
