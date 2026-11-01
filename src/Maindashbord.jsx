import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/taj mahal background.png';
import Qutub from './Qutub';
import RedFort from './RedFort';
import KonarkTemple from './KonarkTemple';
import Egypt from './Egypt';
import Rome from './Rome';
import ExploreAr from './ExploreAr';

const INDIA_WINGS = (setIndia, setEgypt, setRome) => [
  { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: setIndia },
  { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, sandstone obelisks, and pharaonic gold conservation.', count: '4', onClick: setEgypt },
  { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums.', count: '4', onClick: setRome },
];

const Maindashbord = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toEgypt, setToEgypt]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explore, setExplore]     = useState(false);

  if (navTarget === 'qutub')    return <Qutub />;
  if (navTarget === 'redfort')  return <RedFort />;
  if (navTarget === 'konark')   return <KonarkTemple />;
  if (toEgypt) return <Egypt />;
  if (toRome)  return <Rome />;
  if (explore) return <ExploreAr onBack={() => setExplore(false)} />;

  const wings = INDIA_WINGS(
    () => {},                   // already on India
    () => setToEgypt(true),
    () => setToRome(true),
  );

  return (
    <MuseumPage
      activeWorld="india"
      worldLabel="Indian Heritage"
      worldSubtitle="An interactive spatial encounter with the timeless monument of eternal devotion"
      archiveLabel="INDIAN HERITAGE ARCHIVE • EXHIBIT I/IV"
      exhibitNum={0}
      countryFlag="🇮🇳"
      bgImage={bgImage}

      era="1631–1653 CE · MUGHAL EMPIRE"
      name="Taj Mahal"
      location="Agra, Uttar Pradesh · Yamuna Riverbank"
      desc="Ivory-white marble mausoleum commissioned by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Celebrated globally as the zenith of Indo-Islamic symmetry, it harmonizes white Makrana marble, semiprecious lapidary pietre dure inlays, and an ethereal reflecting pool alignment."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.2MM FIDELITY"
      catNum="Cat. IND-1029"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="73 Metres"
      spec1Chip="PINNACLE APEX"

      spec2Label="CONSTRUCTED"
      spec2Value="1631 CE"
      spec2Chip="22 YRS DURATION"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="ACOUSTIC RESONANCE"
      spec4Value="IN SITU"

      tabs={[
        { label: 'TAJ MAHAL',        active: true,  onClick: () => {} },
        { label: 'QUTUB MINAR',      active: false, onClick: () => setNavTarget('qutub') },
        { label: 'RED FORT',         active: false, onClick: () => setNavTarget('redfort') },
        { label: 'KONARK SUN TEMPLE',active: false, onClick: () => setNavTarget('konark') },
      ]}

      onPrev={() => setNavTarget('konark')}
      onNext={() => setNavTarget('qutub')}
      onExploreAR={() => setExplore(true)}

      wings={wings}
      footerGalleries={[
        { label: 'INDIA GALLERY',  active: true,  onClick: () => {} },
        { label: 'EGYPT GALLERY',  active: false, onClick: () => setToEgypt(true) },
        { label: 'ROME GALLERY',   active: false, onClick: () => setToRome(true) },
      ]}
    />
  );
};

export default Maindashbord;
