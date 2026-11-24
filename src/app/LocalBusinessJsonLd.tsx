import { business } from '@/content/business'

export function LocalBusinessJsonLd() {
  const hasVisibleFacts = Boolean(business.phone || business.address || business.serviceArea)
  if (!hasVisibleFacts) return null
  const data = { '@context': 'https://schema.org', '@type': 'PetStore', name: business.name, telephone: business.phone, address: business.address, areaServed: business.serviceArea, openingHours: business.openingHours?.map((hours) => `${hours.days} ${hours.opens}-${hours.closes}`) }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
