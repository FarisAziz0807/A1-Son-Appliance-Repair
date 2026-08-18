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
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    badge: 'Fast Emergency Response'
  },
  {
    id: 'refrigerator-freezer-repair',
    title: 'Refrigerator & Freezer Repair',
    category: 'Refrigeration',
    description: 'Comprehensive combination refrigerator/freezer diagnosis. We tackle dual-evaporator systems, French-door models, side-by-side configurations, and built-in architectural units.',
    detailedPoints: [
      'Dual-zone airflow damper control troubleshooting',
      'Main PCB power module and electronic inverter repair',
      'Internal water filter manifold and dispenser valve fixes',
      'Precision Freon leak detection and factory-grade sealed system work'
    ],
    commonProblems: ['Freezer works but fridge is warm', 'Freezer too cold', 'Water leaking into crisper drawer', 'Error codes on display'],
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    badge: 'Same-Day Availability'
  },
  {
    id: 'washer-dryer-repair',
    title: 'Washer & Dryer Repair',
    category: 'Laundry',
    description: 'Complete all-in-one laundry suite troubleshooting, maintenance, and paired tune-ups for stacked units, commercial-grade home laundry, and smart laundry pairs.',
    detailedPoints: [
      'Comprehensive dual-machine diagnostic visit savings',
      'Stacked tower wiring, vent linkage, and mounting integrity',
      'Drive motor and transmission overhaul',
      'Complete mechanical and electronic safety tune-ups'
    ],
    commonProblems: ['Paired system power dropouts', 'Matching error codes', 'Stacked unit excessive vibration', 'Electrical breaker tripping'],
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80'
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
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    badge: 'Certified Specialty Service',
    isSpecialty: true
  },
  {
    id: 'sub-zero-service',
    title: 'Sub-Zero Refrigeration Service',
    category: 'Specialty',
    description: 'Dedicated professional service for luxury Sub-Zero built-in, integrated, and column refrigeration systems. Expert handling of dual-compressor architectures and precision microprocessor controls.',
    detailedPoints: [
      'Dual-compressor system balancing (dedicated fridge & freezer circuits)',
      'Sub-Zero condenser coil deep cleaning and high-temp vacuum service',
      'Microprocessor controller board diagnostics and sensor testing',
      'Sub-Zero vacuum relief valves, door hinge cams, and magnet seals'
    ],
    commonProblems: ['Service light blinking on Sub-Zero panel', 'Vacuum condenser light on', 'Frost in freezer section', 'Temperature drifting higher'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badge: 'Luxury Appliance Specialist',
    isSpecialty: true
  }
];

export const APPLIANCE_TYPES: ApplianceType[] = [
  {
    id: 'refrigerators',
    name: 'Refrigerators',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
    description: 'French door, side-by-side, bottom freezer, top mount, compact, and counter-depth models.',
    features: ['Cooling issues', 'Water leaks', 'Ice makers', 'Thermostat faults']
  },
  {
    id: 'freezers',
    name: 'Freezers',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    description: 'Upright freezers, deep chest freezers, and built-in architectural freezer units.',
    features: ['Excess frost', 'Thawing', 'Starter relays', 'Door gaskets']
  },
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80',
    description: 'Front load, top load with agitator, high-efficiency impellers, and all-in-one laundry units.',
    features: ['Drain pumps', 'Spin cycle shake', 'Water valves', 'Door boots']
  },
  {
    id: 'dryers',
    name: 'Dryers',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    description: 'Electric and natural gas dryers, ventless heat pump dryers, and stacked laundry sets.',
    features: ['Heating coils', 'Thermal fuses', 'Drive belts', 'Motor pulleys']
  },
  {
    id: 'ovens',
    name: 'Ovens',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    description: 'Single and double wall ovens, drop-in ovens, convection models, and microwave combinations.',
    features: ['Bake elements', 'Gas igniters', 'Control boards', 'Temperature calibration']
  },
  {
    id: 'stoves',
    name: 'Stoves',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80',
    description: 'Freestanding ranges, slide-in ranges, dual-fuel stoves, and commercial-style ranges.',
    features: ['Gas valves', 'Spark electrodes', 'Surface elements', 'Ignition modules']
  },
  {
    id: 'cooktops',
    name: 'Cooktops',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
    description: 'Smooth radiant glass cooktops, gas drop-in burners, and induction magnetic stovetops.',
    features: ['Induction boards', 'Rotary switches', 'Hot indicator', 'Glass top repair']
  },
  {
    id: 'lg-refrigerators',
    name: 'LG Refrigerators',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80',
    description: 'Specialized LG linear compressor diagnostics, software updates, and sealed-system repairs.',
    badge: 'Specialized Service',
    features: ['Linear compressors', 'PCB upgrades', 'Dryer filter swap', 'Vacuum recharge']
  },
  {
    id: 'sub-zero-refrigeration',
    name: 'Sub-Zero Systems',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: 'Precision luxury refrigeration service for all built-in and integrated Sub-Zero series.',
    badge: 'Luxury Brand',
    features: ['Dual compressors', 'Condenser clean', 'Microprocessors', 'Magnetic seals']
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'French Door Refrigerator Repair',
    category: 'refrigeration',
    categoryLabel: 'Refrigerators',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    alt: 'Stainless steel French door refrigerator diagnostic and repair in modern kitchen',
    caption: 'Diagnosing cooling loop and damper control on a stainless French-door refrigerator.'
  },
  {
    id: 'gal-2',
    title: 'LG Linear Compressor Replacement',
    category: 'specialty',
    categoryLabel: 'LG Specialty',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    alt: 'Specialized linear compressor replacement and sealed system brazing on LG refrigerator',
    caption: 'Full sealed-system compressor replacement with nitrogen purge and factory spec recharging.'
  },
  {
    id: 'gal-3',
    title: 'High-Efficiency Front-Load Washer',
    category: 'laundry',
    categoryLabel: 'Washers',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    alt: 'Front loading washing machine undergoing drain pump and shock absorber service',
    caption: 'Drainage pump replacement and suspension balancing on high-efficiency front loader.'
  },
  {
    id: 'gal-4',
    title: 'Electric Dryer Heating Element Fix',
    category: 'laundry',
    categoryLabel: 'Dryers',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    alt: 'Electric clothes dryer thermal fuse and heating coil troubleshooting',
    caption: 'Replacing burnt thermal fuse and heavy-duty heating coil on residential electric dryer.'
  },
  {
    id: 'gal-5',
    title: 'Professional Gas Range Ignition Repair',
    category: 'cooking',
    categoryLabel: 'Ovens & Stoves',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    alt: 'Gas oven and cooktop burner spark module troubleshooting in residential kitchen',
    caption: 'Ignition electrode realignment and gas safety valve calibration on 36-inch range.'
  },
  {
    id: 'gal-6',
    title: 'Sub-Zero Built-in Dual Compressor Service',
    category: 'specialty',
    categoryLabel: 'Sub-Zero Luxury',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Sub-Zero architectural built-in refrigerator maintenance in Burien custom residence',
    caption: 'Condenser vacuuming and dual-compressor microprocessor calibration on luxury Sub-Zero.'
  },
  {
    id: 'gal-7',
    title: 'Modern Cooktop Ceramic Element Repair',
    category: 'cooking',
    categoryLabel: 'Cooktops',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
    alt: 'Ceramic glass cooktop heating element replacement and wiring inspection',
    caption: 'Replacing high-output radiant element and infinite heat control switch.'
  },
  {
    id: 'gal-8',
    title: 'Upright Freezer Temperature Fix',
    category: 'refrigeration',
    categoryLabel: 'Freezers',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    alt: 'Standup upright freezer defrost heater and thermostat service',
    caption: 'Clearing evaporator frost buildup and replacing bi-metal defrost thermostat.'
  },
  {
    id: 'gal-9',
    title: 'Appliance Electrical Circuit Diagnostics',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    alt: 'Multimeter electrical diagnostics on appliance control board and wire harness',
    caption: 'Digital multimeter voltage testing and main PCB trace inspection for intermittent faults.'
  },
  {
    id: 'gal-10',
    title: 'Washing Machine Suspension & Drum Alignment',
    category: 'laundry',
    categoryLabel: 'Washers',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
    alt: 'Top-load washer suspension rods replacement and drum balancing test',
    caption: 'Installing 4 new heavy-duty dampening suspension rods to eliminate high-speed spinning vibration.'
  },
  {
    id: 'gal-11',
    title: 'Commercial-Style Convection Oven Repair',
    category: 'cooking',
    categoryLabel: 'Ovens',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    alt: 'Convection fan motor and hidden bake element service in double oven',
    caption: 'Convection fan motor replacement to restore even heat distribution across oven racks.'
  },
  {
    id: 'gal-12',
    title: 'Dual Evaporator Refrigerator Diagnostics',
    category: 'refrigeration',
    categoryLabel: 'Refrigerators',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
    alt: 'Smart refrigerator electronic sensor check and evaporator coil inspection',
    caption: 'Diagnosing independent fresh-food evaporator fan and digital thermistor sensors.'
  },
  {
    id: 'gal-13',
    title: 'Dryer Drum Roller & Belt Replacement',
    category: 'laundry',
    categoryLabel: 'Dryers',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
    alt: 'Dryer drum maintenance, pulley lubrication, and high-tension drive belt replacement',
    caption: 'Replacing squeaking idler pulley and hardened drum support rollers with OEM parts.'
  },
  {
    id: 'gal-14',
    title: 'Induction Cooktop Power Module Fix',
    category: 'cooking',
    categoryLabel: 'Cooktops',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    alt: 'Induction magnetic cooktop circuit board repair and touch sensor tuning',
    caption: 'High-frequency IGBT power inverter module diagnostic and replacement.'
  },
  {
    id: 'gal-15',
    title: 'Deep Freezer Compressor Start Relay',
    category: 'refrigeration',
    categoryLabel: 'Freezers',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    alt: 'Chest freezer compressor solid-state starter relay and run capacitor replacement',
    caption: 'Replacing burned PTC starter device and capacitor to restore instant compressor ignition.'
  },
  {
    id: 'gal-16',
    title: 'Front-Load Washer Door Lock & Seal Service',
    category: 'laundry',
    categoryLabel: 'Washers',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80',
    alt: 'Washing machine door interlock latch switch and rubber bellows gasket replacement',
    caption: 'Installing new magnetic door lock mechanism and mildew-resistant door boot seal.'
  },
  {
    id: 'gal-17',
    title: 'Sub-Zero Column Wine & Fridge Service',
    category: 'specialty',
    categoryLabel: 'Sub-Zero Luxury',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Sub-Zero integrated wine column and refrigerator dual zone control service',
    caption: 'Precision dual-zone humidity and temperature calibration on Sub-Zero integrated column.'
  },
  {
    id: 'gal-18',
    title: 'Gas Range Glow Igniter Replacement',
    category: 'cooking',
    categoryLabel: 'Ovens & Stoves',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    alt: 'Silicon carbide bake igniter replacement in gas oven',
    caption: 'Testing igniter amperage draw and installing OEM silicon nitride igniter.'
  },
  {
    id: 'gal-19',
    title: 'Precision Refrigerant Leak Detection',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    alt: 'Electronic halogen leak detector inspection on refrigerator copper tubing',
    caption: 'Sniffing out microscopic sealed-system leaks with ultrasonic halogen detection tools.'
  },
  {
    id: 'gal-20',
    title: 'Complete Appliance Maintenance & Tune-Up',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    alt: 'Appliance repair technician testing appliances in residential Burien kitchen',
    caption: 'Full 21-point mechanical and electrical safety verification after repair completion.'
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
