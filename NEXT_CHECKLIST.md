# Próximo checklist Revyvas CRM

## Fase 2 - produto com banco real

1. Criar projeto Supabase e executar `supabase/schema.sql`.
2. Configurar `DATABASE_URL` no Render.
3. Criar camada de acesso a dados em `server.js`.
4. Migrar pacientes, pacotes, agenda, templates e audit log para Postgres.
5. Criar seed inicial da Clínica Lumina.
6. Substituir usuários demo por usuários com `password_hash`.
7. Criar tela de equipe e permissões.
8. Criar testes de API para login, estado, agenda, pacotes e integrações.

## Fase 3 - integrações reais

1. WhatsApp Cloud API: envio, webhook de status e webhook de resposta.
2. Google Calendar: criação, reagendamento, cancelamento e comparecimento.
3. Pagamentos: link por pacote e webhook de pagamento aprovado.
4. Consentimento WhatsApp por paciente.
5. Inbox com handoff humano.

## Fase 4 - venda e operação

1. Planos e paywall.
2. Onboarding com checklist de clínica.
3. Relatórios por profissional, procedimento e origem de receita.
4. Templates por procedimento com revisão clínica.
5. Exportação/remoção de dados na interface.
6. Monitoramento de erros e eventos críticos.
