import React, { useState } from 'react';
import MuseumPage from './MuseumPage';
import bgImage from './assets/colosseum in rome background.png';
import Pantheon from './Pantheon';
import Forum from './Forum';
import ArcOfConstantine from './ArcOfConstantine';
import Maindashbord from './Maindashbord';
import Egypt from './Egypt';
import ExploreAr from './ExploreAr';
import Romeexplore from './Romeexplore';

const Rome = () => {
  const [navTarget, setNavTarget] = useState(null);
  const [toIndia, setToIndia]     = useState(false);
  const [toEgypt, setToEgypt]     = useState(false);
  const [explore, setExplore]     = useState(false);
  const [explorear, setExplorear] = useState(false);

  if (navTarget === 'pantheon') return <Pantheon />;
  if (navTarget === 'forum')    return <Forum />;
  if (navTarget === 'arc')      return <ArcOfConstantine />;
  if (toIndia)   return <Maindashbord />;
  if (toEgypt)   return <Egypt />;
  if (explorear) return <ExploreAr onBack={() => setExplorear(false)} />;
  if (explore)   return <Romeexplore onBack={() => setExplore(false)} />;

  const wings = [
    { id: 'india', flagEmoji: '🇮🇳', wingTag: 'WING I', name: 'India', icon: '🧭', desc: 'Vedic shrines, Mughal marble masterworks, and carved monolithic rock architecture.', count: '4', onClick: () => setToIndia(true) },
    { id: 'egypt', flagEmoji: '🇪🇬', wingTag: 'WING II', name: 'Egypt', icon: '⌛', desc: 'Old Kingdom necropolises, sandstone obelisks, and pharaonic gold conservation.', count: '4', onClick: () => setToEgypt(true) },
    { id: 'rome',  flagEmoji: '🇮🇹', wingTag: 'WING III', name: 'Rome', icon: '🏛', desc: 'Flavian amphitheatres, travertine triumphal arches, and imperial forums.', count: '4', onClick: () => {} },
  ];

  return (
    <MuseumPage
      activeWorld="rome"
      worldLabel="Roman Grandeur"
      worldSubtitle="An interactive spatial encounter with the timeless monument of imperial eternity"
      archiveLabel="ROMAN GRANDEUR ARCHIVE • EXHIBIT I/IV"
      exhibitNum={0}
      countryFlag="🇮🇹"
      bgImage={bgImage}

      era="72–80 CE · ROMAN EMPIRE"
      name="The Colosseum"
      location="Rome, Italy"
      desc="Largest amphitheatre ever constructed. Held 50,000–80,000 spectators. Built with 100,000 cubic metres of travertine limestone — symbol of Imperial Rome's engineering genius and spectacle."
      scanFidelity="AUTHENTICATED SPATIAL SCAN • 0.1MM FIDELITY"
      catNum="Cat. ROM-0072"

      spec1Label="MONUMENT HEIGHT"
      spec1Value="48–50 Metres"
      spec1Chip="TRAVERTINE"

      spec2Label="CONSTRUCTED"
      spec2Value="72 CE"
      spec2Chip="FLAVIAN DYNASTY"

      spec3Label="CONSERVATION STATUS"
      spec3Value="UNESCO"
      spec3Chip="World Heritage"

      spec4Label="SEATING CAPACITY"
      spec4Value="50,000–80,000 SPECTATORS"

      tabs={[
        { label: 'THE COLOSSEUM',       active: true,  onClick: () => {} },
        { label: 'PANTHEON',            active: false, onClick: () => setNavTarget('pantheon') },
        { label: 'ROMAN FORUM',         active: false, onClick: () => setNavTarget('forum') },
        { label: 'ARCH OF CONSTANTINE', active: false, onClick: () => setNavTarget('arc') },
      ]}

      onPrev={() => setNavTarget('arc')}
      onNext={() => setNavTarget('pantheon')}
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

export default Rome;
