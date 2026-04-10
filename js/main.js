// Sticky header
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('nav-scrolled', window.scrollY > 20);
}, { passive: true });

const navLinks = document.querySelectorAll('#main-header nav a[href^="#"]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const navSections = Array.from(navLinks)
    .map((link) => {
        const targetId = link.getAttribute('href');
        const section = targetId ? document.querySelector(targetId) : null;

        if (!section) {
            return null;
        }

        return { link, section, targetId };
    })
    .filter(Boolean);

function setActiveNavLink(activeId) {
    navSections.forEach(({ link, targetId }) => {
        link.classList.toggle('is-active', targetId === activeId);
    });
}

function updateActiveNavLink() {
    if (!navSections.length) {
        return;
    }

    const headerOffset = header ? header.offsetHeight + 24 : 24;
    const scrollPosition = window.scrollY + headerOffset;
    let currentSectionId = null;

    navSections.forEach(({ section, targetId }) => {
        if (section.offsetTop <= scrollPosition) {
            currentSectionId = targetId;
        }
    });

    setActiveNavLink(currentSectionId);
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });
window.addEventListener('load', updateActiveNavLink);
window.addEventListener('resize', updateActiveNavLink);
updateActiveNavLink();

function easeInOutCubic(progress) {
    return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function animateScrollTo(targetY, duration = 700) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        const targetSection = targetId ? document.querySelector(targetId) : null;

        if (!targetSection) {
            return;
        }

        event.preventDefault();

        link.classList.remove('is-pressed');
        void link.offsetWidth;
        link.classList.add('is-pressed');

        const headerOffset = header ? header.offsetHeight + 12 : 0;
        const targetY = Math.max(
            targetSection.getBoundingClientRect().top + window.scrollY - headerOffset,
            0
        );

        if (prefersReducedMotion.matches) {
            window.scrollTo({ top: targetY, behavior: 'auto' });
        } else {
            animateScrollTo(targetY);
        }

        setActiveNavLink(targetId);
        window.history.replaceState(null, '', targetId);
    });

    link.addEventListener('animationend', () => {
        link.classList.remove('is-pressed');
    });
});
