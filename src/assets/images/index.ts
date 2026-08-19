import localRefrigerator from './refrigerator_repair_1787117981217.jpg';
import localAboutTechnician from './about_technician_1787117991979.jpg';
import localWasherDryer from './washer_dryer_repair_1787118003287.jpg';
import localOvenStove from './oven_stove_repair_1787118013939.jpg';
import localLogo from './site_logo_1787079462987.jpg';

export const APP_IMAGES = {
  logo: localLogo,
  aboutTechnician: localAboutTechnician,
  aboutTeam: localAboutTechnician,
  
  // Exact URLs requested by the user
  refrigerator: 'https://frostguide.ru/wp-content/uploads/2026/03/fridge-repair_1-scaled.webp',
  freezer: 'https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/11/Complex-Repairs-08-0706140003.jpg',
  dryer: 'https://uaebusinessman.com/wp-content/uploads/2025/09/How-to-Fix-Dryer-With-No-Power-Supply-1024x684.webp',
  oven: 'https://fixappliance.co.uk/wp-content/uploads/2025/08/Electric-Oven-Repair.jpg',
  stove: 'https://www.glbrain.com/images/tools/80/3a/69d3520856cb12f99dd6c2368b083a80_xxbig.jpg',
  washer: 'https://blog.aham.org/wp-content/uploads/2026/03/appliance-repair-1024x683.jpg',
  lgCompressor: 'https://guide-images.cdn.ifixit.com/igi/fDeZjPFBpZXrLuTI.medium',

  // Local fallback images
  fallbacks: {
    refrigerator: localRefrigerator,
    freezer: localRefrigerator,
    dryer: localWasherDryer,
    oven: localOvenStove,
    stove: localOvenStove,
    washer: localWasherDryer,
    lgCompressor: localRefrigerator,
  }
};
