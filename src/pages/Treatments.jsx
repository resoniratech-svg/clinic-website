import { useParams } from 'react-router-dom'
import { treatmentCategories, allConditions } from '../data/treatments'
import TreatmentCard from '../components/TreatmentCard'

export default function Treatments() {
  const { categorySlug } = useParams()
  const category = categorySlug
    ? treatmentCategories.find((c) => c.slug === categorySlug)
    : null

  const list = category
    ? category.conditions.map((c) => ({ ...c, categoryName: category.name }))
    : allConditions.map((c) => ({ ...c, categoryName: c.category }))

  const defaultDescription = [
    "Homeopathy is a holistic system of alternative medicine based on the principle of \"like cures like\". It uses highly diluted natural substances to stimulate the body's innate healing mechanisms. Instead of merely suppressing symptoms, homeopathic treatments aim to address the root cause of the illness, ensuring permanent and safe recovery without side effects.",
    "At We Care Homeopathy, we focus on a constitutional approach. Every treatment plan begins with a comprehensive case history, taking into account the patient's physical, emotional, and psychological state. We believe in treating the individual as a whole rather than just focusing on the isolated disease.",
    "Our medicines are safe for all age groups, including infants, pregnant women, and the elderly. They help build immunity and provide long-lasting relief from both acute and chronic ailments. Explore our comprehensive range of specialized treatments below, designed to help you achieve optimal health and well-being."
  ]

  const bannerSrc = category?.banner || "/treatments-banner.png"
  const descriptionText = category?.description || null
  const paragraphs = descriptionText ? descriptionText.split('\n\n') : defaultDescription

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="w-full bg-brand-blueLight flex justify-center py-6 px-4">
        <img 
          src={bannerSrc} 
          alt={category ? category.name : "Homeopathy Treatments"} 
          className="w-full max-w-7xl h-auto block object-contain shadow-sm" 
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-12 max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold text-brand-blue mb-6">
            {category ? category.name : 'Detailed Information About Homeopathy Treatment'}
          </h1>
          <div className="space-y-4 text-brand-ink text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mb-6 border-b border-brand-border pb-4">
          <h2 className="font-heading text-2xl font-bold text-brand-blue">
            {category ? `Explore ${category.name}` : 'All Treatments'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((c) => (
            <TreatmentCard key={c.slug} name={c.name} slug={c.slug} categoryName={c.categoryName} />
          ))}
        </div>
      </div>
    </div>
  )
}
