import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919059803758?text=Hello%20We%20Care%20Homeopathy"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cardHover hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+917337557851"
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-cardHover hover:scale-105 transition-transform"
      >
        <Phone size={20} />
      </a>
    </div>
  )
}
