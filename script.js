document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        if (isStudySubPage) {
            logo.href = '/study/index.html'; // Level 2 -> Go to Study Home
        } else if (isStudyHome) {
            logo.href = '/index.html';       // Level 1 -> Go to Main Home
        } else {
            logo.href = '/index.html';       // Level 0 -> Stay on Main Home
        }

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            logo.classList.add('is-card-lifted');
            logo.classList.add('is-wave-loading');
            const destination = logo.href;
            document.body.classList.add('wave-active');
            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }
});
