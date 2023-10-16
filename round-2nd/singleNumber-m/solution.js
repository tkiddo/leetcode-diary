/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  const count = new Map()
  nums.forEach((num) => {
    if (count.get(num)) {
      count.delete(num)
    } else {
      count.set(num, true)
    }
  })
  const result = []
  for (let key of count.keys()) {
    result.push(key)
  }
  return result
}

module.exports = singleNumber
