import { preprocessElementsArgument } from '../utils'

/**
 * Select the first or all HTML elements which match with the className in parent
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} parent - HTML parent element
 * @param {String} className - class name to find
 * @param {Boolean} [all=false] - get all elements correponding in an array
 *
 * @returns {(Array|HTMLElement|null)} array of elements corresponding to class name or null
 */
export default (parent, className, all = false) => {
  parent = preprocessElementsArgument(parent)

  const domCollection = parent[0].getElementsByClassName(className)

  if (domCollection.length === 0) return null

  return all ? Array.from(domCollection) : domCollection[0]
}
