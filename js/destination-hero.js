// destinations-hero.js
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    const dotsContainer = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slide-dot');
    
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
    
    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const hero = document.querySelector('.fullscreen-hero');
    hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
    hero.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    
    // Button controls
    nextBtn.addEventListener('click', () => {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.featured-destinations');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.hero-search-bar .btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const location = document.querySelector('.hero-search-bar input[type="text"]').value;
            if (location) {
                alert(`In a full implementation, this would search for: ${location}`);
                // You would typically redirect to search results or filter destinations
            }
        });
    }
});