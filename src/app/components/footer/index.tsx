import { ReactNode } from "react";
import { PageContainer } from "../pageContainer";

export function Footer(){
  return (
    <footer className="flex items-center h-[30vh] bg-black w-full">
       <PageContainer extraClasses="flex flex-col h-[90%] items-center gap-6 p">
          <div className="mt-8">
            <h3 className="text-2xl font-bold max-sm:text-center">Siga-nos no nosso Instagram</h3>
          </div>
          <div className="flex gap-8">
            <a 
          href="https://www.instagram.com/advocaciahiathesales/"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/instagram-white-icon.svg" alt="" />
          </a>
          </div>
        </PageContainer>
    </footer>
  )
}