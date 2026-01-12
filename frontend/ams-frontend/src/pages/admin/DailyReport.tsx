import { useState } from "react";
import KpiCard from "../../components/common/KpiCard";

const DailyReport = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    if (!fromDate || !toDate || fromDate > toDate) {
      alert("Please select a valid date range");
      return;
    }

    setIsLoading(true);
    setShowReport(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowReport(true);
    }, 1000);
  };

  // KPI calculations
  const totalEmployees = reportData.length;
  const presentCount = reportData.filter(
    (e) => e.status === "Present"
  ).length;
  const absentCount = reportData.filter(
    (e) => e.status === "Absent"
  ).length;

  // Combined filtering
  const filteredData = reportData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export CSV
  const exportDailyCSV = () => {
    const headers = ["Employee Name", "Check In", "Check Out", "Status"];

    const rows = filteredData.map((emp) =>
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
      `daily-report-${fromDate}-to-${toDate}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Daily Attendance Report</h1>

      {/* Date Range */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <label>
          From:
          <br />
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>

        <label>
          To:
          <br />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>

        <button
          style={{ alignSelf: "flex-end" }}
          disabled={isLoading}
          onClick={handleViewReport}
        >
          {isLoading ? "Loading..." : "View Report"}
        </button>
      </div>

      {isLoading && <p>Loading report...</p>}

      {/* Search */}
      {showReport && !isLoading && (
        <div style={{ marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* KPI Cards */}
      {showReport && !isLoading && (
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <KpiCard title="Total Employees" value={totalEmployees} />
          <KpiCard title="Present" value={presentCount} />
          <KpiCard title="Absent" value={absentCount} />
        </div>
      )}

      {/* Export */}
      {showReport && !isLoading && filteredData.length > 0 && (
        <div style={{ textAlign: "right", marginBottom: "12px" }}>
          <button onClick={exportDailyCSV}>Export CSV</button>
        </div>
      )}

      {/* Empty State */}
      {showReport && !isLoading && filteredData.length === 0 && (
        <p style={{ marginTop: "20px", color: "#555" }}>
          No attendance records found for the selected filters.
        </p>
      )}

      {/* Table */}
      {showReport && !isLoading && filteredData.length > 0 && (
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
            {filteredData.map((item, index) => (
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
