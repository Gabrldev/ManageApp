export async function getProfile(id) {
  const response = await fetch(`http://localhost:4001/bills/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}