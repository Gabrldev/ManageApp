import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";

function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/chat"  />
    </Routes>
  );
}
export default RouterPages;
