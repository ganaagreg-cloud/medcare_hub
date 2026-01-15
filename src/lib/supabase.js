import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY;

// Check if credentials are valid (not dummy/placeholder values)
const isValidConfig = 
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl?.includes('dummy') && 
  !supabaseAnonKey?.includes('dummy') &&
  supabaseUrl?.startsWith('https://') &&
  supabaseUrl?.includes('.supabase.co');

export const supabase = isValidConfig 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = isValidConfig;