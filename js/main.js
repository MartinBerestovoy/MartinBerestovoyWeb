// Sticky header
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('nav-scrolled', window.scrollY > 20);
}, { passive: true });
