# Contrato de interface: Home page do petshop

## Superfície pública

- **Rota**: `/`.
- **Idioma**: Português do Brasil (`pt-BR`).
- **Tipo**: Página comercial pública e responsiva.
- **Objetivo principal**: Explicar a oferta local e conduzir o visitante a contato ou solicitação
  de agendamento.
- **Persistência**: Nenhuma interação de navegação exige conta ou cadastro.

## Estrutura e âncoras

| Ordem | Região semântica | Âncora sugerida | Contrato de conteúdo |
|---|---|---|---|
| 1 | `header` e `nav` | `#inicio` | Identidade, links das seções e CTA para contato/agendamento |
| 2 | `main > section` | `#inicio` | Um título principal, proposta, evidência e CTA primário |
| 3 | `section` | `#sobre` | Apresentação institucional com fatos aprovados |
| 4 | `section` | `#diferenciais` | Diferenciais com explicação e evidência |
| 5 | `section` | `#servicos` | Serviços reais, descrição e caminho de contato |
| 6 | `section` | `#produtos` | Produtos/categorias reais e nota de disponibilidade |
| 7 | `section` | `#confianca` | Depoimentos autorizados ou prova alternativa verificada |
| 8 | `section` | `#perguntas` | Perguntas e respostas operáveis por teclado |
| 9 | `section` | `#contato` | Canais ativos, endereço/área, horário e orientação |
| 10 | `footer` | — | Dados completos, links úteis e avisos aplicáveis |

IDs devem ser únicos e estáveis. Se uma seção opcional for retirada por falta de conteúdo
verificável, navegação e links relacionados precisam ser atualizados junto.

## Interações e resultados

- Links de seção navegam para o destino na própria página e não cobrem o heading com header fixo.
- Botões de telefone, e-mail, mensagem, mapa e perfil social só aparecem se o destino estiver
  ativo e validado; rótulo acessível descreve a ação, não apenas “clique aqui”.
- CTA de agendamento significa solicitação e não reserva confirmada até confirmação humana.
- Menu móvel comunica estado expandido/recolhido e permite abrir, navegar e fechar com teclado.
- FAQ segue comportamento disclosure/accordion, comunica estado e preserva operação sem mouse.
- Se houver formulário numa fase futura, ele só poderá mostrar sucesso após confirmação real do
  endpoint; estados de envio, erro recuperável e conclusão são anunciados de forma acessível.

## SEO, dados e privacidade

- Documento usa idioma `pt-BR`, título e descrição únicos e landmarks semânticos.
- Dados locais estruturados, se usados, devem refletir fielmente dados visíveis e confirmados.
- Não se promete checkout, cadastro, estoque sincronizado, resposta imediata ou reserva
  automática nesta interface.
- Links externos são validados; nova aba deve proteger contexto da página de origem.
- O contrato não expõe dados pessoais ou credenciais; eventual formulário terá contrato próprio
  para destino, retenção, consentimento e proteção anti-abuso antes de ser habilitado.
