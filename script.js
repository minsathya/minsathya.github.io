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
            --text-sub: #a0a0a5;
            --panel-bg: #121212;
            --panel-border: #222222;
            --panel-border-hover: rgba(255, 255, 255, 0.11);
            --row-divider: #1c1c1c;
            --row-hover: rgba(255, 255, 255, 0.02);
            --shadow-base: 0 4px 30px rgba(0, 0, 0, 0.4);
            --shadow-hover: 0 25px 60px rgba(0, 0, 0, 0.8);
            --panel-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
            --panel-shadow-hover: 0 25px 60px rgba(0, 0, 0, 0.8);
        }

        /* Root CSS Variables - Light Mode (#f5f5f7, Panel #ffffff) */
        html.light-mode, 
        body.light-mode {
            --bg-color: #f5f5f7 !important;
            --text-main: #1d1d1f !important;
            --text-muted: #8e8e93 !important;
            --text-sub: #6e6e73 !important;
            --panel-bg: #ffffff !important;
            --panel-border: #e2e2e7 !important;
            --panel-border-hover: rgba(0, 0, 0, 0.10) !important;
            --row-divider: #f2f2f7 !important;
            --row-hover: rgba(0, 0, 0, 0.02) !important;
            --shadow-base: 0 4px 20px rgba(0, 0, 0, 0.02) !important;
            --shadow-hover: 0 20px 45px rgba(0, 0, 0, 0.08) !important;
            --panel-shadow: 0 4px 20px rgba(0, 0, 0, 0.02) !important;
            --panel-shadow-hover: 0 20px 45px rgba(0, 0, 0, 0.08) !important;
        }

        html {
            overflow-y: auto;
        }

        /* Universal sleek scrollbars matching theme background with zero edge strip */
        html,
        body {
            background-color: var(--bg-color) !important;
            transition: none !important;
            width: 100% !important;
            max-width: 100% !important;
        }

        html {
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.2) #0b0b0b;
        }
        html.light-mode,
        html.light-mode body,
        body.light-mode {
            --bg-color: #f5f5f7 !important;
            background-color: #f5f5f7 !important;
            color-scheme: light !important;
            scrollbar-color: rgba(0, 0, 0, 0.22) #f5f5f7 !important;
        }
        html:not(.light-mode),
        html:not(.light-mode) body,
        body:not(.light-mode) {
            --bg-color: #0b0b0b !important;
            background-color: #0b0b0b !important;
            color-scheme: dark !important;
        }
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background-color: #0b0b0b !important;
        }
        html.light-mode ::-webkit-scrollbar-track,
        html.light-mode body ::-webkit-scrollbar-track,
        body.light-mode ::-webkit-scrollbar-track {
            background-color: #f5f5f7 !important;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2) !important;
            border-radius: 4px;
        }
        html.light-mode ::-webkit-scrollbar-thumb,
        html.light-mode body ::-webkit-scrollbar-thumb,
        body.light-mode ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.22) !important;
        }

        html, body, button, input, textarea, select, span, a, div, li, td, p, label {
            font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }

        body {
            font-size: 17px !important;
            background-color: var(--bg-color) !important;
            color: var(--text-main) !important;
            transition: none !important;
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
        @media (max-width: 700px) {
            .footer-links-row {
                display: flex !important;
                flex-wrap: nowrap !important;
                justify-content: flex-start !important;
                align-items: center !important;
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch !important;
                width: 100% !important;
                max-width: 100% !important;
                padding: 6px 16px !important;
                gap: 24px !important;
                scrollbar-width: none !important;
                box-sizing: border-box !important;
            }
            .footer-links-row::-webkit-scrollbar {
                display: none !important;
            }
            .footer-links-row a {
                white-space: nowrap !important;
                flex-shrink: 0 !important;
            }
        }
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
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 40px 24px 36px 24px !important;
            box-sizing: border-box !important;
            background-color: var(--bg-color) !important;
        }

        .page-wrapper {
            max-width: 1240px !important;
            margin: 0 auto !important;
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
            justify-content: center !important;
            text-align: center !important;
            margin-bottom: 28px !important;
            position: relative;
            z-index: 10;
        }

        .brand-pill {
            position: relative;
            display: inline-flex !important;
            align-items: baseline !important;
            justify-content: center !important;
            height: auto;
            padding: 0 4px !important;
            background-color: transparent !important;
            border: none !important;
            text-decoration: none !important;
            font-size: 34px !important;
            font-weight: 500 !important;
            letter-spacing: -0.8px !important;
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
            gap: 12px !important;
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto 24px auto !important;
            position: relative;
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
           Calm & gentle: translate3d(0, 10px, 0) -> (0,0,0)
           0.6s cubic-bezier(0.16, 1, 0.3, 1) with zero jumping
           ------------------------------------------------------------- */
        @keyframes masterEntrance {
            0% {
                opacity: 0;
                transform: translate3d(0, 10px, 0);
            }
            100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }

        /* Animation runner class */
        .master-entrance-run {
            animation: masterEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
            will-change: transform, opacity;
        }

        .top-nav-bar {
            animation: masterEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        main, 
        .contents-container,
        .date-topics-capsule,
        .workspace-animate-frame,
        .subjects-main-layout,
        .subjects-split-layout { 
            animation: masterEntrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }

        .bento-card,
        .capsule-panel,
        .wide-capsule,
        .card:not(:has(table)):not(:has(.table-wrap)),
        .subjects-detail-panel,
        .topics-feed {
            animation: masterEntrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.19s both;
        }

        footer { 
            animation: masterEntrance 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.26s both;
        }

        /* -------------------------------------------------------------
           PANEL SETUP (PANELS DO NOT ZOOM UP - ONLY WORDS ZOOM)
           ------------------------------------------------------------- */
        .bento-card,
        .panel-card,
        .capsule-panel,
        .subjects-detail-panel,
        .subject-accordion-card,
        .wide-capsule,
        .empty-placeholder-card,
        .info-callout,
        .myspace-card,
        .card:not(:has(table)):not(:has(.table-wrap)):not(.article-card) {
            box-shadow: var(--shadow-base, var(--panel-shadow));
            border: 1px solid var(--panel-border);
            user-select: none;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transition: box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1), 
                        border-color 0.4s ease, 
                        background-color 0.4s ease;
        }

        /* UPSC Detail Panel: Uniform full length for all */
        .subjects-detail-panel {
            flex: 1 !important;
            min-width: 0 !important;
            width: 100% !important;
            min-height: 560px;
            align-self: flex-start !important;
        }

        @media (max-width: 860px) {
            .subjects-detail-panel {
                min-height: 440px !important;
            }
        }

        /* Panel Outer Frames: Stationary (NO ZOOM / NO LIFT) */
        @media (hover: hover) and (pointer: fine) {
            body:not(.popup-active) .bento-card:hover,
            body:not(.popup-active) .panel-card:hover,
            body:not(.popup-active) .capsule-panel:hover,
            body:not(.popup-active) .subjects-detail-panel:hover,
            body:not(.popup-active) .wide-capsule:not(.is-expanded):hover,
            body:not(.popup-active) .subject-accordion-card:not(.is-open):hover,
            body:not(.popup-active) .card:not(:has(table)):not(:has(.table-wrap)):not(.article-card):hover,
            body:not(.popup-active) .myspace-card:hover {
                transform: none !important;
                box-shadow: var(--shadow-hover, var(--panel-shadow-hover)) !important;
                border-color: var(--panel-border-hover) !important;
            }

            /* Inner Content Layer: Words & content slide up smoothly when hovering the card */
            body:not(.popup-active) .bento-card:hover .card-parallax-content,
            body:not(.popup-active) .panel-card:hover .card-parallax-content,
            body:not(.popup-active) .capsule-panel:hover .card-parallax-content,
            body:not(.popup-active) .subjects-detail-panel:hover .card-parallax-content,
            body:not(.popup-active) .wide-capsule:not(.is-expanded):hover .capsule-header-row {
                transform: translateY(-6px) translateZ(0);
            }
        }

        /* Inner Content resting transform */
        .card-parallax-content {
            transform: translateY(0);
            transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Mobile / Touch: Stationary (NO LIFT / NO ZOOM) */
        @media (hover: none), (pointer: coarse) {
            .bento-card:active,
            .panel-card:active,
            .capsule-panel:active,
            .subjects-detail-panel:active,
            .wide-capsule:not(.is-expanded):active {
                transform: none !important;
            }
        }

        /* Homescreen Panel Pages/Links: 16px font-size, normal weight (not bold) */
        .list-wrapper .list-item,
        .document-list a {
            font-size: 16px !important;
            font-weight: 400 !important;
            color: var(--text-main) !important;
            opacity: 0.85;
            transition: opacity 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                        transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.25s ease !important;
            display: inline-block;
            text-decoration: none !important;
        }

        /* Sibling muting ONLY when hovering a specific link/word (untouched while just over panel) */
        @media (hover: hover) and (pointer: fine) {
            .list-wrapper:has(.list-item:hover) .list-item:not(:hover),
            .document-list:has(a:hover) a:not(:hover) {
                opacity: 0.35 !important;
            }

            .list-wrapper .list-item:hover,
            .document-list a:hover {
                opacity: 1 !important;
                transform: scale(1.04) translateZ(0) !important;
                color: var(--text-main) !important;
            }
        }

        @media (hover: none), (pointer: coarse) {
            .list-wrapper .list-item:active,
            .document-list a:active {
                opacity: 1 !important;
                transform: scale(1.04) translateZ(0) !important;
            }
        }

        /* CALENDAR PANEL, READING PANELS & TABLES MUST REMAIN COMPLETELY FREEZE */
        .card:has(table),
        .card:has(.table-wrap),
        .article-card,
        .topics-feed,
        .date-topics-capsule,
        .article-card:hover,
        .article-card:active,
        .topics-feed:hover,
        .topics-feed:active,
        .date-topics-capsule:hover,
        .date-topics-capsule:active {
            transform: none !important;
        }

        .date-topics-capsule .capsule-date-cluster,
        .date-topics-capsule:hover .capsule-date-cluster {
            transform: none !important;
        }

        /* Outer Wrapper Container to facilitate page scaling during popups */
        .page-wrapper {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            width: 100%;
            transform: none;
            -webkit-transform: none;
            transform-origin: center center;
            box-sizing: border-box;
            will-change: filter, transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transition: filter 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        -webkit-filter 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                        -webkit-transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        body.popup-active {
            background-color: #0b0b0b !important;
        }

        body.light-mode.popup-active {
            background-color: #f5f5f7 !important;
        }

        /* Modal active: Background ONLY blurs with ZERO scaling back or depth shift */
        body.popup-active .page-wrapper {
            transform: none !important;
            -webkit-transform: none !important;
            filter: blur(8px) !important;
            -webkit-filter: blur(8px) !important;
            pointer-events: none;
            user-select: none;
        }

        body.light-mode.popup-active .page-wrapper {
            filter: blur(8px) !important;
            -webkit-filter: blur(8px) !important;
        }

        /* -------------------------------------------------------------
           WORD ZOOM & TAP PHYSICS (MATCHED ACROSS ALL PLATFORMS)
           - Laptop: Hover zooms up (scale 1.028). Tap/Click returns to normal (scale 1).
           - iPad / Phone: Tap zooms up by the exact same amount (scale 1.028).
           - Both bullet dot and word zoom together smoothly.
           ------------------------------------------------------------- */
        .nav-text,
        .site-name,
        .sortable,
        .subject-nav-name,
        .subject-topic-link,
        .meta-pill,
        .read-action-btn,
        .image-action-btn,
        .topic-num-btn,
        .topics-column-grid a,
        .topics-vertical-stack a,
        .ncert-links a,
        .document-list a,
        .matrix-canvas a,
        .bento-container a,
        .list-item,
        .footer-links-row a,
        a:not(.brand-pill):not(.back-icon-btn) {
            cursor: pointer !important;
            display: inline-block !important;
            transform-origin: center center !important;
            backface-visibility: hidden !important;
            -webkit-backface-visibility: hidden !important;
            -webkit-tap-highlight-color: transparent !important;
            transition: transform 0.28s cubic-bezier(0.25, 1, 0.5, 1), 
                        color 0.28s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        .subject-nav-name {
            transform-origin: left center !important;
        }

        .subject-topic-link {
            display: inline-flex !important;
            align-items: baseline !important;
            gap: 10px !important;
            max-width: 100% !important;
            width: fit-content !important;
            transform-origin: left center !important;
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

        /* 1. LAPTOP (Fine pointer with hover): Hover zooms up, click returns to resting scale 1 */
        @media (hover: hover) and (pointer: fine) {
            .footer-links-row a:hover .nav-text,
            .matrix-canvas a:hover,
            .matrix-canvas a:hover .nav-text,
            .bento-container a:hover,
            .bento-container a:hover .nav-text,
            .bento-container .list-item:hover,
            .document-list a:hover,
            .document-list a:hover .nav-text,
            .topics-column-grid a:hover,
            .topics-column-grid a:hover .nav-text,
            .topics-vertical-stack a:hover,
            .topics-vertical-stack a:hover .nav-text,
            .ncert-links a:hover,
            .site-name:hover,
            .sortable:hover,
            .meta-pill:hover,
            .read-action-btn:hover,
            .image-action-btn:hover,
            .topic-num-btn:hover,
            .subject-topic-link:hover,
            .subject-nav-item:hover .subject-nav-name,
            a:not(.brand-pill):not(.back-icon-btn):hover {
                transform: scale3d(1.028, 1.028, 1) !important;
            }

            .subject-topic-link:hover .topic-bullet,
            .subject-topic-link:hover .topic-title {
                color: var(--text-main) !important;
            }

            /* Laptop Active (Click): Returns smoothly to resting position (scale 1) */
            .footer-links-row a:active .nav-text,
            .matrix-canvas a:active,
            .matrix-canvas a:active .nav-text,
            .bento-container a:active,
            .bento-container a:active .nav-text,
            .bento-container .list-item:active,
            .document-list a:active,
            .document-list a:active .nav-text,
            .topics-column-grid a:active,
            .topics-column-grid a:active .nav-text,
            .topics-vertical-stack a:active,
            .topics-vertical-stack a:active .nav-text,
            .ncert-links a:active,
            .site-name:active,
            .sortable:active,
            .meta-pill:active,
            .read-action-btn:active,
            .image-action-btn:active,
            .topic-num-btn:active,
            .subject-topic-link:active,
            .subject-nav-item:active .subject-nav-name,
            .subject-nav-item:active,
            a:not(.brand-pill):not(.back-icon-btn):active {
                transform: scale3d(1, 1, 1) !important;
            }

            /* Prevent nested double scale when parent <a> contains .nav-text */
            a:has(> .nav-text):hover {
                transform: none !important;
            }
            a:has(> .nav-text):active {
                transform: none !important;
            }
            a:hover > .nav-text {
                transform: scale3d(1.028, 1.028, 1) !important;
            }
            a:active > .nav-text {
                transform: scale3d(1, 1, 1) !important;
            }
        }

        /* 2. IPAD & PHONE (Touch coarse-pointer): Tap zooms up by the exact same length as laptop */
        @media (hover: none), (pointer: coarse) {
            .footer-links-row a:active .nav-text,
            .matrix-canvas a:active,
            .matrix-canvas a:active .nav-text,
            .bento-container a:active,
            .bento-container a:active .nav-text,
            .bento-container .list-item:active,
            .document-list a:active,
            .document-list a:active .nav-text,
            .topics-column-grid a:active,
            .topics-column-grid a:active .nav-text,
            .topics-vertical-stack a:active,
            .topics-vertical-stack a:active .nav-text,
            .ncert-links a:active,
            .site-name:active,
            .sortable:active,
            .meta-pill:active,
            .read-action-btn:active,
            .image-action-btn:active,
            .topic-num-btn:active,
            .subject-topic-link:active,
            .subject-nav-item:active .subject-nav-name,
            .subject-nav-item:active,
            a:not(.brand-pill):not(.back-icon-btn):active {
                transform: scale3d(1.028, 1.028, 1) !important;
            }

            a:has(> .nav-text):active {
                transform: none !important;
            }
            a:active > .nav-text {
                transform: scale3d(1.028, 1.028, 1) !important;
            }
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

// Top-of-page scroll restoration on refresh
try {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
} catch(e) {}
window.scrollTo(0, 0);
window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
});
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// 2. UNIVERSAL SYSTEM & USER THEME SYNCHRONIZATION
(function initAutomaticSystemTheme() {
    function applyTheme() {
        try {
            const savedTheme = localStorage.getItem('dashboard-theme') || sessionStorage.getItem('dashboard-theme');
            let isLight;
            if (savedTheme) {
                isLight = (savedTheme === 'light');
            } else {
                isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
            }
            if (isLight) {
                document.documentElement.classList.add('light-mode');
                document.documentElement.style.colorScheme = 'light';
                if (document.body) {
                    document.body.classList.add('light-mode');
                    document.body.style.colorScheme = 'light';
                }
            } else {
                document.documentElement.classList.remove('light-mode');
                document.documentElement.style.colorScheme = 'dark';
                if (document.body) {
                    document.body.classList.remove('light-mode');
                    document.body.style.colorScheme = 'dark';
                }
            }
        } catch(e) {}
    }

    applyTheme();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            const savedTheme = localStorage.getItem('dashboard-theme') || sessionStorage.getItem('dashboard-theme');
            if (!savedTheme) {
                if (e.matches) {
                    document.documentElement.classList.add('light-mode');
                    if (document.body) document.body.classList.add('light-mode');
                } else {
                    document.documentElement.classList.remove('light-mode');
                    if (document.body) document.body.classList.remove('light-mode');
                }
            }
        });
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
        '.topics-column-grid a, .topics-vertical-stack a, .ncert-links a, .document-list a, .footer-links-row a, .article-card a, .topics-feed a, .day-switcher-capsule a, .list-wrapper a, .bento-container a, .bento-card a'
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
    initSiblingMuting();

    const path = window.location.pathname.toLowerCase();
    const isHomePage = path === '/' || path === '/index.html' || path.endsWith('/minsathya.github.io/') || path.endsWith('/minsathya.github.io/index.html') || (path.endsWith('/index.html') && !path.includes('/study/') && !path.includes('/nutrition/') && !path.includes('/footer/'));

    // The brand title 'sathya.' should only ever exist on the homepage
    if (!isHomePage) {
        document.querySelectorAll('.top-nav-bar, #topNavBar, .brand-pill').forEach(el => el.remove());
    } else {
        // Ensure all brand logos use the round star
        const brandPills = document.querySelectorAll('.brand-pill, .logo');
        brandPills.forEach(pill => {
            const oldDot = pill.querySelector('.brand-dot');
            if (oldDot) oldDot.remove();
            const oldSvg = pill.querySelector('.brand-star-wrap');
            if (oldSvg) oldSvg.remove();

            const brandLetter = pill.querySelector('.brand-letter');
            if (brandLetter && brandLetter.textContent.trim() === 's') {
                brandLetter.textContent = 'sathya';
            }

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
    }
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
        '.top-nav-bar, .subjects-header-row, main, footer'
    );
    targets.forEach(el => {
        triggerMasterEntrance(el);
    });
}
window.executeMasterEntrance = executeMasterEntrance;

// Bulletproof JS helper for scoped sibling muting on word hover
function initSiblingMuting() {
    document.querySelectorAll('.list-wrapper, .document-list').forEach(container => {
        const items = container.querySelectorAll('.list-item, a');
        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                items.forEach(sibling => {
                    if (sibling !== item) {
                        sibling.style.opacity = '0.35';
                    } else {
                        sibling.style.opacity = '1';
                        sibling.style.transform = 'scale(1.04)';
                    }
                });
            });
            item.addEventListener('mouseleave', () => {
                items.forEach(sibling => {
                    sibling.style.opacity = '';
                    sibling.style.transform = '';
                });
            });
            item.addEventListener('click', () => {
                items.forEach(sibling => {
                    sibling.style.opacity = '';
                    sibling.style.transform = '';
                });
            });
        });
    });
}
window.initSiblingMuting = initSiblingMuting;

function resetMutedState() {
    document.querySelectorAll('.list-item, .document-list a, .footer-links-row a, .brand-pill, .nav-text, a').forEach(el => {
        el.style.opacity = '';
        el.style.transform = '';
        el.classList.remove('is-wave-loading', 'is-panel-lifted', 'is-card-lifted', 'active');
        if (el.blur) el.blur();
    });
}
window.resetMutedState = resetMutedState;

window.addEventListener('pageshow', (event) => {
    resetMutedState();
    wrapClickableWords();
    initSiblingMuting();
    // Trigger smooth slideup fade animation whenever visiting homescreen or any page
    executeMasterEntrance();
});

// 7. UNIVERSAL POPUP DEPTH CENTERING (SCALES BACK SYMMETRICALLY WITHOUT SHIFTING DOWN)
function syncPopupOrigin() {
    const pageWrapper = document.getElementById('pageWrapper') || document.querySelector('.page-wrapper');
    if (!pageWrapper) return;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const centerY = scrollY + (window.innerHeight / 2);
    pageWrapper.style.transformOrigin = `center ${centerY}px`;
}
window.syncPopupOrigin = syncPopupOrigin;

// Continuously keep origin centered on the user's visible viewport
window.addEventListener('scroll', () => {
    if (!document.body.classList.contains('popup-active')) {
        syncPopupOrigin();
    }
}, { passive: true });

window.addEventListener('resize', () => {
    if (!document.body.classList.contains('popup-active')) {
        syncPopupOrigin();
    }
}, { passive: true });

// Initial sync on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncPopupOrigin);
} else {
    syncPopupOrigin();
}

if (typeof MutationObserver !== 'undefined') {
    const popupObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                const hasPopup = document.body.classList.contains('popup-active');
                if (hasPopup) {
                    syncPopupOrigin();
                }
            }
        });
    });
    popupObserver.observe(document.body, { attributes: true });
}


