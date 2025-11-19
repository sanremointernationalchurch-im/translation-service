-- infra/migrations/001_init.sql
create table rooms (
  id text primary key,
  name text not null,
  settings jsonb,
  created_at timestamptz default now()
);
create table sessions (
  id text primary key,
  room_id text references rooms(id),
  start timestamptz,
  end timestamptz
);
create table transcripts (
  id text primary key,
  room_id text references rooms(id),
  language text,
  storage_path text,
  created timestamptz default now()
);
create table admins (
  id text primary key,
  email text unique not null,
  password_hash text not null,
  role text default 'admin',
  created timestamptz default now()
);
