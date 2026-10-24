import energyWallR5 from '../assets/optimized/energy-wall-r5.webp';
import energyWallW5 from '../assets/products/batteries/energy-wall-w5.png';
import energyWallT10 from '../assets/products/batteries/energy-wall-t10.png';
import energyWallT11 from '../assets/products/batteries/energy-wall-t11.png';
import energyWallS5 from '../assets/optimized/energy-wall-s5.webp';
import fusion12kw from '../assets/products/ongrid/fusion-12kw.jpeg';
import fusion50kw from '../assets/products/ongrid/fusion-50kw.jpeg';
import fusion125kw from '../assets/products/ongrid/fusion-125kw.jpeg';
import solarPanel from '../assets/optimized/solar-panel.webp';
import hyvion6_6kw from '../assets/products/hybrid/hyvion-6.6kw.png';
import hyvion8_6kw from '../assets/products/hybrid/hyvion-8.6kw.png';
import hyvion10_2kw from '../assets/products/hybrid/hyvion-10.2kw.png';
import hyvion15kw from '../assets/products/hybrid/hyvion-15kw.png';
import hyvion20kw from '../assets/products/hybrid/hyvion-20kw.png';
import hyvion60kw from '../assets/products/hybrid/hyvion-60kw.jpeg';

export const CATEGORIES = ['Hybrid Solar Inverters', 'Batteries', 'On Grid Solar Inverters', 'Solar Panels'];

export const PRODUCTS = [
  // ===== Hybrid Solar Inverters =====
  {
    slug: 'hyvion-6-6kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-6.6KW-SPLV',
    price: 'PKR 245,000',
    img: hyvion6_6kw,
    tagline: 'Compact hybrid inverter for everyday residential energy management.',
    description:
      'The HYVION-6.6KW-SPLV is a single-phase hybrid solar inverter built for efficient energy management in homes. It delivers up to 99% output efficiency with smart hybrid technology that manages solar, battery, and grid power together, keeping you backed up during load shedding.',
    specs: [
      { label: 'Rated Power', value: '6.6 kW' },
      { label: 'Type', value: 'Hybrid, Single-Phase' },
      { label: 'MPPT Current', value: '20A' },
      { label: 'Output Efficiency', value: 'Up to 99%' },
      { label: 'Protection', value: 'Built-in AC/DC Surge Protection' },
    ],
  },
  {
    slug: 'hyvion-8-6kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-8.6KW-SPLV',
    price: 'PKR 310,000',
    img: hyvion8_6kw,
    tagline: 'Higher-capacity hybrid inverter for larger homes and small businesses.',
    description:
      'The HYVION-8.6KW-SPLV steps up capacity for larger households and small commercial setups, pairing smart hybrid power management with dependable battery backup and built-in surge protection for Pakistan’s grid conditions.',
    specs: [
      { label: 'Rated Power', value: '8.6 kW' },
      { label: 'Type', value: 'Hybrid, Single-Phase' },
      { label: 'MPPT Current', value: '20A' },
      { label: 'Output Efficiency', value: 'Up to 99%' },
      { label: 'Protection', value: 'Built-in AC/DC Surge Protection' },
    ],
  },
  {
    slug: 'hyvion-10-2kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-10.2KW-SPLV',
    price: 'PKR 400,000',
    img: hyvion10_2kw,
    tagline: 'High-output single-phase hybrid inverter for heavy residential loads.',
    description:
      'Designed for homes with heavier electrical loads, the HYVION-10.2KW-SPLV offers the same smart hybrid technology and backup reliability as the rest of the HYVION series, scaled up for higher continuous output.',
    specs: [
      { label: 'Rated Power', value: '10.2 kW' },
      { label: 'Type', value: 'Hybrid, Single-Phase' },
      { label: 'Output Efficiency', value: 'Up to 99%' },
      { label: 'Protection', value: 'Built-in AC/DC Surge Protection' },
    ],
  },
  {
    slug: 'hyvion-15kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-15KW-3PLV',
    price: 'PKR 625,000',
    img: hyvion15kw,
    tagline: 'Three-phase hybrid inverter for commercial and larger residential systems.',
    description:
      'The HYVION-15KW-3PLV brings three-phase hybrid power to commercial properties and large homes, balancing solar, battery, and grid power intelligently while protecting connected equipment with integrated surge protection.',
    specs: [
      { label: 'Rated Power', value: '15 kW' },
      { label: 'Type', value: 'Hybrid, 3-Phase' },
      { label: 'Output Efficiency', value: 'Up to 99%' },
      { label: 'Protection', value: 'Built-in AC/DC Surge Protection' },
    ],
  },
  {
    slug: 'hyvion-20kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-20KW-3PLV',
    price: 'PKR 750,000',
    img: hyvion20kw,
    tagline: 'High-capacity three-phase hybrid inverter for commercial installations.',
    description:
      'Built for demanding commercial installations, the HYVION-20KW-3PLV delivers robust three-phase hybrid performance with smart energy management, battery-ready architecture, and dependable backup during outages.',
    specs: [
      { label: 'Rated Power', value: '20 kW' },
      { label: 'Type', value: 'Hybrid, 3-Phase' },
      { label: 'Output Efficiency', value: 'Up to 99%' },
      { label: 'Protection', value: 'Built-in AC/DC Surge Protection' },
    ],
  },
  {
    slug: 'hyvion-60kw',
    category: 'Hybrid Solar Inverters',
    name: 'HYVION-60KW-3PHV',
    price: 'PKR 1,565,000',
    img: hyvion60kw,
    tagline: 'Industrial-grade, high-voltage hybrid inverter for large commercial sites.',
    description:
      'The HYVION-60KW-3PHV is engineered for factories, warehouses, and large commercial buildings that need high-voltage performance and reliability. It supports multiple MPPT inputs, integrated surge protection, remote monitoring, and rugged housing built for continuous peak loads.',
    specs: [
      { label: 'Rated Power', value: '60 kW' },
      { label: 'Type', value: 'Hybrid, 3-Phase, High-Voltage' },
      { label: 'Peak Efficiency', value: 'Over 98%' },
      { label: 'Protection', value: 'Type II DC & AC Surge Protection' },
      { label: 'Application', value: 'Commercial / Industrial' },
    ],
  },

  // ===== Batteries =====
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
    slug: 'energy-wall-t11',
    category: 'Batteries',
    name: 'Energy Wall T11 Battery 51.2V-314AH',
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
    slug: 'energy-wall-s5',
    category: 'Batteries',
    name: 'Energy Wall S5 Modular Battery System',
    img: energyWallS5,
    tagline: 'Stackable modular battery system for scalable energy storage.',
    description:
      'The Energy Wall S5 is a modular, rack-stackable lithium battery system that lets you scale storage capacity in steps by adding more modules to the stack. It is built for installations that may need to grow their backup power over time, from homes to small commercial sites.',
    specs: [
      { label: 'Voltage', value: '51.2V' },
      { label: 'Battery Type', value: 'Lithium-Ion (LiFePO4)' },
      { label: 'Design', value: 'Modular, Stackable Rack' },
      { label: 'Protection', value: 'Intelligent BMS' },
    ],
  },

  // ===== On Grid Solar Inverters =====
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

  // ===== Solar Panels =====
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
