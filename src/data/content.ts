import { ServiceItem, ApplianceType, ReviewItem, GalleryPhoto, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'A1 & Son Appliance Repair',
  tagline: 'Reliable Appliance Repair in Burien & Seattle',
  slogan: 'Fast • Reliable • Affordable',
  phone: '+1 206-850-3969',
  phoneDisplay: '(206) 850-3969',
  phoneRaw: '12068503969',
  email: 'jordanchampoux@yahoo.com',
  address: '115 SW 155th St',
  city: 'Burien',
  state: 'WA',
  zip: '98166',
  fullAddress: '115 SW 155th St, Burien, WA 98166',
  rating: 4.4,
  reviewCount: 30,
  hours: 'Mon - Sat: 7:30 AM - 7:00 PM | Sun: Emergency Dispatch Available',
  serviceRadius: 'Burien, Seattle & King County, WA',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'refrigerator-repair',
    title: 'Refrigerator Repair',
    category: 'Refrigeration',
    description: 'Expert repair for refrigerators that are not cooling properly, leaking water, making unusual humming/clicking noises, freezing food in the fresh food compartment, or failing to cycle.',
    detailedPoints: [
      'Comprehensive cooling loop and compressor diagnostics',
      'Defrost thermostat, heater, and control board replacement',
      'Door seal/gasket alignment and ice-maker line leak repairs',
      'Evaporator fan motor and condenser fan replacements'
    ],
    commonProblems: ['Not cooling', 'Water pooling underneath', 'Clicking noise from back', 'Ice buildup on coils', 'Ice maker not working'],
    image: '/images/services/refrigerator-repair.jpg',
    badge: 'High Priority Service'
  },
  {
    id: 'freezer-repair',
    title: 'Freezer Repair',
    category: 'Refrigeration',
    description: 'Professional freezer troubleshooting and repair for standalone uprights, chest freezers, and built-in units experiencing cooling failures, heavy frost buildup, or temperature fluctuations.',
    detailedPoints: [
      'Precision temperature regulation & thermostat replacement',
      'Hermetic seal and door hinge leak rectification',
      'Frost-free defrost timer and bi-metal sensor replacement',
      'Relay starter, capacitor, and inverter board diagnostics'
    ],
    commonProblems: ['Thawing food', 'Heavy frost on back wall', 'Continuous running motor', 'Clicking starter relay'],
    image: '/images/services/freezer-repair.jpg',
    badge: 'Fast Emergency Response'
  },
  {
    id: 'dryer-repair',
    title: 'Dryer Repair',
    category: 'Laundry',
    description: 'Specialized repair services for gas and electric clothes dryers that do not heat, fail to tumble, refuse to start, take multiple cycles to dry clothes, or make squealing noises.',
    detailedPoints: [
      'Thermal fuse, high-limit thermostat, and heating coil replacement',
      'Gas valve coils, flame sensors, and igniter repairs',
      'Drum rollers, idler pulleys, drive belts, and motor bearings',
      'Exhaust airflow safety inspection and lint duct checks'
    ],
    commonProblems: ['No heat while tumbling', 'Drum will not spin', 'Takes 2-3 cycles to dry', 'Squealing/grinding noise', 'Dryer won’t turn on'],
    image: '/images/services/dryer-repair.webp',
    badge: 'Safety Inspected'
  },
  {
    id: 'oven-repair',
    title: 'Oven Repair',
    category: 'Cooking',
    description: 'Professional electric and gas oven troubleshooting. We fix uneven baking, broken bake/broil elements, faulty electronic clock/timer controls, and defective safety gas igniters.',
    detailedPoints: [
      'Bake & broil element replacements with OEM parts',
      'Gas glow-bar igniter and safety valve testing',
      'Electronic range control (ERC) board calibration',
      'Door hinge springs, latch assemblies, and door glass seal replacement'
    ],
    commonProblems: ['Oven not heating up', 'Gas smell near oven', 'Inaccurate temperature', 'Self-clean latch stuck', 'Uneven baking results'],
    image: '/images/services/oven-repair.jpg'
  },
  {
    id: 'stove-cooktop-repair',
    title: 'Stove & Cooktop Repair',
    category: 'Cooking',
    description: 'Comprehensive repair for gas ranges, ceramic glass cooktops, electric coil tops, and modern induction cooktops with clicking spark modules, dead burners, or erratic temperature switches.',
    detailedPoints: [
      'Gas burner orifice unclogging and spark igniter electrode tuning',
      'Infrared and radiant radiant surface element replacement',
      'Infinite burner rotary switch and potentiometer replacement',
      'Induction power board and touch-sensor glass diagnosis'
    ],
    commonProblems: ['Burner clicking constantly', 'Electric element won’t heat', 'Glass top hot-surface indicator stays on', 'Low gas flame'],
    image: '/images/services/stove-cooktop-repair.jpg'
  },
  {
    id: 'washer-repair',
    title: 'Washer Repair',
    category: 'Laundry',
    description: 'Reliable repair for top-load and front-load washing machines experiencing drainage errors, violent spinning vibrations, water leakages, faulty door locks, or failure to fill.',
    detailedPoints: [
      'Direct-drive motor, drain pump, and pressure sensor repair',
      'Suspension rods, shock absorbers, and balance ring leveling',
      'Water inlet solenoid valve and hot/cold mixing valve replacement',
      'Door boot gasket seal sanitization and leak prevention'
    ],
    commonProblems: ['Washing machine won’t drain', 'Violent shaking on spin cycle', 'Water leaking onto laundry room floor', 'Door locked shut', 'Clothes soaking wet after cycle'],
    image: '/images/services/washer-repair.jpg',
    badge: 'Same-Day Availability'
  },
  {
    id: 'lg-compressor-replacement',
    title: 'LG Refrigerator Compressor Replacement',
    category: 'Specialty',
    description: 'Specialized LG linear compressor replacement service. If your modern LG French-door or side-by-side refrigerator suddenly stopped cooling, we perform authorized sealed-system compressor replacements.',
    detailedPoints: [
      'Linear compressor extraction, brazing, and OEM replacement',
      'Software MCU firmware updating to match updated compressor profiles',
      'Filter drier replacement, nitrogen purge, and vacuum evacuation',
      'R134a / R600a precision weigh-in refrigerant recharging'
    ],
    commonProblems: ['LG linear compressor failure', 'Humming noise then silence', 'Freezer at 40°F and fridge at 60°F', 'LG error codes 22 or 67'],
    image: '/images/services/lg-compressor.jpg',
    badge: 'Certified Specialty Service',
    isSpecialty: true
  }
];

export const APPLIANCE_TYPES: ApplianceType[] = [
  {
    id: 'refrigerators',
    name: 'Refrigerators',
    image: '/images/services/refrigerator-repair.jpg',
    description: 'French door, side-by-side, bottom freezer, top mount, compact, and counter-depth models.',
    features: ['Cooling issues', 'Water leaks', 'Ice makers', 'Thermostat faults']
  },
  {
    id: 'freezers',
    name: 'Freezers',
    image: '/images/services/freezer-repair.jpg',
    description: 'Upright freezers, deep chest freezers, and built-in architectural freezer units.',
    features: ['Excess frost', 'Thawing', 'Starter relays', 'Door gaskets']
  },
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    image: '/images/services/washer-repair.jpg',
    description: 'Front load, top load with agitator, high-efficiency impellers, and all-in-one laundry units.',
    features: ['Drain pumps', 'Spin cycle shake', 'Water valves', 'Door boots']
  },
  {
    id: 'dryers',
    name: 'Dryers',
    image: '/images/services/dryer-repair.webp',
    description: 'Electric and natural gas dryers, ventless heat pump dryers, and stacked laundry sets.',
    features: ['Heating coils', 'Thermal fuses', 'Drive belts', 'Motor pulleys']
  },
  {
    id: 'ovens',
    name: 'Ovens',
    image: '/images/services/oven-repair.jpg',
    description: 'Single and double wall ovens, drop-in ovens, convection models, and microwave combinations.',
    features: ['Bake elements', 'Gas igniters', 'Control boards', 'Temperature calibration']
  },
  {
    id: 'stoves-cooktops',
    name: 'Stoves & Cooktops',
    image: '/images/services/stove-cooktop-repair.jpg',
    description: 'Freestanding ranges, slide-in ranges, dual-fuel stoves, smooth radiant glass, and gas cooktops.',
    features: ['Gas valves', 'Spark electrodes', 'Surface elements', 'Ignition modules']
  },
  {
    id: 'lg-compressors',
    name: 'LG Compressor Replacement',
    image: '/images/services/lg-compressor.jpg',
    description: 'Specialized LG linear compressor diagnostics, software updates, and sealed-system repairs.',
    badge: 'Specialized Service',
    features: ['Linear compressors', 'PCB upgrades', 'Dryer filter swap', 'Vacuum recharge']
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-refrigerator',
    title: 'Refrigerator Repair & Sealed System Diagnostics',
    category: 'refrigeration',
    categoryLabel: 'Refrigerator',
    image: '/images/services/refrigerator-repair.jpg',
    alt: 'Technician performing refrigerator repair and cooling system diagnosis',
    caption: 'Diagnosing cooling loop, evaporator fan, and temperature controls on residential refrigerator.'
  },
  {
    id: 'gal-freezer',
    title: 'Freezer Repair & Temperature Restoration',
    category: 'refrigeration',
    categoryLabel: 'Freezer',
    image: '/images/services/freezer-repair.jpg',
    alt: 'Freezer repair service, defrost troubleshooting and sealed system repair',
    caption: 'Thawing frost buildup, replacing bi-metal defrost thermostats, and starter relay diagnostics.'
  },
  {
    id: 'gal-dryer',
    title: 'Dryer Repair & Heating Element Replacement',
    category: 'laundry',
    categoryLabel: 'Dryer',
    image: '/images/services/dryer-repair.webp',
    alt: 'Clothes dryer repair, electrical diagnostics and heating system inspection',
    caption: 'Replacing burnt thermal fuses, heating elements, drum support rollers, and belt tensioners.'
  },
  {
    id: 'gal-oven',
    title: 'Electric & Gas Oven Repair',
    category: 'cooking',
    categoryLabel: 'Oven',
    image: '/images/services/oven-repair.jpg',
    alt: 'Electric oven bake element and temperature calibration service',
    caption: 'Calibrating electronic oven controls, replacing glow igniters, and installing OEM heating elements.'
  },
  {
    id: 'gal-stove-cooktop',
    title: 'Stove & Cooktop Burner / Ignition Repair',
    category: 'cooking',
    categoryLabel: 'Stove & Cooktop',
    image: '/images/services/stove-cooktop-repair.jpg',
    alt: 'Stove and cooktop repair, spark electrode tuning and radiant element diagnostics',
    caption: 'Spark igniter electrode tuning, infinite rotary switch replacement, and glass top inspection.'
  },
  {
    id: 'gal-washer',
    title: 'Washer Repair & Drain Pump Service',
    category: 'laundry',
    categoryLabel: 'Washer',
    image: '/images/services/washer-repair.jpg',
    alt: 'Washing machine repair technician fixing motor and water inlet valves',
    caption: 'Drain pump unclogging, direct-drive motor servicing, and suspension rod balancing.'
  },
  {
    id: 'gal-lg-compressor',
    title: 'LG Refrigerator Compressor Replacement',
    category: 'specialty',
    categoryLabel: 'LG Specialty',
    image: '/images/services/lg-compressor.jpg',
    alt: 'Specialized LG linear compressor extraction, brazing, and sealed system replacement',
    caption: 'Authorized LG linear compressor replacement, nitrogen brazing, software MCU flash, and refrigerant recharge.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Michael R.',
    location: 'Burien, WA',
    rating: 5,
    date: '2 weeks ago',
    service: 'LG Refrigerator Compressor Replacement',
    text: 'A1 & Son saved our entire week of groceries! Our LG French-door fridge stopped cooling completely on a Friday evening. Jordan was prompt, diagnosed the linear compressor immediately, and had the replacement done properly with honest pricing. Could not recommend them more!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Sarah K.',
    location: 'West Seattle, WA',
    rating: 5,
    date: '1 month ago',
    service: 'Washing Machine Repair',
    text: 'Our front-load washer was violently shaking and refusing to drain right before guests arrived. They scheduled us quickly, showed up on time, replaced the drain pump and suspension rods in under an hour, and left the laundry room spotless. Professional and courteous!',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'David L.',
    location: 'Des Moines, WA',
    rating: 5,
    date: '1 month ago',
    service: 'Dryer Heating Element Repair',
    text: 'Great local business! Called in the morning when our dryer stopped heating. They gave a clear diagnostic quote with no hidden surprises, had the parts on the truck, and had hot laundry running again by the afternoon. Extremely fair pricing.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Elena T.',
    location: 'Seattle (Beacon Hill), WA',
    rating: 5,
    date: '2 months ago',
    service: 'Sub-Zero Refrigerator Service',
    text: 'Finding someone who actually knows how to work on Sub-Zero appliances without charging astronomical dealer rates is tough. A1 & Son knows high-end refrigeration inside and out. Diagnosed the evaporator issue quickly and calibrated the temperatures perfectly.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Robert G.',
    location: 'Normandy Park, WA',
    rating: 4,
    date: '3 months ago',
    service: 'Gas Oven & Stove Repair',
    text: 'Prompt appointment and very courteous service. Fixed our gas oven igniter that was taking 15 minutes to light. Honest assessment and showed me exactly what had worn out. Definitely keeping their number on our fridge magnet!',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Patricia M.',
    location: 'SeaTac, WA',
    rating: 5,
    date: '3 months ago',
    service: 'Freezer Repair',
    text: 'Our upright deep freezer had heavy frost buildup and the alarm was beeping. They responded fast, replaced the defrost timer and sensor, and saved our frozen food. Super dependable local technician.',
    verified: true
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What appliances does A1 & Son Appliance Repair service?',
    answer: 'We repair all major residential household appliances including refrigerators, freezers, washing machines, dryers, ovens, stoves, and cooktops. We work on both gas and electric models from all major brands, including specialized systems like LG linear compressors and Sub-Zero luxury refrigeration.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Do you repair refrigerators?',
    answer: 'Yes! Refrigerator repair is one of our primary specialties. We service French door, side-by-side, bottom freezer, and standard units for issues like not cooling, leaking water, abnormal humming or clicking noises, defrost failures, and faulty ice makers.',
    category: 'Refrigeration'
  },
  {
    id: 'faq-3',
    question: 'Do you repair washing machines and dryers?',
    answer: 'Absolutely. We repair both top-load and front-load washing machines (drainage problems, spin cycle vibration, leaks, filling issues) as well as gas and electric dryers (no heat, failure to tumble, squeaking rollers, long dry times).',
    category: 'Laundry'
  },
  {
    id: 'faq-4',
    question: 'Do you repair ovens and stoves?',
    answer: 'Yes. We repair electric and gas ovens, freestanding ranges, slide-in stoves, and glass or induction cooktops. Common fixes include bake/broil element replacements, gas glow-bar igniters, burner spark modules, and electronic control boards.',
    category: 'Cooking'
  },
  {
    id: 'faq-5',
    question: 'Do you service LG refrigerators and compressor replacements?',
    answer: 'Yes, we provide specialized LG refrigerator compressor replacement. If your LG refrigerator has suffered a linear compressor failure or cooling breakdown, we perform complete sealed-system repairs, software upgrades, and factory-spec recharging.',
    category: 'Refrigeration'
  },
  {
    id: 'faq-6',
    question: 'Do you provide Sub-Zero refrigeration service?',
    answer: 'Yes. We provide professional troubleshooting and maintenance for Sub-Zero built-in, integrated, and column refrigeration systems, handling dual compressors, condenser cleanings, vacuum relief, and microprocessor controls.',
    category: 'Refrigeration'
  },
  {
    id: 'faq-7',
    question: 'How do I schedule an appliance repair with A1 & Son?',
    answer: 'You can schedule service immediately by calling us directly at +1 206-850-3969 or submitting our online "Request Appliance Repair" form on this website. We will confirm your appliance details, issue description, and a convenient appointment window.',
    category: 'Pricing & Service'
  },
  {
    id: 'faq-8',
    question: 'What areas do you serve in Washington?',
    answer: 'We are based at 115 SW 155th St in Burien, WA 98166 and proudly serve Burien, Seattle, West Seattle, Des Moines, Normandy Park, SeaTac, Renton, Tukwila, White Center, Kent, and surrounding King County communities.',
    category: 'General'
  },
  {
    id: 'faq-9',
    question: 'How quickly can I schedule an appointment?',
    answer: 'We offer fast appointment availability, often with same-day or next-day scheduling for urgent appliance issues like leaking washers or non-cooling refrigerators and freezers to prevent food loss and property damage.',
    category: 'Pricing & Service'
  },
  {
    id: 'faq-10',
    question: 'How can I contact A1 & Son Appliance Repair?',
    answer: 'You can reach us by phone at +1 206-850-3969, by email at jordanchampoux@yahoo.com, or visit us / write to 115 SW 155th St, Burien, WA 98166. Click any "Call Now" button on this website for immediate connection!',
    category: 'General'
  }
];

export const SERVICE_AREAS = [
  { name: 'Burien, WA (HQ)', zip: '98166, 98146, 98148', response: 'Same-Day / Immediate', highlight: true },
  { name: 'Seattle, WA', zip: '98101 - 98199', response: 'Same-Day / Next-Day', highlight: true },
  { name: 'West Seattle', zip: '98116, 98126, 98136', response: 'Fast Priority Service', highlight: true },
  { name: 'Normandy Park', zip: '98166, 98198', response: 'Local Hub', highlight: false },
  { name: 'Des Moines', zip: '98198', response: 'Local Hub', highlight: false },
  { name: 'SeaTac', zip: '98158, 98188', response: 'Local Hub', highlight: false },
  { name: 'Tukwila', zip: '98168, 98188', response: 'Standard Dispatch', highlight: false },
  { name: 'Renton', zip: '98055, 98056, 98057', response: 'Standard Dispatch', highlight: false },
  { name: 'White Center', zip: '98106, 98146', response: 'Fast Priority Service', highlight: false },
  { name: 'Kent (North/West)', zip: '98030, 98031, 98032', response: 'Standard Dispatch', highlight: false },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Local Appliance Repair Specialists',
    description: 'Based directly in Burien, WA, providing dedicated and neighborly service to King County homeowners.',
    icon: 'MapPin'
  },
  {
    title: 'Fast & Responsive Service',
    description: 'Same-day and next-day appointment availability so a broken appliance doesn’t disrupt your home.',
    icon: 'Zap'
  },
  {
    title: 'Experienced Technicians',
    description: 'Skilled diagnostics across all major residential brands, from standard units to complex sealed systems.',
    icon: 'Wrench'
  },
  {
    title: 'Honest & Reasonable Pricing',
    description: 'Straightforward diagnostic appraisals and clear upfront quotes before any repair work starts.',
    icon: 'DollarSign'
  },
  {
    title: 'Convenient Appointments',
    description: 'Flexible scheduling windows that work around your busy work and family routine.',
    icon: 'Calendar'
  },
  {
    title: 'Residential Appliance Expertise',
    description: 'Comprehensive solutions for kitchens and laundry rooms, including Sub-Zero and LG linear compressors.',
    icon: 'Home'
  },
  {
    title: 'Multiple Appliance Types Serviced',
    description: 'Refrigerators, freezers, washers, dryers, ovens, stoves, and cooktops all handled in one place.',
    icon: 'Layers'
  },
  {
    title: 'Reliable Repair Solutions',
    description: 'We prioritize long-lasting repairs using high-grade OEM parts rather than temporary quick-fixes.',
    icon: 'ShieldCheck'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Call A1 & Son Appliance Repair at +1 206-850-3969 or submit our simple online repair form to describe your appliance issue.',
    icon: 'PhoneCall'
  },
  {
    step: '02',
    title: 'Schedule Service',
    description: 'We arrange a fast and convenient appointment time that fits your schedule, offering prompt dispatch across Burien & Seattle.',
    icon: 'CalendarCheck'
  },
  {
    step: '03',
    title: 'Appliance Inspection',
    description: 'Our experienced technician inspects your machine, identifies the root problem, and provides a clear, honest repair estimate.',
    icon: 'Search'
  },
  {
    step: '04',
    title: 'Quality Repair',
    description: 'We complete the repair with precision using quality components and verify proper operation before concluding the visit.',
    icon: 'CheckCircle2'
  }
];

export const BRANDS_SERVICED = [
  'Whirlpool', 'LG', 'Samsung', 'Sub-Zero', 'GE', 'Frigidaire', 'KitchenAid', 'Bosch', 'Maytag', 'Kenmore', 'Amana', 'Electrolux', 'Viking', 'Thermador', 'JennAir', 'Wolf'
];
