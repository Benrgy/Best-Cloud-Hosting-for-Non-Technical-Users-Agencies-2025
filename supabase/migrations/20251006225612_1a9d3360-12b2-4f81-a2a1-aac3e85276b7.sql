-- Block all anonymous access to user_roles table to prevent information disclosure
CREATE POLICY "Block all anonymous access to user_roles"
  ON public.user_roles
  FOR ALL
  TO anon
  USING (false);