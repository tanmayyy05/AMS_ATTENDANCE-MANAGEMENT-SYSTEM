import { useState } from "react";

const MonthlyReport = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  const monthlyData = [
    { name: "John Doe", present: 20, absent: 2, percent: "91%" },
    { name: "Jane Smith", present: 18, absent: 4, percent: "82%" },
  ];

  const handleViewReport = () => {
    setIsLoading(true);
    setShowData(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowData(true);
    }, 1000); // fake API delay
  };

  return (
    <div>
      <h1>Monthly Attendance Report</h1>

      {/* Month Selector */}
      <div style={{ marginTop: "16px", marginBottom: "16px" }}>
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

      {/* Loading */}
      {isLoading && <p>Loading report...</p>}

      {/* Empty State */}
      {!selectedMonth && (
        <p style={{ color: "#666", marginTop: "20px" }}>
          Please select a month to view the attendance report.
        </p>
      )}

      {/* ===== SUMMARY CARDS ===== */}
      {showData && !isLoading && (
        <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
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

      {/* ===== MONTHLY TABLE ===== */}
      {showData && !isLoading && (
        <table
          border={1}
          cellPadding={8}
          style={{ marginTop: "24px", width: "100%" }}
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
