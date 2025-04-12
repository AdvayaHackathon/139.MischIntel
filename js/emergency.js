// Emergency Help component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const emergencyContainer = document.getElementById('emergency');
    if (emergencyContainer) {
        renderEmergency(emergencyContainer);
    }
});

function renderEmergency(container) {
    const emergencyHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Emergency Help</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Quick access to emergency services, hospitals, and police stations with multilingual support for crisis situations.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Emergency Contacts -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-danger-color p-4 text-white">
                        <h3 class="text-xl font-bold">Emergency Contacts</h3>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">All Emergencies</p>
                                    <p class="font-bold text-xl">112</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="112">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-ambulance text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">Ambulance</p>
                                    <p class="font-bold text-xl">108</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="108">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-shield-alt text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">Police</p>
                                    <p class="font-bold text-xl">100</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="100">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-fire-extinguisher text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">Fire</p>
                                    <p class="font-bold text-xl">101</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="101">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-female text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">Women Helpline</p>
                                    <p class="font-bold text-xl">1091</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="1091">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-danger-color flex items-center justify-center text-white mr-4">
                                    <i class="fas fa-plane text-xl"></i>
                                </div>
                                <div>
                                    <p class="text-gray-500 text-sm">Tourist Helpline</p>
                                    <p class="font-bold text-xl">1363</p>
                                </div>
                                <button class="ml-auto bg-primary text-white p-2 rounded-full call-emergency" data-number="1363">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Nearby Emergency Services Map -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-danger-color p-4 text-white">
                        <h3 class="text-xl font-bold">Nearby Emergency Services</h3>
                    </div>
                    <div class="p-6">
                        <!-- Location Selection -->
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="location-search">
                                Your Location
                            </label>
                            <div class="relative">
                                <input id="location-search" type="text" placeholder="Enter your location..." class="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <i class="fas fa-map-marker-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <button id="use-current-location" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                                    <i class="fas fa-crosshairs"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Service Type Selection -->
                        <div class="mb-4 flex flex-wrap gap-2">
                            <button class="service-type-btn bg-primary text-white px-3 py-1 rounded-full text-sm" data-type="all">All</button>
                            <button class="service-type-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-type="hospital">Hospitals</button>
                            <button class="service-type-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-type="police">Police</button>
                            <button class="service-type-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm" data-type="embassy">Embassies</button>
                        </div>
                        
                        <!-- Map Container -->
                        <div id="emergency-map" class="w-full h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                            <div class="text-center">
                                <i class="fas fa-map-marked-alt text-4xl text-gray-400 mb-2"></i>
                                <p class="text-gray-500">Map will appear here</p>
                                <p class="text-gray-500 text-sm">Please enter your location</p>
                            </div>
                        </div>
                        
                        <!-- Search Button -->
                        <button id="search-emergency-services" class="w-full bg-danger-color hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                            Find Emergency Services
                        </button>
                    </div>
                </div>
                
                <!-- Emergency Phrases -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-danger-color p-4 text-white">
                        <h3 class="text-xl font-bold">Emergency Phrases</h3>
                    </div>
                    <div class="p-6">
                        <!-- Language Selection -->
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="emergency-language">
                                Select Language
                            </label>
                            <select id="emergency-language" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="hi">Hindi</option>
                                <option value="kn">Kannada</option>
                                <option value="ta">Tamil</option>
                                <option value="bn">Bengali</option>
                                <option value="te">Telugu</option>
                                <option value="ml">Malayalam</option>
                            </select>
                        </div>
                        
                        <!-- Emergency Phrases List -->
                        <div class="space-y-3 max-h-[300px] overflow-y-auto">
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">I need help!</p>
                                <p class="text-primary mt-1" id="phrase-help">मुझे मदद चाहिए! (Mujhe madad chahiye!)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="help">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                            
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">Call an ambulance!</p>
                                <p class="text-primary mt-1" id="phrase-ambulance">एम्बुलेंस बुलाओ! (Ambulance bulao!)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="ambulance">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                            
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">Call the police!</p>
                                <p class="text-primary mt-1" id="phrase-police">पुलिस को बुलाओ! (Police ko bulao!)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="police">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                            
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">I am injured!</p>
                                <p class="text-primary mt-1" id="phrase-injured">मैं घायल हूँ! (Main ghayal hoon!)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="injured">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                            
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">Where is the nearest hospital?</p>
                                <p class="text-primary mt-1" id="phrase-hospital">नज़दीकी अस्पताल कहाँ है? (Nazdeeki aspatal kahan hai?)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="hospital">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                            
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="font-semibold">I need a doctor!</p>
                                <p class="text-primary mt-1" id="phrase-doctor">मुझे डॉक्टर चाहिए! (Mujhe doctor chahiye!)</p>
                                <button class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded play-phrase" data-phrase="doctor">
                                    <i class="fas fa-volume-up mr-1"></i> Play
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Emergency Steps Section -->
            <div class="mt-12">
                <h3 class="text-2xl font-bold text-center mb-8">What to Do in an Emergency</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Step 1 -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 rounded-full bg-danger-color text-white flex items-center justify-center mb-4 mx-auto">
                            <span class="font-bold">1</span>
                        </div>
                        <h4 class="font-bold text-lg text-center mb-2">Stay Calm</h4>
                        <p class="text-gray-600 text-center">
                            Take deep breaths and try to remain calm. Panic can cloud judgment in emergency situations.
                        </p>
                    </div>
                    
                    <!-- Step 2 -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 rounded-full bg-danger-color text-white flex items-center justify-center mb-4 mx-auto">
                            <span class="font-bold">2</span>
                        </div>
                        <h4 class="font-bold text-lg text-center mb-2">Assess the Situation</h4>
                        <p class="text-gray-600 text-center">
                            Quickly evaluate what happened and if anyone is injured. Check for immediate dangers.
                        </p>
                    </div>
                    
                    <!-- Step 3 -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 rounded-full bg-danger-color text-white flex items-center justify-center mb-4 mx-auto">
                            <span class="font-bold">3</span>
                        </div>
                        <h4 class="font-bold text-lg text-center mb-2">Call for Help</h4>
                        <p class="text-gray-600 text-center">
                            Dial the appropriate emergency number (112 for all emergencies in India).
                        </p>
                    </div>
                    
                    <!-- Step 4 -->
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="w-12 h-12 rounded-full bg-danger-color text-white flex items-center justify-center mb-4 mx-auto">
                            <span class="font-bold">4</span>
                        </div>
                        <h4 class="font-bold text-lg text-center mb-2">Share Your Location</h4>
                        <p class="text-gray-600 text-center">
                            Use the "Share Location" button below to send your exact coordinates to emergency services.
                        </p>
                    </div>
                </div>
                
                <!-- Share Location Button -->
                <div class="mt-8 text-center">
                    <button id="share-location-btn" class="bg-danger-color hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                        <i class="fas fa-share-location mr-2"></i> Share My Location
                    </button>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = emergencyHTML;
    
    // Initialize emergency functionality
    initEmergency();
}

function initEmergency() {
 
    const callButtons = document.querySelectorAll('.call-emergency');
    if (callButtons) {
        callButtons.forEach(button => {
            button.addEventListener('click', function() {
                const number = this.getAttribute('data-number');
             
                alert(`In a real app, this would call emergency number: ${number}`);
            });
        });
    }

    const serviceTypeButtons = document.querySelectorAll('.service-type-btn');
    if (serviceTypeButtons) {
        serviceTypeButtons.forEach(button => {
            button.addEventListener('click', function() {
               
                serviceTypeButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
             
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                const serviceType = this.getAttribute('data-type');
                console.log(`Filtering emergency services for: ${serviceType}`);
            });
        });
    }
    

    const useCurrentLocationBtn = document.getElementById('use-current-location');
    if (useCurrentLocationBtn) {
        useCurrentLocationBtn.addEventListener('click', function() {
          
            document.getElementById('location-search').value = 'Current Location';
            alert('In a real app, this would access your device\'s GPS to get your current location');
        });
    }
    
    // Search emergency services button
    const searchServicesBtn = document.getElementById('search-emergency-services');
    if (searchServicesBtn) {
        searchServicesBtn.addEventListener('click', function() {
            const location = document.getElementById('location-search').value;
            
            if (location) {
                // Show loading state in map
                const mapContainer = document.getElementById('emergency-map');
                if (mapContainer) {
                    mapContainer.innerHTML = `
                        <div class="text-center">
                            <i class="fas fa-spinner fa-spin text-4xl text-gray-400 mb-2"></i>
                            <p class="text-gray-500">Loading emergency services near ${location}...</p>
                        </div>
                    `;

                    setTimeout(() => {
                        
                        mapContainer.innerHTML = `
                            <div class="relative w-full h-full">
                                <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                    <p class="text-gray-500">Map API would show emergency services here</p>
                                </div>
                                <div class="absolute top-2 right-2 bg-white p-2 rounded-md shadow-md">
                                    <div class="flex items-center mb-2">
                                        <div class="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                                        <span class="text-xs">Hospitals</span>
                                    </div>
                                    <div class="flex items-center mb-2">
                                        <div class="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                                        <span class="text-xs">Police Stations</span>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                                        <span class="text-xs">Embassies</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }, 1500);
                }
            } else {
                alert('Please enter your location first');
            }
        });
    }
    
    // Emergency language selector
    const emergencyLanguage = document.getElementById('emergency-language');
    if (emergencyLanguage) {
        emergencyLanguage.addEventListener('change', function() {
            const language = this.value;
            
            const phrases = {
                'hi': {
                    'help': 'मुझे मदद चाहिए! (Mujhe madad chahiye!)',
                    'ambulance': 'एम्बुलेंस बुलाओ! (Ambulance bulao!)',
                    'police': 'पुलिस को बुलाओ! (Police ko bulao!)',
                    'injured': 'मैं घायल हूँ! (Main ghayal hoon!)',
                    'hospital': 'नज़दीकी अस्पताल कहाँ है? (Nazdeeki aspatal kahan hai?)',
                    'doctor': 'मुझे डॉक्टर चाहिए! (Mujhe doctor chahiye!)'
                },
                'kn': {
                    'help': 'ನನಗೆ ಸಹಾಯ ಬೇಕು! (Nanage sahaya beku!)',
                    'ambulance': 'ಆಂಬುಲೆನ್ಸ್ ಕರೆಯಿರಿ! (Ambulance kareyiri!)',
                    'police': 'ಪೊಲೀಸರನ್ನು ಕರೆಯಿರಿ! (Police karayiri!)',
                    'injured': 'ನಾನು ಗಾಯಗೊಂಡಿದ್ದೇನೆ! (Naanu gaayagondidhene!)',
                    'hospital': 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ? (Hattirada aspatre ellide?)',
                    'doctor': 'ನನಗೆ ವೈದ್ಯರ ಅಗತ್ಯವಿದೆ! (Nanage vaidyara agatyavide!)'
                },
                'ta': {
                    'help': 'எனக்கு உதவி தேவை! (Enakku udavi thevai!)',
                    'ambulance': 'ஆம்புலன்ஸ் அழைக்கவும்! (Ambulance azhaikkavum!)',
                    'police': 'போலீசை அழைக்கவும்! (Police azhaikkavum!)',
                    'injured': 'நான் காயமடைந்துள்ளேன்! (Naan kaayamadainthullen!)',
                    'hospital': 'அருகிலுள்ள மருத்துவமனை எங்கே? (Arukilulla maruthuvamani enge?)',
                    'doctor': 'எனக்கு மருத்துவர் தேவை! (Enakku maruthuvar thevai!)'
                },
                'bn': {
                    'help': 'আমার সাহায্য দরকার! (Amar sahajjo dorkar!)',
                    'ambulance': 'অ্যাম্বুলেন্স ডাকুন! (Ambulance dakun!)',
                    'police': 'পুলিশকে ডাকুন! (Police-ke dakun!)',
                    'injured': 'আমি আহত! (Ami ahoto!)',
                    'hospital': 'নিকটতম হাসপাতাল কোথায়? (Nikottomo haspathal kothay?)',
                    'doctor': 'আমার ডাক্তার দরকার! (Amar daktar dorkar!)'
                },
                'te': {
                    'help': 'నాకు సహాయం కావాలి! (Naaku sahaayam kaavaali!)',
                    'ambulance': 'అంబులెన్స్ పిలవండి! (Ambulance pilavandi!)',
                    'police': 'పోలీసులను పిలవండి! (Police-nu pilavandi!)',
                    'injured': 'నేను గాయపడ్డాను! (Nenu gaayapaddaanu!)',
                    'hospital': 'సమీపంలోని ఆసుపత్రి ఎక్కడ ఉంది? (Sameepam-loni aasupathri ekkada undi?)',
                    'doctor': 'నాకు డాక్టర్ కావాలి! (Naaku doctor kaavaali!)'
                },
                'ml': {
                    'help': 'എനിക്ക് സഹായം വേണം! (Enikku sahayam venam!)',
                    'ambulance': 'ആംബുലൻസ് വിളിക്കൂ! (Ambulance vilikkoo!)',
                    'police': 'പോലീസിനെ വിളിക്കൂ! (Police-ne vilikkoo!)',
                    'injured': 'എനിക്ക് പരിക്കേറ്റു! (Enikku parikkettoo!)',
                    'hospital': 'അടുത്തുള്ള ആശുപത്രി എവിടെയാണ്? (Aduthulla aashupathri evideyaanu?)',
                    'doctor': 'എനിക്ക് ഡോക്ടറെ വേണം! (Enikku doctore venam!)'
                }
            };
            
            // Update phrases in the UI
            if (phrases[language]) {
                for (const [key, value] of Object.entries(phrases[language])) {
                    const phraseElement = document.getElementById(`phrase-${key}`);
                    if (phraseElement) {
                        phraseElement.textContent = value;
                    }
                }
            }
        });
    }
    
    // Play phrase buttons
    const playPhraseButtons = document.querySelectorAll('.play-phrase');
    if (playPhraseButtons) {
        playPhraseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const phrase = this.getAttribute('data-phrase');
                const language = document.getElementById('emergency-language').value;
                
                // In a real app, this would play audio of the phrase
                alert(`In a real app, this would play audio for the "${phrase}" phrase in ${language}`);
            });
        });
    }
    

    const shareLocationBtn = document.getElementById('share-location-btn');
    if (shareLocationBtn) {
        shareLocationBtn.addEventListener('click', function() {
            alert('In a real app, this would get your current GPS coordinates and share them with emergency services or contacts');
        });
    }
}
