# Segurança para um formulário futuro

O formulário permanece fora da primeira entrega até que exista um endpoint e um responsável operacional aprovados. Antes de habilitá-lo, definir:

- destino confiável, operação de entrega e proteção contra abuso no servidor;
- campos mínimos, finalidade, base aplicável, aviso de privacidade e retenção;
- validação no cliente para orientação e validação autoritativa no servidor;
- limites de tamanho, formato, frequência e mecanismos proporcionais contra spam;
- estados acessíveis de envio, sucesso real e erro recuperável, sem anunciar sucesso antes da confirmação do endpoint;
- prevenção de envio duplicado e preservação dos dados em caso de falha.

Nenhuma credencial ou chave de serviço pode ser incluída no bundle público do frontend.
