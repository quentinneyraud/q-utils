import { preprocessElementsArgument } from '../utils'

/**
 * Remove a listener from element(s)
 *
 * @param {(HTMLElement|HTMLCollection|Array<HTMLElement>|DOMString)} elements - HTML element or an array of HTML elements where the event is removed
 * @param {(String|Array)} eventName - Event name to remove
 * @param {domEventCallbackType} [cb=null] - C
 */
const removeEvent = (elements, eventName, cb = null) => {
  elements = preprocessElementsArgument(elements)
  if (typeof eventName === 'string') {
    elements.forEach(e => e.removeEventListener(eventName, cb))
  } else if (Array.isArray(eventName)) {
    eventName.forEach(event => {
      removeEvent(elements, event, cb)
    })
  }
}

export default removeEvent
