import Image from "next/image";
import { PageSection } from "./components/pageSection";
import { ProfessionalCard } from "./components/professionalCard";
import { WhatsAppButton } from "./components/whatsappButton";

export default function Home() {

  const professionals = {
    maria: {
      photo: '/photos/maria-photo.png',
      name: "Maria José",
      description: "Lorem ipsum dolor sit met consectetur, adipisicing elit. Distinctio quaerat harum illum consequatur impedit voluptatum minus aut, mollitia laudantium nemo maiores nam totam aperiam velit asperiores, non quos recusandae.",
      specialization: "Trabalhista",
      experience: 5
    },
     adriana: {
      photo: '/photos/adriana-photo.png',
      name: "Adriana Hiath",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, maiores tempora perferendis architecto nam minus quo quia consectetur totam et sequi possimus reiciendis, nemo culpa quos consequuntur laborum rerum sunt.",
      specialization: "Família",
      experience: 5
    }
  }

  return (
    <div className="flex flex-col">
      <PageSection backgroundImage="/bg-image-logo-with-name-blue.png" mobileConfigClasses="max-md:h-[35vh]"/>
      <PageSection backgroundImage="/bg-image-white.png" mobileConfigClasses="max-md:h-[130vh]">
         <div className="flex max-md:flex-col gap-36 max-md:gap-10 items-center justify-center w-full h-full">
          <ProfessionalCard {...professionals['maria']}/>
          <ProfessionalCard {...professionals['adriana']}/>
         </div>
      </PageSection>
      <PageSection backgroundImage="bg-image-blue-with-border.png" mobileConfigClasses="max-[1766px]:h-[90vh] max-[1186px]:h-[120vh] max-[1186px]:h-[150vh] max-[508px]:h-[200vh]">
        <div className="w-[50%] m-auto h-full flex flex-col items-center mt-8">
          <header>
            <div className="mt-16 ">
              <h2 className="text-5xl my-4">FORMAÇÃO E EXPERIÊNCIA</h2>
              <h3 className="text-secondary-color text-xl">Somos especialistas na vara de FAMÍLIA e TRABALHISTA</h3>
            </div>
          </header>
          <main>
            <div className="flex flex-col m-auto mt-8 gap-5 w-[70vw]">
               <div className="flex flex-col w-full">
                <h3 className="text-secondary-color text-2xl mb-2">Dr. Maria José</h3>
                <p className="text-xl">Com 5 anos de experiência no campo jurídico, o Dra. Maria José atua com dedicação e transparência para garantir que seus clientes recebam o melhor suporte legal. Especializado em direito, trabalhista, e vara de família, ela oferece atendimento personalizado, analisando cada caso com atenção e compromisso. Graduada em Direito pela Estácio e inscrita na OAB [UF/Seção], a Dra. Maria tem como missão transformar situações complexas em soluções práticas, sempre defendendo os interesses de seus clientes com ética e excelência. </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-secondary-color text-2xl mb-2">Dr. Adriana Hiath</h3>
                <p className="text-xl">Com 5 anos de experiência no campo jurídico, o Dra. Maria José atua com dedicação e transparência para garantir que seus clientes recebam o melhor suporte legal. Especializado em direito, trabalhista, e vara de família, ela oferece atendimento personalizado, analisando cada caso com atenção e compromisso. Graduada em Direito pela Estácio e inscrita na OAB [UF/Seção], a Dra. Maria tem como missão transformar situações complexas em soluções práticas, sempre defendendo os interesses de seus clientes com ética e excelência. </p>
              </div>
            </div>
          </main>
        </div>
          
      </PageSection>
      <WhatsAppButton/>
    </div>
  );
}
