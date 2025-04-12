// Cultural Guide component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const culturalGuideContainer = document.getElementById('cultural-guide');
    if (culturalGuideContainer) {
        renderCulturalGuide(culturalGuideContainer);
    }
});

function renderCulturalGuide(container) {
    const culturalGuideHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Cultural Guide</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Learn about regional etiquette, dress codes, and cultural practices to respect local traditions during your journey.
            </p>
            
            <!-- Region Selector -->
            <div class="mb-12">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-4 text-center">Select a Region</h3>
                        
                        <!-- India Map with Clickable Regions -->
                        <div class="relative w-full max-w-3xl mx-auto h-[400px] bg-gray-100 rounded-lg mb-6">
                            <!-- This would be an interactive SVG map in the real implementation -->
                            <div id="india-map" class="w-full h-full flex items-center justify-center">
                                <p class="text-gray-500">Interactive map of India's cultural regions would appear here</p>
                            </div>
                        </div>
                        
                        <!-- Region Quick Select -->
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            <button class="region-btn bg-primary text-white py-2 px-3 rounded-md text-sm">North India</button>
                            <button class="region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">South India</button>
                            <button class="region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">East India</button>
                            <button class="region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">West India</button>
                            <button class="region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">Northeast</button>
                            <button class="region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">Central India</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Cultural Information for Selected Region -->
            <div id="region-info" class="mb-12">
                <h3 class="text-2xl font-bold mb-6">North India Cultural Guide</h3>
                
                <!-- Major Festivals Section -->
                <div class="mb-12">
                    <h4 class="text-xl font-bold mb-6">Major Festivals in North India</h4>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Diwali Festival Card -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="h-48 relative overflow-hidden">
                                <img src="images/festivals/diwali.svg" alt="Diwali Festival" class="w-full h-full object-cover">
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h5 class="text-white font-bold text-lg">Diwali</h5>
                                    <p class="text-white text-sm">Festival of Lights</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center text-sm text-gray-600 mb-3">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    <span>October/November (varies yearly)</span>
                                </div>
                                <p class="text-gray-600 text-sm mb-4">
                                    The biggest Hindu festival celebrating the victory of light over darkness. Expect beautiful lamp decorations, fireworks, and family gatherings.
                                </p>
                                <button class="text-primary hover:text-primary-dark font-medium flex items-center text-sm">
                                    Learn more <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Holi Festival Card -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="h-48 relative overflow-hidden">
                                <img src="images/festivals/holi.svg" alt="Holi Festival" class="w-full h-full object-cover">
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h5 class="text-white font-bold text-lg">Holi</h5>
                                    <p class="text-white text-sm">Festival of Colors</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center text-sm text-gray-600 mb-3">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    <span>March (varies yearly)</span>
                                </div>
                                <p class="text-gray-600 text-sm mb-4">
                                    A joyful spring festival where people throw colored powders and water at each other, celebrating the triumph of good over evil.
                                </p>
                                <button class="text-primary hover:text-primary-dark font-medium flex items-center text-sm">
                                    Learn more <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Dussehra Festival Card -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="h-48 relative overflow-hidden">
                                <img src="images/festivals/dussehra.svg" alt="Dussehra Festival" class="w-full h-full object-cover">
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h5 class="text-white font-bold text-lg">Dussehra</h5>
                                    <p class="text-white text-sm">Victory of Good over Evil</p>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex items-center text-sm text-gray-600 mb-3">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    <span>September/October (varies yearly)</span>
                                </div>
                                <p class="text-gray-600 text-sm mb-4">
                                    Celebrates Lord Rama's victory over the demon king Ravana. Features dramatic reenactments and burning of large Ravana effigies.
                                </p>
                                <button class="text-primary hover:text-primary-dark font-medium flex items-center text-sm">
                                    Learn more <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Left Column - Cultural Practices -->
                    <div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Greeting Customs</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-hands-praying text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Namaste</h5>
                                        <p class="text-sm text-gray-600">
                                            The traditional greeting involves joining your palms together in front of your chest and saying "Namaste" (nah-mas-tay). This is universally accepted and appreciated throughout North India.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-handshake text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Physical Contact</h5>
                                        <p class="text-sm text-gray-600">
                                            Handshakes are common in business settings. However, some traditional people may prefer not to shake hands with the opposite gender. Follow their lead and respect their preference.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Religious Etiquette</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-mosque text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Temple & Mosque Visits</h5>
                                        <p class="text-sm text-gray-600">
                                            Remove shoes before entering religious sites. Cover your head in Sikh temples (Gurudwaras) and some Hindu temples. Women should cover their heads in mosques and avoid shorts/sleeveless tops.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-camera text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Photography</h5>
                                        <p class="text-sm text-gray-600">
                                            Always ask permission before taking photos inside religious sites. Some places prohibit photography entirely, so look for signs or ask attendants.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column - Dress Code & Dining -->
                    <div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Dress Code Guidelines</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-tshirt text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">General Attire</h5>
                                        <p class="text-sm text-gray-600">
                                            North India is generally conservative. For women, shoulders and knees should be covered. Men should avoid shorts in religious places. Loose, breathable clothing is recommended for comfort.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-place-of-worship text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Religious Sites</h5>
                                        <p class="text-sm text-gray-600">
                                            More conservative dress is expected at religious sites. Long pants/skirts and covered shoulders are required. Some places provide scarves or wraps if needed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Dining Etiquette</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-hand-paper text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Hand Usage</h5>
                                        <p class="text-sm text-gray-600">
                                            In traditional settings, food is often eaten with the right hand only. The left hand is considered unclean. Wash hands before and after meals when eating this way.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-utensils text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Shared Meals</h5>
                                        <p class="text-sm text-gray-600">
                                            It's common to share dishes. Don't double dip or use serving utensils for eating. Wait for elders to begin eating before you start. Saying "no" to food offers may be considered impolite.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Cultural Do's and Don'ts -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                    <div class="p-6">
                        <h4 class="text-xl font-bold mb-6 text-center">Cultural Do's and Don'ts</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Do's -->
                            <div>
                                <h5 class="font-bold text-green-600 mb-4 flex items-center">
                                    <i class="fas fa-check-circle mr-2"></i> Do's
                                </h5>
                                
                                <ul class="space-y-3">
                                    <li class="flex">
                                        <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Remove shoes before entering homes and religious places</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Ask permission before taking photos of people</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Dress modestly, especially at religious sites</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Accept food and drink offers with your right hand</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Respect elders by touching their feet as a traditional greeting</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <!-- Don'ts -->
                            <div>
                                <h5 class="font-bold text-red-600 mb-4 flex items-center">
                                    <i class="fas fa-times-circle mr-2"></i> Don'ts
                                </h5>
                                
                                <ul class="space-y-3">
                                    <li class="flex">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Don't point your feet at people or religious icons</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Avoid public displays of affection</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Don't touch people on the head (considered sacred)</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Avoid eating beef in Hindu areas (cows are sacred)</span>
                                    </li>
                                    <li class="flex">
                                        <i class="fas fa-times text-red-500 mt-1 mr-3"></i>
                                        <span class="text-sm">Don't wear shoes inside temples or homes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Additional Cultural Information Section -->
                <!-- The duplicated festivals section has been removed -->
                

            </div>
        </div>
    `;
    
    container.innerHTML = culturalGuideHTML;
    
 
    initCulturalGuide();
}

function initCulturalGuide() {    const regionButtons = document.querySelectorAll('.region-btn');
    
    if (regionButtons.length > 0) {
        regionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Reset all buttons
                regionButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
            
                this.classList.remove('bg-gray-200', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
                
                
                const regionName = this.textContent.trim();
                updateRegionContent(regionName);
            });
        });
    }

    const mapContainer = document.getElementById('india-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background-color: #e5e7eb; color: #6b7280; font-size: 14px; text-align: center; padding: 20px;">
                <div>
                    <i class="fas fa-map-marked-alt" style="font-size: 48px; margin-bottom: 16px;"></i>
                    <p>Interactive cultural region map would appear here</p>
                    <p>Click on a region to see its cultural information</p>
                </div>
            </div>
        `;
    }
}

// Regional cultural data
const regionalCulturalData = {
    'North India': {
        festivals: [
            {
                name: 'Diwali',
                description: 'Festival of Lights',
                image: 'https://i.imgur.com/dXRSGVM.jpg',
                date: 'October-November',
                significance: 'Celebrates the victory of light over darkness and good over evil',
                activities: 'Lighting diyas (oil lamps), fireworks, family gatherings, and exchanging gifts'
            },
            {
                name: 'Holi',
                description: 'Festival of Colors',
                image: 'https://i.imgur.com/UR7QXJJ.jpg',
                date: 'March',
                significance: 'Celebrates the arrival of spring and the triumph of good over evil',
                activities: 'Playing with colored powders and water, singing, dancing, and sharing sweets'
            },
            {
                name: 'Lohri',
                description: 'Harvest Festival',
                image: 'https://i.imgur.com/EHFXgEd.jpg',
                date: 'January 13',
                significance: 'Marks the end of winter and the harvesting of winter crops',
                activities: 'Bonfire celebrations, folk songs, dancing, and sharing traditional foods'
            }
        ],
        greetings: {
            common: 'Namaste (with folded hands)',
            formal: 'Pranam (with a slight bow)',
            casual: 'Kaise ho? (How are you?)',
            respectful: 'Touching feet of elders as a sign of respect'
        },
        dressCode: {
            women: 'Salwar kameez, sarees for formal occasions',
            men: 'Kurta-pajama, formal Western wear is also acceptable in cities',
            religious: 'Cover head in Sikh temples (gurudwaras) and some Hindu temples',
            footwear: 'Remove shoes before entering homes and places of worship'
        },
        religiousEtiquette: {
            temples: 'Remove shoes, maintain silence, avoid leather items',
            photography: 'Ask permission before taking photos in religious places',
            offerings: 'Prasad (religious offerings) are received with right hand',
            restrictions: 'Avoid eating beef in Hindu areas (cows are sacred)'
        }
    },
    'South India': {
        festivals: [
            {
                name: 'Pongal',
                description: 'Harvest Festival',
                image: 'https://i.imgur.com/9jRCyVl.jpg',
                date: 'January 14-17',
                significance: 'Thanksgiving to the Sun God for agricultural abundance',
                activities: 'Cooking Pongal rice, decorating homes with kolam (rangoli), cattle worship'
            },
            {
                name: 'Onam',
                description: 'Kerala Harvest Festival',
                image: 'https://i.imgur.com/NVQEpBg.jpg',
                date: 'August-September',
                significance: 'Celebrates the mythical King Mahabali\'s annual visit',
                activities: 'Boat races, tiger dances, elaborate feasts served on banana leaves'
            },
            {
                name: 'Ugadi',
                description: 'New Year Festival',
                image: 'https://i.imgur.com/R0LWhrK.jpg',
                date: 'March-April',
                significance: 'Marks the beginning of a new Hindu lunar calendar',
                activities: 'Special prayers, mango leaf decorations, preparing Ugadi pachadi (special dish)'
            }
        ],
        greetings: {
            common: 'Vanakkam (Tamil), Namaskara (Kannada)',
            formal: 'Namaskaram (with folded hands)',
            casual: 'Epdi irukeenga? (Tamil - How are you?)',
            respectful: 'Seeking blessings from elders by touching their feet'
        },
        dressCode: {
            women: 'Traditional sarees, half-sarees for younger women, churidars',
            men: 'Dhoti and angavastram (upper cloth), shirts with lungi',
            religious: 'Traditional dress preferred for temple visits',
            footwear: 'Remove shoes before entering temples and homes'
        },
        religiousEtiquette: {
            temples: 'Follow clockwise direction, women may avoid visiting during menstruation',
            photography: 'Often prohibited inside main temple sanctums',
            offerings: 'Coconuts, flowers, and fruits are common offerings',
            restrictions: 'Strict vegetarian food in and around major temples'
        }
    },
    'East India': {
        festivals: [
            {
                name: 'Durga Puja',
                description: 'Worship of Goddess Durga',
                image: 'https://i.imgur.com/Jj78iNC.jpg',
                date: 'September-October',
                significance: 'Celebrates the victory of Goddess Durga over the demon Mahishasura',
                activities: 'Elaborate pandals (temporary structures), cultural performances, processions'
            },
            {
                name: 'Chhath Puja',
                description: 'Sun Worship Festival',
                image: 'https://i.imgur.com/qqKxFXQ.jpg',
                date: 'October-November',
                significance: 'Dedicated to the Sun God and Chhathi Maiya',
                activities: 'Fasting, standing in water bodies offering prayers to the rising and setting sun'
            },
            {
                name: 'Bihu',
                description: 'Assamese New Year',
                image: 'https://i.imgur.com/DW3Hdxq.jpg',
                date: 'April, October, January',
                significance: 'Celebrates the agricultural cycle with three different Bihu festivals',
                activities: 'Bihu dance, feasts, buffalo fights, egg fights, and traditional games'
            }
        ],
        greetings: {
            common: 'Nomoshkar (Bengali), Pranam',
            formal: 'Bhalo achhen? (Bengali - How are you?)',
            casual: 'Ki khobor? (Bengali - What\'s the news?)',
            respectful: 'Touching feet of elders, especially during festivals'
        },
        dressCode: {
            women: 'Sarees (especially Tant and Baluchari in Bengal), mekhela chador in Assam',
            men: 'Dhoti-kurta, pajama-punjabi',
            religious: 'White clothing for certain religious occasions',
            footwear: 'Remove before entering homes and religious places'
        },
        religiousEtiquette: {
            temples: 'Offer flowers and sweets, maintain cleanliness',
            photography: 'Ask permission before photographing tribal ceremonies',
            offerings: 'Sweets and fruits are common offerings',
            restrictions: 'Fish is widely consumed but respect vegetarian preferences in religious contexts'
        }
    },
    'West India': {
        festivals: [
            {
                name: 'Ganesh Chaturthi',
                description: 'Birth of Lord Ganesha',
                image: 'https://i.imgur.com/R3KoqNw.jpg',
                date: 'August-September',
                significance: 'Celebrates the birth of the elephant-headed deity Lord Ganesha',
                activities: 'Clay idol installation, prayers, processions, and immersion in water bodies'
            },
            {
                name: 'Navratri',
                description: 'Nine Nights Festival',
                image: 'https://i.imgur.com/m2hjOPr.jpg',
                date: 'September-October',
                significance: 'Worship of Goddess Durga in her nine forms',
                activities: 'Garba and Dandiya Raas dances, fasting, and special prayers'
            },
            {
                name: 'Diwali',
                description: 'Festival of Lights',
                image: 'https://i.imgur.com/dXRSGVM.jpg',
                date: 'October-November',
                significance: 'Celebrates the return of Lord Rama to Ayodhya',
                activities: 'Lighting diyas, rangoli making, fireworks, and family gatherings'
            }
        ],
        greetings: {
            common: 'Kem Cho (Gujarati), Namaskar (Marathi)',
            formal: 'Saru Chho? (Gujarati - Are you well?)',
            casual: 'Kay challay? (Marathi - What\'s going on?)',
            respectful: 'Touching feet of elders is common'
        },
        dressCode: {
            women: 'Chaniya choli in Gujarat, Nauvari saree in Maharashtra',
            men: 'Kurta-pajama, traditional Gujarati attire includes kediyun',
            religious: 'Modest clothing for temple visits',
            footwear: 'Remove before entering homes and religious places'
        },
        religiousEtiquette: {
            temples: 'Clockwise circumambulation, bell ringing upon entry',
            photography: 'Often restricted in temple inner sanctums',
            offerings: 'Flowers, coconuts, and sweets are common',
            restrictions: 'Many communities practice vegetarianism, especially Jains'
        }
    },
    'Northeast': {
        festivals: [
            {
                name: 'Bihu',
                description: 'Assamese New Year',
                image: 'https://i.imgur.com/DW3Hdxq.jpg',
                date: 'April, October, January',
                significance: 'Agricultural festival marking seasonal changes',
                activities: 'Bihu dance, feasting, buffalo fights, and community gatherings'
            },
            {
                name: 'Hornbill Festival',
                description: 'Festival of Festivals',
                image: 'https://i.imgur.com/jYEQKpB.jpg',
                date: 'December 1-10',
                significance: 'Showcases the diversity of Nagaland\'s tribal heritage',
                activities: 'Traditional dances, music, crafts, sports, and food festivals'
            },
            {
                name: 'Losar',
                description: 'Tibetan New Year',
                image: 'https://i.imgur.com/reLAUXA.jpg',
                date: 'February-March',
                significance: 'Buddhist festival celebrating the new year',
                activities: 'Monastery visits, prayer flag hoisting, mask dances, and family gatherings'
            }
        ],
        greetings: {
            common: 'Nomoskar (Assamese), Khurumjari (Manipuri)',
            formal: 'Bows and handshakes are common',
            casual: 'Tribal-specific greetings vary widely',
            respectful: 'Respect for elders is shown through body language'
        },
        dressCode: {
            women: 'Mekhela chador (Assam), Phanek (Manipur), tribal-specific attire',
            men: 'Dhoti, tribal shawls and headgear',
            religious: 'Modest clothing for Buddhist monasteries',
            footwear: 'Remove before entering homes and religious places'
        },
        religiousEtiquette: {
            temples: 'Walk clockwise around Buddhist stupas and prayer wheels',
            photography: 'Ask permission before photographing tribal ceremonies or inside monasteries',
            offerings: 'White scarves (khata) are offered in Buddhist traditions',
            restrictions: 'Some tribes have specific taboos regarding certain foods or behaviors'
        }
    },
    'Central India': {
        festivals: [
            {
                name: 'Khajuraho Dance Festival',
                description: 'Classical Dance Festival',
                image: 'https://i.imgur.com/WuYNyhp.jpg',
                date: 'February',
                significance: 'Celebrates classical Indian dance forms against ancient temple backdrop',
                activities: 'Classical dance performances, cultural programs, and art exhibitions'
            },
            {
                name: 'Nagpanchami',
                description: 'Snake Worship Festival',
                image: 'https://i.imgur.com/NX5eSYv.jpg',
                date: 'July-August',
                significance: 'Worship of snakes or serpent deities',
                activities: 'Offering milk to snakes, special prayers, and fasting'
            },
            {
                name: 'Lokrang',
                description: 'Folk Festival',
                image: 'https://i.imgur.com/GlP2Lv3.jpg',
                date: 'January',
                significance: 'Celebrates folk traditions of Central India',
                activities: 'Folk dances, music performances, handicraft exhibitions, and food festivals'
            }
        ],
        greetings: {
            common: 'Namaste or Ram Ram',
            formal: 'Pranam with folded hands',
            casual: 'Jai Jai (informal greeting in rural areas)',
            respectful: 'Touching feet of elders is common'
        },
        dressCode: {
            women: 'Sarees, lehengas, and salwar kameez',
            men: 'Dhoti-kurta, bandi (waistcoat)',
            religious: 'Head covering in some religious places',
            footwear: 'Remove before entering temples and homes'
        },
        religiousEtiquette: {
            temples: 'Modest dress, remove shoes, avoid leather items',
            photography: 'Often prohibited inside main temple sanctums',
            offerings: 'Flowers, coconuts, and incense are common',
            restrictions: 'Respect local customs regarding food restrictions'
        }
    }
};

function updateRegionContent(regionName) {
    console.log('Selected region:', regionName);
    
    const regionTitle = document.querySelector('#region-info h3');
    if (regionTitle) {
        regionTitle.textContent = `${regionName} Cultural Guide`;
    }
    
    // Get the regional data
    const regionData = regionalCulturalData[regionName];
    if (!regionData) return;
    
    // Update festivals section
    const festivalsSection = document.querySelector('#region-info .grid.grid-cols-1.md\\:grid-cols-3');
    if (festivalsSection && regionData.festivals) {
        let festivalsHTML = '';
        
        regionData.festivals.forEach(festival => {
            festivalsHTML += `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 relative overflow-hidden">
                        <img src="${festival.image}" alt="${festival.name} Festival" class="w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <h5 class="text-white font-bold text-lg">${festival.name}</h5>
                            <p class="text-white text-sm">${festival.description}</p>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center text-sm text-gray-600 mb-3">
                            <i class="fas fa-calendar-alt mr-2"></i>
                            <span>${festival.date}</span>
                        </div>
                        <p class="text-sm text-gray-700 mb-3">${festival.significance}</p>
                        <div class="text-sm text-gray-600">
                            <div class="font-semibold mb-1">Activities:</div>
                            <p>${festival.activities}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        
        festivalsSection.innerHTML = festivalsHTML;
    }
    
    // Update greeting culture section
    const greetingSection = document.querySelector('#region-info .grid.grid-cols-1.md\\:grid-cols-2 .bg-white.rounded-lg.shadow-md.p-6:nth-child(1)');
    if (greetingSection && regionData.greetings) {
        greetingSection.innerHTML = `
            <h4 class="text-xl font-bold mb-4">Greeting Culture in ${regionName}</h4>
            <ul class="space-y-4">
                <li class="flex">
                    <i class="fas fa-hands text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Common Greeting:</span>
                        <p class="text-sm text-gray-700">${regionData.greetings.common}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-user-tie text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Formal Settings:</span>
                        <p class="text-sm text-gray-700">${regionData.greetings.formal}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-users text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Casual Interactions:</span>
                        <p class="text-sm text-gray-700">${regionData.greetings.casual}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-hand-holding text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Respectful Gestures:</span>
                        <p class="text-sm text-gray-700">${regionData.greetings.respectful}</p>
                    </div>
                </li>
            </ul>
        `;
    }
    
    // Update dress code section
    const dressCodeSection = document.querySelector('#region-info .grid.grid-cols-1.md\\:grid-cols-2 .bg-white.rounded-lg.shadow-md.p-6:nth-child(2)');
    if (dressCodeSection && regionData.dressCode) {
        dressCodeSection.innerHTML = `
            <h4 class="text-xl font-bold mb-4">Dress Code Guidelines for ${regionName}</h4>
            <ul class="space-y-4">
                <li class="flex">
                    <i class="fas fa-female text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Women's Attire:</span>
                        <p class="text-sm text-gray-700">${regionData.dressCode.women}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-male text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Men's Attire:</span>
                        <p class="text-sm text-gray-700">${regionData.dressCode.men}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-place-of-worship text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Religious Sites:</span>
                        <p class="text-sm text-gray-700">${regionData.dressCode.religious}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-shoe-prints text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Footwear Etiquette:</span>
                        <p class="text-sm text-gray-700">${regionData.dressCode.footwear}</p>
                    </div>
                </li>
            </ul>
        `;
    }
    
    // Update religious etiquette section
    const religiousSection = document.querySelector('#region-info .grid.grid-cols-1.md\\:grid-cols-2 .bg-white.rounded-lg.shadow-md.p-6:nth-child(3)');
    if (religiousSection && regionData.religiousEtiquette) {
        religiousSection.innerHTML = `
            <h4 class="text-xl font-bold mb-4">Religious Etiquette in ${regionName}</h4>
            <ul class="space-y-4">
                <li class="flex">
                    <i class="fas fa-gopuram text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Temple Visits:</span>
                        <p class="text-sm text-gray-700">${regionData.religiousEtiquette.temples}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-camera text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Photography:</span>
                        <p class="text-sm text-gray-700">${regionData.religiousEtiquette.photography}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-gift text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Offerings:</span>
                        <p class="text-sm text-gray-700">${regionData.religiousEtiquette.offerings}</p>
                    </div>
                </li>
                <li class="flex">
                    <i class="fas fa-ban text-primary mt-1 mr-3"></i>
                    <div>
                        <span class="font-semibold">Restrictions:</span>
                        <p class="text-sm text-gray-700">${regionData.religiousEtiquette.restrictions}</p>
                    </div>
                </li>
            </ul>
        `;
    }
}
