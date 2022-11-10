/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const keyStatus = {}
  for (let i = 0; i < nums.length; i++) {
    if (keyStatus[nums[i]]) {
      nums.splice(i, 1)
      i--
    } else {
      keyStatus[nums[i]] = true
    }
  }
  return nums.length
}

module.exports = {
  removeDuplicates,
}
