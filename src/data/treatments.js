// Central data source for treatments. Add new conditions here — every page
// (mega-menu, /treatments grid, /treatments/:slug) reads from this file.
export const treatmentCategories = [
  {
    id: 'general',
    name: 'Treatments',
    slug: 'general-treatment',
    banner: '/treatments-banner.png',
    description: 'Homeopathy is a holistic system of alternative medicine based on the principle of "like cures like". It uses highly diluted natural substances to stimulate the body\'s innate healing mechanisms. Instead of merely suppressing symptoms, homeopathic treatments aim to address the root cause of the illness, ensuring permanent and safe recovery without side effects.\n\nAt We Care Homeopathy, we focus on a constitutional approach. Every treatment plan begins with a comprehensive case history, taking into account the patient\'s physical, emotional, and psychological state. We believe in treating the individual as a whole rather than just focusing on the isolated disease.',
    conditions: [
      { slug: 'acidity', name: 'Acidity', image: '/acidity-treatment.jpg' },
      { slug: 'thyroid-disorders', name: 'Thyroid Disorders', image: '/thyroid-treatment.jpg' },
      { slug: 'anxiety', name: 'Anxiety', image: '/anxiety-treatment.jpg' },
      { slug: 'migraine', name: 'Migraine', image: '/migraine-treatment.jpg' },
      { slug: 'arthritis', name: 'Arthritis', image: '/arthritis-treatment.jpg' },
      { slug: 'diabetes-mellitus', name: 'Diabetes', image: '/diabetes-treatment.jpg' },
      { slug: 'hemorrhoids', name: 'Piles', image: '/piles-treatment.jpg' },
      { slug: 'fissures', name: 'Fissure' },
      { slug: 'kidney-stones', name: 'Kidney Stones' },
      { slug: 'fatty-liver', name: 'Fatty Liver' },
    ],
  },
  {
    id: 'skin',
    name: 'Skin Treatment',
    slug: 'skin-treatment',
    banner: '/skin-banner.jpg',
    description: 'Our homeopathic skin treatments offer a natural, safe, and effective way to manage and heal various skin conditions from the inside out. We treat the underlying immune, hormonal, and stress-related triggers that cause flare-ups, rather than just applying topical suppressants. Experience long-lasting relief from psoriasis, eczema, acne, and other chronic skin ailments without harsh side effects.',
    conditions: [
      { slug: 'psoriasis', name: 'Psoriasis' },
      { slug: 'hyperpigmentation', name: 'Hyperpigmentation' },
      { slug: 'ichthyosis', name: 'Ichthyosis' },
      { slug: 'lichen-planus', name: 'Lichen Planus' },
      { slug: 'lipoma', name: 'Lipoma' },
      { slug: 'pityriasis', name: 'Pityriasis' },
      { slug: 'skin-allergy', name: 'Skin Allergy' },
      { slug: 'sun-allergy', name: 'Sun Allergy' },
      { slug: 'urticaria', name: 'Urticaria' },
      { slug: 'vitiligo', name: 'Vitiligo' },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal Treatment',
    slug: 'seasonal-treatment',
    banner: '/seasonal-banner.png',
    description: 'Seasonal changes often trigger allergies, asthma, and respiratory issues. Our seasonal homeopathic treatments strengthen your body\'s natural defense mechanisms, helping you adapt to environmental triggers like pollen, dust, and temperature drops. Say goodbye to heavy dependence on antihistamines and inhalers, and build lasting immunity to breathe easier all year round.',
    conditions: [
      { slug: 'allergic-rhinitis', name: 'Allergic Rhinitis' },
      { slug: 'allergies', name: 'Allergies' },
      { slug: 'asthma', name: 'Asthma' },
      { slug: 'breathlessness', name: 'Breathlessness' },
      { slug: 'bronchial-asthma', name: 'Bronchial Asthma' },
      { slug: 'bronchitis', name: 'Bronchitis' },
      { slug: 'nose-block', name: 'Nose Block' },
      { slug: 'sinusitis', name: 'Sinusitis' },
      { slug: 'tonsillitis', name: 'Tonsillitis' },
    ],
  },
  {
    id: 'womens',
    name: "Women's Treatment",
    slug: 'womens-treatment',
    banner: '/womens-banner.png',
    description: 'We provide specialized homeopathic care for women\'s health concerns, focusing on hormonal balance, reproductive health, and emotional well-being. From managing PCOS and thyroid imbalances to treating menstrual irregularities and fibroids, our natural remedies support your body\'s delicate hormonal systems. Our gentle approach avoids invasive procedures and synthetic hormone replacements.',
    conditions: [
      { slug: 'fibroids', name: 'Fibroids' },
      { slug: 'hyperthyroidism', name: 'Hyperthyroidism' },
      { slug: 'hypothyroidism', name: 'Hypothyroidism' },
      { slug: 'infertility', name: 'Infertility' },
      { slug: 'irregular-menses', name: 'Irregular Menses' },
      { slug: 'leucorrhoea', name: 'Leucorrhoea' },
      { slug: 'pcos', name: 'PCOS' },
      { slug: 'uterine-tumors', name: 'Uterine Tumors' },
    ],
  },
  {
    id: 'hair',
    name: 'Hair Treatment',
    slug: 'hair-treatment',
    banner: '/hairTreatment.png',
    description: 'Hair loss and scalp conditions are often signs of deeper internal imbalances, such as stress, nutritional deficiencies, or hormonal fluctuations. Our homeopathic hair treatments target these root causes to halt excessive hair fall, promote regrowth in conditions like alopecia areata, and restore overall scalp health without the need for harsh chemical treatments or lifelong medications.',
    conditions: [
      { slug: 'alopecia-areata', name: 'Alopecia Areata' },
      { slug: 'hair-loss', name: 'Hair Loss' },
    ],
  },
]

export const allConditions = treatmentCategories.flatMap((cat) =>
  cat.conditions.map((c) => ({ ...c, category: cat.name, categorySlug: cat.slug }))
)
