import React from 'react';
import Link from 'next/link';
import Footerforall from '../components/Footerforall';

type Category = {
  id: number;
  name: string;
  imageUrl: string;
  link: string; // Added link field
};

const categories: Category[] = [
  { id: 1, name: 'Electronics', imageUrl: '/electronics.jpg', link: '/items/electronics' },
  { id: 2, name: 'Fashion', imageUrl: '/fashion.jpg', link: '/fashions' },
  { id: 3, name: 'Home & Kitchen', imageUrl: '/kitchen.jpg', link: '/items/home-kitchen' },
  { id: 4, name: 'Sports', imageUrl: '/sports.jpg', link: '/items/sports' },
  { id: 5, name: 'Books', imageUrl: '/books.jpg', link: '/items/books' },
  { id: 6, name: 'Toys', imageUrl: '/toys.jpg', link: '/items/toys' },
  { id: 7, name: 'Beauty', imageUrl: '/kosmotics.jpg', link: '/items/beauty' },
  { id: 8, name: 'Jewelry', imageUrl: '/jeweleries.jpg', link: '/items/jewelry' },
];

const page = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Browse Categories</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Sidebar (optional) */}
        <div className="lg:w-1/4 space-y-4 mb-8 lg:mb-0">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            {/* Example Filters */}
            <div className="space-y-2">
              <button className="w-full py-2 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200">Price: Low to High</button>
              <button className="w-full py-2 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200">Price: High to Low</button>
              <button className="w-full py-2 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200">Top Rated</button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:w-3/4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Updated: Directly wrap the img tag with Link */}
              <Link href={category.link}>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footerforall/>
    </div>
  );
};

export default page;
