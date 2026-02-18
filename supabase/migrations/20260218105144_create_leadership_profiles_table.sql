/*
  # Create Leadership Profiles Table

  1. New Tables
    - `leadership_profiles`
      - `id` (uuid, primary key) - Unique identifier for each profile
      - `role` (text) - Role type: 'director', 'dean', or 'advisor'
      - `name` (text) - Full name of the leadership member
      - `designation` (text) - Official title/designation
      - `bio` (text) - Comprehensive biography
      - `qualifications` (text[]) - Array of qualifications and degrees
      - `experience` (text) - Professional experience summary
      - `achievements` (text[]) - Array of key achievements
      - `areas_of_expertise` (text[]) - Array of expertise areas
      - `inspirational_message` (text) - Personal message or vision statement
      - `image_url` (text) - URL to profile photo
      - `linkedin_url` (text, optional) - LinkedIn profile URL
      - `email` (text, optional) - Contact email (with consent)
      - `phone` (text, optional) - Contact phone (with consent)
      - `display_order` (integer) - Order for displaying profiles
      - `is_active` (boolean) - Whether profile is currently active/visible
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `leadership_profiles` table
    - Add policy for public read access to active profiles
    - Add policy for authenticated admin write access (future admin panel)

  3. Sample Data
    - Insert placeholder profiles for Director, Dean, and sample Advisors
    - Data can be updated once actual consent and information is obtained
*/

CREATE TABLE IF NOT EXISTS leadership_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL CHECK (role IN ('director', 'dean', 'advisor')),
  name text NOT NULL,
  designation text NOT NULL,
  bio text NOT NULL DEFAULT '',
  qualifications text[] DEFAULT ARRAY[]::text[],
  experience text DEFAULT '',
  achievements text[] DEFAULT ARRAY[]::text[],
  areas_of_expertise text[] DEFAULT ARRAY[]::text[],
  inspirational_message text DEFAULT '',
  image_url text DEFAULT '',
  linkedin_url text DEFAULT '',
  email text DEFAULT '',
  phone text DEFAULT '',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leadership_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active leadership profiles"
  ON leadership_profiles
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert leadership profiles"
  ON leadership_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update leadership profiles"
  ON leadership_profiles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete leadership profiles"
  ON leadership_profiles
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample leadership profiles
INSERT INTO leadership_profiles (role, name, designation, bio, qualifications, experience, achievements, areas_of_expertise, inspirational_message, display_order) VALUES
(
  'director',
  'Dr. Rajesh Kumar',
  'Founder & Director',
  'With over 25 years of experience in competitive exam preparation and educational leadership, Dr. Rajesh Kumar has been instrumental in shaping the careers of thousands of successful candidates. His vision for holistic education combined with rigorous academic training has made The Advanced Learning Academy a premier institution for government job aspirants.',
  ARRAY['Ph.D. in Education Management', 'M.A. in Public Administration', 'B.Ed. from Delhi University'],
  'Former Deputy Director at a prestigious coaching institute in Delhi. Has mentored over 10,000 students for SSC, Banking, and Railway exams. Expert in curriculum design and educational innovation.',
  ARRAY['Founded The Advanced Learning Academy in 2010', 'Trained over 5,000 successful SSC candidates', 'Developed innovative teaching methodologies', 'Published 15 books on competitive exam preparation', 'Received "Excellence in Education" award in 2019'],
  ARRAY['Educational Leadership', 'Curriculum Development', 'Competitive Exam Strategy', 'Student Mentorship', 'Institutional Management'],
  'Education is not just about passing exams; it''s about building character, discipline, and a vision for the future. At The Advanced Learning Academy, we are committed to transforming lives through quality education and unwavering support.',
  1
),
(
  'dean',
  'Prof. Priya Sharma',
  'Academic Dean',
  'Prof. Priya Sharma brings a wealth of academic excellence and administrative expertise to The Advanced Learning Academy. With a distinguished career in higher education and a passion for student success, she oversees all academic programs and ensures the highest standards of teaching and learning.',
  ARRAY['M.Phil. in Economics', 'M.A. in Economics', 'B.A. (Hons) in Economics'],
  'Over 18 years of teaching experience in prestigious institutions. Former Head of Department at a leading college. Specializes in quantitative aptitude and reasoning for competitive exams.',
  ARRAY['Guided 3,000+ students to success in Banking and SSC exams', 'Developed comprehensive study materials for quantitative aptitude', 'Pioneered online learning initiatives', 'Led academic transformation initiatives', 'Awarded "Best Faculty" recognition multiple times'],
  ARRAY['Academic Administration', 'Quantitative Aptitude', 'Economics', 'Curriculum Planning', 'Faculty Development'],
  'Every student has unique potential waiting to be unlocked. Our role is to provide the right guidance, resources, and environment for that potential to flourish. Together, we can achieve extraordinary results.',
  2
),
(
  'advisor',
  'Mr. Vikram Singh',
  'Senior Academic Advisor',
  'Mr. Vikram Singh is a renowned expert in Railway Recruitment Board (RRB) examinations with over 15 years of experience. His strategic approach and deep understanding of exam patterns have helped countless students secure positions in Indian Railways.',
  ARRAY['M.Sc. in Mathematics', 'B.Sc. in Mathematics'],
  'Former Railway employee with insider knowledge of recruitment processes. Has trained over 4,000 candidates for RRB exams with a remarkable success rate.',
  ARRAY['85% success rate in RRB exam preparation', 'Developed specialized RRB study modules', 'Conducted 200+ workshops and seminars', 'Published popular RRB exam guides'],
  ARRAY['Railway Recruitment', 'Mathematics', 'Logical Reasoning', 'Exam Strategy', 'Mock Test Design'],
  'Success in competitive exams comes from consistent effort, smart preparation, and the right guidance. I am here to help you navigate your journey to a successful career in Indian Railways.',
  3
),
(
  'advisor',
  'Ms. Anjali Verma',
  'Banking Sector Specialist',
  'Ms. Anjali Verma is a banking exam expert with extensive experience in preparing students for IBPS, SBI, and other banking recruitment examinations. Her practical approach and industry insights give students a competitive edge.',
  ARRAY['MBA in Finance', 'B.Com (Hons)'],
  'Former banking professional turned educator. Over 12 years of experience in banking exam preparation. Expert in banking awareness, financial literacy, and current affairs.',
  ARRAY['Trained 2,500+ successful banking candidates', 'Developed comprehensive banking awareness modules', 'Regular contributor to banking exam publications', 'Achieved 80% selection rate in IBPS exams'],
  ARRAY['Banking Exams', 'Financial Awareness', 'English Language', 'Interview Preparation', 'Current Affairs'],
  'The banking sector offers incredible opportunities for growth and stability. With the right preparation and mindset, you can secure your dream job and build a rewarding career.',
  4
);
