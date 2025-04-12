// Digital Payment Tips component for TRAVEL YATRA

document.addEventListener('DOMContentLoaded', function() {
    const paymentTipsContainer = document.getElementById('payment-tips');
    if (paymentTipsContainer) {
        renderPaymentTips(paymentTipsContainer);
    }
});

function renderPaymentTips(container) {
    const paymentTipsHTML = `
        <div class="container mx-auto px-4">
            <h2 class="section-heading text-3xl font-bold text-center">Digital Payment Tips</h2>
            <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Navigate India's digital payment landscape with confidence. Learn about popular payment methods and security tips.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Payment Methods Section -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b">
                            <h3 class="text-xl font-bold">Popular Payment Methods</h3>
                        </div>
                        
                        <!-- Payment Methods Tabs -->
                        <div class="p-4">
                            <div class="flex flex-wrap border-b">
                                <button class="payment-tab py-2 px-4 font-medium text-primary border-b-2 border-primary" data-tab="upi">UPI Apps</button>
                                <button class="payment-tab py-2 px-4 font-medium text-gray-500 hover:text-primary" data-tab="cards">Cards</button>
                                <button class="payment-tab py-2 px-4 font-medium text-gray-500 hover:text-primary" data-tab="wallets">Mobile Wallets</button>
                                <button class="payment-tab py-2 px-4 font-medium text-gray-500 hover:text-primary" data-tab="cash">Cash Tips</button>
                            </div>
                            
                            <!-- Tab Content -->
                            <div class="py-4">
                                <!-- UPI Apps Tab -->
                                <div class="payment-content active" id="upi-content">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <!-- Google Pay -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fab fa-google text-blue-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">Google Pay</h4>
                                                    <p class="text-xs text-gray-500">Widely accepted</p>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Google's UPI payment app. Scan QR codes or pay using mobile numbers linked to UPI.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="gpay">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                        
                                        <!-- PhonePe -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fas fa-mobile-alt text-indigo-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">PhonePe</h4>
                                                    <p class="text-xs text-gray-500">Very popular in India</p>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                One of India's most popular UPI apps with extensive merchant coverage.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="phonepe">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                        
                                        <!-- BHIM -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fas fa-rupee-sign text-blue-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">BHIM</h4>
                                                    <p class="text-xs text-gray-500">Government backed</p>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Government-backed UPI app developed by the National Payments Corporation of India.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="bhim">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                        
                                        <!-- Paytm -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fas fa-wallet text-blue-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">Paytm</h4>
                                                    <p class="text-xs text-gray-500">Multi-purpose payment app</p>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Popular payment app that supports UPI, wallet, and other payment methods.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="paytm">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Cards Tab (hidden by default) -->
                                <div class="payment-content hidden" id="cards-content">
                                    <div class="space-y-4">
                                        <div class="border border-gray-200 rounded-lg p-4">
                                            <h4 class="font-bold mb-2">Credit & Debit Cards</h4>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Major cities and tourist destinations accept international cards, but always carry some cash as backup.
                                            </p>
                                            <div class="flex flex-wrap gap-2 mb-3">
                                                <div class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Visa</div>
                                                <div class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Mastercard</div>
                                                <div class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">RuPay</div>
                                                <div class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">American Express</div>
                                            </div>
                                            <div class="text-sm text-gray-600">
                                                <div class="flex items-start mb-2">
                                                    <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                    <span>Widely accepted in hotels, restaurants, and major retail stores in urban areas</span>
                                                </div>
                                                <div class="flex items-start mb-2">
                                                    <i class="fas fa-exclamation-circle text-danger-color mt-1 mr-2"></i>
                                                    <span>May not be accepted in small shops or rural areas</span>
                                                </div>
                                                <div class="flex items-start">
                                                    <i class="fas fa-shield-alt text-primary mt-1 mr-2"></i>
                                                    <span>Always keep the card in sight when making payments to prevent fraud</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="border border-gray-200 rounded-lg p-4">
                                            <h4 class="font-bold mb-2">Card Security Tips</h4>
                                            <ul class="text-sm text-gray-600 space-y-2">
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                    <span>Inform your bank about your travel plans to avoid card blocks</span>
                                                </li>
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                    <span>Use ATMs attached to banks rather than standalone machines</span>
                                                </li>
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                    <span>Check for card skimming devices before inserting your card</span>
                                                </li>
                                                <li class="flex items-start">
                                                    <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                    <span>Keep your bank's international helpline number handy</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Mobile Wallets Tab (hidden by default) -->
                                <div class="payment-content hidden" id="wallets-content">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <!-- Paytm Wallet -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fas fa-wallet text-blue-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">Paytm Wallet</h4>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Most popular mobile wallet in India. Can be loaded using international cards.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="paytm-wallet">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                        
                                        <!-- Amazon Pay -->
                                        <div class="border border-gray-200 rounded-lg p-4 hover:border-primary">
                                            <div class="flex items-center mb-3">
                                                <div class="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mr-3">
                                                    <i class="fab fa-amazon text-orange-500 text-xl"></i>
                                                </div>
                                                <div>
                                                    <h4 class="font-bold">Amazon Pay</h4>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-3">
                                                Useful for online shopping and some physical stores. Can be loaded with international cards.
                                            </p>
                                            <button class="payment-info-btn text-primary hover:text-primary-dark text-sm font-medium" data-app="amazon-pay">
                                                Learn More <i class="fas fa-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Cash Tips Tab (hidden by default) -->
                                <div class="payment-content hidden" id="cash-content">
                                    <div class="border border-gray-200 rounded-lg p-4">
                                        <h4 class="font-bold mb-2">Cash Handling Tips</h4>
                                        <ul class="text-sm text-gray-600 space-y-2">
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Always carry some cash, especially in smaller towns and rural areas</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Use ATMs in banks or reputable locations</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Count your change carefully, especially with larger denominations</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Be aware of current Indian currency notes and their security features</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Keep small denominations handy for taxis, street food, and small purchases</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div class="border border-gray-200 rounded-lg p-4 mt-4">
                                        <h4 class="font-bold mb-2">Currency Exchange Tips</h4>
                                        <ul class="text-sm text-gray-600 space-y-2">
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Exchange at authorized money changers or banks for better rates</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Avoid exchanging at airports where rates are typically less favorable</span>
                                            </li>
                                            <li class="flex items-start">
                                                <i class="fas fa-check-circle text-success-color mt-1 mr-2"></i>
                                                <span>Always ask for a receipt when exchanging currency</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Security Tips Section -->
                <div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="p-4 bg-gray-100 border-b">
                            <h3 class="text-xl font-bold">Payment Security Tips</h3>
                        </div>
                        
                        <div class="p-4">
                            <div class="space-y-4">
                                <!-- Tip 1 -->
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <div class="flex items-start">
                                        <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i class="fas fa-shield-alt"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800">Use Secure Networks</h4>
                                            <p class="text-gray-600 text-sm">
                                                Avoid making payments over public Wi-Fi. Use your mobile data or a secure network for financial transactions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Tip 2 -->
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <div class="flex items-start">
                                        <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800">Enable App Locks</h4>
                                            <p class="text-gray-600 text-sm">
                                                Set up PIN, pattern, or biometric authentication for all payment apps on your device.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Tip 3 -->
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <div class="flex items-start">
                                        <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i class="fas fa-bell"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800">Enable Notifications</h4>
                                            <p class="text-gray-600 text-sm">
                                                Turn on transaction alerts to be notified immediately of any unauthorized activity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Tip 4 -->
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <div class="flex items-start">
                                        <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i class="fas fa-qrcode"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800">Verify QR Codes</h4>
                                            <p class="text-gray-600 text-sm">
                                                Always check the merchant name before completing a QR code payment to avoid scams.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Tip 5 -->
                                <div class="bg-blue-50 rounded-lg p-4">
                                    <div class="flex items-start">
                                        <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i class="fas fa-user-shield"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800">Keep Apps Updated</h4>
                                            <p class="text-gray-600 text-sm">
                                                Regularly update payment apps to ensure you have the latest security features and bug fixes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Emergency Contacts -->
                            <div class="mt-6 border-t pt-4">
                                <h4 class="font-bold mb-3">Emergency Contacts</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="flex items-center">
                                        <i class="fas fa-phone-alt text-primary mr-2"></i>
                                        <span>Lost Card Helpline: 1800-111-222</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-phone-alt text-primary mr-2"></i>
                                        <span>UPI Fraud Reporting: 1800-891-3333</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-phone-alt text-primary mr-2"></i>
                                        <span>Cybercrime Helpline: 1930</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = paymentTipsHTML;
    
    // Initialize payment tips functionality
    initPaymentTips();
}

function initPaymentTips() {
    // Payment method tabs
    const paymentTabs = document.querySelectorAll('.payment-tab');
    const paymentContents = document.querySelectorAll('.payment-content');
    
    if (paymentTabs.length > 0 && paymentContents.length > 0) {
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
                paymentContents.forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Show selected content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.remove('hidden');
            });
        });
    }
    
    // Payment app info buttons
    const paymentInfoButtons = document.querySelectorAll('.payment-info-btn');
    
    if (paymentInfoButtons.length > 0) {
        paymentInfoButtons.forEach(button => {
            button.addEventListener('click', function() {
                const app = this.getAttribute('data-app');
                
                // In a real app, this would open a modal with more information about the payment app
                alert(`In a real app, this would show detailed information about ${app}`);
            });
        });
    }
}
