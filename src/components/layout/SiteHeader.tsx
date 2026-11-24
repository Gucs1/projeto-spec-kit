import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '@/content/business'
import { contactChannels } from '@/content/contact'
import { MobileNavigation } from '@/components/layout/MobileNavigation'

const links = [['#sobre', 'Sobre'], ['#diferenciais', 'Diferenciais'], ['#servicos', 'Serviços'], ['#produtos', 'Produtos']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const primary = contactChannels.find((channel) => channel.active && channel.primary)
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#inicio" aria-label={`${business.name}, início`}><span className="brand-mark" aria-hidden="true">✳</span><span>{business.name}</span></a>
    <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
    <div className="header-actions">{primary && <a className="button button-small" href={primary.href}>{primary.label}</a>}
      <button className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <MobileNavigation open={open} onNavigate={() => setOpen(false)} />
  </div></header>
}
