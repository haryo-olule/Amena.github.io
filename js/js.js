// Handle menu button toggle functionality for mobile navbar
const btnMenu = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navbar");

btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       900: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   });

});


