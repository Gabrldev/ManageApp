import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);

    const res = {
      id: result.data.id,
      token: result.token,
    }
    if (result.log === "Login success") {
      localStorage.setItem("token", JSON.stringify(res));
      navigate("/home");
    }
  };
  return (
    <div className="bg-[#111016] w-96 rounded-md border border-white/10 px-6 py-10">
      <h1 className="text-white/80 text-2xl font-bold text-center mb-8">
        Login
      </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-white/80">
          Email
        </label>
        <input
          type="text"
          id="username"
          className="flex w-full outline-none rounded-sm bg-[#0b0a0e] py-1 placeholder:text-white/50 placeholder:text-xs px-5"
          placeholder="Username..."
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-white/80 mt-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="flex w-full outline-none rounded-sm bg-[#0b0a0e] py-1 placeholder:text-white/50 placeholder:text-xs px-5"
          placeholder="Password..."
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-[#2f80ed] text-white/80 rounded-sm py-1 mt-4"
        >
          Login
        </button>

        <p className="text-white/80 text-center mt-4">
          Don&nbsp;t or have an account?{" "}
          <a href="" className="text-blue-500">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
export default FormLogin;
