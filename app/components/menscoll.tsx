import Link from 'next/link'
import React from 'react'

const Menscoll = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-blue-600 to-green-500 text-white p-12 text-center mb-8">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Exclusive Men's Fashion</h1>
        <p className="mt-4 text-lg sm:text-xl">Explore our curated collection of men's fashion and find the perfect style for every occasion.</p>
        <Link href="#products">
          <button className="mt-6 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all">
            Shop Now
          </button>
        </Link>
      </div>
    
      
    </div>
  )
}

export default Menscoll
