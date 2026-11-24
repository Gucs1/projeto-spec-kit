import { HeartHandshake, Sparkles } from 'lucide-react'
import { business } from '@/content/business'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function AboutSection() { return <section id="sobre" className="section about-section"><Container className="about-grid"><div className="about-art"><div className="about-card"><span className="about-icon"><HeartHandshake /></span><span className="eyebrow">NOSSO JEITO</span><p>Cuidado começa com atenção.</p></div><span className="about-sparkle"><Sparkles /></span><span className="about-circle"/></div><div><SectionHeading eyebrow="Um pouco sobre nós" title="Mais que uma loja. Um ponto de encontro para quem ama pets." description={business.description ?? 'A história, a equipe e o jeito de atender deste petshop serão apresentados aqui com informações aprovadas pelo estabelecimento.'}/><a className="text-link" href="#contato">Saiba mais sobre o atendimento <span aria-hidden="true">↗</span></a></div></Container></section> }
