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

  const target = document.querySelector(".fv");
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

  const button = document.querySelector(".toggle_btn");
  const aside = document.querySelector("aside");
  const links = document.querySelectorAll(".sp-ul > li > a");

  button.addEventListener("click", () => {
    aside.classList.toggle("open");
    button.classList.toggle("close");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      aside.classList.toggle("open");
      button.classList.toggle("close");
    });
  });
}
