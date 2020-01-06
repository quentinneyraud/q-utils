import { preprocessElementsArgument } from '../utils'

/**
 * Select the first HTML element which match with selector in parent
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} parent - parent element
 * @param {String} selector - selector
 *
 * @returns {(HTMLElement|null)} element corresponding to selector or null
 */
export default (parent, selector) => {
  parent = preprocessElementsArgument(parent)

  return parent[0].querySelector(selector)
}
