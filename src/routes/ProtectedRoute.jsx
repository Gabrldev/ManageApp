import { Navigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <>

    <Outlet />
  
  </>;
}
export default ProtectedRoute;
