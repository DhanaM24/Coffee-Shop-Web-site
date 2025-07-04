const { default: Link } = require("antd/es/typography/Link");
const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton= document.querySelector("#menu-open-button");
const menucloseButton= document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click",() =>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
//close menu when the close button is clicked
menucloseButton.addEventListener("click",()=> menuOpenButton.click());

//close menu when the nav Links is clicked
 navLinks.forEach (Link=> {
  Link.addEventListener("click", () =>  menuOpenButton.click());
 });

//initialize Swiper
const swiper = new Swiper('.swiper-wrapper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  grabCursor:true,
  SpaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1  
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});