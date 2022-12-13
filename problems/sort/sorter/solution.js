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

// 归并排序
// 时间复杂度：O(nlogn)
function mergeSort(nums) {
  const merge = (arr1, arr2) => {
    let index1 = 0,
      index2 = 0,
      result = []
    while (index1 < arr1.length && index2 < arr2.length) {
      if (arr1[index1] < arr2[index2]) {
        result.push(arr1[index1++])
      } else {
        result.push(arr2[index2++])
      }
    }
    while (index1 < arr1.length) {
      result.push(arr1[index1++])
    }
    while (index2 < arr2.length) {
      result.push(arr2[index2++])
    }
    return result
  }
  const split = (arr) => {
    if (arr.length <= 1) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    return merge(split(left), split(right))
  }
  return split(nums)
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const base = arr.splice(0, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), base, ...quickSort(right)]
}

module.exports = {
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
}
