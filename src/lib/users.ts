import type { IUser } from "@/Interface/User";

export const API_URL = "https://jsonplaceholder.typicode.com/users";

/** Server-side fetch, never cached, so every request is rendered fresh (true SSR). */
export async function getUsers(): Promise<IUser[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Users request failed: ${res.status}`);
  return res.json();
}

/** Returns null when the user does not exist, so the page can call notFound(). */
export async function getUser(id: string): Promise<IUser | null> {
  if (!/^\d+$/.test(id)) return null;
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`User request failed: ${res.status}`);
  const data = await res.json();
  return data && data.id ? data : null;
}
