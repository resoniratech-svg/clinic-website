import { useParams, Link } from 'react-router-dom'
import { allConditions } from '../data/treatments'
import { useEffect, useState } from 'react'

export default function TreatmentDetail({ onBookAppointment }) {
  const { slug } = useParams()
  const condition = allConditions.find((c) => c.slug === slug)
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      setLoading(true)
      import(`../data/content/${slug}.json`)
        .then((module) => {
          setContent(module.default)
          document.title = module.default.seoTitle || `${condition?.name} Treatment | We Care Homeopathy`
          
          let metaDesc = document.querySelector('meta[name="description"]')
          if (metaDesc) {
            metaDesc.setAttribute('content', module.default.seoDescription)
          } else {
            metaDesc = document.createElement('meta')
            metaDesc.name = 'description'
            metaDesc.content = module.default.seoDescription
            document.head.appendChild(metaDesc)
          }
        })
        .catch((e) => {
          console.error("Failed to load content for", slug, e)
          setContent(null)
          document.title = `${condition?.name} Treatment | We Care Homeopathy`
        })
        .finally(() => setLoading(false))
    }
  }, [slug, condition])

  if (!condition) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-heading text-xl font-bold text-brand-ink">Treatment not found</p>
        <Link to="/treatments" className="mt-4 inline-block text-brand-blue">Back to all treatments</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-12 border-b border-brand-border pb-10">
        <div className={`flex flex-col-reverse gap-10 ${condition.image ? 'md:flex-row md:items-center md:justify-between md:gap-16' : ''}`}>
          
          <div className="flex-1 md:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">TREATMENTS / {condition.name}</p>
            <h1 className="mt-2 font-heading text-4xl md:text-5xl font-extrabold text-brand-blue">{condition.name}</h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-brand-slate">
              {content ? content.seoDescription : `Learn about the homeopathic approach to treating ${condition.name} at We Care Homeopathy.`}
            </p>
            <button
              onClick={onBookAppointment}
              className="mt-8 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-cardHover hover:-translate-y-0.5 hover:bg-brand-redDeep transition-transform"
            >
              Book a Consultation
            </button>
          </div>

          {condition.image && (
            <div className="w-full md:w-[45%] lg:w-1/2">
              <img 
                src={condition.image} 
                alt={`${condition.name} Treatment`} 
                className="w-full h-auto rounded-2xl shadow-sm object-contain max-h-[400px]"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {loading ? (
          <div className="py-20 text-center text-brand-slate animate-pulse">Loading detailed treatment information...</div>
        ) : content ? (
          <div className="space-y-12 text-brand-slate leading-relaxed text-base">
            
            <section>
              <h2 className="mb-6 font-heading text-2xl md:text-3xl font-extrabold text-brand-blue">What is {condition.name}?</h2>
              <div className="space-y-4">
                {content.whatIs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 font-heading text-2xl md:text-3xl font-extrabold text-brand-blue">Causes of {condition.name}</h2>
              <div className="space-y-4">
                {content.causes.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-[#f8fafc] p-8 border border-brand-border shadow-sm">
              <h2 className="mb-6 font-heading text-2xl md:text-3xl font-extrabold text-brand-blue">Homeopathic Approach</h2>
              <div className="space-y-4">
                {content.homeopathicApproach.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 font-heading text-2xl md:text-3xl font-extrabold text-brand-blue">Why Choose We Care Homeopathy?</h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

          </div>
        ) : (
          <div className="py-20 text-center text-brand-slate">
            Detailed information for this condition is currently being updated. Please check back soon or book a consultation to speak with our doctors.
          </div>
        )}
      </div>
    </div>
  )
}
