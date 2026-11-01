// Modified by Aryan Jaiswal (2026): footer and name labels. Original: ExhibitX (Apache-2.0).
import React from 'react';
import './museum.css';

/**
 * MuseumPage — Reusable layout component for every monument screen.
 * Receives all data + state-setter callbacks as props.
 * Zero logic lives here — pure UI/layout only.
 */
const MuseumPage = ({
  /* ── World Identity ── */
  activeWorld,        // 'india' | 'egypt' | 'rome'
  worldLabel,         // "Indian Heritage" | "Egyptian Wonders" | "Roman Grandeur"
  worldSubtitle,      // italic subtitle under gallery heading
  archiveLabel,       // "INDIAN HERITAGE ARCHIVE • EXHIBIT I/IV"
  exhibitNum,         // sequence index 0-3 (for diamonds)
  countryFlag,        // flag emoji
  
  /* ── Hero Background ── */
  bgImage,            // imported asset URL

  /* ── Monument Data ── */
  era,
  name,
  location,
  desc,
  scanFidelity,       // "AUTHENTICATED SPATIAL SCAN • 0.2MM FIDELITY"
  catNum,             // "Cat. IND-1029"
  spec1Value, spec1Chip,
  spec2Value, spec2Chip,
  spec3Value, spec3Chip,
  spec4Label, spec4Value,

  /* ── Monument Tabs ── */
  tabs,               // [{ label, active, onClick }]

  /* ── Navigation Callbacks ── */
  onPrev, onNext,
  onExploreAR,        // AR explore button

  /* ── Wing Cards ── */
  wings,              // [{ id, label, tag, icon, name, desc, count, active, onClick }]

  /* ── Footer Gallery Tabs ── */
  footerGalleries,    // [{ label, active, onClick }]
}) => {
  return (
    <div className="museum-page">
      {/* ── Hero Background ── */}
      <div className="hero-underlay">
        <img src={bgImage} alt={name} className="hero-underlay-img" />
        <div className="hero-underlay-overlay" />
      </div>

      <div className="museum-content">
        {/* ═══════════ NAVBAR ═══════════ */}
        <nav className="museum-nav" style={{ width: '100%', maxWidth: '100%', padding: '14px 48px' }}>
          <div className="nav-brand">
            <div className="nav-brand-icon">🏛</div>
            Heritage AR Museum
          </div>
          <div className="nav-right">
            <div className="nav-links">
              {wings.map(w => (
                <button
                  key={w.id}
                  className={`nav-tab ${w.id === activeWorld ? 'active' : ''}`}
                  onClick={w.onClick}
                  style={{ background: 'none', border: 'none', padding: '6px 2px', cursor: 'pointer' }}
                >
                  <span className="nav-tab-flag">{w.flagEmoji}</span>
                  {w.id.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="nav-tools-divider" />
            <a
              href="https://github.com/SamkitJain1812/ExhibitX-AR-Based-Museum-Tour"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-circle-btn"
              title="View the original ExhibitX project on GitHub"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {'</>'}
            </a>
            <button className="nav-circle-btn nav-avatar-btn" aria-label="Curator Profile" title="Curator Profile">✦</button>
          </div>
        </nav>

        {/* ═══════════ GALLERY HEADER ═══════════ */}
        <div className="gallery-header">
          <div className="gallery-pill">
            ❮ VIRTUAL AR IMMERSION GALLERY ❯
          </div>
          <h1 className="gallery-title">{worldLabel}</h1>
          <p className="gallery-subtitle">{worldSubtitle}</p>
          <div className="gallery-glyph-divider">
            <span className="gallery-glyph">🏛</span>
          </div>
        </div>

        {/* ═══════════ EXHIBIT CARD ═══════════ */}
        <div className="card-frame">
          {/* Corner Brackets */}
          <div className="bracket bracket-tl" />
          <div className="bracket bracket-tr" />
          <div className="bracket bracket-bl" />
          <div className="bracket bracket-br" />

          {/* Floating Prev Arrow */}
          {onPrev && (
            <button className="side-nav-arrow arrow-prev" onClick={onPrev}>
              <span className="arrow-roman">{['IV', 'I', 'II', 'III'][exhibitNum ?? 0]}</span>
              <span className="arrow-sym">‹</span>
              <span className="arrow-text">PREV</span>
            </button>
          )}

          {/* Floating Next Arrow */}
          {onNext && (
            <button className="side-nav-arrow arrow-next" onClick={onNext}>
              <span className="arrow-roman">{['II', 'III', 'IV', 'I'][exhibitNum ?? 0]}</span>
              <span className="arrow-sym">›</span>
              <span className="arrow-text">NEXT</span>
            </button>
          )}

          <div className="museum-card">
            {/* Card header row */}
            <div className="card-header-row">
              <div className="flag-badge">
                <span className="flag-badge-flag">{countryFlag}</span>
                {archiveLabel}
              </div>
              <div className="sequence-diamonds">
                {[0,1,2,3].map(i => (
                  <span key={i} className={`seq-item ${i === exhibitNum ? 'active' : ''}`}>◆</span>
                ))}
              </div>
            </div>

            {/* 2-column grid */}
            <div className="card-grid">
              {/* LEFT COLUMN */}
              <div className="col-left">
                <div className="era-tag">🗺 {era}</div>
                <h2 className="monument-name">{name}</h2>
                <p className="monument-location">📍 {location}</p>
                <div className="ornate-line">
                  <span className="ornate-line-diamond">◆</span>
                </div>
                <p className="monument-desc">{desc}</p>
                <div className="scan-footer-row">
                  <span className="scan-fidelity">
                    ✅ {scanFidelity}
                  </span>
                  <span className="scan-cat">{catNum}</span>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-right">
                <div className="spec-card">
                  <div className="spec-info">
                    <span className="spec-icon">📏</span>
                    <div className="spec-labels">
                      <span className="spec-label">MONUMENT HEIGHT</span>
                      <span className="spec-value">{spec1Value}</span>
                    </div>
                  </div>
                  <span className="spec-chip">{spec1Chip}</span>
                </div>

                <div className="spec-card">
                  <div className="spec-info">
                    <span className="spec-icon">🗓</span>
                    <div className="spec-labels">
                      <span className="spec-label">CONSTRUCTED</span>
                      <span className="spec-value">{spec2Value}</span>
                    </div>
                  </div>
                  <span className="spec-chip">{spec2Chip}</span>
                </div>

                <div className="spec-card">
                  <div className="spec-info">
                    <span className="spec-icon">🏆</span>
                    <div className="spec-labels">
                      <span className="spec-label">CONSERVATION STATUS</span>
                      <span className="spec-value">{spec3Value}</span>
                    </div>
                  </div>
                  <span className="spec-chip gold">{spec3Chip}</span>
                </div>

                {spec4Label && (
                  <div className="spec-card">
                    <div className="spec-info">
                      <span className="spec-icon">🔊</span>
                      <div className="spec-labels">
                        <span className="spec-label">{spec4Label}</span>
                        <span className="spec-value" style={{ fontSize: '14px' }}>{spec4Value}</span>
                      </div>
                    </div>
                    <span className="spec-chip audio">SAMPLE 🔊</span>
                  </div>
                )}
              </div>
            </div>

            {/* Monument Tabs */}
            <div className="monument-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.label}
                  className={`tab-btn ${tab.active ? 'active' : ''}`}
                  onClick={tab.onClick}
                >
                  {tab.active && '• '}{tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ AR CTA BUTTON ═══════════ */}
        <div className="ar-cta-wrapper" style={{ padding: '0 10px', width: '100%', maxWidth: '990px' }}>
          <button className="ar-cta-btn" onClick={onExploreAR}>
            <div className="ar-cta-content">
              <span className="ar-cta-icon">⊕</span>
              EXPLORE IN AUGMENTED REALITY
              <span className="ar-cta-icon">⊕</span>
            </div>
          </button>
          <p className="ar-cta-sub">
            📱 MOBILE AR READY &nbsp;•&nbsp; 🎵 SPATIAL AUDIO TUNED &nbsp;•&nbsp; 📷 6DOF PHOTOGRAMMETRY
          </p>
        </div>

        <hr style={{ width: '100%', maxWidth: '990px', border: 'none', borderTop: '1px solid #E5DCB8', margin: '6px 10px' }} />

        {/* ═══════════ WINGS SECTION ═══════════ */}
        <div className="wings-section">
          <div className="wings-header">
            <div className="wings-pre">INTERNATIONAL WINGS OF ANTIQUITY</div>
          </div>
          <div className="wings-grid">
            {wings.map(w => (
              <div
                key={w.id}
                className={`wing-card ${w.id === activeWorld ? 'active' : ''}`}
                onClick={w.onClick}
              >
                <div>
                  <div className="wing-tag-row">
                    <span className="wing-tag">
                      {w.id === activeWorld ? `ACTIVE GALLERY • ${w.wingTag}` : w.wingTag}
                    </span>
                    <span className="wing-icon">{w.icon}</span>
                  </div>
                  <h3 className="wing-name">{w.name}</h3>
                  <p className="wing-desc">{w.desc}</p>
                </div>
                <div className="wing-bottom">
                  <span>{w.count} MASTERPIECES {w.id === activeWorld ? 'ACTIVE' : 'CURATED'}</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="museum-footer">
          <div className="footer-inner">
            <div className="footer-top-row">
              <div className="footer-links">
                {footerGalleries.map(g => (
                  <button
                    key={g.label}
                    className={`footer-link ${g.active ? 'active' : ''}`}
                    onClick={g.onClick}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
              <div className="docent-control">
                🎧 DOCENT GUIDE: ACTIVE
                <div className="docent-buttons">
                  ⏮ &nbsp; ▶ &nbsp; ⏭
                </div>
              </div>
            </div>
            <div className="footer-bottom-row">
              <span>Archival Curation &amp; Spatial Docent Interaction</span>
              <span className="footer-copy">© 2026 ARYAN JAISWAL · BASED ON EXHIBITX (APACHE-2.0)</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MuseumPage;
