const hasSameElements = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  return arr1.every((item) => {
    return arr2.some((item2) => {
      return item.toString() === item2.toString()
    })
  })
}

module.exports = {
  hasSameElements,
}
