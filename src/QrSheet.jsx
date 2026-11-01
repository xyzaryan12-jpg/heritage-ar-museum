// Added by Aryan Jaiswal (2026). Printable QR codes: one per monument, each opens /place/<slug>.
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { PLACES } from './places'
import { APP_NAME } from './config'
import './extras.css'

export default function QrSheet() {
  const [base, setBase] = useState(() => localStorage.getItem('qrBase') || window.location.origin)
  const [imgs, setImgs] = useState({})
  useEffect(() => {
    localStorage.setItem('qrBase', base)
    let live = true
    const root = base.trim().replace(/\/+$/, '')
    Promise.all(PLACES.map(p => QRCode.toDataURL(root + '/place/' + p.slug, { width: 480, margin: 2, errorCorrectionLevel: 'M' }).then(u => [p.slug, u])))
      .then(a => live && setImgs(Object.fromEntries(a))).catch(() => {})
    return () => { live = false }
  }, [base])
  const local = /localhost|127\.0\.0\.1|192\.168\.|10\./.test(base)
  return (
    <div className="qr">
      <div className="noprint">
        <a href="/" className="pl-btn">← Home</a>
        <h1>QR codes for every monument</h1>
        <p>Enter your live website address (the one on your phone). Print the sheet, then place each code next to its monument, poster or exhibit.</p>
        <div className="row"><input aria-label="Website address" value={base} onChange={e => setBase(e.target.value)} />
          <button className="pl-main" onClick={() => window.print()}>Print sheet</button></div>
        {local && <p className="pl-note">This looks like a local address. Phones can only open it on the same Wi-Fi. Use your deployed https address for real visitors.</p>}
      </div>
      <div className="qr-grid">
        {PLACES.map(p => (
          <div key={p.slug} className="qr-card">
            {imgs[p.slug] && <img src={imgs[p.slug]} alt={'QR code for ' + p.name} />}
            <b>{p.name}</b><span>Scan to explore in AR</span><small>{APP_NAME}</small>
            {imgs[p.slug] && <a className="noprint" download={p.slug + '-qr.png'} href={imgs[p.slug]}>Download PNG</a>}
          </div>
        ))}
      </div>
    </div>
  )
}
