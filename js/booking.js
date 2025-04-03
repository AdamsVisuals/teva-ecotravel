document.addEventListener('DOMContentLoaded', function() {
    // Guests selector functionality
    const guestsInput = document.getElementById('guests');
    const minusBtn = document.querySelector('.guest-btn.minus');
    const plusBtn = document.querySelector('.guest-btn.plus');
    
    minusBtn.addEventListener('click', function() {
        let value = parseInt(guestsInput.value);
        if (value > 1) {
            guestsInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let value = parseInt(guestsInput.value);
        if (value < 20) {
            guestsInput.value = value + 1;
        }
    });
    
    // Scroll to form when clicking the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const formSection = document.querySelector('.booking-form-section');
    
    scrollIndicator.addEventListener('click', function() {
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Add animation to form when it comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(formSection);
});