// Hero component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.getElementById('hero');
    if (heroContainer) {
        renderHero(heroContainer);
    }
});

function renderHero(container) {
    const heroHTML = `
        <div class="relative h-screen max-h-[600px] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
            <div class="hero-overlay"></div>
            <div class="container mx-auto px-4 h-full flex items-center relative z-10">
                <div class="text-white max-w-2xl">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Discover India Like Never Before</h1>
                    <p class="text-xl mb-8">Your multilingual travel companion for a safe, enjoyable, and authentic Indian experience.</p>
                    <div class="flex flex-wrap gap-4">
                        <button class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                            <i class="fas fa-map-marked-alt mr-2"></i> Start Exploring
                        </button>
                        <button class="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                            <i class="fas fa-info-circle mr-2"></i> Learn More
                        </button>
                    </div>
                    
                    <!-- Featured Languages -->
                    <div class="mt-12 flex flex-wrap gap-3">
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">English</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">हिंदी</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">ಕನ್ನಡ</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">தமிழ்</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">বাংলা</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">తెలుగు</span>
                        <span class="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">+ More</span>
                    </div>
                </div>
            </div>
            
            <!-- Search Bar -->
            <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4 px-4 transform translate-y-1/2 z-20">
                <div class="container mx-auto">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="flex-grow">
                            <div class="relative">
                                <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" placeholder="Where are you traveling in India?" class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            </div>
                        </div>
                        <div class="md:w-1/4">
                            <select class="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option value="">Select a state</option>
                                <option value="delhi">Delhi</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="kerala">Kerala</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="goa">Goa</option>
                            </select>
                        </div>
                        <div>
                            <button class="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = heroHTML;
}
