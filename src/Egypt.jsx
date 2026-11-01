import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/great pyramid of giza backgound.png';
import Sphinx from './Sphinx';
import Luxor from './Luxor';
import Simbel from './Simbel';
import Maindashbord from './Maindashbord';
import Rome from './Rome';
import ExploreAr from './ExploreAr';
import Egyptexplore from './Egyptexplore';

const Egypt = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia] = useState(false);
  const [toRome, setToRome] = useState(false);
  const [explore, setExplore] = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'sphinx') return <Sphinx />;
  if (navTarget === 'luxor') return <Luxor />;
  if (navTarget === 'simbel') return <Simbel />;
  if (toIndia) return <Maindashbord />;
  if (toRome) return <Rome />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;
  if (explore) return <Egyptexplore onBack={() => setExplore(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: () => setToIndia(true) },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, sandstone obelisks, and pharaonic gold conservation.', count: '4', onClick: () => { } },
    { id: 'rome', flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums.', count: '4', onClick: () => setToRome(true) },
  ];

  return (
    <MuseumPage
      activeWorld="egypt"
      worldLabel="Egyptian Wonders"
      worldSubtitle="An interactive spatial encounter with the timeless monument of pharaonic eternity"
      archiveLabel="EGYPTIAN WONDERS ARCHIVE • EXHIBIT I/IV"
      exhibitNum={0}
      countryFlag="🇪🇬"
      bgImage={bgImage}

      era="C. 2560 BCE · OLD KINGDOM"
      name="Great Pyramid of Giza"
      location="Giza Plateau, Egypt"
      desc="Oldest of the Seven Wonders and the only one still standing. Built for Pharaoh Khufu using 2.3 million stone blocks. Tallest man-made structure on Earth for 3,800 years."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. EGY-2560"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="138.5 Metres"
      spec1Chip="PHARAONIC APEX"

      spec2Label="CONSTRUCTED"
      spec2Value="2560 BCE"
      spec2Chip="4TH DYNASTY KHUFU"

      spec3Label="CONSERVATION STATUS"
      spec3Value="WONDER"
      spec3Chip="Ancient World Wonder"

      spec4Label="CELESTIAL ALIGNMENT"
      spec4Value="TRUE NORTH (0.05°)"

      tabs={[
        { label: 'GREAT PYRAMID', active: true, onClick: () => { } },
        { label: 'GREAT SPHINX', active: false, onClick: () => setNavTarget('sphinx') },
        { label: 'LUXOR TEMPLE', active: false, onClick: () => setNavTarget('luxor') },
        { label: 'ABU SIMBEL', active: false, onClick: () => setNavTarget('simbel') },
      ]}

      onPrev={() => setNavTarget('simbel')}
      onNext={() => setNavTarget('sphinx')}
      onExploreAR={() => setExplorear(true)}

      wings={wings}
      footerGalleries={[
        { label: 'INDIA GALLERY', active: false, onClick: () => setToIndia(true) },
        { label: 'EGYPT GALLERY', active: true, onClick: () => { } },
        { label: 'ROME GALLERY', active: false, onClick: () => setToRome(true) },
      ]}
    />
  );
};

export default Egypt;
