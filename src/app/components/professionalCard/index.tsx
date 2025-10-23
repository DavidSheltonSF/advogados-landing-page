'use client'

import { reduceText } from "@/app/utils/reduceText";
import { useEffect, useState } from "react";
import { ProfessionalCardSkeleton } from "./skeleton";

interface Props {
  photo: string;
  name: string;
  description: string;
  whatsAppNumber: string;
  specializations: string[];
  experience: number;
}

export function  ProfessionalCard(props: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, [])

  function flipCard(e: any){
    if(!flipped){
      setFlipped(true);
    }
  }

  function unFlipCard(){
    if(flipped){
      setFlipped(false);
    }
  }

 
  const { photo, name, description, specializations, experience, whatsAppNumber } = props
  return (
   <>
     {
      isLoading ?
      <ProfessionalCardSkeleton/>

    :
    <article className={`relative professional-card flex flex-col items-center w-88 h-140 rounded-2xl bg-[#f6f6f6] shadow-md hover:-translate-y-5 transition duration-200 overflow-hidden ${flipped ? 'rotate-y-180' : ''}`} onClick={flipCard}>
      <div className="relative flex flex-col items-center w-full h-full p-5">
        <header className="h-[52%] w-full">
          <div className="size-full rounded-xl overflow-hidden aspect-video">
            <img className="object-cover w-full h-full object-top" src={photo} alt="" loading="lazy"/>
          </div>
        </header>
        <main className="h-[32%] flex flex-col items-center">
          <h1 className="mt-5 font-bold text-black text-xl">{name}</h1>
          <p className="mt-2 text-black text-center">{reduceText(description, 27)}</p>
        </main>
        <footer className="h-[12%] w-full flex flex-col items-center gap-4">
           <span className="text-center text-black w-full rounded-xl background-secondary-color">{experience} anos de experiência</span>
          <div className="flex gap-4">
            {
              specializations.map(specialization => {
                return <span className="text-black bg-blue-200 rounded-full content-center p-2 h-fit">{specialization}</span>
              })
            }
          </div>
        </footer>
      </div>
      <div className={`card-back absolute rotate-y-180 background-secondary-color h-full w-full ${!flipped ? 'hidden' : ''}`}>
        <div className="relative w-full h-full flex flex-col items-center gap-8">
          <div className="absolute flex items-center justify-center bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full right-[5%] top-[5%]" onClick={unFlipCard}>
            <img src="icons/reset.svg"/>
          </div>
          <div className="rounded-full hover:bg-white/50 whatsapp-btn mt-36">
            <a href={`https://wa.me/${whatsAppNumber}`} target="_blank">
              <img className="w-24" src="icons/whatsapp-white-icon.svg" alt="" loading="lazy"/>
            </a>
          </div>
          <h1 className="font-bold text-xl">Fale com a Dra. {name}</h1>
        </div>
      </div>
    </article>
     }
   </>
  )
}