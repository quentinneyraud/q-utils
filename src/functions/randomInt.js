/**
 * Return a random integer number between min and max
 *
 * @param {Number} min - minimum number returned
 * @param {Number} max - maximum number returned
 *
 * @returns {Number} Random integer number between min and max
 */
export default (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}
