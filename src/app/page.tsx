import Image from "next/image";
import { PageSection } from "./components/pageSection";
import { ProfessionalCard } from "./components/professionalCard";

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
      <PageSection backgroundImage="/bg-image-logo-with-name.png"/>
      <PageSection backgroundImage="/bg-image-white.png">
         <div className="flex items-center justify-center gap-36 w-full h-full">
          <ProfessionalCard {...professionals['maria']}/>
          <ProfessionalCard {...professionals['adriana']}/>
         </div>
      </PageSection>
      <div className="bg-red-300 h-[70vh]">
        test
      </div>
      <div className="bg-red-400 h-[70vh]">
        test
      </div>
    </div>
  );
}
