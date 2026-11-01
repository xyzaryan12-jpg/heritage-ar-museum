import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/luxor temple background.png';
import Egypt from './Egypt';
import Sphinx from './Sphinx';
import Simbel from './Simbel';
import Maindashbord from './Maindashbord';
import Rome from './Rome';
import ExploreAr from './ExploreAr';
import Egyptexplore from './Egyptexplore';

const Luxor = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'egypt')  return <Egypt />;
  if (navTarget === 'sphinx') return <Sphinx />;
  if (navTarget === 'simbel') return <Simbel />;
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
      archiveLabel="EGYPTIAN WONDERS ARCHIVE • EXHIBIT III/IV"
      exhibitNum={2}
      countryFlag="🇪🇬"
      bgImage={bgImage}

      era="C. 1400 BCE · NEW KINGDOM"
      name="Luxor Temple"
      location="Luxor (Thebes), Egypt"
      desc="Not dedicated to a god but to the rejuvenation of kingship. Built by Amenhotep III and Ramesses II, connected to Karnak by a 3 km sphinx-lined ceremonial avenue."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. EGY-1400"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="24 Metres"
      spec1Chip="PYLONS"

      spec2Label="CONSTRUCTED"
      spec2Value="1400 BCE"
      spec2Chip="NEW KINGDOM"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="AVENUE OF SPHINXES"
      spec4Value="3 KM CORRIDOR"

      tabs={[
        { label: 'GREAT PYRAMID', active: false, onClick: () => setNavTarget('egypt') },
        { label: 'GREAT SPHINX',  active: false, onClick: () => setNavTarget('sphinx') },
        { label: 'LUXOR TEMPLE',  active: true,  onClick: () => {} },
        { label: 'ABU SIMBEL',    active: false, onClick: () => setNavTarget('simbel') },
      ]}

      onPrev={() => setNavTarget('sphinx')}
      onNext={() => setNavTarget('simbel')}
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

export default Luxor;
