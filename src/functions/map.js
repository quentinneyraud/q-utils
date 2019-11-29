import clamp from './clamp'

/**
 * Map a number from starting range to the desired range, can be clamped
 *
 * @param {Number} n - value to map
 * @param {Number} start1 - Lower edge of the starting range
 * @param {Number} stop1 - Upper edge of the starting range
 * @param {Number} start2 - Lower edge of the desired range
 * @param {Number} stop2 - Upper edge of the desired range
 * @param {Boolean} clamped - Indicates if the value should be clamped
 */
export default (value, start1, stop1, start2, stop2, clamped = false) => {
  let mapped = ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  return (clamped) ? clamp(mapped, start2, stop2) : mapped
}
