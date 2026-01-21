import React from 'react';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'; // Added for navigation

const AdminCases = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const cases = [
    { id: "TC/003", title: "Tenancy Case 5", filedBy: "citizen1@gmail.com", category: "Tenancy", status: "Hearing Scheduled", date: "1/10/2024" },
    { id: "GEN/002", title: "tenancy case 3", filedBy: "admin@ecourt.com", category: "tenancy", status: "Hearing Scheduled", date: "1/8/2025" },
    { id: "GEN/001", title: "property case 3", filedBy: "admin@ecourt.com", category: "property", status: "Filed", date: "1/8/2024" },
    { id: "TC/002", title: "Tenancy Case 2", filedBy: "admin@ecourt.com", category: "Tenancy", status: "Filed", date: "1/8/2025" },
    { id: "PC/002", title: "Property Case 2", filedBy: "admin@ecourt.com", category: "Property", status: "Filed", date: "1/8/2025" },
  ];

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Court Cases</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="Search Title, Category, or Case No..." style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '300px' }} />
            <button style={{ backgroundColor: '#0056b3', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>SEARCH</button>
          </div>
        </div>

        {/* Updated Button with onClick navigation */}
        <button 
          onClick={() => navigate('/admin/createcase')}
          style={{ 
            backgroundColor: '#28a745', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '4px', 
            marginBottom: '20px', 
            fontWeight: 'bold',
            cursor: 'pointer' 
          }}
        >
          FILE NEW CASE
        </button>

        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', border: '1px solid #ddd' }}>
          <thead style={{ backgroundColor: '#0056b3', color: 'white' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left' }}>CASE NO.</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>TITLE</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>FILED BY</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>DISPUTE CATEGORY</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>STATUS</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>FILING DATE</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>EVIDENCE</th>
              <th style={{ padding: '12px', textAlign: 'center' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', color: '#0056b3', fontWeight: 'bold' }}>{c.id}</td>
                <td style={{ padding: '12px' }}>{c.title}</td>
                <td style={{ padding: '12px', fontSize: '13px' }}><strong>CT0010</strong><br/>{c.filedBy}</td>
                <td style={{ padding: '12px' }}>{c.category}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    backgroundColor: c.status === "Filed" ? "#007bff" : "#ffc107", 
                    color: c.status === "Filed" ? "white" : "black",
                    padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' 
                  }}>{c.status}</span>
                </td>
                <td style={{ padding: '12px' }}>{c.date}</td>
                <td style={{ padding: '12px', color: '#17a2b8', fontSize: '12px', cursor: 'pointer' }}>VIEW PDF</td>
                <td style={{ padding: '12px', display: 'flex', gap: '5px', justifyContent: 'center' }}>
                  <button className="action-btn">VIEW</button>
                  <button className="action-btn" style={{ color: '#007bff' }}>EDIT</button>
                  <button className="action-btn" style={{ color: '#dc3545' }}>DELETE</button>
                  <button style={{ backgroundColor: '#ffc107', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>SCHEDULE</button>
                  <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>VERDICT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminCases;