import Image from 'next/image'
import myImage from '../images/oifu.jpg'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Headermain = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
      <div className="container sm:flex lg:justify-between place-items-center ">
        {/* <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish"> */}
        <div className=" text-center pb-4 sm:pb-0 text-blackish">

        <Image
        src={myImage} // Path to your image (relative to public folder)
        alt="Description of image"
        width={200}  // Set the width
        height={100} // Set the height
      />

        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
            <input className='border-gray-200 border p-2 px-4 rounded-lg w-full' type="text" placeholder='Enter any product name' />

            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400'/>
        </div>
        <div className=' hidden sm:flex lg:flex xl:flex gap-4 text-gray-500 text-[30px]'>
            <BiUser/>
            <div className='relative'>
            <FiHeart/>
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
            </div>


            <div className='relative'>
            <HiOutlineShoppingBag/>
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Headermain
