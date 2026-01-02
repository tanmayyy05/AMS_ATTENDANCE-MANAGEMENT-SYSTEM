import { useState } from "react";


const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const attendanceData: any[] = [];
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");






  return (
    <div>
      <h1>Attendance</h1>
      <p>
        {isCheckedIn ? "You are already checked in" : "You are not checked in"}
      </p>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}



      {!isCheckedIn && (
        <button
          onClick={() => {
            setIsCheckedIn(true);
            setSuccessMessage("Checked in successfully");
          }}
        >
          Check In
        </button>
      )}



      {isCheckedIn && (
        <button
          onClick={() => {
            const confirmCheckout = window.confirm(
              "Are you sure you want to check out?"
            );

            if (confirmCheckout) {
              setIsCheckedIn(false);
              setSuccessMessage("Checked out successfully");
              setErrorMessage("");
            } else {
              setErrorMessage("Check out cancelled");
              setSuccessMessage("");
            }


          }}
        >
          Check Out
        </button>
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
