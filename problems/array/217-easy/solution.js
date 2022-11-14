/**
 * 我的题解：
 * 1. 遍历数组，将数组中的元素作为key，出现的次数作为value存入map中
 * 2. 如果map中已经存在该元素，则返回true
 * 3. 如果遍历结束都没有返回true，则返回false
 */

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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = function (nums) {
  const numsSet = new Set(nums)
  return numsSet.size !== nums.length
}

module.exports = {
  containsDuplicate,
  containsDuplicate2,
}
