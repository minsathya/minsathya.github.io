/* ==========================================================================
   MINSATHYA - UNIVERSAL THEME, BRANDMARK & NAVIGATION ENGINE
   ========================================================================== */

// 1. GLOBAL SYSTEM THEME & BRANDMARK STYLES INJECTION
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'global-site-theme-rules';
    style.textContent = `
        /* Root CSS Variables - Dark Mode Default (#0b0b0b) */
        :root {
            --bg-color: #0b0b0b;
            --text-main: #ffffff;
            --text-muted: #737373;
            --panel-bg: #121212;
            --panel-border: #222222;
            --row-divider: #1c1c1c;
            --row-hover: rgba(255, 255, 255, 0.02);
            --shadow-ambient: none;
            --shadow-lift: none;
        }

        /* Root CSS Variables - Light Mode (#f5f5f7, Panel #ffffff) */
        html.light-mode, 
        body.light-mode {
            --bg-color: #f5f5f7 !important;
            --text-main: #111111 !important;
            --text-muted: #8e8e93 !important;
            --panel-bg: #ffffff !important;
            --panel-border: #e2e2e7 !important;
            --row-divider: #f2f2f7 !important;
            --row-hover: rgba(0, 0, 0, 0.02) !important;
            --shadow-ambient: none !important;
            --shadow-lift: none !important;
        }

        html, body {
            background-color: var(--bg-color) !important;
            color: var(--text-main) !important;
            transition: background-color 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* -------------------------------------------------------------
           TOP NAVIGATION: 's' BRANDMARK & PEACH TWINKLING STAR
           ------------------------------------------------------------- */
        .top-nav-bar {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 24px;
            position: relative;
            z-index: 10;
        }

        .brand-pill {
            position: relative;
            display: inline-flex;
            align-items: baseline;
            justify-content: flex-start;
            height: auto;
            padding: 0 4px;
            background-color: transparent !important;
            border: none !important;
            text-decoration: none !important;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: -1.2px;
            line-height: 1;
            box-shadow: none !important;
            touch-action: manipulation;
            cursor: pointer;
            user-select: none;
            transform: translateZ(0);
            transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .brand-pill:hover,
        .brand-pill:active {
            transform: translate3d(0, -3px, 0) scale3d(1.02, 1.02, 1);
        }

        .brand-letter {
            color: var(--text-main) !important;
            line-height: 1;
            transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Brand Twinkling Star (Peach #ff9e79, Scales up to size of dot) */
        .brand-star-wrap {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 10px;
            height: 10px;
            margin-left: 3px;
            vertical-align: 2px;
            flex-shrink: 0;
            line-height: 1;
        }

        .brand-star {
            width: 9px;
            height: 9px;
            display: block;
            transform-origin: center center;
            animation: brandStarPulse 2.8s infinite ease-in-out;
        }

        @keyframes brandStarPulse {
            0%   { transform: scale(0.35) translateZ(0); opacity: 0.45; filter: drop-shadow(0 0 2px rgba(255, 158, 121, 0.4)); }
            50%  { transform: scale(1.0) translateZ(0);  opacity: 1;    filter: drop-shadow(0 0 6px rgba(255, 158, 121, 0.9)); }
            100% { transform: scale(0.35) translateZ(0); opacity: 0.45; filter: drop-shadow(0 0 2px rgba(255, 158, 121, 0.4)); }
        }

        /* Hide any legacy brand dots */
        .brand-dot {
            display: none !important;
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
        }
    `;
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    }
})();

// 2. AUTOMATIC SYSTEM THEME SYNCHRONIZATION (DARK: #0b0b0b, LIGHT: #f5f5f7)
(function initAutomaticSystemTheme() {
    function applySystemTheme() {
        const isSystemLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        if (isSystemLight) {
            document.documentElement.classList.add('light-mode');
            if (document.body) document.body.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
            if (document.body) document.body.classList.remove('light-mode');
        }
    }

    applySystemTheme();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', applySystemTheme);
    }
})();

// 3. LOGO ENHANCEMENT & NAVIGATION
document.addEventListener('DOMContentLoaded', () => {
    // Progressive upgrade: Ensure all logos have the animated star if they have an old dot
    const brandPills = document.querySelectorAll('.brand-pill, .logo');
    brandPills.forEach(pill => {
        if (!pill.querySelector('.brand-star-wrap')) {
            const oldDot = pill.querySelector('.brand-dot');
            if (oldDot) oldDot.remove();

            const starWrap = document.createElement('span');
            starWrap.className = 'brand-star-wrap';
            starWrap.setAttribute('aria-hidden', 'true');
            starWrap.innerHTML = `
                <svg class="brand-star" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0 C12 6.627 6.627 12 0 12 C6.627 12 12 17.373 12 24 C12 17.373 17.373 12 24 12 C17.373 12 12 6.627 12 0 Z" fill="#ff9e79"/>
                </svg>
            `;
            pill.appendChild(starWrap);
        }

        pill.setAttribute('href', '/index.html');
        pill.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('breadcrumbTrail');
            pill.classList.add('is-wave-loading');
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 450);
        });
    });
});

// 4. UNIVERSAL BREADCRUMB LIFECYCLE & HOME ROUTING
(function initBreadcrumbLifecycle() {
    try {
        const path = window.location.pathname.toLowerCase();
        const isRootIndex = path === '' || path === '/' || (path.endsWith('/index.html') && !path.includes('/study/') && !path.includes('/nutrition/'));
        const isStudyIndex = path.endsWith('/study') || path.endsWith('/study/') || path.endsWith('/study/index.html');
        const isNutritionIndex = path.endsWith('/nutrition') || path.endsWith('/nutrition/') || path.endsWith('/nutrition/index.html');

        if (isRootIndex || isStudyIndex) {
            sessionStorage.removeItem('breadcrumbTrail');
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
                    sessionStorage.removeItem('breadcrumbTrail');
                    window.location.href = '/index.html';
                    return;
                }
            }

            if (href === '/index.html' || href === '/' || href === '/study/index.html' || href === '/study/') {
                sessionStorage.removeItem('breadcrumbTrail');
                if (href === '/study/index.html' || href === '/study/') {
                    window.location.href = '/index.html';
                }
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
