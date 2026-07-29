// AOS Animation Init
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Background Dynamic Scroll Effect & Scroll To Top
const homeBg = document.getElementById('home-bg');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const blurValue = Math.min(scrollY / 30, 14); 
    const brightnessValue = Math.max(0.3 - (scrollY / 1000), 0.12);
    
    if (homeBg) {
        homeBg.style.filter = `blur(${blurValue}px) brightness(${brightnessValue}) contrast(1.1)`;
    }

    if (scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll to Top Click Event
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});