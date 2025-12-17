// Financial Motivational Quotes Database
const financialQuotes = [
    {
        text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
        author: "Philip Fisher"
    },
    {
        text: "Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.",
        author: "Warren Buffett"
    },
    {
        text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg"
    },
    {
        text: "Do not save what is left after spending, but spend what is left after saving.",
        author: "Warren Buffett"
    },
    {
        text: "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
        author: "Robert Kiyosaki"
    },
    {
        text: "The secret to getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Invest in yourself. Your career is the engine of your wealth.",
        author: "Paul Clitheroe"
    },
    {
        text: "Beware of little expenses; a small leak will sink a great ship.",
        author: "Benjamin Franklin"
    },
    {
        text: "Financial freedom is available to those who learn about it and work for it.",
        author: "Robert Kiyosaki"
    },
    {
        text: "The more you learn, the more you earn.",
        author: "Frank Clark"
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        text: "Money is a terrible master but an excellent servant.",
        author: "P.T. Barnum"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        text: "Formal education will make you a living; self-education will make you a fortune.",
        author: "Jim Rohn"
    },
    {
        text: "Never depend on a single income. Make an investment to create a second source.",
        author: "Warren Buffett"
    },
    {
        text: "The goal isn't more money. The goal is living life on your terms.",
        author: "Chris Brogan"
    },
    {
        text: "Every day is a new opportunity to change your financial story.",
        author: "Suze Orman"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Risk comes from not knowing what you're doing.",
        author: "Warren Buffett"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "A budget is telling your money where to go instead of wondering where it went.",
        author: "Dave Ramsey"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "It's not about having lots of money. It's about having lots of options.",
        author: "Chris Rock"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Robert Kiyosaki"
    },
    {
        text: "Wealth is the ability to fully experience life.",
        author: "Henry David Thoreau"
    },
    {
        text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort"
    }
];

// Morning greeting database
const morningGreetings = [
    {
        greeting: "Good Morning",
        subtitle: "Make today so awesome that yesterday gets jealous!"
    },
    {
        greeting: "Good Morning",
        subtitle: "Every sunrise is an opportunity to create wealth!"
    },
    {
        greeting: "Good Morning",
        subtitle: "Your financial future starts with today's decisions!"
    },
    {
        greeting: "Good Morning",
        subtitle: "Invest in yourself first, the returns are guaranteed!"
    },
    {
        greeting: "Good Morning",
        subtitle: "Small consistent actions build massive fortunes!"
    }
];

// DOM Elements
const currentDateElement = document.getElementById('currentDate');
const quoteTextElement = document.getElementById('quoteText');  // FIXED: Changed from 'quoteTextElement' to match variable name
const quoteAuthorElement = document.getElementById('quoteAuthor');  // FIXED: Changed from 'quoteAuthorElement' to match variable name
const downloadBtn = document.getElementById('downloadBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const resetBtn = document.getElementById('resetBtn');
const dashboard = document.getElementById('dashboard');
const greetingText = document.getElementById('greetingText');
const greetingSubtitle = document.getElementById('greetingSubtitle');

// Initialize the application
function initApp() {
    updateDate();
    updateGreeting();
    displayRandomQuote();
    setupEventListeners();
    createFloatingSymbols();
    preloadLogo();
}

// Preload logo
function preloadLogo() {
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    logoImg.src = 'sigma-logo.png';
    logoImg.onload = function() {
        console.log('Logo loaded successfully');
    };
    logoImg.onerror = function() {
        console.log('Logo not found, using fallback');
        createFallbackLogo();
    };
}

// Create fallback logo using canvas
function createFallbackLogo() {
    const logoElement = document.querySelector('.logo');
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 100, 100);
    gradient.addColorStop(0, '#2dd4bf');
    gradient.addColorStop(1, '#0ea5e9');
    
    ctx.fillStyle = gradient;
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Σ6', 50, 50);
    
    const dataURL = canvas.toDataURL('image/png');
    const img = document.createElement('img');
    img.src = dataURL;
    img.alt = 'Sigma Six Logo';
    img.className = 'logo-image';
    
    logoElement.innerHTML = '';
    logoElement.appendChild(img);
}

// Update the current date
function updateDate() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    currentDateElement.textContent = formattedDate;
}

// Update greeting based on time of day
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    
    let timeBasedGreeting = "Good Morning";
    if (hour < 12) {
        timeBasedGreeting = "Good Morning";
    } else if (hour < 17) {
        timeBasedGreeting = "Good Afternoon";
    } else {
        timeBasedGreeting = "Good Evening";
    }
    
    const randomGreeting = morningGreetings[Math.floor(Math.random() * morningGreetings.length)];
    greetingText.textContent = timeBasedGreeting;
    greetingSubtitle.textContent = randomGreeting.subtitle;
    createGreetingParticles();
}

// Display a random financial quote - FIXED FUNCTION
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * financialQuotes.length);
    const quote = financialQuotes[randomIndex];
    
    // FIXED: Using the correct variable names
    quoteTextElement.textContent = `"${quote.text}"`;
    quoteAuthorElement.textContent = `- ${quote.author}`;
}

// Create floating particles for greeting
function createGreetingParticles() {
    const greetingContainer = document.querySelector('.greeting-container');
    const existingParticles = greetingContainer.querySelector('.greeting-particles');
    if (existingParticles) {
        existingParticles.remove();
    }
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'greeting-particles';
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const left = 10 + Math.random() * 80;
        const top = 20 + Math.random() * 60;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.background = `hsl(${45 + Math.random() * 15}, 100%, ${50 + Math.random() * 20}%)`;
        particlesContainer.appendChild(particle);
    }
    
    greetingContainer.appendChild(particlesContainer);
}

// Create additional floating symbols
function createFloatingSymbols() {
    const symbolsContainer = document.querySelector('.crypto-symbols');
    const symbols = ['₿', 'Ξ', '●', '⟠', '$', '€', '£', '¥', 'Σ', 'π', '∞', '∆', 'λ', 'θ', 'φ', 'ψ', 'ω', 'μ', 'σ', 'τ'];
    
    for (let i = 0; i < 30; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
        symbol.style.animationDelay = `${Math.random() * 25}s`;
        symbol.style.animationDuration = `${20 + Math.random() * 25}s`;
        symbol.style.fontSize = `${18 + Math.random() * 30}px`;
        symbol.style.opacity = `${0.1 + Math.random() * 0.4}`;
        symbol.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        symbolsContainer.appendChild(symbol);
    }
}

// Setup event listeners for buttons - FIXED: Added quote update to reset button
function setupEventListeners() {
    downloadBtn.addEventListener('click', downloadImage);
    whatsappBtn.addEventListener('click', shareToWhatsApp);
    resetBtn.addEventListener('click', function() {
        displayRandomQuote();  // This will update the quote
        updateGreeting();      // This will update the greeting
        showNotification('🔄 Quote refreshed! New financial wisdom loaded.');
    });
}

// Create optimized version for download/sharing
function createOptimizedVersion() {
    return new Promise((resolve) => {
        const clone = dashboard.cloneNode(true);
        
        // Fix styling for better image rendering
        const elementsToFix = [
            '.company-name',
            '.greeting-text',
            '.quote-text', 
            '.quote-author',
            '.contact-value',
            '.current-date'
        ];
        
        elementsToFix.forEach(selector => {
            const element = clone.querySelector(selector);
            if (element) {
                element.style.webkitBackgroundClip = 'initial';
                element.style.backgroundClip = 'initial';
                element.style.backgroundImage = 'none';
                
                if (selector === '.company-name') {
                    element.style.color = '#2dd4bf';
                    element.style.fontWeight = 'bold';
                } else if (selector === '.greeting-text') {
                    element.style.color = '#FFD700';
                    element.style.fontWeight = 'bold';
                }
            }
        });

        // Remove animations and interactive elements
        clone.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });

        // Remove buttons and floating elements
        const elementsToRemove = [
            '.buttons-container',
            '.greeting-particles',
            '.crypto-symbols',
            '.top-nav'
        ];
        
        elementsToRemove.forEach(selector => {
            const element = clone.querySelector(selector);
            if (element) element.remove();
        });

        // Set proper dimensions
        clone.style.width = '800px';
        clone.style.height = 'auto';
        clone.style.position = 'fixed';
        clone.style.left = '-9999px';
        clone.style.top = '0';
        clone.style.zIndex = '-9999';
        clone.style.background = '#0c0f1d';
        clone.style.color = '#ffffff';

        document.body.appendChild(clone);
        
        // Wait for fonts and images to load
        setTimeout(() => {
            resolve(clone);
        }, 500);
    });
}

// Download the dashboard as an image
function downloadImage() {
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span>Downloading...</span>';
    downloadBtn.disabled = true;

    createOptimizedVersion().then((clone) => {
        html2canvas(clone, {
            scale: 3, // Higher scale for better quality
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#0c0f1d',
            logging: false,
            width: clone.scrollWidth,
            height: clone.scrollHeight,
            onclone: function(clonedDoc, clonedElement) {
                // Ensure all content is properly rendered
                clonedElement.style.visibility = 'visible';
                clonedElement.style.opacity = '1';
            }
        }).then(canvas => {
            const imageData = canvas.toDataURL('image/png', 1.0);
            const link = document.createElement('a');
            const fileName = `sigma-six-${new Date().toISOString().split('T')[0]}.png`;
            link.download = fileName;
            link.href = imageData;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Cleanup
            clone.remove();
            
            // Restore button
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            
            showNotification('🎉 Image downloaded successfully!');
            
        }).catch(error => {
            console.error('Error capturing image:', error);
            clone.remove();
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            showNotification('❌ Error downloading image. Please try again.');
        });
    });
}

// WhatsApp Image Share Function
async function shareToWhatsApp() {
    const originalText = whatsappBtn.innerHTML;
    whatsappBtn.innerHTML = '<span>Preparing Image...</span>';
    whatsappBtn.disabled = true;

    try {
        // Create optimized version for sharing
        const clone = await createOptimizedVersion();
        
        // Capture as canvas with high quality
        const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#0c0f1d',
            logging: true,
            width: clone.scrollWidth,
            height: clone.scrollHeight
        });

        // Cleanup clone
        clone.remove();

        // Convert canvas to blob
        const blob = await new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png', 0.95);
        });

        // NEW APPROACH: Create downloadable link with WhatsApp intent
        const imageUrl = URL.createObjectURL(blob);
        
        // Create temporary download link
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'sigma-six-quote.png';
        
        // Create WhatsApp message
        const quote = quoteTextElement.textContent;
        const author = quoteAuthorElement.textContent;
        const greeting = greetingText.textContent;
        const subtitle = greetingSubtitle.textContent;
        
        const message = `🌟 ${greeting} from Sigma Six! 🌟\n\n${subtitle}\n\n💎 Financial Wisdom:\n${quote}\n${author}\n\n📧 sigmasix951@gmail.com\n📞 +91-951-951-8589\n\n*Download this image and share the wisdom!*`;
        
        // Method 1: Try Web Share API first (for mobile)
        if (navigator.share && navigator.canShare) {
            const file = new File([blob], "sigma-six-quote.png", { type: "image/png" });
            
            if (navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Sigma Six Financial Quote',
                    text: message
                });
                
                showNotification('✅ Shared successfully via WhatsApp!');
                return;
            }
        }

        // Method 2: WhatsApp Web with download instructions
        const encodedMessage = encodeURIComponent(
            `${message}\n\n📸 *Image Download Instructions:*\n1. Download the image from the link below\n2. Share it on WhatsApp\n3. Inspire others with financial wisdom!`
        );
        
        const whatsappUrl = `https://web.whatsapp.com/send?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Show download instructions
        showNotification('📱 Please download the image and share it on WhatsApp');
        
        // Automatically trigger download after a delay
        setTimeout(() => {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(imageUrl);
        }, 2000);

    } catch (error) {
        console.error('WhatsApp share error:', error);
        
        // Fallback: Text-only sharing
        shareTextViaWhatsApp();
        showNotification('📤 Sharing text version via WhatsApp');
    } finally {
        // Restore button state
        whatsappBtn.innerHTML = originalText;
        whatsappBtn.disabled = false;
    }
}

// Fallback: Text-only WhatsApp sharing
function shareTextViaWhatsApp() {
    const greeting = greetingText.textContent;
    const subtitle = greetingSubtitle.textContent;
    const quote = quoteTextElement.textContent;
    const author = quoteAuthorElement.textContent;
    const date = currentDateElement.textContent;
    
    const message = `🌟 *${greeting} from Sigma Six!* 🌟\n\n${subtitle}\n\n💎 *Financial Wisdom:*\n${quote}\n${author}\n\n📅 ${date}\n\n🌐 www.sigmasix.app\n📧 sigmasix951@gmail.com\n📞 +91-951-951-8589\n\n*Invest Smart, Live Better!* 🚀`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Show notification
function showNotification(message) {
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(135deg, #2dd4bf, #0ea5e9)';
    notification.style.color = '#0f172a';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 4px 15px rgba(45, 212, 191, 0.6)';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = '600';
    notification.style.fontSize = '14px';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    notification.style.border = '1px solid rgba(255,255,255,0.2)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add custom styles for better rendering
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .dashboard {
                margin: 1rem;
                padding: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    addCustomStyles();
    initApp();
});

// Add resize handler
window.addEventListener('resize', function() {
    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(symbol => {
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.top = `${Math.random() * 100}%`;
    });
});
