/**
 * 我的题解：
 * 两层循环，想加得目标值
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * 我的题解2:
 * 题解1没有满足算法复杂度小于O（n2）。哈希表存储剩余值为key，当前index为value，循环时，把nums[i]当剩余值，则对应的value就是原来值的index
 */
const twoSum2 = function (nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      return [hash[nums[i]], i]
    } else {
      const rest = target - nums[i]
      hash[rest] = i
    }
  }
}

module.exports = {
  twoSum,
  twoSum2
}
