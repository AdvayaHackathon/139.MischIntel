// Itinerary Planner component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const itineraryContainer = document.getElementById('itinerary');
    if (itineraryContainer) {
        renderItinerary(itineraryContainer);
    }
});

function renderItinerary(container) {
    const itineraryHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Itinerary Planner</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Plan your perfect Indian adventure with our drag-and-drop itinerary builder. Get time and cost estimates for your journey.
            </p>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                <div class="p-6 md:p-8">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Left Column - Destinations -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Popular Destinations</h3>
                            
                            <!-- Search Destinations -->
                            <div class="mb-4 relative">
                                <input type="text" placeholder="Search destinations..." class="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                            
                            <!-- Destination Categories -->
                            <div class="mb-4 flex flex-wrap gap-2">
                                <button class="bg-primary text-white px-3 py-1 rounded-full text-sm">All</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Heritage</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Nature</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Spiritual</button>
                                <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Beaches</button>
                            </div>
                            
                            <!-- Destination List - Draggable Items -->
                            <div class="space-y-3 max-h-[500px] overflow-y-auto p-1">
                                <!-- Destination Item 1 -->
                                <div class="bg-gray-100 p-3 rounded-md cursor-move destination-item" draggable="true" data-id="taj-mahal">
                                    <div class="flex">
                                        <div class="w-16 h-16 bg-gray-300 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Taj Mahal" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <h4 class="font-bold">Taj Mahal</h4>
                                            <p class="text-xs text-gray-600">Agra, Uttar Pradesh</p>
                                            <div class="flex items-center mt-1">
                                                <div class="flex text-yellow-400 text-xs">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="text-xs text-gray-600 ml-1">(4.9)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Destination Item 2 -->
                                <div class="bg-gray-100 p-3 rounded-md cursor-move destination-item" draggable="true" data-id="jaipur-city">
                                    <div class="flex">
                                        <div class="w-16 h-16 bg-gray-300 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Jaipur" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <h4 class="font-bold">Jaipur City Palace</h4>
                                            <p class="text-xs text-gray-600">Jaipur, Rajasthan</p>
                                            <div class="flex items-center mt-1">
                                                <div class="flex text-yellow-400 text-xs">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star-half-alt"></i>
                                                </div>
                                                <span class="text-xs text-gray-600 ml-1">(4.5)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Destination Item 3 -->
                                <div class="bg-gray-100 p-3 rounded-md cursor-move destination-item" draggable="true" data-id="varanasi-ghats">
                                    <div class="flex">
                                        <div class="w-16 h-16 bg-gray-300 rounded-md overflow-hidden mr-3 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Varanasi" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <h4 class="font-bold">Varanasi Ghats</h4>
                                            <p class="text-xs text-gray-600">Varanasi, Uttar Pradesh</p>
                                            <div class="flex items-center mt-1">
                                                <div class="flex text-yellow-400 text-xs">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="far fa-star"></i>
                                                </div>
                                                <span class="text-xs text-gray-600 ml-1">(4.0)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- More destination items would be added here -->
                            </div>
                        </div>
                        
                        <!-- Middle Column - Itinerary Builder -->
                        <div class="lg:col-span-2">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold">Your Itinerary</h3>
                                <div>
                                    <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm mr-2">
                                        <i class="fas fa-save mr-1"></i> Save
                                    </button>
                                    <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md text-sm">
                                        <i class="fas fa-share-alt mr-1"></i> Share
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Trip Details -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="trip-name">
                                        Trip Name
                                    </label>
                                    <input type="text" id="trip-name" value="My Indian Adventure" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="start-date">
                                        Start Date
                                    </label>
                                    <input type="date" id="start-date" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="end-date">
                                        End Date
                                    </label>
                                    <input type="date" id="end-date" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                </div>
                            </div>
                            
                            <!-- Days Container -->
                            <div id="itinerary-days" class="space-y-4">
                                <!-- Day 1 -->
                                <div class="border border-gray-300 rounded-lg overflow-hidden">
                                    <div class="bg-gray-100 p-3 flex justify-between items-center">
                                        <h4 class="font-bold">Day 1</h4>
                                        <div>
                                            <button class="text-gray-500 hover:text-primary">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <!-- Drop Zone for Day 1 -->
                                    <div class="p-4 min-h-[100px] itinerary-drop-zone" data-day="1">
                                        <p class="text-gray-400 text-center">Drag and drop destinations here</p>
                                    </div>
                                </div>
                                
                                <!-- Day 2 -->
                                <div class="border border-gray-300 rounded-lg overflow-hidden">
                                    <div class="bg-gray-100 p-3 flex justify-between items-center">
                                        <h4 class="font-bold">Day 2</h4>
                                        <div>
                                            <button class="text-gray-500 hover:text-primary">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <!-- Drop Zone for Day 2 -->
                                    <div class="p-4 min-h-[100px] itinerary-drop-zone" data-day="2">
                                        <p class="text-gray-400 text-center">Drag and drop destinations here</p>
                                    </div>
                                </div>
                                
                                <!-- Day 3 -->
                                <div class="border border-gray-300 rounded-lg overflow-hidden">
                                    <div class="bg-gray-100 p-3 flex justify-between items-center">
                                        <h4 class="font-bold">Day 3</h4>
                                        <div>
                                            <button class="text-gray-500 hover:text-primary">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <!-- Drop Zone for Day 3 -->
                                    <div class="p-4 min-h-[100px] itinerary-drop-zone" data-day="3">
                                        <p class="text-gray-400 text-center">Drag and drop destinations here</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Add Day Button -->
                            <div class="mt-4">
                                <button id="add-day-btn" class="w-full border border-dashed border-gray-300 rounded-lg p-3 text-gray-500 hover:text-primary hover:border-primary transition duration-300">
                                    <i class="fas fa-plus mr-2"></i> Add Another Day
                                </button>
                            </div>
                            
                            <!-- Itinerary Summary -->
                            <div class="mt-8 bg-gray-100 p-4 rounded-lg">
                                <h4 class="font-bold mb-3">Trip Summary</h4>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <p class="text-sm text-gray-600">Duration</p>
                                        <p class="font-bold">3 Days</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Destinations</p>
                                        <p class="font-bold">0</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Est. Cost</p>
                                        <p class="font-bold">₹0</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Distance</p>
                                        <p class="font-bold">0 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Travel Route Suggestions -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold mb-6 text-center">Popular Travel Routes</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Route 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 bg-gray-300 relative">
                            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Golden Triangle" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h4 class="text-xl font-bold">Golden Triangle</h4>
                                <p class="text-sm">Delhi - Agra - Jaipur</p>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-clock text-primary mr-2"></i>
                                <span class="text-sm">5-7 days recommended</span>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">
                                The classic introduction to India covering the iconic Taj Mahal, historic Delhi, and the pink city of Jaipur.
                            </p>
                            <button class="text-primary hover:text-primary-dark font-medium text-sm">
                                Use this route <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Route 2 - Kerala Explorer -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 bg-gray-300 relative">
                            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Kerala Explorer" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h4 class="text-xl font-bold">Kerala Explorer</h4>
                                <p class="text-sm">Kochi - Munnar - Alleppey</p>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-clock text-primary mr-2"></i>
                                <span class="text-sm">7-10 days recommended</span>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">
                                Experience the serene backwaters, lush tea plantations, and beautiful beaches of God's Own Country.
                            </p>
                            <button class="text-primary hover:text-primary-dark font-medium text-sm">
                                Use this route <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Route 3 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class="h-48 bg-gray-300 relative">
                            <img src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rajasthan" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h4 class="text-xl font-bold">Rajasthan Heritage</h4>
                                <p class="text-sm">Jaipur - Jodhpur - Udaipur - Jaisalmer</p>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-clock text-primary mr-2"></i>
                                <span class="text-sm">10-14 days recommended</span>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">
                                Discover the royal heritage, majestic forts, and vibrant culture of India's largest state.
                            </p>
                            <button class="text-primary hover:text-primary-dark font-medium text-sm">
                                Use this route <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Travel Tips -->
            <div class="bg-gray-100 rounded-lg p-6 md:p-8">
                <h3 class="text-2xl font-bold mb-4 text-center">Itinerary Planning Tips</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="flex">
                        <div class="mr-4 text-primary">
                            <i class="fas fa-clock text-3xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold mb-2">Don't Rush</h4>
                            <p class="text-sm text-gray-600">
                                India is vast and diverse. Plan for fewer destinations with more time at each to truly experience the culture.
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="mr-4 text-primary">
                            <i class="fas fa-train text-3xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold mb-2">Account for Travel Time</h4>
                            <p class="text-sm text-gray-600">
                                Include buffer time for transportation between cities. Train journeys can be an experience in themselves.
                            </p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="mr-4 text-primary">
                            <i class="fas fa-cloud-sun text-3xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold mb-2">Consider the Season</h4>
                            <p class="text-sm text-gray-600">
                                Different regions have different ideal visiting times. Avoid monsoon season for certain destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = itineraryHTML;
    
    // Initialize itinerary planner functionality
    initItineraryPlanner();
}

function initItineraryPlanner() {
    // Get DOM elements
    const addDayBtn = document.getElementById('add-day-btn');
    const itineraryDays = document.getElementById('itinerary-days');
    const destinationItems = document.querySelectorAll('.destination-item');
    const dropZones = document.querySelectorAll('.itinerary-drop-zone');
    
    // Initialize drag and drop functionality
    if (destinationItems.length > 0 && dropZones.length > 0) {
        // Set up draggable items
        destinationItems.forEach(item => {
            item.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/plain', this.getAttribute('data-id'));
                this.classList.add('opacity-50');
            });
            
            item.addEventListener('dragend', function() {
                this.classList.remove('opacity-50');
            });
        });
        
        // Set up drop zones
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('bg-gray-100');
            });
            
            zone.addEventListener('dragleave', function() {
                this.classList.remove('bg-gray-100');
            });
            
            zone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('bg-gray-100');
                
                const destinationId = e.dataTransfer.getData('text/plain');
                const day = this.getAttribute('data-day');
                
                // Find the dragged item
                const draggedItem = document.querySelector(`.destination-item[data-id="${destinationId}"]`);
                
                if (draggedItem) {
                    // Clear the placeholder text if this is the first item
                    if (this.querySelector('p.text-gray-400')) {
                        this.innerHTML = '';
                    }
                    
                    // Clone the item and add it to the drop zone
                    const clonedItem = draggedItem.cloneNode(true);
                    clonedItem.classList.add('mb-2');
                    
                    // Add a remove button
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'absolute top-2 right-2 text-red-500 hover:text-red-700';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.addEventListener('click', function() {
                        clonedItem.remove();
                        
                        // If no items left, add the placeholder back
                        if (zone.children.length === 0) {
                            zone.innerHTML = '<p class="text-gray-400 text-center">Drag and drop destinations here</p>';
                        }
                        
                        // Update the trip summary
                        updateTripSummary();
                    });
                    
                    clonedItem.style.position = 'relative';
                    clonedItem.appendChild(removeBtn);
                    
                    this.appendChild(clonedItem);
                    
                    // Update the trip summary
                    updateTripSummary();
                }
            });
        });
    }
    
    // Add Day button functionality
    if (addDayBtn && itineraryDays) {
        addDayBtn.addEventListener('click', function() {
            const dayCount = itineraryDays.children.length + 1;
            
            const newDay = document.createElement('div');
            newDay.className = 'border border-gray-300 rounded-lg overflow-hidden';
            newDay.innerHTML = `
                <div class="bg-gray-100 p-3 flex justify-between items-center">
                    <h4 class="font-bold">Day ${dayCount}</h4>
                    <div>
                        <button class="text-gray-500 hover:text-primary">
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-4 min-h-[100px] itinerary-drop-zone" data-day="${dayCount}">
                    <p class="text-gray-400 text-center">Drag and drop destinations here</p>
                </div>
            `;
            
            itineraryDays.appendChild(newDay);
            
            // Update the trip summary
            updateTripSummary();
            
            // Initialize drag and drop for the new drop zone
            const newDropZone = newDay.querySelector('.itinerary-drop-zone');
            
            if (newDropZone) {
                newDropZone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.classList.add('bg-gray-100');
                });
                
                newDropZone.addEventListener('dragleave', function() {
                    this.classList.remove('bg-gray-100');
                });
                
                newDropZone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.classList.remove('bg-gray-100');
                    
                    const destinationId = e.dataTransfer.getData('text/plain');
                    const day = this.getAttribute('data-day');
                    
                    // Find the dragged item
                    const draggedItem = document.querySelector(`.destination-item[data-id="${destinationId}"]`);
                    
                    if (draggedItem) {
                        // Clear the placeholder text if this is the first item
                        if (this.querySelector('p.text-gray-400')) {
                            this.innerHTML = '';
                        }
                        
                        // Clone the item and add it to the drop zone
                        const clonedItem = draggedItem.cloneNode(true);
                        clonedItem.classList.add('mb-2');
                        
                        // Add a remove button
                        const removeBtn = document.createElement('button');
                        removeBtn.className = 'absolute top-2 right-2 text-red-500 hover:text-red-700';
                        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                        removeBtn.addEventListener('click', function() {
                            clonedItem.remove();
                            
                            // If no items left, add the placeholder back
                            if (newDropZone.children.length === 0) {
                                newDropZone.innerHTML = '<p class="text-gray-400 text-center">Drag and drop destinations here</p>';
                            }
                            
                            // Update the trip summary
                            updateTripSummary();
                        });
                        
                        clonedItem.style.position = 'relative';
                        clonedItem.appendChild(removeBtn);
                        
                        this.appendChild(clonedItem);
                        
                        // Update the trip summary
                        updateTripSummary();
                    }
                });
            }
        });
    }
    
    // Function to update trip summary
    function updateTripSummary() {
        const dayCount = itineraryDays.children.length;
        
        // Count destinations
        let destinationCount = 0;
        const dropZones = document.querySelectorAll('.itinerary-drop-zone');
        
        dropZones.forEach(zone => {
            // Count destination items, not the placeholder text
            const items = zone.querySelectorAll('.destination-item');
            destinationCount += items.length;
        });
        
        // Update summary in the UI
        const summaryDuration = document.querySelector('.trip-summary .font-bold:nth-child(2)') || document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4 .font-bold:nth-child(1)');
        const summaryDestinations = document.querySelector('.trip-summary .font-bold:nth-child(4)') || document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4 .font-bold:nth-child(2)');
        const summaryCost = document.querySelector('.trip-summary .font-bold:nth-child(6)') || document.querySelector('.grid.grid-cols-2.md\\:grid-cols-4 .font-bold:nth-child(3)');
        
        if (summaryDuration) {
            summaryDuration.textContent = `${dayCount} Days`;
        }
        
        if (summaryDestinations) {
            summaryDestinations.textContent = destinationCount;
        }
        
        if (summaryCost) {
            // Simple mock cost calculation
            const baseCost = 2000; // Base cost per day in rupees
            const destinationCost = 500; // Cost per destination in rupees
            const totalCost = (baseCost * dayCount) + (destinationCost * destinationCount);
            summaryCost.textContent = `₹${totalCost}`;
        }
    }
}
