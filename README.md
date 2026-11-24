# Projeto Spec-Kit — exercício de desenvolvimento guiado por especificação

Este repositório foi criado para **treinar o uso do Spec-Kit** e praticar o fluxo Spec-Driven Development (SDD): entender uma necessidade, transformá-la em especificação, planejar a solução e implementar o que foi especificado.

O exercício usado para percorrer o fluxo é a criação de uma home comercial para um petshop. A aplicação em React é o resultado prático do treinamento; o objetivo principal do repositório é aprender a trabalhar com os artefatos e etapas do Spec-Kit, mantendo requisitos, decisões e implementação rastreáveis.

> Este projeto é educacional. Os dados do petshop ainda precisam ser fornecidos e aprovados pelo estabelecimento; o conteúdo atual não representa um negócio real nem deve ser publicado como se representasse.

## Objetivos de aprendizagem

- Entender a necessidade do usuário e delimitar o problema antes de programar.
- Praticar a criação e revisão de uma especificação (`spec.md`).
- Transformar requisitos em decisões técnicas e arquitetura (`plan.md` e artefatos relacionados).
- Gerar tarefas pequenas, ordenadas e rastreáveis (`tasks.md`).
- Implementar as tarefas e registrar o que foi concluído ou depende de informação externa.
- Comparar requisitos, plano e código para encontrar lacunas antes de considerar uma entrega pronta.

## Fluxo de treinamento

O exercício acompanha estas etapas de aprendizagem:

1. **Entender a necessidade** — identificar público, problema, resultado esperado e restrições.
2. **Começar a usar Spec-Kit** — conhecer a estrutura do projeto e os comandos do fluxo.
3. **Criar a especificação** — registrar histórias, requisitos funcionais e critérios de sucesso sem começar pela implementação.
4. **Trabalhar com o plano** — pesquisar decisões técnicas, definir arquitetura e organizar os artefatos de desenho.
5. **Implementar a especificação gerada** — executar as tarefas na ordem definida, atualizar seu estado e validar a compilação.
6. **Aplicar o fluxo completo** — revisar consistência entre necessidade, especificação, plano, tarefas e código; registrar pendências em vez de inventar dados.

Em um projeto Spec-Kit, o ciclo comum é:

```text
necessidade → especificação → esclarecimentos → plano → tarefas → implementação → análise/revisão
```

Os nomes dos comandos podem variar conforme a instalação do Spec-Kit e as skills disponíveis no ambiente. Neste workspace, as skills locais estão em `.agents/skills/` e os scripts do projeto em `.specify/scripts/`. O comando de implementação usado neste exercício é `/speckit-implement`.

## Artefatos Spec-Kit deste exercício

Os documentos da feature ficam em [`specs/001-homepage-petshop/`](./specs/001-homepage-petshop/):

- [`spec.md`](./specs/001-homepage-petshop/spec.md) — histórias de usuário, requisitos, critérios de sucesso e premissas.
- [`plan.md`](./specs/001-homepage-petshop/plan.md) — stack, decisões de arquitetura, organização de arquivos e abordagem de validação.
- [`research.md`](./specs/001-homepage-petshop/research.md) — pesquisa e decisões técnicas registradas para o exercício.
- [`data-model.md`](./specs/001-homepage-petshop/data-model.md) — entidades e regras para dados comerciais.
- [`contracts/home-page.md`](./specs/001-homepage-petshop/contracts/home-page.md) — estrutura, navegação, interações e comportamento esperado da home.
- [`quickstart.md`](./specs/001-homepage-petshop/quickstart.md) — roteiro de revisão manual.
- [`tasks.md`](./specs/001-homepage-petshop/tasks.md) — tarefas de implementação e seu estado atual.
- [`review-notes.md`](./specs/001-homepage-petshop/review-notes.md) — evidências e pendências da revisão realizada.

Antes de implementar uma feature, confirme que a especificação, o plano e a lista de tarefas estão presentes e coerentes. O script de pré-requisitos usado pelo fluxo de implementação é:

```powershell
.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks
```

## Projeto prático: home de petshop

A home demonstra como uma especificação pode orientar uma aplicação real. O escopo planejado inclui:

- apresentação e navegação da página;
- seções de apresentação, diferenciais, serviços e produtos;
- evidências de confiança e perguntas frequentes;
- canais de contato, localização e horários quando confirmados;
- acessibilidade, responsividade, metadados e orientações de segurança para publicação.

A aplicação não inclui backend, CMS, checkout, inventário em tempo real, reserva automática nem formulário de contato. Solicitações de agendamento devem ser entendidas como pedidos sujeitos à confirmação humana.

### Estado atual e conteúdo pendente

A base da aplicação foi implementada e compilada. O conteúdo comercial permanece pendente porque este exercício não recebeu fatos aprovados do estabelecimento. Por isso, listas de serviços, produtos, canais, perguntas frequentes e evidências começam vazias; não devem ser preenchidas com avaliações, preços, horários, endereços, credenciais ou ofertas inventadas.

As tarefas concluídas e pendentes estão indicadas em [`tasks.md`](./specs/001-homepage-petshop/tasks.md). A revisão registrada em [`review-notes.md`](./specs/001-homepage-petshop/review-notes.md) é parcial e não equivale à aceitação comercial, auditoria de acessibilidade ou autorização para publicação.

## Tecnologias

- React e React DOM 19
- TypeScript 7 em modo estrito
- Vite 8
- Tailwind CSS 4 com plugin oficial do Vite
- shadcn/ui CLI disponível para gerar componentes locais quando forem necessários
- Lucide React para ícones
- npm e `package-lock.json` para instalação reprodutível

## Requisitos e comandos

- Node.js 22.12 ou superior; `.nvmrc` seleciona a linha 22.
- npm compatível com a versão instalada do Node.js.

```bash
npm install          # instala dependências segundo package-lock.json
npm run dev          # inicia o servidor de desenvolvimento
npm run typecheck    # verifica os tipos TypeScript
npm run build        # verifica tipos e gera o build em dist/
```

O projeto segue a constituição local: **não criar nem executar testes automatizados**. A validação funcional prevista é manual e está descrita em [`quickstart.md`](./specs/001-homepage-petshop/quickstart.md).

## Organização do código

```text
src/
├── app/                 # composição da home, metadados e JSON-LD
├── assets/images/       # imagens locais autorizadas
├── components/
│   ├── layout/          # cabeçalho, navegação móvel e rodapé
│   ├── sections/        # seções comerciais da página
│   ├── shared/          # padrões reutilizáveis
│   └── ui/              # componentes locais de interface
├── content/             # dados estáticos tipados
├── lib/                 # utilitários pequenos
├── styles/              # tokens e estilos globais
└── types/               # tipos de domínio
specs/                   # especificações e documentos do Spec-Kit
.specify/                # scripts e memória do projeto
.agents/skills/          # skills locais relacionadas ao Spec-Kit
```

## Como continuar o exercício

1. Revise `spec.md`, `plan.md` e `tasks.md` antes de alterar o escopo.
2. Se os requisitos estiverem incompletos, esclareça-os e atualize a especificação antes da implementação.
3. Execute as tarefas na ordem e respeite dependências e critérios de aceite.
4. Marque em `tasks.md` apenas o trabalho realmente concluído.
5. Registre evidências e pendências em `review-notes.md`.
6. Atualize este README se a stack, os comandos ou o fluxo de treinamento mudarem.

Para concluir a experiência da home, obtenha do responsável pelo negócio os dados confirmados descritos no modelo em [`data-model.md`](./specs/001-homepage-petshop/data-model.md), preencha os módulos em `src/content/` e execute a revisão manual antes de qualquer publicação.

## Segurança e publicação

O frontend é estático e tudo que entra no bundle é público. Não coloque chaves, tokens ou credenciais em variáveis `VITE_*`. Hospedagem pública deve usar HTTPS e configurar cabeçalhos de segurança conforme [`docs/deployment-security.md`](./docs/deployment-security.md). Um formulário só pode ser adicionado quando houver destino aprovado, validação no servidor, tratamento de falhas, proteção contra abuso e requisitos de privacidade definidos; consulte [`docs/contact-form-security.md`](./docs/contact-form-security.md).
