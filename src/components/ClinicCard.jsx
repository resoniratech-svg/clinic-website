import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'

export default function ClinicCard({ name, slug, address, phone }) {
  return (
    <Link
      to={`/clinics/${slug}`}
      className="flex flex-col rounded-xl2 border border-brand-border bg-white p-5 shadow-card transition-shadow hover:shadow-cardHover"
    >
      <p className="font-heading text-base font-bold text-brand-blueDeep">{name}</p>
      <p className="mt-2 flex items-start gap-2 text-sm text-brand-slate">
        <MapPin size={15} className="mt-0.5 shrink-0" /> {address}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-brand-slate">
        <Phone size={15} /> {phone}
      </p>
    </Link>
  )
}
