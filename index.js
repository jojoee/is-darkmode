/**
 * Check if macOS using Dark appearance
 *
 * @returns {Boolean}
 */
function isDarkMode () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Add callback function that's will triggered
 * when appearance is changed to Dark
 *
 * @param {Object} fn function Object
 * @returns {Boolean} returns true if appearance change to "dark"
 */
function onDarkModeChange (fn) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const isDark = e.matches
    fn(isDark)
  })
}

if (typeof module !== 'undefined' &&
  module.exports != null) {
  module.exports = {
    isDarkMode,
    onDarkModeChange
  }
}
