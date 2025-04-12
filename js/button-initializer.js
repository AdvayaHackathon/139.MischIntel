// Button Initializer for TRAVEL YATRA
// This file ensures all buttons across the application are properly initialized and functional

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing all buttons across the application');
    
    // Wait a short time to ensure all components are loaded
    setTimeout(initializeAllButtons, 500);
});

function initializeAllButtons() {
    // Initialize buttons in all sections
    initHeaderButtons();
    initHeroButtons();
    initFeatureButtons();
    initTranslatorButtons();
    initSafetyAlertButtons();
    initTransportButtons();
    initItineraryButtons();
    initCleanPlacesButtons();
    initCulturalGuideButtons();
    initOfflineModeButtons();
    initEmergencyButtons();
    initEventButtons();
    initPaymentTipsButtons();
    
    console.log('All buttons have been initialized');
}

function initHeaderButtons() {
    // Mobile menu button (already handled in header.js but adding as backup)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            console.log('Mobile menu toggled');
        });
    }
    
    // Language selector (already handled in main.js but adding as backup)
    const languageSelector = document.getElementById('language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            console.log(`Language changed to: ${selectedLanguage}`);
        });
    }
}

function initHeroButtons() {
    // Start Exploring button
    const startExploringBtn = document.querySelector('.hero-overlay + div .bg-primary');
    if (startExploringBtn) {
        startExploringBtn.addEventListener('click', function() {
            console.log('Start Exploring clicked');
            // Open the explore map modal
            if (typeof window.showExploreMap === 'function') {
                window.showExploreMap();
            } else {
                alert('Map functionality is not available. Please try again later.');
            }
        });
    }
    
    // Learn More button
    const learnMoreBtn = document.querySelector('.hero-overlay + div .bg-white.text-primary');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            console.log('Learn More clicked');
            // Scroll to about section or show modal with more information
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Show modal with more information
                alert('TRAVEL YATRA is your ultimate travel companion for exploring India safely and comfortably. Our app provides language translation, safety alerts, transport assistance, cultural guidance, and emergency help for travelers.');
            }
        });
    }
    
    // Language selection in hero section
    const languageSpans = document.querySelectorAll('.hero-overlay + div .mt-12 span');
    if (languageSpans.length > 0) {
        languageSpans.forEach(span => {
            span.classList.add('cursor-pointer', 'hover:bg-white', 'hover:bg-opacity-30');
            span.addEventListener('click', function() {
                const language = this.textContent.trim();
                console.log(`Language selected: ${language}`);
                
                // If it's the "+ More" button
                if (language === '+ More') {
                    // Show language selection modal or expand language options
                    alert('This would show a complete list of supported languages');
                } else {
                    // Set the language in the language selector
                    const languageSelector = document.getElementById('language-selector');
                    const mobileLangSelector = document.getElementById('mobile-language-selector');
                    
                    // Map the display language to the value in the selector
                    const languageMap = {
                        'English': 'en',
                        'हिंदी': 'hi',
                        'ಕನ್ನಡ': 'kn',
                        'தமிழ்': 'ta',
                        'বাংলা': 'bn',
                        'తెలుగు': 'te'
                    };
                    
                    const langValue = languageMap[language];
                    
                    if (langValue && languageSelector) {
                        languageSelector.value = langValue;
                        // Trigger change event
                        const event = new Event('change');
                        languageSelector.dispatchEvent(event);
                    }
                    
                    if (langValue && mobileLangSelector) {
                        mobileLangSelector.value = langValue;
                        // Trigger change event
                        const event = new Event('change');
                        mobileLangSelector.dispatchEvent(event);
                    }
                    
                    alert(`Language changed to ${language}`);
                }
            });
        });
    }
    
    // Search button in hero section
    const searchBtn = document.querySelector('.hero-overlay + div + div .bg-primary');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.querySelector('.hero-overlay + div + div input');
            const stateSelect = document.querySelector('.hero-overlay + div + div select');
            
            const searchQuery = searchInput ? searchInput.value.trim() : '';
            const selectedState = stateSelect ? stateSelect.value : '';
            
            if (!searchQuery) {
                alert('Please enter a destination to search');
                return;
            }
            
            console.log(`Searching for: ${searchQuery} in ${selectedState || 'all states'}`);
            alert(`This would search for tourist destinations in ${searchQuery} ${selectedState ? 'in ' + selectedState : ''}`);
        });
    }
}

function initFeatureButtons() {
    // Feature card buttons
    const featureButtons = document.querySelectorAll('#features .feature-card button');
    
    featureButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featureType = this.getAttribute('data-feature');
            console.log(`Feature button clicked: ${featureType}`);
            
            // Scroll to the corresponding section
            const targetSection = document.getElementById(featureType);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initTranslatorButtons() {
    // Translator buttons
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        translateBtn.addEventListener('click', function() {
            const inputText = document.getElementById('input-text');
            const outputText = document.getElementById('output-text');
            
            if (inputText && outputText && inputText.value.trim()) {
                // Mock translation
                outputText.value = `Translated: ${inputText.value}`;
                console.log('Text translated');
            } else {
                alert('Please enter text to translate');
            }
        });
    }
    
    // Voice translation buttons
    const startRecordingBtn = document.getElementById('start-recording');
    const stopRecordingBtn = document.getElementById('stop-recording');
    
    if (startRecordingBtn) {
        startRecordingBtn.addEventListener('click', function() {
            console.log('Voice recording started');
            alert('Voice recording started (mock functionality)');
            
            if (stopRecordingBtn) {
                startRecordingBtn.classList.add('hidden');
                stopRecordingBtn.classList.remove('hidden');
            }
        });
    }
    
    if (stopRecordingBtn) {
        stopRecordingBtn.addEventListener('click', function() {
            console.log('Voice recording stopped');
            alert('Voice recording stopped and translated (mock functionality)');
            
            if (startRecordingBtn) {
                stopRecordingBtn.classList.add('hidden');
                startRecordingBtn.classList.remove('hidden');
            }
        });
    }
    
    // Swap languages button
    const swapButton = document.getElementById('swap-languages');
    if (swapButton) {
        swapButton.addEventListener('click', function() {
            const fromLanguage = document.getElementById('from-language');
            const toLanguage = document.getElementById('to-language');
            
            if (fromLanguage && toLanguage) {
                const tempValue = fromLanguage.value;
                fromLanguage.value = toLanguage.value;
                toLanguage.value = tempValue;
                console.log('Languages swapped');
            }
        });
    }
    
    // Copy translation button
    const copyButton = document.getElementById('copy-translation');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const outputText = document.getElementById('output-text');
            
            if (outputText && outputText.value.trim()) {
                navigator.clipboard.writeText(outputText.value)
                    .then(() => {
                        console.log('Translation copied to clipboard');
                        alert('Translation copied to clipboard');
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                        alert('Failed to copy to clipboard');
                    });
            }
        });
    }
}

function initSafetyAlertButtons() {
    // Safety alert filter buttons
    const filterButtons = document.querySelectorAll('#safety-alerts button.bg-gray-200');
    const activeButton = document.querySelector('#safety-alerts button.bg-primary');
    
    if (filterButtons.length > 0 && activeButton) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from current active button
                document.querySelectorAll('#safety-alerts button.bg-primary').forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                console.log(`Safety alert filter: ${this.textContent.trim()}`);
            });
        });
    }
    
    // View all alerts button
    const viewAllButton = document.querySelector('#safety-alerts button.text-primary');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            console.log('View all alerts clicked');
            alert('This would show all safety alerts');
        });
    }
    
    // Report alert button
    const reportButton = document.querySelector('#safety-alerts button.bg-danger-color');
    if (reportButton) {
        reportButton.addEventListener('click', function() {
            console.log('Report alert button clicked');
            alert('Report Alert form would open here');
        });
    }
}

function initTransportButtons() {
    // Transport type tabs
    const transportTabs = document.querySelectorAll('#transport .flex.border-b button');
    
    if (transportTabs.length > 0) {
        transportTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                transportTabs.forEach(t => {
                    t.classList.remove('text-primary', 'border-b-2', 'border-primary');
                    t.classList.add('text-gray-500');
                });
                
                // Add active class to clicked tab
                this.classList.remove('text-gray-500');
                this.classList.add('text-primary', 'border-b-2', 'border-primary');
                
                console.log(`Selected transport type: ${this.textContent.trim()}`);
            });
        });
    }
    
    // Calculate fare button
    const calculateFareBtn = document.getElementById('calculate-fare');
    const fareResults = document.getElementById('fare-results');
    
    if (calculateFareBtn && fareResults) {
        calculateFareBtn.addEventListener('click', function() {
            const citySelect = document.getElementById('city-select');
            const fromLocation = document.getElementById('from-location');
            const toLocation = document.getElementById('to-location');
            
            if (!citySelect || !citySelect.value) {
                alert('Please select a city');
                return;
            }
            
            if (!fromLocation || !fromLocation.value.trim() || !toLocation || !toLocation.value.trim()) {
                alert('Please enter both pickup and destination locations');
                return;
            }
            
            console.log(`Calculating fare from ${fromLocation.value} to ${toLocation.value} in ${citySelect.value}`);
            alert(`Fare calculation: ${fromLocation.value} to ${toLocation.value} in ${citySelect.value}`);
            
            // Show mock results
            fareResults.innerHTML = `
                <div class="mb-4">
                    <p class="text-sm text-gray-500">Estimated fares from <span class="font-medium">${fromLocation.value}</span> to <span class="font-medium">${toLocation.value}</span> in <span class="font-medium">${citySelect.value}</span>:</p>
                </div>
                
                <div class="space-y-3">
                    <div class="bg-white p-4 rounded-md border border-gray-200 hover:border-primary cursor-pointer">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <div class="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <i class="fas fa-taxi"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">Auto Rickshaw</h4>
                                    <p class="text-xs text-gray-500">15-20 min</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="font-bold">₹${Math.floor(Math.random() * 100) + 50}-${Math.floor(Math.random() * 100) + 100}</div>
                                <p class="text-xs text-gray-500">Cash only</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

function initItineraryButtons() {
    // Add day button
    const addDayBtn = document.getElementById('add-day-btn');
    const itineraryDays = document.getElementById('itinerary-days');
    
    if (addDayBtn && itineraryDays) {
        addDayBtn.addEventListener('click', function() {
            const dayCount = itineraryDays.querySelectorAll('.itinerary-day').length + 1;
            
            console.log(`Adding day ${dayCount} to itinerary`);
            alert(`Day ${dayCount} added to itinerary`);
            
            // In a real app, this would add a new day to the itinerary
        });
    }
    
    // Save itinerary button
    const saveItineraryBtn = document.getElementById('save-itinerary');
    if (saveItineraryBtn) {
        saveItineraryBtn.addEventListener('click', function() {
            console.log('Saving itinerary');
            alert('Itinerary saved successfully');
        });
    }
    
    // Share itinerary button
    const shareItineraryBtn = document.getElementById('share-itinerary');
    if (shareItineraryBtn) {
        shareItineraryBtn.addEventListener('click', function() {
            console.log('Sharing itinerary');
            alert('Share options would appear here');
        });
    }
}

function initCleanPlacesButtons() {
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('#clean-places button.bg-gray-200');
    const activeCategoryButton = document.querySelector('#clean-places button.bg-primary');
    
    if (categoryButtons.length > 0 && activeCategoryButton) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from current active button
                document.querySelectorAll('#clean-places button.bg-primary').forEach(btn => {
                    if (btn.querySelector('i')) { // Only target category buttons
                        btn.classList.remove('bg-primary', 'text-white');
                        btn.classList.add('bg-gray-200', 'text-gray-700');
                    }
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                console.log(`Clean places category filter: ${this.textContent.trim()}`);
            });
        });
    }
    
    // Map control buttons
    const mapControlButtons = document.querySelectorAll('#clean-places-map + div button');
    if (mapControlButtons.length > 0) {
        mapControlButtons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('title');
                console.log(`Map control: ${action}`);
                alert(`Map control: ${action}`);
            });
        });
    }
    
    // Filter reset button
    const resetFilterButton = document.querySelector('#clean-places button.text-primary');
    if (resetFilterButton) {
        resetFilterButton.addEventListener('click', function() {
            console.log('Reset filters clicked');
            alert('Filters have been reset');
            
            // Reset range and checkboxes
            const rangeInputs = document.querySelectorAll('#clean-places input[type="range"]');
            rangeInputs.forEach(input => {
                input.value = input.defaultValue;
            });
            
            const checkboxes = document.querySelectorAll('#clean-places input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }
    
    // Place items
    const placeItems = document.querySelectorAll('#clean-places .place-item');
    if (placeItems.length > 0) {
        placeItems.forEach(item => {
            item.addEventListener('click', function() {
                const placeId = this.getAttribute('data-id');
                console.log(`Selected place: ${placeId}`);
                
                // Highlight selected item
                placeItems.forEach(p => p.classList.remove('bg-blue-100'));
                this.classList.add('bg-blue-100');
                
                alert(`Selected place: ${this.querySelector('h4').textContent}`);
            });
        });
    }
}

function initCulturalGuideButtons() {
    // Cultural guide tabs
    const culturalTabs = document.querySelectorAll('#cultural-guide .tab-button');
    
    if (culturalTabs.length > 0) {
        culturalTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                culturalTabs.forEach(t => {
                    t.classList.remove('bg-primary', 'text-white');
                    t.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked tab
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                // Hide all content
                document.querySelectorAll('#cultural-guide .tab-content').forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show selected content
                const selectedContent = document.getElementById(`${tabId}-content`);
                if (selectedContent) {
                    selectedContent.classList.remove('hidden');
                }
                
                console.log(`Cultural guide tab: ${tabId}`);
            });
        });
    }
    
    // Learn more buttons
    const learnMoreButtons = document.querySelectorAll('#cultural-guide .learn-more-btn');
    if (learnMoreButtons.length > 0) {
        learnMoreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const topic = this.getAttribute('data-topic');
                console.log(`Learn more about: ${topic}`);
                alert(`This would show more information about ${topic}`);
            });
        });
    }
}

function initOfflineModeButtons() {
    // Download buttons
    const downloadButtons = document.querySelectorAll('#offline-mode .download-btn');
    
    if (downloadButtons.length > 0) {
        downloadButtons.forEach(button => {
            button.addEventListener('click', function() {
                const contentType = this.getAttribute('data-type');
                console.log(`Downloading offline content: ${contentType}`);
                alert(`This would download ${contentType} for offline use`);
            });
        });
    }
    
    // Manage storage button
    const manageStorageBtn = document.getElementById('manage-storage');
    if (manageStorageBtn) {
        manageStorageBtn.addEventListener('click', function() {
            console.log('Manage storage clicked');
            alert('This would open storage management options');
        });
    }
}

function initEmergencyButtons() {
    // Emergency contact buttons
    const emergencyContactButtons = document.querySelectorAll('#emergency .emergency-contact-btn');
    
    if (emergencyContactButtons.length > 0) {
        emergencyContactButtons.forEach(button => {
            button.addEventListener('click', function() {
                const contactType = this.getAttribute('data-contact');
                console.log(`Emergency contact: ${contactType}`);
                alert(`This would call ${contactType}`);
            });
        });
    }
    
    // Service type buttons
    const serviceTypeButtons = document.querySelectorAll('#emergency .service-type-btn');
    
    if (serviceTypeButtons.length > 0) {
        serviceTypeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                serviceTypeButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                const serviceType = this.getAttribute('data-service');
                console.log(`Emergency service type: ${serviceType}`);
            });
        });
    }
    
    // Emergency phrase buttons
    const emergencyPhraseButtons = document.querySelectorAll('#emergency .emergency-phrase-btn');
    
    if (emergencyPhraseButtons.length > 0) {
        emergencyPhraseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const phrase = this.getAttribute('data-phrase');
                const language = document.getElementById('emergency-language-select')?.value || 'hindi';
                
                console.log(`Playing emergency phrase: ${phrase} in ${language}`);
                alert(`This would play the phrase "${phrase}" in ${language}`);
            });
        });
    }
    
    // Share location button
    const shareLocationBtn = document.getElementById('share-location-btn');
    if (shareLocationBtn) {
        shareLocationBtn.addEventListener('click', function() {
            console.log('Share location clicked');
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        console.log(`Location: ${latitude}, ${longitude}`);
                        alert(`Your location (${latitude}, ${longitude}) would be shared with emergency services`);
                    },
                    error => {
                        console.error('Error getting location:', error);
                        alert('Unable to get your location. Please enable location services.');
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser');
            }
        });
    }
}

function initEventButtons() {
    // Calendar navigation
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', function() {
            console.log('Previous month clicked');
            alert('This would show the previous month');
        });
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', function() {
            console.log('Next month clicked');
            alert('This would show the next month');
        });
    }
    
    // Event filter buttons
    const eventFilterButtons = document.querySelectorAll('.event-filter-btn');
    
    if (eventFilterButtons.length > 0) {
        eventFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                eventFilterButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                const filter = this.getAttribute('data-filter');
                console.log(`Event filter: ${filter}`);
                
                // Filter events
                const eventItems = document.querySelectorAll('.event-item');
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
            console.log('Add to calendar clicked');
            alert('This would allow you to add selected events to your device calendar');
        });
    }
    
    // City events buttons
    const cityEventsButtons = document.querySelectorAll('.city-events-btn');
    if (cityEventsButtons.length > 0) {
        cityEventsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const city = this.getAttribute('data-city');
                console.log(`City events: ${city}`);
                alert(`This would show all events in ${city}`);
            });
        });
    }
}

function initPaymentTipsButtons() {
    // Payment method tabs
    const paymentTabs = document.querySelectorAll('.payment-tab');
    
    if (paymentTabs.length > 0) {
        paymentTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                paymentTabs.forEach(t => {
                    t.classList.remove('text-primary', 'border-b-2', 'border-primary');
                    t.classList.add('text-gray-500');
                });
                
                // Add active class to clicked tab
                this.classList.remove('text-gray-500');
                this.classList.add('text-primary', 'border-b-2', 'border-primary');
                
                // Hide all content
                document.querySelectorAll('.payment-content').forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show selected content
                const tabId = this.getAttribute('data-tab');
                const selectedContent = document.getElementById(`${tabId}-content`);
                if (selectedContent) {
                    selectedContent.classList.remove('hidden');
                }
                
                console.log(`Payment tab: ${tabId}`);
            });
        });
    }
    
    // Payment app info buttons
    const paymentInfoButtons = document.querySelectorAll('.payment-info-btn');
    
    if (paymentInfoButtons.length > 0) {
        paymentInfoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const app = this.getAttribute('data-app');
                console.log(`Payment app info: ${app}`);
                alert(`This would show detailed information about ${app}`);
            });
        });
    }
}
