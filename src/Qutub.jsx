import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/qutub minar background.png';
import Maindashbord from './Maindashbord';
import RedFort from './RedFort';
import KonarkTemple from './KonarkTemple';
import Egypt from './Egypt';
import Rome from './Rome';
import ExploreAr from './ExploreAr';

const Qutub = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toEgypt, setToEgypt]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'taj')      return <Maindashbord />;
  if (navTarget === 'redfort')  return <RedFort />;
  if (navTarget === 'konark')   return <KonarkTemple />;
  if (toEgypt)   return <Egypt />;
  if (toRome)    return <Rome />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: () => setNavTarget('taj') },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, sandstone obelisks, and pharaonic gold conservation.', count: '4', onClick: () => setToEgypt(true) },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums.', count: '4', onClick: () => setToRome(true) },
  ];

  return (
    <MuseumPage
      activeWorld="india"
      worldLabel="Indian Heritage"
      worldSubtitle="An interactive spatial encounter with the soaring sandstone minaret of antiquity"
      archiveLabel="INDIAN HERITAGE ARCHIVE • EXHIBIT II/IV"
      exhibitNum={1}
      countryFlag="🇮🇳"
      bgImage={bgImage}

      era="1193 CE · DELHI SULTANATE"
      name="Qutub Minar"
      location="Mehrauli, New Delhi"
      desc="World's tallest brick minaret at 72.5 m. Five distinct storeys of alternating fluted and stellar cross-section — built to proclaim the arrival of Islam in India."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.2MM FIDELITY"
      catNum="Cat. IND-1030"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="72.5 Metres"
      spec1Chip="BRICK TOWER APEX"

      spec2Label="CONSTRUCTED"
      spec2Value="1193 CE"
      spec2Chip="DELHI SULTANATE"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="ACOUSTIC RESONANCE"
      spec4Value="IN SITU"

      tabs={[
        { label: 'TAJ MAHAL',         active: false, onClick: () => setNavTarget('taj') },
        { label: 'QUTUB MINAR',       active: true,  onClick: () => {} },
        { label: 'RED FORT',          active: false, onClick: () => setNavTarget('redfort') },
        { label: 'KONARK SUN TEMPLE', active: false, onClick: () => setNavTarget('konark') },
      ]}

      onPrev={() => setNavTarget('taj')}
      onNext={() => setNavTarget('redfort')}
      onExploreAR={() => setExplorear(true)}

      wings={wings}
      footerGalleries={[
        { label: 'INDIA GALLERY', active: true,  onClick: () => setNavTarget('taj') },
        { label: 'EGYPT GALLERY', active: false, onClick: () => setToEgypt(true) },
        { label: 'ROME GALLERY',  active: false, onClick: () => setToRome(true) },
      ]}
    />
  );
};

export default Qutub;
