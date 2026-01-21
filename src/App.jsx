import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import AdminCases from "./pages/AdminCases";
import CreateCase from "./pages/createcase";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/admin/cases" element={<AdminCases />} />
        <Route path="/admin/createcase" element={<CreateCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;