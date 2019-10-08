/**
 * Select the first HTML element which match with selector in parent
 *
 * @param {HTMLElement} parent - parent element
 * @param {String} selector - selector
 *
 * @returns {(HTMLElement|null)} element corresponding to selector or null
 */
export const qs = (parent, selector) => {
  return parent.querySelector(selector)
}

/**
 * Select the all HTML elements which match with selector in parent
 *
 * @param {HTMLElement} parent - parent element
 * @param {String} selector - selector
 *
 * @returns {(Array|null)} array of elements corresponding to selector or null
 */
export const qsa = (parent, selector) => {
  return Array.from(parent.querySelectorAll(selector))
}

/**
 * Select the first or all HTML elements which match with the className in parent
 *
 * @param {HTMLElement} parent - HTML parent element
 * @param {String} className - class name to find
 * @param {Boolean} [all=false] - get all elements correponding in an array
 *
 * @returns {(Array|HTMLElement)} array of elements corresponding to class name or null
 */
export const gebc = (parent, className, all = false) => {
  let domCollection = Array.from(parent.getElementsByClassName(className))

  return (all) ? domCollection : domCollection[0]
}

/**
 * Select the first HTML element which match with the id
 *
 * @param {String} id - id to find
 *
 * @returns {(HTMLElement|null)} HTML element corresponding to id or null
 */
export const gebi = (id) => {
  return document.getElementById(id)
}

/**
 * Log element with id and classes informations
 *
 * @param {HTMLElement} el - HTML element to log
 */
export const logElement = (el) => {
  let name = el.tagName.toLowerCase()

  if (el.id) {
    name += `#${el.id}`
  }

  el.classList.forEach(className => {
    name += `.${className}`
  })

  console.log(name)
}

/**
 * Dom events callback
 *
 * @callback domEventCallbackType
 * @param {Object} [e] - event informations
 */

/**
 * Add a listener to element(s)
 *
 * @param {(Array|HTMLElement)} el - HTML element or an array of HTML elements where the event is added
 * @param {String} eventName - Event to add
 * @param {domEventCallbackType} cb
 */
export const addEvent = (el, eventName, cb) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.addEventListener(eventName, cb))
  } else {
    el.addEventListener(eventName, cb)
  }
}

/**
 * Remove a listener from element(s)
 *
 * @param {(Array|HTMLElement)} el - HTML element or an array of HTML elements where the event is removed
 * @param {String} eventName - Event name to remove
 * @param {domEventCallbackType} [cb=null] - C
 */
export const removeEvent = (el, eventName, cb = null) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.removeEventListener(eventName, cb))
  } else {
    el.removeEventListener(eventName, cb)
  }
}

/**
 * Add class to an HTML element or an array of HTML elements
 *
 * @param {(Array|HTMLElement)} el - HTML element or an array of HTML elements where the class will be added
 * @param {String} className - Class name to add
 */
export const addClass = (el, className) => {
  if (Array.isArray(el)) {
    el.forEach(e => e.classList.add(className))
  } else {
    el.classList.add(className)
  }
}

/**
 * Remove class to an HTML element or an array of HTML elements
 *
 * @param {(Array|HTMLElement)} el - HTML element or an array of HTML elements where the class will be removed
 * @param {String} className - Class name to remove
 */
export const removeClass = (el, className = null) => {
  const rm = (currentElement) => (className) ? currentElement.classList.remove(className) : currentElement.className = ''

  if (Array.isArray(el)) {
    el.forEach(rm)
  } else {
    rm(el)
  }
}

/**
 * Get all datas from a form element
 *
 * @param {HTMLFormElement} form - The form which will be serialized
 *
 * @returns {Object} Object containing all input values
 */
export const serializeForm = (form) => {
  return Object.values(form.elements).reduce((obj, field) => {
    if (field.type === 'submit') return obj

    if (field instanceof window.HTMLSelectElement) {
      if (field.multiple) {
        obj[field.name] = Array.from(field.selectedOptions).reduce((acc, option) => acc.concat(option.value), [])
      } else {
        obj[field.name] = field.selectedOptions[0].value
      }

      return obj
    }

    obj[field.name] = field.value

    return obj
  }, {})
}

/**
 * @typedef {Object} PositionObject
 * @property {number} top - The element's top value
 * @property {number} bottom - The element's bottom value
 * @property {number} left - The element's left value
 * @property {number} right - The element's right value
 * @property {number} width - The element's width value
 * @property {number} height - The element's height value
 * @property {Function} relativeTo - Function to get position relative to an other HTML element
 */

/**
 *
 * @param {HTMLElement} el - HTML element which you want the position
 *
 * @returns {PositionObject} Object containing all positions infos of the element
 */
export const getPos = (el) => {
  const bounding = el.getBoundingClientRect()

  return {
    top: bounding.top,
    bottom: bounding.bottom,
    left: bounding.left,
    right: bounding.right,
    width: bounding.width,
    height: bounding.height,
    relativeTo: (relative) => {
      if (relative === 'page') {
        return {
          top: bounding.top + window.pageYOffset,
          bottom: bounding.bottom + window.pageYOffset,
          left: bounding.left + window.pageXOffset,
          right: bounding.right + window.pageXOffset
        }
      } else {
        const relativeBounding = relative.getBoundingClientRect()
        return {
          top: bounding.top - relativeBounding.top,
          bottom: bounding.bottom - relativeBounding.bottom,
          left: bounding.left - relativeBounding.left,
          right: bounding.right - relativeBounding.right
        }
      }
    }
  }
}

/**
 * Get a clamped value
 *
 * @param {Number} value - Value to clamp
 * @param {Number|null} min - Lower edge of the desired range
 * @param {Number|null} max - Upper edge of the desired range
 */
export const clamp = (value, min, max) => {
  if (min !== undefined && max !== undefined) {
    return Math.min(Math.max(value, min), max)
  } else if (min !== undefined) {
    return Math.max(value, min)
  } else if (max !== undefined) {
    return Math.min(value, max)
  } else {
    return value
  }
}

/**
 * Map a number from starting range to the desired range, can be clamped
 *
 * @param {Number} n - value to map
 * @param {Number} start1 - Lower edge of the starting range
 * @param {Number} stop1 - Upper edge of the starting range
 * @param {Number} start2 - Lower edge of the desired range
 * @param {Number} stop2 - Upper edge of the desired range
 * @param {Boolean} clamped - Indicates if the value should be clamped
 */
export const map = (value, start1, stop1, start2, stop2, clamped = false) => {
  let mapped = ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  return (clamped) ? clamp(mapped, start2, stop2) : mapped
}

/**
 * Lerp
 *
 * @param {Number} value - Value to lerp
 * @param {Number} target - Value targeted
 * @param {Number} coeff - Coefficient between value and target
 */
export const lerp = (value, target, coeff) => {
  return value * (1 - coeff) + target * coeff
}

/**
 * Debounce function
 *
 * @param {Function} callback
 * @param {Number} wait
 */
export const debounce = (callback, wait) => {
  let timeout
  return () => {
    window.clearTimeout(timeout)
    timeout = setTimeout(() => callback(), wait)
  }
}

/**
 * Check that the object contains all properties passed in arguments
 *
 * @param {Object} obj - Object to check
 * @param {Array} properties - List of properties that the object has to contain
 */
export const hasProperties = (obj, properties) => {
  return properties.every(property => obj.hasOwnProperty(property))
}

/**
 * Check that the value is one of the values passed in arguments
 *
 * @param {any} value - Value to check
 * @param {Array} possibilities - List of values that the value should be equal
 */
export const isOneOf = (value, possibilities) => {
  return possibilities.indexOf(value) > -1
}

/**
 * Set style to an HTML element or an array of HTML elements
 *
 * @param {(Array|HTMLElement)} el - HTML element or an array of HTML elements where the style is applied
 * @param {Object} styles - Styles applied
 */
export const setStyle = (el, styles) => {
  if (Array.isArray(el)) {
    el.forEach(e => Object.assign(e.style, styles))
  } else {
    Object.assign(el.style, styles)
  }
}
