// ===== LANGUAGE SWITCHER =====
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;

    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all elements with data-en and data-ar attributes
    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update prices
    updateAllPrices();
}

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// ===== PRICE UPDATES =====
function updateAllPrices() {
    document.querySelectorAll('.price-amount').forEach(priceElement => {
        const eurPrice = priceElement.getAttribute('data-eur');
        const egpPrice = priceElement.getAttribute('data-egp');

        if (currentLang === 'en') {
            priceElement.textContent = `€${eurPrice} / ${egpPrice} EGP`;
        } else {
            priceElement.textContent = `${egpPrice} ج.م`;
        }
    });
}

// ===== MOBILE MENU =====
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== PRODUCT IMAGE GALLERY =====
document.querySelectorAll('.product-card').forEach(card => {
    const thumbnails = card.querySelectorAll('.thumbnail');
    const mainImage = card.querySelector('.product-img-active');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');

            // Update main image
            const newImageSrc = thumbnail.getAttribute('data-img');
            mainImage.src = newImageSrc;
        });
    });
});

// ===== COLOR SELECTOR =====
document.querySelectorAll('.product-card').forEach(card => {
    const colorButtons = card.querySelectorAll('.color-btn');
    const thumbnails = card.querySelectorAll('.thumbnail');
    const mainImage = card.querySelector('.product-img-active');

    colorButtons.forEach(colorBtn => {
        colorBtn.addEventListener('click', () => {
            const selectedColor = colorBtn.getAttribute('data-color');

            // Update active color button
            colorButtons.forEach(btn => btn.classList.remove('active'));
            colorBtn.classList.add('active');

            // Filter thumbnails by color and show first one
            const colorThumbnails = Array.from(thumbnails).filter(
                thumb => thumb.getAttribute('data-color') === selectedColor
            );

            if (colorThumbnails.length > 0) {
                // Update thumbnails active state
                thumbnails.forEach(t => t.classList.remove('active'));
                colorThumbnails[0].classList.add('active');

                // Update main image
                mainImage.src = colorThumbnails[0].getAttribute('data-img');
            }
        });
    });
});

// ===== SIZE SELECTOR =====
document.querySelectorAll('.product-card').forEach(card => {
    const sizeButtons = card.querySelectorAll('.size-btn');

    sizeButtons.forEach(sizeBtn => {
        sizeBtn.addEventListener('click', () => {
            // Update active size button
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            sizeBtn.classList.add('active');
        });
    });
});

// ===== ORDER ONLINE =====
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const productName = card.querySelector('.product-name').textContent;
        const price = card.querySelector('.price-amount').textContent;
        const selectedColor = card.querySelector('.color-btn.active').getAttribute('data-color');
        const selectedSize = card.querySelector('.size-btn.active').getAttribute('data-size');

        // Create order message
        const colorText = currentLang === 'en'
            ? (selectedColor === 'black' ? 'Black' : 'White')
            : (selectedColor === 'black' ? 'أسود' : 'أبيض');

        const message = currentLang === 'en'
            ? `📦 Order Details:\n\nProduct: ${productName}\nColor: ${colorText}\nSize: ${selectedSize}\nPrice: ${price}\n\n━━━━━━━━━━━━━━━━━━━━\n\n📱 Reach us on WhatsApp or Instagram to order!\n\n⚠️ Sorry, we still don't have online payments yet.\n\nContact us to complete your order.`
            : `📦 تفاصيل الطلب:\n\nالمنتج: ${productName}\nاللون: ${colorText}\nالمقاس: ${selectedSize}\nالسعر: ${price}\n\n━━━━━━━━━━━━━━━━━━━━\n\n📱 تواصل معنا على واتساب أو انستغرام للطلب!\n\n⚠️ عذراً، لا نملك نظام دفع إلكتروني حالياً.\n\nتواصل معنا لإتمام طلبك.`;

        alert(message);

        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Add animation to button
        this.textContent = currentLang === 'en' ? '✓ Contact Us!' : '✓ تواصل معنا!';
        this.style.background = '#4CAF50';

        setTimeout(() => {
            this.textContent = currentLang === 'en' ? 'Order Online' : 'اطلب الآن';
            this.style.background = '';
        }, 2000);
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(13, 18, 43, 1)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(13, 18, 43, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Video Controls
const heroVideo = document.getElementById('hero-video');

// Ensure video plays on mobile devices and starts at 21 seconds
if (heroVideo) {
    heroVideo.currentTime = 21;
    heroVideo.play().catch(error => {
        console.log('Video autoplay failed:', error);
    });

    // When video loops, restart from second 21
    heroVideo.addEventListener('ended', function() {
        this.currentTime = 21;
        this.play();
    });
}

// Pause video when not in viewport to save resources
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroVideo.play();
        } else {
            heroVideo.pause();
        }
    });
}, { threshold: 0.5 });

if (heroVideo) {
    videoObserver.observe(heroVideo);
}



// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Preload images for better performance
const preloadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

