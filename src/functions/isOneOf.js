/**
 * Check that the value is one of the values passed in arguments
 *
 * @param {any} value - Value to check
 * @param {Array} possibilities - List of values that the value should be equal
 */
export default (value, possibilities) => {
  return possibilities.indexOf(value) > -1
}
