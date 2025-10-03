import Image from "next/image";
import { PageSection } from "./components/pageSection";
import { ProfessionalCard } from "./components/professionalCard";

export default function Home() {
  return (
    <div className="flex flex-col">

      <PageSection backgroundImage="/bg-image-logo-with-name.png">
        <div className="flex flex-col gap-2 w-[24%] ml-16">
          <h1 className="text-5xl">Hiath & Sales</h1>
          <p className="text-3xl">Advocacia</p>
          <p className="text-xl">Lorem ipsum dolor sit met consectetur, adipisicing elit. Distinctio quaerat harum illum consequatur impedit voluptatum minus aut, mollitia laudantium libero, nemo maiores nam totam aperiam velit asperiores, non quos recusandae.</p>
        </div>
      </PageSection>
      <PageSection backgroundImage="/bg-image-white.png">
         <div className="flex items-center justify-center gap-36 w-full h-full">
          <ProfessionalCard photo="photos/maria-photo.png"/>
          <ProfessionalCard photo="photos/adriana-photo.png"/>
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
