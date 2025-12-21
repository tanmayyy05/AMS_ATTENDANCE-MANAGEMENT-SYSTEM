import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
