'use client'
import { ReactNode } from "react";
import { PageContainer } from "../pageContainer";

export function Footer(){
  return (
    <footer className="flex flex-col h-[25vh] max-sm:h-[30vh] bg-black w-full text-white">
       <PageContainer extraClasses="flex flex-col items-center justify-center gap-6 p">
          <div className="flex justify-center items-center mt-5">
            <h3 className="text-2xl font-bold max-sm:text-center">Siga-nos nas redes sociais</h3>
          </div>
          <div className="flex gap-8">
            <a 
          href="#"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/facebook-white-icon.png" alt="" loading="lazy"/>
          </a>
          <a 
          href="#"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/instagram-white-icon.svg" alt="" loading="lazy"/>
          </a>
          </div>
        </PageContainer>
       
    </footer>
  )
}