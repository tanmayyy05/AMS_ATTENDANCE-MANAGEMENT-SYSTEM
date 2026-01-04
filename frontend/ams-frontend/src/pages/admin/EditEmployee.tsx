const EditEmployee = () => {
  return (
    <div>
      <h1>Edit Employee</h1>

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

        <button type="button">Update</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default EditEmployee;
