import { trustEvidence } from '@/content/trust'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function TestimonialsSection() { const evidence = trustEvidence.filter((item) => item.kind !== 'testimonial' || item.permissionConfirmed)
 return <section id="confianca" className="section trust-section"><Container><div className="trust-inner"><SectionHeading eyebrow="Confiança se constrói" title="Conheça de perto o nosso jeito de cuidar." description="Informações e evidências sobre o estabelecimento serão compartilhadas com transparência."/>{evidence.length > 0 && <div className="trust-evidence">{evidence.map((item) => <article key={item.id}><h3>{item.title}</h3><p>{item.body}</p>{item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{item.sourceLabel ?? 'Ver fonte'}</a>}{item.attribution && <small>{item.attribution}</small>}</article>)}</div>}<span className="trust-mark" aria-hidden="true">✳</span></div></Container></section>
}
