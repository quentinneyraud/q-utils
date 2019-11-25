/**
 * Get all datas from a form element
 *
 * @param {HTMLFormElement} form - The form which will be serialized
 *
 * @returns {Object} Object containing all input values
 */
export default (form) => {
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
