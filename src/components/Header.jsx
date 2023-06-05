import { Link } from "react-router-dom";
const Header = () => {

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
  return (
    <header className="fixed top-0 w-full">
      <nav className="flex justify-between items-center h-16 px-48 bg-[#0e0c1488] w-full max-sm:px-4">
        <Link className="flex gap-3 cursor-pointer" to='/'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-device-desktop-analytics"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
            <path d="M7 20h10"></path>
            <path d="M9 16v4"></path>
            <path d="M15 16v4"></path>
            <path d="M9 12v-4"></path>
            <path d="M12 12v-1"></path>
            <path d="M15 12v-2"></path>
            <path d="M12 12v-1"></path>
          </svg>
          <h4>ManageApp</h4>
        </Link>
        <div className="flex gap-3">
          <button className="bg-white rounded-md px-5 text-black/90 font-medium py-1 border-none hover:bg-slate-200" onClick={Logout}>Logout</button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
