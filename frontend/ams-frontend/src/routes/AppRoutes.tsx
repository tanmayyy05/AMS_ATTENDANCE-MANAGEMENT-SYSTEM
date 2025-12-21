import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/manager/dashboard" element={<h1>Manager Dashboard</h1>} />
    </Routes>
  );
};

export default AppRoutes;
