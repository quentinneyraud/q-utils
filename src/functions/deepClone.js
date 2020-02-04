const cloneObject = obj => {
  const clone = {}

  Object.entries(obj)
    .forEach(([key, value]) => {
      if (value != null && typeof value === 'object') {
        clone[key] = cloneObject(value)
      } else {
        clone[key] = value
      }
    })
  return clone
}

export default cloneObject
