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

// 
const slides = document.querySelectorAll('.review-slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function changeSlide(offset) {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + offset + slides.length) % slides.length;
  slides[currentIndex].style.display = 'block';
}

arrowLeft.addEventListener('click', () => {
  changeSlide(-1);
});

arrowRight.addEventListener('click', () => {
  changeSlide(1);
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    changeSlide(-1);
  } else if (event.key === 'ArrowRight') {
    changeSlide(1);
  }
});

// Show the first slide initially
showSlide(currentIndex);


