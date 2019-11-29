/**
 * Check that the object contains all properties passed in arguments
 *
 * @param {Object} object - Object to check
 * @param {Array} properties - List of properties that the object has to contain
 */
export default (object, properties) => {
  return properties.every(property => object.hasOwnProperty(property))
}
