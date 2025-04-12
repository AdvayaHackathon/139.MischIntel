// Event Calendar component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events');
    if (eventsContainer) {
        renderEvents(eventsContainer);
    }
});

function renderEvents(container) {
    const eventsHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Event Calendar</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Discover local festivals, cultural events, and celebrations happening across India during your visit.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Calendar Section -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b flex justify-between items-center">
                            <h3 class="text-xl font-bold">Event Calendar</h3>
                            <div class="flex items-center">
                                <button id="prev-month" class="text-gray-600 hover:text-primary p-1">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <span id="current-month" class="mx-2 font-medium">April 2025</span>
                                <button id="next-month" class="text-gray-600 hover:text-primary p-1">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Calendar Grid -->
                        <div class="p-4">
                            <!-- Days of Week -->
                            <div class="grid grid-cols-7 gap-1 mb-2">
                                <div class="text-center font-medium text-gray-500 text-sm">Sun</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Mon</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Tue</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Wed</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Thu</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Fri</div>
                                <div class="text-center font-medium text-gray-500 text-sm">Sat</div>
                            </div>
                            
                            <!-- Calendar Dates -->
                            <div class="grid grid-cols-7 gap-1" id="calendar-dates">
                                <!-- Week 1 -->
                                <div class="h-24 border border-gray-200 rounded-md p-1 text-gray-400">30</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 text-gray-400">31</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">1</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">2</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">3</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">4</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">5</div>
                                
                                <!-- Week 2 -->
                                <div class="h-24 border border-gray-200 rounded-md p-1">6</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">7</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">8</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 relative">
                                    9
                                    <div class="absolute bottom-0 left-0 right-0 bg-accent text-white text-xs p-1 truncate">
                                        Baisakhi
                                    </div>
                                </div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">10</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">11</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">12</div>
                                
                                <!-- Week 3 -->
                                <div class="h-24 border border-gray-200 rounded-md p-1">13</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 relative">
                                    14
                                    <div class="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs p-1 truncate">
                                        Ambedkar Jayanti
                                    </div>
                                </div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">15</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">16</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">17</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">18</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">19</div>
                                
                                <!-- Week 4 -->
                                <div class="h-24 border border-gray-200 rounded-md p-1">20</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">21</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">22</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">23</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">24</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">25</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">26</div>
                                
                                <!-- Week 5 -->
                                <div class="h-24 border border-gray-200 rounded-md p-1">27</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">28</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">29</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1">30</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 text-gray-400">1</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 text-gray-400">2</div>
                                <div class="h-24 border border-gray-200 rounded-md p-1 text-gray-400">3</div>
                            </div>
                        </div>
                        
                        <!-- Calendar Legend -->
                        <div class="p-4 border-t">
                            <div class="flex flex-wrap gap-4">
                                <div class="flex items-center">
                                    <div class="w-4 h-4 bg-primary rounded-sm mr-2"></div>
                                    <span class="text-sm">National Holiday</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-4 h-4 bg-accent rounded-sm mr-2"></div>
                                    <span class="text-sm">Festival</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-4 h-4 bg-secondary rounded-sm mr-2"></div>
                                    <span class="text-sm">Local Event</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-4 h-4 bg-success-color rounded-sm mr-2"></div>
                                    <span class="text-sm">Cultural Show</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Upcoming Events -->
                <div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b">
                            <h3 class="text-xl font-bold">Upcoming Events</h3>
                        </div>
                        
                        <!-- Event Filters -->
                        <div class="p-4 border-b">
                            <div class="flex flex-wrap gap-2">
                                <button class="event-filter-btn bg-primary text-white px-3 py-1 rounded-full text-sm" data-filter="all">All</button>
                                <button class="event-filter-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-filter="festivals">Festivals</button>
                                <button class="event-filter-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-filter="cultural">Cultural</button>
                                <button class="event-filter-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-filter="local">Local</button>
                            </div>
                        </div>
                        
                        <!-- Events List -->
                        <div class="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
                            <!-- Event Item 1 -->
                            <div class="p-4 hover:bg-gray-50 event-item" data-type="festivals">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-accent text-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                                        <div class="text-center">
                                            <div class="text-xs font-bold">APR</div>
                                            <div class="text-lg font-bold">9</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Baisakhi</h4>
                                        <p class="text-gray-600 text-sm mb-1">Harvest festival celebrated across North India, especially in Punjab.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Punjab, Haryana, Delhi</span>
                                            <span><i class="far fa-clock mr-1"></i> All Day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Event Item 2 -->
                            <div class="p-4 hover:bg-gray-50 event-item" data-type="festivals">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-primary text-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                                        <div class="text-center">
                                            <div class="text-xs font-bold">APR</div>
                                            <div class="text-lg font-bold">14</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Ambedkar Jayanti</h4>
                                        <p class="text-gray-600 text-sm mb-1">Birth anniversary of Dr. B.R. Ambedkar, celebrated nationwide.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> All India</span>
                                            <span><i class="far fa-clock mr-1"></i> All Day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Event Item 3 -->
                            <div class="p-4 hover:bg-gray-50 event-item" data-type="cultural">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-success-color text-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                                        <div class="text-center">
                                            <div class="text-xs font-bold">APR</div>
                                            <div class="text-lg font-bold">15</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Kathak Dance Performance</h4>
                                        <p class="text-gray-600 text-sm mb-1">Traditional Kathak dance performance by renowned artists.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Delhi</span>
                                            <span><i class="far fa-clock mr-1"></i> 6:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Event Item 4 -->
                            <div class="p-4 hover:bg-gray-50 event-item" data-type="local">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-secondary text-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                                        <div class="text-center">
                                            <div class="text-xs font-bold">APR</div>
                                            <div class="text-lg font-bold">18</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Jaipur Heritage Walk</h4>
                                        <p class="text-gray-600 text-sm mb-1">Guided tour of Jaipur's historic sites and hidden gems.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Jaipur</span>
                                            <span><i class="far fa-clock mr-1"></i> 9:00 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Event Item 5 -->
                            <div class="p-4 hover:bg-gray-50 event-item" data-type="festivals">
                                <div class="flex items-start">
                                    <div class="w-12 h-12 bg-accent text-white rounded-md flex items-center justify-center mr-3 flex-shrink-0">
                                        <div class="text-center">
                                            <div class="text-xs font-bold">APR</div>
                                            <div class="text-lg font-bold">22</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Earth Day Celebration</h4>
                                        <p class="text-gray-600 text-sm mb-1">Environmental awareness events and tree planting ceremonies.</p>
                                        <div class="flex items-center text-xs text-gray-500">
                                            <span class="mr-3"><i class="fas fa-map-marker-alt mr-1"></i> Multiple Cities</span>
                                            <span><i class="far fa-clock mr-1"></i> Various Times</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Add to Calendar Button -->
                        <div class="p-4 border-t">
                            <button id="add-to-calendar" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
                                <i class="fas fa-calendar-plus mr-2"></i> Add to My Calendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- City Events Section -->
            <div class="mt-12">
                <h3 class="text-2xl font-bold text-center mb-8">Popular Cities & Events</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- City 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden city-card">
                        <div class="h-48 relative">
                            <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Delhi" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h3 class="text-xl font-bold">Delhi</h3>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="text-sm text-gray-600 mb-2">Upcoming Events:</div>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Ambedkar Jayanti (Apr 14)</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Kathak Dance (Apr 15)</span>
                                </li>
                            </ul>
                            <button class="mt-3 text-primary hover:text-primary-dark font-medium text-sm city-events-btn" data-city="delhi">
                                View All Delhi Events <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- City 2 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden city-card">
                        <div class="h-48 relative">
                            <img src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mumbai" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h3 class="text-xl font-bold">Mumbai</h3>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="text-sm text-gray-600 mb-2">Upcoming Events:</div>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Film Festival (Apr 20)</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Street Food Festival (Apr 25)</span>
                                </li>
                            </ul>
                            <button class="mt-3 text-primary hover:text-primary-dark font-medium text-sm city-events-btn" data-city="mumbai">
                                View All Mumbai Events <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- City 3 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden city-card">
                        <div class="h-48 relative">
                            <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Jaipur" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h3 class="text-xl font-bold">Jaipur</h3>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="text-sm text-gray-600 mb-2">Upcoming Events:</div>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Heritage Walk (Apr 18)</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Puppet Show (Apr 23)</span>
                                </li>
                            </ul>
                            <button class="mt-3 text-primary hover:text-primary-dark font-medium text-sm city-events-btn" data-city="jaipur">
                                View All Jaipur Events <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- City 4 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden city-card">
                        <div class="h-48 relative">
                            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Agra" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                            <div class="absolute bottom-4 left-4 text-white">
                                <h3 class="text-xl font-bold">Agra</h3>
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="text-sm text-gray-600 mb-2">Upcoming Events:</div>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Taj Mahotsav (Apr 28)</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-calendar-day text-primary mr-2"></i>
                                    <span>Craft Fair (Apr 30)</span>
                                </li>
                            </ul>
                            <button class="mt-3 text-primary hover:text-primary-dark font-medium text-sm city-events-btn" data-city="agra">
                                View All Agra Events <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = eventsHTML;
    
    // Initialize events functionality
    initEvents();
}

function initEvents() {
    // Calendar navigation
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthEl = document.getElementById('current-month');
    
    // Current date for the calendar
    let currentDate = new Date(2025, 3, 9); // April 9, 2025
    
    if (prevMonthBtn && nextMonthBtn && currentMonthEl) {
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendarMonth();
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendarMonth();
        });
        
        function updateCalendarMonth() {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthEl.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
            
            // In a real app, this would update the calendar grid with the correct dates
            alert(`In a real app, this would update the calendar to show ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
        }
    }
    
    // Event filter buttons
    const filterButtons = document.querySelectorAll('.event-filter-btn');
    const eventItems = document.querySelectorAll('.event-item');
    
    if (filterButtons.length > 0 && eventItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter events
                eventItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-type') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Add to Calendar button
    const addToCalendarBtn = document.getElementById('add-to-calendar');
    if (addToCalendarBtn) {
        addToCalendarBtn.addEventListener('click', function() {
            // In a real app, this would open a modal to select events to add to calendar
            alert('In a real app, this would allow you to add selected events to your device calendar');
        });
    }
    
    // City events buttons
    const cityEventsButtons = document.querySelectorAll('.city-events-btn');
    if (cityEventsButtons.length > 0) {
        cityEventsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const city = this.getAttribute('data-city');
                
                // In a real app, this would navigate to a page with all events for the selected city
                alert(`In a real app, this would show all events in ${city}`);
            });
        });
    }
}
