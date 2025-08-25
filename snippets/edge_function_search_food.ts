// Supabase Edge Function sample without secrets
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  try {
    const { query, grams } = await req.json();
    // Example static food data (would normally query USDA API)
    const per100 = { kcal: 120, protein: 5, carbs: 18, fat: 3 };
    const factor = grams / 100;
    const entry = {
      name: query,
      grams,
      kcal: Math.round(per100.kcal * factor),
      protein: +(per100.protein * factor).toFixed(1),
      carbs: +(per100.carbs * factor).toFixed(1),
      fat: +(per100.fat * factor).toFixed(1),
    };
    return new Response(JSON.stringify({ ok: true, entry }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 400 });
  }
});
