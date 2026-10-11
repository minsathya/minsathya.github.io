/* ==========================================================================
   MINSATHYA - UNIVERSAL THEME, BRANDMARK & NAVIGATION ENGINE
   ========================================================================== */

// 1. GLOBAL SYSTEM THEME, BRANDMARK & ENTRANCE ANIMATION STYLES
(function injectGlobalStyles() {
    const style = document.createElement('style');
    style.id = 'global-site-theme-rules';
    style.textContent = `
        /* Root CSS Variables - Dark Mode Default (#0b0b0b) */
        :root {
            --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
            --ease-smooth: cubic-bezier(0.25, 1, 0.5, 1);
            --bg-color: #0b0b0b;
            --text-main: #ffffff;
            --text-muted: #737373;
            --panel-bg: #121212;
            --panel-border: #222222;
            --panel-border-hover: rgba(255, 255, 255, 0.11);
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
            --panel-border-hover: rgba(0, 0, 0, 0.10) !important;
            --row-divider: #f2f2f7 !important;
            --row-hover: rgba(0, 0, 0, 0.02) !important;
            --shadow-ambient: none !important;
            --shadow-lift: none !important;
        }

        html, body, button, input, textarea, select, span, a, div, li, td, p, label {
            font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }

        body {
            font-size: 17px !important;
            background-color: var(--bg-color) !important;
            color: var(--text-main) !important;
            transition: background-color 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Headings & Brand: little bold (500) */
        h1, h2, h3, h4, h5, h6, 
        .panel-title, 
        .section-title, 
        .wide-panel-title, 
        .subject-title, 
        .page-title, 
        .status-title, 
        .section-heading, 
        .article-title,
        .subject-category-label {
            font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif !important;
            font-weight: 500 !important;
        }

        strong, b {
            font-weight: 500 !important;
        }

        .brand-pill,
        .brand-letter {
            font-weight: 500 !important;
        }

        /* General text size 17px across site */
        p, .prose-text, .prose-text p,
        .topics-column-grid li a,
        .topics-vertical-stack a,
        .subject-topic-link .topic-title,
        .note-p, .note-list li, .note-sub-row,
        .info-callout-row,
        table td {
            font-size: 17px !important;
        }

        /* Homepage panel content font size 16px */
        .document-list a {
            font-size: 16px !important;
        }

        /* Footer font size: do not increase */
        footer, .footer-links-row a, .footer-links-row a .nav-text {
            font-size: 13.5px !important;
            font-weight: 400 !important;
        }
        .copyright-tag {
            font-size: 12px !important;
            font-weight: 400 !important;
        }

        /* NO BREADCRUMBS ON SITE */
        .breadcrumb-nav,
        .breadcrumbs,
        #dynamicBreadcrumbNav {
            display: none !important;
        }

        /* -------------------------------------------------------------
           STANDARDIZED PAGE WIDTH & CONTAINER ALIGNMENT (MATCHES HOMEPAGE)
           ------------------------------------------------------------- */
        body:not(.nutrition-workspace) {
            max-width: 1240px !important;
            margin: 0 auto !important;
            padding: 40px 24px 36px 24px !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        /* -------------------------------------------------------------
           TOP NAVIGATION: 's' BRANDMARK & ROUND TWINKLING STAR
           ------------------------------------------------------------- */
        .top-nav-bar {
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            margin-bottom: 28px !important;
            position: relative;
            z-index: 10;
        }

        .brand-pill {
            position: relative;
            display: inline-flex !important;
            align-items: baseline !important;
            justify-content: flex-start !important;
            height: auto;
            padding: 0 4px !important;
            background-color: transparent !important;
            border: none !important;
            text-decoration: none !important;
            font-size: 42px !important;
            font-weight: 500 !important;
            letter-spacing: -1.2px !important;
            line-height: 1 !important;
            box-shadow: none !important;
            touch-action: manipulation;
            cursor: pointer;
            user-select: none;
            transform: translateZ(0);
            transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .brand-pill:hover,
        .brand-pill:active {
            transform: translate3d(0, -3px, 0) scale3d(1.02, 1.02, 1) !important;
        }

        .brand-letter {
            color: var(--text-main) !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            transition: color 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Round Twinkling Star: Round circle scaling small and large like the night sky stars */
        .brand-star {
            display: inline-block !important;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background-color: #ff9e79 !important;
            box-shadow: 0 0 6px rgba(255, 158, 121, 0.75), 0 0 12px rgba(255, 158, 121, 0.4) !important;
            margin-left: 2px !important;
            margin-bottom: 0 !important;
            vertical-align: -1px !important;
            flex-shrink: 0 !important;
            line-height: 1 !important;
            transform-origin: center center !important;
            animation: roundStarPulse 3s infinite ease-in-out alternate !important;
        }

        @keyframes roundStarPulse {
            0% {
                transform: scale(0.4) translateZ(0);
                opacity: 0.5;
                box-shadow: 0 0 3px rgba(255, 158, 121, 0.4);
            }
            50% {
                transform: scale(1.0) translateZ(0);
                opacity: 1;
                box-shadow: 0 0 8px rgba(255, 158, 121, 0.85), 0 0 14px rgba(255, 158, 121, 0.45);
            }
            100% {
                transform: scale(0.4) translateZ(0);
                opacity: 0.5;
                box-shadow: 0 0 3px rgba(255, 158, 121, 0.4);
            }
        }

        /* Hide any outdated dot or svg wrapper elements */
        .brand-dot,
        .brand-star-wrap {
            display: none !important;
        }

        /* -------------------------------------------------------------
           PAGE HEADER ROW & UNIFIED BACK BUTTON
           ------------------------------------------------------------- */
        .page-header-row,
        .subjects-header-row {
            display: flex !important;
            align-items: center !important;
            gap: 14px !important;
            width: 100% !important;
            max-width: 1200px !important;
            margin: 0 auto 24px auto !important;
        }

        .back-icon-btn {
            background: transparent !important;
            border: none !important;
            outline: none !important;
            width: 38px !important;
            height: 38px !important;
            border-radius: 50% !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            color: var(--text-main) !important;
            padding: 0 !important;
            flex-shrink: 0 !important;
            touch-action: manipulation;
            transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .back-icon-btn:hover {
            background-color: rgba(255, 255, 255, 0.08) !important;
            transform: translate3d(-2px, 0, 0) !important;
        }

        body.light-mode .back-icon-btn:hover {
            background-color: rgba(0, 0, 0, 0.05) !important;
        }

        .back-icon-btn svg {
            width: 22px !important;
            height: 22px !important;
            stroke: currentColor !important;
            stroke-width: 2.4 !important;
            stroke-linecap: round !important;
            stroke-linejoin: round !important;
            fill: none !important;
        }

        .page-title {
            font-size: 28px !important;
            font-weight: 500 !important;
            letter-spacing: -0.6px !important;
            color: var(--text-main) !important;
            line-height: 1.2 !important;
        }

        /* -------------------------------------------------------------
           MASTER ENTRANCE ANIMATION (GPU ACCELERATED & PREMIUM FLUID)
           Glides slowly and smoothly upward from the background
           ------------------------------------------------------------- */
        @keyframes masterEntrance {
            from {
                opacity: 0;
                transform: translate3d(0, 26px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }

        /* Animation runner class */
        .master-entrance-run {
            animation: masterEntrance 0.52s var(--ease-premium) both !important;
            will-change: transform, opacity;
        }

        .top-nav-bar, 
        main, 
        footer,
        .page-header-row,
        .subjects-header-row,
        .workspace-animate-frame,
        .contents-container,
        .date-topics-capsule,
        .topics-feed,
        #subjectsListContainer,
        #ncertListContainer,
        #csatListContainer,
        .subjects-main-layout,
        .subjects-split-layout {
            position: relative;
            z-index: 1;
            opacity: 1;
            will-change: transform, opacity;
            animation: masterEntrance 0.52s var(--ease-premium) both !important;
        }

        .top-nav-bar { 
            animation-delay: 0.02s !important; 
        }
        main, 
        .page-header-row, 
        .subjects-header-row, 
        .workspace-animate-frame, 
        .contents-container, 
        .date-topics-capsule, 
        .topics-feed, 
        #subjectsListContainer,
        #ncertListContainer,
        #csatListContainer,
        .subjects-main-layout,
        .subjects-split-layout { 
            animation-delay: 0.06s !important; 
        }
        footer { 
            animation-delay: 0.12s !important; 
        }

        /* -------------------------------------------------------------
           UNIVERSAL FLAT DESIGN: ZERO PANEL SHADOWS SITE-WIDE
           ------------------------------------------------------------- */
        .capsule-panel,
        .subject-accordion-card,
        .card,
        .wide-capsule,
        .subjects-detail-panel,
        .article-card,
        .date-topics-capsule,
        .empty-placeholder-card,
        .info-callout,
        .myspace-card,
        .macro-card,
        .day-switcher-capsule {
            box-shadow: none !important;
            transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), 
                        border-color 0.35s cubic-bezier(0.25, 1, 0.5, 1),
                        background-color 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .capsule-panel:hover,
        .capsule-panel:active,
        .capsule-panel:focus-within,
        .subject-accordion-card:hover,
        .subject-accordion-card:active,
        .subject-accordion-card:focus-within,
        .card:hover,
        .card:active,
        .wide-capsule:hover,
        .wide-capsule:active,
        .date-topics-capsule:hover,
        .date-topics-capsule:active,
        .article-card:hover,
        .article-card:active {
            box-shadow: none !important;
        }

        /* -------------------------------------------------------------
           SUBTLE & GENTLE PANEL HOVER ZOOM (LAPTOP / DESKTOP)
           ------------------------------------------------------------- */
        @media (hover: hover) and (pointer: fine) {
            .subject-accordion-card:not(.is-open):hover,
            .wide-capsule:hover,
            .card:hover,
            .capsule-panel:hover,
            .subjects-detail-panel:hover,
            .date-topics-capsule:hover {
                transform: scale3d(1.008, 1.008, 1) translate3d(0, -2px, 0) !important;
                border-color: var(--panel-border-hover) !important;
            }

            .subject-accordion-card.is-open,
            .subject-accordion-card.is-open:hover,
            .subject-accordion-card:focus-within {
                transform: none !important;
            }
        }

        /* -------------------------------------------------------------
           TOUCH DEVICES (IPAD / PHONE): RUBBER PRESS & TACTILE RESPONSE
           ------------------------------------------------------------- */
        @media (hover: none), (pointer: coarse) {
            /* Pill rubber press: goes down on tap and springs back on release */
            .subject-nav-item:active {
                transform: scale3d(0.92, 0.92, 1) !important;
                transition: transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
            }

            .capsule-panel:active,
            .wide-capsule:active,
            .date-topics-capsule:active {
                transform: scale3d(0.985, 0.985, 1) !important;
                transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
            }

            .capsule-panel:hover,
            .subject-accordion-card:hover,
            .card:hover,
            .wide-capsule:hover,
            .date-topics-capsule:hover,
            .article-card:hover {
                border-color: var(--panel-border) !important;
            }
        }

        /* -------------------------------------------------------------
           CLICKABLE WORDS ZOOM TOWARDS US STRAIGHT ACROSS SITE
           Subtle, gentle forward zoom (center-origin), no drift left or right
           ------------------------------------------------------------- */
        .nav-text,
        .site-name,
        .sortable,
        .subject-nav-name,
        .topics-column-grid a,
        .topics-vertical-stack a,
        .ncert-links a,
        .document-list a,
        .matrix-canvas a,
        .footer-links-row a,
        a:not(.brand-pill):not(.back-icon-btn):not(.subject-topic-link) {
            cursor: pointer !important;
            display: inline-block !important;
            transform-origin: center center !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
            transition: transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.28s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .subject-nav-name {
            transform-origin: left center !important;
        }

        /* SUBJECT / NCERT / CSAT TOPIC LINKS: FLEX ROW SO BULLET & TITLE STAY ON SAME LINE */
        .subject-topic-link {
            display: inline-flex !important;
            align-items: baseline !important;
            gap: 10px !important;
            max-width: 100% !important;
            width: fit-content !important;
            cursor: pointer !important;
            transform-origin: left center !important;
            transition: transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.28s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .subject-topic-link .topic-bullet {
            flex-shrink: 0 !important;
            display: inline-block !important;
            line-height: 1.4 !important;
        }

        .subject-topic-link .topic-title {
            display: inline !important;
            line-height: 1.4 !important;
            word-break: normal !important;
        }

        /* Subtle Forward Zoom Animation on Hover */
        .footer-links-row a:hover .nav-text,
        .matrix-canvas a:hover,
        .matrix-canvas a:hover .nav-text,
        .document-list a:hover,
        .document-list a:hover .nav-text,
        .topics-column-grid a:hover,
        .topics-column-grid a:hover .nav-text,
        .topics-vertical-stack a:hover,
        .topics-vertical-stack a:hover .nav-text,
        .ncert-links a:hover,
        .site-name:hover,
        .sortable:hover,
        .subject-nav-item:hover .subject-nav-name,
        a:not(.brand-pill):not(.back-icon-btn):not(.subject-topic-link):hover {
            transform: scale3d(1.028, 1.028, 1) !important;
        }

        /* Hover zoom on entire topic link zooms BOTH the bullet dot and the word together */
        @media (hover: hover) and (pointer: fine) {
            .subject-topic-link:hover {
                transform: scale3d(1.028, 1.028, 1) !important;
            }
            .subject-topic-link:hover .topic-bullet,
            .subject-topic-link:hover .topic-title {
                color: var(--text-main) !important;
            }
        }

        /* Prevent double scaling when both parent anchor and child span exist */
        a:has(> .nav-text):hover {
            transform: none !important;
        }
        a:hover > .nav-text {
            transform: scale3d(1.028, 1.028, 1) !important;
        }
            transform: scale3d(1.028, 1.028, 1) !important;
        }

        @media (max-width: 700px) {
            body {
                padding: 28px 18px 24px 18px !important;
            }
            .brand-pill {
                font-size: 36px !important;
            }
            .brand-star {
                width: 7px !important;
                height: 7px !important;
            }
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

// Ensure Google Sans Flex Regular (wght@400) is always dynamically loaded in <head>
(function ensureGoogleSansFlex() {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector('link[href*="Google+Sans+Flex"]');
    if (!existing) {
        const preconn1 = document.createElement('link');
        preconn1.rel = 'preconnect';
        preconn1.href = 'https://fonts.googleapis.com';
        document.head.appendChild(preconn1);

        const preconn2 = document.createElement('link');
        preconn2.rel = 'preconnect';
        preconn2.href = 'https://fonts.gstatic.com';
        preconn2.crossOrigin = 'anonymous';
        document.head.appendChild(preconn2);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600&display=swap';
        document.head.appendChild(link);
    }
})();

function wrapClickableWords() {
    const clickableLinks = document.querySelectorAll(
        '.topics-column-grid a, .topics-vertical-stack a, .ncert-links a, .document-list a, .footer-links-row a, .article-card a, .topics-feed a, .day-switcher-capsule a'
    );
    clickableLinks.forEach(link => {
        if (!link.querySelector('.nav-text') && !link.querySelector('.brand-letter') && link.textContent.trim().length > 0) {
            const span = document.createElement('span');
            span.className = 'nav-text';
            while (link.firstChild) {
                span.appendChild(link.firstChild);
            }
            link.appendChild(span);
        }
    });
}

// 3. LOGO ENHANCEMENT & NAVIGATION
document.addEventListener('DOMContentLoaded', () => {
    wrapClickableWords();

    // Ensure all brand logos use the round star
    const brandPills = document.querySelectorAll('.brand-pill, .logo');
    brandPills.forEach(pill => {
        // Clean out any old dot or svg wrapper
        const oldDot = pill.querySelector('.brand-dot');
        if (oldDot) oldDot.remove();
        const oldSvg = pill.querySelector('.brand-star-wrap');
        if (oldSvg) oldSvg.remove();

        if (!pill.querySelector('.brand-star')) {
            const roundStar = document.createElement('span');
            roundStar.className = 'brand-star';
            roundStar.setAttribute('aria-hidden', 'true');
            pill.appendChild(roundStar);
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

// 5. UNIVERSAL 120HZ BUTTERY SMOOTH MASTER ENTRANCE ON NAVIGATION & RETURN
function triggerMasterEntrance(element) {
    if (!element) return;
    element.classList.remove('master-entrance-run');
    void element.offsetWidth;
    element.classList.add('master-entrance-run');
}
window.triggerMasterEntrance = triggerMasterEntrance;

function executeMasterEntrance() {
    const targets = document.querySelectorAll(
        '.top-nav-bar, .page-header-row, .subjects-header-row, main, .matrix-canvas, .contents-container, #subjectsListContainer, .subjects-main-layout, .subjects-split-layout, .subjects-detail-panel, .workspace-animate-frame, .date-topics-capsule, .topics-feed, footer'
    );
    targets.forEach(el => {
        triggerMasterEntrance(el);
    });
}
window.executeMasterEntrance = executeMasterEntrance;

window.addEventListener('pageshow', (event) => {
    wrapClickableWords();
    // Replay entrance on BFCache restore or backward/forward navigation
    if (event.persisted || (window.performance && window.performance.navigation && window.performance.navigation.type === 2) || (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType('navigation')[0]?.type === 'back_forward')) {
        executeMasterEntrance();
    }
    document.querySelectorAll('.is-wave-loading, .is-panel-lifted, .is-card-lifted').forEach(el => {
        el.classList.remove('is-wave-loading', 'is-panel-lifted', 'is-card-lifted');
    });
});

