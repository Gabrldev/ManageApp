import { Link } from "react-router-dom";
function LandingLogin() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-8xl first-letter:xl font-bold w-[650px] text-center text-slate-100 bg-clip-text bg-gradient-to-r from-[#b373ad] to-[#a1f2f8] text-clip text-transparent">
        Manage your expenses
      </h1>
      <p className="w-[450px] text-center text-white/50 leading-tight">
        Our expense tracking app helps you manage your finances easily and
        securely. Record your income and expenses, set budgets, and generate
        clear reports.
      </p>
      <Link
        to="/home"
        className="bg-white px-10 py-2 rounded-md text-black/90 hover:bg-slate-300 font-semibold border-none"
      >
        Get Started
      </Link>
    </div>
  );
}
export default LandingLogin;
