import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ablkdixvjqytwgxmyxxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFibGtkaXh2anF5dHdneG15eHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNzQ2MTYsImV4cCI6MjAyODk1MDYxNn0.WettjNl_Y1Qv2YmrtqL7yfF6dnl19kG8xKL9ApSN-4A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
