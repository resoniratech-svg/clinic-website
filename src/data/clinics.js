// Central data source for clinic branches, grouped by region.
// This same array drives: footer branch links, /clinics page, mega-menu, /clinics/:slug
export const clinicRegions = [
  {
    region: 'Hyderabad',
    branches: [
      { slug: 'jubilee-hills', name: 'Jubilee Hills', address: 'Road No. 1, Jubilee Hills, Near TV5, Hyderabad, Telangana 500033', phone: '+917036670881' },
      { slug: 'ameerpet', name: 'Ameerpet', address: 'Ameerpet, Hyderabad, Telangana', phone: '+917036670881' },
      { slug: 'kukatpally', name: 'Kukatpally', address: 'KPHB, Kukatpally, Hyderabad, Telangana', phone: '+917036670881' },
      { slug: 'lb-nagar', name: 'L.B. Nagar', address: 'L.B. Nagar, Hyderabad, Telangana', phone: '+917036670881' },
      { slug: 'kompally', name: 'Kompally', address: 'Kompally, Hyderabad, Telangana', phone: '+917036670881' },
      { slug: 'mehidipatnam', name: 'Mehidipatnam', address: 'Mehidipatnam, Hyderabad, Telangana', phone: '+917036670881' },
    ],
  },
  {
    region: 'Coastal Andhra Pradesh',
    branches: [
      { slug: 'vijayawada', name: 'Vijayawada', address: 'Vijayawada, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'visakhapatnam', name: 'Visakhapatnam', address: 'Visakhapatnam, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'guntur', name: 'Guntur', address: 'Guntur, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'kakinada', name: 'Kakinada', address: 'Kakinada, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'rajahmundry', name: 'Rajahmundry', address: 'Rajahmundry, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'eluru', name: 'Eluru', address: 'Eluru, Andhra Pradesh', phone: '+917036670881' },
    ],
  },
  {
    region: 'Telangana',
    branches: [
      { slug: 'karimnagar', name: 'Karimnagar', address: '# 6-6-576, Near Mancherial Chowrastha, Near Civil Hospital, Opp. Vasudeva Hospital, Karimnagar, Telangana - 505 001.', phone: '+917036670881' },
      { slug: 'nizamabad', name: 'Nizamabad', address: 'Nizamabad, Telangana', phone: '+917036670881' },
      { slug: 'khammam', name: 'Khammam', address: 'Khammam, Telangana', phone: '+917036670881' },
      { slug: 'hanamkonda', name: 'Hanamkonda', address: 'Hanamkonda, Telangana', phone: '+917036670881' },
    ],
  },
  {
    region: 'Rayalaseema',
    branches: [
      { slug: 'tirupati', name: 'Tirupati', address: 'Tirupati, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'kurnool', name: 'Kurnool', address: 'Kurnool, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'nellore', name: 'Nellore', address: 'Nellore, Andhra Pradesh', phone: '+917036670881' },
      { slug: 'kadapa', name: 'Kadapa', address: 'Kadapa, Andhra Pradesh', phone: '+917036670881' },
    ],
  },
  {
    region: 'Other States',
    branches: [
      { slug: 'bangalore', name: 'Bangalore', address: 'Bangalore, Karnataka', phone: '+917036670881' },
      { slug: 'lucknow', name: 'Lucknow', address: 'Lucknow, Uttar Pradesh', phone: '+917036670881' },
      { slug: 'anna-nagar', name: 'Anna Nagar, Chennai', address: 'Anna Nagar, Chennai, Tamil Nadu', phone: '+917036670881' },
    ],
  },
]

export const allBranches = clinicRegions.flatMap((r) =>
  r.branches.map((b) => ({ ...b, region: r.region }))
)
