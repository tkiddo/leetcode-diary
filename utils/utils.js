const hasSameElements = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  return arr1.every((item) => {
    return arr2.some((item2) => {
      return item.toString() === item2.toString()
    })
  })
}

const list2Array = (list) => {
  const result = []
  while (list) {
    result.push(list.val)
    list = list.next
  }
  return result
}

module.exports = {
  hasSameElements,
  list2Array,
}
