import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TreatmentCard({ name, slug, categoryName }) {
  return (
    <Link
      to={`/treatments/${slug}`}
      className="group flex flex-col justify-between rounded-xl2 border border-brand-border bg-white p-5 shadow-card transition-shadow hover:shadow-cardHover"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{categoryName}</p>
        <p className="mt-1 font-heading text-base font-bold text-brand-ink">{name}</p>
      </div>
      <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue">
        Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
