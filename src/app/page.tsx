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
      photo: '/photos/maria-312x312.webp',
      name: "Maria José",
      description: "Com 5 anos de experiência no campo jurídico, ela atua com dedicação e transparência para garantir que seus clientes recebam o melhor suporte legal.",
      whatsAppNumber: '5521974694530',
      specializations: ["Família", "Cívil"],
      experience: 5
    },
     adriana: {
      photo: '/photos/adriana-312x312.webp',
      name: "Adriana Hiath",
      description: "Possuindo 8 anos de experiência na área jurídica, ela atua com compromisso e clareza para oferecer o melhor suporte legal a seus clientes.",
      whatsAppNumber: '5521973910618',
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
              <a href="https://wa.me/5521974694530" target="_blank">Clique e fale conosco</a>
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
                <h3 className="text-secondary-color text-2xl mb-2">Dra. Maria José</h3>
                <p className="text-xl"> Especializada em na vara de família, ela oferece atendimento personalizado, analisando cada caso com atenção e compromisso. Graduada em Direito pela Estácio de Sá, sua missão transformar situações complexas em soluções práticas, sempre defendendo os interesses de seus clientes com ética e excelência. </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-secondary-color text-2xl mb-2">Dra. Adriana Hiath</h3>
                <p className="text-xl">
                Especialista em direito trabalhista, ela se destaca pelo atendimento humanizado, analisando cada caso com cuidado e dedicação. Graduada em Direito pela Universidade Estácio de Sá, seu propósito é tornar questões jurídicas complexas em soluções eficazes, sempre pautada na ética, responsabilidade e excelência profissional. </p>
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
