'use client'
import { useEffect, useState } from "react";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  let rightButton: any = undefined;
  let leftButton: any = undefined;
 
  // Access document after the browser is loaded
  useEffect(() => {
    rightButton = document.querySelector('.rightButton');
    leftButton = document.querySelector('.leftButton');
  }, [])

  let startX = 0;
  const images = [
    'carousel/trabalhista.png',
    'carousel/familia.png',
    'carousel/previdenciario.png'
  ]

  const nextSlide = () => {
    if(current < images.length - 1) {
      setCurrent(current + 1)
      leftButton?.classList.remove('disabledElement')

      if(current === images.length - 2) {
        rightButton?.classList.add('disabledElement')
      }
    } 
  }

  const prevSlide = () => {
     if(current > 0) {
      setCurrent(current - 1)

      rightButton?.classList.remove('disabledElement')

      if(current === images.length - 2) {
        leftButton?.classList.add('disabledElement')
      }
    }
  }

  function touchStart(e: any) {
    startX = e.touches[0].clientX;
  }

  function touched(e: any) {
    const endX = e.changedTouches[0].clientX;
    console.log('touched')
    if(startX - endX > 50) {
      nextSlide();
    } else if(endX - startX > 50) {
      prevSlide()
    }
  }


  return (
    <div className="flex justify-center items-center relative w-180 h-160 max-md:w-180 max-md:h-210 overflow-hidden ">
      <div onTouchStart={touchStart}  onTouchEnd={touched} className="overflow-hidden rounded-xl">
        <div className="flex w-120 h-120 max-md:w-130 max-md:h-130 max-sm:w-80 max-sm:h-90 rounded-xl transition-transform duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
        {images.map((img, index) => {
          return <img className="w-full flex-shrink-0" key={index} src={img} alt=""/>
        })}
      </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-1 text-blue-400 bg-white max-md:bg-white/60 rounded-xl leftButton">
        <img className="w-20 max-md:w-15" src="icons/arrow-left.svg" alt="" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-1 text-white bg-blue-400 bg-white max-md:bg-white/60 rounded-xl rightButton">
        <img className="w-20 max-md:w-15" src="icons/arrow-right.svg" alt="" />
      </button>
    </div>
  )
}