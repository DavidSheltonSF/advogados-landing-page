import { ReactNode } from "react";

interface Props {
  backgroundImage: string,
  children?: ReactNode;
  extraClasses?: string;
}

export function PageSection(props: Props) {
  const { backgroundImage, children, extraClasses }  = props

   return (
    <section className={`flex bg-center bg-cover bg-no-repeat bg-no-repeat h-auto min-h-[70vh] items-center justify-center ${extraClasses}`} style={{backgroundImage: `url(${backgroundImage})`}}>
      { children }
    </section>
   )
}