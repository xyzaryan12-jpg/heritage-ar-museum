// Added by Aryan Jaiswal (2026). Opens when someone scans a place's QR code: /place/<slug>
import { useEffect, useRef, useState } from 'react'
import { PLACES, placeBySlug, modelUrl, markVisited } from './places'
import { APP_NAME } from './config'
import './extras.css'

export default function PlacePage({ slug }) {
  const place = placeBySlug(slug)
  const mv = useRef(null)
  const [progress, setProgress] = useState(0)
  const [spin, setSpin] = useState(true)
  const [talk, setTalk] = useState(false)
  const [note, setNote] = useState('')
  const src = place ? modelUrl(place) : null

  useEffect(() => {
    if (!place) return
    markVisited(place.slug)
    document.title = place.name + ' · ' + APP_NAME
    if (src) import('@google/model-viewer')
    return () => window.speechSynthesis?.cancel()
  }, [place, src])

  useEffect(() => {
    const el = mv.current
    if (!el) return
    const on = e => setProgress(e.detail.totalProgress)
    el.addEventListener('progress', on)
    return () => el.removeEventListener('progress', on)
  }, [src])

  if (!place) {
    return (
      <div className="pl pl-lost"><h1>We could not find that place</h1><p>The QR code may be outdated. Pick a monument:</p>
        <div className="pl-list">{PLACES.map(p => <a key={p.slug} href={'/place/' + p.slug}>{p.name}</a>)}</div></div>
    )
  }
  const i = PLACES.indexOf(place), prev = PLACES[(i + PLACES.length - 1) % PLACES.length], next = PLACES[(i + 1) % PLACES.length]

  const ar = async () => {
    try { await mv.current.activateAR() } catch { setNote('AR needs a phone with ARCore (Android Chrome) or iOS Safari. You can still rotate and zoom the model here.') }
  }
  const listen = () => {
    const s = window.speechSynthesis
    if (!s) { setNote('Audio guide is not supported on this browser.'); return }
    if (talk) { s.cancel(); setTalk(false); return }
    const u = new SpeechSynthesisUtterance(place.name + '. ' + place.era + '. ' + place.blurb)
    u.lang = 'en-IN'; u.onend = () => setTalk(false); s.cancel(); s.speak(u); setTalk(true)
  }
  const share = async () => {
    const url = window.location.href
    try { if (navigator.share) await navigator.share({ title: place.name, url }); else { await navigator.clipboard.writeText(url); setNote('Link copied.') } } catch { /* cancelled */ }
  }

  return (
    <div className="pl">
      <div className="pl-bg" style={{ backgroundImage: `url("${place.image}")` }} />
      {src ? (
        <model-viewer ref={mv} src={src} alt={'3D model of ' + place.name} camera-controls {...(spin ? { 'auto-rotate': '' } : {})}
          auto-rotate-delay="0" rotation-per-second="14deg" camera-orbit="35deg 72deg auto" shadow-intensity="1.2" shadow-softness="1"
          exposure="1.1" ar ar-modes="webxr scene-viewer quick-look" ar-scale="auto" interaction-prompt="auto" />
      ) : (<div className="pl-hero" style={{ backgroundImage: `url("${place.image}")` }} />)}
      {src && progress < 1 && <div className="pl-load"><i style={{ width: Math.round(progress * 100) + '%' }} /></div>}

      <div className="pl-top">
        <a href="/" className="pl-btn" aria-label="Home">← Home</a>
        <div className="pl-tools"><a href="/scan" className="pl-btn">Scan</a><button className="pl-btn" onClick={share}>Share</button></div>
      </div>

      <div className="pl-sheet">
        <div className="pl-era">{place.era}</div>
        <h1>{place.name}</h1>
        <div className="pl-loc">{place.location}</div>
        <p>{place.blurb}</p>
        <div className="pl-facts">{place.facts.map(([k, v]) => (<div key={k}><span>{k}</span><b>{v}</b></div>))}</div>
        {!src && <p className="pl-note">A 3D model for this monument is coming soon. Enjoy the view for now.</p>}
        {note && <p className="pl-note">{note}</p>}
        <div className="pl-actions">
          {src && <button className="pl-main" onClick={ar}>View in AR</button>}
          <button className="pl-btn" onClick={listen}>{talk ? 'Stop audio' : 'Audio guide'}</button>
          {src && <button className="pl-btn" onClick={() => setSpin(s => !s)}>{spin ? 'Pause spin' : 'Auto-spin'}</button>}
        </div>
        <div className="pl-nav"><a href={'/place/' + prev.slug}>← {prev.name}</a><a href={'/place/' + next.slug}>{next.name} →</a></div>
      </div>
    </div>
  )
}
