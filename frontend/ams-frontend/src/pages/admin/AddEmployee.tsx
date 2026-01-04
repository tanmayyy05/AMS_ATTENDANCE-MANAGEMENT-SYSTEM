const AddEmployee = () => {
  return (
    <div>
      <h1>Add Employee</h1>

      <form>
        <div>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Enter name" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter email" />
        </div>

        <br />

        <div>
          <label>Role</label>
          <br />
          <select>
            <option>EMPLOYEE</option>
            <option>ADMIN</option>
          </select>
        </div>

        <br />

        <button type="button">Add</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default AddEmployee;
