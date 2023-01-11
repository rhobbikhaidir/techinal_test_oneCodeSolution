import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import DetailPage from "./Pages/DetailPage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
