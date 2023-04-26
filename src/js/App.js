const swiperProjects = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // Default parameters
  slidesPerView: 3.5,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
     spaceBetween: 70,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    764: {
      slidesPerView: 2,
      spaceBetween: 70,

    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 70,

    },

    1440: {
     slidesPerView: 4.5,
     spaceBetween: 70,

   },
  },
});



const swiperDeals = new Swiper(".swiper-deals", {
     // Optional parameters
     direction: "horizontal",
     loop: true,
     // Default parameters
     slidesPerView: 3,
     spaceBetween: 50,
     autoplay: {
       delay: 2500,
     },
     // If we need pagination
     pagination: {
       el: ".swiper-pagination",
     },
   
     // Navigation arrows
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   
     breakpoints: {
       // when window width is >= 0px
       0: {
         slidesPerView: 1,
         spaceBetween: 70,

       },
       // when window width is >= 480px
       480: {
         slidesPerView: 1,
         spaceBetween: 70,

       },
       // when window width is >= 640px
       764: {
         slidesPerView: 2,
         spaceBetween: 70,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 70,
       },
   
     
     },
   });


