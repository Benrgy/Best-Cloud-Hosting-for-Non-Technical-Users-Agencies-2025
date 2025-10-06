-- Drop the existing SELECT policy that might allow anonymous access
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create a new explicit SELECT policy that:
-- 1. Blocks anonymous users (auth.role() = 'anon')
-- 2. Only allows authenticated users to view their own profile
CREATE POLICY "Authenticated users can view only their own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Explicitly block anonymous users from all operations on profiles
CREATE POLICY "Block all anonymous access to profiles"
  ON public.profiles
  FOR ALL
  TO anon
  USING (false);