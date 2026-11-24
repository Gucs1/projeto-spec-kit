# Modelo de conteúdo: Home page comercial do petshop

O modelo descreve conteúdo estático da primeira versão e define um limite de dados consumível
por uma origem futura (CMS ou API). Os componentes não devem depender do formato de um fornecedor.

## Entidades

### BusinessProfile

Representa dados comerciais e de confiança do petshop.

| Campo | Tipo conceitual | Regra |
|---|---|---|
| name | texto | Obrigatório; nome comercial confirmado |
| tagline | texto | Proposta clara, sem afirmações não verificadas |
| description | texto | Apresentação institucional aprovada |
| serviceArea | texto | Área atendida confirmada; usar quando não houver endereço visitável |
| address | endereço opcional | Publicar apenas quando o local for destinado a visita |
| openingHours | lista de períodos | Horários confirmados e apresentados localmente |
| phone | telefone opcional | Número ativo em formato apresentável e link normalizado |
| email | e-mail opcional | Endereço ativo e link apropriado |
| messagingUrl | URL opcional | Destino validado e canal operacional |
| mapUrl | URL opcional | Localização consistente com endereço publicado |
| socialLinks | lista de links | Apenas perfis oficiais ativos |
| logo | asset opcional | Marca autorizada, com alternativa textual adequada |

### Service

| Campo | Tipo conceitual | Regra |
|---|---|---|
| id | identificador estável | Único para a seção e links internos |
| name | texto | Nome específico da oferta |
| description | texto | Descreve o serviço sem conteúdo promocional vazio |
| audience | texto opcional | Espécies, portes ou condições somente se confirmados |
| details | lista de texto opcional | O que inclui, preparo ou condições relevantes |
| image | asset opcional | Imagem real/autorizada, alt obrigatório se informativa |
| contactAction | referência opcional | Canal funcional para detalhes ou pedido de horário |
| displayOrder | inteiro | Determina a ordem editorial, sem lógica de negócio |

### FeaturedProduct

| Campo | Tipo conceitual | Regra |
|---|---|---|
| id | identificador estável | Único |
| name | texto | Nome real de item ou categoria |
| description | texto | Informação aprovada, sem alegar estoque não confirmado |
| category | texto opcional | Categoria real |
| image | asset opcional | Imagem licenciada/autorizada, dimensões definidas |
| price | valor opcional | Só publicar se valor e condições estiverem atualizados |
| availabilityNote | texto opcional | Indicar consulta quando disponibilidade variar |
| action | referência de contato | Canal ativo para consultar ou comprar |

### TrustEvidence

Representa uma prova legítima de confiança usada nos diferenciais ou prova social.

| Campo | Tipo conceitual | Regra |
|---|---|---|
| id | identificador estável | Único |
| kind | enumeração | `testimonial`, `credential`, `business_fact` ou `process` |
| title | texto | Descritivo e não enganoso |
| body | texto | Fato verificável ou depoimento autorizado sem edição que altere sentido |
| sourceLabel | texto opcional | Origem identificável quando aplicável |
| sourceUrl | URL opcional | Validada e autorizada |
| attribution | texto opcional | Atribuição aprovada pelo autor/negócio |
| permissionConfirmed | booleano | Obrigatório e verdadeiro para depoimento/foto de cliente |

### FaqItem

| Campo | Tipo conceitual | Regra |
|---|---|---|
| id | identificador estável | Único; associado ao ID do disclosure |
| question | texto | Pergunta real e específica |
| answer | texto ou conteúdo estruturado limitado | Resposta aprovada, clara e sem prometer resultado não confirmado |
| relatedAction | referência opcional | Link a serviço, contato ou localização quando útil |

### ContactChannel

| Campo | Tipo conceitual | Regra |
|---|---|---|
| kind | enumeração | `phone`, `messaging`, `email`, `map` ou `social` |
| label | texto | Nome acessível da ação |
| href | URL | Esquema e host aprovados; nenhum placeholder em produção |
| primary | booleano | No máximo um CTA primário global por contexto visual |
| active | booleano | Canais inativos não são renderizados como opção funcional |

## Relações

- Um `BusinessProfile` tem zero ou mais `ContactChannel`.
- A home apresenta várias instâncias de `Service`, `FeaturedProduct`, `TrustEvidence` e
  `FaqItem`, todas ordenadas explicitamente.
- Serviços e produtos podem apontar para um `ContactChannel` ativo; componentes resolvem a
  referência para produzir CTA com texto e destino coerentes.
- Imagens são assets referenciados por caminhos locais controlados; não aceitar HTML arbitrário.

## Validação de conteúdo

- Dados comerciais obrigatórios para exibição (nome, proposta, endereço/área atendida e pelo
  menos um canal de contato ativo) devem ser conferidos antes da publicação.
- URLs precisam usar esquemas permitidos para o tipo de canal e abrir destino coerente.
- Conteúdo social exige permissão e origem confirmadas; quando inexistente, a seção pode ser
  substituída por evidência de processo/negócio verificável.
- Valores e disponibilidade são opcionais e só aparecem quando atualizados e aprovados.
- Ausência de dado opcional esconde o trecho correspondente; nunca gera texto genérico de
  preenchimento na interface publicada.
- Futuro adaptador de CMS valida e normaliza dados na entrada, produzindo as mesmas entidades e
  removendo campos desconhecidos antes de entregar o modelo à apresentação.
