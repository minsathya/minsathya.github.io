/* ==========================================================================
   GLOBAL SITE ARCHITECTURE & BREADCRUMB ENGINE
   Strict 3-Color Eye-Friendly Palette:
   1. Base Canvas: #121316
   2. Ink:         #e2e4e9
   3. Accent:      #7ea88f
   ========================================================================== */

// 1. GLOBAL PALETTE & MINIMALIST THEMING ENGINE
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'global-architectural-theme-rules';
    style.textContent = `
        :root {
            --color-base: #121316 !important;
            --color-ink: #e2e4e9 !important;
            --color-accent: #7ea88f !important;
            --bg-color: #121316 !important;
            --text-main: #e2e4e9 !important;
            --text-muted: rgba(226, 228, 233, 0.62) !important;
            --ink-muted: rgba(226, 228, 233, 0.62) !important;
            --ink-subtle: rgba(226, 228, 233, 0.38) !important;
            --panel-bg: rgba(226, 228, 233, 0.024) !important;
            --panel-border: rgba(226, 228, 233, 0.08) !important;
            --row-divider: rgba(226, 228, 233, 0.06) !important;
            --row-hover: rgba(126, 168, 143, 0.06) !important;
            --header-bg: rgba(226, 228, 233, 0.035) !important;
            --header-border: rgba(226, 228, 233, 0.08) !important;
            --accent-green: #7ea88f !important;
            --border-silent: rgba(226, 228, 233, 0.08) !important;
            --border-hover: rgba(126, 168, 143, 0.45) !important;
            --surface-card: rgba(226, 228, 233, 0.024) !important;
            --surface-hover: rgba(126, 168, 143, 0.05) !important;
        }

        /* Universal shadow removal & clean eye-friendly canvas */
        html, body {
            background-color: #121316 !important;
            color: #e2e4e9 !important;
        }

        /* Selection styling */
        ::selection {
            background: rgba(126, 168, 143, 0.28);
            color: #ffffff;
        }
    `;
    document.head.appendChild(style);
})();

// 2. UNIVERSAL LOGO & NAVIGATION ROUTING
document.addEventListener('DOMContentLoaded', () => {
    const brandLinks = document.querySelectorAll('a.brand-monogram, a.brand-pill, header a.logo');
    brandLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const dest = link.getAttribute('href');
            if (!dest || dest === '#' || dest.startsWith('javascript:')) return;
            // Let normal smooth navigation take place
        });
    });
});

// 3. UNIVERSAL BREADCRUMB LIFECYCLE & WORKSPACE ROUTING
(function initBreadcrumbLifecycle() {
    try {
        const path = window.location.pathname.toLowerCase();
        const isRootIndex = path === '' || path === '/' || (path.endsWith('/index.html') && !path.includes('/study/') && !path.includes('/nutrition/'));
        const isStudyIndex = path.endsWith('/study') || path.endsWith('/study/') || path.endsWith('/study/index.html');
        const isNutritionIndex = path.endsWith('/nutrition') || path.endsWith('/nutrition/') || path.endsWith('/nutrition/index.html');

        if (isRootIndex) {
            sessionStorage.removeItem('breadcrumbTrail');
        } else if (isStudyIndex) {
            sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/study/index.html" }]));
        } else if (isNutritionIndex) {
            sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/nutrition/index.html" }]));
        }
    } catch (e) {}

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.breadcrumb-nav a, .breadcrumbs a');
        if (!link) return;
        const href = link.getAttribute('href');
        const linkText = link.textContent.trim().toLowerCase();
        const currentPath = window.location.pathname.toLowerCase();

        try {
            if (linkText === 'home') {
                if (currentPath.includes('/nutrition/')) {
                    e.preventDefault();
                    sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/nutrition/index.html" }]));
                    window.location.href = '/nutrition/index.html';
                    return;
                } else if (currentPath.includes('/study/')) {
                    e.preventDefault();
                    sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/study/index.html" }]));
                    window.location.href = '/study/index.html';
                    return;
                }
            }

            if (href === '/index.html' || href === '/') {
                sessionStorage.removeItem('breadcrumbTrail');
                return;
            }
            if (href === '/study/index.html' || href === '/study/') {
                sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/study/index.html" }]));
                return;
            }
            if (href === '/nutrition/index.html' || href === '/nutrition/') {
                sessionStorage.setItem('breadcrumbTrail', JSON.stringify([{ name: "Home", path: "/nutrition/index.html" }]));
                return;
            }

            const stored = sessionStorage.getItem('breadcrumbTrail');
            if (stored) {
                let trail = JSON.parse(stored);
                const targetIdx = trail.findIndex(step => step.path === href);
                if (targetIdx !== -1) {
                    trail = trail.slice(0, targetIdx + 1);
                    sessionStorage.setItem('breadcrumbTrail', JSON.stringify(trail));
                }
            }
        } catch (err) {}
    }, true);
})();
