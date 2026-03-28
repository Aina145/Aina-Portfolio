import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
