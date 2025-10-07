export function ProfessionalCardSkeleton() {

   return (
    <article className="flex flex-col items-center w-88 h-128 rounded-2xl shadow-md hover:-translate-y-5 animate-pulse p-5">
       <header className="h-[52%] w-full">
         <div className="size-full rounded-xl bg-gray-300">
         </div>
      </header>
      <main className=" h-[40%] flex flex-col justify-evenly items-center w-full">
         <span className="bg-gray-300 rounded-full h-3 w-[80%]"></span>
         <span className="bg-gray-300 rounded-full h-3 w-[75%]"></span>
         <span className="bg-gray-300 rounded-full h-3 w-[70%]"></span>
         <span className="bg-gray-300 rounded-full h-3 w-[75%]"></span>
      </main>
      <footer className="h-[12%] w-full flex items-center justify-between">
         <span className="bg-blue-200 rounded-full content-center w-20 h-10"></span>
         <span className="bg-gray-300 rounded-full h-3 w-30"></span>
      </footer>
    </article>
   )
  }