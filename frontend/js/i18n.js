// Internationalization system for SeaMate
class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('seamate-language') || 'en';
        this.translations = {
            en: {
                // Navigation
                'nav.how-it-works': 'How It Works',
                'nav.about': 'About',
                'nav.contact': 'Contact',
                'nav.try-now': 'Try It Now',
                'nav.demo': 'Demo',
                'nav.back-to-home': '← Back to Home',
                'nav.back-to-demo': '← Back to Demo',
                
                // Language switcher
                'lang.en': 'English',
                'lang.tr': 'Türkçe',
                'lang.switch': 'Switch Language',
                
                // Hero section
                'hero.title': 'Is it safe to sail today?',
                'hero.subtitle': 'Get real-time marine forecasts, wave heights, and sailing safety analysis — just by asking a question.',
                'hero.cta': 'Try the Demo',
                
                // How it works section
                'how-it-works.title': 'How It Works',
                'how-it-works.subtitle': 'Three simple steps to get your sailing safety analysis',
                'how-it-works.step1.title': 'Ask a Question',
                'how-it-works.step1.desc': 'e.g. "How are the waves near Santa Cruz?"',
                'how-it-works.step2.title': 'We Fetch Real-Time Data',
                'how-it-works.step2.desc': 'From OpenWeather + Open-Meteo APIs',
                'how-it-works.step3.title': 'Get Sailing Advice',
                'how-it-works.step3.desc': 'Our AI assistant explains wind, waves, and safety clearly',
                
                // Features section
                'features.title': 'Why Choose SailMate?',
                'features.subtitle': 'Everything you need for safe sailing decisions',
                'features.no-install.title': 'No Installation',
                'features.no-install.desc': 'Works from your browser — no downloads required',
                'features.real-time.title': 'Real-Time Data',
                'features.real-time.desc': 'Live marine & weather data from trusted sources',
                'features.ai-powered.title': 'AI-Powered Safety',
                'features.ai-powered.desc': 'Intelligent analysis of conditions and risks',
                'features.location-aware.title': 'Location-Aware',
                'features.location-aware.desc': 'Smart suggestions based on your area',
                'features.mobile-ready.title': 'Mobile-Ready',
                'features.mobile-ready.desc': 'Optimized for phones and tablets',
                'features.always-free.title': 'Always Free',
                'features.always-free.desc': 'No subscriptions or hidden fees',
                
                // Call to action
                'cta.title': 'Whether you\'re planning a weekend sail or checking tomorrow\'s forecast — we\'ve got your back.',
                'cta.button': 'Try it Now',
                
                // About section
                'about.title': 'About SailMate',
                'about.description1': 'We built this tool to help sailors, surfers, and explorers make safer, smarter decisions. Whether you\'re on the California coast or the Aegean Sea — just ask, and we\'ll guide you.',
                'about.description2': 'Our AI combines real-time weather data, marine forecasts, and sailing expertise to give you the information you need to stay safe on the water.',
                'about.contact-button': 'Get in Touch',
                'about.built-by': 'Built by Sailors',
                'about.built-for': 'For sailors, by sailors',
                
                // Page titles
                'page.title': 'SailMate - Marine Conditions & Sailing Safety Assistant',
                'page.description': 'Get real-time marine forecasts, wave heights, and sailing safety analysis. Ask questions and get AI-powered sailing advice.',
                'page.assistant.title': 'SailMate Assistant',
                'page.demo.title': 'Demo - SailMate',
                
                // Footer
                'footer.tagline': 'Making sailing safer and smarter with AI-powered marine forecasts.',
                'footer.product': 'Product',
                'footer.company': 'Company',
                'footer.support': 'Support',
                'footer.connect': 'Connect',
                'footer.how-it-works': 'How It Works',
                'footer.try-demo': 'Try Demo',
                'footer.get-started': 'Get Started',
                'footer.about': 'About',
                'footer.contact': 'Contact',
                'footer.privacy': 'Privacy',
                'footer.help-center': 'Help Center',
                'footer.terms': 'Terms',
                'footer.status': 'Status',
                'footer.newsletter': 'Newsletter',
                'footer.blog': 'Blog',
                'footer.community': 'Community',
                'footer.copyright': '© 2025 SailMate. All rights reserved. Built with ❤️ for sailors everywhere.',
                'footer.home': 'Home',
                'footer.real-assistant': 'Real Assistant',
                
                // Assistant page
                'assistant.title': 'SailMate Real Assistant',
                'assistant.welcome': 'Hi! I\'m your real SailMate assistant. Ask me about marine conditions, wave heights, wind forecasts, or any sailing-related questions for any location. I\'ll fetch real-time data and provide safety recommendations.',
                'assistant.input-placeholder': 'Ask about marine conditions...',
                'assistant.send': 'Send',
                'assistant.copyright-short': '© 2025 SailMate',
                
                // Demo page
                'demo.title': 'Try SailMate Demo',
                'demo.subtitle': 'See how our AI assistant helps you make safer sailing decisions',
                'demo.assistant-title': 'SailMate Assistant',
                'demo.assistant-subtitle': 'Ask me about marine conditions and sailing safety',
                'demo.input-placeholder': 'Ask about marine conditions...',
                'demo.send': 'Send',
                'demo.disclaimer': 'This is a demo. In the real app, you can ask any sailing-related question!',
                'demo.want-real': 'Want real forecasts?',
                'demo.want-real-desc': 'Try the full SailMate Assistant with real-time marine data',
                'demo.try-assistant': 'Try SailMate Assistant',
                'demo.how-works': 'How This Works',
                'demo.ask-naturally': 'Ask Naturally',
                'demo.ask-naturally-desc': 'Ask questions in plain English about any location',
                'demo.real-time-data': 'Real-Time Data',
                'demo.real-time-data-desc': 'We fetch current weather and marine conditions',
                'demo.smart-analysis': 'Smart Analysis',
                'demo.smart-analysis-desc': 'AI provides safety recommendations and insights',
                'demo.built-love': 'Built with ❤️ for sailors everywhere.',
                
                // Marine data labels
                'marine.wave-height': 'Wave Height',
                'marine.wind-speed': 'Wind Speed',
                'marine.wind-direction': 'Wind Direction',
                'marine.safety-level': 'Safety Level',
                
                // Demo conversation
                'demo.conv.welcome': 'Hi! I\'m your sailing safety assistant. Ask me about marine conditions, wave heights, wind forecasts, or any sailing-related questions. For example, try asking "How are the waves near Santa Cruz today?"',
                'demo.conv.question1': 'How are the waves near Santa Cruz today?',
                'demo.conv.answer1.intro': 'Based on current marine data for Santa Cruz:',
                'demo.conv.answer1.analysis': 'Conditions are moderate for experienced sailors. Waves are manageable but be cautious of occasional larger sets. Wind is steady from the northwest. Consider checking tide times and bring appropriate safety gear.',
                'demo.conv.question2': 'What about tomorrow\'s forecast?',
                'demo.conv.answer2.intro': 'Tomorrow\'s forecast for Santa Cruz shows:',
                'demo.conv.answer2.warning': '⚠️ <strong>Exercise caution tomorrow.</strong> Larger waves and stronger winds expected. Only recommended for experienced sailors with proper safety equipment. Consider postponing if you\'re less experienced.',
                'demo.conv.fallback': 'This is a demo! In the real SailMate app, I would analyze real-time marine data and provide detailed safety recommendations for your location. Try the full version at /ask to get actual forecasts and sailing advice.'
            },
            tr: {
                // Navigation
                'nav.how-it-works': 'Nasıl Çalışır',
                'nav.about': 'Hakkında',
                'nav.contact': 'İletişim',
                'nav.try-now': 'Şimdi Dene',
                'nav.demo': 'Demo',
                'nav.back-to-home': '← Ana Sayfaya Dön',
                'nav.back-to-demo': '← Demo\'ya Dön',
                
                // Language switcher
                'lang.en': 'English',
                'lang.tr': 'Türkçe',
                'lang.switch': 'Dil Değiştir',
                
                // Hero section
                'hero.title': 'Bugün yelken açmak güvenli mi?',
                'hero.subtitle': 'Sadece bir soru sorarak gerçek zamanlı deniz tahminleri, dalga yükseklikleri ve yelken güvenlik analizi alın.',
                'hero.cta': 'Demo\'yu Dene',
                
                // How it works section
                'how-it-works.title': 'Nasıl Çalışır',
                'how-it-works.subtitle': 'Yelken güvenlik analizinizi almak için üç basit adım',
                'how-it-works.step1.title': 'Soru Sor',
                'how-it-works.step1.desc': 'örn. "Santa Cruz yakınlarında dalgalar nasıl?"',
                'how-it-works.step2.title': 'Gerçek Zamanlı Veri Getiriyoruz',
                'how-it-works.step2.desc': 'OpenWeather + Open-Meteo API\'larından',
                'how-it-works.step3.title': 'Yelken Tavsiyesi Al',
                'how-it-works.step3.desc': 'AI asistanımız rüzgar, dalgalar ve güvenliği net bir şekilde açıklar',
                
                // Features section
                'features.title': 'Neden SailMate\'i Seçmelisiniz?',
                'features.subtitle': 'Güvenli yelken kararları için ihtiyacınız olan her şey',
                'features.no-install.title': 'Kurulum Yok',
                'features.no-install.desc': 'Tarayıcınızdan çalışır — indirme gerekmez',
                'features.real-time.title': 'Gerçek Zamanlı Veri',
                'features.real-time.desc': 'Güvenilir kaynaklardan canlı deniz ve hava durumu verileri',
                'features.ai-powered.title': 'AI Destekli Güvenlik',
                'features.ai-powered.desc': 'Koşulların ve risklerin akıllı analizi',
                'features.location-aware.title': 'Konum Farkında',
                'features.location-aware.desc': 'Bölgenize göre akıllı öneriler',
                'features.mobile-ready.title': 'Mobil Hazır',
                'features.mobile-ready.desc': 'Telefon ve tabletler için optimize edilmiş',
                'features.always-free.title': 'Her Zaman Ücretsiz',
                'features.always-free.desc': 'Abonelik veya gizli ücret yok',
                
                // Call to action
                'cta.title': 'Hafta sonu yelken planı yapıyor olun ya da yarınki tahminleri kontrol ediyor olun — arkanızdayız.',
                'cta.button': 'Şimdi Dene',
                
                // About section
                'about.title': 'SailMate Hakkında',
                'about.description1': 'Bu aracı denizcilerin, sörfçülerin ve kaşiflerin daha güvenli, daha akıllı kararlar vermelerine yardımcı olmak için geliştirdik. Kaliforniya kıyısında olun ya da Ege Denizi\'nde — sadece sorun, size rehberlik edelim.',
                'about.description2': 'AI\'mız gerçek zamanlı hava durumu verilerini, deniz tahminlerini ve yelken uzmanlığını birleştirerek suda güvende kalmanız için ihtiyacınız olan bilgileri sağlar.',
                'about.contact-button': 'İletişime Geç',
                'about.built-by': 'Denizciler Tarafından Yapıldı',
                'about.built-for': 'Denizciler için, denizciler tarafından',
                
                // Page titles
                'page.title': 'SailMate - Deniz Koşulları ve Yelken Güvenlik Asistanı',
                'page.description': 'Gerçek zamanlı deniz tahminleri, dalga yükseklikleri ve yelken güvenlik analizi alın. Sorular sorun ve AI destekli yelken tavsiyeleri alın.',
                'page.assistant.title': 'SailMate Asistan',
                'page.demo.title': 'Demo - SailMate',
                
                // Footer
                'footer.tagline': 'AI destekli deniz tahminleri ile yelken açmayı daha güvenli ve akıllı hale getiriyoruz.',
                'footer.product': 'Ürün',
                'footer.company': 'Şirket',
                'footer.support': 'Destek',
                'footer.connect': 'Bağlan',
                'footer.how-it-works': 'Nasıl Çalışır',
                'footer.try-demo': 'Demo Dene',
                'footer.get-started': 'Başla',
                'footer.about': 'Hakkında',
                'footer.contact': 'İletişim',
                'footer.privacy': 'Gizlilik',
                'footer.help-center': 'Yardım Merkezi',
                'footer.terms': 'Şartlar',
                'footer.status': 'Durum',
                'footer.newsletter': 'Haber Bülteni',
                'footer.blog': 'Blog',
                'footer.community': 'Topluluk',
                'footer.copyright': '© 2025 SailMate. Tüm hakları saklıdır. Dünyadaki tüm denizciler için ❤️ ile yapıldı.',
                'footer.home': 'Ana Sayfa',
                'footer.real-assistant': 'Gerçek Asistan',
                
                // Assistant page
                'assistant.title': 'SailMate Gerçek Asistan',
                'assistant.welcome': 'Merhaba! Ben gerçek SailMate asistanınızım. Bana herhangi bir konum için deniz koşulları, dalga yükseklikleri, rüzgar tahminleri veya yelken ile ilgili sorular sorabilirsiniz. Gerçek zamanlı veri getirip güvenlik önerileri sağlayacağım.',
                'assistant.input-placeholder': 'Deniz koşulları hakkında sorun...',
                'assistant.send': 'Gönder',
                'assistant.copyright-short': '© 2025 SailMate',
                
                // Demo page
                'demo.title': 'SailMate Demo\'yu Dene',
                'demo.subtitle': 'AI asistanımızın daha güvenli yelken kararları vermenizde nasıl yardımcı olduğunu görün',
                'demo.assistant-title': 'SailMate Asistan',
                'demo.assistant-subtitle': 'Bana deniz koşulları ve yelken güvenliği hakkında sorular sorabilirsiniz',
                'demo.input-placeholder': 'Deniz koşulları hakkında sorun...',
                'demo.send': 'Gönder',
                'demo.disclaimer': 'Bu bir demo. Gerçek uygulamada, yelken ile ilgili herhangi bir soru sorabilirsiniz!',
                'demo.want-real': 'Gerçek tahminler mi istiyorsunuz?',
                'demo.want-real-desc': 'Gerçek zamanlı deniz verileri ile tam SailMate Asistanını deneyin',
                'demo.try-assistant': 'SailMate Asistanını Dene',
                'demo.how-works': 'Bu Nasıl Çalışır',
                'demo.ask-naturally': 'Doğal Olarak Sor',
                'demo.ask-naturally-desc': 'Herhangi bir konum hakkında sade Türkçe ile sorular sorun',
                'demo.real-time-data': 'Gerçek Zamanlı Veri',
                'demo.real-time-data-desc': 'Güncel hava durumu ve deniz koşullarını getiriyoruz',
                'demo.smart-analysis': 'Akıllı Analiz',
                'demo.smart-analysis-desc': 'AI güvenlik önerileri ve içgörüler sağlar',
                'demo.built-love': 'Dünyadaki tüm denizciler için ❤️ ile yapıldı.',
                
                // Marine data labels
                'marine.wave-height': 'Dalga Yüksekliği',
                'marine.wind-speed': 'Rüzgar Hızı',
                'marine.wind-direction': 'Rüzgar Yönü',
                'marine.safety-level': 'Güvenlik Seviyesi',
                
                // Demo conversation
                'demo.conv.welcome': 'Merhaba! Ben yelken güvenlik asistanınızım. Bana deniz koşulları, dalga yükseklikleri, rüzgar tahminleri veya yelken ile ilgili sorular sorabilirsiniz. Örneğin, "Santa Cruz yakınlarında bugün dalgalar nasıl?" diye sorabilirsiniz.',
                'demo.conv.question1': 'Santa Cruz yakınlarında bugün dalgalar nasıl?',
                'demo.conv.answer1.intro': 'Santa Cruz için güncel deniz verilerine göre:',
                'demo.conv.answer1.analysis': 'Deneyimli denizciler için koşullar orta seviyede. Dalgalar yönetilebilir ancak ara sıra daha büyük setlerde dikkatli olun. Rüzgar kuzeybatıdan sabit. Gelgit zamanlarını kontrol etmeyi ve uygun güvenlik ekipmanı getirmeyi düşünün.',
                'demo.conv.question2': 'Yarınki tahmin nasıl?',
                'demo.conv.answer2.intro': 'Santa Cruz için yarınki tahmin şunu gösteriyor:',
                'demo.conv.answer2.warning': '⚠️ <strong>Yarın dikkatli olun.</strong> Daha büyük dalgalar ve güçlü rüzgarlar bekleniyor. Sadece uygun güvenlik ekipmanına sahip deneyimli denizciler için öneriliyor. Daha az deneyimliyseniz ertelemeyi düşünün.',
                'demo.conv.fallback': 'Bu bir demo! Gerçek SailMate uygulamasında, gerçek zamanlı deniz verilerini analiz eder ve konumunuz için detaylı güvenlik önerileri sağlarım. Gerçek tahminler ve yelken tavsiyeleri almak için /ask adresindeki tam sürümü deneyin.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageSwitcher();
        this.translatePage();
        this.updateHtmlLang();
    }
    
    createLanguageSwitcher() {
        // Find the navigation menu where we'll add the language switcher
        const desktopNav = document.querySelector('.hidden.md\\:block .ml-10');
        const mobileNav = document.querySelector('#mobile-menu .space-y-1');
        
        if (!desktopNav || !mobileNav) return;
        
        // Create language switcher HTML
        const langSwitcherHTML = `
            <div class="relative language-switcher">
                <button id="lang-toggle" class="flex items-center text-gray-600 hover:text-docker-blue px-3 py-2 text-sm font-medium transition-colors mobile-touch-target" aria-label="${this.t('lang.switch')}">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="hidden sm:inline">${this.currentLanguage.toUpperCase()}</span>
                    <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div id="lang-dropdown" class="absolute right-0 top-full mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 hidden z-50">
                    <a href="#" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${this.currentLanguage === 'en' ? 'bg-blue-50 text-docker-blue font-medium' : ''}" data-lang="en">
                        🇺🇸 ${this.t('lang.en')}
                    </a>
                    <a href="#" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${this.currentLanguage === 'tr' ? 'bg-blue-50 text-docker-blue font-medium' : ''}" data-lang="tr">
                        🇹🇷 ${this.t('lang.tr')}
                    </a>
                </div>
            </div>
        `;
        
        // Add to desktop navigation (before the "Try It Now" button)
        const tryNowButton = desktopNav.querySelector('a[href*="demo.html"]');
        if (tryNowButton) {
            tryNowButton.insertAdjacentHTML('beforebegin', langSwitcherHTML);
        }
        
        // Add to mobile navigation
        const mobileLangSwitcherHTML = `
            <div class="mobile-menu-item border-t border-gray-100 pt-3 mt-2">
                <div class="px-3 py-2">
                    <div class="text-gray-600 text-sm font-medium mb-3 flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        ${this.t('lang.switch')}
                    </div>
                    <div class="flex space-x-3">
                        <button class="lang-option-mobile flex-1 px-4 py-3 text-sm rounded-lg font-medium transition-all duration-200 mobile-touch-target ${this.currentLanguage === 'en' ? 'bg-docker-blue text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200'}" data-lang="en">
                            🇺🇸 ${this.t('lang.en')}
                        </button>
                        <button class="lang-option-mobile flex-1 px-4 py-3 text-sm rounded-lg font-medium transition-all duration-200 mobile-touch-target ${this.currentLanguage === 'tr' ? 'bg-docker-blue text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200'}" data-lang="tr">
                            🇹🇷 ${this.t('lang.tr')}
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        mobileNav.insertAdjacentHTML('beforeend', mobileLangSwitcherHTML);
        
        this.attachLanguageSwitcherEvents();
    }
    
    attachLanguageSwitcherEvents() {
        // Desktop language switcher
        const langToggle = document.getElementById('lang-toggle');
        const langDropdown = document.getElementById('lang-dropdown');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', (e) => {
                e.preventDefault();
                langDropdown.classList.toggle('hidden');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
                    langDropdown.classList.add('hidden');
                }
            });
        }
        
        // Language option handlers
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                if (langDropdown) {
                    langDropdown.classList.add('hidden');
                }
            });
        });
        
        // Mobile language switcher
        const mobileLangOptions = document.querySelectorAll('.lang-option-mobile');
        mobileLangOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('seamate-language', lang);
            this.translatePage();
            this.updateHtmlLang();
            this.updateLanguageSwitcher();
        }
    }
    
    updateLanguageSwitcher() {
        // Update desktop switcher
        const langToggleText = document.querySelector('#lang-toggle span');
        if (langToggleText) {
            langToggleText.textContent = this.currentLanguage.toUpperCase();
        }
        
        // Update dropdown options
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.className = `lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${this.currentLanguage === lang ? 'bg-blue-50 text-docker-blue font-medium' : ''}`;
        });
        
        // Update mobile options
        const mobileLangOptions = document.querySelectorAll('.lang-option-mobile');
        mobileLangOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.className = `lang-option-mobile flex-1 px-4 py-3 text-sm rounded-lg font-medium transition-all duration-200 mobile-touch-target ${this.currentLanguage === lang ? 'bg-docker-blue text-white shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200'}`;
        });
    }
    
    updateHtmlLang() {
        document.documentElement.lang = this.currentLanguage;
    }
    
    t(key) {
        return this.translations[this.currentLanguage][key] || this.translations.en[key] || key;
    }
    
    translatePage() {
        // Translate all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Translate title
        const titleKey = document.querySelector('meta[name="title-key"]');
        if (titleKey) {
            document.title = this.t(titleKey.content);
        }
        
        // Translate meta description
        const descKey = document.querySelector('meta[name="description-key"]');
        if (descKey) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = this.t(descKey.content);
            }
        }
    }
    
    // Method to get translated demo conversation
    getDemoConversation() {
        return [
            {
                type: 'assistant',
                content: this.t('demo.conv.welcome'),
                delay: 200
            },
            {
                type: 'user',
                content: this.t('demo.conv.question1'),
                delay: 2000
            },
            {
                type: 'assistant',
                content: this.createDemoResponse1(),
                delay: 3000
            },
            {
                type: 'user',
                content: this.t('demo.conv.question2'),
                delay: 2000
            },
            {
                type: 'assistant',
                content: this.createDemoResponse2(),
                delay: 3000
            }
        ];
    }
    
    createDemoResponse1() {
        return `<div class="space-y-3">
            <p class="text-gray-800 text-sm sm:text-base">${this.t('demo.conv.answer1.intro')}</p>
            <div class="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div class="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                        <span class="font-medium text-gray-700">🌊 ${this.t('marine.wave-height')}:</span>
                        <span class="text-green-600 font-semibold"> 3-5 feet</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">💨 ${this.t('marine.wind-speed')}:</span>
                        <span class="text-blue-600 font-semibold"> 12-15 knots</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">🧭 ${this.t('marine.wind-direction')}:</span>
                        <span class="text-blue-600 font-semibold"> NW</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">🚩 ${this.t('marine.safety-level')}:</span>
                        <span class="text-green-600 font-semibold"> Safe</span>
                    </div>
                </div>
            </div>
            <p class="text-gray-800 text-sm sm:text-base">${this.t('demo.conv.answer1.analysis')}</p>
        </div>`;
    }
    
    createDemoResponse2() {
        return `<div class="space-y-3">
            <p class="text-gray-800 text-sm sm:text-base">${this.t('demo.conv.answer2.intro')}</p>
            <div class="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div class="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                        <span class="font-medium text-gray-700">🌊 ${this.t('marine.wave-height')}:</span>
                        <span class="text-orange-600 font-semibold"> 6-8 feet</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">💨 ${this.t('marine.wind-speed')}:</span>
                        <span class="text-orange-600 font-semibold"> 18-22 knots</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">🧭 ${this.t('marine.wind-direction')}:</span>
                        <span class="text-blue-600 font-semibold"> W</span>
                    </div>
                    <div>
                        <span class="font-medium text-gray-700">🚩 ${this.t('marine.safety-level')}:</span>
                        <span class="text-orange-600 font-semibold"> Caution</span>
                    </div>
                </div>
            </div>
            <p class="text-gray-800 text-sm sm:text-base">${this.t('demo.conv.answer2.warning')}</p>
        </div>`;
    }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.seamateI18n = new I18n();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18n;
} 