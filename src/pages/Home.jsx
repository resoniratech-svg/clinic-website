import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cross, CheckCircle, Eye, TrendingUp, Target, Droplets, Leaf, Clock, HeartPulse, UserCircle } from 'lucide-react'
import { treatmentCategories } from '../data/treatments'

const whyChooseUs = [
  { title: 'Personalized Care', text: 'Tailored treatment plans based on your unique health history.' },
  { title: 'Experienced Doctor', text: 'Expert homeopathic care with a focus on long-term wellness.' },
  { title: 'Modern Facility', text: 'A clean, welcoming environment designed for your comfort.' },
  { title: 'Transparent Pricing', text: 'Clear, upfront consultation and treatment costs.' },
]

const heroImages = [
  '/homeTransition9.png',
  '/homeTransition6.png',
  // '/homepageTransition8.png',
  '/homeTransition7.png',
  '/homePageTrans5.png',
  '/homeTransition10.png',
  '/homeTransition11.png',
  '/homeTransition12.png'
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

const RevealRow = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-out ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
      }`}
    >
      {children(isVisible)}
    </div>
  );
};

const RevealCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

const ProgressiveLine = () => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setHeight(100);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.75; 
      const end = windowHeight * 0.25;   
      
      const totalDistance = rect.height + (start - end);
      const currentScroll = start - rect.top;
      
      let progress = currentScroll / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      setHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-brand-blue/10 md:left-1/2 md:-ml-[1px]">
      <div 
        className="absolute top-0 left-0 w-full bg-brand-blue"
        style={{ height: `${height}%`, transition: 'height 100ms ease-out' }}
      />
    </div>
  );
};

export default function Home({ onBookAppointment }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: 'url(/homeBackground2.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        {/* White/light overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-24 lg:px-12 relative z-10">
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
                className={`absolute inset-0 w-full h-full rounded-2xl shadow-cardHover object-contain mix-blend-multiply transition-opacity duration-700 ${
                  index === currentImageIndex ? 'opacity-90' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Wrapper for all sections below Hero */}
      <div className="bg-[linear-gradient(to_bottom,#ffffff_0%,#F8FAFC_40%,#EAF2FC_100%)]">

        {/* What is Homeopathy */}
        <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold text-brand-blue md:text-4xl">What is Homeopathy?</h2>
            <p className="mt-3 text-brand-slate max-w-2xl mx-auto text-base">
              A natural system of medicine that treats the person as a whole, not just the disease.
            </p>
          </div>
          
          {/* Zigzag Layout */}
          <div className="relative mx-auto max-w-4xl mt-16">
            <ProgressiveLine />
          
            <div className="space-y-12 md:space-y-16">
              {whatIsHomeopathy.filter((_, idx) => idx !== 3).map((item, i) => (
                <RevealRow key={item.title} index={i}>
                  {(isVisible) => (
                    <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      
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
                      <div className={`hidden md:block absolute left-1/2 -ml-[5px] top-1/2 -mt-[5px] h-2.5 w-2.5 rounded-full bg-brand-red ring-4 ring-white z-10 transition-transform duration-500 delay-[100ms] ${isVisible ? 'scale-100' : 'scale-0'} [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]`} />
              
                      {/* Side B: Text */}
                      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                        <p className={`text-sm leading-relaxed text-brand-slate ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{item.text}</p>
                      </div>
              
                    </div>
                  )}
                </RevealRow>
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
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-extrabold text-brand-blue md:text-3xl">Why Choose Us</h2>
            <p className="mt-2 text-sm text-brand-slate">Dedicated to providing the highest standard of homeopathic care.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <RevealCard key={item.title} index={index}>
                <div className="group flex h-full flex-col items-center text-center p-6 rounded-xl2 bg-brand-bg border border-brand-border transition-all duration-[250ms] ease-out lg:hover:-translate-y-1.5 lg:hover:shadow-lg lg:hover:border-brand-blue/20">
                  <CheckCircle className="text-brand-blue mb-4 transition-transform duration-[250ms] lg:group-hover:scale-[1.1]" size={28} />
                  <h3 className="font-heading text-lg font-bold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-slate">{item.text}</p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
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


      </div>

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
