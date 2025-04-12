// Safety Alerts component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const safetyAlertsContainer = document.getElementById('safety-alerts');
    if (safetyAlertsContainer) {
        renderSafetyAlerts(safetyAlertsContainer);
    }
});

function renderSafetyAlerts(container) {
    const safetyAlertsHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Safe Travel Alerts</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Stay informed about potential risks and safety concerns with real-time alerts from verified sources and fellow travelers.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Safety Map -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b">
                            <h3 class="text-xl font-bold">Safety Map</h3>
                            <p class="text-gray-600">View safety alerts and zones across India</p>
                        </div>
                        <div class="p-4">
                            <!-- Map Controls -->
                            <div class="flex flex-wrap gap-2 mb-4">
                                <button class="bg-primary text-white px-3 py-1 rounded-full text-sm">All Alerts</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Scams</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Unsafe Areas</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tourist Traps</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Health Risks</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Weather Alerts</button>
                            </div>
                            
                            <!-- Map Container -->
                            <div id="safety-map" class="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                                <!-- Map will be initialized here -->
                            </div>
                            
                            <!-- Location Search -->
                            <div class="mt-4">
                                <div class="flex">
                                    <input type="text" id="location-search" class="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search for a location...">
                                    <button id="search-button" class="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                                <div class="mt-2 text-sm text-gray-600">
                                    <p>Click on the map to add a new safety alert or click on existing markers to view details</p>
                                </div>
                            </div>
                            </div>
                            
                            <!-- Map Legend -->
                            <div class="mt-4 flex flex-wrap gap-4">
                                <div class="flex items-center">
                                    <div class="bg-danger-color text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">
                                        <i class="fas fa-exclamation-triangle text-xs"></i>
                                    </div>
                                    <span class="text-sm">Scam Alert</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-accent text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">
                                        <i class="fas fa-dollar-sign text-xs"></i>
                                    </div>
                                    <span class="text-sm">Tourist Trap</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-secondary text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">
                                        <i class="fas fa-cloud-rain text-xs"></i>
                                    </div>
                                    <span class="text-sm">Weather Alert</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">
                                        <i class="fas fa-shield-alt text-xs"></i>
                                    </div>
                                    <span class="text-sm">Safe Zone</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2">
                                        <i class="fas fa-ban text-xs"></i>
                                    </div>
                                    <span class="text-sm">Unsafe Area</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recent Alerts -->
                <div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b flex justify-between items-center">
                            <h3 class="text-xl font-bold">Recent Alerts</h3>
                            <div class="relative">
                                <select class="text-sm border border-gray-300 rounded-md p-1 pr-8">
                                    <option value="all">All Locations</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="jaipur">Jaipur</option>
                                    <option value="agra">Agra</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i class="fas fa-chevron-down text-xs"></i>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Alert List -->
                        <div class="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
                            <!-- Alert Item 1 -->
                            <div class="p-4 hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="bg-danger-color text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Taxi Scam Near Delhi Airport</h4>
                                        <p class="text-gray-600 text-sm mb-2">Unauthorized drivers charging 3x normal rates. Use prepaid taxi counter inside airport.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="far fa-clock mr-1"></i> 2 hours ago</span>
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Delhi</span>
                                            <span><i class="fas fa-shield-alt mr-1"></i> Verified by 12 travelers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Alert Item 2 -->
                            <div class="p-4 hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i class="fas fa-cloud-rain"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Heavy Rainfall in Mumbai</h4>
                                        <p class="text-gray-600 text-sm mb-2">Expect delays in local trains and traffic congestion. Plan accordingly.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="far fa-clock mr-1"></i> 5 hours ago</span>
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Mumbai</span>
                                            <span><i class="fas fa-check-circle mr-1"></i> Official Weather Alert</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Alert Item 3 -->
                            <div class="p-4 hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Overpriced Souvenirs at Taj Mahal</h4>
                                        <p class="text-gray-600 text-sm mb-2">Shops near east gate charging 5x market price. Better deals available in Agra city.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="far fa-clock mr-1"></i> 1 day ago</span>
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Agra</span>
                                            <span><i class="fas fa-shield-alt mr-1"></i> Verified by 8 travelers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Alert Item 4 -->
                            <div class="p-4 hover:bg-gray-50">
                                <div class="flex items-start">
                                    <div class="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i class="fas fa-ban"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Temporary Road Closure in Jaipur</h4>
                                        <p class="text-gray-600 text-sm mb-2">Main road to Amber Fort closed for repairs. Use alternative eastern route.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="far fa-clock mr-1"></i> 2 days ago</span>
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Jaipur</span>
                                            <span><i class="fas fa-check-circle mr-1"></i> Official Notice</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- View All Button -->
                        <div class="p-3 bg-gray-100 border-t text-center">
                            <button class="text-primary hover:text-primary-dark font-medium">
                                View All Alerts <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Report Alert Button -->
                    <div class="mt-4">
                        <button class="w-full bg-danger-color hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                            <i class="fas fa-exclamation-circle mr-2"></i> Report New Alert
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Safety Tips Section -->
            <div class="mt-12">
                <h3 class="text-2xl font-bold mb-6 text-center">Essential Safety Tips for India</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Tip 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-taxi"></i>
                                </div>
                                <h4 class="font-bold text-lg">Use Registered Transportation</h4>
                            </div>
                            <p class="text-gray-600">
                                Always use registered taxis, ride-sharing apps, or prepaid taxi services from airports and train stations. Avoid unmarked vehicles.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Tip 2 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-wallet"></i>
                                </div>
                                <h4 class="font-bold text-lg">Secure Your Valuables</h4>
                            </div>
                            <p class="text-gray-600">
                                Keep valuables secure and out of sight. Use hotel safes for passports and extra cash. Be vigilant in crowded areas.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Tip 3 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-tint"></i>
                                </div>
                                <h4 class="font-bold text-lg">Drink Bottled Water</h4>
                            </div>
                            <p class="text-gray-600">
                                Stick to bottled water with sealed caps. Avoid ice in drinks and raw foods washed with tap water to prevent stomach issues.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Tip 4 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-street-view"></i>
                                </div>
                                <h4 class="font-bold text-lg">Dress Appropriately</h4>
                            </div>
                            <p class="text-gray-600">
                                Respect local customs by dressing modestly, especially at religious sites. This helps avoid unwanted attention and shows cultural respect.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Tip 5 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-map-marked-alt"></i>
                                </div>
                                <h4 class="font-bold text-lg">Share Your Itinerary</h4>
                            </div>
                            <p class="text-gray-600">
                                Always share your travel plans with someone you trust. Check in regularly, especially when traveling to remote areas.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Tip 6 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary bg-opacity-20 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-first-aid"></i>
                                </div>
                                <h4 class="font-bold text-lg">Carry Basic Medicines</h4>
                            </div>
                            <p class="text-gray-600">
                                Pack a basic medical kit with pain relievers, anti-diarrheal medication, band-aids, and any prescription medicines you need.
                            </p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    `;
    
    container.innerHTML = safetyAlertsHTML;
    
    // Initialize safety alerts functionality
    initSafetyAlerts();
}

function initSafetyAlerts() {
    // Initialize the safety map using Leaflet.js
    initSafetyMap();
    
    // Set up filter buttons
    setupFilterButtons();
    
    // Set up report alert button
    setupReportButton();
    
    // Set up location search
    setupLocationSearch();
}

function initSafetyMap() {
    // Check if the map container exists
    const mapContainer = document.getElementById('safety-map');
    if (!mapContainer) return;
    
    // Initialize the map centered on India
    const map = L.map('safety-map').setView([20.5937, 78.9629], 5);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add sample safety alerts (in a real app, these would come from a database)
    const safetyAlerts = [
        {
            type: 'scam',
            position: [28.6139, 77.2090], // Delhi
            title: 'Taxi Scam Alert',
            description: 'Beware of unauthorized taxi drivers charging excessive fares around New Delhi Railway Station.',
            severity: 'medium',
            reportedBy: 'Travel Yatra Team',
            date: '2025-04-10'
        },
        {
            type: 'unsafe',
            position: [19.0760, 72.8777], // Mumbai
            title: 'Unsafe Area',
            description: 'Avoid walking alone at night in this area. Multiple incidents reported recently.',
            severity: 'high',
            reportedBy: 'Local Police',
            date: '2025-04-11'
        },
        {
            type: 'tourist-trap',
            position: [27.1751, 78.0421], // Agra
            title: 'Tourist Trap',
            description: 'Shop owners near Taj Mahal selling fake "authentic" souvenirs at inflated prices.',
            severity: 'low',
            reportedBy: 'John D.',
            date: '2025-04-08'
        },
        {
            type: 'health',
            position: [12.9716, 77.5946], // Bangalore
            title: 'Health Risk',
            description: 'Recent cases of food poisoning reported from street vendors in this area.',
            severity: 'medium',
            reportedBy: 'Local Health Department',
            date: '2025-04-09'
        },
        {
            type: 'weather',
            position: [13.0827, 80.2707], // Chennai
            title: 'Weather Alert',
            description: 'Heavy rainfall expected in the next 48 hours. Potential for localized flooding.',
            severity: 'medium',
            reportedBy: 'Meteorological Department',
            date: '2025-04-12'
        }
    ];
    
    // Create custom icons for different alert types
    const alertIcons = {
        'scam': createAlertIcon('danger-color', 'fa-exclamation-triangle'),
        'unsafe': createAlertIcon('danger-color', 'fa-shield-alt'),
        'tourist-trap': createAlertIcon('accent', 'fa-dollar-sign'),
        'health': createAlertIcon('primary', 'fa-first-aid'),
        'weather': createAlertIcon('secondary', 'fa-cloud-rain')
    };
    
    // Add markers for each safety alert
    safetyAlerts.forEach(alert => {
        const marker = L.marker(alert.position, {icon: alertIcons[alert.type]})
            .addTo(map);
        
        // Create popup content
        const popupContent = `
            <div class="safety-popup">
                <h3 class="font-bold text-lg">${alert.title}</h3>
                <div class="text-sm mb-2">
                    <span class="bg-${getSeverityColor(alert.severity)} text-white text-xs px-2 py-1 rounded-full">${alert.severity.toUpperCase()}</span>
                    <span class="text-gray-600 ml-2">${alert.date}</span>
                </div>
                <p class="text-gray-700 mb-2">${alert.description}</p>
                <div class="text-xs text-gray-500">Reported by: ${alert.reportedBy}</div>
                <div class="mt-2 flex justify-between">
                    <button class="text-primary text-sm hover:underline confirm-alert">Confirm</button>
                    <button class="text-red-500 text-sm hover:underline report-inaccurate">Report Inaccurate</button>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Store the alert type on the marker for filtering
        marker._alertType = alert.type;
    });
    
    // Store map reference for later use (filtering, etc.)
    window.safetyMap = map;
    window.safetyMarkers = safetyAlerts.map((_, index) => map._layers[Object.keys(map._layers)[index + 1]]);
    
    // Add click handler to add new alerts
    map.on('click', function(e) {
        // In a real app, this would open a form to add a new alert
        // For now, just show a confirmation dialog
        if (confirm(`Would you like to report a safety concern at this location?\nLatitude: ${e.latlng.lat.toFixed(4)}, Longitude: ${e.latlng.lng.toFixed(4)}`)) {
            alert('In a complete implementation, a form would open to report details about this safety concern.');
        }
    });
}

function createAlertIcon(colorClass, iconName) {
    // Create a custom icon for markers
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin bg-${colorClass} text-white rounded-full w-6 h-6 flex items-center justify-center"><i class="fas ${iconName} text-xs"></i></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

function getSeverityColor(severity) {
    switch(severity) {
        case 'high': return 'red-600';
        case 'medium': return 'yellow-500';
        case 'low': return 'blue-500';
        default: return 'gray-500';
    }
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('#safety-alerts .bg-gray-200');
    const activeButton = document.querySelector('#safety-alerts .bg-primary');
    
    if (filterButtons.length > 0 && activeButton) {
        // Store the initial active button
        let currentActiveButton = activeButton;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from current active button
                currentActiveButton.classList.remove('bg-primary', 'text-white');
                currentActiveButton.classList.add('bg-gray-200', 'text-gray-700');
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                // Update current active button
                currentActiveButton = this;
                
                // Filter markers on the map
                filterMapMarkers(this.textContent.trim());
            });
        });
    }
}

function filterMapMarkers(filterType) {
    console.log(`Filtering alerts by: ${filterType}`);
    
    // If map or markers aren't initialized, do nothing
    if (!window.safetyMap || !window.safetyMarkers) return;
    
    // Convert filter type to alert type
    const alertTypeMap = {
        'All Alerts': 'all',
        'Scams': 'scam',
        'Unsafe Areas': 'unsafe',
        'Tourist Traps': 'tourist-trap',
        'Health Risks': 'health',
        'Weather Alerts': 'weather'
    };
    
    const alertType = alertTypeMap[filterType] || 'all';
    
    // Show/hide markers based on filter
    window.safetyMarkers.forEach(marker => {
        if (alertType === 'all' || marker._alertType === alertType) {
            // Show this marker
            if (!window.safetyMap.hasLayer(marker)) {
                window.safetyMap.addLayer(marker);
            }
        } else {
            // Hide this marker
            if (window.safetyMap.hasLayer(marker)) {
                window.safetyMap.removeLayer(marker);
            }
        }
    });
}

function setupReportButton() {
    const reportButton = document.querySelector('#safety-alerts .bg-danger-color');
    
    if (reportButton) {
        reportButton.addEventListener('click', function() {
            // In a real app, this would open a modal or form to report an alert
            alert('In a complete implementation, a form would open to report a new safety alert.');
        });
    }
}

function setupLocationSearch() {
    const searchInput = document.getElementById('location-search');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput && searchButton) {
        // Create a geocoder control
        const geocoder = L.Control.geocoder({
            defaultMarkGeocode: false
        });
        
        // Handle search button click
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                // Use the geocoder to search for the location
                geocoder.geocode(query, results => {
                    if (results.length > 0) {
                        const result = results[0];
                        // Zoom to the location
                        window.safetyMap.setView(result.center, 13);
                        // Add a temporary marker
                        L.marker(result.center).addTo(window.safetyMap)
                            .bindPopup(`<b>${result.name}</b>`)
                            .openPopup();
                    } else {
                        alert('Location not found. Please try a different search term.');
                    }
                });
            }
        });
        
        // Also trigger search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
}
