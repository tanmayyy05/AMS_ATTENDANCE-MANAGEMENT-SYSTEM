import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role"); // ADMIN | EMPLOYEE

  return (
    <aside className="hidden md:block md:w-56 border-r p-4">
      <h3 className="mb-4 font-semibold">Menu</h3>

      <ul className="space-y-2 text-sm">
        {role === "ADMIN" && (
          <>
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/employees"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Employees
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/reports"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Reports
              </NavLink>
            </li>
          </>
        )}

        {role === "EMPLOYEE" && (
          <>
            <li>
              <NavLink
                to="/employee/dashboard"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/employee/attendance"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Attendance
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/employee/reports"
                className={({ isActive }) =>
                  isActive ? "font-semibold text-blue-600" : ""
                }
              >
                Reports
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
