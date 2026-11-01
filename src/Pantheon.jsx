import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/pantheon in rome background.png';
import Rome from './Rome';
import Forum from './Forum';
import ArcOfConstantine from './ArcOfConstantine';
import Maindashbord from './Maindashbord';
import Egypt from './Egypt';
import ExploreAr from './ExploreAr';
import Romeexplore from './Romeexplore';

const Pantheon = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toEgypt, setToEgypt]     = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'rome')  return <Rome />;
  if (navTarget === 'forum') return <Forum />;
  if (navTarget === 'arc')   return <ArcOfConstantine />;
  if (toIndia)   return <Maindashbord />;
  if (toEgypt)   return <Egypt />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;
  if (explore)   return <Romeexplore onBack={() => setExplore(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: () => setToIndia(true) },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, colonnades of Karnak, and celestial granite hypostyle corridors.', count: '4', onClick: () => setToEgypt(true) },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III • CURRENT', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums under unreinforced concrete domes.', count: '4', onClick: () => {} },
  ];

  return (
    <MuseumPage
      activeWorld="rome"
      worldLabel="Roman Grandeur"
      worldSubtitle="An interactive spatial encounter with the timeless monument of imperial eternity"
      archiveLabel="ROMAN GRANDEUR ARCHIVE • EXHIBIT II/IV"
      exhibitNum={1}
      countryFlag="🇮🇹"
      bgImage={bgImage}

      era="125 CE · ROMAN EMPIRE"
      name="The Pantheon"
      location="Campus Martius · Rome, Italy"
      desc="Best-preserved ancient Roman building. Its unreinforced concrete dome spanning 43 m with a 9-metre oculus has endured for 1,900 years — still the world's largest unreinforced concrete dome."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="CAT. ROM-0125"

      spec1Label="MONUMENT HEIGHT (DOME)"
      spec1Value="43 Metres"
      spec1Chip="CONCRETE ROTUNDA"

      spec2Label="CONSTRUCTED"
      spec2Value="125 CE"
      spec2Chip="HADRIANIC REIGN"

      spec3Label="CONSERVATION STATUS"
      spec3Value="Intact & Active"
      spec3Chip="WORLD HERITAGE"

      spec4Label="SOLAR OCULUS: 9M APERTURE"
      spec4Value="SOLAR SHAFT"

      tabs={[
        { label: 'COLOSSEUM',           active: false, onClick: () => setNavTarget('rome') },
        { label: 'THE PANTHEON',        active: true,  onClick: () => {} },
        { label: 'ROMAN FORUM',         active: false, onClick: () => setNavTarget('forum') },
        { label: 'ARCH OF CONSTANTINE', active: false, onClick: () => setNavTarget('arc') },
      ]}

      onPrev={() => setNavTarget('rome')}
      onNext={() => setNavTarget('forum')}
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

export default Pantheon;
