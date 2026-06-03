# Deploy do Revyvas CRM

## Estado atual

O projeto já roda como serviço Node sem dependências externas:

- `npm start` inicia `server.js`.
- `/api/health` responde para health check.
- `index.html` é a landing.
- `app.html` é o painel logado.
- `data/reviva-state.json` mantém o estado demo local por clínica.

## Git

1. Inicializar repositório:
   `git init`
2. Adicionar arquivos:
   `git add .`
3. Criar primeiro commit:
   `git commit -m "Prepare Revyvas CRM for production deploy"`
4. Conectar ao repositório remoto e subir:
   `git remote add origin <URL_DO_REPOSITORIO>`
   `git push -u origin main`

## Render

O arquivo `render.yaml` já define:

- runtime Node;
- build com `npm install`;
- start com `npm start`;
- health check em `/api/health`;
- variáveis sensíveis com `sync: false`.

No Render, conecte o repositório Git e crie o serviço via Blueprint. Render usa `npm start` para serviços Node quando o projeto tem `package.json`, e o health check deve apontar para um endpoint público.

## Supabase

Use Supabase como Postgres de produção. Para backend persistente no Render:

- prefira a connection string direta se IPv6 estiver disponível;
- use o Supavisor em modo session pooler se precisar de IPv4;
- use transaction pooler para workloads serverless/temporários.

Configure `DATABASE_URL` no Render com a connection string do projeto Supabase.

## Próximo passo técnico

Hoje o app ainda persiste em JSON local. Para produção real:

1. Criar tabelas usando `supabase/schema.sql`.
2. Trocar `readState/writeState` em `server.js` por queries Postgres.
3. Criar hash de senha e convite de equipe.
4. Migrar integrações sandbox para provedores reais.
