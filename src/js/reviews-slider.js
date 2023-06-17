let swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: false,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  },
  autoplay: {
    delay: 1500,
  }
});
