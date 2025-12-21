import Card from "../../components/common/Card";
import Table from "../../components/common/Table";

const Dashboard = () => {
  return (
    <div className="space-y-10">
     <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Employees" />
        <Card title="Present Today" />
        <Card title="Absent Today" />
      </div>

      {/* Table */}
       <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-700">
          Recent Attendance
        </h2>
        
      <Table />
    </div>
    </div>
  );
};

export default Dashboard;
