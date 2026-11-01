import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/Abu Simbel temple background.png';
import Egypt from './Egypt';
import Sphinx from './Sphinx';
import Luxor from './Luxor';
import Maindashbord from './Maindashbord';
import Rome from './Rome';
import ExploreAr from './ExploreAr';
import Egyptexplore from './Egyptexplore';

const Simbel = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'egypt')  return <Egypt />;
  if (navTarget === 'sphinx') return <Sphinx />;
  if (navTarget === 'luxor')  return <Luxor />;
  if (toIndia)   return <Maindashbord />;
  if (toRome)    return <Rome />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;
  if (explore)   return <Egyptexplore onBack={() => setExplore(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: () => setToIndia(true) },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, sandstone obelisks, and pharaonic gold conservation.', count: '4', onClick: () => setNavTarget('egypt') },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums.', count: '4', onClick: () => setToRome(true) },
  ];

  return (
    <MuseumPage
      activeWorld="egypt"
      worldLabel="Egyptian Wonders"
      worldSubtitle="An interactive spatial encounter with the timeless monument of pharaonic eternity"
      archiveLabel="EGYPTIAN WONDERS ARCHIVE • EXHIBIT IV/IV"
      exhibitNum={3}
      countryFlag="🇪🇬"
      bgImage={bgImage}

      era="C. 1264 BCE · NEW KINGDOM"
      name="Abu Simbel"
      location="Aswan, Egypt"
      desc="Twin rock-cut temples commissioned by Ramesses II, relocated by UNESCO in 1968 to save them from rising Nile waters. Twice yearly, sunlight penetrates 60 m to illuminate the inner sanctuary."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. EGY-1264"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="20 Metres"
      spec1Chip="COLOSSI"

      spec2Label="CONSTRUCTED"
      spec2Value="1264 BCE"
      spec2Chip="19TH DYNASTY"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="SOLAR PHENOMENON"
      spec4Value="SANCTUARY ILLUMINATION"

      tabs={[
        { label: 'GREAT PYRAMID', active: false, onClick: () => setNavTarget('egypt') },
        { label: 'GREAT SPHINX',  active: false, onClick: () => setNavTarget('sphinx') },
        { label: 'LUXOR TEMPLE',  active: false, onClick: () => setNavTarget('luxor') },
        { label: 'ABU SIMBEL',    active: true,  onClick: () => {} },
      ]}

      onPrev={() => setNavTarget('luxor')}
      onNext={() => setNavTarget('egypt')}
      onExploreAR={() => setExplorear(true)}

      wings={wings}
      footerGalleries={[
        { label: 'INDIA GALLERY', active: false, onClick: () => setToIndia(true) },
        { label: 'EGYPT GALLERY', active: true,  onClick: () => setNavTarget('egypt') },
        { label: 'ROME GALLERY',  active: false, onClick: () => setToRome(true) },
      ]}
    />
  );
};

export default Simbel;
