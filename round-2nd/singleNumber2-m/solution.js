/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  const count = new Map()
  nums.forEach((num) => {
    if (count.get(num)) {
      count.set(num, count.get(num) + 1)
    } else {
      count.set(num, 1)
    }
  })
  for (let [key, value] of count.entries()) {
    if (value === 1) {
      return key
    }
  }
}

module.exports = singleNumber
