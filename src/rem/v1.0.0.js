!(window => {
  const rate = 10
  const maxWidth = 640

  const { document } = window
  const head = document.getElementsByTagName("html")[0]

  const reset = () => {
    const { innerWidth } = window
    const width = Math.min(innerWidth, maxWidth)
    const size = width / rate
    head.style.cssText +=
      `max-width: ${maxWidth}px !important;` +
      `font-size: ${size}px !important;` +
      `margin: 0 auto !important;`
  }

  window.addEventListener('resize', () => {
    reset()
  }, false)

  window.addEventListener('pageshow', e => {
    if (e.persisted) {
      reset()
    }
  }, false)

  reset()
})(window);