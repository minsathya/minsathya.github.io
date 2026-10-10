/* ==========================================================================
   GLOBAL SITE THEME & UNIFIED HEADER ENGINE
   ========================================================================== */

// 1. GLOBAL THEME, DYNAMIC SHADOWS & UNIFIED HEADER INJECTION
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'global-site-theme-rules';
    style.textContent = `
        /* Site-wide Dark Mode: Shadows completely removed site-wide */
        html:not(.light-mode), 
        body:not(.light-mode) {
            --bg-color: #000000 !important;
            --panel-bg: #0d0d0d !important;
            --panel-border: #141414 !important;
            --row-divider: #141414 !important;
            --shadow-ambient: none !important;
            --shadow-lift: none !important;
        }

        /* Root Homepage & Nutrition Workspace: Panel Transparent BG & Hidden Border in Idle */
        html:not(.light-mode) body.nutrition-workspace,
        body:not(.light-mode).nutrition-workspace {
            --bg-color: #0a130d !important;
            background-color: #0a130d !important;
            --panel-bg: transparent !important;
            --panel-border: transparent !important;
            --panel-border-hover: rgba(255, 255, 255, 0.12) !important;
        }

        /* Root Homepage: Always deep night blue sky bg (rich & slightly darker) and transparent idle borders */
        html.root-home,
        html.root-home body,
        body.root-home {
            background: radial-gradient(ellipse at 50% 22%, #191742 0%, #121132 50%, #0a0921 100%) fixed !important;
            background-color: #0a0921 !important;
            color: #ffffff !important;
            --panel-bg: transparent !important;
            --panel-border: transparent !important;
            --panel-border-hover: rgba(255, 255, 255, 0.14) !important;
        }

        body.root-home {
            background: transparent !important;
        }

        /* Apple-Style Panels on Root Homepage & Nutrition Workspace: Transparent in Idle */
        body.root-home .apple-panel,
        body.nutrition-workspace .apple-panel {
            background-color: transparent !important;
            border: 1.5px solid transparent !important;
        }

        /* Border only appears on hover, active or lifted — Very light, silent contour */
        body.root-home .apple-panel:hover,
        body.root-home .apple-panel:active,
        body.root-home .apple-panel.is-card-lifted {
            border-color: var(--panel-border-hover) !important;
            background-color: transparent !important;
        }

        body.nutrition-workspace .apple-panel:hover,
        body.nutrition-workspace .apple-panel:active,
        body.nutrition-workspace .apple-panel.is-card-lifted {
            border-color: var(--panel-border-hover) !important;
            background-color: transparent !important;
        }

        body.light-mode.nutrition-workspace .apple-panel:hover,
        body.light-mode.nutrition-workspace .apple-panel:active,
        body.light-mode.nutrition-workspace .apple-panel.is-card-lifted {
            border-color: rgba(0, 0, 0, 0.08) !important;
        }

        /* Site-wide Light Mode: Shadows completely removed */
        html.light-mode, 
        body.light-mode {
            --bg-color: #f5f5f7 !important;
            --header-bg: #ffffff !important;
            --shadow-ambient: none !important;
            --shadow-lift: none !important;
        }

        /* Universal Shadow Removal Across All Panels & Cards Site-wide */
        .article-card,
        .date-topics-capsule,
        .empty-placeholder-card,
        .info-callout,
        .myspace-card:not(.apple-panel),
        .wide-capsule,
        .macro-card {
            box-shadow: none !important;
            transition: background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                        border-color 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                        transform 0.55s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .apple-panel {
            box-shadow: none !important;
        }

        .article-card:hover,
        .date-topics-capsule:hover,
        .apple-panel:hover,
        .apple-panel:active,
        .apple-panel.is-card-lifted,
        .wide-capsule:hover,
        .wide-capsule.is-capsule-lifted {
            box-shadow: none !important;
        }

        /* Standardize Header Design Across All Pages */
        header#masterHeader,
        header {
            border-radius: 28px !important;
            height: 72px !important;
            border: 1px solid var(--header-border) !important;
            background-color: var(--header-bg) !important;
            box-shadow: none !important;
            transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), 
                        border-color 0.55s cubic-bezier(0.25, 1, 0.5, 1), 
                        background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        /* Universal 3D Lift Animation on Hover / Tap */
        header#masterHeader:hover,
        header#masterHeader:focus-within,
        header#masterHeader:active,
        header#masterHeader.is-header-lifted,
        header:hover,
        header:focus-within,
        header:active,
        header.is-header-lifted {
            transform: translate3d(0, -6px, 0) scale3d(1.015, 1.015, 1) !important;
            border-color: #1E1E1E !important;
            box-shadow: none !important;
        }

        body.light-mode header#masterHeader:hover,
        body.light-mode header#masterHeader:focus-within,
        body.light-mode header#masterHeader:active,
        body.light-mode header#masterHeader.is-header-lifted,
        body.light-mode header:hover,
        body.light-mode header:focus-within,
        body.light-mode header:active,
        body.light-mode header.is-header-lifted {
            border-color: #b8b8bc !important;
            box-shadow: none !important;
        }

        /* Mobile Viewport Header Sizing */
        @media (max-width: 700px) {
            header#masterHeader,
            header {
                height: 64px !important;
                border-radius: 24px !important;
            }
        }
    `;
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    }
})();

// 2. IMMEDIATE THEME SYNCHRONIZATION
(function syncInitialTheme() {
    const currentPath = window.location.pathname.toLowerCase();
    const isRootHome = currentPath === '' || currentPath === '/' || (currentPath.endsWith('/index.html') && !currentPath.includes('/study/') && !currentPath.includes('/nutrition/'));

    // Root Homepage: Always maintain deep night sky background in any theme
    if (isRootHome) {
        document.documentElement.classList.remove('light-mode');
        if (document.body) document.body.classList.remove('light-mode');
        document.documentElement.classList.add('root-home');
        if (document.body) document.body.classList.add('root-home');
        return;
    }

    const savedTheme = sessionStorage.getItem('dashboard-theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.documentElement.classList.add('light-mode');
        if (document.body) document.body.classList.add('light-mode');
    }

    if (currentPath.includes('/nutrition/') && !currentPath.includes('mm.html')) {
        document.documentElement.classList.add('nutrition-workspace');
        if (document.body) document.body.classList.add('nutrition-workspace');
    }
})();

// 3. LOGO NAVIGATION & UNIVERSAL INTERACTIONS
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.toLowerCase();
    const isRootHome = currentPath === '' || currentPath === '/' || (currentPath.endsWith('/index.html') && !currentPath.includes('/study/') && !currentPath.includes('/nutrition/'));

    if (isRootHome) {
        document.documentElement.classList.remove('light-mode');
        if (document.body) document.body.classList.remove('light-mode');
        if (document.body) document.body.classList.add('root-home');
    } else {
        if (document.documentElement.classList.contains('light-mode') && !document.body.classList.contains('light-mode')) {
            document.body.classList.add('light-mode');
        }
    }

    if (currentPath.includes('/nutrition/') && !currentPath.includes('mm.html')) {
        document.body.classList.add('nutrition-workspace');
    }

    const masterHeader = document.getElementById('masterHeader') || document.querySelector('header');
    const searchInput = document.getElementById('searchCoreInput');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    if (masterHeader) {
        function resetHeaderLift() {
            if (masterHeader.classList.contains('state-search') && searchInput && searchInput.value.trim() === "") {
                masterHeader.classList.remove('state-search');
                masterHeader.classList.add('state-main');
            }
            if (searchInput) searchInput.blur();
            masterHeader.classList.remove('is-header-lifted');
        }

        masterHeader.addEventListener('pointerdown', (e) => {
            masterHeader.classList.add('is-header-lifted');
            if (masterHeader.classList.contains('state-search') && searchInput) {
                if (document.activeElement !== searchInput && e.target !== closeSearchBtn && e.target !== clearSearchBtn) {
                    searchInput.focus({ preventScroll: true });
                }
            }
        });

        masterHeader.addEventListener('pointerleave', () => {
            if (masterHeader.classList.contains('state-search') && searchInput && searchInput.value.trim() !== "") {
                return;
            }
            resetHeaderLift();
        });

        document.addEventListener('pointerdown', (e) => {
            if (!masterHeader.contains(e.target)) {
                resetHeaderLift();
            }
        });
    }

    // Logo ("sathya.") ALWAYS directs to the main homepage (/index.html) across the whole site
    const logo = document.querySelector('.logo') || document.querySelector('header a.brand-pill') || document.querySelector('.brand-pill');

    if (logo) {
        logo.href = '/index.html';

        logo.addEventListener('click', (e) => {
            e.preventDefault();
            logo.classList.add('is-card-lifted');
            logo.classList.add('is-wave-loading');
            document.body.classList.add('wave-active');
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 750);
        });
    }
});

// 4. UNIVERSAL BREADCRUMB LIFECYCLE & WORKSPACE HOME ROUTING
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
            // Clicking "Home" in breadcrumbs routes to the current workspace homepage:
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

