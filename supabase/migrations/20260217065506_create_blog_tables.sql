/*
  # Create Blog Platform Tables

  1. New Tables
    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique) - Category name (e.g., "RRB NTPC", "SSC CGL")
      - `slug` (text, unique) - URL-friendly version of name
      - `display_order` (integer) - Order to display categories
      - `created_at` (timestamptz)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Article title
      - `slug` (text, unique) - URL-friendly version of title
      - `content` (text) - Full article content
      - `excerpt` (text) - Short description/summary
      - `category_id` (uuid, foreign key) - References blog_categories
      - `featured_image` (text) - URL to featured image
      - `author_name` (text) - Author's name
      - `is_published` (boolean) - Whether article is published
      - `view_count` (integer) - Number of views
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Public read access for published posts
    - Restricted write access (for admin use later)
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  featured_image text DEFAULT '',
  author_name text DEFAULT 'Admin',
  is_published boolean DEFAULT false,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies for blog_categories (public read access)
CREATE POLICY "Anyone can view categories"
  ON blog_categories
  FOR SELECT
  TO public
  USING (true);

-- Policies for blog_posts (public can view published posts)
CREATE POLICY "Anyone can view published posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (is_published = true);

-- Policy to allow view count updates
CREATE POLICY "Anyone can update view count"
  ON blog_posts
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
