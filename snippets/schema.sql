-- Enable Row Level Security (RLS) on all tables
alter table entries enable row level security;
alter table trainer_clients enable row level security;

-- Policy: Clients can manage their own entries
create policy "Users can insert their own entries"
  on entries
  for insert
  with check (auth.uid() = user_id);

create policy "Users can view their own entries"
  on entries
  for select
  using (auth.uid() = user_id);

create policy "Users can update their own entries"
  on entries
  for update
  using (auth.uid() = user_id);

create policy "Users can delete their own entries"
  on entries
  for delete
  using (auth.uid() = user_id);

-- Policy: Trainers can view their clients' entries
create policy "Trainers can view client entries"
  on entries
  for select
  using (
    exists (
      select 1 from trainer_clients
      where trainer_clients.trainer_id = auth.uid()
      and trainer_clients.client_id = entries.user_id
    )
  );

-- Policy: Manage trainer-client relationships
create policy "Trainers can link clients"
  on trainer_clients
  for insert
  with check (trainer_id = auth.uid());

create policy "Trainers can view their own clients"
  on trainer_clients
  for select
  using (trainer_id = auth.uid());
