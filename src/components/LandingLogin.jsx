import { Link } from "react-router-dom"
function LandingLogin() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-7xl font-bold w-[550px] text-center text-slate-100" >Manage your expenses</h1>
        <p className="w-[450px] text-center text-white/80 leading-tight">Our expense tracking app helps you manage your finances easily and securely. Record your income and expenses, set budgets, and generate clear reports.</p>
        <Link to='/auth' className="bg-white px-10 py-2 rounded-md text-black/90 hover:bg-slate-300 font-semibold border-none"> 
            Get Started
        </Link>
    </div>
  )
}
export default LandingLogin