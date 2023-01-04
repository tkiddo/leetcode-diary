/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
  const compare = (a, b) => {
    const s1 = a + '' + b
    const s2 = b + '' + a
    if (s1 < s2) {
      return -1
    } else if (s1 > s2) {
      return 1
    } else {
      return 0
    }
  }
  const arr = nums.sort(compare)
  return arr.join('')
}

module.exports = {
  minNumber,
}
