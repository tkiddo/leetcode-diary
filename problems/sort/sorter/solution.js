// 冒泡排序
// 时间复杂度：O(n^2)
function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums
}

// 选择排序
// 时间复杂度：O(n^2)
function selectionSort(nums) {
  for (let j = nums.length - 1; j >= 0; j--) {
    let maxIndex = 0
    for (let i = 1; i <= j; i++) {
      if (nums[i] > nums[maxIndex]) {
        maxIndex = i
      }
    }
    let temp = nums[maxIndex]
    nums[maxIndex] = nums[j]
    nums[j] = temp
  }
  return nums
}

module.exports = {
  bubbleSort,
  selectionSort,
}
