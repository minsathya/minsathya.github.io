/* ==========================================================================
   GLOBAL SITE THEME & UNIFIED HEADER ENGINE
   ========================================================================== */

// 1. GLOBAL THEME, DYNAMIC SHADOWS & UNIFIED HEADER INJECTION
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'global-site-theme-rules';
    style.textContent = `
        /* Site-wide Dark Mode: Shadows blend into pure black */
        html:not(.light-mode), 
        body:not(.light-mode) {
            --bg-color: #000000 !important;
            --panel-bg: #0d0d0d !important;
            --panel-border: #141414 !important;
            --row-divider: #141414 !important;
            --shadow-ambient: 0 20px 40px rgba(0, 0, 0, 0.85) !important;
            --shadow-lift: 0 24px 48px rgba(0, 0, 0, 0.95) !important;
        }

        /* Site-wide Light Mode: Shadows blend into soft light surface */
        html.light-mode, 
        body.light-mode {
            --bg-color: #f5f5f7 !important;
            --header-bg: #ffffff !important;
            --shadow-ambient: 0 20px 40px rgba(0, 0, 0, 0.03) !important;
            --shadow-lift: 0 16px 32px rgba(0, 0, 0, 0.08) !important;
        }

        /* Universal Shadow Application Across All Panels & Cards */
        .article-card,
        .date-topics-capsule,
        .empty-placeholder-card,
        .info-callout {
            box-shadow: var(--shadow-ambient) !important;
            transition: background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                        border-color 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                        box-shadow 0.8s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        /* Standardize Header Design Across All Pages */
        header#masterHeader,
        header {
            border-radius: 28px !important;
            height: 72px !important;
            border: 1px solid var(--header-border) !important;
            background-color: var(--header-bg) !important;
            box-shadow: var(--shadow-ambient) !important;
            transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), 
                        box-shadow 0.55s cubic-bezier(0.25, 1, 0.5, 1), 
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
            box-shadow: var(--shadow-lift) !important;
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
            box-shadow: var(--shadow-lift) !important;
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
    const savedTheme = sessionStorage.getItem('dashboard-theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.documentElement.classList.add('light-mode');
        if (document.body) document.body.classList.add('light-mode');
    }
})();

// 3. LOGO NAVIGATION & UNIVERSAL HEADER INTERACTIONS
document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.classList.contains('light-mode') && !document.body.classList.contains('light-mode')) {
        document.body.classList.add('light-mode');
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

    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        if (isStudySubPage) {
            logo.href = '/study/index.html';
        } else if (isStudyHome) {
            logo.href = '/index.html';
        } else {
            logo.href = '/index.html';
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
