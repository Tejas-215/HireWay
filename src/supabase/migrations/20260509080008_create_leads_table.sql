/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `date_of_birth` (date)
      - `address` (text)
      - `current_company` (text)
      - `job_title` (text)
      - `experience_years` (text)
      - `current_ctc` (text)
      - `expected_ctc` (text)
      - `education` (text)
      - `pan_number` (text)
      - `resume_url` (text)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `leads` table
    - Allow anon inserts (registration form is public)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  date_of_birth date,
  address text NOT NULL DEFAULT '',
  current_company text NOT NULL DEFAULT '',
  job_title text NOT NULL DEFAULT '',
  experience_years text NOT NULL DEFAULT '',
  current_ctc text NOT NULL DEFAULT '',
  expected_ctc text NOT NULL DEFAULT '',
  education text NOT NULL DEFAULT '',
  pan_number text NOT NULL DEFAULT '',
  resume_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);
