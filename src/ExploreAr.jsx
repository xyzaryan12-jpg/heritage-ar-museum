// Modified by Aryan Jaiswal (2026): header label. Original: ExhibitX (Apache-2.0).
import React, { useState } from 'react';
import qrCodeImg from './assets/ar-qr-code.png';
import './museum.css';

const ExploreAr = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const arLink = 'https://sonu-jha24.github.io/Location-based-AR/First.html';

  const handleCopy = () => {
    navigator.clipboard.writeText(arLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="ar-modal-page">
      {/* ── TOP HEADER BAR ── */}
      <header className="ar-modal-header">
        <button
          className="ar-header-btn ar-back-btn"
          onClick={onBack}
          aria-label="Go Back"
        >
          ← BACK
        </button>

        <div className="ar-header-title-block">
          <div className="ar-header-tag">◊ HERITAGE AR MUSEUM ◊</div>
          <div className="ar-header-sub">Augmented Reality Immersion Suite</div>
        </div>

        <button
          className="ar-header-btn ar-close-btn"
          onClick={onBack}
          aria-label="Close modal"
        >
          ✕
        </button>
      </header>

      {/* ── CENTRAL ORNATE FRAME ── */}
      <main className="ar-modal-main">
        <div className="ar-sync-frame">
          {/* Corner Brackets */}
          <div className="bracket bracket-tl" />
          <div className="bracket bracket-tr" />
          <div className="bracket bracket-bl" />
          <div className="bracket bracket-br" />

          {/* Compass / Astrolabe Header Emblem */}
          <div className="ar-emblem-wrapper">
            <div className="ar-emblem-circle">
              <svg viewBox="0 0 100 100" className="ar-emblem-svg" fill="none">
                <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="41" stroke="#DFC999" strokeWidth="1" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="28" stroke="#C5A059" strokeWidth="1" />
                <polygon points="50,12 55,45 88,50 55,55 50,88 45,55 12,50 45,45" fill="#C5A059" opacity="0.85" />
                <circle cx="50" cy="50" r="4" fill="#6A5323" />
                {/* Diagonal rays */}
                <line x1="28" y1="28" x2="72" y2="72" stroke="#DFC999" strokeWidth="1" />
                <line x1="72" y1="28" x2="28" y2="72" stroke="#DFC999" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Synchronization Pill Badge */}
          <div className="ar-sync-pill">
            <span className="pill-dot">•</span>
            AUGMENTED REALITY SPATIAL SYNCHRONIZATION
            <span className="pill-dot">•</span>
          </div>

          {/* Title */}
          <h1 className="ar-sync-title">
            BRING THE MUSEUM TO YOUR ROOM!
          </h1>

          {/* Subtitle */}
          <p className="ar-sync-subtitle">
            Follow these simple steps to experience the museum 3D model in real life.
          </p>

          <div className="ar-diamond-divider">❖</div>

          {/* ── STEPS 1 to 4 ── */}
          <div className="ar-steps-list">
            <div className="ar-step-card">
              <div className="ar-step-num">1</div>
              <div className="ar-step-text">
                Copy the server link below and send it to your smartphone.
              </div>
            </div>

            <div className="ar-step-card">
              <div className="ar-step-num">2</div>
              <div className="ar-step-text">
                Open the copied link in any mobile browser (Chrome/Safari).
              </div>
            </div>

            <div className="ar-step-card">
              <div className="ar-step-num">3</div>
              <div className="ar-step-text">
                Allow access to your <strong className="highlight-brown">Camera</strong> and <strong className="highlight-brown">Location</strong> when prompted.
              </div>
            </div>

            <div className="ar-step-card">
              <div className="ar-step-num">4</div>
              <div className="ar-step-text">
                Slowly move your phone around your space to reveal the model.
              </div>
            </div>
          </div>

          {/* ── DUAL ACTION BOX (QR + MANUAL LINK) ── */}
          <div className="ar-launch-box">
            <div className="ar-launch-top-split">
              {/* Left Column Text */}
              <div className="ar-launch-left">
                <div className="ar-qr-tag">❖ QUICK LAUNCH QR CODE</div>
                <h2 className="ar-qr-heading">SCAN WITH SMARTPHONE CAMERA</h2>
                <p className="ar-qr-desc">
                  Directly open the spatial model on your mobile device
                </p>
                <div className="ar-qr-pill">
                  <span className="ar-clock-icon">⏱</span>
                  INSTANT BROWSER REDIRECTION • NO APP REQUIRED
                </div>
              </div>

              {/* Right Column QR Frame */}
              <div className="ar-qr-right">
                <div className="ar-qr-card">
                  <img
                    src={qrCodeImg}
                    alt="Scan QR Code to launch Augmented Reality"
                    className="ar-qr-img"
                  />
                  <div className="ar-qr-label">WEBXR FAST SYNC</div>
                </div>
              </div>
            </div>

            <div className="ar-or-divider">
              <span>OR MANUAL LINK TRANSMISSION</span>
            </div>

            {/* Bottom Link Copy Bar */}
            <div className="ar-link-bar">
              <div className="ar-link-text">
                <span className="ar-link-icon">🔗</span>
                <span className="ar-link-url">{arLink}</span>
              </div>
              <button
                className={`ar-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                <span className="ar-copy-icon">{copied ? '✓' : '📋'}</span>
                {copied ? 'COPIED!' : 'COPY LINK'}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── FOOTER CAPTION ── */}
      <footer className="ar-modal-footer">
        <p className="ar-footer-req">
          Requires WebXR compatible mobile device with LiDAR or dual photogrammetry sensor • Session Token: HERITAGE-AR-SPATIAL
        </p>
        <p className="ar-footer-unit">
          HERITAGE PRESERVATION DIGITIZATION UNIT • REPUBLIC OF INDIA CLASSICAL ARCHIVE
        </p>
      </footer>
    </div>
  );
};

export default ExploreAr;
