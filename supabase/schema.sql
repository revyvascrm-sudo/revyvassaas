create extension if not exists pgcrypto;

create table if not exists public.clinics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  whatsapp text,
  city text,
  segment text,
  created_at timestamp not null default now()
);

create table if not exists public.clinic_members (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'manager', 'reception', 'commercial', 'clinical')),
  created_at timestamp not null default now(),
  unique (clinic_id, user_id)
);

create table if not exists public.patients (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  name text not null,
  phone text,
  email text,
  procedure text,
  status text,
  risk text,
  next_action text,
  whatsapp_stage text,
  notes text,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.patient_timeline (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid not null references public.patients(id) on delete cascade,
  type text,
  content text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamp not null default now()
);

create table if not exists public.care_packages (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid references public.patients(id) on delete cascade,
  name text,
  value numeric,
  total_sessions int,
  used_sessions int,
  expires_at date,
  status text,
  renewal_status text,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid references public.patients(id) on delete cascade,
  title text,
  procedure text,
  date date,
  time text,
  status text,
  owner text,
  notes text,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.protocols (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  name text,
  procedure_type text,
  objective text,
  stages jsonb,
  is_active boolean default true,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.message_templates (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  name text,
  category text,
  stage text,
  body text,
  is_active boolean default true,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.message_logs (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid references public.patients(id) on delete cascade,
  template_id uuid references public.message_templates(id) on delete set null,
  channel text default 'whatsapp',
  content text,
  status text,
  sent_at timestamp,
  delivered_at timestamp,
  read_at timestamp,
  replied_at timestamp,
  created_at timestamp not null default now()
);

create table if not exists public.revenue_events (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid references public.patients(id) on delete cascade,
  package_id uuid references public.care_packages(id) on delete set null,
  type text,
  amount numeric,
  status text,
  notes text,
  created_at timestamp not null default now()
);

create table if not exists public.consent_logs (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  patient_id uuid references public.patients(id) on delete cascade,
  channel text,
  consent_status text,
  source text,
  created_at timestamp not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid references public.clinics(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  action text,
  entity text,
  entity_id uuid,
  metadata jsonb,
  created_at timestamp not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists patients_set_updated_at on public.patients;
create trigger patients_set_updated_at before update on public.patients for each row execute function public.set_updated_at();

drop trigger if exists care_packages_set_updated_at on public.care_packages;
create trigger care_packages_set_updated_at before update on public.care_packages for each row execute function public.set_updated_at();

drop trigger if exists appointments_set_updated_at on public.appointments;
create trigger appointments_set_updated_at before update on public.appointments for each row execute function public.set_updated_at();

drop trigger if exists protocols_set_updated_at on public.protocols;
create trigger protocols_set_updated_at before update on public.protocols for each row execute function public.set_updated_at();

drop trigger if exists message_templates_set_updated_at on public.message_templates;
create trigger message_templates_set_updated_at before update on public.message_templates for each row execute function public.set_updated_at();

create index if not exists clinic_members_user_id_idx on public.clinic_members(user_id);
create index if not exists clinic_members_clinic_id_idx on public.clinic_members(clinic_id);
create index if not exists patients_clinic_id_idx on public.patients(clinic_id);
create index if not exists patient_timeline_clinic_patient_idx on public.patient_timeline(clinic_id, patient_id);
create index if not exists care_packages_clinic_id_idx on public.care_packages(clinic_id);
create index if not exists appointments_clinic_id_idx on public.appointments(clinic_id);
create index if not exists protocols_clinic_id_idx on public.protocols(clinic_id);
create index if not exists message_templates_clinic_id_idx on public.message_templates(clinic_id);
create index if not exists message_logs_clinic_id_idx on public.message_logs(clinic_id);
create index if not exists revenue_events_clinic_id_idx on public.revenue_events(clinic_id);
create index if not exists consent_logs_clinic_id_idx on public.consent_logs(clinic_id);
create index if not exists audit_logs_clinic_id_idx on public.audit_logs(clinic_id);

alter table public.clinics enable row level security;
alter table public.clinic_members enable row level security;
alter table public.patients enable row level security;
alter table public.patient_timeline enable row level security;
alter table public.care_packages enable row level security;
alter table public.appointments enable row level security;
alter table public.protocols enable row level security;
alter table public.message_templates enable row level security;
alter table public.message_logs enable row level security;
alter table public.revenue_events enable row level security;
alter table public.consent_logs enable row level security;
alter table public.audit_logs enable row level security;

create or replace function public.is_clinic_member(target_clinic_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.clinic_members
    where clinic_id = target_clinic_id
      and user_id = auth.uid()
  );
$$;

create or replace function public.has_clinic_role(target_clinic_id uuid, allowed_roles text[])
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.clinic_members
    where clinic_id = target_clinic_id
      and user_id = auth.uid()
      and role = any(allowed_roles)
  );
$$;

drop policy if exists clinics_member_select on public.clinics;
create policy clinics_member_select on public.clinics for select using (public.is_clinic_member(id));

drop policy if exists clinics_owner_manager_update on public.clinics;
create policy clinics_owner_manager_update on public.clinics for update using (public.has_clinic_role(id, array['owner','manager']));

drop policy if exists clinic_members_member_select on public.clinic_members;
create policy clinic_members_member_select on public.clinic_members for select using (public.is_clinic_member(clinic_id));

drop policy if exists clinic_members_owner_manager_write on public.clinic_members;
create policy clinic_members_owner_manager_write on public.clinic_members
  for all using (public.has_clinic_role(clinic_id, array['owner','manager']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager']));

drop policy if exists patients_member_select on public.patients;
create policy patients_member_select on public.patients for select using (public.is_clinic_member(clinic_id));

drop policy if exists patients_reception_clinical_write on public.patients;
create policy patients_reception_clinical_write on public.patients
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']));

drop policy if exists patient_timeline_member_select on public.patient_timeline;
create policy patient_timeline_member_select on public.patient_timeline for select using (public.is_clinic_member(clinic_id));

drop policy if exists patient_timeline_clinical_write on public.patient_timeline;
create policy patient_timeline_clinical_write on public.patient_timeline
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']));

drop policy if exists care_packages_member_select on public.care_packages;
create policy care_packages_member_select on public.care_packages for select using (public.is_clinic_member(clinic_id));

drop policy if exists care_packages_commercial_write on public.care_packages;
create policy care_packages_commercial_write on public.care_packages
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','commercial']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','commercial']));

drop policy if exists appointments_member_select on public.appointments;
create policy appointments_member_select on public.appointments for select using (public.is_clinic_member(clinic_id));

drop policy if exists appointments_reception_write on public.appointments;
create policy appointments_reception_write on public.appointments
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','reception']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','reception']));

drop policy if exists protocols_member_select on public.protocols;
create policy protocols_member_select on public.protocols for select using (public.is_clinic_member(clinic_id));

drop policy if exists protocols_owner_manager_clinical_write on public.protocols;
create policy protocols_owner_manager_clinical_write on public.protocols
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','clinical']));

drop policy if exists message_templates_member_select on public.message_templates;
create policy message_templates_member_select on public.message_templates for select using (public.is_clinic_member(clinic_id));

drop policy if exists message_templates_owner_manager_write on public.message_templates;
create policy message_templates_owner_manager_write on public.message_templates
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','commercial','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','commercial','clinical']));

drop policy if exists message_logs_member_select on public.message_logs;
create policy message_logs_member_select on public.message_logs for select using (public.is_clinic_member(clinic_id));

drop policy if exists message_logs_team_write on public.message_logs;
create policy message_logs_team_write on public.message_logs
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','reception','commercial','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','reception','commercial','clinical']));

drop policy if exists revenue_events_member_select on public.revenue_events;
create policy revenue_events_member_select on public.revenue_events for select using (public.is_clinic_member(clinic_id));

drop policy if exists revenue_events_commercial_write on public.revenue_events;
create policy revenue_events_commercial_write on public.revenue_events
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','commercial']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','commercial']));

drop policy if exists consent_logs_member_select on public.consent_logs;
create policy consent_logs_member_select on public.consent_logs for select using (public.is_clinic_member(clinic_id));

drop policy if exists consent_logs_team_write on public.consent_logs;
create policy consent_logs_team_write on public.consent_logs
  for all using (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager','reception','clinical']));

drop policy if exists audit_logs_member_select on public.audit_logs;
create policy audit_logs_member_select on public.audit_logs for select using (public.is_clinic_member(clinic_id));

drop policy if exists audit_logs_team_insert on public.audit_logs;
create policy audit_logs_team_insert on public.audit_logs for insert with check (public.is_clinic_member(clinic_id));

insert into public.clinics (id, name, whatsapp, city, segment)
values ('11111111-1111-4111-8111-111111111111', 'Clínica Lumina', '+55 65 99800-2020', 'Cuiabá/MT', 'Estética premium')
on conflict (id) do nothing;

insert into public.patients (id, clinic_id, name, phone, email, procedure, status, risk, next_action, whatsapp_stage, notes)
values
  ('22222222-2222-4222-8222-222222222201', '11111111-1111-4111-8111-111111111111', 'Marina Torres', '+55 65 99821-4420', 'marina@example.com', 'Laser CO2 fracionado', 'Janela crítica', 'Alto', 'Pedir foto e checar sinais de alerta', 'respondido', 'Procedimento recente com sensibilidade relatada.'),
  ('22222222-2222-4222-8222-222222222202', '11111111-1111-4111-8111-111111111111', 'Renata Alves', '+55 65 99211-8801', 'renata@example.com', 'Drenagem pós-operatória', 'Receita quente', 'Médio', 'Oferecer renovação como continuidade', 'entregue', 'Usou 8 de 10 sessões e tem alto comparecimento.'),
  ('22222222-2222-4222-8222-222222222203', '11111111-1111-4111-8111-111111111111', 'Carla Mendes', '+55 65 99777-1201', 'carla@example.com', 'Toxina botulínica', 'Agenda sugerida', 'Baixo', 'Agendar retorno D+15', 'agendado', 'Janela ideal para retorno e fotos comparativas.'),
  ('22222222-2222-4222-8222-222222222204', '11111111-1111-4111-8111-111111111111', 'Juliana Prado', '+55 65 99645-7788', 'juliana@example.com', 'Limpeza + peeling', 'Sem resposta', 'Alto', 'Contato humano antes da oferta', 'sem_resposta', 'Não respondeu às duas últimas mensagens.')
on conflict (id) do nothing;

insert into public.care_packages (clinic_id, patient_id, name, value, total_sessions, used_sessions, expires_at, status, renewal_status)
values
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222202', 'Drenagem pós-operatória', 2400, 10, 8, current_date + interval '3 days', 'Renovação quente', 'quente'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222201', 'Laser premium', 1890, 4, 3, current_date + interval '15 days', 'Ativo', 'observação'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222204', 'Limpeza + peeling', 1650, 5, 4, current_date + interval '7 days', 'Risco churn', 'risco')
on conflict do nothing;

insert into public.appointments (clinic_id, patient_id, title, procedure, date, time, status, owner, notes)
values
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222201', 'Retorno laser D+3', 'Laser CO2 fracionado', current_date + interval '1 day', '10:30', 'Aguardando resposta', 'Enfermagem', 'Pedir foto antes do retorno.'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222202', 'Renovação drenagem', 'Drenagem pós-operatória', current_date + interval '2 days', '16:00', 'Sugerido', 'Comercial', 'Apresentar continuidade.'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222203', 'Retorno toxina D+15', 'Toxina botulínica', current_date + interval '3 days', '14:00', 'Confirmado', 'Concierge', 'Fotos comparativas.'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222204', 'Contato humano', 'Limpeza + peeling', current_date + interval '1 day', '11:20', 'Pendente', 'Concierge', 'Entender resultado antes de oferta.')
on conflict do nothing;

insert into public.protocols (clinic_id, name, procedure_type, objective, stages, is_active)
values
  ('11111111-1111-4111-8111-111111111111', 'Laser CO2 fracionado', 'Pós-procedimento', 'Acompanhar recuperação e bloquear oferta até segurança.', '[{"time":"D+1","action":"Orientações"},{"time":"D+2","action":"Pedir foto"},{"time":"D+7","action":"Checar evolução"}]'::jsonb, true),
  ('11111111-1111-4111-8111-111111111111', 'Toxina botulínica', 'Retorno', 'Confirmar avaliação D+15.', '[{"time":"D+12","action":"Avisar janela"},{"time":"D+15","action":"Agendar retorno"}]'::jsonb, true),
  ('11111111-1111-4111-8111-111111111111', 'Drenagem pós-operatória', 'Renovação', 'Renovar como continuidade terapêutica.', '[{"time":"8/10","action":"Valorizar evolução"},{"time":"9/10","action":"Enviar condição"}]'::jsonb, true),
  ('11111111-1111-4111-8111-111111111111', 'Limpeza de pele', 'Recorrência', 'Reativar paciente sem resposta.', '[{"time":"30 dias","action":"Checar pele"},{"time":"45 dias","action":"Convidar retorno"}]'::jsonb, true),
  ('11111111-1111-4111-8111-111111111111', 'Bioestimulador', 'Pós-procedimento', 'Preparar retorno fotográfico D+30.', '[{"time":"D+7","action":"Feedback"},{"time":"D+30","action":"Fotos comparativas"}]'::jsonb, true)
on conflict do nothing;

insert into public.message_templates (clinic_id, name, category, stage, body, is_active)
values
  ('11111111-1111-4111-8111-111111111111', 'Pós-procedimento D+1', 'Pós-procedimento', 'D+1', 'Oi, {{nome}}! Passando para acompanhar como você está nas primeiras 24h após {{procedimento}}.', true),
  ('11111111-1111-4111-8111-111111111111', 'Pós-procedimento D+2 com foto', 'Pós-procedimento', 'D+2', 'Oi, {{nome}}! Pode me enviar uma foto em luz natural para acompanharmos sua evolução?', true),
  ('11111111-1111-4111-8111-111111111111', 'Confirmação de retorno', 'Retorno', 'D+15', 'Oi, {{nome}}! Seu retorno de {{procedimento}} já está na janela ideal.', true),
  ('11111111-1111-4111-8111-111111111111', 'Renovação de pacote', 'Pacotes', 'Pacote vencendo', 'Oi, {{nome}}! Seu pacote está chegando ao fim. Quer ver opções para manter a continuidade?', true),
  ('11111111-1111-4111-8111-111111111111', 'Paciente sem resposta', 'Recuperação', 'Sem resposta', 'Oi, {{nome}}! Notei que não conseguimos nos falar. Posso ajudar em algo?', true),
  ('11111111-1111-4111-8111-111111111111', 'Transferência humana', 'Segurança clínica', 'Risco', '{{nome}}, vou pedir para nossa equipe assumir seu acompanhamento agora.', true)
on conflict do nothing;

insert into public.revenue_events (clinic_id, patient_id, type, amount, status, notes)
values
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222202', 'renewal_opportunity', 2400, 'open', 'Pacote em janela quente.'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222201', 'return_opportunity', 1890, 'open', 'Retorno com cuidado ativo.'),
  ('11111111-1111-4111-8111-111111111111', '22222222-2222-4222-8222-222222222204', 'churn_risk', 1650, 'risk', 'Contato humano recomendado.')
on conflict do nothing;

-- Para vincular o usuário demo, primeiro crie no Supabase Auth:
-- Email: gestora@lumina.local
-- Depois rode este bloco. Ele não cria usuário Auth automaticamente.
insert into public.clinic_members (clinic_id, user_id, role)
select '11111111-1111-4111-8111-111111111111', auth.users.id, 'owner'
from auth.users
where auth.users.email = 'gestora@lumina.local'
on conflict (clinic_id, user_id) do nothing;


-- Tabelas complementares para produção SaaS
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  provider text default 'stripe',
  provider_customer_id text,
  provider_subscription_id text,
  plan text,
  status text,
  current_period_end timestamp,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.whatsapp_connections (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  provider text default 'whatsapp_cloud_api',
  phone_number_id text,
  business_account_id text,
  status text default 'pending',
  default_template text,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now()
);

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid references public.clinics(id) on delete cascade,
  provider text default 'stripe',
  event_type text,
  provider_event_id text,
  payload jsonb,
  created_at timestamp not null default now()
);

create table if not exists public.team_invites (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references public.clinics(id) on delete cascade,
  email text not null,
  role text not null check (role in ('owner', 'manager', 'reception', 'commercial', 'clinical')),
  token text not null unique,
  status text default 'pending',
  expires_at timestamp,
  created_at timestamp not null default now()
);

alter table public.subscriptions enable row level security;
alter table public.whatsapp_connections enable row level security;
alter table public.payment_events enable row level security;
alter table public.team_invites enable row level security;

drop policy if exists subscriptions_member_select on public.subscriptions;
create policy subscriptions_member_select on public.subscriptions for select using (public.is_clinic_member(clinic_id));

drop policy if exists subscriptions_owner_manager_write on public.subscriptions;
create policy subscriptions_owner_manager_write on public.subscriptions
  for all using (public.has_clinic_role(clinic_id, array['owner','manager']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager']));

drop policy if exists whatsapp_connections_member_select on public.whatsapp_connections;
create policy whatsapp_connections_member_select on public.whatsapp_connections for select using (public.is_clinic_member(clinic_id));

drop policy if exists whatsapp_connections_owner_manager_write on public.whatsapp_connections;
create policy whatsapp_connections_owner_manager_write on public.whatsapp_connections
  for all using (public.has_clinic_role(clinic_id, array['owner','manager']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager']));

drop policy if exists payment_events_owner_manager_select on public.payment_events;
create policy payment_events_owner_manager_select on public.payment_events
  for select using (public.has_clinic_role(clinic_id, array['owner','manager']));

drop policy if exists team_invites_owner_manager_write on public.team_invites;
create policy team_invites_owner_manager_write on public.team_invites
  for all using (public.has_clinic_role(clinic_id, array['owner','manager']))
  with check (public.has_clinic_role(clinic_id, array['owner','manager']));
