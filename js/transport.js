document.addEventListener('DOMContentLoaded', function() {
    const transportContainer = document.getElementById('transport');
    if (transportContainer) {
        renderTransport(transportContainer);
    }
});

function renderTransport(container) {
    const transportHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Transport Assistant</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Navigate India's diverse transportation options with ease. Get fare estimates, find trusted drivers, and learn local transport tips.
            </p>
            
            <!-- Transportation Guide Section -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-center mb-8">Transportation Guide</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <!-- Auto Rickshaw Card -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div class="relative">
                            <img src="images/transport/auto-rickshaw-detailed.svg" alt="Auto Rickshaw" class="w-full h-48 object-contain bg-yellow-50 p-4">
                            <div class="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg font-medium">Popular</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="text-xl font-bold">Auto Rickshaw</h4>
                                <span class="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">₹ Low-Medium</span>
                            </div>
                            <p class="text-gray-600 mb-4">The iconic three-wheeler perfect for navigating narrow streets and traffic.</p>
                            
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Best for short to medium distances</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Available in most cities and towns</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                                <p class="text-sm">Always ensure the driver uses the meter or negotiate the fare before starting your journey.</p>
                            </div>
                            
                            <button class="transport-tip-btn w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300" data-transport="auto-rickshaw">Auto rickshaw tips</button>
                        </div>
                    </div>
                    
                    <!-- Metro Card -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div class="relative">
                            <img src="images/transport/metro-detailed.svg" alt="Metro" class="w-full h-48 object-contain bg-blue-50 p-4">
                            <div class="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-medium">Fast</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="text-xl font-bold">Metro Rail</h4>
                                <span class="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">₹ Low</span>
                            </div>
                            <p class="text-gray-600 mb-4">Fast urban transit for avoiding traffic and covering longer distances.</p>
                            
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Best for avoiding traffic</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Available in Delhi, Mumbai, Bangalore, etc.</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                                <p class="text-sm">Purchase a tourist card for unlimited travel. Women-only carriages are available in most metro systems.</p>
                            </div>
                            
                            <button class="transport-tip-btn w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" data-transport="metro">Metro travel guide</button>
                        </div>
                    </div>
                    
                    <!-- Taxi Card -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div class="relative">
                            <img src="images/transport/taxi-detailed.svg" alt="Taxi" class="w-full h-48 object-contain bg-gray-50 p-4">
                            <div class="absolute top-0 right-0 bg-gray-700 text-white px-3 py-1 rounded-bl-lg font-medium">Comfort</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="text-xl font-bold">Taxi/Cab</h4>
                                <span class="text-sm font-medium bg-yellow-100 text-yellow-800 py-1 px-2 rounded">₹ Medium-High</span>
                            </div>
                            <p class="text-gray-600 mb-4">Comfortable door-to-door service for travelers with luggage or groups.</p>
                            
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Best for comfort, luggage, groups</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Available in all major cities</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                                <p class="text-sm">Use ride-hailing apps or pre-paid taxi services from airports and stations. Always verify the driver's identity.</p>
                            </div>
                            
                            <button class="transport-tip-btn w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300" data-transport="taxi">Taxi safety tips</button>
                        </div>
                    </div>
                    
                    <!-- Local Bus Card -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div class="relative">
                            <img src="images/transport/bus-detailed.svg" alt="Local Bus" class="w-full h-48 object-contain bg-red-50 p-4">
                            <div class="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-medium">Budget</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="text-xl font-bold">Local Bus</h4>
                                <span class="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded">₹ Very Low</span>
                            </div>
                            <p class="text-gray-600 mb-4">Budget-friendly public transport for an authentic local experience.</p>
                            
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Best for budget travel, local experience</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Available throughout India</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                                <p class="text-sm">Keep small change ready for tickets and be prepared for a genuine local experience. Buses can be crowded during peak hours.</p>
                            </div>
                            
                            <button class="transport-tip-btn w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300" data-transport="bus">Bus route guide</button>
                        </div>
                    </div>
                    
                    <!-- Ride Sharing Card -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div class="relative">
                            <img src="images/transport/rideshare-detailed.svg" alt="Ride Sharing" class="w-full h-48 object-contain bg-purple-50 p-4">
                            <div class="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 rounded-bl-lg font-medium">Modern</div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="text-xl font-bold">Ride Sharing</h4>
                                <span class="text-sm font-medium bg-yellow-100 text-yellow-800 py-1 px-2 rounded">₹ Medium</span>
                            </div>
                            <p class="text-gray-600 mb-4">Modern, convenient transport with door-to-door service via mobile apps.</p>
                            
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Best for convenience, door-to-door service</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Available in major cities and tourist destinations</span>
                                </div>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                                <p class="text-sm">Popular apps like Ola and Uber operate in most Indian cities. They offer transparent pricing and convenient payment options. Always verify the driver and vehicle details before boarding.</p>
                            </div>
                            
                            <button class="transport-tip-btn w-full py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300" data-transport="rideshare">Ride-sharing tips</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <!-- Transport Options -->
                    <div class="p-6 md:p-8">
                        <h3 class="text-xl font-bold mb-6">Find Local Transport</h3>
                        
                        <!-- City Selection -->
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="city-select">
                                Select City
                            </label>
                            <select id="city-select" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="">Select a city</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="chennai">Chennai</option>
                                <option value="hyderabad">Hyderabad</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="agra">Agra</option>
                            </select>
                        </div>
                        
                        <!-- Transport Type Tabs -->
                        <div class="mb-6">
                            <div class="flex border-b">
                                <button class="py-2 px-4 font-medium text-primary border-b-2 border-primary">Auto/Taxi</button>
                                <button class="py-2 px-4 font-medium text-gray-500 hover:text-primary">Metro/Train</button>
                                <button class="py-2 px-4 font-medium text-gray-500 hover:text-primary">Bus</button>
                                <button class="py-2 px-4 font-medium text-gray-500 hover:text-primary">Ride Share</button>
                            </div>
                        </div>
                        
                        <!-- Route Planner -->
                        <div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="from-location">
                                    From
                                </label>
                                <input type="text" id="from-location" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter pickup location">
                            </div>
                            
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="to-location">
                                    To
                                </label>
                                <input type="text" id="to-location" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter destination">
                            </div>
                            
                            <button id="calculate-fare" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition duration-300">
                                Calculate Fare
                            </button>
                        </div>
                    </div>
                    
                    <!-- Fare Estimate Results -->
                    <div class="bg-gray-50 p-6 md:p-8">
                        <h3 class="text-xl font-bold mb-6">Fare Estimates</h3>
                        
                        <div id="fare-results" class="space-y-4">
                            <p class="text-gray-500 text-center py-8">
                                Select a city and route to see fare estimates
                            </p>
                            
                            <!-- Results will be dynamically inserted here -->
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Transport Tips Section Placeholder -->
            <!-- This section has been removed to eliminate duplication -->
            
            
            <!-- Transport Tips Section -->
            <div class="bg-primary bg-opacity-10 rounded-lg p-6 md:p-8 mb-12">
                <h3 class="text-xl font-bold mb-6">Transport Tips for Tourists</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                            <i class="fas fa-money-bill-wave text-xl"></i>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-bold mb-2">Fare Negotiation</h4>
                            <p class="text-gray-600">Always negotiate and agree on fares before starting your journey in auto rickshaws and taxis when meters aren't used.</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                            <i class="fas fa-mobile-alt text-xl"></i>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-bold mb-2">Mobile Apps</h4>
                            <p class="text-gray-600">Download transport apps like Ola, Uber, and city-specific metro apps for convenient travel planning.</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                            <i class="fas fa-ticket-alt text-xl"></i>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-bold mb-2">Tourist Passes</h4>
                            <p class="text-gray-600">Consider buying tourist passes for metro systems and buses in major cities for unlimited travel.</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                            <i class="fas fa-clock text-xl"></i>
                        </div>
                        <div class="ml-4">
                            <h4 class="font-bold mb-2">Peak Hours</h4>
                            <p class="text-gray-600">Avoid traveling during rush hours (9-11 AM and 5-8 PM) if possible, especially in metro cities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = transportHTML;

  
    if (document.getElementById('calculate-fare')) {
        document.getElementById('calculate-fare').addEventListener('click', calculateFareEstimate);
    }
    
    
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', handleCategoryFilter);
    });
   
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', handleDestinationCardClick);
    });
}

function calculateFareEstimate() {
    const citySelect = document.getElementById('city-select');
    const fromLocation = document.getElementById('from-location');
    const toLocation = document.getElementById('to-location');
    const fareResults = document.getElementById('fare-results');

    if (!citySelect.value || !fromLocation.value || !toLocation.value) {
        fareResults.innerHTML = `
            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>Please select a city and enter both pickup and destination locations.</p>
            </div>
        `;
        return;
    }
    
    fareResults.innerHTML = `
        <div class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            <p class="mt-2 text-gray-600">Calculating fares...</p>
        </div>
    `;
    
   
    setTimeout(() => {
      
        const mockFares = {
            auto: {
                minFare: Math.floor(Math.random() * 100) + 50,
                maxFare: Math.floor(Math.random() * 150) + 150,
                estimatedTime: Math.floor(Math.random() * 20) + 10
            },
            taxi: {
                minFare: Math.floor(Math.random() * 200) + 150,
                maxFare: Math.floor(Math.random() * 250) + 250,
                estimatedTime: Math.floor(Math.random() * 15) + 8
            },
            metro: {
                fare: Math.floor(Math.random() * 50) + 20,
                estimatedTime: Math.floor(Math.random() * 25) + 15
            },
            bus: {
                fare: Math.floor(Math.random() * 30) + 5,
                estimatedTime: Math.floor(Math.random() * 40) + 25
            }
        };
        
       
        fareResults.innerHTML = `
            <div class="space-y-4">
                <div class="p-4 border border-gray-200 rounded-md">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-taxi text-2xl text-yellow-500 mr-3"></i>
                            <div>
                                <h4 class="font-bold">Auto Rickshaw</h4>
                                <p class="text-sm text-gray-600">Best for short distances</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold">₹${mockFares.auto.minFare} - ₹${mockFares.auto.maxFare}</div>
                            <div class="text-sm text-gray-600">${mockFares.auto.estimatedTime} mins</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-4 border border-gray-200 rounded-md">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-car text-2xl text-gray-700 mr-3"></i>
                            <div>
                                <h4 class="font-bold">Taxi/Cab</h4>
                                <p class="text-sm text-gray-600">Comfortable option</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold">₹${mockFares.taxi.minFare} - ₹${mockFares.taxi.maxFare}</div>
                            <div class="text-sm text-gray-600">${mockFares.taxi.estimatedTime} mins</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-4 border border-gray-200 rounded-md">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-subway text-2xl text-blue-500 mr-3"></i>
                            <div>
                                <h4 class="font-bold">Metro</h4>
                                <p class="text-sm text-gray-600">Fastest option</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold">₹${mockFares.metro.fare}</div>
                            <div class="text-sm text-gray-600">${mockFares.metro.estimatedTime} mins</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-4 border border-gray-200 rounded-md">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <i class="fas fa-bus text-2xl text-red-600 mr-3"></i>
                            <div>
                                <h4 class="font-bold">Bus</h4>
                                <p class="text-sm text-gray-600">Budget option</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold">₹${mockFares.bus.fare}</div>
                            <div class="text-sm text-gray-600">${mockFares.bus.estimatedTime} mins</div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-4 text-sm text-gray-500">
                    <p>* Fares are approximate and may vary based on actual distance, time of travel, and availability.</p>
                </div>
            </div>
        `;
    }, 1500);
}

// Function for category filtering
function handleCategoryFilter() {
    // Implementation for filtering transport options by category
    console.log('Category filter clicked');
}

// Function for destination card clicks
function handleDestinationCardClick() {
    // Implementation for handling destination card clicks
    console.log('Destination card clicked');
}

// Function to handle transport tip button clicks
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const tipButtons = document.querySelectorAll('.transport-tip-btn');
        if (tipButtons) {
            tipButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const transportType = this.getAttribute('data-transport');
                    showTransportTips(transportType);
                });
            });
        }
    }, 1000);
});

function showTransportTips(transportType) {
    let title = '';
    let tips = [];
    
    switch(transportType) {
        case 'auto-rickshaw':
            title = 'Auto Rickshaw Tips';
            tips = [
                'Always negotiate the fare before starting your journey if meter is not used',
                'Keep small change ready as drivers may not have change for large denominations',
                'During rain or late night, expect to pay a premium',
                'In tourist areas, be prepared for higher initial price quotes',
                'Some cities have app-based auto services like Ola Auto or Uber Auto',
                'Note down the vehicle number for safety'
            ];
            break;
        case 'metro':
            title = 'Metro Travel Guide';
            tips = [
                'Purchase a smart card if staying for multiple days to avoid queues',
                'Avoid peak hours (9-11 AM and 5-8 PM) if possible',
                'Women-only carriages are usually at the end of the train',
                'Keep your token/card ready when exiting',
                'Download the official metro app of the city for maps and schedules',
                'Be mindful of the last train timings which vary by city'
            ];
            break;
        case 'taxi':
            title = 'Taxi Safety Tips';
            tips = [
                'Use pre-paid taxi services from airports and railway stations',
                'Prefer app-based services like Uber or Ola for transparent pricing',
                'Verify the driver and car details with the app information',
                'Share your trip details with a friend or family member',
                'Keep your luggage within sight at all times',
                'Ask for a receipt at the end of your journey'
            ];
            break;
        case 'bus':
            title = 'Bus Route Guide';
            tips = [
                'Ask locals or your hotel for help with bus routes and numbers',
                'Keep exact change ready for tickets',
                'Board from the front door and exit from the rear door',
                'Some cities have apps showing real-time bus locations',
                'In crowded buses, keep valuables in front pockets or bags',
                'Consider AC buses for longer journeys (slightly more expensive)'
            ];
            break;
        case 'rideshare':
            title = 'Ride Sharing Tips';
            tips = [
                'Compare prices between Uber and Ola before booking',
                'Check driver ratings and reviews before confirming',
                'Confirm the driver name and car details before getting in',
                'Use the "share trip status" feature for added safety',
                'Report any issues directly through the app',
                'Be aware of surge pricing during peak hours or bad weather'
            ];
            break;
    }
    
   
    const modalHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="transport-tips-modal">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-90vh overflow-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <button id="close-tips-modal" class="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul class="space-y-3">
                        ${tips.map(tip => `
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span>${tip}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="bg-gray-50 px-6 py-4 rounded-b-lg">
                    <p class="text-sm text-gray-600">These tips are based on common experiences. Conditions may vary by city and season.</p>
                </div>
            </div>
        </div>
    `;
    
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    

    setTimeout(() => {
        const closeButton = document.getElementById('close-tips-modal');
        const modal = document.getElementById('transport-tips-modal');
        
        if (closeButton && modal) {
            closeButton.addEventListener('click', function() {
                document.body.removeChild(modalContainer);
            });
            
        
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modalContainer);
                }
            });
        }
    }, 100);
}
