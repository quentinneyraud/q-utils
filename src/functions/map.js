import clamp from './clamp'

/**
 * Get a mapped number from starting range to the desired range, optionaly clamped
 *
 * @param {Number} value - value to map
 * @param {Number} start1 - Lower edge of the starting range
 * @param {Number} end1 - Upper edge of the starting range
 * @param {Number} start2 - Lower edge of the desired range
 * @param {Number} end2 - Upper edge of the desired range
 * @param {Boolean} clamped - Indicates if the value should be clamped
 */
export default (value, start1, end1, start2, end2, clamped = false) => {
  const mapped = ((value - start1) / (end1 - start1)) * (end2 - start2) + start2
  return (clamped) ? clamp(mapped, start2, end2) : mapped
}
