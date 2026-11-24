import { ArrowUpRight, PackageOpen } from 'lucide-react'
import { products } from '@/content/products'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { contactChannels } from '@/content/contact'

export function FeaturedProductsSection() { const contact = contactChannels.find((item) => item.active && item.primary)
 return <section id="produtos" className="section products-section"><Container><div className="products-heading"><SectionHeading eyebrow="Para a rotina" title="Boas escolhas para os seus companheiros." description="Consulte a equipe sobre produtos e disponibilidade."/><span className="product-doodle" aria-hidden="true">✳</span></div>{products.length ? <div className="product-grid">{products.map((product) => <article className="product-card" key={product.id}><div className="product-image">{product.image && <img src={product.image.src} alt={product.image.alt} loading="lazy" width="480" height="360"/>}</div><div className="product-info">{product.category && <span className="eyebrow">{product.category}</span>}<h3>{product.name}</h3><p>{product.description}</p>{product.price && <strong className="product-price">{product.price}</strong>}{product.availabilityNote && <small>{product.availabilityNote}</small>}<a href={contact?.href ?? '#contato'}>{product.action ?? 'Consultar disponibilidade'} <ArrowUpRight size={16}/></a></div></article>)}</div> : <div className="products-empty"><PackageOpen/><div><h3>Uma seleção para descobrir</h3><p>Os produtos e categorias serão adicionados quando as informações estiverem confirmadas. Consulte a equipe sobre disponibilidade.</p></div></div>}</Container></section>
}
