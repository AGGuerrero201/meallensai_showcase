export async function recognizeMeal(imageUri: string) {
  const formData = new FormData();
  formData.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: "meal.jpg",
  } as any);

  const res = await fetch(`${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/recognize_meal`, {
    method: "POST",
    headers: {
      apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Meal recognition failed");
  return await res.json();
}
