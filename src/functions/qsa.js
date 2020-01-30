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

  if (!parent) return []

  const domCollection = parent.reduce((acc, curr) => {
    if (curr.querySelectorAll(selector)) {
      acc.push(...curr.querySelectorAll(selector))
    }

    return acc
  }, [])

  return domCollection
}
