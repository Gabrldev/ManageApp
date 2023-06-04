import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HandleLogin, HandleRegister } from "../utils/Auth";

function FormLogin() {
  const [auth, setAuth] = useState("login");
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
    //login
    if (auth === "login") {
      const response = await HandleLogin(data);
      if (response.log === "Login success") {
        const res = {
          id: response.data.id,
          token: response.token,
        };
        localStorage.setItem("token", JSON.stringify(res));
        navigate("/home");
      }
    }
    //register
    else {
      const response = await HandleRegister(data);
      const res = {
        id: response.data.user._id,
        token: response.data.token,
      };
      localStorage.setItem("token", JSON.stringify(res));
      navigate("/home");
    }
  };
  return (
    <div className="bg-[#111016] w-96 rounded-md border border-white/10 px-6 py-10">
      <h1 className="text-white/80 text-2xl font-bold text-center mb-8">
        {auth === "login" ? "Login" : "Register"}
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
          {auth === "login" ? "Login" : "Registrar"}
        </button>

        <p className="text-white/80 text-center mt-4">
          {auth === "login" ? "You do not have an account?" : "Do you already have an account?"}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setAuth(auth === "login" ? "register" : "login")}
          >
            {auth === "login" ? " Sign up" : " Log in"}
          </span>
        </p>
      </form>
    </div>
  );
}
export default FormLogin;
