import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { LocalBusinessJsonLd } from '@/app/LocalBusinessJsonLd'
import { siteMetadata } from '@/app/metadata'

export default function App() {
  return <><title>{siteMetadata.title}</title><meta name="description" content={siteMetadata.description}/>{siteMetadata.canonical && <link rel="canonical" href={siteMetadata.canonical}/>}<a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader/><main id="conteudo"><HeroSection/><AboutSection/><BenefitsSection/><ServicesSection/><FeaturedProductsSection/><TestimonialsSection/><FaqSection/><ContactSection/></main><SiteFooter/><LocalBusinessJsonLd/></>
}
