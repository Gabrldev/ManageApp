import { BrowserRouter } from "react-router-dom";
import RouterPages from "./routes";
function App() {
  return (
    <BrowserRouter>
      <RouterPages />
    </BrowserRouter>
  );
}

export default App;
