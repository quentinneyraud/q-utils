import { preprocessElementsArgument } from '../utils'

/**
 * Get all datas from a form element
 *
 * @param {HTMLFormElement} form - The form which will be serialized
 *
 * @returns {Object} Object containing all input values
 */
export default form => {
  form = preprocessElementsArgument(form)

  if (!form) return null

  return Object.values(form[0].elements).reduce((obj, field) => {
    // Submit
    if (field.type === 'submit') return obj

    // File
    if (field.type === 'file') {
      obj[field.name] = Array.from(field.files)

      return obj
    }

    // Checkbox
    if (field.type === 'checkbox') {
      obj[field.name] = field.checked

      return obj
    }

    // Number
    if (field.type === 'number') {
      if (field.value.length === 0) {
        obj[field.name] = null
      } else {
        obj[field.name] = parseFloat(field.value)
      }

      return obj
    }

    // Select
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
