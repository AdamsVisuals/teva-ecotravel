document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Video slideshow functionality
    const videos = document.querySelectorAll('.video-slideshow video');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Hide all videos
        videos.forEach(video => {
            video.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Update current slide index
        currentSlide = (n + videos.length) % videos.length;
        
        // Show current video and activate corresponding dot
        videos[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Dot click event listeners
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Mobile menu toggle (to be implemented)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', function() {
        // This would toggle a mobile menu - implementation depends on your design
        console.log('Mobile menu clicked - implement functionality here');
    });
});