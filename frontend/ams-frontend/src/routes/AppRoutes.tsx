import { Routes, Route } from "react-router-dom";
import Attendance from "../pages/employee/Attendance";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import EmployeeDashboard from "../pages/employee/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import Employees from "../pages/admin/Employees";
import EditEmployee from "../pages/admin/EditEmployee";
import AddEmployee from "../pages/admin/AddEmployee";




// Route layouts
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ---------- AUTH ROUTES ---------- */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* ---------- PROTECTED APP ROUTES ---------- */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/employees/edit" element={<EditEmployee />} />
        <Route path="/admin/employees/add" element={<AddEmployee />} />

        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/attendance" element={<Attendance />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
