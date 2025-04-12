// Food Culture component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const foodCultureContainer = document.getElementById('food-culture');
    if (foodCultureContainer) {
        renderFoodCulture(foodCultureContainer);
    }
});

function renderFoodCulture(container) {
    const foodCultureHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Regional Food Culture</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Discover the rich and diverse culinary traditions across India's regions, with authentic dishes, ingredients, and dining customs.
            </p>
            
            <!-- Region Selector -->
            <div class="mb-12">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-4 text-center">Select a Region</h3>
                        
                        <!-- Region Quick Select -->
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            <button class="food-region-btn bg-primary text-white py-2 px-3 rounded-md text-sm">North India</button>
                            <button class="food-region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">South India</button>
                            <button class="food-region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">East India</button>
                            <button class="food-region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">West India</button>
                            <button class="food-region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">Northeast</button>
                            <button class="food-region-btn bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm">Central India</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Food Culture Information for Selected Region -->
            <div id="food-region-info" class="mb-12">
                <h3 class="text-2xl font-bold mb-6">North Indian Cuisine</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <!-- Left Column - Signature Dishes -->
                    <div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Signature Dishes</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-utensils text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Butter Chicken</h5>
                                        <p class="text-sm text-gray-600">
                                            A rich, creamy tomato-based curry with tender chicken pieces, flavored with butter, cream, and a blend of aromatic spices. Originated in Delhi and now famous worldwide.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-bread-slice text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Naan & Roti</h5>
                                        <p class="text-sm text-gray-600">
                                            Tandoor-baked flatbreads that are staples in North Indian meals. Naan is leavened and often brushed with butter, while roti is unleavened whole wheat bread.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-drumstick-bite text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Tandoori Delicacies</h5>
                                        <p class="text-sm text-gray-600">
                                            Meats marinated in yogurt and spices, then cooked in a clay tandoor oven. Examples include Tandoori Chicken, Seekh Kebab, and Tandoori Paneer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Street Food Specialties</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-cookie text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Chaat Varieties</h5>
                                        <p class="text-sm text-gray-600">
                                            Savory snacks with a mix of flavors and textures—tangy, spicy, and sweet. Popular varieties include Gol Gappe (Pani Puri), Aloo Tikki, and Papri Chaat.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-pepper-hot text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Kachori & Samosa</h5>
                                        <p class="text-sm text-gray-600">
                                            Deep-fried pastries with savory fillings. Samosas contain spiced potatoes and peas, while kachoris are stuffed with lentils or onions and served with chutneys.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column - Culinary Traditions -->
                    <div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Key Ingredients & Spices</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-mortar-pestle text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Garam Masala</h5>
                                        <p class="text-sm text-gray-600">
                                            A warming spice blend that typically includes cinnamon, cardamom, cloves, cumin, and coriander. It's the signature flavor base for many North Indian dishes.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-cheese text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Dairy Products</h5>
                                        <p class="text-sm text-gray-600">
                                            Ghee (clarified butter), cream, and paneer (fresh cheese) are staples in North Indian cooking, adding richness and texture to many dishes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Dining Customs</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-hands text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Thali Tradition</h5>
                                        <p class="text-sm text-gray-600">
                                            A complete meal served on a large plate with small bowls of different dishes, balancing all six flavors: sweet, sour, salty, bitter, pungent, and astringent.
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-glass-whiskey text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Lassi & Chaas</h5>
                                        <p class="text-sm text-gray-600">
                                            Traditional yogurt-based drinks. Sweet lassi is flavored with fruits or rosewater, while chaas (buttermilk) is savory with cumin and herbs, often served with meals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="bg-primary text-white p-4">
                                <h4 class="font-bold text-lg">Sweet Delicacies</h4>
                            </div>
                            <div class="p-6">
                                <div class="flex mb-4">
                                    <div class="mr-4 text-primary">
                                        <i class="fas fa-candy-cane text-3xl"></i>
                                    </div>
                                    <div>
                                        <h5 class="font-bold mb-1">Jalebi & Gulab Jamun</h5>
                                        <p class="text-sm text-gray-600">
                                            Iconic sweets soaked in sugar syrup. Jalebi is crispy and pretzel-shaped, while gulab jamun consists of soft milk-solid balls flavored with cardamom and rosewater.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Where to Eat Recommendations -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
                    <div class="p-6">
                        <h4 class="text-xl font-bold mb-6 text-center">Where to Experience Authentic North Indian Cuisine</h4>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Famous Restaurant -->
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-utensils text-primary mr-3"></i>
                                    <h5 class="font-bold">Fine Dining</h5>
                                </div>
                                <p class="text-sm text-gray-600 mb-2">
                                    <strong>Bukhara, Delhi</strong> - Renowned for its tandoori cuisine and dal bukhara, this restaurant has hosted celebrities and world leaders.
                                </p>
                                <p class="text-sm text-gray-600">
                                    <strong>Peshawri, Mumbai</strong> - Famous for its North-Western Frontier cuisine with exceptional kebabs and breads.
                                </p>
                            </div>
                            
                            <!-- Street Food Areas -->
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-street-view text-primary mr-3"></i>
                                    <h5 class="font-bold">Street Food Havens</h5>
                                </div>
                                <p class="text-sm text-gray-600 mb-2">
                                    <strong>Chandni Chowk, Delhi</strong> - Iconic street food paradise with shops dating back generations, offering chaat, parathas, and more.
                                </p>
                                <p class="text-sm text-gray-600">
                                    <strong>Aminabad, Lucknow</strong> - Famous for authentic Awadhi cuisine, especially kebabs and biryani.
                                </p>
                            </div>
                            
                            <!-- Food Festivals -->
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-calendar-alt text-primary mr-3"></i>
                                    <h5 class="font-bold">Food Festivals</h5>
                                </div>
                                <p class="text-sm text-gray-600 mb-2">
                                    <strong>National Street Food Festival, Delhi</strong> - Annual event showcasing street foods from across India.
                                </p>
                                <p class="text-sm text-gray-600">
                                    <strong>Gourmet High Street, Multiple Cities</strong> - Features masterclasses by renowned chefs and tastings of regional cuisine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = foodCultureHTML;
    initFoodCulture();
}

function initFoodCulture() {
    // Add event listeners to region buttons
    const regionButtons = document.querySelectorAll('.food-region-btn');
    
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Reset all buttons to default style
            regionButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            // Set clicked button to active style
            this.classList.remove('bg-gray-200', 'text-gray-700');
            this.classList.add('bg-primary', 'text-white');
            
            // Update content based on selected region
            const regionName = this.textContent.trim();
            updateFoodRegionContent(regionName);
        });
    });
}

// Regional food culture data
const regionalFoodData = {
    'North India': {
        signatureDishes: [
            {
                name: 'Butter Chicken',
                description: 'A rich, creamy tomato-based curry with tender chicken pieces, flavored with butter, cream, and a blend of aromatic spices. Originated in Delhi and now famous worldwide.'
            },
            {
                name: 'Naan & Roti',
                description: 'Staple breads made from wheat flour. Naan is leavened and baked in a tandoor, while roti is unleavened and cooked on a flat griddle.'
            },
            {
                name: 'Chole Bhature',
                description: 'Spicy chickpea curry served with deep-fried bread made from maida flour. A popular Punjabi breakfast and street food dish.'
            }
        ],
        ingredients: [
            'Ghee (clarified butter)',
            'Garam Masala (blend of warm spices)',
            'Paneer (fresh cheese)',
            'Wheat flour',
            'Yogurt'
        ],
        diningCustoms: {
            etiquette: 'Traditionally eaten with right hand only, sitting cross-legged on the floor',
            meals: 'Large family-style meals with multiple dishes shared among all diners',
            timing: 'Lunch is typically the largest meal of the day',
            hospitality: 'Guests are treated with utmost respect and always offered food'
        },
        streetFood: [
            'Golgappa/Pani Puri - Crispy hollow spheres filled with spiced water',
            'Aloo Tikki - Spiced potato patties served with chutneys',
            'Kebabs - Various grilled meat preparations, especially in Lucknow'
        ],
        sweets: [
            'Jalebi - Spiral-shaped deep-fried sweet soaked in sugar syrup',
            'Gulab Jamun - Milk solids dumplings soaked in rose-flavored syrup',
            'Kulfi - Traditional Indian ice cream with nuts and cardamom'
        ]
    },
    'South India': {
        signatureDishes: [
            {
                name: 'Dosa',
                description: 'Thin, crispy fermented crepe made from rice and lentil batter, typically served with sambar and chutney.'
            },
            {
                name: 'Idli',
                description: 'Steamed rice cakes made from fermented rice and lentil batter, soft and fluffy in texture.'
            },
            {
                name: 'Biryani (Hyderabadi)',
                description: 'Fragrant rice dish cooked with meat, spices, and herbs in the dum (slow-cooking) style.'
            }
        ],
        ingredients: [
            'Rice (staple grain)',
            'Coconut (milk, oil, and grated)',
            'Curry leaves',
            'Tamarind',
            'Black pepper'
        ],
        diningCustoms: {
            etiquette: 'Food traditionally served on banana leaves, eaten with right hand',
            meals: 'Meals follow a specific sequence of serving different items',
            timing: 'Breakfast is elaborate with multiple savory options',
            hospitality: 'Offering water first is customary before serving food'
        },
        streetFood: [
            'Mirchi Bajji - Stuffed and fried green chilies',
            'Vada - Savory fried lentil donuts',
            'Bonda - Fried potato dumplings'
        ],
        sweets: [
            'Mysore Pak - Gram flour fudge with ghee and sugar',
            'Payasam - Rice or vermicelli pudding with milk and jaggery',
            'Holige/Poli - Sweet flatbread with jaggery and coconut filling'
        ]
    },
    'East India': {
        signatureDishes: [
            {
                name: 'Machher Jhol',
                description: 'Bengali fish curry cooked with mustard oil, turmeric, and other spices, typically served with rice.'
            },
            {
                name: 'Rosogolla',
                description: 'Soft, spongy cheese balls soaked in sugar syrup, a famous Bengali sweet.'
            },
            {
                name: 'Pitha',
                description: 'Rice-based pancakes or dumplings, either sweet or savory, popular in Assam and Bengal.'
            }
        ],
        ingredients: [
            'Mustard oil',
            'Panch phoron (five-spice blend)',
            'Fresh water fish',
            'Rice (staple grain)',
            'Poppy seeds'
        ],
        diningCustoms: {
            etiquette: 'Meal starts with bitter dishes and ends with sweet',
            meals: 'Multiple courses served in specific sequence',
            timing: 'Afternoon siesta after lunch is common',
            hospitality: 'Sweet dish or mishti is offered to guests immediately'
        },
        streetFood: [
            'Jhal Muri - Puffed rice mixed with spices, vegetables, and tamarind',
            'Ghugni - Yellow peas curry topped with onions and chilies',
            'Litti Chokha - Roasted wheat balls with mashed vegetables'
        ],
        sweets: [
            'Sandesh - Milk-based sweet made from chenna (paneer)',
            'Mishti Doi - Sweet yogurt with caramelized flavor',
            'Chhena Poda - Caramelized cheese dessert from Odisha'
        ]
    },
    'West India': {
        signatureDishes: [
            {
                name: 'Dhokla',
                description: 'Steamed fermented batter made from rice and chickpea flour, a savory Gujarati snack.'
            },
            {
                name: 'Vada Pav',
                description: 'Mumbai\'s popular street food consisting of a potato fritter in a bun with chutneys.'
            },
            {
                name: 'Puran Poli',
                description: 'Sweet flatbread stuffed with a mixture of jaggery and lentils, popular in Maharashtra.'
            }
        ],
        ingredients: [
            'Jaggery (unrefined sugar)',
            'Kokum (souring agent)',
            'Groundnuts',
            'Gram flour (besan)',
            'Asafoetida (hing)'
        ],
        diningCustoms: {
            etiquette: 'Sweet dish is often served first in Gujarati cuisine',
            meals: 'Thali system with all dishes served at once on a large plate',
            timing: 'Early dinner is common, especially in Gujarati households',
            hospitality: 'Offering water with jaggery is a traditional welcome'
        },
        streetFood: [
            'Pav Bhaji - Spiced vegetable mash served with buttered rolls',
            'Dabeli - Spiced potato filling in a bun with chutneys and sev',
            'Misal Pav - Spicy sprouted bean curry with bread'
        ],
        sweets: [
            'Basundi - Reduced milk dessert with nuts and saffron',
            'Shrikhand - Strained yogurt dessert flavored with saffron and cardamom',
            'Modak - Sweet dumplings filled with coconut and jaggery'
        ]
    },
    'Northeast': {
        signatureDishes: [
            {
                name: 'Thukpa',
                description: 'Noodle soup with vegetables and meat, influenced by Tibetan cuisine.'
            },
            {
                name: 'Smoked Pork',
                description: 'Pork smoked over wood fire, a specialty in Nagaland and Mizoram.'
            },
            {
                name: 'Bamboo Shoot Curry',
                description: 'Curry made with fermented bamboo shoots, a staple ingredient in Northeast cuisine.'
            }
        ],
        ingredients: [
            'Bamboo shoots (fresh and fermented)',
            'Bhut Jolokia (ghost pepper)',
            'Fermented fish',
            'Axone/Akhuni (fermented soybean)',
            'Sticky rice'
        ],
        diningCustoms: {
            etiquette: 'Communal eating from a shared plate in some tribes',
            meals: 'Simple preparations with minimal spices',
            timing: 'Early dinner and early breakfast',
            hospitality: 'Rice beer or tea offered to guests'
        },
        streetFood: [
            'Momos - Steamed or fried dumplings with meat or vegetable filling',
            'Aloo Chop - Spiced potato fritters',
            'Pitha - Rice cakes with various fillings'
        ],
        sweets: [
            'Narikol Pitha - Rice flour cakes with coconut filling',
            'Til Pitha - Rice flour rolls with sesame and jaggery filling',
            'Chhurpi - Hard cheese candy popular in Sikkim'
        ]
    },
    'Central India': {
        signatureDishes: [
            {
                name: 'Poha',
                description: 'Flattened rice dish with spices, peanuts, and herbs, a popular breakfast in Madhya Pradesh.'
            },
            {
                name: 'Bhutte Ka Kees',
                description: 'Grated corn cooked with milk and spices, a specialty from Indore.'
            },
            {
                name: 'Dal Bafla',
                description: 'Wheat dough balls baked and then dipped in ghee, served with dal (lentil curry).'
            }
        ],
        ingredients: [
            'Besan (gram flour)',
            'Coriander seeds',
            'Mahua flower',
            'Wheat',
            'Jowar (sorghum)'
        ],
        diningCustoms: {
            etiquette: 'Traditionally served on leaf plates (pattal) in rural areas',
            meals: 'Simple, hearty meals with minimal oil and spices',
            timing: 'Early meals with sunset dining',
            hospitality: 'Serving fresh buttermilk (chaas) with meals'
        },
        streetFood: [
            'Jalebi Fafda - Sweet and savory combination popular in markets',
            'Bhopali Gosht Korma - Meat curry sold in old city areas',
            'Indori Poha-Jalebi - Sweet and savory breakfast combination'
        ],
        sweets: [
            'Malpua - Sweet pancakes soaked in sugar syrup',
            'Khoya Jalebi - Thick jalebi made with reduced milk solids',
            'Lavang Latika - Clove-flavored pastry with khoya filling'
        ]
    }
};

function updateFoodRegionContent(regionName) {
    console.log('Selected food region:', regionName);
    
    const regionInfoContainer = document.getElementById('food-region-info');
    
    if (regionInfoContainer) {
        // Update the region title
        regionInfoContainer.querySelector('h3').textContent = regionName + ' Cuisine';
        
        // Get the regional data
        const regionData = regionalFoodData[regionName];
        if (!regionData) return;
        
        // Update signature dishes section
        const signatureDishesSection = regionInfoContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2 > div:first-child .p-6');
        if (signatureDishesSection && regionData.signatureDishes) {
            let dishesHTML = '';
            
            regionData.signatureDishes.forEach(dish => {
                dishesHTML += `
                    <div class="flex mb-4">
                        <div class="mr-4 text-primary">
                            <i class="fas fa-utensils text-3xl"></i>
                        </div>
                        <div>
                            <h5 class="font-bold mb-1">${dish.name}</h5>
                            <p class="text-sm text-gray-600">
                                ${dish.description}
                            </p>
                        </div>
                    </div>
                `;
            });
            
            signatureDishesSection.innerHTML = dishesHTML;
        }
        
        // Update ingredients section
        const ingredientsSection = regionInfoContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2 > div:first-child .bg-gray-50.p-4');
        if (ingredientsSection && regionData.ingredients) {
            let ingredientsHTML = `
                <div class="flex items-center mb-3">
                    <i class="fas fa-mortar-pestle text-primary mr-3"></i>
                    <h5 class="font-bold">Key Ingredients & Spices</h5>
                </div>
                <ul class="list-disc pl-8 text-sm text-gray-600 space-y-1">
            `;
            
            regionData.ingredients.forEach(ingredient => {
                ingredientsHTML += `<li>${ingredient}</li>`;
            });
            
            ingredientsHTML += '</ul>';
            ingredientsSection.innerHTML = ingredientsHTML;
        }
        
        // Update dining customs section
        const diningSection = regionInfoContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2 > div:nth-child(2) .bg-white.rounded-lg.shadow-md.p-6');
        if (diningSection && regionData.diningCustoms) {
            diningSection.innerHTML = `
                <h4 class="font-bold text-lg mb-4">Dining Customs in ${regionName}</h4>
                
                <div class="space-y-4">
                    <div class="flex">
                        <i class="fas fa-utensils text-primary mt-1 mr-3"></i>
                        <div>
                            <span class="font-semibold">Etiquette:</span>
                            <p class="text-sm text-gray-600">${regionData.diningCustoms.etiquette}</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i class="fas fa-users text-primary mt-1 mr-3"></i>
                        <div>
                            <span class="font-semibold">Meal Structure:</span>
                            <p class="text-sm text-gray-600">${regionData.diningCustoms.meals}</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i class="fas fa-clock text-primary mt-1 mr-3"></i>
                        <div>
                            <span class="font-semibold">Timing:</span>
                            <p class="text-sm text-gray-600">${regionData.diningCustoms.timing}</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i class="fas fa-hands-helping text-primary mt-1 mr-3"></i>
                        <div>
                            <span class="font-semibold">Hospitality:</span>
                            <p class="text-sm text-gray-600">${regionData.diningCustoms.hospitality}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // Update street food section
        const streetFoodSection = regionInfoContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2 > div:nth-child(2) .bg-gray-50.rounded-lg.p-4:nth-of-type(1)');
        if (streetFoodSection && regionData.streetFood) {
            let streetFoodHTML = `
                <div class="flex items-center mb-3">
                    <i class="fas fa-street-view text-primary mr-3"></i>
                    <h5 class="font-bold">Street Food Specialties</h5>
                </div>
            `;
            
            regionData.streetFood.forEach(item => {
                streetFoodHTML += `<p class="text-sm text-gray-600 mb-2">${item}</p>`;
            });
            
            streetFoodSection.innerHTML = streetFoodHTML;
        }
        
        // Update sweets section
        const sweetsSection = regionInfoContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2 > div:nth-child(2) .bg-gray-50.rounded-lg.p-4:nth-of-type(2)');
        if (sweetsSection && regionData.sweets) {
            let sweetsHTML = `
                <div class="flex items-center mb-3">
                    <i class="fas fa-cookie text-primary mr-3"></i>
                    <h5 class="font-bold">Sweet Delicacies</h5>
                </div>
            `;
            
            regionData.sweets.forEach(item => {
                sweetsHTML += `<p class="text-sm text-gray-600 mb-2">${item}</p>`;
            });
            
            sweetsSection.innerHTML = sweetsHTML;
        }
    }
}