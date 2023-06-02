function FormLogin() {
  return (
    <div className="bg-[#111016] w-96 rounded-md border border-white/10 px-6 py-10">
        <h1 className="text-white/80 text-2xl font-bold text-center mb-8">Login</h1>
      <form className="flex flex-col">
        <label htmlFor="email" className="text-white/80">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="flex w-full outline-none rounded-sm bg-[#0b0a0e] py-1 placeholder:text-white/50 placeholder:text-xs px-5"
          placeholder="Email..."
        />
        <label htmlFor="password" className="text-white/80 mt-4">
            Password
        </label>
        <input
            type="password"
            id="password"
            className="flex w-full outline-none rounded-sm bg-[#0b0a0e] py-1 placeholder:text-white/50 placeholder:text-xs px-5"
            placeholder="Password..."
        />

        <button
            type="submit"
            className="bg-[#2f80ed] text-white/80 rounded-sm py-1 mt-4"
        >
            Login
        </button>

        <p className="text-white/80 text-center mt-4">
            Don&nbsp;t or have an account? <a href="" className="text-blue-500">Register</a>
            
        </p>
      </form>
    </div>
  );
}
export default FormLogin;
