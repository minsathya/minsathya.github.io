document.addEventListener('DOMContentLoaded', () => {
    // 1. Locate the logo element (looks for class="logo" or the first link in header)
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname;

        // 2. Set the drill-up target dynamically based on the current page location
        if (path.includes('/study/') && !path.endsWith('/study/index.html') && !path.endsWith('/study/')) {
            // Level 2 (Study Sub-Pages) -> Steps up to Study Space Home
            logo.href = '/study/index.html';
        } else if (path.endsWith('/study/index.html') || path.endsWith('/study/')) {
            // Level 1 (Study Space Home) -> Steps up to Main Homepage
            logo.href = '/index.html';
        } else {
            // Level 0 (Main Homepage) -> Points to Root Homepage
            logo.href = '/index.html';
        }

        // 3. Attach the 750ms Fluid Wave Transition on click
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = logo.href;

            // Triggers your wave transition effect class
            document.body.classList.add('wave-active');

            // Waits 750ms for the animation to finish before opening the page
            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }
});
