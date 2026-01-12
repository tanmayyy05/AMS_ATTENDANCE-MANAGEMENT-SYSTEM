import { useState } from "react";
import KpiCard from "../../components/common/KpiCard";

const DailyReport = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // Mock daily data (UI only)
  const reportData = [
    {
      name: "John Doe",
      checkIn: "09:10 AM",
      checkOut: "06:05 PM",
      status: "Present",
    },
    {
      name: "Jane Smith",
      checkIn: "--",
      checkOut: "--",
      status: "Absent",
    },
  ];

  const handleViewReport = () => {
    setIsLoading(true);
    setShowReport(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowReport(true);
    }, 1000); // fake API delay
  };

  // KPI calculations
  const totalEmployees = reportData.length;
  const presentCount = reportData.filter(
    (e) => e.status === "Present"
  ).length;
  const absentCount = reportData.filter(
    (e) => e.status === "Absent"
  ).length;

  // ✅ EXPORT CSV
  const exportDailyCSV = () => {
    const headers = [
      "Employee Name",
      "Check In",
      "Check Out",
      "Status",
    ];

    const rows = reportData.map((emp) =>
      [emp.name, emp.checkIn, emp.checkOut, emp.status].join(",")
    );

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `daily-report-${selectedDate}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Daily Attendance Report</h1>

      {/* Filter */}
      <div style={{ marginBottom: "16px" }}>
        <label>
          Select Date:{" "}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>

        <button
          style={{ marginLeft: "10px" }}
          disabled={!selectedDate || isLoading}
          onClick={handleViewReport}
        >
          {isLoading ? "Loading..." : "View Report"}
        </button>
      </div>

      {isLoading && <p>Loading report...</p>}

      {/* KPI Cards */}
      {showReport && !isLoading && (
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <KpiCard title="Total Employees" value={totalEmployees} />
          <KpiCard title="Present" value={presentCount} />
          <KpiCard title="Absent" value={absentCount} />
        </div>
      )}

      {/* Export Button */}
      {showReport && !isLoading && (
        <div style={{ textAlign: "right", marginBottom: "12px" }}>
          <button onClick={exportDailyCSV}>Export CSV</button>
        </div>
      )}

      {/* Table */}
      {showReport && !isLoading && (
        <table
          border={1}
          cellPadding={10}
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.checkIn}</td>
                <td>{item.checkOut}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DailyReport;
