/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums
  this.original = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.original
  return this.nums
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums.map((item) => item)
  const result = []
  while (nums.length > 0) {
    const index = Math.ceil(Math.random() * (nums.length - 1))
    result.push(nums.splice(index, 1))
  }
  this.nums = result
  return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
module.exports = Solution

var obj = new Solution([1, 2, 3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()

console.log(param_1, param_2)
