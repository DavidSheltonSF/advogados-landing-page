'use client'
import { ReactNode } from "react";
import { PageContainer } from "../pageContainer";

export function Footer(){
  return (
    <footer className="flex flex-col h-[35vh] max-sm:h-[40vh] bg-black w-full text-white">
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
            <img className="w-10" src="icons/facebook-white-icon.png" alt="" />
          </a>
          <a 
          href="#"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/instagram-white-icon.svg" alt="" />
          </a>
          </div>
        </PageContainer>
        <PageContainer extraClasses="flex flex-col items-center justify-center gap-6">
          <div>
            <h3 className="text-xl font-bold max-sm:text-center">Icon Credits</h3>
          </div>
          <div>
            <a href="https://www.flaticon.com/free-icons/law" title="law icons">Law icons created by Freepik - Flaticon</a>
          </div>
        </PageContainer>
    </footer>
  )
}