/**
 * 我的解法：
 * 遍历数组，把次数存到哈希表，遍历哈希表，找到次数为1的key，转换成数字即可
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++
    } else {
      hash[nums[i]] = 1
    }
  }
  let result = null
  for (const key in hash) {
    if (hash[key] === 1) {
      result = key
      break
    }
  }
  return parseInt(result)
}

/**
 * 以上解法不满足常数存储空间。可以使用位运算，需要再去了解
 */

module.exports = {
  singleNumber
}
