/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (first === second) {
    return true
  }
  const al = first.length,
    bl = second.length
  if (Math.abs(al - bl) > 1) {
    return false
  }

  let edited = false,
    i = 0,
    j = 0

  while (i < first.length) {
    if (first[i] !== second[j]) {
      if (edited) {
        return false
      }
      edited = true
      if (al === bl) {
        i++
        j++
      } else if (al < bl) {
        j++
      } else {
        i++
      }
    } else {
      i++
      j++
    }
  }
  return true
}

module.exports = oneEditAway
