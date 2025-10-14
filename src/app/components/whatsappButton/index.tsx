'use client'
export function WhatsAppButton() {
  return (
    <div className="fixed right-5 bottom-8 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition duration-300">
      <a href="#" target="_blank" >
        <div className="w-15 h-15 absolute right-[10px] bottom-[10px] max-md:right-[2px] max-md:bottom-[2px] bg-green-500 rounded-full animate-ping opacity-75"></div>
        <img className="w-12 max-md:w-8" src="icons/whatsapp-white-icon.svg" alt="" />
      </a>
    </div>
  )
}