-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Create a "projects" table
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  tags text[] default '{}', -- e.g., ['Design', 'Dev', 'React', 'Figma']
  image_url text,           -- URL to the project's cover image
  live_url text,            -- URL to the live live or external resource
  github_url text,          -- URL to source code
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on row level security for projects
alter table public.projects enable row level security;

-- Policies for projects
create policy "projects are viewable by everyone"
  on public.projects for select using (true);

-- 2. Create a "blog_posts" table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text unique not null,
  content text,             -- MDX or HTML string content
  cover_image text,         -- URL to hero image
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on row level security for blog_posts
alter table public.blog_posts enable row level security;

-- Policies for blog posts (Only viewable if published is true)
create policy "published blog_posts are viewable by everyone"
  on public.blog_posts for select using (published = true);

-- Enable realtime for both tables (optional, but good if updating dashboards dynamically)
alter publication supabase_realtime add table projects;
alter publication supabase_realtime add table blog_posts;

-- 3. Create a "leads" table (Mission Submissions)
create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  project_type text not null,
  description text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on row level security for leads
alter table public.leads enable row level security;

-- Policies for leads (Anyone can insert via the landing page)
create policy "leads can be inserted by anyone"
  on public.leads for insert with check (true);
create policy "leads are only viewable by authenticated users"
  on public.leads for select using (auth.role() = 'authenticated');
