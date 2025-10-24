'use client'

import { PageSection } from "./components/pageSection";
import { ProfessionalCard } from "./components/professionalCard";
import { WhatsAppButton } from "./components/whatsappButton";
import { Footer } from "./components/footer";
import { PageContainer } from "./components/pageContainer";
import { Carousel } from "./components/carousel";

export default function Home() {

  const professionals = {
    maria: {
      photo: '/photos/maria-photo-312x208.webp',
      name: "Maria Sílva",
      description: "Com 5 anos de experiência no campo jurídico, Dra. Maria atenta para cada caso com atenção e empatia.",
      whatsAppNumber: '#',
      specializations: ["Família", "Cívil"],
      experience: 5
    },
     adriana: {
      photo: '/photos/adriana-photo-312x208.webp',
      name: "Adriana Morelo",
      description: "Possuindo 4 anos de experiência na área jurídica, ela age com paciência e ética, oferecendo o melhor atendimento aos seus clientes.",
      whatsAppNumber: '#',
      specializations: ["Trabalhista", "Previdênciário"],
      experience: 8
    }
  }
  

  return (
    <div className="flex flex-col">
      <PageSection backgroundImage="/bg-image-logo-with-name-blue.webp" extraClasses="min-h-[70vh] max-md:min-h-[35vh] max-sm:min-h-[30vh]"/>
      <PageSection backgroundImage="" extraClasses="bg-[#181818]">
        <PageContainer extraClasses="flex flex-col mt-20 min-h-[45vh] py-2 ">
          <div className="flex flex-col items-start gap-8 max-w-150">
            <h1 className="text-white text-5xl max-md:text-4xl max-sm:text-3xl">Buscando apoio jurídico ou consultoria?</h1>
            <button className="shadow-[color:#EBD180]/50 shadow-lg py-2 px-6 rounded-md text-black font-bold text-xl bg-[#EBD180] hover:bg-[#e2c56f]">
              <a href="https://wa.me/#" target="_blank">Clique e fale conosco</a>
            </button>
          </div>
        </PageContainer>
      </PageSection>
      <PageSection backgroundImage="/bg-image-white.png" extraClasses="min-h-[70vh]">
         <PageContainer extraClasses="flex items-center justify-center max-[800px]:flex-col gap-36 max-[800px]:gap-10
       my-5 justify-centerl">
          <ProfessionalCard {...professionals['maria']}/>
          <ProfessionalCard {...professionals['adriana']}/>
         </PageContainer>
      </PageSection>
      <PageSection backgroundImage="" extraClasses="h-auto bg-[#042A49]  border-t-[#EBD180] border-t-20 min-h-[70vh]">
        <PageContainer extraClasses="flex flex-col items-center my-5 py-2 text-white">
          <header>
            <div className="flex flex-col gap-3 justify-center items-center">
              <h2 className="text-5xl">FORMAÇÃO E EXPERIÊNCIA</h2>
              <h3 className="text-secondary-color text-xl">Somos especialistas na vara de FAMÍLIA, TRABALHISTA e PREVIDENCIÁRIA</h3>
            </div>
          </header>
          <main>
            <div className="flex flex-col m-auto mt-8 gap-5 w-[70vw]">
              <div className="flex flex-col w-full">
                <h3 className="text-secondary-color text-2xl mb-2">Dra. Maria Sílva</h3>
                <p className="text-xl"> A Dra. Maria é uma advogada dedicada, reconhecida por sua atuação ética e comprometida com a justiça. Possui ampla experiência em assessoria jurídica e busca sempre soluções eficazes e humanizadas para seus clientes.</p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-secondary-color text-2xl mb-2">Dra. Adriana Morelo</h3>
                <p className="text-xl">
               A Dra. Adriana é uma profissional experiente e atenta aos detalhes, com forte atuação em defesa dos direitos de seus clientes. Sua abordagem estratégica e empática garante excelência em cada caso que conduz.</p>
              </div>
            </div>
          </main> 
        </PageContainer>
      </PageSection>
      <PageSection backgroundImage="" extraClasses="max-sm:h-[60vh] bg-[#042A49]  border-t-[#EBD180] border-t-20 min-h-[70vh]">
        <Carousel/>
      </PageSection>
      <PageSection backgroundImage="" extraClasses="h-auto bg-[#042A49] min-h-[90vh] border-t-[#EBD180] border-t-20">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctL4MLpWxorTjVq3lcDNo2ys-vqamJkDkgOEYGwlMSUo6v7Q/viewform?embedded=true" width="640" height="830">Loading…</iframe>
      </PageSection>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}
