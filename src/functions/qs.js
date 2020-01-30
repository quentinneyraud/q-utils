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

  if (!parent) return []

  const domCollection = parent.reduce((acc, curr) => {
    if (curr.querySelector(selector)) {
      acc.push(curr.querySelector(selector))
    }

    return acc
  }, [])

  if (parent.length === 1) return domCollection[0]

  return domCollection
}
