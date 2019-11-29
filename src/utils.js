export const preprocessElementsArgument = (elements) => {
  if (typeof elements === 'string') {
    return Array.from(document.querySelectorAll(elements))
  } else if (elements instanceof window.HTMLCollection) {
    return Array.from(elements)
  } else if (elements instanceof window.HTMLElement) {
    return [elements]
  }

  return elements
}
