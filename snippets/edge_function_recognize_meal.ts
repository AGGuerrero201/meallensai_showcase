import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    const logmealRes = await fetch("https://api.logmeal.com/v2/recognition/complete", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("LOGMEAL_TOKEN")}`,
      },
      body: formData,
    });

    const result = await logmealRes.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
});
