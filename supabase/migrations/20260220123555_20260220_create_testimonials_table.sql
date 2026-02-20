/*
  # Create testimonials table
  
  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `student_name` (text) - Full name of the student
      - `exam_name` (text) - Exam they prepared for (RRB NTPC, SSC CGL, SSC CHSL, Banking, etc)
      - `success_story` (text) - Their success story/testimonial text
      - `ranking_or_score` (text) - Rank/score/result achieved
      - `image_url` (text, nullable) - Profile image URL
      - `is_featured` (boolean) - Whether to show in homepage carousel
      - `display_order` (integer) - Order for display
      - `is_active` (boolean) - Soft delete flag
      - `created_at` (timestamptz) - Created timestamp
      - `updated_at` (timestamptz) - Last updated timestamp
  
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public users to read active testimonials
    - Add policy for authenticated users to manage all testimonials
    - Add indexes for efficient querying
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  exam_name text NOT NULL,
  success_story text NOT NULL,
  ranking_or_score text NOT NULL,
  image_url text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public users can view active testimonials"
  ON testimonials FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_testimonials_is_featured ON testimonials(is_featured) WHERE is_active = true;
CREATE INDEX idx_testimonials_display_order ON testimonials(display_order);
CREATE INDEX idx_testimonials_is_active ON testimonials(is_active);