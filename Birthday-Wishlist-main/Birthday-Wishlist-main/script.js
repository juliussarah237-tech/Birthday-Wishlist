// ==============================
// LOADING SCREEN
// ==============================
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
        nav.classList.toggle('show');
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// ==============================
// SMOOTH SCROLL FOR NAV LINKS
// ==============================
document.querySelectorAll('nav a, .hero-buttons a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Close mobile menu if open
                if (nav && nav.classList.contains('show')) {
                    nav.classList.remove('show');
                    if (menuBtn) {
                        const icon = menuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==============================
// HEADER SCROLL EFFECT
// ==============================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==============================
// INTERSECTION OBSERVER - ANIMATIONS ON SCROLL
// ==============================
const animateElements = document.querySelectorAll('.about-card, .wishlist-card, .cert-card, .hero-stats div');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for staggered effect
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

animateElements.forEach(el => observer.observe(el));

// ==============================
// FLOATING CARDS ANIMATION (hero)
// ==============================
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 1.5}s`;
});

// ==============================
// WISHLIST CARD HOVER EFFECT (extra js interaction)
// ==============================
const wishlistCards = document.querySelectorAll('.wishlist-card');
wishlistCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.wishlist-img img');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });
    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('.wishlist-img img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// ==============================
// CONTACT FORM (prevent default)
// ==============================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        this.reset();
    });
}

// ==============================
// PARALLAX EFFECT ON HERO (optional)
// ==============================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function() {
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent && scrollPos < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollPos * 0.05}px)`;
        }
    });
}

// ==============================
// DYNAMIC YEAR IN FOOTER
// ==============================
const footer = document.querySelector('footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Julius Sarah. All rights reserved.`;
}

// ==============================
// SMOOTH REVEAL FOR SECTION TITLES
// ==============================
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('title-visible');
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

sectionTitles.forEach(title => titleObserver.observe(title));

console.log('🎂 Happy Birthday, Julius Sarah! 🎉');