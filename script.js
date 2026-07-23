document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        // 1. Check if we are currently on the Study Space Homepage
        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        // 2. Check if we are on any sub-page inside the study folder
        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        // 3. Set the logo link target dynamically
        if (isStudySubPage) {
            // Level 2 (Sub-Page) -> Go up to Study Space Home
            logo.href = '/study/index.html';
        } else if (isStudyHome) {
            // Level 1 (Study Home) -> Go up to Main Homepage
            logo.href = '/index.html';
        } else {
            // Level 0 (Main Home) -> Stay on Main Homepage
            logo.href = '/index.html';
        }

        // 4. Attach 750ms fluid wave transition
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = logo.href;

            document.body.classList.add('wave-active');

            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }
});
