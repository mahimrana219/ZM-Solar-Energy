import energyWallR5 from '../assets/products/batteries/energy-wall-r5.png';
import energyWallW5 from '../assets/products/batteries/energy-wall-w5.png';
import energyWallT10 from '../assets/products/batteries/energy-wall-t10.png';
import energyWallT11 from '../assets/products/batteries/energy-wall-t11.png';
import fusion12kw from '../assets/products/ongrid/fusion-12kw.jpeg';
import fusion50kw from '../assets/products/ongrid/fusion-50kw.jpeg';
import fusion125kw from '../assets/products/ongrid/fusion-125kw.jpeg';
import solarPanel from '../assets/products/panels/solar-panel.png';

export const PRODUCTS = [
  {
    slug: 'energy-wall-r5',
    category: 'Batteries',
    name: 'Energy Wall R5 Battery 51V-100AH',
    img: energyWallR5,
    tagline: 'Reliable energy storage for everyday home power needs.',
    description:
      'The Energy Wall R5 is a rack-mounted 51.2V lithium-ion battery built for dependable residential backup power. It features intelligent BMS protection, remote monitoring and diagnostics, a smart LCD display, and easy scalability so you can add more capacity as your needs grow.',
    specs: [
      { label: 'Voltage', value: '51.2V' },
      { label: 'Capacity', value: '100AH' },
      { label: 'Battery Type', value: 'Lithium-Ion (LiFePO4)' },
      { label: 'Mounting', value: 'Rack-Mounted' },
      { label: 'Protection', value: 'Intelligent BMS' },
    ],
  },
  {
    slug: 'energy-wall-t5',
    category: 'Batteries',
    name: 'Energy Wall T5 Battery 51V-314AH',
    img: energyWallT10,
    tagline: 'High-capacity storage designed for dependable backup power.',
    description:
      'The Energy Wall T5 is a tower-style, high-capacity lithium-ion battery designed for homes and businesses that need serious backup power during extended load shedding. Its stackable design and built-in BMS make it easy to scale and maintain.',
    specs: [
      { label: 'Voltage', value: '51.2V' },
      { label: 'Capacity', value: '314AH' },
      { label: 'Battery Type', value: 'Lithium-Ion (LiFePO4)' },
      { label: 'Mounting', value: 'Tower / Floor-Standing' },
      { label: 'Protection', value: 'Intelligent BMS' },
    ],
  },
  {
    slug: 'energy-wall-w5',
    category: 'Batteries',
    name: 'Energy Wall W5 Battery 51V-100AH',
    img: energyWallW5,
    tagline: 'Compact and reliable battery storage for residential use.',
    description:
      'The Energy Wall W5 is a compact, wall-mounted lithium battery designed for homes with limited installation space. It delivers the same intelligent BMS protection and remote monitoring as the rest of the Energy Wall series, in a slim wall-mounted form factor.',
    specs: [
      { label: 'Voltage', value: '51.2V' },
      { label: 'Capacity', value: '100AH' },
      { label: 'Battery Type', value: 'Lithium-Ion (LiFePO4)' },
      { label: 'Mounting', value: 'Wall-Mounted' },
      { label: 'Protection', value: 'Intelligent BMS' },
    ],
  },
  {
    slug: 'energy-wall-s5',
    category: 'Batteries',
    name: 'Energy Wall T11 (S-Series) Battery 51.2V-314AH',
    img: energyWallT11,
    tagline: 'Efficient energy storage built for consistent daily performance.',
    description:
      'A 16.076kWh tower battery engineered for consistent, day-to-day performance in hybrid solar systems. Its stackable modules allow multiple units to be paralleled for larger energy storage needs.',
    specs: [
      { label: 'Voltage', value: '51.2V' },
      { label: 'Capacity', value: '314AH' },
      { label: 'Energy', value: '16.076kWh' },
      { label: 'Battery Type', value: 'Lithium-Ion (LiFePO4)' },
      { label: 'Protection', value: 'Intelligent BMS' },
    ],
  },
  {
    slug: 'fusion-ip66-12-15-20kw',
    category: 'On Grid Solar Inverters',
    name: 'Fusion-IP66 12-15-20KW Ongrid',
    img: fusion12kw,
    tagline: 'High-efficiency on-grid inverter designed for reliable solar power generation.',
    description:
      'The Fusion-IP66 series delivers high-efficiency grid-tie performance for residential and small commercial systems. Its IP66-rated weatherproof enclosure allows flexible indoor or outdoor mounting, with built-in smart monitoring for real-time performance tracking.',
    specs: [
      { label: 'Power Range', value: '12KW / 15KW / 20KW' },
      { label: 'Type', value: 'On-Grid (Grid-Tie)' },
      { label: 'Protection Rating', value: 'IP66 (Weatherproof)' },
      { label: 'Monitoring', value: 'Smart App & LCD Display' },
    ],
  },
  {
    slug: 'fusion-ip66-12-80kw',
    category: 'On Grid Solar Inverters',
    name: 'Fusion-IP66 12-30KW-40KW-50KW-80KW Ongrid',
    img: fusion50kw,
    tagline: 'Powerful on-grid solution built for larger solar installations and dependable performance.',
    description:
      'Built for larger residential and commercial installations, this Fusion-IP66 series scales from 30KW up to 80KW. It offers robust three-phase grid-tie performance with the same IP66-rated weatherproof housing and smart monitoring as the rest of the Fusion lineup.',
    specs: [
      { label: 'Power Range', value: '30KW – 80KW' },
      { label: 'Type', value: 'On-Grid (Grid-Tie), 3-Phase' },
      { label: 'Protection Rating', value: 'IP66 (Weatherproof)' },
      { label: 'Monitoring', value: 'Smart App & LCD Display' },
    ],
  },
  {
    slug: 'fusion-ip66-125kw',
    category: 'On Grid Solar Inverters',
    name: 'Fusion-IP66 125KW Ongrid',
    img: fusion125kw,
    tagline: 'High-capacity on-grid inverter for commercial and large-scale solar power systems.',
    description:
      'The Fusion-IP66 125KW is engineered for large commercial and industrial solar installations that demand maximum throughput. It combines heavy-duty three-phase grid-tie conversion with the reliability of an IP66-rated enclosure for long-term outdoor operation.',
    specs: [
      { label: 'Power Rating', value: '125KW' },
      { label: 'Type', value: 'On-Grid (Grid-Tie), 3-Phase' },
      { label: 'Protection Rating', value: 'IP66 (Weatherproof)' },
      { label: 'Application', value: 'Commercial / Industrial' },
    ],
  },
  {
    slug: 'solar-panel',
    category: 'Solar Panels',
    name: 'Solar Panel',
    img: solarPanel,
    tagline: 'High-efficiency solar panels designed for reliable power generation and long-lasting performance.',
    description:
      'Our Tier-1 monocrystalline solar panels use half-cut cell technology for higher efficiency and better performance in partial shading. Backed by a long-term manufacturer warranty, they are built to perform reliably for 25+ years.',
    specs: [
      { label: 'Cell Type', value: 'Mono-Crystalline, Half-Cut' },
      { label: 'Tier', value: 'Tier-1' },
      { label: 'Warranty', value: 'Up to 25 Years Performance' },
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  return PRODUCTS.filter((p) => p.category === category);
}
