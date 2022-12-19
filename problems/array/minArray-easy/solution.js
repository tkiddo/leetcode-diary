/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function (numbers) {
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    if (numbers[m] > numbers[r]) {
      l = m + 1
    } else if (numbers[m] < numbers[r]) {
      r = m
    } else {
      r--
    }
  }
  return numbers[l]
}

module.exports = {
  minArray,
}
