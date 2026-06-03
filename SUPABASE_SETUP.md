# Revyvas CRM — Configuração Supabase

## 1. Variáveis obrigatórias no Render

Configure no Render:

```env
NODE_ENV=production
SESSION_SECRET=uma-chave-grande-e-segura
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
```

## 2. Rodar o schema

No Supabase:

1. Abra o projeto.
2. Vá em **SQL Editor**.
3. Cole o conteúdo de `supabase/schema.sql`.
4. Execute.

## 3. Criar o usuário demo no Supabase Auth

O SQL não cria usuários dentro do Auth. Para usar o acesso inicial:

1. Vá em **Authentication > Users**.
2. Crie um usuário:
   - Email: `gestora@lumina.local`
   - Senha: defina uma senha temporária segura.
3. Rode novamente apenas o bloco final do `schema.sql` que vincula esse usuário à Clínica Lumina em `clinic_members`.

## 4. Login

Depois disso, o login do Revyvas usa Supabase Auth via:

```http
POST /api/auth/login
```

Em produção, o login local antigo não é usado. Se Supabase não estiver configurado, o backend retorna erro.

## 5. Dados por clínica

As rotas `/api/patients`, `/api/packages`, `/api/appointments`, `/api/protocols`, `/api/message-templates` e `/api/revenue-events` filtram tudo pelo `clinic_id` da sessão.

## 6. Segurança

O schema ativa RLS nas tabelas principais. O backend também filtra por `clinic_id` antes de retornar ou alterar dados.
