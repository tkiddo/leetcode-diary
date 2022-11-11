/**
 * 我的解法：
 * 用一个对象保存目标值是否出现过，如果出现过，就去除当前项
 */
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

/**
 * 官方解法：
 * 因为时排序好的，所以相同的元素在一起，双指针判断
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function (nums) {
  let p = 0
  let q = p + 1
  while (q < nums.length) {
    if (nums[p] !== nums[q]) {
      nums[p + 1] = nums[q]
      p++
    }
    q++
  }
  return p + 1
}

module.exports = {
  removeDuplicates,
  removeDuplicates2,
}
