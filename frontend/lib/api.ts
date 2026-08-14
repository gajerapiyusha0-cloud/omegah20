export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export type Domain = {
  id: number;
  slug: string;
  name: string;
  category: string;
  summary: string;
  color: string;
  orbit: number;
  inclination: number;
  tags: string[];
  lesson_count: number;
};

export type Twin = {
  id: number;
  slug: string;
  name: string;
  twin_type: string;
  description: string;
  longitude: number;
  latitude: number;
  altitude: number;
  geojson: Record<string, unknown>;
  state: Record<string, unknown>;
  assumptions: string[];
};

export const api = {
  health: () => request<{ status: string; domains: number }>("/health"),
  domains: () => request<Domain[]>("/domains"),
  domain: (slug: string) => request<Domain>(`/domains/${slug}`),
  related: (slug: string) => request<Domain[]>(`/domains/${slug}/related`),
  summary: (slug: string) => request<{ summary: string; lessons: string[] }>(`/domains/${slug}/summary`),
  categories: () => request<{ category: string; color: string }[]>("/domains/categories"),
  search: (q: string) => request<{ results: Domain[] }>(`/graph/search?q=${encodeURIComponent(q)}`),
  constellation: () => request<{ count: number; stars: Domain[] }>("/graph/constellation"),
  twins: () => request<Twin[]>("/twins"),
  twinTick: (slug: string) => request<Twin>(`/twins/${slug}/tick`, { method: "POST" }),
  twinSeries: (slug: string) => request<{ samples: { timestamp: string; metrics: Record<string, number> }[] }>(`/twins/${slug}/timeseries`),
  features: () =>
    request<{ type: string; features: { geometry: Record<string, unknown>; properties: Record<string, unknown> }[] }>(
      "/gis/features",
    ),
  heatmap: () => request<{ points: { longitude: number; latitude: number; weight: number; name: string }[] }>("/gis/heatmap"),
  measure: (body: { from_lon: number; from_lat: number; to_lon: number; to_lat: number }) =>
    request<{ meters: number; kilometers: number }>("/gis/measure", { method: "POST", body: JSON.stringify(body) }),
  engines: () => request<{ id: string; name: string; haptic: string }[]>("/simulations/engines"),
  simulate: (engine: string, parameters: Record<string, number>) =>
    request<{ id: number; result: Record<string, unknown> }>("/simulations/run", {
      method: "POST",
      body: JSON.stringify({ engine, name: engine, parameters }),
    }),
  satellite: (scene: string) => request<{ ndvi_mean: number; ndwi_mean: number; classification: string; grid: number[][] }>(`/satellite/indices?scene=${scene}`),
  assist: (message: string, locale = "en") =>
    request<{ reply: string; intent: string; related_domains: { slug: string; name: string }[]; learning_path: string[] }>(
      "/ai/assist",
      { method: "POST", body: JSON.stringify({ message, locale }) },
    ),
  haptics: () => request<{ id: string; name: string; category: string; intensity: number; duration_ms: number }[]>("/haptics/patterns"),
  playHaptic: (pattern_id: string) => request("/haptics/play", { method: "POST", body: JSON.stringify({ pattern_id }) }),
  bootstrap: () =>
    request<{
      domains: Domain[];
      twins: Twin[];
      haptics: { id: string; name: string; category: string; intensity: number; duration_ms: number }[];
      engines: { id: string; name: string; haptic: string }[];
    }>("/bootstrap"),
  quiz: (slug: string) =>
    request<{ title: string; questions: { id: string; prompt: string; choices: string[] }[] }>(`/learn/quiz/${slug}`),
  gradeQuiz: (slug: string, answers: number[]) =>
    request<{ score: number; correct: number; total: number }>(`/learn/quiz/${slug}/grade`, {
      method: "POST",
      body: JSON.stringify({ answers }),
    }),
  analytics: () =>
    request<{ domains: number; twins: number; features: number; simulations: number; explorers: number; categories: { name: string; count: number }[] }>(
      "/analytics/overview",
    ),
  plugins: () => request<{ id: string; name: string; category: string; status: string; summary: string }[]>("/plugins"),
  enablePlugin: (id: string) => request(`/plugins/${id}/enable`, { method: "POST" }),
  admin: () => request<{ users: number; domains: number; twins: number; plugins: number; flags: Record<string, boolean> }>("/admin/console"),
  notifications: () => request<{ id: string; kind: string; title: string; body: string; haptic: string }[]>("/notifications"),
  collabRooms: () => request<{ id: string; name: string; occupants: number }[]>("/collab/rooms"),
  timeline: () => request<{ year: number; title: string; domains: string[] }[]>("/timeline"),
  domainGraph: (slug: string) =>
    request<{ nodes: { id: number; title: string; kind: string }[]; edges: { source_id: number; target_id: number; relation: string }[] }>(
      `/graph/domain/${slug}`,
    ),
  buffer: (geometry: Record<string, unknown>, meters: number) =>
    request("/gis/buffer", { method: "POST", body: JSON.stringify({ geometry, meters }) }),
  login: (email: string, password: string) => {
    const body = new URLSearchParams({ username: email, password });
    return fetch(`${API_URL}/auth/login`, { method: "POST", body }).then((res) => {
      if (!res.ok) throw new Error("login failed");
      return res.json() as Promise<{ access_token: string }>;
    });
  },
  landcover: (scene: string) => request<{ counts: Record<string, number>; classification: string }>(`/satellite/landcover?scene=${scene}`),
  disaster: (hazard = "flood") => request<{ advisory: string; recommended_twins: string[]; haptic: string }>(`/satellite/disaster?hazard=${hazard}`),
  stacSearch: () => request<{ live?: boolean; source?: string; features: { id: string; properties: Record<string, unknown> }[] }>("/stac/search"),
  graphSync: () => request<{ backend: string; synced: number; note?: string }>("/graph/sync", { method: "POST" }),
  oidcStart: () => request<{ configured: boolean; authorization_url: string | null; note?: string }>("/auth/oidc/start"),
  jobStatus: (taskId: string) =>
    request<{ task_id: string; state: string; ready: boolean; result?: { ndvi_mean?: number } }>(`/processing/jobs/${taskId}`),
  assets: () => request<{ id: string; kind: string; name: string; format: string }[]>("/assets"),
  journal: () => request<{ id: number; title: string; body: string; domain_slug?: string }[]>("/journal"),
  addNote: (title: string, body: string, domain_slug?: string) =>
    request("/journal", { method: "POST", body: JSON.stringify({ title, body, domain_slug }) }),
  histogram: (scene: string) => request<{ counts: number[]; min: number; max: number }>(`/processing/histogram?scene=${scene}`),
  ndviJob: (scene: string) =>
    request<{ queued: boolean; task_id: string | null; broker: string }>(`/processing/jobs/ndvi`, {
      method: "POST",
      body: JSON.stringify({ scene }),
    }),
  codegen: (message: string) => request<{ files: Record<string, string> }>("/ai/codegen", { method: "POST", body: JSON.stringify({ message }) }),
  path: (slug: string) => request<{ steps: { id: string; title: string; est_min: number }[]; adaptive_rule: string }>(`/ai/path?slug=${slug}`),
  cypher: () => request<{ statements: string[] }>("/graph/export/cypher"),
  locales: () => request<{ code: string; name: string }[]>("/ai/locales"),
  remaining: () => request<{ status: string; connectors: Record<string, boolean> }>("/platform/remaining"),
  ingestCityjsonSample: () =>
    request<{ created: boolean; slug: string; objects: number }>("/twins/ingest/cityjson/sample", { method: "POST" }),
};
