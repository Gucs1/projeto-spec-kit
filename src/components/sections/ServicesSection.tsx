import { ArrowUpRight, Scissors, Stethoscope, PawPrint } from 'lucide-react'
import { services } from '@/content/services'
import { contactChannels } from '@/content/contact'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

const icons = [Scissors, Stethoscope, PawPrint]
export function ServicesSection() { const contact = contactChannels.find((item) => item.active && item.primary)
  return <section id="servicos" className="section services-section"><Container><div className="section-row"><SectionHeading eyebrow="Nosso atendimento" title="Serviços pensados para o bem-estar." description="Consulte a equipe para conhecer opções, detalhes e disponibilidade."/>{contact && <a className="text-link section-side-link" href={contact.href}>Solicitar informações <span>↗</span></a>}</div>{services.length ? <div className="service-grid">{services.map((service, index) => { const Icon = icons[index % icons.length]; return <article className="service-card" key={service.id}><span className="service-icon"><Icon /></span><span className="service-index">0{index + 1}</span><h3>{service.name}</h3><p>{service.description}</p>{service.audience && <small>{service.audience}</small>}{service.details && <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}<a href={contact?.href ?? '#contato'} aria-label={`Consultar sobre ${service.name}`}>Consultar <ArrowUpRight size={16}/></a></article>})}</div> : <div className="empty-offer"><span className="empty-icon"><PawPrint/></span><div><h3>Estamos preparando esta seção</h3><p>Os serviços serão apresentados aqui assim que forem confirmados pelo estabelecimento. Entre em contato para conhecer o atendimento.</p></div><a className="text-link" href="#contato">Falar com a equipe <span>↗</span></a></div>}</Container></section>
}
