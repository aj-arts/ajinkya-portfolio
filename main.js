/* ============================================================
   Main JS — Scroll Reveal + Mobile Nav
   ============================================================ */

// ------- Scroll-reveal via Intersection Observer --------
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ------- Mobile hamburger toggle --------
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ------- Navbar background on scroll --------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.background = 'rgba(11, 14, 23, 0.92)';
    } else {
        navbar.style.background = 'rgba(11, 14, 23, 0.7)';
    }
}, { passive: true });
