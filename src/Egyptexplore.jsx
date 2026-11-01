// Egyptexplore — re-exports the 3D/VR Egypt explore scene
// The full A-Frame scene lives in ../../Romeexplore.jsx at the project root (reused).
// This stub satisfies the import so Egypt-world components build correctly.
import React from 'react';

const Egyptexplore = ({ onBack }) => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(ellipse at center, #1b1309 0%, #080603 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#C5A059',
      fontFamily: 'Cinzel, serif',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ fontSize: '56px', marginBottom: '20px', filter: 'drop-shadow(0 0 16px rgba(197, 160, 89, 0.4))' }}>🏺</div>
      <h2 style={{ fontSize: '30px', letterSpacing: '0.25em', marginBottom: '12px', textTransform: 'uppercase' }}>
        Egypt VR Gallery
      </h2>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: '#d4af37', fontStyle: 'italic', marginBottom: '32px' }}>
        Loading immersive pharaonic environment…
      </p>
      <button
        onClick={() => {
          if (onBack) onBack();
          else window.location.reload();
        }}
        style={{
          background: 'rgba(197, 160, 89, 0.15)',
          border: '1px solid #C5A059',
          color: '#F4E8C1',
          padding: '12px 28px',
          fontFamily: 'Cinzel, serif',
          fontSize: '14px',
          letterSpacing: '0.15em',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }}
      >
        ← Return to Museum
      </button>
    </div>
  );
};

export default Egyptexplore;
