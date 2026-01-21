import React from "react";
import Header from "../components/Header";

const Dashboard = () => {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const cardStyle = (bg, color = "#fff") => ({
    background: bg,
    color,
    padding: "18px",
    borderRadius: 6,
    flex: 1,
    boxShadow: "0 6px 18px rgba(14, 30, 37, 0.06)",
    minWidth: 120,
  });

  return (
    <>
      <Header />

      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0 }}>Court Dashboard</h2>
          <button className="btn primary" style={{ padding: "8px 14px" }}>
            VIEW ALL CASES
          </button>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
          <div style={cardStyle("#1976d2")}>
            <div style={{ fontSize: 12, opacity: 0.95 }}>PENDING CASES</div>
            <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6 }}>7</div>
          </div>

          <div style={cardStyle("#f2b400", "#002143")}>
            <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.95 }}>HEARINGS TODAY</div>
            <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6, color: "#002143" }}>0</div>
          </div>

          <div style={cardStyle("#2e7d32")}>
            <div style={{ fontSize: 12, opacity: 0.95 }}>DISPOSED</div>
            <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6 }}>0</div>
          </div>

          <div style={cardStyle("#6e7072")}>
            <div style={{ fontSize: 12, opacity: 0.95 }}>TOTAL FILED</div>
            <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6 }}>7</div>
          </div>
        </div>

        <div style={{ marginTop: 22, background: "#fff", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid #eef3f7", color: "#0b61b2", fontWeight: 700 }}>
            Cases Listed for Today ({dateStr})
          </div>

          <div style={{ padding: 40, textAlign: "center", color: "#888" }}>
            No hearings scheduled for today.
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
