import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

const CreateCase = () => {
  const navigate = useNavigate();
  const [isSelfRepresented, setIsSelfRepresented] = useState(false);

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '40px 20px', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#333' }}>Create Case</h2>
        <div style={{ height: '1px', background: '#ddd', marginBottom: '30px' }}></div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Title Field */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Title</label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>

          {/* Category Field */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Dispute Category</label>
            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
          </div>

          {/* Description Field */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Description</label>
            <textarea rows="3" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
          </div>

          {/* Legal Representation Box */}
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '4px' }}>
            <h4 style={{ color: '#007bff', marginTop: 0, marginBottom: '15px' }}>Legal Representation</h4>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', fontWeight: 'bold' }}>
              <input 
                type="checkbox" 
                checked={isSelfRepresented} 
                onChange={() => setIsSelfRepresented(!isSelfRepresented)} 
              />
              I am representing myself (Party-in-Person)
            </label>

            <div style={{ display: 'flex', gap: '20px', opacity: isSelfRepresented ? 0.5 : 1 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Advocate Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Adv. Rajesh N" 
                  disabled={isSelfRepresented}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Bar Registration No.</label>
                <input 
                  type="text" 
                  placeholder="e.g. MAH/1234/20" 
                  disabled={isSelfRepresented}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} 
                />
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Upload Evidence (PDF)</label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input type="file" accept=".pdf" style={{ border: '1px solid #ddd', padding: '5px', flex: 1 }} />
            </div>
          </div>

          {/* Actions */}
          <div>
            <button 
              type="button" 
              style={{ backgroundColor: '#004085', color: 'white', padding: '10px 25px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              CREATE
            </button>
            <p 
              onClick={() => navigate('/admin/cases')} 
              style={{ color: '#007bff', cursor: 'pointer', marginTop: '15px', textDecoration: 'underline', fontSize: '14px' }}
            >
              Back to List
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCase;