import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET;

export const createToken = (username) => {
  const jwt = sign({ username }, JWT_SECRET, { expiresIn: "1d" });
  return jwt;
};

export const verifyToken = (token) => {
  const decoded = verify(token, JWT_SECRET);
  return decoded;
};
