import React, { useState } from "react";

const REQUEST_OTP_URL = "/api/request-otp";
const VERIFY_OTP_URL = "/api/verify-otp";

const LitigantForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    taluka: "",
  });

  const [otp, setOtp] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 REQUEST OTP
  const requestOtp = async () => {
    setMessage("");

    const { email, password, firstName, lastName } = form;
    if (!email || !password || !firstName || !lastName) {
      setMessage("Please fill all required fields before requesting OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(REQUEST_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      if (!data.otpSessionId)
        throw new Error("OtpSessionId not returned");

      sessionStorage.setItem("otpSessionId", data.otpSessionId);
      setOtpRequested(true);
      setMessage("OTP sent successfully.");
    } catch (err) {
      setMessage("Error requesting OTP: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 VERIFY OTP & REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const otpSessionId = sessionStorage.getItem("otpSessionId");
    if (!otpSessionId) {
      setMessage("Please request OTP first.");
      return;
    }

    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(VERIFY_OTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otpSessionId,
          enteredOtp: otp,
        }),
      });

      if (!res.ok) throw new Error(await res.text());

      sessionStorage.removeItem("otpSessionId");
      setMessage("OTP verified. Registration completed successfully.");
    } catch (err) {
      setMessage("Error verifying OTP: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* ACCOUNT DETAILS */}
      <div className="section-title">Account Details</div>
      <div className="section-box grid-2">
        <div>
          <label>Email *</label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>

        <div>
          <label>Password *</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="section-title">Personal Details</div>
      <div className="section-box grid-2">
        <div>
          <label>First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} />
        </div>

        <div>
          <label>Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} />
        </div>

        <div>
          <label>Date of Birth</label>
          <input name="dob" type="date" value={form.dob} onChange={handleChange} />
        </div>

        <div>
          <label>Taluka</label>
          <input name="taluka" value={form.taluka} onChange={handleChange} />
        </div>
      </div>

      {/* OTP FIELD (ALWAYS VISIBLE) */}
      <div className="section-title">OTP Verification</div>
      <div className="section-box grid-2">
        <div>
          <label>Enter OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            disabled={!otpRequested}
            placeholder={otpRequested ? "Enter OTP" : "Request OTP first"}
          />
        </div>

        <div style={{ alignSelf: "end" }}>
          <button
            type="button"
            className="submit-btn"
            onClick={requestOtp}
            disabled={loading}
          >
            {loading ? "Requesting OTP..." : "Request OTP"}
          </button>
        </div>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="submit-btn"
        disabled={loading || !otpRequested}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && (
        <p style={{ marginTop: 12, color: message.startsWith("Error") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default LitigantForm;
