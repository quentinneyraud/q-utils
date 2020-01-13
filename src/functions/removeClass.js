import { preprocessElementsArgument } from '../utils'

/**
 * Remove class to an HTML element or an array of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} elements - HTML element or an array of HTML elements where the class will be removed
 * @param {(String|Array<String>)} className - Class name to remove
 */
export default (elements, className = null) => {
  elements = preprocessElementsArgument(elements)

  if (!elements) return

  if (typeof className === 'string') {
    className = [className]
  }

  elements.forEach(currentElement => className ? currentElement.classList.remove(...className) : currentElement.className = '')
}
