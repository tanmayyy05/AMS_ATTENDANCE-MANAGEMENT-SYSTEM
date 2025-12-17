import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main area: Sidebar + Page Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;
