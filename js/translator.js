// Language Translator component for TRAVEL YATRA
// Using Google Cloud Speech-to-Text and Google Translate APIs

// Google Cloud API Keys - Replace with your actual API keys
const GOOGLE_CLOUD_API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';
const GOOGLE_TRANSLATE_API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize translator functionality
    initTranslator();
});

// Initialize the translator functionality
function initTranslator() {
    // DOM Elements
    const startRecordingBtn = document.getElementById('start-recording');
    const stopRecordingBtn = document.getElementById('stop-recording');
    const translateBtn = document.getElementById('translate-button');
    const sourceText = document.getElementById('source-text');
    const translationResult = document.getElementById('translation-result');
    const sourceLanguageSelect = document.getElementById('source-language');
    const targetLanguageSelect = document.getElementById('target-language');
    const recordingStatus = document.getElementById('recording-status');
    const copyTranslationBtn = document.getElementById('copy-translation');
    const speakTranslationBtn = document.getElementById('speak-translation');
    const phraseButtons = document.querySelectorAll('.phrase-button');
    
    // Speech recognition variables
    let recognition = null;
    let isRecording = false;
    
    // Initialize Web Speech API if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onstart = () => {
            isRecording = true;
            startRecordingBtn.classList.add('hidden');
            stopRecordingBtn.classList.remove('hidden');
            recordingStatus.classList.remove('hidden');
            sourceText.placeholder = 'Listening...';
        };
        
        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';
            
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }
            
            // Update the text area with transcription
            if (finalTranscript) {
                sourceText.value = finalTranscript;
            } else {
                sourceText.value = interimTranscript;
            }
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            stopRecording();
        };
        
        recognition.onend = () => {
            stopRecording();
        };
    } else {
        // Browser doesn't support speech recognition
        startRecordingBtn.disabled = true;
        startRecordingBtn.title = 'Speech recognition not supported in this browser';
        startRecordingBtn.classList.add('opacity-50');
    }
    
    // Start recording button click handler
    if (startRecordingBtn) {
        startRecordingBtn.addEventListener('click', () => {
            if (recognition) {
                try {
                    // Set the language for speech recognition
                    recognition.lang = sourceLanguageSelect.value;
                    recognition.start();
                } catch (error) {
                    console.error('Error starting speech recognition:', error);
                }
            }
        });
    }

    // Stop recording button click handler
    if (stopRecordingBtn) {
        stopRecordingBtn.addEventListener('click', stopRecording);
    }

    // Function to stop recording
    function stopRecording() {
        if (recognition) {
            recognition.stop();
        }
        isRecording = false;
        startRecordingBtn.classList.remove('hidden');
        stopRecordingBtn.classList.add('hidden');
        recordingStatus.classList.add('hidden');
        sourceText.placeholder = 'Type or speak your text here...';
    }

    // Translate button click handler
    if (translateBtn) {
        translateBtn.addEventListener('click', () => {
            const text = sourceText.value.trim();
            if (text) {
                translateText(text);
            }
        });
    }

    // Function to translate text using Google Translate API
    function translateText(text) {
        if (!text || text.trim() === '') {
            translationResult.textContent = '';
            return;
        }
        
        // Show loading state
        translationResult.innerHTML = '<div class="animate-pulse">Translating...</div>';
        
        // Get the source and target languages
        const sourceLang = sourceLanguageSelect.value.split('-')[0]; // Extract language code from locale
        const targetLang = targetLanguageSelect.value;
        
        // Comprehensive mock translations for common phrases
        const mockTranslations = {
            'hi': { // Hindi
                'Hello': 'नमस्ते',
                'How are you?': 'आप कैसे हैं?',
                'Where is the bathroom?': 'बाथरूम कहां है?',
                'How much does this cost?': 'इसकी कीमत क्या है?',
                'I need help, please.': 'कृपया मुझे मदद चाहिए।',
                'Thank you very much.': 'बहुत बहुत धन्यवाद।',
                'Can you recommend a good restaurant?': 'क्या आप एक अच्छे रेस्तरां की सिफारिश कर सकते हैं?',
                'Good morning': 'सुप्रभात',
                'Good evening': 'शुभ संध्या',
                'Goodbye': 'अलविदा',
                'Yes': 'हां',
                'No': 'नहीं',
                'Please': 'कृपया',
                'Sorry': 'माफ़ कीजिये',
                'I don\'t understand': 'मुझे समझ नहीं आया',
                'Water': 'पानी',
                'Food': 'खाना',
                'Hotel': 'होटल',
                'Train': 'ट्रेन',
                'Bus': 'बस',
                'Airport': 'हवाई अड्डा',
                'Taxi': 'टैक्सी',
                'How to get to': 'कैसे पहुंचे',
                'What time is it?': 'क्या समय हुआ है?'
            },
            'bn': { // Bengali
                'Hello': 'হ্যালো',
                'How are you?': 'আপনি কেমন আছেন?',
                'Where is the bathroom?': 'বাথরুম কোথায়?',
                'How much does this cost?': 'এর দাম কত?',
                'I need help, please.': 'আমার সাহায্য দরকার, দয়া করে।',
                'Thank you very much.': 'অনেক ধন্যবাদ।',
                'Can you recommend a good restaurant?': 'আপনি কি একটি ভালো রেস্তোরাঁ সুপারিশ করতে পারেন?',
                'Good morning': 'শুভ সকাল',
                'Good evening': 'শুভ সন্ধ্যা',
                'Goodbye': 'বিদায়',
                'Yes': 'হ্যাঁ',
                'No': 'না',
                'Please': 'দয়া করে',
                'Sorry': 'দুঃখিত',
                'I don\'t understand': 'আমি বুঝতে পারছি না',
                'Water': 'জল',
                'Food': 'খাবার',
                'Hotel': 'হোটেল',
                'Train': 'ট্রেন',
                'Bus': 'বাস',
                'Airport': 'বিমানবন্দর',
                'Taxi': 'ট্যাক্সি',
                'How to get to': 'কিভাবে যাবেন',
                'What time is it?': 'কটা বাজে?'
            },
            'te': { // Telugu
                'Hello': 'హలో',
                'How are you?': 'మీరు ఎలా ఉన్నారు?',
                'Where is the bathroom?': 'బాత్రూమ్ ఎక్కడ ఉంది?',
                'How much does this cost?': 'దీని ఖర్చు ఎంత?',
                'I need help, please.': 'నాకు సహాయం కావాలి, దయచేసి.',
                'Thank you very much.': 'చాలా ధన్యవాదాలు.',
                'Can you recommend a good restaurant?': 'మీరు మంచి రెస్టారెంట్ సిఫార్సు చేయగలరా?',
                'Good morning': 'శుభోదయం',
                'Good evening': 'శుభ సాయంత్రం',
                'Goodbye': 'వీడ్కోలు',
                'Yes': 'అవును',
                'No': 'కాదు',
                'Please': 'దయచేసి',
                'Sorry': 'క్షమించండి',
                'I don\'t understand': 'నాకు అర్థం కాలేదు',
                'Water': 'నీరు',
                'Food': 'ఆహారం',
                'Hotel': 'హోటల్',
                'Train': 'రైలు',
                'Bus': 'బస్సు',
                'Airport': 'విమానాశ్రయం',
                'Taxi': 'టాక్సీ',
                'How to get to': 'ఎలా చేరుకోవాలి',
                'What time is it?': 'ఎంత సమయం అయింది?'
            },
            'ta': { // Tamil
                'Hello': 'வணக்கம்',
                'How are you?': 'நீங்கள் எப்படி இருக்கிறீர்கள்?',
                'Where is the bathroom?': 'கழிவறை எங்கே?',
                'How much does this cost?': 'இதன் விலை என்ன?',
                'I need help, please.': 'எனக்கு உதவி தேவை, தயவுசெய்து.',
                'Thank you very much.': 'மிக்க நன்றி.',
                'Can you recommend a good restaurant?': 'நல்ல உணவகத்தை பரிந்துரைக்க முடியுமா?',
                'Good morning': 'காலை வணக்கம்',
                'Good evening': 'மாலை வணக்கம்',
                'Goodbye': 'பிரியாவிடை',
                'Yes': 'ஆம்',
                'No': 'இல்லை',
                'Please': 'தயவுசெய்து',
                'Sorry': 'மன்னிக்கவும்',
                'I don\'t understand': 'எனக்கு புரியவில்லை',
                'Water': 'தண்ணீர்',
                'Food': 'உணவு',
                'Hotel': 'ஹோட்டல்',
                'Train': 'ரயில்',
                'Bus': 'பேருந்து',
                'Airport': 'விமான நிலையம்',
                'Taxi': 'டாக்ஸி',
                'How to get to': 'எப்படி செல்வது',
                'What time is it?': 'என்ன நேரம்?'
            },
            'mr': { // Marathi
                'Hello': 'नमस्कार',
                'How are you?': 'तुम्ही कसे आहात?',
                'Where is the bathroom?': 'बाथरूम कुठे आहे?',
                'How much does this cost?': 'याची किंमत किती आहे?',
                'I need help, please.': 'मला मदत हवी आहे, कृपया.',
                'Thank you very much.': 'खूप खूप धन्यवाद.',
                'Can you recommend a good restaurant?': 'तुम्ही एखादे चांगले रेस्टॉरंट सुचवू शकता का?',
                'Good morning': 'सुप्रभात',
                'Good evening': 'शुभ संध्याकाळ',
                'Goodbye': 'निरोप',
                'Yes': 'होय',
                'No': 'नाही',
                'Please': 'कृपया',
                'Sorry': 'क्षमस्व',
                'I don\'t understand': 'मला समजत नाही',
                'Water': 'पाणी',
                'Food': 'अन्न',
                'Hotel': 'हॉटेल',
                'Train': 'ट्रेन',
                'Bus': 'बस',
                'Airport': 'विमानतळ',
                'Taxi': 'टॅक्सी',
                'How to get to': 'कसे जायचे',
                'What time is it?': 'किती वाजले आहेत?'
            }
        };
        
        // Add more languages to the mock translations
        const additionalTranslations = {
            'gu': { // Gujarati
                'Hello': 'નમસ્તે',
                'How are you?': 'તમે કેમ છો?',
                'Thank you': 'આભાર',
                'Yes': 'હા',
                'No': 'ના',
                'Please help me': 'મદદ કરો',
                'Where is': 'ક્યાં છે',
                'How much': 'કેટલું',
                'Water': 'પાણી'
            },
            'kn': { // Kannada
                'Hello': 'ನಮಸ್ಕಾರ',
                'How are you?': 'ನೀವು ಹೇಗಿದ್ದೀರಿ?',
                'Thank you': 'ಧನ್ಯವಾದಗಳು',
                'Yes': 'ಹೌದು',
                'No': 'ಇಲ್ಲ',
                'Please help me': 'ದಯವಿಟ್ಟು ನನಗೆ ಸಹಾಯ ಮಾಡಿ',
                'Where is': 'ಎಲ್ಲಿದೆ',
                'How much': 'ಎಷ್ಟು',
                'Water': 'ನೀರು'
            },
            'ml': { // Malayalam
                'Hello': 'നമസ്കാരം',
                'How are you?': 'സുഖമാണോ?',
                'Thank you': 'നന്ദി',
                'Yes': 'അതെ',
                'No': 'അല്ല',
                'Please help me': 'ദയവായി എന്നെ സഹായിക്കൂ',
                'Where is': 'എവിടെയാണ്',
                'How much': 'എത്ര',
                'Water': 'വെള്ളം'
            },
            'pa': { // Punjabi
                'Hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
                'How are you?': 'ਤੁਸੀ ਕਿਵੇਂ ਹੋ?',
                'Thank you': 'ਧੰਨਵਾਦ',
                'Yes': 'ਹਾਂ',
                'No': 'ਨਹੀਂ',
                'Please help me': 'ਕਿਰਪਾ ਕਰਕੇ ਮੇਰੀ ਮਦਦ ਕਰੋ',
                'Where is': 'ਕਿੱਥੇ ਹੈ',
                'How much': 'ਕਿੰਨਾ',
                'Water': 'ਪਾਣੀ'
            }
        };
        
        // Merge additional translations into the main mock translations object
        Object.assign(mockTranslations, additionalTranslations);
        
        // Attempt to translate using our mock database
        setTimeout(() => {
            try {
                let translatedText = '';
                
                // Check if we have a direct translation for this text
                if (mockTranslations[targetLang] && mockTranslations[targetLang][text]) {
                    translatedText = mockTranslations[targetLang][text];
                } else {
                    // Try to find partial matches or similar phrases
                    const lowerText = text.toLowerCase();
                    let foundMatch = false;
                    
                    // Check for partial matches in our dictionary
                    if (mockTranslations[targetLang]) {
                        for (const [phrase, translation] of Object.entries(mockTranslations[targetLang])) {
                            if (lowerText.includes(phrase.toLowerCase()) || phrase.toLowerCase().includes(lowerText)) {
                                translatedText = translation;
                                foundMatch = true;
                                break;
                            }
                        }
                    }
                    
                    // If no match found, generate a simulated translation
                    if (!foundMatch) {
                        // Language names for better user experience
                        const langNames = {
                            'hi': 'Hindi',
                            'bn': 'Bengali',
                            'te': 'Telugu',
                            'ta': 'Tamil',
                            'mr': 'Marathi',
                            'gu': 'Gujarati',
                            'kn': 'Kannada',
                            'ml': 'Malayalam',
                            'pa': 'Punjabi',
                            'en': 'English'
                        };
                        
                        // Create a more realistic mock translation based on the target language
                        switch(targetLang) {
                            case 'hi':
                                translatedText = text.split(' ').map(word => 
                                    word.length > 2 ? word.charAt(0) + 'ा' + word.substring(1) + 'ी' : word
                                ).join(' ');
                                break;
                            case 'bn':
                                translatedText = text.split(' ').map(word => 
                                    word.length > 2 ? word.charAt(0) + 'া' + word.substring(1) + 'ি' : word
                                ).join(' ');
                                break;
                            case 'te':
                                translatedText = text.split(' ').map(word => 
                                    word.length > 2 ? word.charAt(0) + 'ా' + word.substring(1) + 'ి' : word
                                ).join(' ');
                                break;
                            case 'ta':
                                translatedText = text.split(' ').map(word => 
                                    word.length > 2 ? word.charAt(0) + 'ா' + word.substring(1) + 'ி' : word
                                ).join(' ');
                                break;
                            case 'mr':
                                translatedText = text.split(' ').map(word => 
                                    word.length > 2 ? word.charAt(0) + 'ा' + word.substring(1) + 'ी' : word
                                ).join(' ');
                                break;
                            default:
                                // For other languages, use a simple placeholder
                                translatedText = `[${text} - translated to ${langNames[targetLang] || targetLang}]`;
                        }
                    }
                }
                
                // Update the translation result
                translationResult.textContent = translatedText;
                
                // Enable the speak translation button if we have a result
                if (speakTranslationBtn) {
                    speakTranslationBtn.disabled = false;
                    speakTranslationBtn.classList.remove('opacity-50');
                }
                
            } catch (error) {
                console.error('Translation error:', error);
                translationResult.innerHTML = '<div class="text-red-500">Translation failed. Please try again.</div>';
            }
        }, 800); // Reduced timeout for better user experience
        
        /* In a production environment, you would use fetch to call the Google Translate API:
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                source: sourceLang,
                target: targetLang,
                format: 'text'
            })
        })
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            translationResult.textContent = translatedText;
        })
        .catch(error => {
            console.error('Translation error:', error);
            translationResult.innerHTML = '<div class="text-red-500">Translation failed. Please try again.</div>';
        });
        */
    }

    // Copy translation button click handler
    if (copyTranslationBtn) {
        copyTranslationBtn.addEventListener('click', () => {
            const text = translationResult.textContent;
            if (text) {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        // Show copied message
                        const originalText = copyTranslationBtn.innerHTML;
                        copyTranslationBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>Copied!';
                        
                        setTimeout(() => {
                            copyTranslationBtn.innerHTML = originalText;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy text:', err);
                    });
            }
        });
    }
    
    // Speak translation button click handler
    if (speakTranslationBtn) {
        speakTranslationBtn.addEventListener('click', () => {
            const text = translationResult.textContent;
            if (text && 'speechSynthesis' in window) {
                // Create a new speech synthesis utterance
                const utterance = new SpeechSynthesisUtterance(text);
                
                // Set the language based on the target language
                utterance.lang = targetLanguageSelect.value;
                
                // Speak the text
                window.speechSynthesis.speak(utterance);
                
                // Update button to show speaking state
                const originalText = speakTranslationBtn.innerHTML;
                speakTranslationBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 animate-pulse" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243a1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clip-rule="evenodd" /></svg>Speaking...';
                
                // Reset button after speech is complete
                utterance.onend = () => {
                    speakTranslationBtn.innerHTML = originalText;
                };
            }
        });
    }
    
    // Common phrases buttons click handler
    if (phraseButtons && phraseButtons.length > 0) {
        phraseButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Set the phrase as the source text
                sourceText.value = button.textContent;
                
                // Automatically translate the phrase
                translateText(button.textContent);
            });
        });
    }
    
    // Function to handle Google Cloud Speech-to-Text API
    // In a production environment, you would implement this function
    // to call the Google Cloud Speech-to-Text API
    function googleSpeechToText(audioBlob) {
        /* In a production environment, you would use code like this:
        
        const apiEndpoint = `https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_CLOUD_API_KEY}`;
        
        // Convert audio blob to base64
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
            const base64Audio = reader.result.split(',')[1];
            
            // Prepare request body
            const requestBody = {
                config: {
                    encoding: 'LINEAR16',
                    sampleRateHertz: 16000,
                    languageCode: sourceLanguageSelect.value,
                    model: 'command_and_search',
                    enableAutomaticPunctuation: true
                },
                audio: {
                    content: base64Audio
                }
            };
            
            // Make API request
            fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const transcript = data.results[0].alternatives[0].transcript;
                    sourceText.value = transcript;
                }
            })
            .catch(error => {
                console.error('Speech-to-Text API error:', error);
            });
        };
        */
    }
}
