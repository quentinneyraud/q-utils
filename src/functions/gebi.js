/**
 * Select the first HTML element which match with the id
 *
 * @param {String} id - id to find
 *
 * @returns {(HTMLElement|null)} HTML element corresponding to id or null
 */
export default (id) => {
  return document.getElementById(id)
}
