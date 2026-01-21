import React from 'react';
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      
      <div className="container" style={{ paddingBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '10px' }}>About the Mamlatdar's Court</h2>
        <div style={{ height: '4px', width: '60px', backgroundColor: '#ed8936', marginBottom: '30px' }}></div>

        {/* Section 1: Court Overview & Hours */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
              The <strong>Mamlatdar's Court</strong> is a revenue court established under the <em>Mamlatdar's Court Act, 1966</em>. 
              It is the primary judicial authority for agricultural and land-related disputes in the state of Goa.
            </p>
            <ul style={{ marginTop: '15px', color: '#4a5568' }}>
              <li><strong>Mundkar & Tenancy Cases:</strong> Disputes between landlords and tenants.</li>
              <li><strong>Right of Way:</strong> Issues regarding access paths and easements.</li>
              <li><strong>Mutation Disputes:</strong> Corrections in land revenue records (Form I & XIV).</li>
              <li><strong>Natural Water Courses:</strong> Disputes regarding obstruction of water flow.</li>
            </ul>
          </div>

          <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
             <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Court Hours</h3>
             <p><strong>Mon - Fri:</strong> 9:30 AM - 5:30 PM</p>
             <p><strong>Lunch:</strong> 1:00 PM - 2:00 PM</p>
             <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '10px' }}>* Closed on Govt Holidays</p>
          </div>
        </div>

        {/* Section 2: District-wise Court Locations */}
        <h3 style={{ color: '#1a365d', marginBottom: '20px' }}>Court Locations (Jurisdiction)</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* North Goa District */}
          <div style={{ border: '1px solid #cbd5e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#2b6cb0', color: '#fff', padding: '10px 15px', fontWeight: 'bold' }}>NORTH GOA</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Tiswadi (Panaji)", "Bardez (Mapusa)", "Pernem", "Bicholim", "Sattari (Valpoi)", "Ponda"].map((loc) => (
                <li key={loc} style={{ padding: '10px 15px', borderBottom: '1px solid #edf2f7', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>📍</span> {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* South Goa District */}
          <div style={{ border: '1px solid #cbd5e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#2b6cb0', color: '#fff', padding: '10px 15px', fontWeight: 'bold' }}>SOUTH GOA</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["Salcete (Margao)", "Mormugao (Vasco)", "Quepem", "Sanguem", "Canacona", "Dharbandora"].map((loc) => (
                <li key={loc} style={{ padding: '10px 15px', borderBottom: '1px solid #edf2f7', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>📍</span> {loc}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;