import { useState } from "react";
import KpiCard from "../../components/common/KpiCard";

const MonthlyReport = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // Mock data (UI only)
  const monthlyData = [
    { name: "John Doe", present: 20, absent: 2, percent: "91%" },
    { name: "Jane Smith", present: 18, absent: 4, percent: "82%" },
  ];

  const handleViewReport = () => {
    setIsLoading(true);
    setShowReport(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowReport(true);
    }, 1000); // fake API delay
  };

  // ✅ EXPORT CSV
  const exportMonthlyCSV = () => {
    const headers = [
      "Employee Name",
      "Present Days",
      "Absent Days",
      "Attendance %",
    ];

    const rows = monthlyData.map((emp) =>
      [emp.name, emp.present, emp.absent, emp.percent].join(",")
    );

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `monthly-report-${selectedMonth}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Monthly Attendance Report</h1>

      {/* Filter */}
      <div style={{ marginBottom: "16px" }}>
        <label>
          Select Month:{" "}
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

      {isLoading && <p>Loading report...</p>}

      {/* KPI Cards */}
      {showReport && !isLoading && (
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <KpiCard title="Total Employees" value="25" />
          <KpiCard title="Working Days" value="22" />
          <KpiCard title="Avg Attendance" value="91%" />
          <KpiCard title="Total Absents" value="14" />
        </div>
      )}

      {/* Export Button */}
      {showReport && !isLoading && (
        <div style={{ textAlign: "right", marginBottom: "12px" }}>
          <button onClick={exportMonthlyCSV}>Export CSV</button>
        </div>
      )}

      {/* Table */}
      {showReport && !isLoading && (
        <table border={1} cellPadding={10} style={{ width: "100%" }}>
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
