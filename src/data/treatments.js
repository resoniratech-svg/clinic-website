// Central data source for treatments. Add new conditions here — every page
// (mega-menu, /treatments grid, /treatments/:slug) reads from this file.
export const treatmentCategories = [
  {
    id: 'general',
    name: 'Treatments',
    slug: 'general-treatment',
    banner: '/treatment-correct.png',
    description: 'Homeopathy is a holistic system of alternative medicine based on the principle of "like cures like". It uses highly diluted natural substances to stimulate the body\'s innate healing mechanisms. Instead of merely suppressing symptoms, homeopathic treatments aim to address the root cause of the illness, ensuring permanent and safe recovery without side effects.\n\nAt We Care Homeopathy, we focus on a constitutional approach. Every treatment plan begins with a comprehensive case history, taking into account the patient\'s physical, emotional, and psychological state. We believe in treating the individual as a whole rather than just focusing on the isolated disease.',
    conditions: [
      { slug: 'acidity', name: 'Acidity', image: '/acidity-treatment.jpg' },
      { slug: 'thyroid-disorders', name: 'Thyroid Disorders', image: '/thyroid-treatment.jpg' },
      { slug: 'anxiety', name: 'Anxiety', image: '/anxiety-treatment.jpg' },
      { slug: 'migraine', name: 'Migraine', image: '/migraine-treatment.jpg' },
      { slug: 'arthritis', name: 'Arthritis', image: '/arthritis-treatment.jpg' },
      { slug: 'diabetes-mellitus', name: 'Diabetes', image: '/diabetes-treatment.jpg' },
      { slug: 'hemorrhoids', name: 'Piles', image: '/piles-treatment.jpg' },
      { slug: 'fissures', name: 'Fissure', image: '/fissure-pain.jpg' },
      { slug: 'kidney-stones', name: 'Kidney Stones', image: '/kidneystones.png' },
      { slug: 'fatty-liver', name: 'Fatty Liver', image: '/fattyLliver.png' },
    ],
  },
  {
    id: 'skin',
    name: 'Skin Treatment',
    slug: 'skin-treatment',
    banner: '/skin-care-correct.png',
    description: 'Our homeopathic skin treatments offer a natural, safe, and effective way to manage and heal various skin conditions from the inside out. We treat the underlying immune, hormonal, and stress-related triggers that cause flare-ups, rather than just applying topical suppressants. Experience long-lasting relief from psoriasis, eczema, acne, and other chronic skin ailments without harsh side effects.',
    conditions: [
      { slug: 'psoriasis', name: 'Psoriasis', image: '/psoriasis.png' },
      { slug: 'hyperpigmentation', name: 'Hyperpigmentation', image: '/hyperpigmentation-pain.jpg' },
      { slug: 'ichthyosis', name: 'Ichthyosis', image: '/ichthyosis-pain.jpg' },
      { slug: 'lichen-planus', name: 'Lichen Planus', image: '/lichen-planus-pain.jpg' },
      { slug: 'lipoma', name: 'Lipoma', image: '/lipoma-pain.jpg' },
      { slug: 'pityriasis', name: 'Pityriasis', image: '/pityriasis-pain.jpg' },
      { slug: 'skin-allergy', name: 'Skin Allergy', image: '/skin-allergy-pain.jpg' },
      { slug: 'sun-allergy', name: 'Sun Allergy', image: '/sun-allergy-pain.jpg' },
      { slug: 'urticaria', name: 'Urticaria', image: '/urticaria-pain.jpg' },
      { slug: 'vitiligo', name: 'Vitiligo', image: '/vitiligo-pain.jpg' },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal Treatment',
    slug: 'seasonal-treatment',
    banner: '/seasonal-banner.png',
    description: 'Seasonal changes often trigger allergies, asthma, and respiratory issues. Our seasonal homeopathic treatments strengthen your body\'s natural defense mechanisms, helping you adapt to environmental triggers like pollen, dust, and temperature drops. Say goodbye to heavy dependence on antihistamines and inhalers, and build lasting immunity to breathe easier all year round.',
    conditions: [
      { slug: 'allergic-rhinitis', name: 'Allergic Rhinitis', image: '/allergic-rhinitis-pain.jpg' },
      { slug: 'allergies', name: 'Allergies', image: '/allergies-pain.jpg' },
      { slug: 'asthma', name: 'Asthma', image: '/asthma-pain.jpg' },
      { slug: 'breathlessness', name: 'Breathlessness', image: '/breathlessness-pain.jpg' },
      { slug: 'bronchial-asthma', name: 'Bronchial Asthma', image: '/bronchial-asthma-pain.jpg' },
      { slug: 'bronchitis', name: 'Bronchitis', image: '/bronchitis-pain.jpg' },
      { slug: 'nose-block', name: 'Nose Block', image: '/nose-block-pain.png' },
      { slug: 'sinusitis', name: 'Sinusitis', image: '/sinusitis-pain.jpg' },
      { slug: 'tonsillitis', name: 'Tonsillitis', image: '/tonsillitis-pain.jpg' },
    ],
  },
  {
    id: 'womens',
    name: "Women's Treatment",
    slug: 'womens-treatment',
    banner: '/womens-banner.png',
    description: 'We provide specialized homeopathic care for women\'s health concerns, focusing on hormonal balance, reproductive health, and emotional well-being. From managing PCOS and thyroid imbalances to treating menstrual irregularities and fibroids, our natural remedies support your body\'s delicate hormonal systems. Our gentle approach avoids invasive procedures and synthetic hormone replacements.',
    conditions: [
      { slug: 'fibroids', name: 'Fibroids', image: '/fibroids-pain.jpg' },
      { slug: 'hyperthyroidism', name: 'Hyperthyroidism', image: '/hyperthyroidism-pain.jpg' },
      { slug: 'hypothyroidism', name: 'Hypothyroidism', image: '/hypothyroidism-pain.jpg' },
      { slug: 'infertility', name: 'Infertility', image: '/infertility-pain.jpg' },
      { slug: 'irregular-menses', name: 'Irregular Menses', image: '/irregular-menses-pain.jpg' },
      { slug: 'leucorrhoea', name: 'Leucorrhoea', image: '/leucorrhoea-pain.jpg' },
      { slug: 'pcos', name: 'PCOS', image: '/pcos-pain.jpg' },
      { slug: 'uterine-tumors', name: 'Uterine Tumors', image: '/uterine-tumors-pain.jpg' },
    ],
  },
  {
    id: 'hair',
    name: 'Hair Treatment',
    slug: 'hair-treatment',
    banner: '/hairTreatment.png',
    description: 'Hair loss and scalp conditions are often signs of deeper internal imbalances, such as stress, nutritional deficiencies, or hormonal fluctuations. Our homeopathic hair treatments target these root causes to halt excessive hair fall, promote regrowth in conditions like alopecia areata, and restore overall scalp health without the need for harsh chemical treatments or lifelong medications.',
    conditions: [
      { slug: 'alopecia-areata', name: 'Alopecia Areata', image: '/alopecia-areata-pain.jpg' },
      { slug: 'hair-loss', name: 'Hair Loss', image: '/hair-loss-pain.jpg' },
    ],
  },
]

export const allConditions = treatmentCategories.flatMap((cat) =>
  cat.conditions.map((c) => ({ ...c, category: cat.name, categorySlug: cat.slug }))
)
