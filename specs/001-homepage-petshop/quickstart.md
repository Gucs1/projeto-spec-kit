# Guia de validação manual: Home page do petshop

Este guia descreve preparação e cenários de inspeção humana da implementação. **Não criar nem
executar testes automatizados.** Os resultados devem ser anotados por fluxo, viewport, resultado
observado e defeito encontrado.

## Pré-requisitos

- Dados comerciais, serviços, produtos, horários, localização/área, canais, imagens e evidências
  aprovados pelo responsável.
- Ambiente local configurado com a versão de Node.js compatível com a versão estável atual do
  Vite e dependências instaladas pelo lockfile do projeto.
- Navegador moderno; ao menos uma viewport de celular de 360 px e uma desktop de 1280 px.

## Inicialização local

1. Instalar dependências usando o gerenciador identificado pelo lockfile, em modo reprodutível.
2. Iniciar o servidor local de desenvolvimento conforme o script do projeto.
3. Abrir a rota raiz `/` no navegador e conferir console e carregamento da página.
4. Para revisão de entrega, gerar build de produção e abrir a saída por ambiente de preview ou
   hospedagem de staging; isso verifica compilação e configuração, sem executar testes.

Os nomes dos comandos devem seguir o `package.json` efetivamente criado; não presumir um
gerenciador diferente do lockfile.

## Cenários manuais

### Primeira tela e conversão

1. Abrir `/` em 360 px e observar a primeira tela por 10 segundos.
2. Registrar se nome/proposta, localidade ou área e CTA principal são identificados sem rolar.
3. Ativar CTA de contato e confirmar que abre o canal real correspondente.
4. Confirmar que texto de agendamento não promete reserva antes da confirmação do estabelecimento.

### Navegação e oferta

1. Percorrer header e links de âncora usando toque e teclado.
2. Confirmar acesso a serviços, produtos, perguntas e contato e ausência de destinos quebrados.
3. Conferir se serviços, produtos e disponibilidade correspondem ao conteúdo aprovado.
4. Conferir prova social/autorização; se não existir prova, verificar uso de evidência alternativa
   legítima ou omissão da seção.

### Contato e localização

1. Conferir telefone, e-mail, mensageria, mapa, perfis, horários e endereço/área atendida contra
   o cadastro aprovado.
2. Em celular, acionar telefone, mensagem e mapa; verificar o destino suportado pelo dispositivo.
3. Confirmar consistência dos mesmos dados no footer e evitar cadastro obrigatório.
4. Se houver formulário futuro, simular campos ausentes, formato inválido, erro do endpoint,
   envio concluído e reenvio; confirmar mensagens acessíveis e que erro não é anunciado como êxito.

### Acessibilidade

1. Usar somente teclado para navegar pelo header, CTAs, FAQ e canais.
2. Conferir foco visível, ordem de foco lógica, nome acessível dos controles e abertura/fechamento
   do menu e FAQ sem mouse.
3. Conferir títulos semânticos, landmarks, idioma, contraste e texto alternativo de imagens
   informativas; imagens decorativas não devem poluir leitura assistiva.
4. Ativar preferência de movimento reduzido e confirmar que toda informação permanece disponível.

### Responsividade, mídia e performance percebida

1. Inspecionar 360 px, 768 px e 1280 px; observar rolagem horizontal, cortes, sobreposição e
   legibilidade em cada seção.
2. Confirmar que imagem principal reserva espaço, aparece com qualidade adequada e não pesa
   desnecessariamente em conexão móvel; imagens abaixo da dobra carregam sob demanda.
3. Observar carregamento e estabilidade de layout, especialmente hero e CTA; registrar mudança
   visível inesperada ou atraso que impeça interação.
4. Repetir navegação após recarregar a página e conferir que âncoras e links continuam funcionais.

### SEO local e segurança básica

1. Inspecionar título, descrição, `lang="pt-BR"`, `h1`, headings e dados locais no conteúdo
   visível.
2. Conferir que metadados e eventual JSON-LD não divergem dos fatos confirmados.
3. Verificar ausência de placeholders, avaliações inventadas, chaves expostas e links externos
   com destino suspeito.
4. Em staging, confirmar HTTPS, política de segurança configurada para os recursos utilizados e
   ausência de erros relevantes no console.

## Registro da revisão

Anotar data, revisor, ambiente, navegador, viewport, fluxo, evidência observada e resultado
(aprovado/ajustar). Defeitos de canal, dados inventados, bloqueios de teclado, layout móvel
quebrado ou CTA inoperante impedem aceite até correção. Não rodar ferramentas de teste
automatizado como parte deste procedimento.
