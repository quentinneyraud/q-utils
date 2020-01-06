import { preprocessElementsArgument } from '../utils'

/**
 * Add class to an HTML element or an array of HTML elements
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} elements - HTML element or an array of HTML elements where the class will be added
 * @param {(String|Array<String>)} className - Class name to add
 */
export default (elements, className) => {
  elements = preprocessElementsArgument(elements)

  if (typeof className === 'string') {
    className = [className]
  }

  elements.forEach((e) => e.classList.add(...className))
}
