'use client'
import { disableElement } from "@/app/utils/disableElement";
import { enableElement } from "@/app/utils/enableElement";
import { useEffect, useState } from "react";
import { CarouselCard } from "../carouselCard";

export interface CarouselCard {
  image: string,
  title: string,
  items: string[]
} 

export function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    function checkButtons() {
      if(current === 0){
        disableElement('.leftButton');
      } else {
        enableElement('.leftButton')
      }

      if(current === cards.length - 1) {
        disableElement('.rightButton')
      } else {
        enableElement('.rightButton')
      }
    }
    checkButtons()
  }, [current])

  let startX = 0;

  const cards: CarouselCard[] = [
    {
      image: 'carousel/trabalhista.png',
      title: 'Trabalhista',
      items: [
        "Rescisão de contrato",
        "Verbas rescisórias",
        "Indenização trabalhista",
        "Horas extras e adicionais",
        "Reconhecimento de vínculo empregatício",
        "Assédio moral ou sexual",
        "Acidente de trabalho",
        "FGTS e INSS",
        "Reintegração ao trabalho",
        "Consultoria preventiva"
      ]
    },
    {
      image: 'carousel/familia.png',
      title: 'Família',
      items: [
      "Divórcio e separação",
      "Pensão alimentícia",
      "Guarda e visitas de filhos",
      "Reconhecimento e dissolução de união estável",
      "Regulamentação de convivência familiar",
      "Partilha de bens",
      "Investigação de paternidade",
      "Adoção",
      "Alteração de nome",
      "Interdição e curatela"
      ]
    },
    {
      image: 'carousel/previdenciario.png',
      title: 'Previdência',
      items: [
      "Aposentadoria por idade",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria por invalidez",
      "Auxílio-doença",
      "Auxílio-acidente",
      "Benefício de Prestação Continuada (BPC/LOAS)",
      "Pensão por morte",
      "Revisão de benefícios",
      "Tempo de contribuição e contagem especial",
      "Planejamento previdenciário"
      ]
    }
  ]

  const nextSlide = () => {
    if(current < cards.length - 1) {
      setCurrent(current + 1)
    } 
  }

  const prevSlide = () => {
     if(current > 0) {
      setCurrent(current - 1)
    }
  }

  function touchStart(e: any) {
    startX = e.touches[0].clientX;
  }

  function touched(e: any) {
    const endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) {
      nextSlide();
    } else if(endX - startX > 50) {
      prevSlide()
    }
  }


  return (
    <div className="flex justify-center items-center relative w-180 max-md:w-180 overflow-hidden ">
      <div onTouchStart={touchStart}  onTouchEnd={touched} className="overflow-hidden rounded-xl">
        <div className="flex w-120 h-120 max-md:w-130 max-md:h-130 max-sm:w-80 max-sm:h-90 rounded-xl transition-transform duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
        {cards.map((card, index) => {
          return (
            <CarouselCard key={index} title={card.title} image={card.image} items={card.items} />
          )
        })}
      </div>
      </div>
      <button onClick={prevSlide} className="absolute left-1 text-blue-400 bg-white max-md:bg-white/60 rounded-xl leftButton">
        <img className="w-20 max-md:w-15" src="icons/arrow-left.svg" alt="" />
      </button>
      <button onClick={nextSlide} className="absolute right-1 text-white bg-blue-400 bg-white max-md:bg-white/60 rounded-xl rightButton">
        <img className="w-20 max-md:w-15" src="icons/arrow-right.svg" alt="" />
      </button>
    </div>
  )
}