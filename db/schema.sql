-- Content the Green Minds team manages from /admin

-- Team and board members (photo, name, role, bio, LinkedIn)
CREATE TABLE IF NOT EXISTS people (
  id          serial PRIMARY KEY,
  section     text NOT NULL CHECK (section IN ('team', 'board')),
  name        text NOT NULL,
  role        text,
  bio         text NOT NULL DEFAULT '',
  linkedin    text,
  image       text NOT NULL,          -- URL or /public path shown on the site
  image_key   text,                   -- object key in the site-images bucket, when uploaded
  sort        integer NOT NULL DEFAULT 0,
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- Photos in each programme's Our Work carousel
CREATE TABLE IF NOT EXISTS gallery_photos (
  id          serial PRIMARY KEY,
  programme   text NOT NULL CHECK (programme IN ('green-ed', 'advocacy', 'resources', 'climate-witness')),
  src         text NOT NULL,
  image_key   text,
  width       integer NOT NULL,
  height      integer NOT NULL,
  caption     text NOT NULL DEFAULT '',
  sort        integer NOT NULL DEFAULT 0,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS gallery_photos_programme_sort ON gallery_photos (programme, sort);

-- Email addresses allowed into /admin (an account alone grants nothing)
CREATE TABLE IF NOT EXISTS admins (
  email       text PRIMARY KEY,
  added_by    text,
  added_at    timestamptz NOT NULL DEFAULT now()
);
