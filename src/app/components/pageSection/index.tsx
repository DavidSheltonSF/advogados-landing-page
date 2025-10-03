import { ReactNode } from "react";

interface Props {
  backgroundImage: string,
  children?: any
}

export function PageSection(props: Props) {
  const { backgroundImage, children }  = props
  console.log(backgroundImage)
   return (
    <section className={`flex bg-center bg-cover bg-no-repeat bg-no-repeat h-[70vh] items-center`} style={{backgroundImage: `url(${backgroundImage})`}}>
      { children }
    </section>
   )
}