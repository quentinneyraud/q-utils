import { preprocessElementsArgument } from '../utils'

/**
 * Select the all HTML elements which match with className in parent
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} parent - parent element
 * @param {String} className - class name
 *
 * @returns {(Array|null)} array of elements corresponding to class name or null
 */
export default (parent, className) => {
  parent = preprocessElementsArgument(parent)

  if (!parent) return null

  const domCollection = parent.reduce((acc, curr) => {
    acc.push(...curr.getElementsByClassName(className))

    return acc
  }, [])

  return (domCollection.length === 0) ? null : domCollection
}
