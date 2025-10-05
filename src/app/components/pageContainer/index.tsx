import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  extraClasses?: string;
}

export function PageContainer(props: Props){

  const {children, extraClasses} = props;

  return (
    <div 
    className={`w-[80%] m-auto h-full ${extraClasses}`}>
      {children}
    </div>
  )
}