import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/red fort background.png';
import Maindashbord from './Maindashbord';
import Qutub from './Qutub';
import KonarkTemple from './KonarkTemple';
import Egypt from './Egypt';
import Rome from './Rome';
import ExploreAr from './ExploreAr';

const RedFort = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toEgypt, setToEgypt]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'taj')      return <Maindashbord />;
  if (navTarget === 'qutub')    return <Qutub />;
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
      worldSubtitle="An interactive spatial encounter with the monumental red sandstone citadel of Mughal sovereignty"
      archiveLabel="INDIAN HERITAGE ARCHIVE • EXHIBIT III/IV"
      exhibitNum={2}
      countryFlag="🇮🇳"
      bgImage={bgImage}

      era="1648 CE · MUGHAL EMPIRE"
      name="Red Fort"
      location="Old Delhi, Delhi"
      desc="Imperial residence of the Mughal emperors for nearly two centuries. Built in red sandstone by Shah Jahan — site of India's Independence Day flag hoisting."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.2MM FIDELITY"
      catNum="Cat. IND-1048"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="33 Metres"
      spec1Chip="RAMPART WALLS"

      spec2Label="CONSTRUCTED"
      spec2Value="1648 CE"
      spec2Chip="MUGHAL EMPIRE"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="ACOUSTIC RESONANCE"
      spec4Value="IN SITU"

      tabs={[
        { label: 'TAJ MAHAL',         active: false, onClick: () => setNavTarget('taj') },
        { label: 'QUTUB MINAR',       active: false, onClick: () => setNavTarget('qutub') },
        { label: 'RED FORT',          active: true,  onClick: () => {} },
        { label: 'KONARK SUN TEMPLE', active: false, onClick: () => setNavTarget('konark') },
      ]}

      onPrev={() => setNavTarget('qutub')}
      onNext={() => setNavTarget('konark')}
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

export default RedFort;
