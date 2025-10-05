import { ReactNode } from "react";
import { PageContainer } from "../pageContainer";

export function Footer(){
  return (
    <footer className="flex items-center h-[20vh] bg-black w-full">
       <PageContainer extraClasses="flex flex-col h-[90%] items-center justify-evenly">
          <div>
            <h3 className="text-2xl font-bold">Siga-nos nas redes sociais</h3>
          </div>
          <div className="flex gap-8">
            <a 
          href="https://www.instagram.com/advocaciahiathesales/"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/instagram-white-icon.svg" alt="" />
          </a>
          <a 
          href="https://web.facebook.com/maryy.sales/"
          target="_blank"
          className="cursos-pointer"
          >
            <img className="w-10" src="icons/facebook-white-icon.png" alt="" />
          </a>
          </div>
        </PageContainer>
    </footer>
  )
}