/* ==========================================================
   main.js - Automated System Brain & Interface Architecture
   ========================================================== */

(function() {
    // 1. DYNAMIC AUTO-ADAPTING JOURNEY TRAIL ALGORITHM
    const fullTitle = document.title || '';
    let currentName = fullTitle.split(' - ')[0].split(' – ')[0].trim();
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const isSubfolder = path.includes('/Footer/');

    if (filename === 'index.html' || currentName.toLowerCase() === 'sathya.') {
        currentName = 'Home';
    }

    let trail = JSON.parse(sessionStorage.getItem('breadcrumbTrail')) || [];

    if (currentName === 'Home') {
        trail = [{ name: 'Home', url: isSubfolder ? '../index.html' : 'index.html' }];
    } else {
        if (trail.length === 0 || trail[0].name !== 'Home') {
            trail.unshift({ name: 'Home', url: isSubfolder ? '../index.html' : 'index.html' });
        }
        const existingIndex = trail.findIndex(item => item.name === currentName);
        if (existingIndex !== -1) {
            trail = trail.slice(0, existingIndex + 1);
        } else {
            trail.push({ name: currentName, url: window.location.href });
        }
    }
    sessionStorage.setItem('breadcrumbTrail', JSON.stringify(trail));

    // 2. BOILERPLATE ASSEMBLY STAGE (AUTO-BUILDS HEADERS & FOOTERS)
    window.addEventListener('DOMContentLoaded', () => {
        const rootPath = isSubfolder ? '../' : '';

        // A. Inject Unified Layout Header Structure
        const headerContainer = document.getElementById('masterHeader');
        if (headerContainer) {
            headerContainer.innerHTML = `
                <div class="header-inner-view" id="headerMainView">
                    <a href="${rootPath}index.html" class="logo">sathya.</a>
                    <div class="header-right-cluster">
                        <div class="theme-toggle" id="themeToggleBtn" aria-label="Toggle visual palette theme">
                            <svg class="sun-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>
                            <svg class="moon-icon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                        </div>
                        <button class="ctrl-btn" id="openSearchBtn" aria-label="Open Workspace Search">
                            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>
                </div>
                <div class="header-inner-view" id="headerSearchView">
                    <svg class="search-static-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" class="search-core-input" id="searchCoreInput" placeholder="Search..." autocomplete="off">
                    <div class="search-control-cluster">
                        <button class="ctrl-btn clear-text-btn" id="clearSearchBtn" aria-label="Clear typed text">
                            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <button class="ctrl-btn close-search-btn" id="closeSearchBtn" aria-label="Minimize search pill">
                            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                    </div>
                </div>
            `;
        }

        // B. Inject Unified Grounded Footer Structure
        const footerContainer = document.querySelector('footer');
        if (footerContainer) {
            const footerPath = isSubfolder ? '' : 'Footer/';
            footerContainer.innerHTML = `
                <div class="footer-links-row">
                    <a href="${rootPath}${footerPath}about.html">About</a>
                    <a href="${rootPath}${footerPath}contact.html">Contact</a>
                    <a href="${rootPath}${footerPath}privacy.html">Privacy Policy</a>
                    <a href="${rootPath}${footerPath}terms.html">Terms & Conditions</a>
                    <a href="${rootPath}${footerPath}disclaimer.html">Disclaimer</a>
                </div>
                <div class="copyright-tag">&copy; 2026 Sathya. All rights reserved.</div>
            `;
        }

        // C. Render Dynamic Safe Trail Breadcrumbs Elements
        const breadcrumbContainer = document.querySelector('.breadcrumbs, .breadcrumb-nav');
        if (breadcrumbContainer) {
            breadcrumbContainer.innerHTML = '';
            const isContentStyle = breadcrumbContainer.classList.contains('breadcrumb-nav');
            trail.forEach((item, index) => {
                if (index === trail.length - 1) {
                    const span = document.createElement('span');
                    span.className = isContentStyle ? 'breadcrumb-current' : 'current';
                    span.textContent = item.name;
                    breadcrumbContainer.appendChild(span);
                } else {
                    const a = document.createElement('a');
                    a.href = item.url;
                    const spanText = document.createElement('span');
                    spanText.className = 'nav-text';
                    spanText.textContent = item.name;
                    a.appendChild(spanText);
                    breadcrumbContainer.appendChild(a);

                    const sep = document.createElement('span');
                    sep.className = isContentStyle ? 'breadcrumb-separator' : 'separator';
                    sep.textContent = ' / ';
                    breadcrumbContainer.appendChild(sep);
                }
            });
        }

        // 3. CORE PLATFORM LOGIC & HARDWARE MATRIX INTERPOLATION
        const bodyElement = document.body;
        const toggleBtn = document.getElementById('themeToggleBtn');
        const systemLightQuery = window.matchMedia('(prefers-color-scheme: light)');

        function applyTargetPalette() {
            const sessionMode = sessionStorage.getItem('dashboard-theme');
            if (sessionMode === 'light' || (!sessionMode && systemLightQuery.matches)) {
                bodyElement.classList.add('light-mode');
            } else {
                bodyElement.classList.remove('light-mode');
            }
        }
        applyTargetPalette();

        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                bodyElement.classList.toggle('light-mode');
                sessionStorage.setItem('dashboard-theme', bodyElement.classList.contains('light-mode') ? 'light' : 'dark');
            });
        }

        // iPad Stabilized Search Bar Control Framework
        const masterHeader = document.getElementById('masterHeader');
        const openSearchBtn = document.getElementById('openSearchBtn');
        const closeSearchBtn = document.getElementById('closeSearchBtn');
        const clearSearchBtn = document.getElementById('clearSearchBtn');
        const searchCoreInput = document.getElementById('searchCoreInput');

        if (openSearchBtn && masterHeader) {
            openSearchBtn.addEventListener('click', () => {
                masterHeader.classList.remove('state-main');
                masterHeader.classList.add('state-search');
                if (searchCoreInput) searchCoreInput.focus({ preventScroll: true });
            });
            clearSearchBtn.addEventListener('click', () => { if (searchCoreInput) { searchCoreInput.value = ""; searchCoreInput.focus(); } });
            closeSearchBtn.addEventListener('click', () => { masterHeader.classList.remove('state-search'); masterHeader.classList.add('state-main'); });
        }

        // 4. ANIMATION ENGINE HOOKS INJECTION MATRIX (TIER B PORTAL JUMPS)
        const targets = document.querySelectorAll('a, .matrix-canvas a, .document-list a, .topics-column-grid a, .view-more-link, .footer-links-row a, .breadcrumbs a, .breadcrumb-nav a');
        targets.forEach(link => {
            const destination = link.getAttribute('href');
            if (!destination || destination === '#' || destination.startsWith('#')) return;

            if (!link.querySelector('.nav-text')) {
                const wrapper = document.createElement('span');
                wrapper.className = 'nav-text';
                while (link.firstChild) wrapper.appendChild(link.firstChild);
                link.appendChild(wrapper);
            }

            link.addEventListener('click', function(e) {
                e.preventDefault();
                sessionStorage.setItem('activeUniversalTargetUrl', this.href);
                this.classList.add('is-zooming');
                setTimeout(() => { window.location.href = destination; }, 260);
            });
        });
    });

    // 5. REVERSE BOUNCE ENTRY INTERPOLATION ALGORITHM
    window.addEventListener('pageshow', () => {
        const targets = document.querySelectorAll('a');
        targets.forEach(l => {
            l.classList.remove('is-zooming', 'kinetic-locked-frame');
            const span = l.querySelector('.nav-text');
            if (span) { span.style.transform = ''; span.style.opacity = ''; }
        });

        const savedTargetUrl = sessionStorage.getItem('activeUniversalTargetUrl');
        if (savedTargetUrl) {
            sessionStorage.removeItem('activeUniversalTargetUrl');
            let matchedLink = Array.from(document.querySelectorAll('a')).find(link => link.href === savedTargetUrl);

            if (matchedLink) {
                const targetSpan = matchedLink.querySelector('.nav-text');
                if (targetSpan) {
                    setTimeout(() => {
                        matchedLink.classList.add('kinetic-locked-frame');
                        let startScale = 1.3, endScale = 1.0, startOpacity = 0, duration = 280, startTime = null;
                        let endOpacity = matchedLink.closest('footer') ? 0.4 : 0.8;

                        targetSpan.style.setProperty('transform', `scale(${startScale})`, 'important');
                        targetSpan.style.setProperty('opacity', startOpacity, 'important');

                        function animateReverse(timestamp) {
                            if (!startTime) startTime = timestamp;
                            let elapsed = timestamp - startTime;
                            let progress = Math.min(elapsed / duration, 1);
                            let ease = 1 - Math.pow(1 - progress, 2.2);

                            targetSpan.style.setProperty('transform', `scale(${startScale - (startScale - endScale) * ease})`, 'important');
                            targetSpan.style.setProperty('opacity', startOpacity + (endOpacity - startOpacity) * ease, 'important');

                            if (progress < 1) requestAnimationFrame(animateReverse);
                            else { targetSpan.style.transform = ''; targetSpan.style.opacity = ''; matchedLink.classList.remove('kinetic-locked-frame'); }
                        }
                        requestAnimationFrame(animateReverse);
                    }, 40);
                }
            }
        }
    });
})();
