/**
 * @typedef {Object} PositionObject
 * @property {number} top - The element's top value
 * @property {number} bottom - The element's bottom value
 * @property {number} left - The element's left value
 * @property {number} right - The element's right value
 * @property {number} width - The element's width value
 * @property {number} height - The element's height value
 * @property {Function} relativeTo - Function to get position relative to an other HTML element
 */

/**
 *
 * @param {HTMLElement} elements - HTML element which you want the position
 *
 * @returns {PositionObject} Object containing all positions infos of the element
 */
export default (elements) => {
  const bounding = elements.getBoundingClientRect()

  return {
    top: bounding.top,
    bottom: bounding.bottom,
    left: bounding.left,
    right: bounding.right,
    width: bounding.width,
    height: bounding.height,
    relativeTo: (relative) => {
      if (relative === 'page') {
        return {
          top: bounding.top + window.pageYOffset,
          bottom: bounding.bottom + window.pageYOffset,
          left: bounding.left + window.pageXOffset,
          right: bounding.right + window.pageXOffset
        }
      } else {
        const relativeBounding = relative.getBoundingClientRect()
        return {
          top: bounding.top - relativeBounding.top,
          bottom: bounding.bottom - relativeBounding.bottom,
          left: bounding.left - relativeBounding.left,
          right: bounding.right - relativeBounding.right
        }
      }
    }
  }
}
