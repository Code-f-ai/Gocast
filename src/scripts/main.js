import { initSlider } from '@scripts/slider.js';
initSlider('.trending-slider');

// import { setupMenuToggle } from '@scripts/function.js';
// setupMenuToggle();
// import { setupMenuToggle1 } from '@scripts/function.js';
// setupMenuToggle1();

import { setupMenuToggleGeneric } from '@scripts/function.js';
setupMenuToggleGeneric('.nav-menu-show', '.sidebar');
setupMenuToggleGeneric('.icon-show-sidebar', '.sidebar');

import { setupdark } from '@scripts/function.js';
setupdark();