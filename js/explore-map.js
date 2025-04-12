// Explore Map component for TRAVEL YATRA
// This file implements a Google Maps-like interface for exploring destinations

// Store for featured destinations
const featuredDestinations = [
    {
        id: 1,
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        description: "One of the seven wonders of the world, the Taj Mahal is a symbol of eternal love.",
        image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.8,
        category: "Historical",
        coordinates: { lat: 27.1751, lng: 78.0421 }
    },
    {
        id: 2,
        name: "Jaipur City Palace",
        location: "Jaipur, Rajasthan",
        description: "A stunning blend of Rajasthani and Mughal architecture in the heart of the Pink City.",
        image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.6,
        category: "Historical",
        coordinates: { lat: 26.9255, lng: 75.8236 }
    },
    {
        id: 3,
        name: "Varanasi Ghats",
        location: "Varanasi, Uttar Pradesh",
        description: "The spiritual heart of India with ancient rituals performed on the banks of the Ganges.",
        image: "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.5,
        category: "Spiritual",
        coordinates: { lat: 25.3176, lng: 83.0130 }
    },
    {
        id: 4,
        name: "Goa Beaches",
        location: "Goa",
        description: "Pristine beaches, vibrant nightlife, and Portuguese-influenced culture.",
        image: "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.7,
        category: "Beach",
        coordinates: { lat: 15.2993, lng: 74.1240 }
    },
    {
        id: 5,
        name: "Darjeeling",
        location: "West Bengal",
        description: "Famous for its tea plantations, stunning views of the Himalayas, and the Darjeeling Himalayan Railway.",
        image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.7,
        category: "Hill Station",
        coordinates: { lat: 27.0410, lng: 88.2663 }
    },
    {
        id: 6,
        name: "Mysore Palace",
        location: "Mysore, Karnataka",
        description: "A historical palace known for its Indo-Saracenic style of architecture and spectacular light displays.",
        image: "https://images.pexels.com/photos/12592106/pexels-photo-12592106.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.5,
        category: "Historical",
        coordinates: { lat: 12.3052, lng: 76.6552 }
    },
    {
        id: 7,
        name: "Rann of Kutch",
        location: "Gujarat",
        description: "One of the largest salt deserts in the world, known for its stunning white landscape.",
        image: "https://images.pexels.com/photos/13276861/pexels-photo-13276861.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.9,
        category: "Natural",
        coordinates: { lat: 23.8348, lng: 69.8350 }
    },
    {
        id: 8,
        name: "Backwaters of Kerala",
        location: "Kerala",
        description: "Serene network of canals, lakes, and lagoons parallel to the Arabian Sea coast.",
        image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1350",
        rating: 4.9,
        category: "Natural",
        coordinates: { lat: 9.4981, lng: 76.3388 }
    }
];

// Global variables
let map;
let markers = [];
let infoWindow;
let activeInfoWindow;
let currentFilter = 'all';
let directionsRenderer;
let directionsService;
let userLocation = null;
let currentRoute = null;
let searchedStartLocation = null;
let directionsMarkers = [];

// Create and show the explore map modal
function showExploreMap() {
    // Create modal container if it doesn't exist
    let modalContainer = document.getElementById('explore-map-modal');
    
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'explore-map-modal';
        modalContainer.className = 'fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex';
        document.body.appendChild(modalContainer);
    }
    
    // Create modal content
    const modalContent = `
        <div class="relative bg-white w-full max-w-7xl mx-auto my-8 rounded-lg shadow-2xl overflow-hidden flex flex-col h-5/6">
            <!-- Modal Header -->
            <div class="bg-primary text-white px-6 py-4 flex justify-between items-center">
                <h3 class="text-xl font-bold">Explore Featured Destinations</h3>
                <button id="close-explore-map" class="text-white hover:text-gray-200">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- Modal Body -->
            <div class="flex flex-col md:flex-row h-full">
                <!-- Left Panel - Destinations List -->
                <div class="w-full md:w-1/3 bg-gray-50 overflow-y-auto p-4">
                    <!-- Search and Filters -->
                    <div class="mb-4">
                        <div class="relative">
                            <input type="text" id="destination-search" placeholder="Search destinations..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                    </div>
                    
                    <!-- Category Filters -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        <button class="category-filter bg-primary text-white px-3 py-1 rounded-full text-sm" data-category="all">All</button>
                        <button class="category-filter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-category="Historical">Historical</button>
                        <button class="category-filter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-category="Spiritual">Spiritual</button>
                        <button class="category-filter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-category="Beach">Beach</button>
                        <button class="category-filter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-category="Hill Station">Hill Station</button>
                        <button class="category-filter bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-category="Natural">Natural</button>
                    </div>
                    
                    <!-- Destinations List -->
                    <div id="destinations-list" class="space-y-4">
                        ${featuredDestinations.map(destination => `
                            <div class="destination-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" data-id="${destination.id}" data-category="${destination.category}">
                                <div class="relative h-32 bg-cover bg-center" style="background-image: url('${destination.image}');">
                                    <div class="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 text-sm rounded-tl-md">
                                        <i class="fas fa-star text-yellow-300 mr-1"></i> ${destination.rating}
                                    </div>
                                </div>
                                <div class="p-4">
                                    <h4 class="font-bold text-lg">${destination.name}</h4>
                                    <p class="text-sm text-gray-600 mb-2">
                                        <i class="fas fa-map-marker-alt text-primary mr-1"></i> ${destination.location}
                                    </p>
                                    <p class="text-sm text-gray-700 line-clamp-2">${destination.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Right Panel - Map -->
                <div class="w-full md:w-2/3 h-full relative">
                    <!-- Interactive Map -->
                    <div id="explore-map" class="w-full h-full"></div>
                    
                    <!-- Destination Details Panel (initially hidden) -->
                    <div id="destination-details" class="hidden absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-md p-4 max-h-1/2 overflow-y-auto">
                        <!-- Content will be dynamically populated -->
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modalContainer.innerHTML = modalContent;
    
    // Add event listeners
    initExploreMapEvents();
    
    // Initialize the map
    initMap();
}

// Initialize event listeners for the explore map
function initExploreMapEvents() {
    // Close button
    const closeButton = document.getElementById('close-explore-map');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modalContainer = document.getElementById('explore-map-modal');
            if (modalContainer) {
                modalContainer.remove();
            }
        });
    }
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modalContainer = document.getElementById('explore-map-modal');
            if (modalContainer) {
                modalContainer.remove();
            }
        }
    });
    
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-filter');
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                // Filter destinations
                const category = this.getAttribute('data-category');
                currentFilter = category;
                filterDestinations(category);
            });
        });
    }
    
    // Destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    if (destinationCards.length > 0) {
        destinationCards.forEach(card => {
            card.addEventListener('click', function() {
                // Highlight selected card
                destinationCards.forEach(c => c.classList.remove('ring-2', 'ring-primary'));
                this.classList.add('ring-2', 'ring-primary');
                
                // Show destination details
                const destinationId = parseInt(this.getAttribute('data-id'));
                showDestinationDetails(destinationId);
            });
        });
    }
    
    // Search input
    const searchInput = document.getElementById('destination-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchQuery = this.value.toLowerCase().trim();
            searchDestinations(searchQuery);
        });
    }
}

// Initialize the map
function initMap() {
    // Create map
    map = L.map('explore-map', {
        center: [20.5937, 78.9629], // Center of India
        zoom: 5,
        zoomControl: false // We'll add zoom control in a custom position
    });
    
    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add zoom control to the top-right corner
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    // Add back button (top-left corner)
    const backButton = L.control({position: 'topleft'});
    backButton.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'back-button');
        div.innerHTML = '<button class="bg-white px-3 py-2 rounded-lg shadow-md flex items-center"><i class="fas fa-arrow-left mr-2"></i> Back</button>';
        div.title = 'Go Back';
        
        div.onclick = function() {
            // If in fullscreen mode, exit it first
            const mapContainer = document.getElementById('explore-map');
            if (mapContainer.classList.contains('explore-map-fullscreen')) {
                mapContainer.classList.remove('explore-map-fullscreen');
                const fullscreenToggle = document.querySelector('.fullscreen-toggle');
                if (fullscreenToggle) {
                    fullscreenToggle.innerHTML = '<i class="fas fa-expand"></i>';
                }
            }
            
            // Clear any routes
            clearDirections();
            
            // Show the destination list again
            const destinationList = document.getElementById('destinations-list');
            if (destinationList) {
                destinationList.classList.remove('hidden');
            }
            
            // Show the filter controls
            const filterControls = document.querySelector('.category-filter').parentElement;
            if (filterControls) {
                filterControls.classList.remove('hidden');
            }
            
            // Hide any destination details panel
            const detailsPanel = document.getElementById('destination-details');
            if (detailsPanel) {
                detailsPanel.classList.add('hidden');
            }
            
            // Remove any route messages
            const routeMessages = document.querySelectorAll('.route-message');
            routeMessages.forEach(message => message.remove());
            
            // Reset the map view to show all of India
            map.setView([20.5937, 78.9629], 5);
            
            // Show all destination markers
            addDestinationMarkers();
        };
        
        return div;
    };
    backButton.addTo(map);
    
    // Add fullscreen toggle button
    const fullscreenButton = L.control({position: 'topright'});
    fullscreenButton.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'fullscreen-toggle');
        div.innerHTML = '<i class="fas fa-expand"></i>';
        div.title = 'Toggle Fullscreen';
        
        div.onclick = function() {
            const mapContainer = document.getElementById('explore-map');
            if (mapContainer.classList.contains('explore-map-fullscreen')) {
                // Exit fullscreen
                mapContainer.classList.remove('explore-map-fullscreen');
                div.innerHTML = '<i class="fas fa-expand"></i>';
                div.title = 'Enter Fullscreen';
            } else {
                // Enter fullscreen
                mapContainer.classList.add('explore-map-fullscreen');
                div.innerHTML = '<i class="fas fa-compress"></i>';
                div.title = 'Exit Fullscreen';
            }
            // Resize map after toggling fullscreen
            setTimeout(() => {
                map.invalidateSize();
            }, 300);
        };
        
        return div;
    };
    fullscreenButton.addTo(map);
    
    // Add custom controls container
    map.customControls = L.control({position: 'bottomright'});
    map.customControls.onAdd = function(map) {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        
        // My location button
        const myLocationButton = L.DomUtil.create('a', 'my-location-button', container);
        myLocationButton.href = '#';
        myLocationButton.title = 'My Location';
        myLocationButton.innerHTML = '<i class="fas fa-location-arrow"></i>';
        myLocationButton.style.display = 'flex';
        myLocationButton.style.alignItems = 'center';
        myLocationButton.style.justifyContent = 'center';
        myLocationButton.style.width = '30px';
        myLocationButton.style.height = '30px';
        
        L.DomEvent.on(myLocationButton, 'click', function(e) {
            L.DomEvent.preventDefault(e);
            getUserLocation();
        });
        
        // Clear routes button (initially hidden)
        const clearRoutesButton = L.DomUtil.create('a', 'clear-routes-button', container);
        clearRoutesButton.href = '#';
        clearRoutesButton.title = 'Clear Routes';
        clearRoutesButton.innerHTML = '<i class="fas fa-times"></i>';
        clearRoutesButton.style.display = 'none';
        clearRoutesButton.style.alignItems = 'center';
        clearRoutesButton.style.justifyContent = 'center';
        clearRoutesButton.style.width = '30px';
        clearRoutesButton.style.height = '30px';
        
        L.DomEvent.on(clearRoutesButton, 'click', function(e) {
            L.DomEvent.preventDefault(e);
            clearDirections();
        });
        
        // Store references to buttons
        container.myLocationButton = myLocationButton;
        container.clearRoutesButton = clearRoutesButton;
        
        return container;
    };
    map.customControls.addTo(map);
    
    // Initialize routing control (but don't add to map yet)
    directionsRenderer = L.Routing.control({
        waypoints: [],
        routeWhileDragging: true,
        showAlternatives: true,
        altLineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: '#6366F1', opacity: 0.6, weight: 6},
                {color: 'white', opacity: 0.5, weight: 2}
            ]
        },
        lineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: '#3B82F6', opacity: 0.8, weight: 6},
                {color: 'white', opacity: 0.8, weight: 2}
            ]
        }
    });
    
    // Add markers for featured destinations
    addDestinationMarkers();
    
    // Try to get user location
    getUserLocation();
}

// Add CSS for map markers and animations
const mapStyle = document.createElement('style');
mapStyle.textContent = `
    .marker-pin {
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        background: #c30b82;
        position: absolute;
        transform: rotate(-45deg);
        left: 50%;
        top: 50%;
        margin: -15px 0 0 -15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .marker-pin::after {
        content: '';
        width: 24px;
        height: 24px;
        margin: 3px 0 0 3px;
        background: #fff;
        position: absolute;
        border-radius: 50%;
    }
    
    .marker-pin i {
        transform: rotate(45deg);
        z-index: 1;
        font-size: 16px;
    }
    
    .marker-pin-blue {
        background: #3B82F6;
    }
    
    .marker-pin-red {
        background: #EF4444;
    }
    
    .pulse {
        background: rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        height: 14px;
        width: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -7px 0 0 -7px;
        transform: rotateX(55deg);
        z-index: -1;
    }
    
    .pulse:after {
        content: "";
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        margin: -13px 0 0 -13px;
        animation: pulsate 1.5s ease-out;
        animation-iteration-count: infinite;
        opacity: 0;
        box-shadow: 0 0 1px 2px #3B82F6;
        animation-delay: 1s;
    }
    
    @keyframes pulsate {
        0% {
            transform: scale(0.1, 0.1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1.2, 1.2);
            opacity: 0;
        }
    }
    
    .spinner {
        border: 3px solid rgba(0, 0, 0, 0.1);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border-left-color: #3B82F6;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    .explore-map-fullscreen {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 9999 !important;
    }
    
    .fullscreen-toggle {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: white;
        border: none;
        border-radius: 4px;
        padding: 6px 10px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.4);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .fullscreen-toggle i {
        font-size: 16px;
    }
    
    .back-button {
        margin: 10px;
        z-index: 1000;
    }
    
    .back-button button {
        transition: all 0.2s ease;
        font-weight: 500;
        border: 1px solid #e5e7eb;
    }
    
    .back-button button:hover {
        background-color: #f3f4f6;
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .back-button button:active {
        transform: translateY(0);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
`;
document.head.appendChild(mapStyle);

// Add markers for featured destinations
function addDestinationMarkers() {
    // Clear existing markers
    if (markers.length > 0) {
        markers.forEach(marker => {
            map.removeLayer(marker);
        });
        markers = [];
    }
    
    // Add markers for destinations
    featuredDestinations.forEach(destination => {
        if (currentFilter === 'all' || destination.category === currentFilter) {
            // Create custom icon
            const customIcon = L.divIcon({
                className: 'custom-map-marker',
                html: `<div class="marker-pin marker-pin-blue">
                          <i class="fas fa-map-marker-alt"></i>
                       </div>`,
                iconSize: [30, 42],
                iconAnchor: [15, 42],
                popupAnchor: [0, -42]
            });
            
            // Create marker
            const marker = L.marker([destination.coordinates.lat, destination.coordinates.lng], {
                icon: customIcon,
                title: destination.name
            }).addTo(map);
            
            // Add popup
            marker.bindPopup(`
                <div class="text-center">
                    <h3 class="font-bold">${destination.name}</h3>
                    <p class="text-sm">${destination.location}</p>
                    <button class="view-destination-btn bg-primary text-white px-2 py-1 rounded text-xs mt-2" data-id="${destination.id}">View Details</button>
                </div>
            `);
            
            // Add click event
            marker.on('click', function() {
                // Highlight the corresponding card in the list
                const destinationCards = document.querySelectorAll('.destination-card');
                destinationCards.forEach(card => {
                    if (parseInt(card.getAttribute('data-id')) === destination.id) {
                        card.classList.add('ring-2', 'ring-primary');
                        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    } else {
                        card.classList.remove('ring-2', 'ring-primary');
                    }
                });
                
                // Add click event to the view details button in popup
                setTimeout(() => {
                    const viewBtn = document.querySelector(`.view-destination-btn[data-id="${destination.id}"]`);
                    if (viewBtn) {
                        viewBtn.addEventListener('click', function() {
                            showDestinationDetails(destination.id);
                        });
                    }
                }, 100);
            });
            
            markers.push(marker);
        }
    });
    
    // If we have markers, fit the map to show all markers
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Filter destinations by category
function filterDestinations(category) {
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update the map markers
    if (map) {
        addDestinationMarkers();
    }
}

// Search destinations
function searchDestinations(query) {
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const location = card.querySelector('p').textContent.toLowerCase();
        const description = card.querySelectorAll('p')[1].textContent.toLowerCase();
        
        if (name.includes(query) || location.includes(query) || description.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Filter markers on map based on search
    if (map) {
        markers.forEach((marker, index) => {
            const destination = featuredDestinations[index];
            const isVisible = 
                destination.name.toLowerCase().includes(query) || 
                destination.location.toLowerCase().includes(query) || 
                destination.description.toLowerCase().includes(query);
            
            if (isVisible) {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map);
                }
            } else {
                if (map.hasLayer(marker)) {
                    map.removeLayer(marker);
                }
            }
        });
    }
}

// Show destination details
function showDestinationDetails(destinationId) {
    const destination = featuredDestinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    const detailsPanel = document.getElementById('destination-details');
    if (!detailsPanel) return;
    
    // Show the panel
    detailsPanel.classList.remove('hidden');
    
    // Populate with destination details
    detailsPanel.innerHTML = `
        <div class="flex flex-col md:flex-row items-start">
            <div class="w-full md:w-1/3 pr-0 md:pr-4 mb-4 md:mb-0">
                <img src="${destination.image}" alt="${destination.name}" class="w-full h-32 object-cover rounded-lg">
                <div class="mt-2 flex items-center">
                    <div class="text-yellow-500 mr-1">
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="font-bold">${destination.rating}</span>
                    <span class="text-gray-500 text-sm ml-1">(124 reviews)</span>
                </div>
            </div>
            <div class="w-full md:w-2/3">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-lg">${destination.name}</h3>
                    <button class="close-details text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <p class="text-gray-600 mb-2">
                    <i class="fas fa-map-marker-alt text-primary mr-1"></i> ${destination.location}
                </p>
                <p class="text-gray-700 mb-4">${destination.description}</p>
                
                <!-- Directions Search Input -->
                <div class="mb-4 border border-gray-300 rounded-lg p-2 bg-gray-50">
                    <div class="font-bold mb-2">Get Directions</div>
                    <div class="flex flex-col md:flex-row gap-2">
                        <div class="relative flex-grow">
                            <input type="text" id="start-location-input" placeholder="Enter starting location" class="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                        <button class="use-my-location-btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                            <i class="fas fa-location-arrow mr-1"></i> My Location
                        </button>
                        <button class="get-directions-btn bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap" data-lat="${destination.coordinates.lat}" data-lng="${destination.coordinates.lng}">
                            <i class="fas fa-route mr-1"></i> Go
                        </button>
                    </div>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    <button class="save-destination-btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm" data-id="${destination.id}">
                        <i class="fas fa-bookmark mr-1"></i> Save
                    </button>
                    <button class="share-destination-btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm" data-id="${destination.id}">
                        <i class="fas fa-share-alt mr-1"></i> Share
                    </button>
                    <button class="nearby-places-btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm" data-lat="${destination.coordinates.lat}" data-lng="${destination.coordinates.lng}">
                        <i class="fas fa-compass mr-1"></i> Nearby
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add close button event listener
    const closeButton = detailsPanel.querySelector('.close-details');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            detailsPanel.classList.add('hidden');
            
            // Remove highlight from selected card
            const destinationCards = document.querySelectorAll('.destination-card');
            destinationCards.forEach(card => card.classList.remove('ring-2', 'ring-primary'));
        });
    }
    
    // Add "Use My Location" button event listener
    const useMyLocationBtn = detailsPanel.querySelector('.use-my-location-btn');
    if (useMyLocationBtn) {
        useMyLocationBtn.addEventListener('click', function() {
            const startLocationInput = document.getElementById('start-location-input');
            startLocationInput.value = 'My Current Location';
            searchedStartLocation = null;
            
            // Get user location if not already available
            if (!userLocation) {
                getUserLocation();
            }
        });
    }
    
    // Add directions button event listener
    const directionsButton = detailsPanel.querySelector('.get-directions-btn');
    if (directionsButton) {
        directionsButton.addEventListener('click', function() {
            const destLat = parseFloat(this.getAttribute('data-lat'));
            const destLng = parseFloat(this.getAttribute('data-lng'));
            const startLocationInput = document.getElementById('start-location-input');
            const startLocationValue = startLocationInput.value.trim();
            
            // Close the details panel
            detailsPanel.classList.add('hidden');
            
            // Hide the destination list and filter controls
            const destinationList = document.getElementById('destinations-list');
            if (destinationList) {
                destinationList.classList.add('hidden');
            }
            
            // Hide the filter controls
            const filterControls = document.getElementById('filter-controls');
            if (filterControls) {
                filterControls.classList.add('hidden');
            }
            
            // Make sure the map is visible and centered
            const exploreMapContainer = document.getElementById('explore-map');
            exploreMapContainer.style.display = 'block';
            
            // Ensure the map takes focus
            map.invalidateSize();
            
            // Show loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator bg-white bg-opacity-80 rounded-lg shadow-md p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center';
            loadingIndicator.innerHTML = `
                <div class="spinner mr-3"></div>
                <div>Calculating route to destination...</div>
            `;
            exploreMapContainer.appendChild(loadingIndicator);
            
            if (startLocationValue === '' || startLocationValue === 'My Current Location') {
                // Use user's current location
                if (userLocation) {
                    showDirections(userLocation, { lat: destLat, lng: destLng }, destination.name);
                    if (loadingIndicator.parentNode) {
                        loadingIndicator.remove();
                    }
                } else {
                    // Try to get user location first
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            userLocation = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            showDirections(userLocation, { lat: destLat, lng: destLng }, destination.name);
                            if (loadingIndicator.parentNode) {
                                loadingIndicator.remove();
                            }
                        },
                        function(error) {
                            console.error('Error getting user location:', error);
                            alert('Could not get your location. Please enter a starting location manually.');
                            if (loadingIndicator.parentNode) {
                                loadingIndicator.remove();
                            }
                        }
                    );
                }
            } else {
                // Use the entered location
                geocodeAddress(startLocationValue, function(location) {
                    if (location) {
                        searchedStartLocation = location;
                        showDirections(location, { lat: destLat, lng: destLng }, destination.name);
                    } else {
                        alert('Could not find the location. Please try a different address.');
                    }
                    if (loadingIndicator.parentNode) {
                        loadingIndicator.remove();
                    }
                });
            }
        });
    }
    
    // Add save button event listener
    const saveButton = detailsPanel.querySelector('.save-destination-btn');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            alert(`Destination ${destination.name} saved to your favorites!`);
        });
    }
    
    // Add share button event listener
    const shareButton = detailsPanel.querySelector('.share-destination-btn');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            
            // Create a mock share dialog
            alert(`Share ${destination.name} with your friends!\n\nURL: https://travelyatra.com/destinations/${id}`);
        });
    }
    
    // Add nearby places button event listener
    const nearbyButton = detailsPanel.querySelector('.nearby-places-btn');
    if (nearbyButton) {
        nearbyButton.addEventListener('click', function() {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            
            // Show nearby places
            showNearbyPlaces(lat, lng, destination.name);
        });
    }
    
    // Find the marker for this destination and open its popup
    markers.forEach((marker, index) => {
        if (featuredDestinations[index].id === destinationId) {
            marker.openPopup();
            
            // Center map on this marker
            map.setView([destination.coordinates.lat, destination.coordinates.lng], 10);
        }
    });
}

// Show directions between two points
function showDirections(origin, destination, destinationName) {
    // Clear any existing routes
    clearDirections();
    
    // Show the clear routes button
    if (map.customControls && map.customControls.getContainer().clearRoutesButton) {
        map.customControls.getContainer().clearRoutesButton.style.display = 'block';
    }
    
    // Create waypoints
    const waypoints = [
        L.latLng(origin.lat, origin.lng),
        L.latLng(destination.lat, destination.lng)
    ];
    
    // Add markers for origin and destination
    // Origin marker (blue)
    const originMarker = L.marker([origin.lat, origin.lng], {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin marker-pin-blue">
                    <i class="fas fa-map-marker-alt text-blue-500"></i>
                    <div class="pulse"></div>
                   </div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        })
    }).addTo(map);
    
    // Add popup for origin
    let originName = searchedStartLocation ? searchedStartLocation.name : 'Your Location';
    originMarker.bindPopup(`<b>Start: ${originName}</b>`).openPopup();
    
    // Destination marker (red)
    const destinationMarker = L.marker([destination.lat, destination.lng], {
        icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin marker-pin-red">
                    <i class="fas fa-map-marker-alt text-red-500"></i>
                   </div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        })
    }).addTo(map);
    
    // Add popup for destination
    destinationMarker.bindPopup(`<b>${destinationName}</b>`).openPopup();
    
    // Store markers to clear them later
    directionsMarkers = [originMarker, destinationMarker];
    
    // Set the routing control
    directionsRenderer = L.Routing.control({
        waypoints: waypoints,
        routeWhileDragging: true,
        showAlternatives: true,
        altLineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: '#6366F1', opacity: 0.6, weight: 6},
                {color: 'white', opacity: 0.5, weight: 2}
            ]
        },
        lineOptions: {
            styles: [
                {color: 'black', opacity: 0.15, weight: 9},
                {color: '#3B82F6', opacity: 0.8, weight: 6},
                {color: 'white', opacity: 0.8, weight: 2}
            ]
        },
        createMarker: function() { return null; } // Don't create default markers
    }).addTo(map);
    
    // Hide the control panel
    directionsRenderer.on('routesfound', function(e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        currentRoute = routes[0];
        
        // Calculate distance in km
        const distance = (summary.totalDistance / 1000).toFixed(1);
        
        // Calculate time in hours and minutes
        let hours = Math.floor(summary.totalTime / 3600);
        let minutes = Math.floor((summary.totalTime % 3600) / 60);
        let timeStr = '';
        
        if (hours > 0) {
            timeStr += hours + ' hr ';
        }
        timeStr += minutes + ' min';
        
        // Hide the routing container
        const routingContainer = document.querySelector('.leaflet-routing-container');
        if (routingContainer) {
            routingContainer.style.display = 'none';
        }
        
        // Add a message about the route with distance and time
        const routeMessage = document.createElement('div');
        routeMessage.className = 'route-message bg-white rounded-lg shadow-md p-4 absolute bottom-4 left-4 right-4 z-50';
        routeMessage.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h3 class="font-bold text-lg">Directions to ${destinationName}</h3>
                    <div class="flex items-center gap-4 mt-1">
                        <div class="flex items-center">
                            <i class="fas fa-road text-gray-500 mr-2"></i>
                            <span class="font-semibold">${distance} km</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-clock text-gray-500 mr-2"></i>
                            <span class="font-semibold">${timeStr}</span>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 mt-2 md:mt-0">
                    <button class="show-steps-btn bg-primary text-white px-3 py-1 rounded text-sm">
                        <i class="fas fa-list-ol mr-1"></i> Steps
                    </button>
                    <button class="show-poi-btn bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">
                        <i class="fas fa-map-pin mr-1"></i> Points of Interest
                    </button>
                    <button class="close-route-message text-gray-500 hover:text-gray-700 px-3 py-1 rounded text-sm">
                        <i class="fas fa-times mr-1"></i> Close
                    </button>
                </div>
            </div>
            <div class="route-steps hidden mt-4 pt-4 border-t border-gray-200">
                <h4 class="font-semibold mb-2">Directions:</h4>
                <ol class="list-decimal pl-5 space-y-2">
                    ${routes[0].instructions.map(instruction => 
                        `<li class="text-sm">${instruction.text} 
                            ${instruction.distance > 0 ? 
                                `<span class="text-gray-500">(${(instruction.distance/1000).toFixed(1)} km)</span>` : 
                                ''}
                        </li>`
                    ).join('')}
                </ol>
            </div>
            <div class="route-poi hidden mt-4 pt-4 border-t border-gray-200">
                <h4 class="font-semibold mb-2">Points of Interest Near Route:</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div class="p-2 border rounded-lg bg-gray-50">
                        <div class="font-semibold"><i class="fas fa-utensils text-orange-500 mr-1"></i> Restaurants</div>
                        <div class="text-sm mt-1">Loading nearby restaurants...</div>
                    </div>
                    <div class="p-2 border rounded-lg bg-gray-50">
                        <div class="font-semibold"><i class="fas fa-hotel text-blue-500 mr-1"></i> Hotels</div>
                        <div class="text-sm mt-1">Loading nearby hotels...</div>
                    </div>
                    <div class="p-2 border rounded-lg bg-gray-50">
                        <div class="font-semibold"><i class="fas fa-camera text-green-500 mr-1"></i> Attractions</div>
                        <div class="text-sm mt-1">Loading nearby attractions...</div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('explore-map').appendChild(routeMessage);
        
        // Add close button event listener
        const closeButton = routeMessage.querySelector('.close-route-message');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                routeMessage.remove();
            });
        }
        
        // Add show steps button event listener
        const showStepsButton = routeMessage.querySelector('.show-steps-btn');
        if (showStepsButton) {
            showStepsButton.addEventListener('click', function() {
                const stepsContainer = routeMessage.querySelector('.route-steps');
                const poiContainer = routeMessage.querySelector('.route-poi');
                
                if (stepsContainer.classList.contains('hidden')) {
                    stepsContainer.classList.remove('hidden');
                    poiContainer.classList.add('hidden');
                    this.innerHTML = '<i class="fas fa-chevron-up mr-1"></i> Hide';
                    routeMessage.querySelector('.show-poi-btn').innerHTML = '<i class="fas fa-map-pin mr-1"></i> Points of Interest';
                } else {
                    stepsContainer.classList.add('hidden');
                    this.innerHTML = '<i class="fas fa-list-ol mr-1"></i> Steps';
                }
            });
        }
        
        // Add show POI button event listener
        const showPoiButton = routeMessage.querySelector('.show-poi-btn');
        if (showPoiButton) {
            showPoiButton.addEventListener('click', function() {
                const stepsContainer = routeMessage.querySelector('.route-steps');
                const poiContainer = routeMessage.querySelector('.route-poi');
                
                if (poiContainer.classList.contains('hidden')) {
                    poiContainer.classList.remove('hidden');
                    stepsContainer.classList.add('hidden');
                    this.innerHTML = '<i class="fas fa-chevron-up mr-1"></i> Hide';
                    routeMessage.querySelector('.show-steps-btn').innerHTML = '<i class="fas fa-list-ol mr-1"></i> Steps';
                    
                    // Simulate loading POIs
                    setTimeout(() => {
                        const poiTypes = ['restaurants', 'hotels', 'attractions'];
                        const poiContainers = routeMessage.querySelectorAll('.route-poi .grid > div');
                        
                        poiTypes.forEach((type, index) => {
                            let poiHTML = '';
                            
                            // Generate 3-5 random POIs based on destination
                            const numPOIs = Math.floor(Math.random() * 3) + 3;
                            const poiNames = getPOINames(type, destinationName, numPOIs);
                            
                            poiNames.forEach(poi => {
                                poiHTML += `
                                    <div class="flex items-center justify-between mt-2 text-sm">
                                        <span>${poi.name}</span>
                                        <span class="text-xs text-gray-500">${poi.distance} km</span>
                                    </div>
                                `;
                            });
                            
                            poiContainers[index].querySelector('.text-sm').innerHTML = poiHTML;
                        });
                    }, 1000);
                } else {
                    poiContainer.classList.add('hidden');
                    this.innerHTML = '<i class="fas fa-map-pin mr-1"></i> Points of Interest';
                }
            });
        }
    });
    
    // Fit map to show both points
    const bounds = L.latLngBounds([
        [origin.lat, origin.lng],
        [destination.lat, destination.lng]
    ]);
    map.fitBounds(bounds, { padding: [50, 50] });
}

// Clear directions
function clearDirections() {
    // Remove routing control
    if (directionsRenderer) {
        map.removeControl(directionsRenderer);
        directionsRenderer = null;
    }
    
    // Remove any route messages
    const routeMessages = document.querySelectorAll('.route-message');
    routeMessages.forEach(message => message.remove());
    
    // Remove direction markers
    if (directionsMarkers) {
        directionsMarkers.forEach(marker => map.removeLayer(marker));
        directionsMarkers = [];
    }
    
    // Hide the clear routes button
    if (map.customControls && map.customControls.getContainer().clearRoutesButton) {
        map.customControls.getContainer().clearRoutesButton.style.display = 'none';
    }
    
    currentRoute = null;
}

// Get POI names based on type and destination
function getPOINames(type, destinationName, count) {
    const poiData = {
        restaurants: {
            'Goa Beaches': ['Thalassa Restaurant', 'Gunpowder', 'Antares Restaurant & Beach Club', 'Curlies Beach Shack', 'Britto\'s'],
            'Taj Mahal': ['Pinch of Spice', 'Peshawri', 'Good Luck Cafe', 'Esphahan', 'The Oberoi'],
            'Varanasi Ghats': ['Aadha-Aadha', 'Pizzeria Vaatika Cafe', 'Baba Lassi', 'Brown Bread Bakery', 'Dosa Cafe'],
            'default': ['Local Delight', 'Spice Garden', 'Traveler\'s Rest', 'Heritage Kitchen', 'Flavor Junction']
        },
        hotels: {
            'Goa Beaches': ['W Goa', 'Taj Fort Aguada', 'Cidade de Goa', 'The Leela', 'Novotel Goa'],
            'Taj Mahal': ['The Oberoi Amarvilas', 'Radisson Blu', 'Crystal Sarovar Premier', 'Trident Agra', 'Courtyard by Marriott'],
            'Varanasi Ghats': ['Taj Ganges', 'BrijRama Palace', 'Ramada Plaza', 'Madin Hotel', 'Hotel Clarks'],
            'default': ['Comfort Inn', 'Royal Stay', 'Tourist Lodge', 'Heritage Resort', 'City View Hotel']
        },
        attractions: {
            'Goa Beaches': ['Fort Aguada', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Chapora Fort', 'Anjuna Flea Market'],
            'Taj Mahal': ['Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itimad-ud-Daulah', 'Akbar\'s Tomb'],
            'Varanasi Ghats': ['Sarnath', 'Kashi Vishwanath Temple', 'Ramnagar Fort', 'Assi Ghat', 'Manikarnika Ghat'],
            'default': ['Local Museum', 'Ancient Temple', 'Scenic Viewpoint', 'Historic Monument', 'Cultural Center']
        }
    };
    
    // Get POIs for this destination or use default
    const pois = poiData[type][destinationName] || poiData[type]['default'];
    
    // Return random selection with distances
    return pois.slice(0, count).map(name => {
        return {
            name: name,
            distance: (Math.random() * 5 + 0.5).toFixed(1)
        };
    });
}

// Show nearby places
function showNearbyPlaces(lat, lng, locationName) {
    // Center map on the location
    map.setView([lat, lng], 14);
    
    // Create a message about nearby places
    const nearbyMessage = document.createElement('div');
    nearbyMessage.className = 'nearby-message bg-white rounded-lg shadow-md p-4 absolute bottom-4 left-4 right-4 z-50';
    nearbyMessage.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h3 class="font-bold">Nearby Places around ${locationName}</h3>
                <p class="text-sm text-gray-600">Showing hotels, restaurants, and attractions within 5km.</p>
            </div>
            <button class="close-nearby-message text-gray-500 hover:text-gray-700">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.getElementById('explore-map').appendChild(nearbyMessage);
    
    // Add close button event listener
    const closeButton = nearbyMessage.querySelector('.close-nearby-message');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            nearbyMessage.remove();
        });
    }
    
    // Automatically remove the message after 8 seconds
    setTimeout(() => {
        if (nearbyMessage.parentNode) {
            nearbyMessage.remove();
        }
    }, 8000);
    
    // In a real implementation, this would fetch nearby places from an API
    // For now, we'll just show a message
}

// Geocode an address to get coordinates
function geocodeAddress(address, callback) {
    // Create a temporary container for the geocoding control
    const geocoderContainer = document.createElement('div');
    geocoderContainer.style.display = 'none';
    document.body.appendChild(geocoderContainer);
    
    // Create a geocoder control
    const geocoder = L.Control.Geocoder.nominatim();
    
    // Perform geocoding
    geocoder.geocode(address, function(results) {
        // Remove the temporary container
        document.body.removeChild(geocoderContainer);
        
        if (results && results.length > 0) {
            const result = results[0];
            callback({
                lat: result.center.lat,
                lng: result.center.lng,
                name: result.name
            });
        } else {
            callback(null);
        }
    });
}

// Get user's location
function getUserLocation(centerMap = false) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                // Add user marker if it doesn't exist
                if (!map.userMarker) {
                    const userIcon = L.divIcon({
                        className: 'user-location-marker',
                        html: '<div class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg pulse-animation"><i class="fas fa-user"></i></div>',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });
                    
                    map.userMarker = L.marker([userLocation.lat, userLocation.lng], {
                        icon: userIcon,
                        zIndexOffset: 1000
                    }).addTo(map);
                    
                    // Add accuracy circle
                    if (position.coords.accuracy) {
                        map.accuracyCircle = L.circle([userLocation.lat, userLocation.lng], {
                            radius: position.coords.accuracy,
                            color: '#3B82F6',
                            fillColor: '#93C5FD',
                            fillOpacity: 0.2,
                            weight: 1
                        }).addTo(map);
                    }
                } else {
                    // Update user marker position
                    map.userMarker.setLatLng([userLocation.lat, userLocation.lng]);
                    
                    // Update accuracy circle
                    if (map.accuracyCircle && position.coords.accuracy) {
                        map.accuracyCircle.setLatLng([userLocation.lat, userLocation.lng]);
                        map.accuracyCircle.setRadius(position.coords.accuracy);
                    }
                }
                
                // Center map on user location if requested
                if (centerMap) {
                    map.setView([userLocation.lat, userLocation.lng], 14);
                }
            },
            function(error) {
                console.error('Error getting user location:', error);
                alert('Could not get your location. Please check your location permissions.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Export the function to be used by other modules
window.showExploreMap = showExploreMap;
