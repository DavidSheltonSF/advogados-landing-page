'use client'
import { useState } from "react";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const images = [
    'carousel/trabalhista.png',
    'carousel/familia.png'
  ]

  const nextSlide = () => {
    if(current < images.length - 1) {
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
     if(current > 0) {
      setCurrent(current - 1)
    }
  }


  return (
    <div className="flex justify-center items-center relative w-180 h-160 overflow-hidden ">
      <div className="overflow-hidden rounded-xl">
        <div className="flex w-120 h-120 rounded-xl  transition-transform  duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
        {images.map((img, index) => {
          return <img className="w-full flex-shrink-0" key={index} src={img} alt=""/>
        })}
      </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-1 text-blue-400">
        <img className="w-20" src="icons/arrow-left.svg" alt="" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-1 text-white bg-blue-400">
        <img className="w-20" src="icons/arrow-right.svg" alt="" />
      </button>
    </div>
  )
}