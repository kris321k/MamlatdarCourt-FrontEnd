const ClerkForm = () => {
  return (
    <form className="form">
      <div className="section-title">Personal Details</div>
      <div className="section-box grid-2">

        <div>
          <label>Name</label>
          <input type="text" />
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" />
        </div>

      </div>

      <div className="section-title">Contact Details</div>
      <div className="section-box grid-2">
        <div>
          <label>Mobile</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>
      </div>
    </form>
  );
};

export default ClerkForm;
