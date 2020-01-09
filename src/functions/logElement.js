import { preprocessElementsArgument } from '../utils'

const LOG_PAD = 25

const createName = (tag, id = null, classes = []) => {
  let name = tag

  if (id) {
    name += `#${id}`
  }

  classes.forEach(className => {
    name += `.${className}`
  })

  return name
}

/**
 * Log element(s) with tag, id, classes and dataset informations
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} elements - HTML elements to log
 * @param {Boolean=false} collapsed - Collapse log
 */
export default (elements, collapsed) => {
  elements = preprocessElementsArgument(elements)

  const style = 'font-size:1.2em;font-weight:800'

  elements.forEach(element => {
    // Get all attributes
    const tag = element.tagName.toLowerCase()
    const id = element.id
    const classes = Array.from(element.classList)
    const dataset = element.dataset

    // Open group with a brief name
    const name = createName(tag, id, classes)
    if (collapsed) {
      console.groupCollapsed(name)
    } else {
      console.group(name)
    }

    // Log all attributes
    console.log('%celement'.padEnd(23, ' '), style, element)
    console.log('%ctag'.padEnd(LOG_PAD, ' '), style, tag)
    if (id) console.log('%cid'.padEnd(LOG_PAD, ' '), style, id)
    if (classes.length > 0) console.log('%cclasses'.padEnd(LOG_PAD, ' '), style, classes)
    if (Object.keys(dataset).length > 0) console.log('%cdataset'.padEnd(LOG_PAD, ' '), style, dataset)

    // Close group
    console.groupEnd()
  })
}
