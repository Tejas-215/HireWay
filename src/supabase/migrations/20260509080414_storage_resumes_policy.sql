/*
  # Storage policy for resumes bucket

  Allow anonymous uploads to resumes bucket so users can upload their CV during registration.
*/

CREATE POLICY "Allow anon resume uploads"
  ON storage.objects FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'resumes');
