// Central data source for clinic branches, grouped by region.
// This same array drives: footer branch links, /clinics page, mega-menu, /clinics/:slug
export const clinicRegions = [
  {
    region: 'Hyderabad',
    branches: [
      { slug: 'jubilee-hills', name: 'Jubilee Hills', address: 'Road No. 1, Jubilee Hills, Near TV5, Hyderabad, Telangana 500033', phone: '+917337557851' },
      { slug: 'ameerpet', name: 'Ameerpet', address: 'Ameerpet, Hyderabad, Telangana', phone: '+917337557851' },
      { slug: 'kukatpally', name: 'Kukatpally', address: 'KPHB, Kukatpally, Hyderabad, Telangana', phone: '+917337557851' },
      { slug: 'lb-nagar', name: 'L.B. Nagar', address: 'L.B. Nagar, Hyderabad, Telangana', phone: '+917337557851' },
      { slug: 'kompally', name: 'Kompally', address: 'Kompally, Hyderabad, Telangana', phone: '+917337557851' },
      { slug: 'mehidipatnam', name: 'Mehidipatnam', address: 'Mehidipatnam, Hyderabad, Telangana', phone: '+917337557851' },
    ],
  },
  {
    region: 'Coastal Andhra Pradesh',
    branches: [
      { slug: 'vijayawada', name: 'Vijayawada', address: 'Vijayawada, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'visakhapatnam', name: 'Visakhapatnam', address: 'Visakhapatnam, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'guntur', name: 'Guntur', address: 'Guntur, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'kakinada', name: 'Kakinada', address: 'Kakinada, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'rajahmundry', name: 'Rajahmundry', address: 'Rajahmundry, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'eluru', name: 'Eluru', address: 'Eluru, Andhra Pradesh', phone: '+917337557851' },
    ],
  },
  {
    region: 'Telangana',
    branches: [
      { slug: 'karimnagar', name: 'Karimnagar', address: 'Karimnagar, Telangana', phone: '+917337557851' },
      { slug: 'nizamabad', name: 'Nizamabad', address: 'Nizamabad, Telangana', phone: '+917337557851' },
      { slug: 'khammam', name: 'Khammam', address: 'Khammam, Telangana', phone: '+917337557851' },
      { slug: 'hanamkonda', name: 'Hanamkonda', address: 'Hanamkonda, Telangana', phone: '+917337557851' },
    ],
  },
  {
    region: 'Rayalaseema',
    branches: [
      { slug: 'tirupati', name: 'Tirupati', address: 'Tirupati, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'kurnool', name: 'Kurnool', address: 'Kurnool, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'nellore', name: 'Nellore', address: 'Nellore, Andhra Pradesh', phone: '+917337557851' },
      { slug: 'kadapa', name: 'Kadapa', address: 'Kadapa, Andhra Pradesh', phone: '+917337557851' },
    ],
  },
  {
    region: 'Other States',
    branches: [
      { slug: 'bangalore', name: 'Bangalore', address: 'Bangalore, Karnataka', phone: '+917337557851' },
      { slug: 'lucknow', name: 'Lucknow', address: 'Lucknow, Uttar Pradesh', phone: '+917337557851' },
      { slug: 'anna-nagar', name: 'Anna Nagar, Chennai', address: 'Anna Nagar, Chennai, Tamil Nadu', phone: '+917337557851' },
    ],
  },
]

export const allBranches = clinicRegions.flatMap((r) =>
  r.branches.map((b) => ({ ...b, region: r.region }))
)
