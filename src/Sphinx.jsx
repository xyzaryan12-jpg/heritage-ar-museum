import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/great spinx of giza background.png';
import Egypt from './Egypt';
import Luxor from './Luxor';
import Simbel from './Simbel';
import Rome from './Rome';
import Maindashbord from './Maindashbord';
import ExploreAr from './ExploreAr';
import Egyptexplore from './Egyptexplore';

const Sphinx = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toRome, setToRome]       = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'egypt')  return <Egypt />;
  if (navTarget === 'luxor')  return <Luxor />;
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
      archiveLabel="EGYPTIAN WONDERS ARCHIVE • EXHIBIT II/IV"
      exhibitNum={1}
      countryFlag="🇪🇬"
      bgImage={bgImage}

      era="C. 2500 BCE · OLD KINGDOM"
      name="Great Sphinx"
      location="Giza, Egypt"
      desc="The world's largest monolithic statue — a human-headed lion hewn from a single limestone outcrop. Gazes eastward toward the rising sun, possibly aligned to the vernal equinox."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. EGY-2500"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="20 Metres tall"
      spec1Chip="MONOLITHIC LIMESTONE"

      spec2Label="CONSTRUCTED"
      spec2Value="2500 BCE"
      spec2Chip="4TH DYNASTY KHAFRE"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="ASTRONOMICAL ORIENTATION"
      spec4Value="EASTWARD EQUINOX"

      tabs={[
        { label: 'GREAT PYRAMID', active: false, onClick: () => setNavTarget('egypt') },
        { label: 'GREAT SPHINX',  active: true,  onClick: () => {} },
        { label: 'LUXOR TEMPLE',  active: false, onClick: () => setNavTarget('luxor') },
        { label: 'ABU SIMBEL',    active: false, onClick: () => setNavTarget('simbel') },
      ]}

      onPrev={() => setNavTarget('egypt')}
      onNext={() => setNavTarget('luxor')}
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

export default Sphinx;
