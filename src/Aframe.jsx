import React, { useEffect } from 'react';

const Aframe = ({ onBack }) => {
  useEffect(() => {
    return () => {
      // Clean up AR webcam stream on unmount
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
      // Clean up any remaining AR elements
      const arContainers = document.querySelectorAll('.a-canvas, .arjs-video');
      arContainers.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, overflow: 'hidden', position: 'relative' }}>
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
        ← Exit AR
      </button>

      <a-scene
        style={{ height: '100vh', width: '100vw' }}
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        renderer="logarithmicDepthBuffer: true; alpha: true;"
        background="transparent: true"
      >
        <a-camera gps-camera rotation-reader>
          <a-cursor></a-cursor>
        </a-camera>

        <a-light type="ambient" intensity="0.8"></a-light>
        <a-light type="directional" position="-0.22 12.6 -38" intensity="2"></a-light>
        <a-light type="directional" position="1.2 16.5 38.1" intensity="2"></a-light>

        <a-entity
          gltf-model="url(/models/taj_mahal_model.glb)"
          position="0 0 -10"
          scale="10 10 10"
        ></a-entity>
      </a-scene>
    </div>
  );
};

export default Aframe;
