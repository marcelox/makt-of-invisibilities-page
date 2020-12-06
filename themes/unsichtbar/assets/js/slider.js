// import Swiper styles
import Swiper from "swiper";

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

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
// Fotokampagne = wirbleibensichtbar
// Mocumentary = Viraler Adventskalender

// 1) es kann nur einen geben
// 2) Bis nicht alles gesagt worden ist
// 3) viraler adventskalender
