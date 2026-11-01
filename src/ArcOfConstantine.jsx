import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/arch of constantine background.png';
import Rome from './Rome';
import Pantheon from './Pantheon';
import Forum from './Forum';
import Maindashbord from './Maindashbord';
import Egypt from './Egypt';
import ExploreAr from './ExploreAr';
import Romeexplore from './Romeexplore';

const ArcOfConstantine = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toEgypt, setToEgypt]     = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'rome')     return <Rome />;
  if (navTarget === 'pantheon') return <Pantheon />;
  if (navTarget === 'forum')    return <Forum />;
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
      archiveLabel="ROMAN GRANDEUR ARCHIVE • EXHIBIT IV/IV"
      exhibitNum={3}
      countryFlag="🇮🇹"
      bgImage={bgImage}

      era="315 CE · LATE ROMAN EMPIRE"
      name="Arch of Constantine"
      location="Via Triumphalis, Regio X Palatium, Rome, Italy"
      desc="Largest surviving Roman triumphal arch, erected by the Senate to commemorate Constantine I's decisive victory at the Battle of Milvian Bridge. Adorned with spolia from earlier Flavian, Hadrianic, and Trajanic monuments, synthesising classical imperial majesty with monumental late-antique relief technique."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. ROM-3115-CONST"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="21 Metres"
      spec1Chip="TRIUMPHAL ARCH"

      spec2Label="CONSTRUCTED"
      spec2Value="315 CE"
      spec2Chip="CONSTANTINIAN ERA"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="INTEGRATED SPOLIA"
      spec4Value="3 Dynasties"

      tabs={[
        { label: 'COLOSSEUM',           active: false, onClick: () => setNavTarget('rome') },
        { label: 'PANTHEON',            active: false, onClick: () => setNavTarget('pantheon') },
        { label: 'ROMAN FORUM',         active: false, onClick: () => setNavTarget('forum') },
        { label: 'ARCH OF CONSTANTINE', active: true,  onClick: () => {} },
      ]}

      onPrev={() => setNavTarget('forum')}
      onNext={() => setNavTarget('rome')}
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

export default ArcOfConstantine;
