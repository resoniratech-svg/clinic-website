import { useParams, Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'
import { allBranches } from '../data/clinics'

export default function ClinicDetail({ onBookAppointment }) {
  const { slug } = useParams()
  const branch = allBranches.find((b) => b.slug === slug)

  if (!branch) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-heading text-xl font-bold text-brand-ink">Clinic not found</p>
        <Link to="/clinics" className="mt-4 inline-block text-brand-blue">Back to all clinics</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{branch.region}</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">We Care Homeopathy — {branch.name}</h1>

      <div className="mt-8 space-y-4 rounded-xl2 border border-brand-border bg-white p-6 shadow-card">
        <p className="flex items-start gap-3 text-sm text-brand-slate"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" /> {branch.address}</p>
        <p className="flex items-center gap-3 text-sm text-brand-slate"><Phone size={18} className="text-brand-blue" /> {branch.phone}</p>
        <p className="flex items-center gap-3 text-sm text-brand-slate"><Clock size={18} className="text-brand-blue" /> Mon–Sat: 10:00 AM – 7:00 PM</p>
      </div>

      <button
        onClick={onBookAppointment}
        className="mt-8 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-redDeep"
      >
        Book Appointment at this Clinic
      </button>
    </div>
  )
}
