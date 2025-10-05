import { ReactNode } from "react";

export function Footer({children}: {children: ReactNode}){
  return (
    <footer className="flex items-center h-[20vh] bg-black w-full">
      {children}
    </footer>
  )
}