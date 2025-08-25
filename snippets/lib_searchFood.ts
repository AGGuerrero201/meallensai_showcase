export async function searchFood(query: string, grams: number) {
  const res = await fetch(`${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/search_food`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
    },
    body: JSON.stringify({ query, grams }),
  });

  if (!res.ok) throw new Error("Search food request failed");
  const data = await res.json();
  return data.entry;
}
