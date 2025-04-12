// Main JavaScript file for TRAVEL YATRA

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    loadAllComponents();
    
    // Setup mobile navigation toggle
    setupMobileNav();
    
    // Setup language switcher
    setupLanguageSwitcher();
    
    // Initialize any animations
    initAnimations();
});

// Load all HTML components into their respective containers
function loadAllComponents() {
    // The component loading is handled by individual JS files
    console.log('All components initialized');
}

// Setup mobile navigation
function setupMobileNav() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Setup language switcher functionality
function setupLanguageSwitcher() {
    const languageSelector = document.getElementById('language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
        });
    }
}

// Change the application language
function changeLanguage(language) {
    console.log(`Changing language to: ${language}`);
    // In a real application, this would load language-specific content
    // For now, we'll just log the change
    
    // Example of how this might work:
    // 1. Store all text in language-specific JSON files
    // 2. Load the appropriate file based on selection
    // 3. Update all text elements with the new language
    
    // This could be implemented with a library like i18next
}

// Initialize animations for elements with animation classes
function initAnimations() {
    // Add intersection observer for scroll-based animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Utility function to create HTML elements with classes and attributes
function createElement(tag, classes = [], attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    
    if (textContent) {
        element.textContent = textContent;
    }
    
    return element;
}

// Utility function for making API requests
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

// Global error handler
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global error:', { message, source, lineno, colno, error });
    
    // In a production app, you might want to log this to a service
    // or display a user-friendly error message
    
    return false; // Let the default error handler run as well
};
