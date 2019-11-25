/**
 * Debounce function
 *
 * @param {Function} callback
 * @param {Number} wait
 */
export default (callback, wait) => {
  let timeout
  return () => {
    window.clearTimeout(timeout)
    timeout = setTimeout(() => callback(), wait)
  }
}
