// Signal de vie quotidien (tâche planifiée Vercel) : garde la base active et déclenche la sauvegarde du jour.
const SB_URL = "https://kqvicmdjnahbccsxzwex.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdmljbWRqbmFoYmNjc3h6d2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3Mzk5MzQsImV4cCI6MjEwOTMxNTkzNH0.SY-auK5eqg5ecJDgXP50LvPMobip46V8pVPCXY1EtrE"; // clé publique (anon)
export async function GET() {
  try {
    const r = await fetch(SB_URL + "/rest/v1/rpc/digivas_ping", { method: "POST", headers: { apikey: SB_KEY, Authorization: "Bearer " + SB_KEY, "Content-Type": "application/json" }, body: "{}" });
    return new Response(JSON.stringify({ base: r.status, le: new Date().toISOString() }), { status: r.ok ? 200 : 502, headers: { "content-type": "application/json", "cache-control": "no-store" } });
  } catch (e) {
    return new Response(JSON.stringify({ base: "injoignable" }), { status: 502, headers: { "content-type": "application/json" } });
  }
}
