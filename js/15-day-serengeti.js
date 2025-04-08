document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    const map = L.map('safari-map').setView([-2.3333, 34.8333], 7);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add markers for safari locations
    const locations = [
        { name: "Arusha", coords: [-3.3869, 36.6830] },
        { name: "Tarangire", coords: [-3.8333, 36.0000] },
        { name: "Serengeti", coords: [-2.3333, 34.8333] },
        { name: "Ngorongoro", coords: [-3.1667, 35.5833] }
    ];
    
    locations.forEach(loc => {
        L.marker(loc.coords).addTo(map)
            .bindPopup(`<b>${loc.name}</b><br>Part of your safari itinerary`);
    });
    
    // Add a rough path between locations
    const route = locations.map(loc => loc.coords);
    L.polyline(route, {color: '#588157'}).addTo(map);
    
    // Day expand/collapse functionality
    const dayHeaders = document.querySelectorAll('.day-header');
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    
    dayHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-day');
            
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                toggleBtn.textContent = '+';
            } else {
                content.classList.add('active');
                toggleBtn.textContent = '-';
            }
        });
    });
    
    expandAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.add('active');
            content.previousElementSibling.querySelector('.toggle-day').textContent = '-';
        });
    });
    
    collapseAllBtn.addEventListener('click', function() {
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.remove('active');
            content.previousElementSibling.querySelector('.toggle-day').textContent = '+';
        });
    });
    
    // Itinerary length selector functionality
    const itinerarySelector = document.getElementById('itinerary-length');
    itinerarySelector.addEventListener('change', function() {
        alert(`You've selected the ${this.value}-day itinerary. This is a demo - in a real implementation, this would load the appropriate itinerary.`);
    });
});

// Enhanced Sidebar Toggle Functionality
const safariSidebar = document.querySelector('.safari-sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

// Toggle sidebar
sidebarToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  safariSidebar.classList.toggle('collapsed');
  
  // Store state in localStorage
  const isCollapsed = safariSidebar.classList.contains('collapsed');
  localStorage.setItem('sidebarCollapsed', isCollapsed);
});

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
  if (!safariSidebar.contains(e.target)) {
    safariSidebar.classList.add('collapsed');
    localStorage.setItem('sidebarCollapsed', true);
  }
});

// Check localStorage for saved state on page load
document.addEventListener('DOMContentLoaded', function() {
  const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  if (isCollapsed) {
    safariSidebar.classList.add('collapsed');
  }
});

// Add animation delay to menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 50}ms`;
});