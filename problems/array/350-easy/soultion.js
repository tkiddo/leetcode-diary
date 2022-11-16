/**
 * 我的题解：
 * 分别用两个哈希表记录两个数组中每个值出现的次数，然后遍历第一个哈希表，对比次数的大小，取小的
 * 比较笨，要生成两个哈希表
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const count = (nums) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]]) {
        hash[nums[i]]++
      } else {
        hash[nums[i]] = 1
      }
    }
    return hash
  }
  const counter1 = count(nums1)
  const counter2 = count(nums2)
  let result = []
  for (const key in counter1) {
    if (counter1[key] && counter2[key]) {
      const commonCount = counter1[key] < counter2[key] ? counter1[key] : counter2[key]
      result = result.concat(new Array(commonCount).fill(parseInt(key)))
    }
  }
  return result
}

/**
 * 官方题解：
 * 只存一个哈希表，遍历第二个数组，在第一个数组对应的哈希表次数大于0时，添加到结果数组，哈希表中次数减1
 */
/**
 *
 * @param {*} nums1
 * @param {*} nums2
 * @returns
 */
const intersect2 = function (nums1, nums2) {
  const count = (nums) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]]) {
        hash[nums[i]]++
      } else {
        hash[nums[i]] = 1
      }
    }
    return hash
  }
  const counter1 = count(nums1)

  const result = []
  for (let i = 0; i < nums2.length; i++) {
    if (counter1[nums2[i]] > 0) {
      result.push(nums2[i])
      counter1[nums2[i]]--
    }
  }
  return result
}

module.exports = {
  intersect,
  intersect2
}
