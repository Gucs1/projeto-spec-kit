# Plano de implementação: Home page comercial do petshop

**Branch**: `001-homepage-petshop` | **Data**: 2026-11-24 | **Spec**: [spec.md](./spec.md)

**Input**: Especificação da funcionalidade em `specs/001-homepage-petshop/spec.md`.

## Resumo

Implementar uma home comercial de página única que apresente a oferta real do petshop,
construa confiança com evidências verificáveis e conduza a contato ou pedido de agendamento.
A aplicação será um frontend React com TypeScript e Vite, estilizado com Tailwind CSS e
componentes locais baseados em shadcn/ui. O conteúdo inicial será estático e tipado, organizado
por domínio em dados de apresentação para permitir trocar a origem por CMS ou serviço no futuro
sem acoplar essa evolução aos componentes de layout.

## Contexto técnico

**Linguagem/versão**: TypeScript em modo estrito; versões estáveis atuais do Node.js e do
TypeScript no início da implementação.

**Dependências principais**: React e React DOM 19.3; Vite 8.x; TypeScript 7.0; Tailwind CSS
4.3 com plugin oficial de Vite; shadcn/ui CLI atual, com componentes necessários copiados para
o projeto; plugin React oficial para Vite; ícones Lucide quando necessários. Fixar versões
resolvidas e dependências transitivas no lockfile. Confirmar compatibilidade entre versões,
requisitos de navegador e bibliotecas shadcn/ui antes de instalar. Se a última versão disponível
na data de implementação mudar, usar a versão estável atual compatível e documentar a decisão,
sem adotar prereleases em produção.

**Armazenamento**: Não aplicável à primeira entrega; dados de conteúdo estático versionados no
projeto. Origem de conteúdo deve ser isolada para permitir CMS/API futuro.

**Testes**: Nenhum teste automatizado será criado ou executado, conforme constituição. Revisão
manual documentada dos fluxos, links, conteúdo, responsividade, acessibilidade, segurança básica
e comportamento do navegador. Build de produção e checagem de tipos são verificações de
qualidade de compilação, não testes automatizados; podem ser executados na implementação sem
adicionar suítes de teste.

**Plataforma-alvo**: Navegadores modernos em dispositivos móveis e desktop; hospedagem de site
estático com HTTPS e fallback adequado para rota raiz. Vite 8 requer Node.js 20.19+ ou 22.12+;
escolher uma linha LTS suportada que satisfaça esse requisito e registrá-la no projeto.

**Tipo de projeto**: Aplicação web frontend de página única, estática na primeira fase.

**Metas de performance**: Em condições representativas de rede móvel, buscar LCP ≤ 2,5 s,
INP ≤ 200 ms e CLS ≤ 0,1 no percentil 75 após coleta de tráfego; na revisão pré-publicação,
não aceitar imagens excessivas, bloqueios evitáveis de renderização, mudanças de layout que
atrapalhem o CTA ou interação perceptivelmente lenta. A estratégia é carregar apenas o
JavaScript e mídia necessários e medir em ambiente de produção representativo.

**Restrições**: Conteúdo e dados comerciais precisam ser confirmados pelo estabelecimento;
sem backend, painel administrativo, checkout, inventário em tempo real ou reserva confirmada
nesta fase. Nenhuma chave secreta ou credencial deve estar no bundle do navegador. Privacidade,
segurança e acessibilidade são requisitos do produto.

**Escala/escopo**: Uma home com header, hero, institucional, diferenciais, serviços, produtos,
prova social, FAQ, contato e footer. Estrutura pronta para novas páginas e provedores de conteúdo,
mas sem arquitetura distribuída ou abstrações sem necessidade atual.

## Verificação da constituição

*Gate antes da pesquisa: aprovado.*

- **Objetivo de negócio**: cada seção apoia descoberta, confiança, avaliação da oferta ou
  conversão para contato/agendamento.
- **Confiança e conteúdo**: depoimentos, credenciais, preços e dados locais só entram após
  confirmação; sem conteúdo de placeholder na publicação.
- **Mobile-first e acessibilidade**: semântica HTML, teclado, foco visível, contraste, texto
  alternativo e validação manual em viewport móvel fazem parte do aceite.
- **Desempenho**: otimização de mídia e orçamento de recursos estão no desenho técnico.
- **Clean code**: seções e componentes têm responsabilidade clara; origem de conteúdo fica
  separada da apresentação; nenhuma camada de backend especulativa será introduzida.
- **Testes automatizados**: proibidos; entrega será inspecionada manualmente conforme a
  constituição.

*Gate após o desenho: aprovado.* As decisões abaixo preservam a primeira entrega estática,
definem uma fronteira simples para futura origem dinâmica e não introduzem integração externa
ou complexidade sem requisito confirmado.

## Decisões de arquitetura

### Estrutura de aplicação

- `src/app/`: ponto de entrada da aplicação, composição da página e metadados específicos da
  rota raiz.
- `src/components/layout/`: cabeçalho, navegação móvel e rodapé, compartilhados pela página.
- `src/components/sections/`: componentes de seção específicos da home, cada um responsável
  por seu conteúdo e semântica.
- `src/components/ui/`: componentes shadcn/ui adicionados seletivamente e ajustados para a
  identidade visual; não criar uma camada wrapper sem necessidade concreta.
- `src/components/shared/`: padrões genuinamente reutilizados, como CTA, container, selo de
  confiança e título de seção.
- `src/content/`: conteúdo estático da home e informações comerciais tipadas; futura integração
  troca a implementação da origem sem alterar apresentação ou contrato de leitura.
- `src/types/`: tipos de domínio compartilhados quando não pertencem naturalmente ao módulo
  de conteúdo.
- `src/lib/`: utilitários pequenos, funções de formatação e configuração de helpers de classe.
- `src/styles/`: estilos globais, tokens semânticos e importação Tailwind; estilos específicos
  permanecem em classes utilitárias junto ao componente.
- `public/` e `src/assets/`: arquivos públicos (favicon, manifest e mídia referenciada por URL)
  e assets importados pelo grafo da aplicação, respectivamente.

### Composição da página

`App` compõe a página nesta sequência: `SiteHeader`, `HeroSection`, `AboutSection`,
`BenefitsSection`, `ServicesSection`, `FeaturedProductsSection`, `TestimonialsSection`,
`FaqSection`, `ContactSection` e `SiteFooter`. Cada seção recebe dados tipados e usa landmarks
e headings apropriados. Elementos de navegação apontam a IDs estáveis (`#servicos`, `#produtos`,
`#contato` etc.) e mantêm foco perceptível após navegação por teclado.

Os componentes de UI reutilizáveis devem resolver padrões reais da página. Cards de serviço e
produto podem compartilhar base visual apenas se a semântica e as ações forem equivalentes;
evitar componente universal com muitas condições. FAQ usa disclosure acessível (preferir
componente Accordion do shadcn/ui/Radix quando esse comportamento agregar valor) e funciona com
teclado e leitores de tela. Menu móvel usa botão com nome acessível, estado expandido e foco
administrado; não esconder conteúdo essencial atrás de hover.

### Estilos e identidade visual

- Usar Tailwind CSS 4 com tokens CSS semânticos para cor, tipografia, raio, sombra e espaçamento;
  usar `@theme` para mapear tokens de design, evitando valores arbitrários repetidos.
- Definir uma paleta com contraste adequado e papéis claros (fundo, texto, ação, destaque),
  escalas tipográficas e largura de leitura antes de compor seções.
- Manter CSS global restrito a reset/imports, tokens, foco global e regras excepcionais; evitar
  folhas de estilo duplicadas e `@apply` como substituto de composição de componentes.
- Responsividade deve partir do menor viewport e acrescentar colunas, respiros e navegação
  progressivamente nos breakpoints necessários; não assumir um único dispositivo.
- Movimento é decorativo e opcional; respeitar `prefers-reduced-motion` e manter conteúdo e
  ações disponíveis sem animação.

### Tipagem e fronteira de conteúdo

- Ativar `strict` e verificações de propriedades não usadas; evitar `any`, casts sem validação e
  tipos duplicados.
- Modelar `BusinessProfile`, `Service`, `FeaturedProduct`, `Testimonial`, `FaqItem` e
  `ContactChannel` com campos mínimos e nomes alinhados ao domínio. Usar união discriminada apenas
  quando o tipo de conteúdo altera comportamento ou renderização.
- Definir propriedades públicas dos componentes como tipos exportados próximos ao componente;
  manter tipos de conteúdo na camada `content` ou `types` conforme compartilhamento real.
- Não introduzir estado global: a primeira versão é de apresentação; estado local só para menu,
  accordion e formulário futuro.
- Para adoção futura de CMS, inserir um adaptador de leitura que entregue os mesmos tipos de
  domínio e normalize ausência de campos. Componentes não conhecem fornecedor, SDK ou formato
  bruto de CMS.

### Imagens e assets

- Preferir fotografia original/autorizada do estabelecimento, equipe, animais atendidos,
  serviços e produtos; documentar permissões e evitar imagens de banco que pareçam afirmar ser
  o espaço real.
- Produzir versões responsivas em AVIF/WebP com fallback quando necessário, dimensões explícitas
  e compressão adequada; usar `srcset`/`sizes` ou mecanismo equivalente para evitar baixar uma
  imagem desktop em celular.
- Hero: imagem principal com proporção e tamanho reservados para evitar CLS; carregar com
  prioridade adequada se for LCP. Imagens abaixo da dobra devem usar lazy loading.
- Informar texto alternativo conciso para imagem informativa; alt vazio em imagem puramente
  decorativa. Não embutir texto essencial em imagem.
- Remover metadados desnecessários e validar peso e dimensão antes de adicionar assets; ícones
  simples devem ser SVG vetorial via biblioteca de ícones, não bitmap.

### SEO local e semântica

- Declarar `lang="pt-BR"`, viewport e charset; adicionar title e description específicos,
  URL canônica quando o domínio estiver definido, Open Graph essencial e favicon.
- Usar um único `h1` descritivo e ordem hierárquica de títulos; landmarks `header`, `nav`,
  `main`, `section` com rótulo quando necessário e `footer`; links para navegação e botões para
  ações.
- Incluir nome, telefone, endereço/área atendida e horários confirmados como texto legível e
  consistentes. Criar links de telefone, e-mail, mapa e mensageria com destinos normalizados.
- Adicionar JSON-LD local de tipo apropriado somente após confirmação dos dados e de que os
  mesmos aparecem na página; não duplicar ou inventar avaliações, coordenadas, horário ou faixa
  de preço.
- Fornecer sitemap/robots e domínio canônico no processo de publicação, quando o domínio real
  estiver disponível; evitar anunciar dados de SEO provisórios.

### Formulários e conversão

A conversão principal inicial deve usar canais ativos e diretos (telefone, mensagem, e-mail ou
mapa), sem cadastro. A seção de contato pode receber uma solicitação de formulário numa evolução
posterior; nessa integração:

1. manter apenas campos necessários para responder (nome, um meio de retorno, assunto/serviço e
   mensagem opcional), indicar campos obrigatórios e finalidade;
2. validar no cliente para orientar a pessoa e sempre validar novamente no endpoint confiável;
3. apresentar estados de envio, sucesso e erro com texto acessível, preservando os dados em caso
   de erro recuperável e prevenindo envio duplicado;
4. proteger endpoint contra abuso com limites, validação de tamanho/formato e medidas anti-spam
   proporcionais; nunca colocar segredo de API ou credencial no frontend;
5. exibir aviso de privacidade e coletar consentimento somente quando houver base e finalidade
   que o exijam; não coletar dados sensíveis do tutor ou do animal sem necessidade.

O formulário não deve ser apresentado como funcional até existir destino de submissão aprovado
e tratamento operacional para as mensagens. Essa fronteira permite conectar backend/CMS sem
introduzir dependência oculta no layout estático.

### Segurança

- HTTPS obrigatório na hospedagem e nenhuma chave, token ou dado privado em variável `VITE_*`;
  tudo que for exposto pelo build é público.
- Não renderizar HTML fornecido por CMS/usuário sem sanitização contextual; preferir texto e
  componentes tipados. Evitar `dangerouslySetInnerHTML`.
- Links externos que abrem nova aba devem usar `rel="noopener noreferrer"`; validar esquema e
  destino de URLs originadas em conteúdo editável.
- Aplicar cabeçalhos de segurança na hospedagem, incluindo CSP adequada aos recursos reais,
  `X-Content-Type-Options`, política de referrer e proteção contra framing conforme o ambiente.
- Manter dependências mínimas, revisar origem/licença e alertas de segurança antes de atualizar;
  usar lockfile versionado e atualizar versões de forma deliberada. Revisar alertas de React,
  Vite e dependências antes de publicar.
- Formulários futuros exigem endpoint protegido, validação de entrada no servidor, limites de
  requisição e política de retenção/privacidade definidos. Não confiar em validação cliente.

## Organização de arquivos prevista

```text
src/
├── app/
│   ├── App.tsx
│   └── metadata.ts
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── SiteFooter.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedProductsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/
│   │   ├── SectionHeading.tsx
│   │   ├── Container.tsx
│   │   └── ContactLink.tsx
│   └── ui/                 # componentes shadcn/ui usados pela página
├── content/
│   └── home.ts
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── types/
│   └── business.ts
└── main.tsx
public/
├── favicon.svg
├── robots.txt
└── images/                 # apenas arquivos cuja URL pública estável seja necessária
```

**Decisão de estrutura**: aplicação web frontend única. Manter seções independentes e dados
fora da marcação permite evoluir conteúdo e acrescentar rotas sem monorepo, backend ou padrões
de repositório prematuros.

## Critérios técnicos de qualidade

- TypeScript estrito sem `any` não justificado, dados comerciais tipados e ausência de erros de
  compilação; lint/format podem ser configurados conforme convenção do projeto, sem criar testes.
- Componentes têm responsabilidade explícita, sem duplicação relevante nem abstrações universais
  sem consumidor real; conteúdo não é repetido em múltiplas seções.
- Semântica, navegação por teclado, foco visível, contraste, nomes acessíveis, alternativas de
  imagem e operação de menu/FAQ devem ser revisados manualmente com os fluxos principais.
- Breakpoints móveis, tablet e desktop, com atenção especial a 360 px, 768 px e 1280 px; nenhuma
  rolagem horizontal ou CTA coberto/fora da tela em layout comum.
- Links e canais conferidos manualmente; destino externo seguro; nenhum link de exemplo publicado.
- Imagens responsivas e comprimidas, dimensões reservadas, carregamento da imagem principal
  priorizado e imagens fora da tela adiadas.
- Metadados, hierarquia de headings, conteúdo local e dados estruturados revisados com base em
  fatos confirmados.
- Inspecionar manualmente console, comportamento de carregamento e build de produção; não criar
  nem executar testes automatizados.

## Fases e marcos de implementação

1. **Base e tokens**: scaffold React+TypeScript+Vite, dependências compatíveis atuais, alias,
   Tailwind, tokens, convenções, HTML base e metadados.
2. **Layout e conteúdo**: tipos de domínio, conteúdo validado, header, navegação, container,
   hero, institucional e diferenciais.
3. **Oferta e confiança**: serviços, produtos, depoimentos/evidências reais e FAQ com
   interações acessíveis.
4. **Conversão e localização**: contato, links funcionais, endereço/área e horários, footer,
   política de privacidade se necessária; manter formulário fora do lançamento até haver endpoint
   aprovado.
5. **Qualidade e publicação**: otimização e verificação de imagens, SEO local, revisão manual
   dos fluxos, responsive, teclado e acessibilidade, checagem de compilação/build, cabeçalhos de
   segurança e publicação HTTPS.

## Validação manual essencial

Consultar [quickstart.md](./quickstart.md) para o roteiro de verificação manual. Os critérios de
aceitação funcionais permanecem na [spec.md](./spec.md); não há plano de testes automatizados.

## Artefatos de desenho

- [Pesquisa e decisões](./research.md)
- [Modelo de conteúdo](./data-model.md)
- [Contrato da interface](./contracts/home-page.md)
- [Guia de validação manual](./quickstart.md)

## Rastreamento de complexidade

Não há violação da constituição que exija justificativa. Integração de formulário, CMS,
administração, checkout e disponibilidade em tempo real são evoluções condicionadas a requisitos
de negócio futuros, não dependências assumidas na primeira entrega.
