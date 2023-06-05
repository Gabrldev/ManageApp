const URL_BASE = import.meta.env.VITE_URL_BASE;
const AUTH = localStorage.getItem("token");
const { token } = JSON.parse(AUTH);

export async function getProfile(id) {
  const response = await fetch(`${URL_BASE}/bills/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function postData(data) {
  const { userId, bills, description, name, date } = data;
  const response = await fetch(`${URL_BASE}/bills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, bills, description, name, date }),
  });
  const resData = await response.json();
  return resData;
}

export const handleDelete = async (_id) => {
  const response = await fetch(`${URL_BASE}/bills/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
