/**
 * 我的题解：
 * 双指针，0往数组最后放
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let p = 0
  let q = nums.length - 1
  while (p < q) {
    if (nums[p] === 0) {
      nums.push(0)
      q--
      nums.splice(p, 1)
      p--
    }
    p++
  }
}

/**
 * 官方题解：
 * 双指针，非0往前移
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes2 = function (nums) {
  let p = 0
  let q = 0
  while (p < nums.length) {
    if (nums[p] !== 0) {
      let temp = nums[p]
      nums[p] = nums[q]
      nums[q] = temp
      q++
    }
    p++
  }
}

module.exports = {
  moveZeroes,
  moveZeroes2
}
