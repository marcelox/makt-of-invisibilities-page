// import gsap from "gsap/dist/gsap.min"

// let nav = document.querySelector('#main-header');
// let navHeight = nav.scrollHeight;
// let navItems = document.querySelector('.projects-nav-item');
//
// if (navItems) {
//     function move() {
//         let mainOnTop = navItems.getBoundingClientRect().top - navHeight
//
//         mainOnTop < 0
//             ? nav.classList.add('in-body')
//             : nav.classList.remove('in-body')
//
//         window.requestAnimationFrame((move))
//     }
//
//     window.requestAnimationFrame(move)
// }

let show_animation = true;
const animated_nav_items = document.querySelector('.animated'),
      stop_animation = document.querySelector('.accessible-nav'),
      animation_messages = {
        stop: document.querySelector('.stop-animation'),
        restart: document.querySelector('.restart-animation'),
};

const toggle_animation = () => {
    animated_nav_items.classList.toggle('circles');
    show_animation = !show_animation;
    if (show_animation) {
        animation_messages.restart.classList.remove('visible');
        animation_messages.stop.classList.add('visible');
    } else {
        animation_messages.stop.classList.remove('visible');
        animation_messages.restart.classList.add('visible');
    }
};

stop_animation?.addEventListener('click', toggle_animation);
