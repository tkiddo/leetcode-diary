/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const dfs = (path, used) => {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      dfs(path, used)
      path.pop()
      used[i] = false
    }
  }
  dfs([], [])
  return result
}

module.exports = {
  permute,
}
