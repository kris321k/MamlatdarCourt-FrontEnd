const AdvocateForm = () => {
  return (
    <form className="form">
      <div className="section-title">Bar Registration Detail</div>
      <div className="section-box grid-2">

        <div>
          <label>State</label>
          <select>
            <option>Select State</option>
          </select>
        </div>

        <div>
          <label>Advocate Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Bar Registration Number</label>
          <input type="text" />
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" />
        </div>

        <div>
          <label>Gender</label>
          <div className="gender-group">
            <label><input type="radio" name="advGender" /> Male</label>
            <label><input type="radio" name="advGender" /> Female</label>
            <label><input type="radio" name="advGender" /> Other</label>
          </div>
        </div>

      </div>

      <div className="section-title">Contact Details</div>
      <div className="section-box grid-2">
        <div>
          <label>Mobile Number</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>
      </div>

      <div className="section-title">Choose Password</div>
      <div className="section-box grid-2">
        <div>
          <label>Password</label>
          <input type="password" />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>
      </div>
    </form>
  );
};

export default AdvocateForm;
