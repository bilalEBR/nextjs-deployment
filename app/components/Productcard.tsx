import Image from 'next/image'; 
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number | string;
}

const Productcard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {
  const generaterating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] flex flex-col h-full">
      <div className="h-56">
        {/* Apply fixed width and height for consistent image size */}
        <Image 
          className="w-full h-full object-cover rounded-lg"  // Fixed height with object-cover for consistent images
          src={img} 
          width={500} 
          height={300} 
          alt={title} 
        />
      </div>
      
      <div className="space-y-2 py-2 flex-grow">
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div>
          {generaterating(rating)}
        </div>
        <div className="font-bold flex gap-4">
          ${price} 
          <del className='text-gray-500 font-normal'>
            ${typeof price === 'string' ? price : `${price + 50}.00`}
          </del>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-all focus:outline-none mx-4 mb-4">
        Buy Now
      </button>
    </div>
  );
};

export default Productcard;
