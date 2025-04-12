// Features component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const featuresContainer = document.getElementById('features');
    if (featuresContainer) {
        renderFeatures(featuresContainer);
    }
});

function renderFeatures(container) {
    const featuresHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Essential Travel Features</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                TRAVEL YATRA provides comprehensive tools designed specifically for tourists exploring India's diverse landscapes and cultures.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Language Translator Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-secondary">
                        <img src="./images/features/language-translator.svg" alt="Language Translator" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Language Translator</h3>
                        <p class="text-gray-600 mb-4">
                            Real-time text & voice translation between English and major Indian languages to help you communicate effectively.
                        </p>
                        <a href="#translator" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Safe Travel Alerts Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-danger-color">
                        <img src="./images/features/safety-alert.svg" alt="Safe Travel Alerts" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Safe Travel Alerts</h3>
                        <p class="text-gray-600 mb-4">
                            Geo-based alerts on scams, unsafe zones, and verified warnings from other tourists or local authorities.
                        </p>
                        <a href="#safety-alerts" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Transport Assistant Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-accent">
                        <img src="./images/features/transport.svg" alt="Transport Assistant" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Transport Assistant</h3>
                        <p class="text-gray-600 mb-4">
                            Help with local travel (autos, buses, metro), fare estimation, and trusted driver recommendations.
                        </p>
                        <a href="#transport" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Itinerary Planner Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-primary">
                        <img src="./images/features/itinerary.svg" alt="Itinerary Planner" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Itinerary Planner</h3>
                        <p class="text-gray-600 mb-4">
                            Drag-and-drop planning with time, cost, and intercity route suggestions for efficient travel.
                        </p>
                        <a href="#itinerary" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                

                
                <!-- Cultural Guide Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-secondary">
                        <img src="./images/features/cultural-guide.svg" alt="Cultural Guide" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Cultural Guide</h3>
                        <p class="text-gray-600 mb-4">
                            Do's and Don'ts by region/state, etiquette tips, temple dress codes, and cultural insights.
                        </p>
                        <a href="#cultural-guide" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                

                
                <!-- Emergency Help Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-danger-color">
                        <img src="./images/features/emergency-help.svg" alt="Emergency Help" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Emergency Help</h3>
                        <p class="text-gray-600 mb-4">
                            Hospital/Police locator with local language aid for symptoms/emergencies and quick assistance.
                        </p>
                        <a href="#emergency" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Event Calendar Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-accent">
                        <img src="./images/features/event-calendar.svg" alt="Event Calendar" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Event Calendar</h3>
                        <p class="text-gray-600 mb-4">
                            Discover local festivals, fairs, and events in real-time to enhance your cultural experience.
                        </p>
                        <a href="#events" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Digital Payment Tips Card -->
                <div class="feature-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="h-48 flex items-center justify-center bg-primary">
                        <img src="./images/features/digital-payment.svg" alt="Digital Payment Tips" class="h-24 w-24">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">Digital Payment Tips</h3>
                        <p class="text-gray-600 mb-4">
                            Explain UPI, cash alternatives, and list of international card-accepting spots for hassle-free payments.
                        </p>
                        <a href="#payment-tips" class="text-primary hover:text-primary-dark font-medium flex items-center">
                            Learn more <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="mt-16 text-center">
                <a href="#translator" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                    Explore All Features <i class="fas fa-chevron-down ml-2"></i>
                </a>
            </div>
        </div>
    `;
    
    container.innerHTML = featuresHTML;
}
