interface Props {
  photo: string
}


export function ProfessionalCard(props: Props) {
  const { photo } = props

  return (
    <article className="flex flex-col items-center w-88 h-128 rounded-2xl bg-[#f6f6f6] overflow-hidden p-5 shadow-md">
      <header className="h-[52%] w-full">
        <div className="size-full rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover object-[50%_8%]" src={photo} alt="" />
        </div>
      </header>
      <main className=" h-[40%] flex flex-col items-center">
        <h1 className="mt-5 font-bold text-black text-xl">Maria José</h1>
        <p className="mt-2 text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni accusantium ut incidunt reprehenderit odio beatae? Corrupti esse</p>
      </main>
      <footer className="h-[12%] w-full flex items-center justify-between">
        <span className="text-black bg-blue-200 rounded-full content-center p-2 h-fit">Trabalhista</span>
        
        <span className="text-black">5 anos de experiência</span>
      </footer>
  
    </article>
  )
}