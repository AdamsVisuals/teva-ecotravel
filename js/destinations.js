document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const destinationsGrid = document.getElementById('destinations-grid');
    
    if (loadMoreBtn && destinationsGrid) {
        loadMoreBtn.addEventListener('click', function() {
            // Toggle 'show-more' class on the grid container
            destinationsGrid.classList.toggle('show-more');
            
            // Change button text based on state
            if (destinationsGrid.classList.contains('show-more')) {
                loadMoreBtn.textContent = 'Show Less';
            } else {
                loadMoreBtn.textContent = 'Load More Destinations';
                // Scroll to the load more button position
                loadMoreBtn.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});