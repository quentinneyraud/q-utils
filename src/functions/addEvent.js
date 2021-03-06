import { preprocessElementsArgument } from '../utils'

/**
 * Dom events callback
 *
 * @callback domEventCallbackType
 * @param {Object} [e] - event informations
 */

/**
 * Add a listener to element(s)
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} elements - HTML element or an array of HTML elements where the event is added
 * @param {(String|Array<String>)} eventName - Event to add
 * @param {domEventCallbackType} cb
 */
const addEvent = (elements, eventName, cb) => {
  elements = preprocessElementsArgument(elements)

  if (!elements) return

  if (typeof eventName === 'string') {
    elements.forEach(e => e.addEventListener(eventName, cb))
  } else if (Array.isArray(eventName)) {
    eventName.forEach(event => {
      addEvent(elements, event, cb)
    })
  }
}

export default addEvent
