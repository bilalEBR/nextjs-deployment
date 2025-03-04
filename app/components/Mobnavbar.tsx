import React from 'react'
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'

const Mobnavbar = () => {
  return (
    <div className='hidden md:hidden sm:hidden xl:hidden  fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8'>
        <div className="flex justify-between text-[28px] py-2">
            <IoMenuOutline/>
            <div className="relative">
                <HiOutlineShoppingBag/>
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                    0
                </div>
            </div>
            <AiOutlineHome/>
            <div className="relative">
            <HiOutlineHeart/>
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                    0
                </div>
                </div>
                <AiOutlineAppstore/>
        </div>
      
    </div>
  )
}

export default Mobnavbar
