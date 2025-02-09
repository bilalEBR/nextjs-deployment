"use client"

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';

const Hero = () => {
    const settings = {
        dots:true,
        infinite:true,
        slidesToShow:1,
        autoplay:true,
        pauseOnHover:false,
    };

    const slideData = [
        {
            id:0,
            img:"/banner-10.jpg",
            title:"Trending Item",
            mainTitle:"MEN'S LATEST FASHION SALE",
            price:"$15",
        },
        {
            id:1,
            img:"/banner-8.jpg",
            title:"Trending Accessories",
            mainTitle:"Modern SUNGLASSES",
            price:"$15",
        }, {
            id:2,
            img:"/banner-7.jpg",
            title:"Sale Offer",
            mainTitle:"NEW FASHION SUMMER SALE",
            price:"$30",
        },
    ];
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
    {slideData.map((item) =>(
        <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price}        
        />

    ))}
    </Slider>
      </div>
    </div>
  )
}

export default Hero
