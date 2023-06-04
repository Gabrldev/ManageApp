import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Login from "../pages/Auth";
import Dashboard from "../pages/home";
import ProtectedRoute from "./ProtectedRoute";

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
export default RouterPages;
