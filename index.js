document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slider .slide");
  const sliderDots = document.querySelectorAll(".slider-dots .dot");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    sliderDots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  showSlide(currentSlide);
});
