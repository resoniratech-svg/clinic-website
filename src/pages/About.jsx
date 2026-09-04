export default function About() {
  return (
    <div>
      <div className="bg-brand-bg px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">About Us</p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue md:text-4xl">
            Care that treats the person, not just the diagnosis
          </h1>
          <p className="mt-4 text-sm text-brand-slate">
            We Care Homeopathy was founded on a simple idea: homeopathy works best when it's personal.
            Our doctors take the time to understand your full history before recommending a treatment plan.
          </p>
        </div>
      </div>

      {/* Meet Our Doctor Section */}
      <div className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-heading text-3xl font-extrabold text-brand-blue">
            Meet Our Doctor
          </h2>
          <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-xl2 bg-white p-8 shadow-card border border-brand-border md:flex-row md:items-start md:p-12">
            {/* Photo Placeholder */}
            <div className="w-full shrink-0 md:w-1/3">
              <div className="aspect-[3/4] w-full rounded-2xl bg-brand-bg flex items-center justify-center border-2 border-dashed border-brand-border text-center p-4">
                <span className="text-sm font-semibold text-brand-slate">Doctor Photo<br/>(Portrait Placeholder)</span>
              </div>
            </div>
            
            {/* Doctor Details */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="font-heading text-3xl font-extrabold text-brand-blue">Dr. Manasa</h3>
                <p className="mt-1 font-semibold text-brand-blue">BHMS (Bachelor of Homoeopathic Medicine and Surgery)</p>
              </div>
              
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-brand-redLight px-3 py-1 text-xs font-bold text-brand-red">
                  19 Years Experience
                </span>
                <span className="inline-flex items-center rounded-full bg-brand-blueLight px-3 py-1 text-xs font-bold text-brand-blue">
                  100% Patient Recommendation Rate
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-brand-slate">
                Dr. Manasa brings 19 years of homeopathic practice to We Care Homeopathy's Karimnagar clinic. A BHMS graduate from Nagpur College of Homeopathy and Biochemistry (2007) and a registered member of the Central Council of Homeopathy, she has built a strong local reputation for treating skin conditions, allergies, and chronic ailments with individualised, patient-first care.
              </p>
              
              <div className="mb-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
                <div>
                  <p className="mb-2 font-bold text-brand-ink">Education & Registration</p>
                  <ul className="space-y-1 text-brand-slate">
                    <li>• BHMS – Nagpur College (2007)</li>
                    <li>• Central Council of Homeopathy</li>
                    <li>• Reg. No. 7035 (2009)</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-bold text-brand-ink">Clinic Location</p>
                  <p className="text-brand-slate">
                    We Care Homeopathy<br />
                    Jyothinagar, Karimnagar
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-3 font-bold text-brand-ink">Areas of Focus</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Skin conditions (atopic dermatitis, lichen planus, skin allergies)', 
                    'Pediatric care', 
                    'Chronic conditions (arthritis, diabetes)', 
                    'Allergy treatment'
                  ].map(tag => (
                    <span key={tag} className="rounded-md border border-brand-border bg-brand-bg px-3 py-1.5 text-xs font-medium text-brand-slate">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
