// Header component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        renderHeader(headerContainer);
    }
});

function renderHeader(container) {
    const headerHTML = `
        <nav class="bg-white shadow-md">
            <div class="container mx-auto px-4 py-3">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="index.html" class="flex items-center">
                            <span class="text-2xl font-bold text-primary">TRAVEL <span class="text-accent">YATRA</span></span>
                        </a>
                    </div>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#features" class="text-gray-700 hover:text-primary transition duration-300">Features</a>
                        <a href="#translator" class="text-gray-700 hover:text-primary transition duration-300">Translator</a>
                        <a href="#safety-alerts" class="text-gray-700 hover:text-primary transition duration-300">Safety</a>
                        <a href="#transport" class="text-gray-700 hover:text-primary transition duration-300">Transport</a>
                        <a href="#itinerary" class="text-gray-700 hover:text-primary transition duration-300">Itinerary</a>
                        <a href="#cultural-guide" class="text-gray-700 hover:text-primary transition duration-300">Culture</a>
                        <a href="#emergency" class="text-gray-700 hover:text-primary transition duration-300">Emergency</a>
                    </div>
                    
                    <!-- Language Selector -->
                    <div class="hidden md:flex items-center">
                        <select id="language-selector" class="language-selector mr-4">
                            <option value="en">English</option>
                            <option value="hi">हिंदी (Hindi)</option>
                            <option value="kn">ಕನ್ನಡ (Kannada)</option>
                            <option value="ta">தமிழ் (Tamil)</option>
                            <option value="bn">বাংলা (Bengali)</option>
                            <option value="te">తెలుగు (Telugu)</option>
                        </select>
                        <button id="desktop-sign-in-btn" class="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition duration-300">
                            Sign In
                        </button>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <div class="md:hidden flex items-center">
                        <select id="mobile-language-selector" class="language-selector mr-3 text-sm">
                            <option value="en">EN</option>
                            <option value="hi">HI</option>
                            <option value="kn">KN</option>
                            <option value="ta">TA</option>
                            <option value="bn">BN</option>
                            <option value="te">TE</option>
                        </select>
                        <button id="mobile-menu-btn" class="text-gray-500 hover:text-primary focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden pt-4 pb-2">
                    <div class="flex flex-col space-y-3">
                        <a href="#features" class="text-gray-700 hover:text-primary transition duration-300">Features</a>
                        <a href="#translator" class="text-gray-700 hover:text-primary transition duration-300">Translator</a>
                        <a href="#safety-alerts" class="text-gray-700 hover:text-primary transition duration-300">Safety</a>
                        <a href="#transport" class="text-gray-700 hover:text-primary transition duration-300">Transport</a>
                        <a href="#itinerary" class="text-gray-700 hover:text-primary transition duration-300">Itinerary</a>
                        <a href="#cultural-guide" class="text-gray-700 hover:text-primary transition duration-300">Culture</a>
                        <a href="#emergency" class="text-gray-700 hover:text-primary transition duration-300">Emergency</a>
                        <button id="mobile-sign-in-btn" class="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition duration-300 w-full">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
        <!-- Login Modal -->
        <div id="login-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
            <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-gray-800">Sign In</h3>
                    <button id="close-login-modal" class="text-gray-500 hover:text-gray-700">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Login Form -->
                <form id="login-form" class="space-y-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-primary hover:text-primary-dark">Forgot password?</a>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition duration-300">Sign In</button>
                    </div>
                </form>
                
                <!-- Google Sign In -->
                <div class="mt-4">
                    <button id="google-sign-in" class="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300">
                        <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#FFC107"/>
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#FF3D00"/>
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#4CAF50"/>
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#1976D2"/>
                        </svg>
                        Sign in with Google
                    </button>
                </div>
                
                <!-- User Info Display (initially hidden) -->
                <div id="user-info" class="mt-4 p-4 bg-gray-100 rounded-lg hidden">
                    <h4 class="font-bold text-gray-800 mb-2">User Information</h4>
                    <div class="space-y-2">
                        <p><span class="font-medium">Email:</span> <span id="user-email"></span></p>
                        <p><span class="font-medium">Password:</span> <span id="user-password"></span></p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = headerHTML;
    
    // Initialize mobile menu toggle after rendering
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize language selector
    const languageSelector = document.getElementById('language-selector');
    const mobileLangSelector = document.getElementById('mobile-language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
            
            // Sync mobile selector
            if (mobileLangSelector) {
                mobileLangSelector.value = selectedLanguage;
            }
        });
    }
    
    if (mobileLangSelector) {
        mobileLangSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
            
            // Sync desktop selector
            if (languageSelector) {
                languageSelector.value = selectedLanguage;
            }
        });
    }
    
    // Initialize login modal functionality
    const desktopSignInBtn = document.getElementById('desktop-sign-in-btn');
    const mobileSignInBtn = document.getElementById('mobile-sign-in-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModalBtn = document.getElementById('close-login-modal');
    const loginForm = document.getElementById('login-form');
    const googleSignInBtn = document.getElementById('google-sign-in');
    const userInfoSection = document.getElementById('user-info');
    const userEmailDisplay = document.getElementById('user-email');
    const userPasswordDisplay = document.getElementById('user-password');
    
    // Open login modal when sign in buttons are clicked
    if (desktopSignInBtn) {
        desktopSignInBtn.addEventListener('click', function() {
            loginModal.classList.remove('hidden');
        });
    }
    
    if (mobileSignInBtn) {
        mobileSignInBtn.addEventListener('click', function() {
            loginModal.classList.remove('hidden');
        });
    }
    
    // Close login modal when close button is clicked
    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', function() {
            loginModal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking outside of it
    if (loginModal) {
        loginModal.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.classList.add('hidden');
            }
        });
    }
    
    // Handle form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Display user information
            userEmailDisplay.textContent = email;
            userPasswordDisplay.textContent = password;
            userInfoSection.classList.remove('hidden');
            
            // Hide the form
            loginForm.classList.add('hidden');
            
            // Hide Google sign-in button
            googleSignInBtn.classList.add('hidden');
        });
    }
    
    // Handle Google sign-in
    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', function() {
            // Simulate Google sign-in
            const googleEmail = 'user@gmail.com'; // This would normally come from Google Auth
            const googlePassword = '********'; // Password would be handled by Google Auth
            
            // Display user information
            userEmailDisplay.textContent = googleEmail;
            userPasswordDisplay.textContent = googlePassword;
            userInfoSection.classList.remove('hidden');
            
            // Hide the form
            loginForm.classList.add('hidden');
            
            // Hide Google sign-in button
            googleSignInBtn.classList.add('hidden');
        });
    }
}

// This function is defined in main.js but we're redefining it here for completeness
function changeLanguage(language) {
    console.log(`Changing language to: ${language}`);
    // In a real application, this would load language-specific content
}
