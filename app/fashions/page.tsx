import React from 'react'
import Productcard from '../components/Productcard';


const page = () => {

    const productData = [
        {
            img:"/jacket2.jpg",
            title:"Jacket",
            desc:"NEW YARN FULL-ZIP JACKET",
            rating:4,
            price:"15",
        },
        {
          img:"/jacket3.jpg",
          title:"Jacket",
          desc:"NEW YARN FULL-ZIP JACKET",
          rating:5,
          price:"15",
        },
         {
          img:"/jacket4.jpg",
            title:"Jacket",
            desc:"NEW YARN FULL-ZIP JACKET",
            rating:3,
            price:"15",
        },
        {
          img:"/jacket5.jpg",
            title:"Jacket",
            desc:"NEW YARN FULL-ZIP JACKET",
            rating:4,
            price:"15",
        },
        {
          img:"/jacket6.jpg",
            title:"Jacket",
            desc:"NEW YARN FULL-ZIP JACKET",
            rating:2,
            price:"15",
        },
        {
          img:"/jacket4.jpg",
            title:"Jacket",
            desc:"NEW YARN FULL-ZIP JACKET",
            rating:2,
            price:"15",
        },
    ];
    
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-4  text-center'>New products</h2>

        <div className="grid grid-cols-1 place-items-center sm:pace-item-start sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 gap-10 xl:gap-x-20 xl:gap-y-10"> 
          {productData.map((item,index) => (<Productcard
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price}
          />
        ) )}
        </div>
      </div>
    </div>
  )
}

export default page
