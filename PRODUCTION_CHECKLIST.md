# Revyvas CRM - checklist de produção

## Pronto nesta etapa

- Landing page premium em `index.html`.
- App logado em `app.html`.
- Backend HTTP em `server.js`.
- Login demo com cookie HTTP-only.
- Estado por clínica em `data/reviva-state.json`.
- Health check público em `/api/health`.
- `package.json` com `npm start` e `npm run check`.
- `render.yaml` para deploy no Render.
- `.env.example` com variáveis de produção.
- `supabase/schema.sql` com modelo inicial de banco.

Login demo:

- Email: `gestora@lumina.local`
- Senha: `reviva123`

## Antes de vender para clientes reais

1. Migrar persistência JSON para Supabase/Postgres.
2. Trocar senha demo por hash seguro.
3. Criar cadastro e convite de equipe.
4. Criar permissões reais por papel.
5. Registrar consentimento WhatsApp por paciente.
6. Implementar exportação e remoção de dados na interface.
7. Criar webhooks reais de WhatsApp, agenda e pagamento.
8. Revisar política LGPD com apoio jurídico.
9. Adicionar testes automatizados de API e navegador.
10. Configurar observabilidade, logs e backup.

## Integrações reais

### WhatsApp Business Cloud API

Variáveis:

- `WHATSAPP_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_BUSINESS_ACCOUNT_ID`
- `WHATSAPP_VERIFY_TOKEN`

Requisitos:

- templates aprovados;
- opt-in por paciente;
- webhook de status;
- webhook de resposta;
- pausa automática quando houver risco clínico;
- handoff humano.

### Agenda

Variáveis:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_CALENDAR_ID`

Requisitos:

- criação de evento;
- confirmação;
- reagendamento;
- cancelamento;
- comparecimento/falta.

### Pagamento

Variáveis:

- `PAYMENT_PROVIDER`
- `PAYMENT_SECRET_KEY`
- `PAYMENT_WEBHOOK_SECRET`

Requisitos:

- link de pagamento por pacote;
- webhook de pagamento aprovado/recusado;
- atualização automática de renovação e receita.
