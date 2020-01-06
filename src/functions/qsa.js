import { preprocessElementsArgument } from '../utils'

/**
 * Select the all HTML elements which match with selector in parent
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} parent - parent element
 * @param {String} selector - selector
 *
 * @returns {(Array|null)} array of elements corresponding to selector or null
 */
export default (parent, selector) => {
  parent = preprocessElementsArgument(parent)
  return Array.from(parent[0].querySelectorAll(selector))
}
