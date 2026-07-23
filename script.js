document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        if (isStudySubPage) {
            logo.href = '/study/index.html'; // Level 2 -> Go to Study Space Home
        } else if (isStudyHome) {
            logo.href = '/index.html';       // Level 1 -> Go to Main Homepage
        } else {
            logo.href = '/index.html';       // Level 0 -> Stay on Main Homepage
        }

        // Frame-synced touch reaction on mobile
        logo.addEventListener('pointerdown', () => {
            requestAnimationFrame(() => {
                logo.classList.add('is-touch-active');
            });
        }, { passive: true });

        // 750ms Wave Transition Effect
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            requestAnimationFrame(() => {
                logo.classList.add('is-touch-active');
            });
            const destination = logo.href;
            document.body.classList.add('wave-active');
            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }
});
