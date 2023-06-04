const URL_BASE = import.meta.env.VITE_URL_BASE;

export const HandleLogin = async (data) => {
  const response = await fetch(`${URL_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const HandleRegister = async (data) => {
  const response = await fetch(`${URL_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
