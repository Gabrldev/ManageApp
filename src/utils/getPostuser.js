const URL_BASE = import.meta.env.VITE_URL_BASE;
export async function getProfile(id) {
  const response = await fetch(`${URL_BASE}/bills/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}