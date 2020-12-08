import gsap from "gsap/dist/gsap.min"


const pars = document.querySelectorAll(".intro p");
gsap.from(pars, {duration: 2, y: 300}).to(pars, {duration: 2, y: 0})
