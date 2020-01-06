/**
 * Transform an HTMLCollection, HTMLElement, DOMString into an Array of HTMLElement
 *
 * @param {(HTMLElement|HTMLCollection|Array|DOMString)} elements
 *
 * @returns {Array<HTMLElement>} elements
 */
export const preprocessElementsArgument = (elements) => {
  if (typeof elements === 'string') {
    return Array.from(document.querySelectorAll(elements))
  } else if (elements instanceof window.HTMLCollection) {
    return Array.from(elements)
  } else if (elements instanceof window.HTMLElement) {
    return [elements]
  }

  return elements
}
