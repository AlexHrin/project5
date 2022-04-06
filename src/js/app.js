import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
// import Swiper and modules styles

// init Swiper:

const swiper = new Swiper('.swiper', {
   // Optional parameters

   loop: true,
   slidesPerView: 8.5,
   spaceBetween: 20,
   centeredSlides: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});