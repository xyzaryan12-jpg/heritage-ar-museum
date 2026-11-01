import React, { useEffect } from 'react';

const Tajmahalexplore = ({ onBack }) => {
  useEffect(() => {
    return () => {
      const videos = document.querySelectorAll('video');
      videos.forEach((video) => {
        if (video.srcObject) {
          const stream = video.srcObject;
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
          video.srcObject = null;
        }
        video.remove();
      });
      const arContainers = document.querySelectorAll('.a-canvas, .arjs-video');
      arContainers.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}>
      {/* Return button overlay */}
      <button
        onClick={() => {
          if (onBack) onBack();
          else window.location.reload();
        }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 999999,
          background: 'rgba(10, 8, 6, 0.85)',
          border: '1px solid #C5A059',
          color: '#F4E8C1',
          padding: '10px 20px',
          fontFamily: 'Cinzel, serif',
          fontSize: '13px',
          letterSpacing: '0.15em',
          cursor: 'pointer',
          borderRadius: '4px',
          backdropFilter: 'blur(8px)',
        }}
      >
        ← Return to Gallery
      </button>

      <a-scene style={{ height: '100vh', width: '100vw' }} embedded vr-mode-ui="enabled: false">
        <a-camera position="0 8 25" look-controls>
          <a-cursor color="#C5A059"></a-cursor>
        </a-camera>

        <a-light type="ambient" intensity="0.8"></a-light>
        <a-light type="directional" position="-0.22 12.6 -38" intensity="2"></a-light>
        <a-light type="directional" position="1.2 16.5 38.1" intensity="2"></a-light>

        <a-entity
          gltf-model="url(/models/taj_mahal_model.glb)"
          position="0 14 0"
          scale="15 15 15"
        ></a-entity>

        <a-sky color="#0c0906"></a-sky>
      </a-scene>
    </div>
  );
};

export default Tajmahalexplore;
