import { preprocessElementsArgument } from '../utils'

/**
 * Set style to an HTML element or an array of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} el - HTML element or an array of HTML elements where the style is applied
 * @param {Object} styles - Styles applied
 */
export default (elements, styles) => {
  elements = preprocessElementsArgument(elements)
  elements.forEach(e => Object.assign(e.style, styles))
}
