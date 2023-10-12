/**
 * @param {number[]} nums
 * @return {number}
 */
const findTheArrayConcVal = function (nums) {
  let result = 0
  if (!nums.length) {
    return result
  }
  let i = 0,
    j = nums.length - 1
  while (i < j) {
    const target = parseInt(`${nums[i]}${nums[j]}`)
    result += target
    i++
    j--
  }
  if (i === j) {
    result += nums[i]
  }
  return result
}

module.exports = findTheArrayConcVal
