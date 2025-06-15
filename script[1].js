let currentIndex = 0;
const slides = document.querySelectorAll('#slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    slide.classList.toggle('inactive', i !== index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Call nextSlide every 3 seconds
setInterval(nextSlide, 3000);

// Initial call to display the first slide
showSlide(currentIndex);
