"use strict";

{
  let mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const target = document.getElementById("top");
  const options = {
    threshold: 0,
    rootMargin: "-120px 0px 0px 0px",
  };

  function callback(entries) {
    if (entries[0].isIntersecting) {
      document.querySelector("header").classList.remove("header-color");
    } else {
      document.querySelector("header").classList.add("header-color");
    }
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);
}
