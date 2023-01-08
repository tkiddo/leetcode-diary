var exchange = function (nums) {
  let l = 0,
    r = nums.length - 1
  while (l < r) {
    while (l < r && nums[l] % 2 !== 0) {
      console.log(l)
      l++
    }
    while (l < r && nums[r] % 2 === 0) {
      r--
    }
    console.log(l, r)
    if (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      l++
      r--
    }
  }
  return nums
}

const nums = [1, 3, 5, 7]
console.log('start')
console.log(exchange(nums))
