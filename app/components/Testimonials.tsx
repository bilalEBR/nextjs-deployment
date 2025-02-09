import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div>
      <br></br>
          <h2 className='font-medium text-2xl pb-4 pl-10 '>Testimonials</h2>
      <div className='container pt-16 pb-16 grid-cols-2 flex '>
     
        {/* <div className="grid lg:grid-cols-[300px,1fr] gap-4" >
           
           </div> */}

    <div className="border border-gray-300  min-w-[150px] sm:min-w[200px] md:min-w-[300px] rounded-2xl grid place-items-center p-6 lg:p-0">
      <div className="text-center flex flex-col items-center gap-1">
        <Image 
        className='rounded-full inline-block'
        src="/profile.jpg"
        width={200}
        height={200}
        alt="dp"
        />

        <h2 className='text-gray-500 font-block text-[20px]'>
          Bilal ebrahim

        </h2>
        <p>CEO and Founder Invision</p>

        {/* <Image 
        className='inline-block py-2'
        src="/banner-8.jpg"
        width={80}
        height={80}
        alt="quotes"
        /> */}

        <p className='max-w-[200px] text-gray-500'>
          Lorem ipsum dolor sit amot consecutive lorem ipsum dolor sit amout.
        </p>
      </div>
    </div>

    <div className='bg-red-600 bg-[url{/banner9.jpg}] bg-cover h-[500px] w-[100%] rounded-2xl grid place-items-center'>
    <div className= 'bg-[#ffffffab] min-w-[270px] sm:min-w[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3'>
      <button className='bg-blackish text-white p-2 rounded-md'>
        25% discount

      </button>
      <h2 className='font-extrabold text-2xl text-[#272727]'>
        Summer Collection

      </h2>
      <p className='text-gray-500 text-[20px]'>
        Starting @ $20 <b>Shop now</b>
      </p>

    </div>


    </div>
      </div>
    </div>
  )
}

export default Testimonials
