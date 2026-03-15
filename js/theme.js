/**
 * BiSKY Team - Theme Controller
 * Handles dark/light theme, persistence, and navbar toggle.
 */
(function () {
  const STORAGE_KEY = 'bisky-theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  function isValidTheme(theme) {
    return theme === THEME_LIGHT || theme === THEME_DARK;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Ignore storage errors */
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    return THEME_DARK;
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    return isValidTheme(stored) ? stored : getSystemTheme();
  }

  function applyTheme(theme, options) {
    const finalTheme = isValidTheme(theme) ? theme : THEME_DARK;
    const persist = !!(options && options.persist);
    const root = document.documentElement;

    root.setAttribute('data-theme', finalTheme);
    root.style.colorScheme = finalTheme;

    if (persist) {
      setStoredTheme(finalTheme);
    }

    window.dispatchEvent(new CustomEvent('bisky:theme-change', {
      detail: { theme: finalTheme }
    }));
  }

  function getCurrentTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    return isValidTheme(current) ? current : getPreferredTheme();
  }

  function updateToggleButton(button, theme) {
    const nextTheme = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    const label = button.querySelector('.navbar__theme-toggle-label');
    if (label) {
      label.textContent = nextTheme === THEME_LIGHT ? 'Light' : 'Dark';
    }
    button.setAttribute('aria-pressed', theme === THEME_LIGHT ? 'true' : 'false');
    button.setAttribute(
      'aria-label',
      theme === THEME_LIGHT ? 'Cambiar al tema oscuro' : 'Cambiar al tema claro'
    );
    button.setAttribute('title', button.getAttribute('aria-label'));
  }

  function initThemeToggle() {
    const links = document.querySelector('.navbar__links');
    if (!links || document.getElementById('theme-toggle')) return;

    const item = document.createElement('li');
    item.className = 'navbar__item navbar__item--theme';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'navbar__theme-toggle';
    button.id = 'theme-toggle';
    button.innerHTML = '<span class="navbar__theme-toggle-label"></span>';

    item.appendChild(button);
    links.appendChild(item);

    updateToggleButton(button, getCurrentTheme());

    button.addEventListener('click', () => {
      const current = getCurrentTheme();
      const next = current === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
      applyTheme(next, { persist: true });
      updateToggleButton(button, next);
    });

    window.addEventListener('bisky:theme-change', (event) => {
      const theme = (event.detail && event.detail.theme) || getCurrentTheme();
      updateToggleButton(button, theme);
    });
  }

  function initSystemThemeSync() {
    if (!window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: light)');

    const onSystemThemeChange = (event) => {
      const stored = getStoredTheme();
      if (isValidTheme(stored)) return;
      applyTheme(event.matches ? THEME_LIGHT : THEME_DARK);
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onSystemThemeChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(onSystemThemeChange);
    }
  }

  applyTheme(getPreferredTheme());
  initSystemThemeSync();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
