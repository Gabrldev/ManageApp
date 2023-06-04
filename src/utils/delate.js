const URL_BASE = import.meta.env.VITE_URL_BASE;

export const handleDelete = async (_id) => {
  const response = await fetch(`${URL_BASE}/bills/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
