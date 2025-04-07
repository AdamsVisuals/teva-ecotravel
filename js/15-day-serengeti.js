document.addEventListener('DOMContentLoaded', function() {
    // Tab Filtering
    const tabButtons = document.querySelectorAll('.tab-btn');
    const dayCards = document.querySelectorAll('.day-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter day cards
            dayCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-day-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Simple Lightbox for Gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgUrl = this.style.backgroundImage.slice(5, -2);
            const caption = this.querySelector('.gallery-overlay p').textContent;
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imgUrl}" alt="${caption}">
                    <p>${caption}</p>
                    <button class="close-lightbox">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.close-lightbox');
            closeBtn.addEventListener('click', () => {
                lightbox.remove();
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
});