import { useState } from "react";


const Attendance = () => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const attendanceData: any[] = [];




  return (
    <div>
      <h1>Attendance</h1>
      <p>
  {isCheckedIn ? "You are already checked in" : "You are not checked in"}
</p>

{!isCheckedIn && (
  <button onClick={() => setIsCheckedIn(true)}>Check In</button>
)}

{isCheckedIn && (
  <button onClick={() => setIsCheckedIn(false)}>Check Out</button>
)}


{isLoading && <p>Loading attendance...</p>}

{!isLoading && attendanceData.length === 0 && (
  <p>No attendance records found</p>
)}

{!isLoading && attendanceData.length > 0 && (
  <table border={1} cellPadding={8}>
    <thead>
      <tr>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {attendanceData.map((item, index) => (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}



    </div>
  );
};

export default Attendance;
