// This script handles the functionality of the eco-card slider, including automatic sliding, manual navigation, and dot indicators.
// It also includes a pause on hover feature and smooth scrolling to the active card.
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.eco-card-slider');
  const cards = document.querySelectorAll('.eco-card');
  const dotsContainer = document.querySelector('.eco-slider-dots');
  const prevBtn = document.querySelector('.eco-slider-prev');
  const nextBtn = document.querySelector('.eco-slider-next');
  let currentIndex = 0;
  let slideInterval;
  
  // Create dots
  cards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  // Initialize slider
  function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }
  
  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  }
  
  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlider();
  }
  
  // Update slider state
  function updateSlider() {
    // Update cards
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === currentIndex) {
        card.classList.add('active');
      }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === currentIndex) {
        dot.classList.add('active');
      }
    });
    
    // Scroll to active card
    const activeCard = cards[currentIndex];
    const containerWidth = slider.offsetWidth;
    const cardWidth = activeCard.offsetWidth;
    const scrollPosition = activeCard.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
    
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    // Reset timer
    clearInterval(slideInterval);
    startSlider();
  }
  
  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Start slider
  startSlider();
  
  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', startSlider);
});