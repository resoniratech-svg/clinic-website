import { clinicRegions } from '../data/clinics'
import ClinicCard from '../components/ClinicCard'

export default function Clinics() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Clinics</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">Find a Clinic Near You</h1>
      <p className="mt-2 max-w-xl text-sm text-brand-slate">
        Visit our state-of-the-art clinic. Walk in or book ahead.
      </p>

      {clinicRegions.map((r) => (
        <div key={r.region} className="mt-10">
          <h2 className="font-heading text-lg font-bold text-brand-blueDeep">{r.region}</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {r.branches.map((b) => (
              <ClinicCard key={b.slug} {...b} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
