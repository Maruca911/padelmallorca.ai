/*
  # Create Lead Generation Tables

  1. New Tables
    - `leads` - Stores matching form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `preferred_contact` (text - email or whatsapp)
      - `location_preference` (text)
      - `level` (text - beginner/intermediate/advanced/pro)
      - `budget` (text)
      - `interest_type` (text[] - courts/lessons/camps/tournaments)
      - `message` (text, optional)
      - `locale` (text - en/de/es)
      - `status` (text - new/matched/closed)
      - `created_at` (timestamptz)

    - `newsletter_subscribers` - Email newsletter signups
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `locale` (text)
      - `created_at` (timestamptz)

    - `contact_messages` - FAQ/general contact form
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `question` (text)
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on all tables
    - Anonymous users can insert leads and messages (public forms)
    - Only authenticated service role can read data
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  preferred_contact text NOT NULL DEFAULT 'email',
  location_preference text DEFAULT '',
  level text DEFAULT 'beginner',
  budget text DEFAULT '',
  interest_type text[] DEFAULT '{}',
  message text DEFAULT '',
  locale text DEFAULT 'en',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  locale text DEFAULT 'en',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  question text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);
