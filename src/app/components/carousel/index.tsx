'use client'
import { disableElement } from "@/app/utils/disableElement";
import { enableElement } from "@/app/utils/enableElement";
import { useEffect, useState } from "react";
import { CarouselCard, CarouselCardProps } from "../carouselCard";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    function checkButtons() {
      if(current === 0){
        disableElement('#carousel-left-btn');
      } else {
        enableElement('#carousel-left-btn')
      }

      if(current === cards.length - 1) {
        disableElement('#carousel-right-btn')
      } else {
        enableElement('#carousel-right-btn')
      }
    }
    checkButtons()
  }, [current])

  let startX = 0;

  const cards: CarouselCardProps[] = [
    {
      image: 'carousel/trabalhista-480x480.webp',
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
      ],
      alt: "Imagem ilustrativa sobre direito trabalhista, destacando temas como rescisão de contrato, verbas rescisórias, indenização trabalhista, horas extras, vínculo empregatício, assédio moral e sexual, acidente de trabalho, FGTS, INSS, reintegração e consultoria preventiva.",
      imageSizes: "carousel/trabalhista-480x480.webp 480w carousel/trabalhista-320x320.webp 320w"
    },
    {
      image: 'carousel/familia-480x480.webp',
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
      ],
      alt: "Imagem ilustrativa sobre direito de família, abordando temas como divórcio e separação, pensão alimentícia, guarda e visitas de filhos, união estável, convivência familiar, partilha de bens, investigação de paternidade, adoção, alteração de nome e curatela.",
      imageSizes: "carousel/familia-480x480.webp 480w carousel/familia-320x320.webp 320w"
    },
    {
      image: 'carousel/previdenciario-480x480.webp',
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
      ],
      alt: "Imagem ilustrativa sobre direito previdenciário, destacando temas como aposentadoria por idade, tempo de contribuição, aposentadoria por invalidez, auxílio-doença, auxílio-acidente, BPC ou LOAS, pensão por morte, revisão de benefícios, contagem especial e planejamento previdenciário.",
      imageSizes: "carousel/previdenciario-480x480.webp 480w carousel/previdenciario-320x320.webp 320w"
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
    <div className="flex justify-center items-center relative w-180">
      <div onTouchStart={touchStart}  onTouchEnd={touched} className="overflow-hidden rounded-xl">
        <div className="flex w-120 h-120 max-sm:w-80 max-sm:h-90 rounded-xl transition-transform duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
        {cards.map((card, index) => {
          return (
            <CarouselCard key={index} title={card.title} image={card.image} items={card.items} alt={card.alt} imageSizes={card.imageSizes} />
          )
        })}
      </div>
      </div>
      <button onClick={prevSlide} id="carousel-left-btn" className="absolute left-1 text-blue-400 bg-white max-sm:bg-white/60 rounded-xl">
        <img className="w-20 max-sm:w-15" src="icons/arrow-left.svg" alt="" loading="lazy"/>
      </button>
      <button id="carousel-right-btn" onClick={nextSlide} className="absolute right-1 text-white bg-blue-400 bg-white max-sm:bg-white/60 rounded-xl">
        <img className="w-20 max-sm:w-15" src="icons/arrow-right.svg" alt="" loading="lazy"/>
      </button>
    </div>
  )
}