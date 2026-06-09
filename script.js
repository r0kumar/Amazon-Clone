let slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const intervalTime = 5000; // Time in ms for each slide
  const totalSlides = slides.length;

  // Function to show the slide based on the index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }

  // Automatically go to the next slide
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  // Initial display of the first slide
  showSlide(currentIndex);

  // Set the interval for auto-slide
  let sliderInterval = setInterval(nextSlide, intervalTime);