// import Swiper styles
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);


const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
});
// Fotokampagne = wirbleibensichtbar
// Mocumentary = Viraler Adventskalender

// 1) es kann nur einen geben
// 2) Bis nicht alles gesagt worden ist
// 3) viraler adventskalender
