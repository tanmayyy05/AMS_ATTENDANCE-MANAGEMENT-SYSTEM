import { useState } from "react";

const DailyReport = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false);

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
    setShowData(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowData(true);
    }, 1000); // fake API delay
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

      {/* Loading */}
      {isLoading && <p>Loading report...</p>}

      {/* Summary */}
      {showData && !isLoading && (
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
      {showData && !isLoading && (
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
