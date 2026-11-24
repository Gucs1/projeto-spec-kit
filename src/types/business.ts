export interface BusinessProfile {
  name: string
  tagline?: string
  description?: string
  serviceArea?: string
  address?: { streetAddress?: string; addressLocality?: string; addressRegion?: string; postalCode?: string }
  openingHours?: Array<{ days: string; opens: string; closes: string }>
  phone?: string
  email?: string
  messagingUrl?: string
  mapUrl?: string
  socialLinks?: Array<{ label: string; href: string }>
  logo?: string
}
export interface Service { id: string; name: string; description: string; audience?: string; details?: string[]; image?: { src: string; alt: string }; contactAction?: string; displayOrder: number }
export interface FeaturedProduct { id: string; name: string; description: string; category?: string; image?: { src: string; alt: string }; price?: string; availabilityNote?: string; action?: string }
export interface TrustEvidence { id: string; kind: 'testimonial' | 'credential' | 'business_fact' | 'process'; title: string; body: string; sourceLabel?: string; sourceUrl?: string; attribution?: string; permissionConfirmed: boolean }
export interface FaqItem { id: string; question: string; answer: string; relatedAction?: { label: string; href: string } }
export interface ContactChannel { kind: 'phone' | 'messaging' | 'email' | 'map' | 'social'; label: string; href: string; primary: boolean; active: boolean }
