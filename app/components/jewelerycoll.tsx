import Link from 'next/link'
import React from 'react'

const Jewelerycoll = () => {
  return (
   
         <div className="hero bg-gradient-to-r from-purple-600 to-pink-500 text-white p-12 text-center mb-8">
  <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Exclusive Jewelry Collection</h1>
  <p className="mt-4 text-lg sm:text-xl">Explore our curated selection of fine jewelry and discover the perfect piece for any occasion.</p>
  <Link href="#products">
    <button className="mt-6 inline-block bg-white text-purple-600 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all">
      Shop Now
    </button>
  </Link>
  
</div>
    
  )
}

export default Jewelerycoll
