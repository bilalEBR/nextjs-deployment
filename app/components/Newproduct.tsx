import React from 'react'
import Productcard from './Productcard';

const Newproduct = () => {

  const productData = [
    {
        img: "/fleecezipjacket.jpg",
        title: "Women’s Quilted Jacket",
        desc: "Warm Quilted Jacket for Cold Days",
        rating: 4,
        price: "45",
    },
    {
        img: "/winterparka.jpg",
        title: "Winter Parka Jacket",
        desc: "Cozy Parka with Faux Fur Lining",
        rating: 5,
        price: "70",
    },
    {
        img: "/casualbomber.jpg",
        title: "Casual Bomber Jacket",
        desc: "Stylish Bomber Jacket for Everyday Wear",
        rating: 3,
        price: "40",
    },
    {
        img: "/cordurovejacket.jpg",
        title: "Corduroy Jacket",
        desc: "Soft Corduroy Jacket for Casual Outfits",
        rating: 4,
        price: "50",
    },
    {
        img: "/classicdeninjacket.jpg",
        title: "Classic Denim Jacket",
        desc: "Timeless Denim Jacket for All Seasons",
        rating: 2,
        price: "35",
    },
    {
        img: "/fleecezipjacket.jpg",
        title: "Fleece Zip Jacket",
        desc: "Comfortable Fleece Zip-Up Jacket",
        rating: 2,
        price: "25",
    },
];

  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4 text-center'>New products</h2>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-x-20 xl:gap-y-10"> 
          {productData.map((item, index) => (
            <div key={index} className="relative flex flex-col justify-between h-full">
              <Productcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Newproduct
