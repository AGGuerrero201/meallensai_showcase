import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!);

export async function addEntry(entry: {
  name: string; grams: number; kcal: number; protein: number; carbs: number; fat: number;
}) {
  const { error } = await supabase.from("entries").insert(entry);
  if (error) throw error;
}
