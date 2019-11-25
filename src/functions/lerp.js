/**
 * Lerp
 *
 * @param {Number} value - Value to lerp
 * @param {Number} target - Value targeted
 * @param {Number} coeff - Coefficient between value and target
 */
export default (value, target, coeff) => {
  return value * (1 - coeff) + target * coeff
}
