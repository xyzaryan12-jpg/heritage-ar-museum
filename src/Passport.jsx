// Added by Aryan Jaiswal (2026). Collect a stamp for every monument you scan.
import { useState } from 'react'
import { PLACES, visited } from './places'
import { APP_NAME } from './config'
import './extras.css'

export default function Passport() {
  const [got, setGot] = useState(visited())
  const done = got.length
  return (
    <div className="pp">
      <a href="/" className="pl-btn">← Home</a>
      <h1>My Passport</h1>
      <p>{APP_NAME}: scan a QR code at each monument to collect its stamp.</p>
      <div className="pp-bar"><i style={{ width: Math.round((done / PLACES.length) * 100) + '%' }} /></div>
      <p className="pp-count">{done} of {PLACES.length} collected{done === PLACES.length ? ' · Heritage Explorer!' : ''}</p>
      <div className="pp-grid">
        {PLACES.map(p => (
          <a key={p.slug} href={'/place/' + p.slug} className={'pp-card' + (got.includes(p.slug) ? ' on' : '')}>
            <img src={p.image} alt="" loading="lazy" decoding="async" /><span>{got.includes(p.slug) ? '✓ ' : ''}{p.name}</span>
          </a>
        ))}
      </div>
      <button className="pl-btn" onClick={() => { localStorage.removeItem('visited'); setGot([]) }}>Reset stamps</button>
    </div>
  )
}
