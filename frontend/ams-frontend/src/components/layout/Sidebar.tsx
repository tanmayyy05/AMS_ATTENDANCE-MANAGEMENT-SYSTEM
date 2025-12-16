const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen border-r p-4">
      <h2 className="text-lg font-semibold mb-4">
        Menu
      </h2>

      <ul className="space-y-2 text-sm">
        <li>Dashboard</li>
        <li>Attendance</li>
        <li>Reports</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
