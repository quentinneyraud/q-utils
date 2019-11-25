/**
 * Get a clamped value
 *
 * @param {Number} value - Value to clamp
 * @param {Number|null} min - Lower edge of the desired range
 * @param {Number|null} max - Upper edge of the desired range
 */
export default (value, min, max) => {
  if (min !== undefined && max !== undefined) {
    return Math.min(Math.max(value, min), max)
  } else if (min !== undefined) {
    return Math.max(value, min)
  } else if (max !== undefined) {
    return Math.min(value, max)
  } else {
    return value
  }
}
