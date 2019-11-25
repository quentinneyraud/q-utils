import { preprocessElementsArgument } from '../utils'

/**
 * Remove class to an HTML element or an array of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array|String)} elements - HTML element or an array of HTML elements where the class will be removed
 * @param {String} className - Class name to remove
 */
export default (elements, className = null) => {
  elements = preprocessElementsArgument(elements)
  elements.forEach(currentElement => (className) ? currentElement.classList.remove(className) : currentElement.className = '')
}
