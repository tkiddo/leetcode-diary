/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return 0
  }
  const binarySearch = (l, r) => {
    if (l === r && nums[l] !== target) {
      return null
    }
    if (nums[l] === target) {
      return l
    }
    if (nums[r] === target) {
      return r
    }
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] > target) {
      return binarySearch(l, mid - 1 < 0 ? 0 : mid - 1)
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1 > nums.length - 1 ? nums.length - 1 : mid + 1, r)
    } else {
      return mid
    }
  }
  const targetIndex = binarySearch(0, nums.length - 1)
  if (targetIndex === null) {
    return 0
  }
  let count = 1
  for (let i = targetIndex - 1; i >= 0; i--) {
    if (nums[i] === target) {
      count++
    }
  }
  for (let i = targetIndex + 1; i < nums.length; i++) {
    if (nums[i] === target) {
      count++
    }
  }
  return count
}

module.exports = {
  search
}
