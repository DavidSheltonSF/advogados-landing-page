import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/+5521974694530"  target="_blank" className="fixed button-5 right-5 bottom-8 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition duration-300 z-50">
      <FaWhatsapp size={32}/>
    </a>
  )
}