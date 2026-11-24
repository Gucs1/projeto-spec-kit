type MobileNavigationProps = { open: boolean; onNavigate: () => void }

const links = [
  ['#sobre', 'Sobre'], ['#diferenciais', 'Diferenciais'], ['#servicos', 'Serviços'],
  ['#produtos', 'Produtos'], ['#confianca', 'Confiança'], ['#perguntas', 'Perguntas'], ['#contato', 'Contato'],
]

export function MobileNavigation({ open, onNavigate }: MobileNavigationProps) {
  return <nav id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegação móvel" hidden={!open}>
    {links.map(([href, label]) => <a key={href} href={href} onClick={onNavigate}>{label}</a>)}
  </nav>
}
