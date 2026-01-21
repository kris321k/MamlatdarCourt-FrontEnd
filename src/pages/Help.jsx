import React from "react";
import Header from "../components/Header";

const Help = () => {
  return (
    <>
      <Header />

      <div className="container">
        <h2>Help &amp; Support</h2>

        <p style={{ color: "#444", marginTop: 6 }}>
          Welcome to the help center. Below are some common questions and resources to help you get started.
        </p>

        <div style={{ marginTop: 18 }}>
          <h3 style={{ color: "#103b66" }}>Frequently Asked Questions</h3>
          <ul style={{ marginTop: 10, color: "#163a63" }}>
            <li style={{ margin: "8px 0" }}><strong>How do I file a case?</strong> — Use the 'Register' page to create a new case entry.</li>
            <li style={{ margin: "8px 0" }}><strong>Who can access the dashboard?</strong> — Any logged in user is redirected to the dashboard after login.</li>
            <li style={{ margin: "8px 0" }}><strong>How do I contact support?</strong> — Use the Contact page to send us a message.</li>
          </ul>

          <h3 style={{ color: "#103b66", marginTop: 18 }}>Resources</h3>
          <ul style={{ marginTop: 10, color: "#163a63" }}>
            <li style={{ margin: "6px 0" }}>Privacy Policy</li>
            <li style={{ margin: "6px 0" }}>Terms of Use</li>
            <li style={{ margin: "6px 0" }}>Help Documentation (placeholder)</li>
          </ul>

          <p style={{ marginTop: 18, color: "#666" }}>
            If you need further assistance, please visit the <a href="/contact" style={{ color: "#004aad" }}>Contact</a> page.
          </p>
        </div>
      </div>
    </>
  );
};

export default Help;
