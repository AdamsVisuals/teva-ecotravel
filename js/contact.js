// Add this to your contact.js file
document.addEventListener('DOMContentLoaded', function() {
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.contact-main');
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }
    
    // Background image parallax effect
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroBackground.style.transform = `scale(${1 + scrollPosition * 0.0005})`;
            heroBackground.style.opacity = `${1 - scrollPosition * 0.002}`;
        });
    }
});