// Added by Aryan Jaiswal (2026). In-app QR scanner: finds a place QR and opens it.
import { useEffect, useRef, useState } from 'react'
import jsQR from 'jsqr'
import { PLACES } from './places'
import './extras.css'

export default function Scanner() {
  const video = useRef(null)
  const [msg, setMsg] = useState('Point your camera at a museum QR code.')
  useEffect(() => {
    let stream, timer, stop = false, done = false
    const c = document.createElement('canvas'), g = c.getContext('2d', { willReadFrequently: true })
    navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'environment' } }).then(s => {
      if (stop) { s.getTracks().forEach(t => t.stop()); return }
      stream = s; video.current.srcObject = s; video.current.play()
      const tick = () => {
        if (stop || done) return
        const v = video.current
        if (v && v.videoWidth) {
          c.width = v.videoWidth; c.height = v.videoHeight; g.drawImage(v, 0, 0)
          const d = g.getImageData(0, 0, c.width, c.height), r = jsQR(d.data, c.width, c.height)
          if (r && r.data) {
            try {
              const u = new URL(r.data, window.location.href)
              if (u.pathname.startsWith('/place/')) { done = true; window.location.assign(u.origin === window.location.origin ? u.pathname : u.href); return }
              setMsg('That QR code is not a museum code.')
            } catch { setMsg('That QR code is not a museum code.') }
          }
        }
        timer = setTimeout(tick, 150)
      }
      tick()
    }).catch(() => setMsg('Camera access is needed to scan here. You can also open your phone’s normal camera app and scan the QR code.'))
    return () => { stop = true; clearTimeout(timer); stream?.getTracks().forEach(t => t.stop()) }
  }, [])
  return (
    <div className="sc">
      <video ref={video} playsInline muted />
      <div className="sc-frame" aria-hidden="true" />
      <a href="/" className="pl-btn sc-back">← Home</a>
      <div className="sc-msg">{msg}<div className="pl-list">{PLACES.slice(0, 4).map(p => <a key={p.slug} href={'/place/' + p.slug}>{p.name}</a>)}</div></div>
    </div>
  )
}
