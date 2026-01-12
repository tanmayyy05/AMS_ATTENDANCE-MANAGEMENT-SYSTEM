import { useState } from "react";

const DailyReport = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState("");
  const [exportError, setExportError] = useState("");

  // Mock data (UI only)
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
    setExportSuccess("");
    setExportError("");

    setTimeout(() => {
      setIsLoading(false);
      setShowReport(true);
    }, 1000);
  };

  const handleExportCSV = () => {
    setIsExporting(true);
    setExportSuccess("");
    setExportError("");

    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess("CSV exported successfully");
    }, 1200);
  };

  // Summary calculations
  const totalEmployees = reportData.length;
  const presentCount = reportData.filter(
    (e) => e.status === "Present"
  ).length;
  const absentCount = reportData.filter(
    (e) => e.status === "Absent"
  ).length;

  return (
    <div>
      <h1>Daily Attendance Report</h1>

      {/* Filters */}
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

      {!selectedDate && (
        <p style={{ color: "#666" }}>
          Please select a date to view the report.
        </p>
      )}

      {isLoading && <p>Loading report...</p>}

      {/* Action Bar */}
      {showReport && !isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "12px",
          }}
        >
          <button
            onClick={handleExportCSV}
            disabled={isExporting}
            style={{
              padding: "6px 12px",
              cursor: isExporting ? "not-allowed" : "pointer",
            }}
          >
            {isExporting ? "Exporting..." : "Export CSV"}
          </button>
        </div>
      )}

      {/* Export feedback */}
      {exportSuccess && (
        <p style={{ color: "green", marginBottom: "10px" }}>
          {exportSuccess}
        </p>
      )}

      {exportError && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {exportError}
        </p>
      )}

      {/* Summary */}
      {showReport && !isLoading && (
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div>
            <strong>Total Employees</strong>
            <div>{totalEmployees}</div>
          </div>

          <div>
            <strong>Present</strong>
            <div>{presentCount}</div>
          </div>

          <div>
            <strong>Absent</strong>
            <div>{absentCount}</div>
          </div>
        </div>
      )}

      {/* Table */}
      {showReport && !isLoading && (
        <table
          border={1}
          cellPadding={10}
          cellSpacing={0}
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
