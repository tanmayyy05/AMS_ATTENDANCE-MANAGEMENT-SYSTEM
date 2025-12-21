import Card from "../../components/common/Card";
import Table from "../../components/common/Table";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Employees" />
        <Card title="Present Today" />
        <Card title="Absent Today" />
      </div>

      {/* Table */}
      <Table />
    </div>
  );
};

export default Dashboard;
