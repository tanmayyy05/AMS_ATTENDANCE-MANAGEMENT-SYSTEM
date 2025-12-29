import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role"); // ADMIN | EMPLOYEE

  return (
    <aside className="w-56 border-r p-4">
      <h3 className="mb-4 font-semibold">Menu</h3>

      <ul className="space-y-2 text-sm">
        {role === "ADMIN" && (
          <>
            <li>
              <NavLink to="/admin/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin/employees">Employees</NavLink>
            </li>
            <li>
              <NavLink to="/admin/reports">Reports</NavLink>
            </li>
          </>
        )}

        {role === "EMPLOYEE" && (
          <>
            <li>
              <NavLink to="/employee/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/employee/attendance">Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/employee/reports">Reports</NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
