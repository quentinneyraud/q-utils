import { preprocessElementsArgument } from '../utils'

/**
 * Set style to a single or a list of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} el - HTML element or an array of HTML elements where the style is applied
 * @param {Object} styles - Styles applied
 */
export default (elements, styles) => {
  elements = preprocessElementsArgument(elements)

  if (!elements) return

  elements.forEach(e => Object.assign(e.style, styles))
}
