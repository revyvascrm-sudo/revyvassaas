# Ativação WhatsApp API no Revyvas CRM

O Revyvas trabalha com um modelo de WhatsApp por clínica. Cada tenant pode ter provedor, modo, Phone Number ID, WABA, template padrão, consentimento obrigatório e biblioteca própria de mensagens.

## Rotas principais

- `GET /api/whatsapp/model`: retorna o modelo WhatsApp da clínica logada.
- `PUT /api/whatsapp/model`: salva provedor, modo, IDs e templates da clínica logada.
- `POST /api/integrations/whatsapp/test`: dispara um teste protegido pelo login.
- `POST /api/whatsapp/send-template`: envia um template para paciente, com checagem de consentimento.
- `GET /api/webhooks/whatsapp`: valida o webhook público da Meta.
- `POST /api/webhooks/whatsapp`: recebe status e mensagens recebidas.

## Variáveis de produção

Configure no Render ou ambiente equivalente:

```env
WHATSAPP_TOKEN=token_permanente_da_meta
WHATSAPP_PHONE_NUMBER_ID=id_do_numero_da_clinica
WHATSAPP_API_VERSION=v20.0
```

No painel do CRM, em Ajustes, cada clínica deve preencher:

- Provedor: `WhatsApp Cloud API`, `Z-API` ou `Sandbox`.
- Modo: `Sandbox` para teste ou `Produção` para envio real.
- Phone Number ID: ID do número oficial da clínica.
- Business Account ID: WABA da clínica.
- Template padrão: modelo usado em testes e envios rápidos.
- Consentimento obrigatório: ligado por padrão.

## Webhook

No painel da Meta, use:

```text
https://SEU-DOMINIO/api/webhooks/whatsapp
```

O token de verificação padrão do sandbox é `reviva_whatsapp_verify`. Em produção, defina um token próprio por clínica no modelo WhatsApp antes de ativar o webhook.

## Observações

O modo sandbox não chama a Meta e apenas registra auditoria. O modo produção exige token real, Phone Number ID e templates aprovados no WhatsApp Business Manager.
