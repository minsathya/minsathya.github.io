document.addEventListener('DOMContentLoaded', () => {
    // 1. Drill-up Logo Navigation
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        if (isStudySubPage) {
            logo.href = '/study/index.html'; // Level 2 -> Study Space Home
        } else if (isStudyHome) {
            logo.href = '/index.html';       // Level 1 -> Main Homepage
        } else {
            logo.href = '/index.html';       // Level 0 -> Main Homepage
        }

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = logo.href;
            document.body.classList.add('wave-active');
            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }

    // 2. Instant Touch Animation Trigger for iPad & Mobile Cards
    const myspaceCards = document.querySelectorAll('.myspace-card');

    myspaceCards.forEach(card => {
        // Trigger scale and elevation animation immediately on touch
        card.addEventListener('pointerdown', () => {
            card.classList.add('is-touch-active');
        });

        // Clean up state on release or cancel
        card.addEventListener('pointerup', () => {
            setTimeout(() => card.classList.remove('is-touch-active'), 750);
        });

        card.addEventListener('pointercancel', () => {
            card.classList.remove('is-touch-active');
        });
    });
});
