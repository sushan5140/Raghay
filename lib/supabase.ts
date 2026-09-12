import { createClient } from "@supabase/supabase-js";

// Not wired up yet. Create a Supabase project, then set these two env vars
// in .env.local before using this client anywhere:
//   NEXT_PUBLIC_SUPABASE_URL=
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
