import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/content/faq'
import { Container } from '@/components/shared/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function FaqSection() { const [active, setActive] = useState<string | null>(faq[0]?.id ?? null)
 return <section id="perguntas" className="section faq-section"><Container className="faq-grid"><div><SectionHeading eyebrow="Dúvidas comuns" title="Perguntas que ajudam a decidir." description="Respostas diretas para você se sentir à vontade para dar o próximo passo."/><a className="text-link" href="#contato">Ainda tem dúvidas? Fale com a equipe <span>↗</span></a></div><div className="faq-list">{faq.length ? faq.map((item) => <article className={`faq-item ${active === item.id ? 'is-active' : ''}`} key={item.id}><h3><button aria-expanded={active === item.id} aria-controls={`answer-${item.id}`} onClick={() => setActive(active === item.id ? null : item.id)}>{item.question}<ChevronDown/></button></h3><div id={`answer-${item.id}`} className="faq-answer" hidden={active !== item.id}><p>{item.answer}</p>{item.relatedAction && <a href={item.relatedAction.href}>{item.relatedAction.label} ↗</a>}</div></article>) : <p className="faq-pending">As respostas serão publicadas após validação das informações pelo estabelecimento.</p>}</div></Container></section>
}
