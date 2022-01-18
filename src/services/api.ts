export const baseUrl = "https://api.unsplash.com";
const key = "atIZpR9ZShVxPYdBOkzdeCJielirGfpWBnCKUIsgXAw";
const headers = { Authorization: "Client-ID" + " " + key };

export async function apiService<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
}
