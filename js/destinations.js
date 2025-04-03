document.addEventListener('DOMContentLoaded', function() {
    // Filtering functionality
    const regionFilter = document.getElementById('region-filter');
    const typeFilter = document.getElementById('type-filter');
    const destinationItems = document.querySelectorAll('.destination-item');

    // Filter destinations based on selections
    function filterDestinations() {
        const selectedRegion = regionFilter.value;
        const selectedType = typeFilter.value;

        destinationItems.forEach(item => {
            const itemRegion = item.dataset.region;
            const itemType = item.dataset.type;

            const regionMatch = selectedRegion === 'all' || itemRegion === selectedRegion;
            const typeMatch = selectedType === 'all' || itemType === selectedType;

            if (regionMatch && typeMatch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listeners for filter changes
    regionFilter.addEventListener('change', filterDestinations);
    typeFilter.addEventListener('change', filterDestinations);

    // Search functionality
    const searchInput = document.querySelector('.hero-search input');
    const searchButton = document.querySelector('.hero-search button');

    function searchDestinations() {
        const searchTerm = searchInput.value.toLowerCase();

        destinationItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const location = item.querySelector('.item-meta span:first-child').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm) || location.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        searchDestinations();
    });

    // Allow Enter key to trigger search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchDestinations();
        }
    });

    // Pagination functionality (example - would need backend for full implementation)
    const nextPageBtn = document.querySelector('.pagination button:last-child');
    const prevPageBtn = document.querySelector('.pagination button:first-child');
    const pageNumbers = document.querySelectorAll('.page-numbers a');

    // Mock pagination - in a real implementation, you would fetch new data
    nextPageBtn.addEventListener('click', function() {
        alert('In a real implementation, this would load the next page of results');
        // You would typically make an AJAX call here to fetch the next page
    });

    prevPageBtn.addEventListener('click', function() {
        alert('In a real implementation, this would load the previous page of results');
    });

    pageNumbers.forEach(number => {
        number.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Loading page ' + this.textContent);
            // Highlight selected page
            document.querySelector('.page-numbers .active').classList.remove('active');
            this.classList.add('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Card hover effects - enhance with animation
    const destinationCards = document.querySelectorAll('.destination-card, .destination-item');
    
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
});