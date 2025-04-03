document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Toggle dropdowns
  dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
          e.stopPropagation();
          const parent = this.closest('.mobile-dropdown');
          parent.classList.toggle('active');
          
          // Close other open dropdowns
          document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
              if (dropdown !== parent) {
                  dropdown.classList.remove('active');
              }
          });
      });
  });
  
  // Close menu when clicking a link (except dropdown toggles)
  mobileMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && !e.target.closest('.mobile-dropdown')) {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
      }
  });
});

    // Hero Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (slideIndex + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.gallery-track');
    const items = document.querySelectorAll('.gallery-item');
    const dotsContainer = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let autoScrollInterval;
    const itemWidth = items[0].getBoundingClientRect().width + 20; // Including gap
    
    // Create dots
    items.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Update gallery position
    function updateGallery() {
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex >= items.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = items.length - 1;
      updateGallery();
      resetAutoScroll();
    }
    
    // Next slide
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
    
    // Auto-scroll functionality
    function startAutoScroll() {
      autoScrollInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }
    
    function resetAutoScroll() {
      clearInterval(autoScrollInterval);
      startAutoScroll();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Pause auto-scroll on hover
    track.addEventListener('mouseenter', () => {
      clearInterval(autoScrollInterval);
    });
    
    track.addEventListener('mouseleave', startAutoScroll);
    
    // Start auto-scroll
    startAutoScroll();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      itemWidth = items[0].getBoundingClientRect().width + 20;
      updateGallery();
    });
  });