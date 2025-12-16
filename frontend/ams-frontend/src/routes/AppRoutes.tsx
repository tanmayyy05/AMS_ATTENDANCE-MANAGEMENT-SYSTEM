import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
        <Route path="/manager" element={<h1>Manager Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
