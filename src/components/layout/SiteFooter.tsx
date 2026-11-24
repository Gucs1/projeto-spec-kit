import { business } from '@/content/business'
import { contactChannels } from '@/content/contact'
import { Container } from '@/components/shared/Container'

export function SiteFooter() {
  return <footer className="site-footer"><Container><div className="footer-top"><a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true">✳</span>{business.name}</a><p>Informações comerciais serão publicadas após confirmação pelo estabelecimento.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><nav aria-label="Links úteis"><a href="#servicos">Serviços</a><a href="#produtos">Produtos</a><a href="#perguntas">Perguntas</a><a href="#contato">Contato</a>{contactChannels.filter((channel) => channel.active).map((channel) => <a key={channel.kind + channel.href} href={channel.href}>{channel.label}</a>)}</nav></div></Container></footer>
}
