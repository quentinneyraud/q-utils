/**
 * Return a random float number between min and max
 *
 * @param {Number} min - minimum number returned
 * @param {Number} max - maximum number returned
 *
 * @returns {Number} Random float number between min and max
 */
export default (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(4))
}
