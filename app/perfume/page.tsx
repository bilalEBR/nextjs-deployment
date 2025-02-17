"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Productcard from '../components/Productcard';
import Footerforall from '../components/Footerforall';

// Sample perfume data
const perfumeData = [
  { id: 1, img: '/top1.jpg', title: 'Chanel No. 5', desc: 'Classic Floral Perfume', rating: 5, price: 120 },
  { id: 2, img: '/top2.jpg', title: 'Dior J’adore', desc: 'Elegant Floral Perfume', rating: 4, price: 99 },
  { id: 3, img: '/top3.jpg', title: 'Yves Saint Laurent Black Opium', desc: 'Sweet and Spicy Perfume', rating: 4, price: 105 },
  { id: 4, img: '/top4.jpg', title: 'Tom Ford Black Orchid', desc: 'Warm, Spicy, and Floral', rating: 5, price: 150 },
]

const PerfumePage = () => {
  return (
    <div>
    

      {/* Perfume Categories Section */}
      <div className="categories grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold ">Floral</h3>
          <p className="mt-2 text-gray-700">Delicate, sweet, and fresh notes of flowers.</p>
          <Link href="#floral">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold ">Woody</h3>
          <p className="mt-2 text-gray-700">Rich and warm notes with an earthy touch.</p>
          <Link href="#woody">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semiboldtext-purple-600">Fruity</h3>
          <p className="mt-2 text-gray-700">Bright, zesty, and tangy citrus and berries.</p>
          <Link href="#fruity">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>

        <div className="category-card bg-white rounded-lg shadow-lg text-center p-6">
          <h3 className="text-2xl font-semibold ">Oriental</h3>
          <p className="mt-2 text-gray-700">Warm, spicy, and exotic blends with a luxurious touch.</p>
          <Link href="#oriental">
            <button className="mt-4 bg-fuchsia-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-purple-700 transition-all">
              Explore
            </button>
          </Link>
        </div>
      </div>


      {/* Featured Perfume Products Section */}

<div className="container pt-16">
  <h2 className="font-medium text-2xl pb-4 text-center">Top Perfume Picks</h2>
  <div className="grid grid-cols-1 place-items-center sm:pace-item-start sm:grid-cols-4 lg:grid-col-4 xl:grid-cols-5 gap-10 xl:gap-x-20 xl:gap-y-10">
  {perfumeData.map((item, index) => (
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



      {/* Perfume Information Section (Scent Profiles) */}
      <div className="scent-profile p-8 bg-gray-50">
        <h2 className="text-3xl text-center ">Perfume Scent Profiles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="scent-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold ">Floral Notes</h3>
            <p className="mt-4 text-gray-700">
              Floral perfumes are light, refreshing, and feature notes of roses, jasmine, and lilies. Perfect for everyday wear!
            </p>
          </div>
          <div className="scent-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold ">Woody Notes</h3>
            <p className="mt-4 text-gray-700">
              Woody fragrances are warm and earthy, often featuring sandalwood, cedar, and patchouli for a bold, long-lasting scent.
            </p>
          </div>
          <div className="scent-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold ">Fruity Notes</h3>
            <p className="mt-4 text-gray-700">
              Fruity perfumes are bright and refreshing with notes of citrus, berries, and apples. Ideal for a lively and fresh fragrance.
            </p>
          </div>
          <div className="scent-card bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold ">Oriental Notes</h3>
            <p className="mt-4 text-gray-700">
              Oriental scents are rich and exotic, with deep, spicy notes such as vanilla, amber, and musk. Ideal for evening wear and special occasions.
            </p>
          </div>
        </div>
      </div>

      <Footerforall/>
    </div>
  )
}

export default PerfumePage
