import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { contactChannels } from '@/content/contact'
import { Container } from '@/components/shared/Container'

export function HeroSection() {
  const primary = contactChannels.find((channel) => channel.active && channel.primary)
  return <section id="inicio" className="hero"><Container className="hero-grid"><div className="hero-copy">
    <span className="eyebrow"><span className="eyebrow-dot" /> Cuidado e companhia para a vida com pets</span>
    <h1>Um lugar especial para cuidar de quem <span>faz parte da família.</span></h1>
    <p className="hero-description">{business.tagline ?? 'Conheça nosso atendimento, serviços e produtos. Os detalhes da oferta e da região atendida serão informados após confirmação pelo estabelecimento.'}</p>
    <div className="hero-actions">{primary ? <a className="button" href={primary.href}>{primary.label}<ArrowUpRight size={17} /></a> : <a className="button" href="#contato">Conheça o atendimento<ArrowDown size={17} /></a>}<a className="text-link" href="#servicos">Explorar serviços <span aria-hidden="true">↗</span></a></div>
    <div className="hero-note"><span className="note-icon">i</span><span>Solicitações de horário dependem de confirmação do estabelecimento.</span></div>
  </div><div className="hero-visual" aria-label="Ilustração decorativa de um cão e um gato" role="img"><div className="sun-disc"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-sticker">feito<br/>com <span>♥</span></div><div className="pet-illustration"><div className="dog"><i className="dog-ear left"/><i className="dog-ear right"/><i className="dog-eye left"/><i className="dog-eye right"/><i className="dog-nose"/><i className="dog-muzzle"/></div><div className="cat"><i className="cat-ear left"/><i className="cat-ear right"/><i className="cat-eye left"/><i className="cat-eye right"/><i className="cat-nose"/><i className="cat-whisker left"/><i className="cat-whisker right"/></div><div className="plant plant-left"><i/><i/><i/></div><div className="plant plant-right"><i/><i/><i/></div></div><div className="visual-caption"><span className="caption-line"/> cuidado que aproxima <span className="caption-line"/></div></div></Container><div className="hero-bottom"><span>ATENDIMENTO COM CARINHO</span><span className="bottom-star">✳</span><span>PARA TODOS OS MOMENTOS</span></div></section>
}
