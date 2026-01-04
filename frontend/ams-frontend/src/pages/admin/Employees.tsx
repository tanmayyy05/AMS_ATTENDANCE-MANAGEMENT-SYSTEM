import { useNavigate } from "react-router-dom";



const Employees = () => {
    const employees = [
        { id: 1, name: "John Doe", email: "john@test.com", role: "EMPLOYEE" },
        { id: 2, name: "Jane Smith", email: "jane@test.com", role: "ADMIN" },
    ];
    const navigate = useNavigate();



    return (
        <div>
            <h1>Employees</h1>
            <button onClick={() => navigate("/admin/employees/add")}>
                Add Employee
            </button>


            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.role}</td>
                            <td>
                                <button onClick={() => navigate("/admin/employees/edit")}>
                                    Edit
                                </button>

                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );

};

export default Employees;
