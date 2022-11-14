/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const numsMap = {}
  let result = false
  for (let i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]]) {
      result = true
      break
    } else {
      numsMap[nums[i]] = 1
    }
  }
  return result
}

module.exports = {
  containsDuplicate,
}
