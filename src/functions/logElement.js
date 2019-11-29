import { preprocessElementsArgument } from '../utils'

/**
 * Log element(s) with id and classes informations
 *
 * @param {(HTMLElement|HTMLCollection|Array|String)} elements - HTML elements to log
 */
export default (elements) => {
  elements = preprocessElementsArgument(elements)

  elements.forEach(element => {
    let name = element.tagName.toLowerCase()

    if (element.id) {
      name += `#${element.id}`
    }

    element.classList.forEach(className => {
      name += `.${className}`
    })

    console.log(name)
  })
}
