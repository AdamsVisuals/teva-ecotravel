// booking.js
document.addEventListener('DOMContentLoaded', function() {
    // Form Steps Navigation
    const form = document.getElementById('booking-form');
    const steps = document.querySelectorAll('.form-step');
    const stepButtons = document.querySelectorAll('.next-step, .prev-step');
    const bookingSteps = document.querySelectorAll('.booking-steps .step');
    
    let currentStep = 0;
    
    // Initialize form
    showStep(currentStep);
    
    // Next/previous button clicks
    stepButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('next-step')) {
                if (validateStep(currentStep)) {
                    currentStep++;
                    showStep(currentStep);
                    updateStepIndicator();
                }
            } else {
                currentStep--;
                showStep(currentStep);
                updateStepIndicator();
            }
        });
    });
    
    // Trip selection
    const tripCards = document.querySelectorAll('.trip-card');
    tripCards.forEach(card => {
        card.addEventListener('click', function() {
            tripCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-methods .method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            const methodType = this.dataset.method;
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelector('.credit-card-form').style.display = 
                methodType === 'credit' ? 'block' : 'none';
            document.querySelector('.paypal-form').style.display = 
                methodType === 'paypal' ? 'block' : 'none';
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, you would process payment here
        currentStep++;
        showStep(currentStep);
        updateStepIndicator();
        
        // Scroll to top of confirmation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Helper functions
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
    }
    
    function updateStepIndicator() {
        bookingSteps.forEach((step, index) => {
            step.classList.toggle('active', index <= currentStep);
        });
    }
    
    function validateStep(stepIndex) {
        let isValid = true;
        const currentStep = steps[stepIndex];
        const requiredFields = currentStep.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#ff6b6b';
                isValid = false;
                
                // Remove error when user starts typing
                field.addEventListener('input', function() {
                    this.style.borderColor = '#ddd';
                });
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields');
        }
        
        return isValid;
    }
    
    // Date picker initialization (would use a library like flatpickr in real implementation)
    const dateInput = document.getElementById('dates');
    if (dateInput) {
        dateInput.addEventListener('focus', function() {
            // In a real app, you would initialize a date picker here
            this.type = 'date';
        });
    }
    
    // Credit card formatting
    const cardNumber = document.getElementById('card-number');
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = this.value.replace(/\s+/g, '');
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
            }
            this.value = value;
        });
    }
});