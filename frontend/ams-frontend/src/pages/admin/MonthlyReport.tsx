import { useState } from "react";

const MonthlyReport = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState("");
  const [exportError, setExportError] = useState("");

  const monthlyData = [
    { name: "John Doe", present: 20, absent: 2, percent: "91%" },
    { name: "Jane Smith", present: 18, absent: 4, percent: "82%" },
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

  return (
    <div>
      <h1>Monthly Attendance Report</h1>

      {/* Filters */}
      <div style={{ marginBottom: "16px" }}>
        <label>
          Select Month:
          <br />
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </label>

        <button
          style={{ marginLeft: "10px" }}
          disabled={!selectedMonth || isLoading}
          onClick={handleViewReport}
        >
          {isLoading ? "Loading..." : "View Report"}
        </button>
      </div>

      {!selectedMonth && (
        <p style={{ color: "#666" }}>
          Please select a month to view the attendance report.
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
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <div style={{ border: "1px solid #ccc", padding: "12px", width: "180px" }}>
            <h4>Total Employees</h4>
            <p>25</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "12px", width: "180px" }}>
            <h4>Working Days</h4>
            <p>22</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "12px", width: "180px" }}>
            <h4>Avg Attendance</h4>
            <p>91%</p>
          </div>
          <div style={{ border: "1px solid #ccc", padding: "12px", width: "180px" }}>
            <h4>Total Absents</h4>
            <p>14</p>
          </div>
        </div>
      )}

      {/* Table */}
      {showReport && !isLoading && (
        <table
          border={1}
          cellPadding={8}
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Present Days</th>
              <th>Absent Days</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.present}</td>
                <td>{emp.absent}</td>
                <td>{emp.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MonthlyReport;
