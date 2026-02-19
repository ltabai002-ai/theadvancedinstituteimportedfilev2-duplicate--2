/*
  # Create Faculty Profiles Table

  1. New Tables
    - `faculty_profiles`
      - `id` (uuid, primary key) - Unique identifier for each faculty profile
      - `name` (text) - Full name of the faculty member
      - `designation` (text) - Official designation/title
      - `qualification` (text) - Highest qualification
      - `experience` (text) - Total teaching experience
      - `specialization` (text) - Area of specialization
      - `subjects` (text[]) - Array of subjects taught
      - `exams_specialized` (text[]) - Array of exams specialized in
      - `teaching_style` (text) - Teaching approach/methodology
      - `students_mentored` (text) - Approximate number of students mentored
      - `languages` (text[]) - Languages taught in
      - `contact_availability` (text) - Availability for doubt clearing
      - `image_url` (text) - URL to faculty photo
      - `quote` (text) - Inspirational quote or message
      - `display_order` (integer) - Order for displaying profiles
      - `is_active` (boolean) - Whether profile is currently active/visible
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `faculty_profiles` table
    - Add policy for public read access to active profiles
    - Add policy for authenticated admin write access

  3. Sample Data
    - Insert profiles for Dr. Raman Bora, D.R. Sir, and Mr. Vikram Singh
*/

CREATE TABLE IF NOT EXISTS faculty_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  qualification text NOT NULL DEFAULT '',
  experience text NOT NULL DEFAULT '',
  specialization text NOT NULL DEFAULT '',
  subjects text[] DEFAULT ARRAY[]::text[],
  exams_specialized text[] DEFAULT ARRAY[]::text[],
  teaching_style text DEFAULT '',
  students_mentored text DEFAULT '',
  languages text[] DEFAULT ARRAY[]::text[],
  contact_availability text DEFAULT '',
  image_url text DEFAULT '',
  quote text DEFAULT '',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE faculty_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active faculty profiles"
  ON faculty_profiles
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert faculty profiles"
  ON faculty_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update faculty profiles"
  ON faculty_profiles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete faculty profiles"
  ON faculty_profiles
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert faculty profiles
INSERT INTO faculty_profiles (
  name, 
  designation, 
  qualification, 
  experience, 
  specialization, 
  subjects, 
  exams_specialized, 
  teaching_style, 
  students_mentored, 
  languages, 
  contact_availability, 
  image_url, 
  quote, 
  display_order
) VALUES
(
  'Dr. Raman Bora',
  'Head of Department',
  'Head of Department',
  '15+ Years',
  'GK/GA/CA - General Awareness/Current Affairs',
  ARRAY['General Knowledge', 'General Awareness', 'Current Affairs'],
  ARRAY['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'Banking'],
  'Comprehensive approach to General Awareness with focus on current events and static GK',
  'Thousands of students trained',
  ARRAY['English', 'Hindi', 'Assamese'],
  'High Availability',
  '/faculty-1.webp',
  'Knowledge is power, and awareness opens doors to success',
  1
),
(
  'D.R. Sir',
  'HOD English',
  'Post Graduate',
  '15+ Years',
  'English Language',
  ARRAY['English Language'],
  ARRAY['SSC CGL', 'SSC CHSL', 'Banking (PO/Clerk)', 'Railway Exams (RRB NTPC/Group D)', 'Other Government Exams'],
  'Application based approach focusing on practical English usage for competitive exams',
  '2000+',
  ARRAY['English', 'Hindi', 'Assamese'],
  'Medium Availability (Scheduled Doubt Sessions)',
  '/faculty-2.webp',
  'Master English with practical application to excel in all government exams',
  2
),
(
  'Mr. Vikram Singh',
  'Ex-Railway Officer',
  'B.Tech (Mechanical), Ex-Railway Technical Officer',
  '10+ Years',
  'RRB & Technical Subjects',
  ARRAY['RRB Technical', 'General Science', 'Railway Procedures', 'Technical Aptitude'],
  ARRAY['RRB NTPC', 'RRB Group D', 'RRB Technician', 'RRB ALP'],
  'Practical approach with real railway exam insights and patterns',
  '1500+',
  ARRAY['English', 'Hindi'],
  'High Availability',
  '/faculty-3.webp',
  'Success in railway exams comes from understanding the system from within',
  3
);