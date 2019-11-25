import { preprocessElementsArgument } from '../utils'

/**
 * Add class to an HTML element or an array of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array|String)} elements - HTML element or an array of HTML elements where the class will be added
 * @param {String} className - Class name to add
 */
export default (elements, className) => {
  elements = preprocessElementsArgument(elements)
  elements.forEach(e => e.classList.add(className))
}
