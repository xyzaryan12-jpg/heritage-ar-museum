import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/konark sun temple background.png';
import Maindashbord from './Maindashbord';
import Qutub from './Qutub';
import RedFort from './RedFort';
import Egypt from './Egypt';
import Rome from './Rome';
import ExploreAr from './ExploreAr';

const KonarkTemple = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toEgypt, setToEgypt]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'taj')      return <Maindashbord />;
  if (navTarget === 'qutub')    return <Qutub />;
  if (navTarget === 'redfort')  return <RedFort />;
  if (toEgypt)   return <Egypt />;
  if (toRome)    return <Rome />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Sun chariots, Mughal marble palaces, and intricate stone sundials of the medieval subcontinent.', count: '4', onClick: () => setNavTarget('taj') },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, colossal sandstone obelisks, and gilded sarcophagi along the Nile.', count: '4', onClick: () => setToEgypt(true) },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial marble portraiture.', count: '4', onClick: () => setToRome(true) },
  ];

  return (
    <MuseumPage
      activeWorld="india"
      worldLabel="Indian Heritage"
      worldSubtitle="An interactive spatial encounter with the colossal sun chariot of Kalinga antiquity"
      archiveLabel="INDIAN HERITAGE ARCHIVE • EXHIBIT IV/IV"
      exhibitNum={3}
      countryFlag="🇮🇳"
      bgImage={bgImage}

      era="1250 CE · EASTERN GANGA DYNASTY"
      name="Konark Sun Temple"
      location="Konark, Puri District, Odisha, India"
      desc="Chariot-shaped temple dedicated to the Sun God Surya with 24 intricately carved wheels. A Kalinga architecture masterpiece — each wheel doubles as a precise sundial, casting sharp shadows that record the hour, minute, and celestial transit of the cosmic wheel of time."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.2MM FIDELITY"
      catNum="CAT. IND-1250"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="~57 Metres"
      spec1Chip="KALINGA REKHA DEULA"

      spec2Label="CONSTRUCTED"
      spec2Value="1250 CE"
      spec2Chip="KING NARASIMHADEVA I"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="WORLD HERITAGE"

      spec4Label="SOLAR ALIGNMENT"
      spec4Value="EQUINOX SYMMETRY"

      tabs={[
        { label: 'TAJ MAHAL',         active: false, onClick: () => setNavTarget('taj') },
        { label: 'QUTUB MINAR',       active: false, onClick: () => setNavTarget('qutub') },
        { label: 'RED FORT',          active: false, onClick: () => setNavTarget('redfort') },
        { label: 'KONARK SUN TEMPLE', active: true,  onClick: () => {} },
      ]}

      onPrev={() => setNavTarget('redfort')}
      onNext={() => setNavTarget('taj')}
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

export default KonarkTemple;
