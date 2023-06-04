export const handleDelete = async (_id) => {
  const response = await fetch(`http://localhost:4001/bills/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
