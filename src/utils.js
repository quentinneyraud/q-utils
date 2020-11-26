/**
 * Transform an HTMLCollection, HTMLElement, DOMString into an Array of HTMLElement
 *
 * @param {(HTMLElement|HTMLCollection|Array|DOMString)} elements
 *
 * @returns {Array<HTMLElement>} elements
 */
export const preprocessElementsArgument = elements => {
  let elementsArray = null

  if (typeof elements === 'string') {
    elementsArray = Array.from(document.querySelectorAll(elements))
  } else if (elements instanceof window.HTMLCollection) {
    elementsArray = Array.from(elements)
  } else if (elements instanceof window.HTMLElement || elements === window || elements === document) {
    elementsArray = [elements]
  } else if (Array.isArray(elements)) {
    elementsArray = elements
  }

  if (!elementsArray || elementsArray.length === 0) return null

  return elementsArray
}
