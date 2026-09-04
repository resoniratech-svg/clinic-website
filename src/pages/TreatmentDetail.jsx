import { useParams, Link } from 'react-router-dom'
import { allConditions } from '../data/treatments'

export default function TreatmentDetail({ onBookAppointment }) {
  const { slug } = useParams()
  const condition = allConditions.find((c) => c.slug === slug)

  if (!condition) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-heading text-xl font-bold text-brand-ink">Treatment not found</p>
        <Link to="/treatments" className="mt-4 inline-block text-brand-blue">Back to all treatments</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className={`flex flex-col-reverse gap-10 ${condition.image ? 'md:flex-row md:items-center md:justify-between md:gap-16' : ''}`}>
        
        <div className="flex-1 md:max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{condition.category}</p>
          <h1 className="mt-2 font-heading text-3xl md:text-4xl font-extrabold text-brand-blue">{condition.name}</h1>

          <div className="mt-8 space-y-8 text-sm md:text-base leading-relaxed text-brand-slate">
            <section>
              <h2 className="font-heading text-lg md:text-xl font-bold text-brand-blue">Overview</h2>
              <p className="mt-2">
                {condition.name} is treated at We Care Homeopathy with an individualised remedy plan based on
                your full case history, lifestyle and constitution — not a one-size-fits-all prescription.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-lg md:text-xl font-bold text-brand-blue">Our approach</h2>
              <p className="mt-2">
                Your first consultation covers detailed history-taking, followed by a remedy plan and a
                review schedule so your doctor can track progress and adjust as needed.
              </p>
            </section>
          </div>

          <button
            onClick={onBookAppointment}
            className="mt-10 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-redDeep"
          >
            Book a Consultation
          </button>
        </div>

        {condition.image && (
          <div className="w-full md:w-[45%] lg:w-1/2">
            <img 
              src={condition.image} 
              alt={`${condition.name} Treatment`} 
              className="w-full h-auto rounded-2xl shadow-sm object-contain"
            />
          </div>
        )}

      </div>
    </div>
  )
}
