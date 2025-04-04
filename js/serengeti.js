document.addEventListener('DOMContentLoaded', function() {
    // Season indicator functionality
    const seasons = document.querySelectorAll('.season');
    seasons.forEach(season => {
        season.addEventListener('click', function() {
            seasons.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, you would update content based on season
            console.log(`Season changed to: ${this.dataset.season}`);
        });
    });

    // Safari package tabs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetTab = this.dataset.tab;
            document.querySelector(`[data-tab-content="${targetTab}"]`).classList.add('active');
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentTestimonial = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Navigation arrows
    document.querySelector('.slider-prev').addEventListener('click', () => {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) prevIndex = testimonials.length - 1;
        showTestimonial(prevIndex);
    });
    
    document.querySelector('.slider-next').addEventListener('click', () => {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonials.length) nextIndex = 0;
        showTestimonial(nextIndex);
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonials.length) nextIndex = 0;
        showTestimonial(nextIndex);
    }, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            showTestimonial(nextIndex);
        }, 5000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.serengeti-hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});