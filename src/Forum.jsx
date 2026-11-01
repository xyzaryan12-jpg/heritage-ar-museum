import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/roman forum background.png';
import Rome from './Rome';
import Pantheon from './Pantheon';
import ArcOfConstantine from './ArcOfConstantine';
import Maindashbord from './Maindashbord';
import Egypt from './Egypt';
import ExploreAr from './ExploreAr';
import Romeexplore from './Romeexplore';

const Forum = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toEgypt, setToEgypt]     = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'rome')     return <Rome />;
  if (navTarget === 'pantheon') return <Pantheon />;
  if (navTarget === 'arc')      return <ArcOfConstantine />;
  if (toIndia)   return <Maindashbord />;
  if (toEgypt)   return <Egypt />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;
  if (explore)   return <Romeexplore onBack={() => setExplore(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic sanctuaries, monolithic Kailasa stone excavations, and intricate marble masterworks spanning two millennia.', count: '4', onClick: () => setToIndia(true) },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, colonnades of Karnak, and celestial granite hypostyle corridors.', count: '4', onClick: () => setToEgypt(true) },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III • CURRENT', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums under unreinforced concrete domes.', count: '4', onClick: () => {} },
  ];

  return (
    <MuseumPage
      activeWorld="rome"
      worldLabel="Roman Grandeur"
      worldSubtitle="An interactive spatial encounter with the timeless monument of imperial eternity"
      archiveLabel="ROMAN GRANDEUR ARCHIVE • EXHIBIT III/IV"
      exhibitNum={2}
      countryFlag="🇮🇹"
      bgImage={bgImage}

      era="7TH CENTURY BCE · ROMAN REPUBLIC"
      name="Roman Forum"
      location="Rome, Italy"
      desc="Rome's civic and sacred heart for a thousand years. Senators debated, triumphal processions marched, and Julius Caesar was cremated here in 44 BCE after his assassination."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="CAT. ROM-0700"

      spec1Label="MONUMENT AREA"
      spec1Value="Area ~2 ha"
      spec1Chip="EXCAVATED FORUM"

      spec2Label="CONSTRUCTED"
      spec2Value="7th C BCE"
      spec2Chip="ROMAN REPUBLIC"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="WORLD HERITAGE"

      spec4Label="CURIA & ROSTRA: SENATE SEAT"
      spec4Value="SENATE ROSTRA"

      tabs={[
        { label: 'COLOSSEUM',           active: false, onClick: () => setNavTarget('rome') },
        { label: 'PANTHEON',            active: false, onClick: () => setNavTarget('pantheon') },
        { label: 'ROMAN FORUM',         active: true,  onClick: () => {} },
        { label: 'ARCH OF CONSTANTINE', active: false, onClick: () => setNavTarget('arc') },
      ]}

      onPrev={() => setNavTarget('pantheon')}
      onNext={() => setNavTarget('arc')}
      onExploreAR={() => setExplorear(true)}

      wings={wings}
      footerGalleries={[
        { label: 'INDIA GALLERY', active: false, onClick: () => setToIndia(true) },
        { label: 'EGYPT GALLERY', active: false, onClick: () => setToEgypt(true) },
        { label: 'ROME GALLERY',  active: true,  onClick: () => {} },
      ]}
    />
  );
};

export default Forum;
