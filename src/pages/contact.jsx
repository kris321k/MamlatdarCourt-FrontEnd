import React from 'react';
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />
      
      <div className="container">
        <h2>Contact Us</h2>
        <p style={{ marginBottom: '20px', color: '#666' }}>Mamlatdar Court of Ponda, Goa</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1 md:2', gap: '30px' }} className="contact-grid">
          
          {/* Official Information Card */}
          <div className="contact-info" style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h3 style={{ color: '#1a365d', borderBottom: '2px solid #ed8936', paddingBottom: '10px', marginBottom: '20px' }}>
                Office Details
            </h3>
            
            <div className="info-group" style={{ marginBottom: '15px' }}>
              <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#888', display: 'block', textTransform: 'uppercase' }}>Designation</label>
              <p style={{ margin: '5px 0', fontSize: '16px' }}>Mamlatdar & Executive Magistrate, Ponda</p>
            </div>

            <div className="info-group" style={{ marginBottom: '15px' }}>
              <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#888', display: 'block', textTransform: 'uppercase' }}>Address</label>
              <p style={{ margin: '5px 0', fontSize: '16px' }}>
                Ponda Mamletdar and Collector Office, 92V2+FCW,<br />
                Ponda – Durbhat Rd, Friends Colony, Khadpabandh,<br />
                Ponda, Goa 403401
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#888', display: 'block', textTransform: 'uppercase' }}>Phone</label>
                <p style={{ margin: '5px 0', fontSize: '16px', color: '#2b6cb0', fontWeight: 'bold' }}>+91 832 231 2121</p>
              </div>
              <div>
                <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#888', display: 'block', textTransform: 'uppercase' }}>Fax No</label>
                <p style={{ margin: '5px 0', fontSize: '16px' }}>+91 832 231 2000</p>
              </div>
            </div>

            <div className="info-group">
              <label style={{ fontWeight: 'bold', fontSize: '12px', color: '#888', display: 'block', textTransform: 'uppercase' }}>Email ID</label>
              <p style={{ margin: '5px 0', fontSize: '16px', color: '#2b6cb0' }}>mam-ponda.goa@nic.in</p>
            </div>
          </div>

          {/* Map Section */}
          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd', height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.456382449079!2d74.00632387580667!3d15.39110465753874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba38833902f3%3A0xc3f8e5828ec557b!2sMamlatdar%20Office%20Ponda!5e0!3m2!1sen!2sin!4v1705850000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Ponda Mamlatdar Office Map"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;