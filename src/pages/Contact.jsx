import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy submit — no backend yet
    alert(`Thanks ${name || "user"}! Your message has been received.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />

      <div className="container">
        <h2>Contact Us</h2>

        <p style={{ color: "#444", marginTop: 6 }}>
          For enquiries, please fill the form below and we'll get back to you.
        </p>

        <form className="form" onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <div className="section-box">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
          </div>

          <div className="section-box">
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div className="section-box">
            <label>Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #b7c6d7" }} placeholder="Write your message here" />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
