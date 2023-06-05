import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/Auth";
import Dashboard from "../pages/home";
import ProtectedRoute from "./ProtectedRoute";

function RouterPages() {
  const token = localStorage.getItem("token");
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"/auth"} element={token ? <Dashboard /> : <Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
  );
}
export default RouterPages;
