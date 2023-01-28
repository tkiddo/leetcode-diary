/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort()
  const path = [],
    result = [],
    used = []
  const dfs = (list, used) => {
    if (path.length === list.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < list.length; i++) {
      if (used[i]) {
        continue
      }
      if (i > 0 && list[i] === list[i - 1] && !used[i - 1]) {
        continue
      }
      path.push(list[i])
      used[i] = true
      dfs(list, used)
      path.pop()
      used[i] = false
    }
  }
  dfs(nums, used)
  return result
}

module.exports = permuteUnique
