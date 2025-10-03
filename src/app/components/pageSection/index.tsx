import { ReactNode } from "react";

interface Props {
  backgroundImage: string,
  children?: ReactNode;
  mobileConfigClasses?: string;
}

export function PageSection(props: Props) {
  const { backgroundImage, children, mobileConfigClasses }  = props

   return (
    <section className={`flex bg-center bg-cover bg-no-repeat bg-no-repeat h-[70vh] items-center ${mobileConfigClasses}`} style={{backgroundImage: `url(${backgroundImage})`}}>
      { children }
    </section>
   )
}