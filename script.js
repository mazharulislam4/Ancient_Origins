const carousel = document.querySelectorAll(".carousel_section .carousel-item");

const images = [
  "./images/Ancient_bg.PNG",
  "./images/carousel-2.jpeg",
  "./images/carousel-3.jpeg",
];

if (carousel?.length > 0) {
  carousel.forEach((item, index) => {
    item.style.background = `url(${images[index]}) center center / cover no-repeat`;
  });
}
