// Added by Aryan Jaiswal (2026). Monument data used by the QR / place pages.
import taj from './assets/taj mahal background.png'
import qutub from './assets/qutub minar background.png'
import redfort from './assets/red fort background.png'
import konark from './assets/konark sun temple background.png'
import pyramid from './assets/great pyramid of giza backgound.png'
import sphinx from './assets/great spinx of giza background.png'
import luxor from './assets/luxor temple background.png'
import abu from './assets/Abu Simbel temple background.png'
import colosseum from './assets/colosseum in rome background.png'
import pantheon from './assets/pantheon in rome background.png'
import forum from './assets/roman forum background.png'
import arch from './assets/arch of constantine background.png'

export const PLACES = [
  { slug: 'taj-mahal', name: 'Taj Mahal', region: 'India', location: 'Agra, Uttar Pradesh', era: '1632–1653 CE · Mughal Empire', model: 'taj_mahal_model.glb', image: taj,
    blurb: 'A white marble mausoleum on the banks of the Yamuna, built by Emperor Shah Jahan in memory of Mumtaz Mahal. It is celebrated for its perfect symmetry and delicate inlay work.',
    facts: [['Built by', 'Shah Jahan'], ['Height', 'About 73 m'], ['Material', 'White marble'], ['UNESCO', 'World Heritage, 1983']] },
  { slug: 'qutub-minar', name: 'Qutub Minar', region: 'India', location: 'Mehrauli, New Delhi', era: 'Late 12th century · Delhi Sultanate', model: 'qutub minar.glb', image: qutub,
    blurb: 'The world’s tallest brick minaret, begun by Qutb ud-Din Aibak and completed by his successors. Five storeys of fluted and star-shaped sections rise above Delhi.',
    facts: [['Begun by', 'Qutb ud-Din Aibak'], ['Height', '72.5 m'], ['Storeys', 'Five'], ['UNESCO', 'World Heritage, 1993']] },
  { slug: 'red-fort', name: 'Red Fort', region: 'India', location: 'Old Delhi', era: '1638–1648 CE · Mughal Empire', model: 'Red fort.glb', image: redfort,
    blurb: 'The red sandstone palace-fortress of Shah Jahan’s capital, Shahjahanabad. Its walls run for roughly 2.4 km, and the Prime Minister raises the national flag here every Independence Day.',
    facts: [['Built by', 'Shah Jahan'], ['Walls', 'About 2.4 km'], ['Material', 'Red sandstone'], ['UNESCO', 'World Heritage, 2007']] },
  { slug: 'konark-sun-temple', name: 'Konark Sun Temple', region: 'India', location: 'Konark, Odisha', era: '13th century CE · Eastern Ganga dynasty', model: 'Konark Sun Temple.glb', image: konark,
    blurb: 'A temple designed as the colossal chariot of the Sun god, with 24 intricately carved stone wheels and a row of galloping horses. It was built under King Narasimhadeva I.',
    facts: [['Built by', 'Narasimhadeva I'], ['Wheels', '24'], ['Dedicated to', 'Surya, the Sun god'], ['UNESCO', 'World Heritage, 1984']] },
  { slug: 'great-pyramid', name: 'Great Pyramid of Giza', region: 'Egypt', location: 'Giza, Egypt', era: 'c. 2560 BCE · Fourth Dynasty', model: 'the_great_pyramid_of_giza.glb', image: pyramid,
    blurb: 'Built for Pharaoh Khufu, this is the oldest and largest of the Giza pyramids and the only one of the Seven Wonders of the Ancient World still standing.',
    facts: [['Built for', 'Pharaoh Khufu'], ['Original height', 'About 146.6 m'], ['Material', 'Limestone and granite'], ['UNESCO', 'World Heritage, 1979']] },
  { slug: 'great-sphinx', name: 'Great Sphinx', region: 'Egypt', location: 'Giza, Egypt', era: 'c. 2500 BCE · Old Kingdom', model: 'great sphinx.glb', image: sphinx,
    blurb: 'A lion with a human head, carved from the natural limestone bedrock and usually attributed to the reign of Pharaoh Khafre. It guards the Giza plateau.',
    facts: [['Attributed to', 'Pharaoh Khafre'], ['Length', 'About 73 m'], ['Height', 'About 20 m'], ['UNESCO', 'World Heritage, 1979']] },
  { slug: 'luxor-temple', name: 'Luxor Temple', region: 'Egypt', location: 'Luxor (ancient Thebes)', era: 'c. 1400 BCE · New Kingdom', model: 'Luxor Temple.glb', image: luxor,
    blurb: 'Founded under Amenhotep III and extended by Ramesses II, this temple was dedicated to Amun, Mut and Khonsu. An avenue of sphinxes once linked it to Karnak.',
    facts: [['Founded by', 'Amenhotep III'], ['Extended by', 'Ramesses II'], ['Dedicated to', 'Amun, Mut and Khonsu'], ['UNESCO', 'Ancient Thebes, 1979']] },
  { slug: 'abu-simbel', name: 'Abu Simbel', region: 'Egypt', location: 'Aswan region, southern Egypt', era: 'c. 1264 BCE · Ramesses II', model: 'abu simbel.glb', image: abu,
    blurb: 'Two rock-cut temples guarded by four colossal statues of Ramesses II. In the 1960s the whole complex was cut apart and moved to higher ground to save it from the rising waters of Lake Nasser.',
    facts: [['Built by', 'Ramesses II'], ['Statues', 'Four, about 20 m tall'], ['Moved', '1960s, to higher ground'], ['UNESCO', 'Nubian Monuments, 1979']] },
  { slug: 'colosseum', name: 'The Colosseum', region: 'Rome', location: 'Rome, Italy', era: '70–80 CE · Flavian dynasty', model: 'COLLOSIUM.glb', image: colosseum,
    blurb: 'The largest amphitheatre of the Roman world, begun under Emperor Vespasian and opened under Titus. It hosted gladiator contests and public spectacles for crowds of around 50,000.',
    facts: [['Begun by', 'Vespasian'], ['Opened under', 'Titus, 80 CE'], ['Capacity', 'Around 50,000'], ['UNESCO', 'Historic Centre of Rome, 1980']] },
  { slug: 'pantheon', name: 'The Pantheon', region: 'Rome', location: 'Rome, Italy', era: 'c. 126 CE · Emperor Hadrian', model: 'patheon.glb', image: pantheon,
    blurb: 'A temple to all the gods, rebuilt under Hadrian. Its dome, 43.3 m across, is still the largest unreinforced concrete dome in the world, lit by a single open oculus.',
    facts: [['Rebuilt by', 'Hadrian'], ['Dome span', '43.3 m'], ['Oculus', 'About 8.2 m wide'], ['UNESCO', 'Historic Centre of Rome, 1980']] },
  { slug: 'roman-forum', name: 'Roman Forum', region: 'Rome', location: 'Rome, Italy', era: 'Centre of Roman public life for centuries', model: null, image: forum,
    blurb: 'The heart of ancient Rome, where citizens gathered for elections, trials, religious ceremonies and triumphal processions, surrounded by temples and basilicas.',
    facts: [['Used for', 'Politics, law and ceremony'], ['Along', 'The Via Sacra'], ['Era', 'Republic and Empire'], ['UNESCO', 'Historic Centre of Rome, 1980']] },
  { slug: 'arch-of-constantine', name: 'Arch of Constantine', region: 'Rome', location: 'Rome, Italy', era: '315 CE · Late Empire', model: null, image: arch,
    blurb: 'A triumphal arch dedicated in 315 CE to celebrate Constantine’s victory over Maxentius at the Milvian Bridge in 312 CE. It reuses sculpture from earlier imperial monuments.',
    facts: [['Dedicated', '315 CE'], ['Height', 'About 21 m'], ['Width', 'About 25.9 m'], ['UNESCO', 'Historic Centre of Rome, 1980']] },
]
export const placeBySlug = s => PLACES.find(p => p.slug === s)
export const modelUrl = p => (p.model ? encodeURI('/models/' + p.model) : null)
export const visited = () => { try { return JSON.parse(localStorage.getItem('visited') || '[]') } catch { return [] } }
export const markVisited = slug => { try { const v = new Set(visited()); v.add(slug); localStorage.setItem('visited', JSON.stringify([...v])) } catch { /* private mode */ } }
