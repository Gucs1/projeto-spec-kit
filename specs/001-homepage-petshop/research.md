# Pesquisa e decisões: Home page comercial do petshop

**Data da pesquisa**: 2026-11-24  
**Escopo**: confirmar stack, integração CSS/UI, compatibilidade do ambiente e critérios técnicos.

## Stack e versões

### React

- **Decisão**: React e React DOM 19.3, usando o canal estável, se ainda forem as versões
  estáveis mais recentes e compatíveis no momento da implementação.
- **Racional**: versão atual indicada pela documentação e release oficial do React; a página é
  uma aplicação de cliente com estado interativo limitado.
- **Alternativas consideradas**: React 19.2 ou versão futura. Usar uma versão estável posterior
  se publicada e compatível antes da instalação; não usar canal Canary/Experimental.
- **Fonte**: [React Versions](https://react.dev/versions), [React 19.3](https://react.dev/blog/2026/09/09/react-19-3).

### Vite e Node.js

- **Decisão**: scaffold React + TypeScript com Vite 8.x e versão de Node.js LTS suportada que
  atenda ao mínimo exigido pelo Vite no momento da instalação.
- **Racional**: Vite é pedido explicitamente; documentação atual informa Vite 8.3.x e suporte a
  Node 20.19+ ou 22.12+.
- **Alternativas consideradas**: Vite 7.x apenas se uma dependência essencial não for compatível
  com 8.x; registrar motivo e prazo de atualização. Não iniciar projeto novo com Create React App.
- **Fonte**: [Vite Getting Started](https://vite.dev/guide/), [Vite releases](https://vite.dev/releases/), [Vite 8](https://vite.dev/blog/announcing-vite8.html).

### TypeScript

- **Decisão**: versão estável do TypeScript mais recente compatível com React, Vite e ferramentas
  escolhidas no início da implementação; habilitar `strict` e fixar por lockfile.
- **Racional**: a solicitação requer TypeScript e a documentação atual indica TypeScript 7.0
  estável, 7.1 em beta. Portanto, preferir 7.0 até 7.1 se tornar estável e passar pela
  compatibilidade do ecossistema.
- **Alternativas consideradas**: TypeScript 6.x se uma dependência necessária não funcionar na
  7.0; exceção deve registrar incompatibilidade concreta.
- **Fonte**: [TypeScript download](https://www.typescriptlang.org/download/).

### Tailwind CSS e shadcn/ui

- **Decisão**: Tailwind CSS 4.3 (ou stable mais recente compatível) via integração oficial
  `@tailwindcss/vite`; shadcn/ui CLI atual para gerar componentes locais necessários ao projeto.
- **Racional**: as instruções oficiais shadcn para Vite demonstram React + TypeScript, Tailwind
  v4 e uso de `shadcn@latest`; shadcn fornece código de componente local, facilitando controle
  visual, sem obrigar a usar todos os componentes.
- **Alternativas consideradas**: Tailwind 3 se restrição de navegador ou plugin indispensável
  impedir Tailwind 4; componentes próprios acessíveis apenas quando o componente shadcn não
  atender o padrão visual/comportamental.
- **Fonte**: [shadcn/ui Vite](https://ui.shadcn.com/docs/installation/vite), [shadcn/ui Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4), [Tailwind CSS com Vite](https://tailwindcss.com/docs/installation/using-vite).

### Acessibilidade

- **Decisão**: tratar WCAG 2.2 nível AA como referência de aceite para a experiência pública,
  com revisão manual e sem alegar conformidade total sem auditoria apropriada.
- **Racional**: W3C publica WCAG 2.2 como recomendação e incentiva uso da versão mais recente.
- **Alternativas consideradas**: critérios internos mínimos. Não suficientes para esta entrega,
  que já estabelece acessibilidade como requisito.
- **Fonte**: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

## Arquitetura e evolução

- **Decisão**: frontend estático organizado por responsabilidade (layout, seções, UI comum,
  conteúdo e utilitários). Contrato tipado separa apresentação da origem dos dados.
- **Racional**: adequa-se a uma home única; possibilita trocar conteúdo versionado por CMS/API
  com adaptador de dados no futuro, sem introduzir backend ou monorepo agora.
- **Alternativas consideradas**: monorepo, arquitetura em camadas de serviço/repositório e
  renderização de servidor. Não há páginas, APIs, equipe ou necessidade dinâmica que justifiquem
  essa complexidade na fase inicial.

## Formulário e dados pessoais

- **Decisão**: usar canais de contato diretos no lançamento. Formulário é evolução opcional e
  depende de endpoint aprovado, proteção contra abuso, tratamento de erros e aviso de privacidade.
- **Racional**: não há backend no escopo estático e o usuário não deve ser induzido a acreditar
  que uma mensagem foi enviada quando não há destino operacional.
- **Alternativas consideradas**: formulário conectado a provedor terceirizado, a decidir quando
  requisito, operador dos dados, retenção e custo forem conhecidos; nenhum segredo deve estar no
  cliente.

## Segurança, performance e entrega

- Dependências estáveis mínimas, lockfile versionado, auditoria de origem e atualização
  consciente. Todo valor `VITE_*` é considerado público.
- Servir em HTTPS, configurar política de segurança de conteúdo de acordo com os recursos reais,
  limitar conteúdo editável e validar URLs externas.
- Reservar dimensões de mídia, otimizar e servir imagens responsivas, evitar JavaScript e
  bibliotecas sem valor no fluxo do visitante.
- Fazer revisão manual em aparelho/viewport móvel e desktop, checar links, foco, teclado,
  headings, texto alternativo, contrastes, conteúdo real, console e build.
- Não criar nem executar testes automatizados, conforme a constituição e a especificação.

## Política para versões “mais recentes”

As versões acima são um retrato da documentação consultada em 2026-11-24, não pins imutáveis.
Na implementação, consultar a documentação e release tags oficiais de novo, confirmar versões
estáveis, notas de breaking changes e suporte Node, instalar versões compatíveis, registrar
versões resolvidas e gerar/atualizar lockfile. Não atualizar major/minor automaticamente sem
revisão de compatibilidade.
