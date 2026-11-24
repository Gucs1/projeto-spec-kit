# Tarefas: Home page comercial do petshop

**Entrada**: Documentos de design em `/specs/001-homepage-petshop/`

**Pré-requisitos**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/home-page.md`, `quickstart.md`.

**Testes automatizados**: Não criar nem executar, conforme a constituição. As verificações de aceite são manuais.

**Organização**: Tarefas agrupadas pelas histórias do usuário da especificação para permitir implementação incremental.

## Formato

Cada item usa checkbox, ID sequencial, marcador `[P]` somente quando puder ser feito em paralelo, identificador da história na fase correspondente e caminho do arquivo de destino.

## Fase 1: Setup (infraestrutura compartilhada)

**Objetivo**: Criar a aplicação frontend React + TypeScript + Vite e estabelecer dependências e pastas conforme o plano.

- [X] T001 Criar o scaffold React + TypeScript com a versão estável compatível atual do Vite e registrar a versão do Node suportada em `.nvmrc` e `package.json`.
- [X] T002 Instalar React, React DOM, TypeScript, plugin React, Tailwind CSS com plugin Vite, CLI shadcn/ui e dependências mínimas; salvar versões resolvidas no `package.json` e lockfile do gerenciador escolhido.
- [X] T003 [P] Configurar scripts de desenvolvimento, build de produção e checagem de tipos no `package.json`, sem scripts ou dependências de teste automatizado.
- [X] T004 [P] Criar a estrutura inicial de pastas da arquitetura em `src/app/`, `src/assets/images/`, `src/components/layout/`, `src/components/sections/`, `src/components/shared/`, `src/components/ui/`, `src/content/`, `src/lib/`, `src/styles/`, `src/types/` e `public/`.

## Fase 2: Fundação (pré-requisitos bloqueantes)

**Objetivo**: Definir tokens, contrato de dados, elementos comuns e shell sem dependência de CMS ou backend.

- [X] T005 Configurar Tailwind CSS 4 com integração Vite, import global e tokens semânticos de cor, tipografia, espaçamento e foco em `vite.config.ts` e `src/styles/globals.css`.
- [X] T006 [P] Definir tipos estritos de domínio em `src/types/business.ts` cobrindo `BusinessProfile.name`, `BusinessProfile.tagline`, `BusinessProfile.description`, `BusinessProfile.serviceArea`, `BusinessProfile.address`, `BusinessProfile.openingHours`, `BusinessProfile.phone`, `BusinessProfile.email`, `BusinessProfile.messagingUrl`, `BusinessProfile.mapUrl`, `BusinessProfile.socialLinks`, `BusinessProfile.logo`; `Service.id`, `Service.name`, `Service.description`, `Service.audience`, `Service.details`, `Service.image`, `Service.contactAction`, `Service.displayOrder`; `FeaturedProduct.id`, `FeaturedProduct.name`, `FeaturedProduct.description`, `FeaturedProduct.category`, `FeaturedProduct.image`, `FeaturedProduct.price`, `FeaturedProduct.availabilityNote`, `FeaturedProduct.action`; `TrustEvidence.id`, `TrustEvidence.kind`, `TrustEvidence.title`, `TrustEvidence.body`, `TrustEvidence.sourceLabel`, `TrustEvidence.sourceUrl`, `TrustEvidence.attribution`, `TrustEvidence.permissionConfirmed`; `FaqItem.id`, `FaqItem.question`, `FaqItem.answer`, `FaqItem.relatedAction`; e `ContactChannel.kind`, `ContactChannel.label`, `ContactChannel.href`, `ContactChannel.primary`, `ContactChannel.active`, usando as regras correspondentes em `data-model.md`.
- [X] T007 [P] Implementar `Container`, `SectionHeading`, `ContactLink` e utilitário de classes em `src/components/shared/Container.tsx`, `src/components/shared/SectionHeading.tsx`, `src/components/shared/ContactLink.tsx` e `src/lib/utils.ts` conforme os tokens e o contrato `contracts/home-page.md`.
- [X] T008 Compor o shell semântico da página com skip link, landmarks e ponto de montagem das seções em `src/app/App.tsx` e `src/main.tsx`, mantendo `index.html` na raiz com `lang="pt-BR"`, charset e viewport.
- [X] T009 Configurar TypeScript estrito e alias `@/` coerente com Vite em `tsconfig.json`, `tsconfig.app.json` e `vite.config.ts`; adicionar metadados base da rota raiz em `src/app/metadata.ts` sem dados comerciais fictícios.

**Checkpoint**: estrutura, estilos base, tipos e shell prontos para as histórias. Não há configuração de testes automatizados.

## Fase 3: História do usuário 1 — Encontrar rapidamente um petshop confiável (Prioridade: P1, MVP)

**Objetivo**: A primeira tela comunica identidade, oferta, área atendida, evidência real e CTA principal.

**Critério de aceite independente**: revisão manual confirma que a primeira tela identifica o negócio, sua proposta, localidade/área e ação principal em até 10 segundos; navegação por teclado alcança o CTA.

- [ ] T010 [P] [US1] Criar dados aprovados do negócio e proposta inicial em `src/content/business.ts`, preenchendo somente fatos confirmados e usando os tipos de `src/types/business.ts`.
- [X] T011 [P] [US1] Implementar header e navegação com identidade, links de seção, CTA visível, menu móvel operável por teclado e estado acessível em `src/components/layout/SiteHeader.tsx` e `src/components/layout/MobileNavigation.tsx`.
- [ ] T012 [US1] Implementar hero mobile-first com proposta específica, indicação local, prova de valor, CTA com destino funcional e imagem responsiva em `src/components/sections/HeroSection.tsx` e `src/assets/images/`.
- [ ] T013 [P] [US1] Implementar apresentação institucional com texto aprovado e mídia autorizada em `src/components/sections/AboutSection.tsx`.
- [ ] T014 [P] [US1] Implementar diferenciais com benefício explicado e evidência verificável em `src/components/sections/BenefitsSection.tsx`.
- [X] T015 [US1] Integrar header, hero, institucional e diferenciais no shell em `src/app/App.tsx`, preservando hierarquia semântica e IDs de âncora do contrato `contracts/home-page.md`.
- [ ] T016 [US1] Fazer revisão manual da primeira tela em 360 px e 1280 px, conteúdo, foco, CTA, links e evidência conforme `quickstart.md`; registrar achados em `specs/001-homepage-petshop/review-notes.md`.

## Fase 4: História do usuário 2 — Avaliar serviços e produtos (Prioridade: P1)

**Objetivo**: Apresentar serviços e itens/categorias reais, com orientação para detalhes, disponibilidade ou compra.

**Critério de aceite independente**: revisão manual localiza serviços e produtos, identifica o que é oferecido e confirma que cada ação leva a canal ativo; sem alegações de estoque ou preço não confirmadas.

- [ ] T017 [P] [US2] Modelar dados reais de serviços conforme `data-model.md` (`Service.name`, `Service.description`, `Service.audience`, `Service.details`, `Service.image`, `Service.contactAction`, `Service.displayOrder`) em `src/content/services.ts`.
- [ ] T018 [P] [US2] Modelar itens/categorias reais e nota de disponibilidade conforme `data-model.md` (`FeaturedProduct.name`, `FeaturedProduct.description`, `FeaturedProduct.category`, `FeaturedProduct.image`, `FeaturedProduct.price`, `FeaturedProduct.availabilityNote`, `FeaturedProduct.action`) em `src/content/products.ts`.
- [X] T019 [US2] Implementar seção de serviços com descrições escaneáveis, cards semânticos e CTA de solicitação de agendamento em `src/components/sections/ServicesSection.tsx`.
- [X] T020 [US2] Implementar destaques de produtos com imagens otimizadas, preço somente quando confirmado e aviso de disponibilidade conforme os dados em `src/components/sections/FeaturedProductsSection.tsx`.
- [X] T021 [US2] Integrar âncoras `#servicos` e `#produtos` e revisar os destinos dos CTAs de oferta em `src/app/App.tsx`.
- [ ] T022 [US2] Revisar manualmente conteúdo, disponibilidade, links, navegação por teclado e layout das seções em 360 px e 1280 px; registrar resultado em `specs/001-homepage-petshop/review-notes.md`.

## Fase 5: História do usuário 3 — Entrar em contato ou solicitar agendamento (Prioridade: P1)

**Objetivo**: Permitir contato sem cadastro pelos canais ativos e deixar claro que horário solicitado depende de confirmação.

**Critério de aceite independente**: em dispositivo móvel, telefone/mensagem/mapa iniciam a ação correspondente; nenhum canal inativo aparece e solicitação não é anunciada como reserva confirmada.

- [ ] T023 [P] [US3] Completar conteúdo tipado dos canais ativos conforme `data-model.md` (`ContactChannel.kind`, `ContactChannel.label`, `ContactChannel.href`, `ContactChannel.primary`, `ContactChannel.active`) em `src/content/contact.ts`, validando destinos e esquemas de URL.
- [X] T024 [US3] Implementar contato com telefone, mensageria, e-mail, endereço ou área e horários confirmados em `src/components/sections/ContactSection.tsx`, usando links apropriados e sem formulário fictício.
- [X] T025 [P] [US3] Implementar rodapé completo com identidade, dados operacionais, canais ativos e links institucionais em `src/components/layout/SiteFooter.tsx`.
- [X] T026 [US3] Integrar CTA de contato e âncora `#contato` no header, serviços, produtos e shell em `src/app/App.tsx` e componentes de seção correspondentes.
- [X] T027 [US3] Documentar estratégia para eventual formulário e requisitos de destino, validação servidor, privacidade, anti-spam, estados de envio e erro em `docs/contact-form-security.md`; não habilitar formulário até backend/provedor ser aprovado.
- [ ] T028 [US3] Revisar manualmente cada canal em celular e desktop, consistência de endereço/horário e mensagem de solicitação sujeita a confirmação; registrar resultado em `specs/001-homepage-petshop/review-notes.md`.

## Fase 6: História do usuário 4 — Confirmar localização, reputação e condições (Prioridade: P2)

**Objetivo**: Reduzir dúvidas e consolidar confiança com evidências legítimas, respostas diretas e informação local consistente.

**Critério de aceite independente**: visitante encontra evidência autorizada ou alternativa verificável, respostas úteis de FAQ e dados operacionais consistentes; nenhum dado ausente é inventado.

- [ ] T029 [P] [US4] Preparar evidências verificáveis e autorizadas conforme `data-model.md` (`TrustEvidence.kind`, `TrustEvidence.title`, `TrustEvidence.body`, `TrustEvidence.sourceLabel`, `TrustEvidence.sourceUrl`, `TrustEvidence.attribution`, `TrustEvidence.permissionConfirmed`) em `src/content/trust.ts`.
- [ ] T030 [P] [US4] Preparar perguntas reais e respostas aprovadas conforme `data-model.md` (`FaqItem.question`, `FaqItem.answer`, `FaqItem.relatedAction`) em `src/content/faq.ts`.
- [X] T031 [US4] Implementar depoimentos autorizados ou evidências alternativas em `src/components/sections/TestimonialsSection.tsx`; omitir depoimentos sem permissão/origem confirmada.
- [X] T032 [US4] Implementar FAQ acessível com disclosure operável por teclado e respostas curtas em `src/components/sections/FaqSection.tsx`.
- [X] T033 [US4] Integrar seções de confiança e FAQ, navegação e dados operacionais confirmados em `src/app/App.tsx`.
- [ ] T034 [US4] Revisar manualmente permissões, origens, afirmações, funcionamento do FAQ, endereço, horário e área atendida; registrar resultado em `specs/001-homepage-petshop/review-notes.md`.

## Fase 7: Polimento e requisitos transversais

**Objetivo**: Fechar SEO, acessibilidade, performance, segurança e consistência visual para publicação.

- [X] T035 [P] Gerar title, description, Open Graph essencial, canonical condicional ao domínio aprovado e favicon em `src/app/metadata.ts`, `src/index.html` e `public/favicon.svg`.
- [X] T036 [P] Implementar dados estruturados locais somente com fatos visíveis/confirmados em `src/app/LocalBusinessJsonLd.tsx` e conectar à rota raiz em `src/app/App.tsx`.
- [X] T037 [P] Adicionar `robots.txt` e política de indexação coerentes com o ambiente publicado em `public/robots.txt`.
- [ ] T038 [P] Otimizar imagens do hero e das seções em `src/assets/images/`, incluindo variantes responsivas, formatos modernos, dimensões explícitas, alt adequado e lazy loading abaixo da dobra.
- [ ] T039 Aplicar revisão manual de acessibilidade WCAG 2.2 AA como referência, contraste, foco, teclado, landmarks, headings, alt, nome de controle e movimento reduzido em todos os componentes de `src/components/` e `src/app/App.tsx`; registrar evidências em `specs/001-homepage-petshop/review-notes.md`.
- [X] T040 [P] Configurar nota agnóstica de hospedagem com HTTPS, CSP, referrer policy, `X-Content-Type-Options`, proteção contra framing e ausência de segredos públicos em `docs/deployment-security.md`.
- [ ] T041 Revisar manualmente fluxos, links, conteúdo, console, layout em 360 px, 768 px e 1280 px, estabilidade visual e imagem principal conforme `specs/001-homepage-petshop/quickstart.md`; registrar correções e resultados em `specs/001-homepage-petshop/review-notes.md`.
- [X] T042 Gerar build de produção e checagem de tipos pelos scripts definidos em `package.json`, resolver falhas de compilação e confirmar lockfile; não criar nem executar testes automatizados.
- [X] T043 Consolidar decisões, dependências, procedimento de atualização e comportamento de contato em `README.md`, incluindo roteiro manual de `specs/001-homepage-petshop/quickstart.md`.

## Dependências e ordem de execução

### Dependências entre fases

- Setup (Fase 1) antecede a fundação.
- Fundação (Fase 2) bloqueia a composição das histórias por estabelecer estilos, tipos e shell.
- Histórias US1, US2 e US3 são P1 e dependem da fundação; US4 é P2. As seções têm arquivos próprios e podem ser trabalhadas em paralelo depois que os dados/tipos base estiverem prontos, mas integração final deve respeitar o shell compartilhado.
- Polimento (Fase 7) depende das seções e canais integrados; SEO local depende dos dados confirmados.

### Dependências das histórias

- **US1 (P1)**: depende da fundação; MVP de primeira impressão e proposta comercial.
- **US2 (P1)**: depende dos tipos e shell; seus componentes e arquivos de conteúdo são independentes de US1 em desenvolvimento, com integração posterior em `App.tsx`.
- **US3 (P1)**: depende do tipo de canal e shell; destinos reais precisam ser fornecidos antes do aceite.
- **US4 (P2)**: depende do shell e dos conteúdos/fatos aprovados; pode ser implementada em paralelo em arquivos próprios.

### Oportunidades de paralelização

- T003 e T004 podem ocorrer em paralelo após scaffold; T006 e T007 são independentes após a árvore inicial.
- Após T006–T009, grupos de conteúdo/section de US2, US3 e US4 podem ser trabalhados em paralelo por arquivo; tarefas de integração `App.tsx` devem ser coordenadas para evitar conflito.
- Em US1, T010, T011, T013 e T014 podem ser divididas por arquivos; T012 depende de dados/canais definidos e T015 depende das seções criadas.
- T035–T038 e T040 podem ser divididas por arquivos após as seções estarem estáveis; revisão transversal e build ficam ao final.

## Exemplo de execução paralela — seções pós-fundação

```text
Pessoa A: T017 + T019 (dados e seção de serviços)
Pessoa B: T018 + T020 (dados e seção de produtos)
Pessoa C: T029 + T031 (evidências e seção de confiança)
Pessoa D: T030 + T032 (FAQ)
Integrador: depois, T021, T026 e T033 em src/app/App.tsx
```

## Estratégia de implementação

### MVP

1. Completar Setup e Fundação.
2. Implementar US1: header, proposta, evidência, CTA, institucional e diferenciais.
3. Fazer revisão manual independente conforme o critério de US1; sem automação de testes.

### Incrementos comerciais

1. Adicionar US2 para mostrar oferta real de serviços e produtos.
2. Adicionar US3 para contato sem fricção e localização operacional.
3. Adicionar US4 para prova social legítima, dúvidas e condições do atendimento.
4. Concluir SEO, segurança, performance e revisão manual transversal antes da publicação.

## Notas de execução

- `[P]` indica que arquivos são distintos e não há dependência pendente entre as tarefas indicadas.
- `[US1]` a `[US4]` rastreiam as histórias da especificação.
- Não criar diretórios ou tarefas para testes automatizados; validação de aceite é manual.
- Formulário, backend, CMS, painel administrativo, checkout e estoque em tempo real ficam fora do MVP e exigem requisito e aprovação próprios.
