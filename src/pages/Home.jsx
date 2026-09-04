import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cross, CheckCircle, Eye, TrendingUp, Target, Droplets, Leaf, Clock, HeartPulse, UserCircle } from 'lucide-react'
import { treatmentCategories } from '../data/treatments'
import { blogs } from '../data/blogs'

const whyChooseUs = [
  { title: 'Personalized Care', text: 'Tailored treatment plans based on your unique health history.' },
  { title: 'Experienced Doctor', text: 'Expert homeopathic care with a focus on long-term wellness.' },
  { title: 'Modern Facility', text: 'A clean, welcoming environment designed for your comfort.' },
  { title: 'Transparent Pricing', text: 'Clear, upfront consultation and treatment costs.' },
]

const heroImages = [
  '/hero-image.jpg',
  '/hero-slide-1.png',
  '/hero-slide-2.png',
  '/hero-slide-3.png'
]

const whatIsHomeopathy = [
  {
    title: 'The Core Principle',
    text: 'Based on "like cures like" — a highly diluted substance that causes symptoms in a healthy person is used to trigger the body\'s own healing response.',
    icon: Droplets,
  },
  {
    title: 'How It\'s Different',
    text: 'Instead of just suppressing symptoms, homeopathy looks at the root cause — physical, lifestyle, and emotional — to build a unique treatment plan.',
    icon: HeartPulse,
  },
  {
    title: 'The Medicines',
    text: 'Prepared from natural sources (plants, minerals). Gentle, free of harsh side effects, and safe for all age groups including children and the elderly.',
    icon: Leaf,
  },
  {
    title: 'Treatment Duration',
    text: 'Acute conditions find relief quickly (days). Chronic issues show visible improvement in 4-12 weeks, with continued treatment for lasting results.',
    icon: Clock,
  },
  {
    title: 'Your First Visit',
    text: 'A detailed discussion of your medical history, symptoms, and lifestyle helps the doctor treat you as a whole person, not just a diagnosis.',
    icon: UserCircle,
  }
]

const ourValues = [
  { 
    title: 'VISION', 
    text: 'To build a healthier community by making trusted, personalized homeopathic care accessible to every family.',
    icon: Eye
  },
  { 
    title: 'MISSION', 
    text: 'To treat the root cause, not just the symptoms, with individualized care plans backed by modern homeopathic practice.',
    icon: TrendingUp
  },
  { 
    title: 'GOAL', 
    text: 'To help patients reduce dependency on long-term medication by strengthening the body\'s natural immunity and healing ability.',
    icon: Target
  },
]

const blogCategories = ['All', ...new Set(blogs.map(b => b.category))]
export default function Home({ onBookAppointment }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-24 lg:px-12">
          <div className="justify-self-center md:justify-self-end md:pr-4 lg:pr-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-redLight px-4 py-1.5 text-xs font-semibold text-brand-red">
              <Cross size={14} /> Now Accepting New Patients
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-brand-blue md:text-5xl">
              Gentle treatment, <span className="text-brand-blue">lasting</span> relief.
            </h1>
            <p className="mt-5 max-w-md text-base text-brand-slate">
              We Care Homeopathy treats the root cause, not just the symptom — for skin, hair,
              chronic and seasonal conditions, with a plan built around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onBookAppointment}
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-redDeep"
              >
                Book First Consultation
              </button>
              <Link
                to="/treatments"
                className="rounded-full border-2 border-brand-blue px-7 py-3.5 text-sm font-semibold text-brand-blue hover:bg-brand-blueLight"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-start w-full max-w-lg aspect-[4/3] md:aspect-[3/2] mx-auto md:mx-0">
            {heroImages.map((img, index) => (
              <img 
                key={img}
                src={img} 
                alt="Homeopathic Care" 
                className={`absolute inset-0 w-full h-full rounded-2xl shadow-cardHover object-cover mix-blend-multiply transition-opacity duration-700 ${
                  index === currentImageIndex ? 'opacity-90' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What is Homeopathy */}
      <section className="bg-white py-16 md:py-24 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold text-brand-blue md:text-4xl">What is Homeopathy?</h2>
            <p className="mt-3 text-brand-slate max-w-2xl mx-auto text-base">
              A natural system of medicine that treats the person as a whole, not just the disease.
            </p>
          </div>
          
          {/* Zigzag Layout */}
          <div className="relative mx-auto max-w-4xl mt-16">
            {/* Vertical Line Desktop */}
            <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-brand-blue/20 md:left-1/2 md:-ml-[1px]" />
          
            <div className="space-y-12 md:space-y-16">
              {whatIsHomeopathy.filter((_, idx) => idx !== 3).map((item, i) => (
                <div key={item.title} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Side A: Icon + Heading */}
                  <div className={`w-full md:w-1/2 flex items-center ${i % 2 === 0 ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:justify-start'}`}>
                    <div className={`flex items-center gap-4 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                       <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-md relative z-10 ring-4 ring-white md:ring-0">
                          <item.icon size={24} />
                       </div>
                       <h3 className={`font-heading text-xl font-bold text-brand-ink ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{item.title}</h3>
                    </div>
                  </div>
          
                  {/* Desktop Center Node on line */}
                  <div className="hidden md:block absolute left-1/2 -ml-[5px] top-1/2 -mt-[5px] h-2.5 w-2.5 rounded-full bg-brand-red ring-4 ring-white z-10" />
          
                  {/* Side B: Text */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <p className={`text-sm leading-relaxed text-brand-slate ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{item.text}</p>
                  </div>
          
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mx-auto max-w-4xl mt-20 mb-16 rounded-xl2 bg-brand-bg p-8 border border-brand-border shadow-sm">
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl font-bold text-brand-blue">How Long Does Treatment Take?</h3>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Connecting Line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-brand-red/30 md:left-0 md:right-0 md:top-[15px] md:h-[2px] md:w-full md:bottom-auto" />
              
              <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4 relative z-10">
                
                {/* Stage 1 */}
                <div className="flex md:flex-col items-start md:items-center gap-4 md:w-1/3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white ring-4 ring-brand-bg">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div className="md:text-center mt-1 md:mt-2">
                    <h4 className="font-heading font-bold text-brand-ink">Acute Conditions</h4>
                    <p className="text-xs text-brand-slate mt-1">Few days to 2 weeks</p>
                  </div>
                </div>
          
                {/* Stage 2 */}
                <div className="flex md:flex-col items-start md:items-center gap-4 md:w-1/3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white ring-4 ring-brand-bg">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div className="md:text-center mt-1 md:mt-2">
                    <h4 className="font-heading font-bold text-brand-ink">Chronic Conditions</h4>
                    <p className="text-xs text-brand-slate mt-1">4 to 12 weeks for visible improvement</p>
                  </div>
                </div>
          
                {/* Stage 3 */}
                <div className="flex md:flex-col items-start md:items-center gap-4 md:w-1/3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white ring-4 ring-brand-bg">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div className="md:text-center mt-1 md:mt-2">
                    <h4 className="font-heading font-bold text-brand-ink">Long-term Results</h4>
                    <p className="text-xs text-brand-slate mt-1">3 to 6 months of continued care</p>
                  </div>
                </div>
          
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={onBookAppointment}
              className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-redDeep transition-colors"
            >
              Book Your First Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-blue md:text-3xl">Why Choose Us</h2>
            <p className="mt-2 text-sm text-brand-slate">Dedicated to providing the highest standard of homeopathic care.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 rounded-xl2 bg-brand-bg border border-brand-border">
                <CheckCircle className="text-brand-blue mb-4" size={28} />
                <h3 className="font-heading text-lg font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-brand-blue">Our Values</h2>
          <p className="mt-3 text-brand-slate max-w-2xl mx-auto">
            Genuine care, honest treatment, and your wellbeing — that's what we stand for.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ourValues.map((v) => (
              <div 
                key={v.title} 
                className="group rounded-xl2 p-8 text-center shadow-card border border-brand-border bg-white text-brand-ink transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue hover:text-white hover:border-brand-blue"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full mb-5 bg-brand-blueLight transition-colors duration-300 group-hover:bg-white/20">
                  <v.icon className="text-brand-blue transition-colors duration-300 group-hover:text-white" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold tracking-wide">{v.title}</h3>
                <p className="text-sm leading-relaxed text-brand-slate transition-colors duration-300 group-hover:text-blue-50">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand-blue md:text-3xl">Areas we treat</h2>
            <p className="mt-1 text-sm text-brand-slate">Personalised homeopathic care across multiple focus areas.</p>
          </div>
          <Link to="/treatments" className="hidden items-center gap-1 text-sm font-semibold text-brand-blue md:flex">
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {treatmentCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/treatments/category/${cat.slug}`}
              className="flex flex-col items-center gap-3 rounded-xl2 border border-brand-border bg-white p-6 text-center shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blueLight text-brand-blue">
                <Cross size={20} />
              </div>
              <p className="font-heading text-sm font-bold text-brand-ink">{cat.name}</p>
              <p className="text-xs text-brand-slate">{cat.conditions.length} conditions</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-brand-bg py-16">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-blue md:text-3xl">Health Tips & Articles</h2>
            {/* Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 md:pb-0">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 text-sm font-bold rounded-full transition-colors ${
                    activeCategory === cat 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'bg-white text-brand-slate border border-brand-border hover:bg-brand-blueLight hover:text-brand-blue'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div 
            className="grid grid-cols-1 gap-6 md:grid-cols-3 min-h-[250px]"
            key={activeCategory}
            style={{ animation: 'fadeIn 500ms ease-out forwards' }}
          >
            {blogs
              .filter(b => activeCategory === 'All' || b.category === activeCategory)
              .map((b) => (
              <Link 
                key={b.slug} 
                to={`/blogs/${b.slug}`} 
                className="rounded-xl2 bg-white p-6 shadow-card hover:shadow-cardHover border border-brand-border flex flex-col transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-red bg-brand-redLight px-3 py-1 rounded-full">{b.category}</span>
                  <span className="text-xs font-medium text-brand-slate">
                    {new Date(b.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-ink mb-3 line-clamp-2">{b.title}</h3>
                <p className="text-sm text-brand-slate line-clamp-3 mb-2 flex-1">{b.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-blueDeep py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
            Ready to start your treatment plan?
          </h2>
          <button
            onClick={onBookAppointment}
            className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-redDeep"
          >
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
