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
};
