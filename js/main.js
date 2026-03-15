/**
 * BiSKY Team — Main Controller
 * Preloader, smooth scroll, general utilities
 */
(function () {
  const THEME_KEY = 'bisky-theme';
  const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
  };

  function getStoredTheme() {
    try {
      const storedTheme = localStorage.getItem(THEME_KEY);
      if (storedTheme === THEMES.DARK || storedTheme === THEMES.LIGHT) {
        return storedTheme;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  function getPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) return storedTheme;

    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? THEMES.DARK : THEMES.LIGHT;
  }

  function getCurrentTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return currentTheme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // Ignore storage errors (private mode, disabled storage, etc.)
    }
  }

  // Apply as soon as possible to minimize flashes between themes
  applyTheme(getPreferredTheme());

  /* —— Preloader —— */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 800);
      }, 400);
    });
  }

  /* —— Smooth anchor scroll —— */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').slice(1);
        if (!targetId) return;
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* —— External link target —— */
  function initExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* —— Keyboard navigation for sponsor overlay —— */
  function initKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('sponsor-overlay');
        if (overlay && overlay.classList.contains('active')) {
          overlay.classList.remove('active');
        }
      }
    });
  }

  /* â€”â€” Theme toggle â€”â€” */
  function initThemeToggle() {
    const navLinks = document.querySelector('#navbar .navbar__links');
    if (!navLinks || document.getElementById('theme-toggle')) return;

    const item = document.createElement('li');
    item.className = 'navbar__item navbar__item--theme';

    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'theme-toggle';
    button.className = 'theme-toggle';

    function renderToggle() {
      const isDark = getCurrentTheme() === THEMES.DARK;
      const nextModeLabel = isDark ? 'modo claro' : 'modo oscuro';
      button.textContent = isDark ? 'Claro' : 'Oscuro';
      button.setAttribute('aria-label', `Cambiar a ${nextModeLabel}`);
      button.setAttribute('title', `Cambiar a ${nextModeLabel}`);
    }

    button.addEventListener('click', () => {
      const nextTheme = getCurrentTheme() === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      applyTheme(nextTheme);
      saveTheme(nextTheme);
      renderToggle();
    });

    renderToggle();
    item.appendChild(button);
    navLinks.appendChild(item);
  }

  /* —— Init —— */
  initPreloader();
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initExternalLinks();
    initKeyboard();
    initThemeToggle();
  });

})();
