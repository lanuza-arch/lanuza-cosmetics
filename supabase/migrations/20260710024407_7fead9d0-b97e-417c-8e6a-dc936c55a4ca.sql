
CREATE TABLE public.corporate_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.corporate_leads TO anon, authenticated;
GRANT ALL ON public.corporate_leads TO service_role;

ALTER TABLE public.corporate_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a corporate lead"
  ON public.corporate_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
